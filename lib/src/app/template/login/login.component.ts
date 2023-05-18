import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
// const jwt  = require("") ;
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public model: any = {};
  response: any;
  constructor(
    private _apiService: ApiService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {}

  // This is BASIC admin Log in
  signin() {
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
