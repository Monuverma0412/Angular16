import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { JSONComponent } from './json/json.component';
import { FilterPipe } from './filter.pipe';
import { DataComponent } from './data/data.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TableComponent } from './table/table.component';
import { BookComponent } from './book/book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RowComponent } from './row/row.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CalComponent } from './cal/cal.component';
import { BookService } from './book.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StarComponent } from './star/star.component';
import { FormsComponent } from './forms/forms.component';
import { RelativeFormsComponent } from './relative-forms/relative-forms.component';
import {HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common';
import { UserGetComponent } from './user-get/user-get.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    JSONComponent,
    FilterPipe,
    DataComponent,
    NavbarComponent,
    TableComponent,
    BookComponent,
    RowComponent,
    ParentComponent,
    ChildComponent,
    CalComponent,
    LoginComponent,
    RegisterComponent,
    StarComponent,
    FormsComponent,
    RelativeFormsComponent,  
    UserGetComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
      ],
  providers: [BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
