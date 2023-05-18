import { ActivatedRoute } from '@angular/router';
import {ApiService} from '../../services/api.service';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, Validators ,AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  bookForm = this.fb.group({
    id: [''],
    title: [''],
    author: [''],
    publisher: [''],
    publishingDate: [''],
    category: [''],
    edition: [''],
    pages: [''],
    totalNoOfCopies: [''],
    noOfBorrowedCopies: [''],
    noOfreadingCopies: [''],
    noOfAvailableCopies: [''],
    timesOfBorrowing: [''],
    timesOfReading: [''],
    available: [''],
    shelfNo: [''],
    arrivalDate: [''],
  });


  constructor(private bookService:ApiService,
              private router:ActivatedRoute,
              private fb: FormBuilder,
              ){}


  ngOnInit():void{
    this.getBookCurrentData();
  }

  getBookCurrentData(){
    this.bookService.getBookCurrentData(this.router.snapshot.params['id'])
      .subscribe(data=>{
        this.bookForm = this.fb.group({
          id:[this.router.snapshot.params['id']],
          title: [data?.title],
          author: [data?.author],
          publisher: [data?.publisher],
          publishingDate: [data?.publishingDate],
          category: [data?.category],
          edition: [data?.edition],
          pages: [data?.pages],
          totalNoOfCopies: [data?.totalNoOfCopies],
          noOfBorrowedCopies: [data?.noOfBorrowedCopies],
          noOfreadingCopies: [data?.noOfreadingCopies],
          noOfAvailableCopies: [data?.noOfAvailableCopies],
          timesOfBorrowing: [data?.timesOfBorrowing],
          timesOfReading: [data?.timesOfReading],
          available: [data?.available],
          shelfNo: [data?.shelfNo],
          arrivalDate: [data?.arrivalDate],
        });
        console.log(data);
    })
  }

  updateBook(){
    this.bookService.updateBook(this.bookForm.value).subscribe(data=>{
      console.log("book edited successfully");
    });
  }

}