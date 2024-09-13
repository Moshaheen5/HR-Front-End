import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';
@Component({
  selector: 'app-add-user1',
  standalone: true,
  imports: [FormsModule,SidebarComponent],
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
