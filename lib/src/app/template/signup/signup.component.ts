import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public model: any = {};

  constructor(
    private _apiService: ApiService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {}

  signup() {
    this._apiService.signup(this.model).subscribe({
      next: (data) => {
        console.log('data: ', data);
        this.toastr.success('Success');
        // data["message"], "Success"
        this.router.navigate(['/login']);
      },
      error: (e) => {
        this.toastr.error(e.error.message, 'Error in signup.component.ts');
        console.log(e);
      },
      complete: () => console.log('complete'),
    });
  }
}
