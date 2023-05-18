import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent implements OnInit {
  public model: any = {
    empId:4
  };
  response: any;
  constructor(
    private _apiService: ApiService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {}

  addNewOpertion() {
    console.log(' new Operation called');
    this._apiService.makeTransaction(this.model).subscribe({
      next: (data) => {
        console.log('Successfull', data);
        this.response = data;
        console.log('Response: ', this.response.message);
        this.toastr.success('Success');
      },
      error: (error) => {
        console.log(error);
        this.toastr.error(error.error.message, 'Error in Transaction');
      },
    });
  }
}
