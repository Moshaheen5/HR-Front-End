import { Component , ViewChild,AfterViewInit} from '@angular/core';
import { AttendanceResponse, AttendanceService } from '../../Services/attendnace/attendance.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatTableDataSource, MatTableModule}from '@angular/material/table'
import { MatPaginatorModule,MatPaginator } from '@angular/material/paginator';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from "../loader/loader.component";


@Component({
  selector: 'app-attenedance-departure',
  standalone: true,
  imports: [RouterModule, MatPaginatorModule, MatTableModule, CommonModule, MatCardModule, FontAwesomeModule, LoaderComponent],
  templateUrl: './attenedance-departure.component.html',
  styleUrl: './attenedance-departure.component.css'
})
export class AttenedanceDepartureComponent {
  attendance!:AttendanceResponse[];
  dataSource = new MatTableDataSource<AttendanceResponse>([]);
  onboard:any='./assets/images/onboard(1).png';
  isLoading: boolean=false;
  displayedColumns: string[] = ['id','employee_name', 'department_name', 'check_in', 'check_out','date','hours', 'status'];
  employeeName: string = '';
  month: number = new Date().getMonth() + 1; 
  year: number = new Date().getFullYear(); 

  employees: any[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  constructor (private attendanceService : AttendanceService,private http: HttpClient){}
  searchEmployee() {
    const params = {
      name: this.employeeName,
      month: this.month,
      year: this.year
    };

    this.http.get<any[]>('/api/employee/search', { params })
      .subscribe(response => {
        this.employees = response;
      }, error => {
        console.error(error);
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  getAttendnaceList(){
    this.isLoading=true;
    this.attendanceService.getList().subscribe((res:any)=>{
        // console.log(res);
        this.attendance = res.data;
        this.dataSource.data = this.attendance;
        this.isLoading=false;
      });
  }

  

  fullText: string = 'Attendance and departure';
  displayedText: string = '';
  typingSpeed: number = 100; // Speed of typing in milliseconds

  ngOnInit(): void {
    this.typeWriter();
    this.getAttendnaceList();

  }

  typeWriter(): void {
    let i = 0;
    const type = () => {
      if (i < this.fullText.length) {
        this.displayedText += this.fullText.charAt(i);
        i++;
        setTimeout(type, this.typingSpeed); // Adjust typing speed here
      }
    };
    type();
  }
  printPage()
  {
    window.print();
  }
}
