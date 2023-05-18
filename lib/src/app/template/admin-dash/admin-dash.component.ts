import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-admin-dash',
  templateUrl: './admin-dash.component.html',
  styleUrls: ['./admin-dash.component.css']
})
export class AdminDashComponent implements OnInit {
  public model: any = {};
  public userModel: any = {};
  public userid  = localStorage.getItem("uuid") ; 
  response: any;
  constructor(
    private _apiService: ApiService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    
    // getAdminCurrentData
    this._apiService.getAdminCurrentData(this.userid).subscribe({
      next: (data) => {
        console.log('Successfull', data);
        this.response = data;
        console.log('Response: ', this.response.message);
        this.userModel = data.data  ; 
      },
      error: (error) => {
        this.toastr.error(error.error.message, 'Error Loading User Data');
      },
    });
  }

  anotherFunction() {
    this._apiService.login(this.model).subscribe({
      next: (data) => {
        console.log('Successfull', data);
        this.response = data;
        console.log('Response: ', this.response.message);
        if (this.response.message === 'authenticated') {
          this.toastr.success('Success');
          localStorage.setItem('token', data['token']);
          let decodedTOken: any = jwt_decode(data.token);
          localStorage.setItem('user_type', decodedTOken.role);
          localStorage.setItem('uuid', decodedTOken.id);
          // console.log('Here Is the Need Thing : ', decodedTOken);
          // If He is Authenticated , We will Redirect to DashBoard ,
          // If he is NOT activated He will Know That Whenever he try to do some action
          this.router.navigate(['basic/dash']);
        }
      },
      error: (error) => {
        this.toastr.error(error.error.message, 'Error in login.component.ts');
      },
    });
  }
}

// TODO:
/**
 * OnInit >> Get the Profile Data
 * Put the Data in the Profile Card
 * Check the OnChange
 * Check Multiple Observer
 *
 */

