import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-general-settings',
  standalone: true,
  imports: [],
  templateUrl: './general-settings.component.html',
  styleUrl: './general-settings.component.css'
})
export class GeneralSettingsComponent implements OnInit {
  logoSrc:string='./assets/images/pioneerslogo(1).png';

  form: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      bonus: [null, Validators.required],
      deduction: [null, Validators.required],
      weekendDay1: ['', Validators.required],
      weekendDay2: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      // Send the form data to the backend
      this.http.post('/api/save-settings', this.form.value).subscribe(
        (response) => {
          console.log('Data saved successfully!', response);
        },
        (error) => {
          console.error('Error saving data', error);
        }
      );
    }
  }
}