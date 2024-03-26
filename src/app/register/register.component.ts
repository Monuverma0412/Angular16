import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user : any = {  name: '', lastNmae:"", dob: '',  password: '' };

  constructor(){}

ngOnInit(): void {
  this.submitForm();
}
  submitForm() {
    console.log('Form submitted:', this.user);
  }
}
