import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export interface adminResponse{
  id:number;
  fullname:string;
  email:string;
  username:string;
  privileges?: any[]; 
  group_id:number;


}
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  getGroup(){
    return this.httpClient.get(`http://127.0.0.1:8000/api/group`)
  }
  // getPrivileges(){
  //   return this.httpClient.get(`http://127.0.0.1:8000/api/privileges`);

  // }
  constructor(private httpClient: HttpClient) { }
  setAdmin(inputs:any){
    return this.httpClient.post(`http://127.0.0.1:8000/api/users`,inputs);
  
  }
  getAdmins(){
    return this.httpClient.get(`http://127.0.0.1:8000/api/users`);
  }
}
