import { Injectable } from '@angular/core';
//importing libraries for making HTTP calls
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  /**
   * 0- Going to Routes and Putting them In Routes File
   * 1- Making the Interceptor
   * 2- Making the Service With the URLS
   * 3-Observable<any>  <<< Save me alot of errors
   *
   */

  /**
   * FIRST  PATCH FOR THE AUTH < LOGIN < SIGN
   */
  signup(model: any): Observable<any> {
    return this.httpClient.post(
      'http://127.0.0.1:8080/temp/admin-signup',
      model
    );
  } // Sign up

  login(model: any): Observable<any> {
    return this.httpClient.post(
      'http://127.0.0.1:8080/login/basicAdmin',
      model
    );
  } // Log in BASIC admin

  loginAdmin(model: any): Observable<any> {
    return this.httpClient.post('http://127.0.0.1:8080/login/admin', model);
  } // Log in  admin

  loginMember(model: any): Observable<any> {
    return this.httpClient.post('http://127.0.0.1:8080/login/member', model);
  } // Log in member

  loginEmployee(model: any): Observable<any> {
    return this.httpClient.post('http://127.0.0.1:8080/login/empolyee', model);
  } // Log in empolyee

  /**
   * SECOND PATCH FOR THE CREATE
   */
  addBook(model: any): Observable<any> {
    return this.httpClient.post('http://127.0.0.1:8080/book/', model);
  } // Add New Book

  addAdmin(model: any): Observable<any> {
    return this.httpClient.post('http://127.0.0.1:8080/admin/', model);
  } // Add Admin

  addBasicAdmin(model: any): Observable<any> {
    return this.httpClient.post('http://127.0.0.1:8080/basicAdmin/', model);
  } // Add Basic Admin

  addMember(model: any): Observable<any> {
    return this.httpClient.post('http://127.0.0.1:8080/member/', model);
  } // Add Member

  addEmployee(model: any): Observable<any> {
    return this.httpClient.post('http://127.0.0.1:8080/employee/', model);
  } // Add Employee

  /**
   * THIRD  PATCH FOR THE READ ALL TABLES
   */

  allBooks(model: any): Observable<any> {
    return this.httpClient.get('http://127.0.0.1:8080/book/', model);
  } // Add New Book

  allAdmins(): Observable<any> {
    // TODO in get we Need No sending For data
    return this.httpClient.get('http://127.0.0.1:8080/admin/');
  } // Add Admin

  allBasicAdmins(model: any): Observable<any> {
    return this.httpClient.get('http://127.0.0.1:8080/basicAdmin/', model);
  } // Add Basic Admin

  allMembers(model: any): Observable<any> {
    return this.httpClient.get('http://127.0.0.1:8080/member/', model);
  } // Add Member

  allEmployees(model: any): Observable<any> {
    return this.httpClient.get('http://127.0.0.1:8080/employee/', model);
  } // Add Employee

  /**
   * FOURTH  PATCH FOR THE DELETE
   */

  deleteAdmin(id: Number): Observable<any> {
    return this.httpClient.delete('http://127.0.0.1:8080/admin/', {
      body: { id: id },
    });
  } // DELETE Admin

  deleteBasciAdmin(id: Number): Observable<any> {
    return this.httpClient.delete('http://127.0.0.1:8080/basicAdmin/', {
      body: { id: id },
    });
  } // DELETE Basic Admin

  deleteBook(id: Number): Observable<any> {
    return this.httpClient.delete('http://127.0.0.1:8080/book/', {
      body: { id: id },
    });
  } // DELETE Book

  deleteEmployee(id: Number): Observable<any> {
    return this.httpClient.delete(`http://127.0.0.1:8080/employee/${id}`, {
      body: { id: id },
    });
  } // DELETE Employee
  // TODO the Employee Route For Delete is Using Params , Fix it
  // FIXME DONE DONE

  deleteMember(id: Number): Observable<any> {
    return this.httpClient.delete('http://127.0.0.1:8080/member/', {
      body: { id: id },
    });
  } // DELETE Member

  /**
   * FIFTH  update
   */

  getEmployeeCurrentData(id: Number): Observable<any> {
    return this.httpClient.get<any>(`http://127.0.0.1:8080/employee/${id}`);
  }

  updateEmployee(newData: any): Observable<any> {
    if (newData.email == '') delete newData.email;
    if (newData.salary == '') delete newData.salary;
    if (newData.hireDate == '') delete newData.hireDate;
    if (newData.birthDate == '') delete newData.birthDate;
    if (newData.firstName == '') delete newData.firstName;
    if (newData.lastName == '') delete newData.lastName;
    if (newData.password == '') delete newData.password;
    delete newData.object;

    return this.httpClient.patch('http://localhost:8080/employee', newData);
  } // UPDATE employee

  getBasicAdminCurrentData(id: Number): Observable<any> {
    return this.httpClient.get<any>(`http://127.0.0.1:8080/basicAdmin/${id}`);
  }

  updateBasicAdmin(newData: any): Observable<any> {
    if (newData.firstName == '') delete newData.firstName;
    if (newData.lastName == '') delete newData.lastName;
    if (newData.email == '') delete newData.email;
    if (newData.birthdate == '') delete newData.birthdate;
    if (newData.hiredate == '') delete newData.hiredate;
    if (newData.salary == '') delete newData.salary;
    if (newData.password == '') delete newData.password;

    return this.httpClient.patch('http://localhost:8080/basicAdmin', newData);
  } // UPDATE basicAdmin

  getAdminCurrentData(id: any): Observable<any> {
    return this.httpClient.get<any>(`http://127.0.0.1:8080/admin/${id}`);
  }

  updateAdmin(newData: any): Observable<any> {
    if (newData.firstName == '') delete newData.firstName;
    if (newData.lastName == '') delete newData.lastName;
    if (newData.birthdate == '') delete newData.birthdate;
    if (newData.email == '') delete newData.email;
    if (newData.salary == '') delete newData.salary;
    if (newData.password == '') delete newData.password;

    return this.httpClient.patch('http://localhost:8080/admin', newData);
  } // UPDATE admin

  getMemberCurrentData(id: Number): Observable<any> {
    return this.httpClient.get<any>(`http://127.0.0.1:8080/member/${id}`);
  }

  updateMember(newData: any): Observable<any> {
    if (newData.fullName == '') delete newData.fullName;
    if (newData.email == '') delete newData.email;
    if (newData.password == '') delete newData.password;
    if (newData.phoneNumber == '') delete newData.phoneNumber;
    if (newData.fullAddress.city == '') delete newData.fullAddress.city;
    if (newData.fullAddress.street == '') delete newData.fullAddress.street;
    if (newData.fullAddress.building == '') delete newData.fullAddress.building;

    return this.httpClient.patch('http://localhost:8080/member', newData);
  } // UPDATE member

  getBookCurrentData(id: Number): Observable<any> {
    return this.httpClient.get<any>(`http://127.0.0.1:8080/book/${id}`);
  }

  updateBook(newData: any): Observable<any> {
    if (newData.title == '' || newData.title == null) delete newData.title;
    if (newData.author == '' || newData.author == null) delete newData.author;
    if (newData.publisher == '' || newData.publisher == null)
      delete newData.publisher;
    if (newData.publishingDate == '' || newData.publishingDate == null)
      delete newData.publishingDate;
    if (newData.category == '' || newData.category == null)
      delete newData.category;
    if (newData.edition == '' || newData.edition == null)
      delete newData.edition;
    if (newData.pages == '' || newData.pages == null) delete newData.pages;
    if (newData.totalNoOfCopies == '' || newData.totalNoOfCopies == null)
      delete newData.totalNoOfCopies;
    if (newData.noOfBorrowedCopies == '' || newData.noOfBorrowedCopies == null)
      delete newData.noOfBorrowedCopies;
    if (newData.noOfreadingCopies == '' || newData.noOfreadingCopies == null)
      delete newData.noOfreadingCopies;
    if (
      newData.noOfAvailableCopies == '' ||
      newData.noOfAvailableCopies == null
    )
      delete newData.noOfAvailableCopies;
    if (newData.timesOfBorrowing == '' || newData.timesOfBorrowing == null)
      delete newData.timesOfBorrowing;
    if (newData.timesOfReading == '' || newData.timesOfReading == null)
      delete newData.timesOfReading;
    if (newData.available == '' || newData.available == null)
      delete newData.available;
    if (newData.shelfNo == '' || newData.shelfNo == null)
      delete newData.shelfNo;
    if (newData.arrivalDate == '' || newData.arrivalDate == null)
      delete newData.arrivalDate;
    console.log(newData);

    return this.httpClient.patch('http://localhost:8080/book', newData);
  } // UPDATE Book

  adminActivation(model: any): Observable<any> {
    return this.httpClient.post<any>(
      'http://127.0.0.1:8080/activate/admin',
      model
    );
  } // Admin Activation

  basicAdminActivation(model: any): Observable<any> {
    return this.httpClient.post<any>(
      'http://127.0.0.1:8080/activate/basicAdmin',
      model
    );
  } // Basic Admin Activation

  memberActivation(model: any): Observable<any> {
    return this.httpClient.post<any>(
      'http://127.0.0.1:8080/activate/member',
      model
    );
  } // member Activation

  employeeActivation(model: any): Observable<any> {
    return this.httpClient.post<any>(
      'http://127.0.0.1:8080/activate/employee',
      model
    );
  } // Employee Activation

  searchByYear(input: any): Observable<any> {
    return this.httpClient.get<any>(
      `http://127.0.0.1:8080/book/searchBookByYear/${input}`
    );
  } // Year
  searchByPublisher(input: any): Observable<any> {
    return this.httpClient.get<any>(
      `http://127.0.0.1:8080/book/searchBookByPublisher/${input}`
    );
  } // Publishers
  searchByAuthor(input: any): Observable<any> {
    return this.httpClient.get<any>(
      `http://127.0.0.1:8080/book/searchBookByAuthor/${input}`
    );
  } // Author
  searchByCategory(input: any): Observable<any> {
    return this.httpClient.get<any>(
      `http://127.0.0.1:8080/book/searchBookByCatagery/${input}`
    );
  } // Category

  makeTransaction(model: any): Observable<any> {
    return this.httpClient.post<any>(
      'http://127.0.0.1:8080/bookaction/',
      model
    );
  } // Category

  // Final Wave : Report things :
  // ->>>>>>>>>>>>>>>>>>>>>>>>>>>
  reportCountAdmins(): Observable<any> {
    return this.httpClient.get<any>('http://127.0.0.1:8080/counteradminreport');
  } // Conur admin Report
  reportCountEmps(): Observable<any> {
    return this.httpClient.get<any>('http://127.0.0.1:8080/counterempreport');
  } // Conur admin Report
  reportCountMebmers(): Observable<any> {
    return this.httpClient.get<any>(
      'http://127.0.0.1:8080/countermemberreport'
    );
  } // Conur admin Report
  reportCountBookss(): Observable<any> {
    return this.httpClient.get<any>('http://127.0.0.1:8080/counterbookreport');
  } // Conur admin Report
  reportGeneralFile(): Observable<any> {
    return this.httpClient.get<any>('http://127.0.0.1:8080/bookreports');
  } // Conur admin Report
}
