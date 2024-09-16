import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-group',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css']
})
export class AddGroupComponent {
  groupPriviliages: FormGroup;
  pages: string[] = ['employees', 'General Settings', 'Attendance and Departure', 'Salaries Report'];

  constructor() {
    this.groupPriviliages = new FormGroup({
      groupName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      permissions: new FormArray(this.pages.map(page => this.createPermissionGroup(page)))
    });
  }

  get groupName() {
    return this.groupPriviliages.get('groupName');
  }

  get permissions() {
    return this.groupPriviliages.get('permissions') as FormArray;
  }

  createPermissionGroup(page: string): FormGroup {
    return new FormGroup({
      page: new FormControl(page),
      add: new FormControl(false),
      remove: new FormControl(false),
      update: new FormControl(false),
      show: new FormControl(false),
    });
  }
  toggleSelectAll(event: Event, index: number) {
    const checkbox = event.target as HTMLInputElement;
    const formGroup = this.permissions.at(index) as FormGroup;
    const isChecked = checkbox.checked;
    ['add', 'remove', 'update', 'show'].forEach(action => {
      formGroup.get(action)?.setValue(isChecked);
    });
  }
  sendData() {
    console.log(this.groupPriviliages.value);
  }
}
