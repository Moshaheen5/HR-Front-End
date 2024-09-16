import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-admin',
  standalone: true,
  imports: [RouterModule,
    CommonModule,MatInputModule,FormsModule,MatSelectModule
  ],
  templateUrl: './edit-admin.component.html',
  styleUrl: './edit-admin.component.css'
})
export class EditAdminComponent {
submituser1() {
throw new Error('Method not implemented.');
}
formsubmit() {
throw new Error('Method not implemented.');
}
  fullname!:string
  privileges!:string
  username!:string
  email!:string
  password!:string
  groupid!:number
}
