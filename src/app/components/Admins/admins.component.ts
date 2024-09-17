import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component,ViewChild } from '@angular/core';
import { MatPaginatorModule,MatPaginator } from '@angular/material/paginator';
import { LoaderComponent } from '../loader/loader.component';
import { adminResponse, AdminService } from '../../Services/Admin/admin.service';

@Component({
  selector: 'app-admins',
  standalone: true,
  imports: [CommonModule,RouterModule,MatTableModule,MatPaginatorModule,LoaderComponent],
  templateUrl: './admins.component.html',
  styleUrl: './admins.component.css'
})
export class AdminsComponent {
  constructor(private adminServise: AdminService){

  }  
  admins!:adminResponse[];
  dataSource=new MatTableDataSource<adminResponse>([]);
  displayedColumns: string[] = [ 'id','fullname', 'email', 'username', 'group_name'];
  onboard:any='./assets/images/onboard(1).png';
  isLoading: boolean=false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  ngOnInit(){
    this.getAdminList();
  }
  getAdminList(){
    // this.isLoading=true;
    this.adminServise.getAdmins().subscribe((result:any)=>{
      console.log(result);
      // this.isLoading=false;
      this.admins=result.data;
      this.dataSource.data=this.admins;
    })
  }
  printPage()
  {
    window.print();
  }



}
