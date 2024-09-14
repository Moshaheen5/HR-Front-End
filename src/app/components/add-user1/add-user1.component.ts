import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';


import { HttpClient } from '@angular/common/http';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-add-user1',
  standalone: true,
  imports: [MatFormField,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    NgStyle
  ],
  templateUrl: './add-user1.component.html',
  styleUrl: './add-user1.component.css'
})
export class AddUser1Component {
  logoSrc:string='./assets/images/pioneerslogo(1).png';
  user = {
    fullname: '',
    email: '',
    username: '',
    password: '',
    group: ''
  };

  constructor(private http: HttpClient) {}

  onSubmit() {
    if (this.user.fullname && this.user.email && this.user.username && this.user.password && this.user.group) {
      // Send the data to Laravel API
      this.http.post('http://localhost:8000/api/register', this.user)
        .subscribe(response => {
          console.log('User registered successfully', response);
        }, error => {
          console.error('Error occurred during registration', error);
        });
    }
  }
}
