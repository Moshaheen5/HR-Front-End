import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Employee {
  id: number;
  name: string;
  department: {
    id: number;
    department_name: string;
  };
}
export interface AttendanceResponse{
  id: number;
  employee_id: number;
  weekend_id: number;
  holiday_id: number;
  status: string;
  check_in: string;
  check_out: string;
  date: Date | undefined;
  hours: any;
  created_at: string;
  updated_at: string;
  employee: Employee; 

}
@Injectable({
  providedIn: 'root'
})

export class AttendanceService {
  constructor(private httpClient:HttpClient) { }
  getList(){
    return this.httpClient.get(`http://127.0.0.1:8000/api/attendance`);

  }
  getEmployees(){
    return this.httpClient.get(`http://127.0.0.1:8000/api/employees`);
  }
  submitAttendance(inputs:any){
   return this.httpClient.post(`http://127.0.0.1:8000/api/attendance`,inputs);
  }
}
