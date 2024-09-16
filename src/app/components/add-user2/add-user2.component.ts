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


gender!: any;
name!:String;
birthdate!:string;
address!:string;
nationalId!:string;
phone!:string;
contractDate!:string;
salary!:string;
nationality!:string;
attendance!:string;
departure!:string;
formSubmit(){
  var input={
    'name' : this.name,
    'phone': this.phone,
    'salary':this.salary,
    'hire_date':this.contractDate,
    'ssn':this.nationalId,
    'address':this.address,
    'gender':this.gender,
    'doa':this.attendance,
  }
};
 

  ngOnInit(): void {
    this.typeWriter();
  }

  typeWriter(): void {
    let i = 0;
   
  }
}
