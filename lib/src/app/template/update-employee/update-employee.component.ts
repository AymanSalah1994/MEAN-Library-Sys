import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  employeeForm = this.fb.group({
    id: [''],
    firstName: [''],
    lastName: [''],
    email: [''],
    birthDate: [''],
    hireDate: [''],
    salary: [''],
    password: [''],
  });

  constructor(
    private employeeService: ApiService,
    private router: ActivatedRoute,
    private fb: FormBuilder,
    public datepipe: DatePipe,
    private toastr: ToastrService,
    private routerTwo: Router
  ) {}

  ngOnInit(): void {
    this.getEmployeeCurrentData();
  }

  public getEmployeeCurrentData() {
    this.employeeService
      .getEmployeeCurrentData(this.router.snapshot.params['id'])
      .subscribe((data) => {
        let birthDate = this.datepipe.transform(
          data.data?.birthDate,
          'yyyy-MM-dd'
        );
        let hireDate = this.datepipe.transform(
          data.data?.hireDate,
          'yyyy-MM-dd'
        );
        this.employeeForm = this.fb.group({
          id: [this.router.snapshot.params['id']],
          firstName: [data.data?.firstName],
          lastName: [data.data?.lastName],
          email: [data.data?.email],
          password: [''],
          birthDate: [birthDate],
          hireDate: [hireDate],
          salary: [data.data?.salary],
        });
      });
  }

  public updateEmployee() {
    console.log(this.employeeForm.value);
    this.employeeService
      .updateEmployee(this.employeeForm.value)
      .subscribe((data) => {
        this.toastr.success('employee edited successfully');
        this.routerTwo.navigate(['all-employees']);
        console.log('employee edited successfully');
        console.log(this.employeeForm.value.birthDate);
      });
  }
}
