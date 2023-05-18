import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateFn } from '@angular/router';

// TODO Importing All the Components For "Login and other stuff Like That "
import { LoginComponent } from './template/login/login.component';

import { AdminLoginComponent } from './template/admin-login/admin-login.component';
import { MemberLoginComponent } from './template/member-login/member-login.component';
import { EmployeeLoginComponent } from './template/employee-login/employee-login.component';

import { SignupComponent } from './template/signup/signup.component';
import { AddBookComponent } from './template/add-book/add-book.component';
import { AddAdminComponent } from './template/add-admin/add-admin.component';
import { AddBasicAdminComponent } from './template/add-basic-admin/add-basic-admin.component';
import { AddEmployeeComponent } from './template/add-employee/add-employee.component';
import { AddMemberComponent } from './template/add-member/add-member.component';
import { AdminsTableComponent } from './template/admins-table/admins-table.component';
import { BasicAdminsTableComponent } from './template/basic-admins-table/basic-admins-table.component';
import { EmployeesTableComponent } from './template/employees-table/employees-table.component';
import { MembersTableComponent } from './template/members-table/members-table.component';
import { BooksTableComponent } from './template/books-table/books-table.component';
import { UpdateEmployeeComponent } from './template/update-employee/update-employee.component';
import { UpdateBasicAdminComponent } from './template/update-basic-admin/update-basic-admin.component';
import { UpdateAdminComponent } from './template/update-admin/update-admin.component';
import { UpdateMemberComponent } from './template/update-member/update-member.component';
import { UpdateBookComponent } from './template/update-book/update-book.component';
import { HomeComponent } from './template/home/home.component';
import { BasicadminDashComponent } from './template/basicadmin-dash/basicadmin-dash.component';
import { AdminDashComponent } from './template/admin-dash/admin-dash.component';
import { MemberDashComponent } from './template/member-dash/member-dash.component';
import { EmployeeDashComponent } from './template/employee-dash/employee-dash.component';

// Activation Components  :
import { ActivateAdminComponent } from './template/activate-admin/activate-admin.component';
import { ActivateBasicadminComponent } from './template/activate-basicadmin/activate-basicadmin.component';
import { ActivateEmployeeComponent } from './template/activate-employee/activate-employee.component';
import { ActivateMemberComponent } from './template/activate-member/activate-member.component';

import { BookSearchComponent } from './template/book-search/book-search.component';
import { TransactionComponent } from './template/transaction/transaction.component';

import { ReportComponent } from './template/report/report.component';
import { SearchEmployeeComponent } from './template/search-employee/search-employee.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: 'employee-login', component: EmployeeLoginComponent },
  { path: 'member-login', component: MemberLoginComponent },

  // Second Wave Of Links and Routes
  { path: 'add-book', component: AddBookComponent },
  { path: 'add-admin', component: AddAdminComponent },
  { path: 'add-basicadmin', component: AddBasicAdminComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'add-member', component: AddMemberComponent },
  // { path: 'add-book', canActivate: [root], component: AddBookComponent },
  // { path: 'add-books',canActivate:[admin ] ,  component: AddBooksComponent },
  // THIRD Wave Of Links and Routes
  { path: 'all-books', component: BooksTableComponent },
  { path: 'all-admins', component: AdminsTableComponent },
  { path: 'all-basicadmins', component: BasicAdminsTableComponent },
  { path: 'all-employees', component: EmployeesTableComponent },
  { path: 'all-members', component: MembersTableComponent },
  // THIRD Wave Of Links and Routes
  { path: 'employee/update/:id', component: UpdateEmployeeComponent },
  { path: 'basicAdmin/update/:id', component: UpdateBasicAdminComponent },
  { path: 'admin/update/:id', component: UpdateAdminComponent },
  { path: 'member/update/:id', component: UpdateMemberComponent },
  { path: 'book/update/:id', component: UpdateBookComponent },

  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  // DASHEs
  // EACH DASH with ITs Injected Components   : ADMIN is First One :

  { path: 'search-employee', component: SearchEmployeeComponent },

  {
    path: 'admin/dash',
    component: AdminDashComponent,
    children: [
      { path: 'manage-employees', component: EmployeesTableComponent },
      { path: 'manage-books', component: BooksTableComponent },
      { path: 'add-book', component: AddBookComponent },
      { path: 'add-employee', component: AddEmployeeComponent },
      { path: 'search-employee', component: SearchEmployeeComponent },
    ],
  },

  // basic admin is the sec one
  {
    path: 'basic/dash',
    component: BasicadminDashComponent,
    children: [
      { path: 'add-admin', component: AddAdminComponent },
      { path: 'add-basicadmin', component: AddBasicAdminComponent },
      { path: 'add-employee', component: AddEmployeeComponent },
      { path: 'add-member', component: AddMemberComponent },
      { path: 'search-book', component: BookSearchComponent },
      { path: 'book-transaction', component: TransactionComponent },
      { path: 'report', component: ReportComponent },
      { path: 'all-books', component: BooksTableComponent },
      { path: 'all-admins', component: AdminsTableComponent },
      { path: 'all-basicadmins', component: BasicAdminsTableComponent },
      { path: 'all-employees', component: EmployeesTableComponent },
      { path: 'all-members', component: MembersTableComponent },
      { path: 'employee/update/:id', component: UpdateEmployeeComponent },
      { path: 'basicAdmin/update/:id', component: UpdateBasicAdminComponent },
      { path: 'admin/update/:id', component: UpdateAdminComponent },
      { path: 'member/update/:id', component: UpdateMemberComponent },
      { path: 'book/update/:id', component: UpdateBookComponent },
      { path: 'search-employee', component: SearchEmployeeComponent },
    ],
  },
  // Member is the third one
  {
    path: 'member/dash',
    component: MemberDashComponent,
    children: [
      // { path: 'search-book', component: BookSearchComponent },
      // { path: 'all-books', component: BooksTableComponent },
    ],
  },

  // Employee is the fourth one
  {
    path: 'employee/dash',
    component: EmployeeDashComponent,
    children: [
      { path: 'add-member', component: AddMemberComponent },
      { path: 'search-book', component: BookSearchComponent },
      { path: 'book-transaction', component: TransactionComponent },
      { path: 'all-books', component: BooksTableComponent },
      { path: 'all-employees', component: EmployeesTableComponent },
      { path: 'book/update/:id', component: UpdateBookComponent },
      { path: 'employee/update/:id', component: UpdateEmployeeComponent },
    ],
  },

  { path: 'admin/dash', component: AdminDashComponent },
  // ACTIVATION
  { path: 'admin/activate', component: ActivateAdminComponent },
  { path: 'basic-admin/activate', component: ActivateBasicadminComponent },
  { path: 'member/activate', component: ActivateMemberComponent },
  { path: 'employee/activate', component: ActivateEmployeeComponent },
  // new
  { path: 'book-search', component: BookSearchComponent },
  { path: 'book-transaction', component: TransactionComponent },
  { path: 'report', component: ReportComponent },
];

function root() {
  // This is the Autherization !!!
  let userType = localStorage.getItem('user_type');
  if (userType == 'Root' || userType == 'basicAdmin') {
    return true;
  } else {
    return false;
  }
}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
