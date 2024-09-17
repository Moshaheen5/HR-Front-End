import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface employeeResponse{
  id:number;
  name:String;
  phone:string;
  salary:string;
  hire_date:Date | undefined;
  ssn:string;
  address:string;
  department_id:string;
  gender: any;
  doa:Date | undefined;
 
  }
@Injectable({
  providedIn: 'root'
})

export class EmployeeService {
  
  constructor(private httpClient:HttpClient) { }
  getdepartments(){
    return this.httpClient.get(`http://127.0.0.1:8000/api/department`);
  }
  setEmployees(inputs:any){
    return this.httpClient.post(`http://127.0.0.1:8000/api/employees`,inputs);
  }
  getEmployees(){
    return this.httpClient.get(`http://127.0.0.1:8000/api/employees`);
  }
}
