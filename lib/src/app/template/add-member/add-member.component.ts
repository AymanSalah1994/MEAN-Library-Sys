import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent  implements OnInit {
  public model: any = {
    fulladdress:{
      city:"" , 
      street:"" ,
      building: ""
    } , 
  };
  response: any;
  constructor(
    private _apiService: ApiService,
    private toastr: ToastrService,
    private router: Router
  ) {
    
  }

  ngOnInit() {}

  addMember() {
    console.log(' Add Member() called');
    this._apiService.addMember(this.model).subscribe({
      next: (data) => {
        console.log('Successfull', data);
        this.response = data;
        console.log('Response: ', this.response.message);
          this.toastr.success('Success');
        //check the response message
        // if (this.response.message === 'authenticated') {
        //   // console.log("login.component.ts: data: ", data);
        //   this.toastr.success('Success');
        //   // console.log(data.user_type) ;
        //   // localStorage.setItem('user_type', data['user_type']);
        //   localStorage.setItem('token', data['token']);
        //   // this.router.navigate(['/books']);
        //   // let decodedTOken: any = jwt_decode(data.token);

        //   localStorage.setItem('user_type', decodedTOken.role);
        //   console.log('Here Is the Need Thing : ', decodedTOken);
        // }
      },
      error: (error) => {
        console.log(error);
        this.toastr.error(
          error.error.message,
          'Error in Add Admin.component.ts'
        );
      },
    });
  }
}
