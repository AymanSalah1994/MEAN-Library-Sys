import { ActivatedRoute } from '@angular/router';
import {ApiService} from '../../services/api.service';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit{

  constructor(private adminService:ApiService,
    private router:ActivatedRoute,
    private fb: FormBuilder,
    ){}

  adminForm = this.fb.group({
    id: [''],
    firstName: [''],
    lastName: [''],
    email: [''],
    birthdate: [''],
    salary: [''],
    password: [''],
  });

  ngOnInit():void{
    this.getAdminCurrentData();
  }

  public getAdminCurrentData()
  {
    this.adminService.getAdminCurrentData(this.router.snapshot.params['id'])
      .subscribe(data =>{// need to do validation
        this.adminForm = this.fb.group({
          id : [this.router.snapshot.params['id']],
          firstName : [data.data?.firstName ],
          lastName: [data.data?.lastName],
          email: [data.data?.email],
          password: [''],
          birthdate: [data.data?.birthdate],
          salary: [data.data?.salary]
        });
      }
  )};

  public updateAdmin(){
    this.adminService.updateAdmin(this.adminForm.value).subscribe(data=>{
      console.log("admin edited successfully");
    });
  }
}
