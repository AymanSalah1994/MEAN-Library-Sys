import { ActivatedRoute } from '@angular/router';
import {ApiService} from '../../services/api.service';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-update-basic-admin',
  templateUrl: './update-basic-admin.component.html',
  styleUrls: ['./update-basic-admin.component.css']
})
export class UpdateBasicAdminComponent implements OnInit {
  constructor(private basicAdminService:ApiService,
    private router:ActivatedRoute,
    private fb: FormBuilder,
    ){}

  basicAdminForm = this.fb.group({
    id: [''],
    firstName: [''],
    lastName: [''],
    email: [''],
    birthdate: [''],
    hiredate: [''],
    salary: [''],
    password:['']
  });


  ngOnInit():void{
    this.getBasicAdminCurrentData();
  }

  public getPasswdValue(val:any){

  }

  public getBasicAdminCurrentData(){
    this.basicAdminService.getBasicAdminCurrentData(this.router.snapshot.params['id'])
    .subscribe(data=>{//need validation
      this.basicAdminForm = this.fb.group({
        id : [this.router.snapshot.params['id']],
        firstName : [data.data?.firstName ],
        lastName: [data.data?.lastName],
        email: [data.data?.email],
        password: [''],
        birthdate: [data.data?.birthdate],
        hiredate: [data.data?.hiredate],
        salary: [data.data?.salary]
      });
    });
  }

  public updateBasicAdmin(){
    this.basicAdminService.updateBasicAdmin(this.basicAdminForm.value).subscribe(data=>{
      console.log("basic admin edited successfully");
    });
  }

}
