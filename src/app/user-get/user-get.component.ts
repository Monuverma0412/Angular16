import { Component } from '@angular/core';
import { UserdataService } from '../service/userdata.service'; 
@Component({
  selector: 'app-user-get',
  templateUrl: './user-get.component.html',
  styleUrls: ['./user-get.component.css']
})
export class UserGetComponent  {
  title = "User Get Component";
  users:any[] = [];

  constructor(public userData:UserdataService){
    userData.users().subscribe((data)=>{
      console.log(data)
      this.users = data;
    })
  }
  
}
