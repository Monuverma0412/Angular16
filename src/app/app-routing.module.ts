import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JSONComponent } from './json/json.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DataComponent } from './data/data.component';
import { TableComponent } from './table/table.component';
import { BookComponent } from './book/book.component';
import { RowComponent } from './row/row.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { CalComponent } from './cal/cal.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StarComponent } from './star/star.component';
import { FormsComponent } from './forms/forms.component';
import { UserGetComponent } from './user-get/user-get.component';

const routes: Routes = [
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  { path: "json", component: JSONComponent },
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },
  { path: "data", component: DataComponent },
  { path: "table", component: TableComponent },
  { path: "book", component: BookComponent },
  { path: "row", component: RowComponent },
  { path: "parent", component: ParentComponent },
  { path: "child", component: ChildComponent },
  { path: "cal", component: CalComponent },
  { path:"login",component:LoginComponent},
  { path:"register",component:RegisterComponent},
  {path:"star",component:StarComponent},
  {path:"forms",component:FormsComponent},
  {path:"get",component:UserGetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
