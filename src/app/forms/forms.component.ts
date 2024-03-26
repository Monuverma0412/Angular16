import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  submitted = false
  pageTitle = ""
  value = 0;
  Normal = 0
  constructor() { }

  ngOnInit(): void {
    setInterval(() => { this.value++ }, 3000)
  }

  loginForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(9)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(9)]),
    fullName: new FormControl('', [Validators.required, Validators.minLength(7), Validators.maxLength(16)]),
    age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(100)]),
    phoneNumber: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    gender: new FormControl('', [Validators.required, Validators.minLength(4)]),
    state: new FormControl('', [Validators.required, Validators.minLength(4)])
  });

  // get firstName() {
  //   return this.loginForm.get('firstName');
  // }
  // get lastName() {
  //   return this.loginForm.get('lastName');
  // }
  // get fullName() {
  //   return this.loginForm.get('fullName');
  // }
  // get age() {
  //   return this.loginForm.get('age');
  // }
  // get phoneNumber() {
  //   return this.loginForm.get('phoneNumber');
  // }
  // get password() {
  //   return this.loginForm.get('password');
  // }
  // // get email() {
  // //   return this.loginForm.get('email');
  // // }
  // get gender() {
  //   return this.loginForm.get('gender');
  // }
  // get state() {
  //   return this.loginForm.get('state');
  // }


  loginUser() {
    console.log(this.loginForm.value)
    return this.submitted = true
  }


  onClick() {
    console.log("data")
  }

     count(event:string){
   if(event==='max') this.Normal++
   if(event==='min') this.Normal--
   }
}