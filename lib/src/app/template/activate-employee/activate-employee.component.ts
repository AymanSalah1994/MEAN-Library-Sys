import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-activate-employee',
  templateUrl: './activate-employee.component.html',
  styleUrls: ['./activate-employee.component.css']
})
export class ActivateEmployeeComponent implements OnInit {
  public myForm: any = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    new_password: new FormControl(''),
    file: new FormControl(''),
    fileSource: new FormControl(''),
  });

  public model: any = {};
  response: any;
  constructor(
    private _apiService: ApiService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {}

  onFileChange(event: any) {
    console.log(event);
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file,
      });
    }
  }
  activateEmployee() {
    const formData = new FormData();
    formData.append('image', this.myForm.get('fileSource').value);
    formData.append('email', this.myForm.get('email').value);
    formData.append('password', this.myForm.get('password').value);
    formData.append('new_password', this.myForm.get('new_password').value);

    console.log(formData);

    this._apiService.employeeActivation(formData).subscribe({
      next: (data) => {
        console.log('Successfull', data);
        this.response = data;
        console.log('Response: ', this.response.message);
        this.toastr.success('Success ' + data.data);
        this.router.navigate(['employee-login']);
        //check the response message
      },
      error: (error) => {
        this.toastr.error(error.error.message, 'Error in Activation');
      },
    });
  }
}
