import { Routes } from '@angular/router';
import { AddGroupComponent } from './components/add-group/add-group.component';
import { AddHolidayComponent } from './components/add-holiday/add-holiday.component';
import { AddUser1Component } from './components/add-user1/add-user1.component';
import { AddUser2Component } from './components/add-user2/add-user2.component';
import { GeneralSettingsComponent } from './components/general-settings/general-settings.component';
import { LoginComponent } from './components/login/login.component';
import { SalaryReportComponent } from './components/salary-report/salary-report.component';
import { EditAttendaceComponent } from './components/edit-attendace/edit-attendace.component';
import { EditReportComponent } from './components/edit-report/edit-report.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AttenedanceDepartureComponent } from './components/attenedance-departure/attenedance-departure.component';

export const routes: Routes = [
    {path:'',redirectTo:'homePage',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path: 'homePage',component: HomePageComponent, title:'HomePage'},
    {path: 'addgroup',component: AddGroupComponent, title:'Add Group'},
    {path:'addadmin',component:AddUser1Component,title:'Add Admin'},
    {path:'addemployee',component:AddUser2Component,title:'Add Employee'},
    {path:'generalsettings',component:GeneralSettingsComponent,title:'General Settings'},
    {path: 'addholiday',component: AddHolidayComponent, title:'Add Holiday'},
     {path:'attendance-departure',component:AttenedanceDepartureComponent,title:'Attendance Reports'},
     {path:'login',component:LoginComponent,title:'Login'},
     {path:'salaryreport',component:SalaryReportComponent,title:'salasryReport'},


     {path:'**', component: HomePageComponent, title:'Page Not Found'}
];

 
