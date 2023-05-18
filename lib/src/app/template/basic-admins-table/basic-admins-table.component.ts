import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basic-admins-table',
  templateUrl: './basic-admins-table.component.html',
  styleUrls: ['./basic-admins-table.component.css']
})
export class BasicAdminsTableComponent implements OnInit {
  public model: any = {};
  public allBasicAdminsArr:any  = [] ; 
  response: any;
  constructor(
    private _apiService: ApiService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.allBasicAdmins() ; 
  }

  allBasicAdmins() {
    console.log('login.component.ts: sign() called');
    this._apiService.allBasicAdmins(this.model).subscribe({
      next: (data) => {
        console.log('Successfull', data);
        this.response = data;
        console.log('Response: ', this.response.message);
        this.allBasicAdminsArr =  data.data ; 
       
      },
      error: (error) => {
        this.toastr.error(error.error.message, 'Error in login.component.ts');
      },
    });
  }


  sendToDelete(id: any) {
    console.log(this.model);
    this.model.role = localStorage.getItem("role") ; 
    this._apiService.deleteBasciAdmin(id).subscribe({
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