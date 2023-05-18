import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css'],
})
export class BookSearchComponent implements OnInit {
  public model: any = {};
  public yearArr: any = [];
  public authorArr: any = [];
  public publisherArr: any = [];
  public categoryArr: any = [];
  response: any;
  constructor(
    private _apiService: ApiService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {}

  applySearch() {
    this.searchCategory(this.model.searchkeyWord);
    this.searchAuthor(this.model.searchkeyWord);
    this.searchPublisher(this.model.searchkeyWord);
    // this.searchYear(this.model.searchkeyWord);
    // TODO
    // Year Nubmer , Needs Special Treatment
  }

  searchYear(skw: any) {
    this._apiService.searchByYear(skw).subscribe({
      next: (data) => {
        this.yearArr = data.data;
        console.log('year arr ', this.yearArr);
      },
      error: (error) => {
        console.log(error);
        this.toastr.error(error.error.message, 'Error');
      },
    });
  }
  searchPublisher(skw: any) {
    this._apiService.searchByPublisher(skw).subscribe({
      next: (data) => {
        this.publisherArr = data.data;
        console.log('year arr ', this.publisherArr);
      },
      error: (error) => {
        console.log(error);
        this.toastr.error(error.error.message, 'Error');
      },
    });
  }
  searchAuthor(skw: any) {
    this._apiService.searchByAuthor(skw).subscribe({
      next: (data) => {
        this.authorArr = data.data;
        console.log('year arr ', this.authorArr);
      },
      error: (error) => {
        console.log(error);
        this.toastr.error(error.error.message, 'Error');
      },
    });
  }
  searchCategory(skw: any) {
    this._apiService.searchByCategory(skw).subscribe({
      next: (data) => {
        this.categoryArr = data.data;
        console.log('year arr ', this.categoryArr);
      },
      error: (error) => {
        console.log(error);
        this.toastr.error(error.error.message, 'Error');
      },
    });
  }
}
// Search By title ????????
