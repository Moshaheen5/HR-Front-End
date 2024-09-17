
import { Component, OnInit } from '@angular/core';
import { HolidayService } from '../../services/holiday.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-add-holiday',
  templateUrl: './add-holiday.component.html',
  styleUrl: './add-holiday.component.css'
})



export class AddHolidayComponent implements OnInit {
  holidays: any[] = [];
  holidayName: string = '';
  holidayDate: string = '';
  editingHoliday: any = null;  // Store the holiday being edited

  constructor(private holidayService: HolidayService) {}

  ngOnInit() {
    this.loadHolidays();
  }

  // Load holidays from the server
  loadHolidays() {
    this.holidayService.getHolidays().subscribe(
      (response) => {
        this.holidays = response.data;
      },
      (error) => {
        console.error('Error fetching holidays', error);
      }
    );
  }

  // Add a new holiday or update an existing holiday
  addHoliday() {
    if (this.editingHoliday) {
      // Edit existing holiday
      const updatedHoliday = { id: this.editingHoliday.id, name: this.holidayName, date: this.holidayDate };
      this.holidayService.updateHoliday(updatedHoliday).subscribe(
        (response:any) => {
          this.loadHolidays();  // Reload the holiday list
          this.clearForm();
        },
        (error:any) => {
          console.error('Error updating holiday', error);
        }
      );
    } else {
      // Add new holiday
      const newHoliday = { name: this.holidayName, date: this.holidayDate };
      this.holidayService.addHoliday(newHoliday).subscribe(
        (response) => {
          this.loadHolidays();  // Reload the holiday list
          this.clearForm();
        },
        (error) => {
          console.error('Error adding holiday', error);
        }
      );
    }
  }

  // Edit holiday - populate form with existing data
  editHoliday(holiday: any) {
    this.holidayName = holiday.name;
    this.holidayDate = holiday.date;
    this.editingHoliday = holiday;
  }

  // Delete holiday
  deleteHoliday(holidayId: number) {
    this.holidayService.deleteHoliday(holidayId).subscribe(
      (response:any) => {
        this.loadHolidays();  // Reload the holiday list
      },
      (error:any) => {
        console.error('Error deleting holiday', error);
      }
    );
  }

  // Clear the form
  clearForm() {
    this.holidayName = '';
    this.holidayDate = '';
    this.editingHoliday = null;
  }
}
