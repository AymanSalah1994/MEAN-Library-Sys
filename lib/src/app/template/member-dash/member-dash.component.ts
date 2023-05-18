import { ActivatedRoute } from '@angular/router';
import {ApiService} from '../../services/api.service';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-member-dash',
  templateUrl: './member-dash.component.html',
  styleUrls: ['./member-dash.component.css']
})
export class MemberDashComponent implements OnInit {

  public model: any = {};
  public currentMember:any  = [] ; 
  private uuid: any = localStorage.getItem('uuid');

  constructor(private memberService:ApiService,
    private router:ActivatedRoute,
    ){}

    ngOnInit():void{
      this.getMemberCurrentData();
    }

    public getMemberCurrentData(){
      this.memberService.getMemberCurrentData(this.uuid as Number)
      .subscribe(data=>{//need validation
        this.currentMember = data.data;
      });
    }
}
