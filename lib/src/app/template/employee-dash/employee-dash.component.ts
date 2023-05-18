import { ActivatedRoute } from '@angular/router';
import {ApiService} from '../../services/api.service';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-employee-dash',
  templateUrl: './employee-dash.component.html',
  styleUrls: ['./employee-dash.component.css']
})
export class EmployeeDashComponent implements OnInit {

  public model: any = {};
  public currentEmployee:any  = [] ; 
  private uuid: any = localStorage.getItem('uuid');

  constructor(private employeeService:ApiService,
    private router:ActivatedRoute,
    ){}

    ngOnInit():void{
      this.getEmployeeCurrentData();
    }

    public getEmployeeCurrentData(){
      this.employeeService.getEmployeeCurrentData(this.uuid as Number)
      .subscribe(data=>{//need validation
        this.currentEmployee = data.data;
      });
    }
}
