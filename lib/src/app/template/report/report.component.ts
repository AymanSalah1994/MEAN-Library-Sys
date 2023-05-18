import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
})
export class ReportComponent implements OnInit {
  // public model: any = {};
  public report: any = {};
  public piedata: any;
  response: any;
  constructor(
    private _apiService: ApiService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.reportAdmin();
    this.reportBook();
    this.reportEmp();
    this.reportMember();
    this.reportGeneral();
  }

  reportAdmin() {
    this._apiService.reportCountAdmins().subscribe({
      next: (data) => {
        console.log('Successfull', data['Number of admins in the system']);
        this.report.adminStata = data['Number of admins in the system'];
        this.toastr.success('Success');
      },
      error: (error) => {
        this.toastr.error(error.error.message, 'Error');
      },
    });
  }
  reportMember() {
    this._apiService.reportCountMebmers().subscribe({
      next: (data) => {
        console.log('Successfull', data['Number of members in the system']);
        this.report.memberStata = data['Number of members in the system'];
        this.toastr.success('Success');
      },
      error: (error) => {
        this.toastr.error(error.error.message, 'Error');
      },
    });
  }
  reportEmp() {
    this._apiService.reportCountEmps().subscribe({
      next: (data) => {
        console.log('Successfull', data['Number of employees in the system']);
        this.report.empStata = data['Number of employees in the system'];
        this.toastr.success('Success');
      },
      error: (error) => {
        this.toastr.error(error.error.message, 'Error');
      },
    });
  }
  reportBook() {
    this._apiService.reportCountBookss().subscribe({
      next: (data) => {
        console.log('Successfull', data['Number of books in the system']);
        this.report.bookStata = data['Number of books in the system'];
        this.toastr.success('Success');
      },
      error: (error) => {
        this.toastr.error(error.error.message, 'Error');
      },
    });
  }
  reportGeneral() {
    this._apiService.reportGeneralFile().subscribe({
      next: (data) => {
        console.log('Successfull', data.dataOne);
        let realData = data.dataOne;
        let borrowCount = 0;
        let readCount = 0;

        for (let el of realData) {
          if (el.operationOnBook == 'borrowing') {
            borrowCount++;
          } else {
            readCount++;
          }
        }

        this.piedata = {
          labels: ['Borrowing', 'Reading'],
          datasets: [
            {
              data: [borrowCount, readCount],
              backgroundColor: ['#FF6384', '#36A2EB'],
              hoverBackgroundColor: ['#FF6384', '#36A2EB'],
            },
          ],
        };

        this.toastr.success('Success');
      },
      error: (error) => {
        this.toastr.error(error.error.message, 'Error');
      },
    });
  }
}
