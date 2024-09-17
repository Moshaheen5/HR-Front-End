import { employeeResponse, EmployeeService } from './../../Services/emloyee/employee.service';
import { CommonModule } from '@angular/common';
import { Component,ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule,MatPaginator } from '@angular/material/paginator';
import { MatTableModule,MatTableDataSource } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [LoaderComponent,CommonModule,RouterModule,MatPaginatorModule,MatTableModule,MatCardModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent {
  constructor(private employeeServise: EmployeeService){

  }  
  employees!:employeeResponse[];
  dataSource=new MatTableDataSource<employeeResponse>([]);
  displayedColumns: string[] = ['id','name', 'phone','salary','hire_date','ssn','address','department_name','gender','doa'];
  onboard:any='./assets/images/onboard(1).png';
  isLoading: boolean=false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(){
    this.getEmployeeList();
  }
  getEmployeeList(){
    this.isLoading=true;
    this.employeeServise.getEmployees().subscribe((result:any)=>{
      console.log(result);
      this.isLoading=false;
      this.employees=result.data;
      this.dataSource.data=this.employees;
    })
  }
  printPage()
  {
    window.print();
  }



}
