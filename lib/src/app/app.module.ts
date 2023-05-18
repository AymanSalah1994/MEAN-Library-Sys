import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

// import { MatDatepickerModule }
//     from '@angular/material/datepicker';
// import { MatInputModule }
//     from '@angular/material/input';
// import { MatNativeDateModule }
//     from '@angular/material/core';
// import { MatFormFieldModule }
//     from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './template/login/login.component';
import { SignupComponent } from './template/signup/signup.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './interceptors/header.interceptor';
import { ApiService } from './services/api.service';
import { ToastrModule } from 'ngx-toastr';
import { AddBookComponent } from './template/add-book/add-book.component';
import { AddAdminComponent } from './template/add-admin/add-admin.component';
import { AddBasicAdminComponent } from './template/add-basic-admin/add-basic-admin.component';
import { AddMemberComponent } from './template/add-member/add-member.component';
import { AddEmployeeComponent } from './template/add-employee/add-employee.component';
import { AdminsTableComponent } from './template/admins-table/admins-table.component';
import { BasicAdminsTableComponent } from './template/basic-admins-table/basic-admins-table.component';
import { BooksTableComponent } from './template/books-table/books-table.component';
import { EmployeesTableComponent } from './template/employees-table/employees-table.component';
import { MembersTableComponent } from './template/members-table/members-table.component';
import { UpdateEmployeeComponent } from './template/update-employee/update-employee.component';
import { UpdateBasicAdminComponent } from './template/update-basic-admin/update-basic-admin.component';
import { UpdateAdminComponent } from './template/update-admin/update-admin.component';
import { UpdateMemberComponent } from './template/update-member/update-member.component';
import { UpdateBookComponent } from './template/update-book/update-book.component';
import { HomeComponent } from './template/home/home.component';
import { AdminLoginComponent } from './template/admin-login/admin-login.component';
import { EmployeeLoginComponent } from './template/employee-login/employee-login.component';
import { MemberLoginComponent } from './template/member-login/member-login.component';
import { BasicadminDashComponent } from './template/basicadmin-dash/basicadmin-dash.component';
import { AdminDashComponent } from './template/admin-dash/admin-dash.component';
import { MemberDashComponent } from './template/member-dash/member-dash.component';
import { EmployeeDashComponent } from './template/employee-dash/employee-dash.component';
import { ActivateAdminComponent } from './template/activate-admin/activate-admin.component';
import { ActivateBasicadminComponent } from './template/activate-basicadmin/activate-basicadmin.component';
import { ActivateMemberComponent } from './template/activate-member/activate-member.component';
import { ActivateEmployeeComponent } from './template/activate-employee/activate-employee.component';
import { BookSearchComponent } from './template/book-search/book-search.component';
import { TransactionComponent } from './template/transaction/transaction.component';
import { ReportComponent } from './template/report/report.component';
import { ChartModule } from 'primeng/chart';
import { SearchEmployeeComponent } from './template/search-employee/search-employee.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AddBookComponent,
    AddAdminComponent,
    AddBasicAdminComponent,
    AddMemberComponent,
    AddEmployeeComponent,
    AdminsTableComponent,
    BasicAdminsTableComponent,
    BooksTableComponent,
    EmployeesTableComponent,
    MembersTableComponent,
    UpdateEmployeeComponent,
    UpdateBasicAdminComponent,
    UpdateAdminComponent,
    UpdateMemberComponent,
    UpdateBookComponent,
    HomeComponent,
    AdminLoginComponent,
    EmployeeLoginComponent,
    MemberLoginComponent,
    BasicadminDashComponent,
    AdminDashComponent,
    MemberDashComponent,
    EmployeeDashComponent,
    ActivateAdminComponent,
    ActivateBasicadminComponent,
    ActivateMemberComponent,
    ActivateEmployeeComponent,
    BookSearchComponent,
    TransactionComponent,
    ReportComponent,
    SearchEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ChartModule,
    // Validators,
  ],
  providers: [
    DatePipe,
    ApiService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeaderInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
