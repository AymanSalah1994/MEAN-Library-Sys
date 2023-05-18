import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admins-table',
  templateUrl: './admins-table.component.html',
  styleUrls: ['./admins-table.component.css'],
})
export class AdminsTableComponent implements OnInit {
  public model: any = {};
  public allAdminsArr: any = [];
  response: any;
  constructor(
    private _apiService: ApiService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.allAdmins();
  }

  allAdmins() {
    this._apiService.allAdmins().subscribe({
      next: (data) => {
        console.log('Successfull', data.data);
        this.response = data;
        console.log('Response: ', this.response.message);
        this.allAdminsArr = data.data;
      },
      error: (error) => {
        this.toastr.error(
          error.error.message,
          'Error in All Admins.component.ts'
        );
      },
    });
  }

  sendToDelete(id: any) {
    console.log(this.model);
    this.model.role = localStorage.getItem("role") ; 
    this._apiService.deleteAdmin(id).subscribe({
      next: (data) => {
        console.log('Deletes :::', data);
        this.response = data;
        console.log('Response: ', this.response.message);
        // this.router.navigate(["/all-admins"]) ;
        this.ngOnInit();
        // this.ngOnInit()
        // HACK ngOnInit is Used For REFRESH !!!
      },
      error: (error) => {
        this.toastr.error(error.error.message, 'Error in All Delete..');
      },
    });
  }
}
