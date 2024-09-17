import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HolidayService {

  private apiUrl = 'http://127.0.0.1:8000/api/holidays';  // Laravel API endpoint

  constructor(private http: HttpClient) {}

  // Get the list of holidays
  getHolidays(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  // Add a new holiday
  addHoliday(holiday: { name: string; date: string }): Observable<any> {
    return this.http.post<any>(this.apiUrl, holiday);
  }

  // Update an existing holiday
  updateHoliday(holiday: { id: number; name: string; date: string }): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${holiday.id}`, holiday);
  }

  // Delete a holiday
  deleteHoliday(holidayId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${holidayId}`);
  }
}
