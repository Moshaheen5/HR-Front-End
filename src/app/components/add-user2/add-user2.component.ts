import { EmployeeService } from './../../Services/emloyee/employee.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-user2',
  standalone: true,
  imports: [
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    CommonModule,
    RouterModule

  ],
  templateUrl: './add-user2.component.html',
  styleUrl: './add-user2.component.css'
})
export class AddUser2Component {

logoSrc:string='./assets/images/pioneerslogo(1).png';


name:String='';
phone:string='';
salary:string='';
hire_date:Date | undefined;
ssn:string='';
address:string='';
department_id:string='';
gender: any='';
doa:Date | undefined;
departure:string='';

errors:any=[];
departments:any[]=[];
constructor(private employeeService:EmployeeService){}
ngOnInit(){
  this.loadDepartments();
}
loadDepartments(){
  this.employeeService.getdepartments()
  .subscribe({
    next: (dep:any)=>{
      console.log(dep);
      
      this.departments =dep.data;
    },
    error: (er:any)=>{
      this.errors=er.error.errors;
      console.log(er.error.errors,'errors');
    },
  })
}
formSubmit(){
  var inputs={
    'name' : this.name,
    'phone': this.phone,
    'salary':this.salary,
    'hire_date':this.hire_date,
    'ssn':this.ssn,
    'address':this.address,
    'department_id':this.department_id,
    'gender':this.gender,
    'doa':this.doa,
  }
  this.employeeService.setEmployees(inputs).subscribe({
    next: (res:any)=>{
      console.log(res,'response');
      alert(res.message);
      this.name='';
      this.department_id='';
      this.phone='';
      this.salary='';
      this.ssn='';
      this.address='';
      this.doa=new Date();
      this.hire_date=new Date();
      this.gender='';
    },
    error: (er:any)=>{
      this.errors=er.error.errors;
      console.log(er.error.errors,'errors'); 
      
    
    }
  });
 
};
 



}
