import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user : any = {  phone: '',  gmail: '' };

  constructor(){}

ngOnInit(): void {
  this.submitForm();
}
  submitForm() {
    console.log('Form submitted:', this.user);
  }

}
