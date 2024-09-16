import { AttendanceService } from './../../Services/attendnace/attendance.service';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from "../loader/loader.component";

@Component({
  selector: 'app-add-attendance',
  standalone: true,
  templateUrl: './add-attendance.component.html',
  imports: [RouterModule, CommonModule, FormsModule, LoaderComponent],
  styleUrl: './add-attendance.component.css',
})
export class AddAttendanceComponent {
  employees:any[]=[];
  selectedEmployeeId: string = '';  
  attedanceTime: string = '';  
  departureTime: string = ''; 
  attendanceDate: Date | undefined;  
  errors: any = {};   
  isLoading:boolean=false;
  loadingTitle:string='Loading';


  constructor(private attendanceService: AttendanceService) {}

ngOnInit(){
  this.loadEmployees();
}
loadEmployees(){
  this.isLoading=true;
  this.attendanceService.getEmployees()
    .subscribe({
      next: (em:any) => {
        this.employees =em;
        this.isLoading=false;
       },
      error: (err:any) => {
        this.errors=err.error.errors ;
        this.isLoading=false;
        console.log(err.error.errors,'errors');}
        
    });
  
}


submitAttendance() {
  this.isLoading=true;
  this.loadingTitle='saving';
  var inputs = {
    employee_id: this.selectedEmployeeId,
    check_in: this.attedanceTime,
    check_out: this.departureTime,
    date: this.attendanceDate,
  };

  this.attendanceService.submitAttendance(inputs).subscribe({
    next: (res: any) => {
      console.log(res, 'response');
      
      alert(res.message);
      this.selectedEmployeeId='';
      this.attedanceTime='';
      this.departureTime='';
      this.attendanceDate=new Date();
      
      this.isLoading=false;


    },
    error: (er: any) => {
      
      this.errors = er.error.errors; 
      this.isLoading=false;
      console.log(er.error.errors, 'errors');
    }
  });
}
 
  
}
