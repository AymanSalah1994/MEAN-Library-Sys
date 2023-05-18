import { ActivatedRoute } from '@angular/router';
import {ApiService} from '../../services/api.service';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-basicadmin-dash',
  templateUrl: './basicadmin-dash.component.html',
  styleUrls: ['./basicadmin-dash.component.css']
})
export class BasicadminDashComponent implements OnInit {

  public model: any = {};
  public currentBasicAdmin:any  = [] ; 
  private uuid: any = localStorage.getItem('uuid');

  constructor(private basicAdminService:ApiService,
    private router:ActivatedRoute,
    ){}

    ngOnInit():void{
      this.getBasicAdminCurrentData();
    }

    public getBasicAdminCurrentData(){
      this.basicAdminService.getBasicAdminCurrentData(this.uuid as Number)
      .subscribe(data=>{//need validation
        this.currentBasicAdmin = data.data;
      });
    }
}
