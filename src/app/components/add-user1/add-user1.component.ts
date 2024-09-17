import { AdminService } from './../../Services/Admin/admin.service';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule, NgStyle } from '@angular/common';
import { group } from '@angular/animations';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-add-user1',
  standalone: true,
  imports: [MatFormField,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './add-user1.component.html',
  styleUrl: './add-user1.component.css'
})
export class AddUser1Component {

constructor(private adminService:AdminService){}
  // declare inputs

fullname:string='';
username:string='';
email:string='';
password:string='';
errors:any=[];
group_id:number=0;
privileges:any[]=[];
groups:any[]=[];
isLoadig:boolean=false;
loadingtitle='loading';
ngOnInit(){
this.loadGroups();
this.typeWriter();
}  
loadGroups(){
  this.adminService.getGroup().subscribe((res:any)=>{
    console.log('API Response:', res);

   this.groups=res.groups || [];
   
  // Map the privileges
  this.privileges = this.groups.flatMap((group: any) => group.privileges || []); // Use empty array if undefined
    console.log('Privileges:', this.privileges);
  })
}

  formsubmit() {
    
    var inputs ={

      fullname : this.fullname,
      group_id : this.group_id,
      username : this.username,
      email : this.email,
      password : this.password,
    }


  logoSrc:string='./assets/images/pioneerslogo(1).png';


    this.adminService.setAdmin(inputs).subscribe({
      next: (res:any)=>{
        console.log(res);    
        alert(res.message);
        this.fullname='';
        this.username='';
        this.email='';
        this.password='';
        this.group_id=0;
       
      },
      error: (er)=>{
        console.log('error log',er);
        
        this.errors=er.error.errors;
     
      }
    });
    

}



submituser1() {

}
  logoSrc:string='./assets/images/pioneerslogo(1).png';
  fullText: string = 'New Admin';
  displayedText: string = '';
  typingSpeed: number = 100; // Speed of typing in milliseconds

 
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

  
}