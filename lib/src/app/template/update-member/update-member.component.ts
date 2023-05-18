import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
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

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css'],
})
export class UpdateMemberComponent implements OnInit {
  memberForm = this.fb.group({
    id: [''],
    fullName: [''],
    email: [''],
    password: [''],
    phoneNumber: [''],
    fullAddress: this.fb.group({
      city: [''],
      street: [''],
      building: [''],
    }),
  });

  constructor(
    private memberService: ApiService,
    private router: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.getMemberCurrentData();
  }

  public getMemberCurrentData() {
    this.memberService
      .getMemberCurrentData(this.router.snapshot.params['id'])
      .subscribe((data: any) => {
        this.memberForm = this.fb.group({
          id: [this.router.snapshot.params['id']],
          fullName: [data.data?.fullName],
          email: [data.data?.email],
          password: [''],
          phoneNumber: [data.data?.phoneNumber],
          fullAddress: this.fb.group({
            city: [data.data.fullAddress.city],
            street: [data.data.fullAddress.street],
            building: [data.data.fullAddress.building],
          }),
        });
      });
  }

  public updateMember() {
    this.memberService
      .updateMember(this.memberForm.value)
      .subscribe((data: any) => {
        console.log('member edited successfully');
      });
  }
}
