

import { routes } from './app.routes';

import { GeneralSettingsComponent } from './components/general-settings/general-settings.component';

import { AddHolidayComponent } from './components/add-holiday/add-holiday.component';



import { Component, computed, signal } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SalaryReportComponent } from './components/salary-report/salary-report.component';
import { AttenedanceDepartureComponent } from "./components/attenedance-departure/attenedance-departure.component";
import { EditAttendaceComponent } from "./components/edit-attendace/edit-attendace.component";
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { LoginComponent } from './components/login/login.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddUser1Component } from './components/add-user1/add-user1.component';


@Component({
  selector: 'app-root',
  standalone: true,


  imports: [
    RouterModule,
    RouterOutlet,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    FontAwesomeModule,
    SidebarComponent,
    AddUser1Component,FormsModule,
    HttpClientModule,
 
    LoginComponent,
    SalaryReportComponent,
    AttenedanceDepartureComponent, GeneralSettingsComponent,
    EditAttendaceComponent,AddHolidayComponent

],


  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private router:Router){}

  isLogin():boolean{
    return this.router.url === 'login';
  }
  collapsed=signal(false);
  sideNavWidth=computed(()=>this.collapsed() ? '64px': '250px');
  
}
