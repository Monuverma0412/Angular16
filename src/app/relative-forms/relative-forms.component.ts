import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-relative-forms',
  templateUrl: './relative-forms.component.html',
  styleUrls: ['./relative-forms.component.css']
})
export class RelativeFormsComponent implements OnInit {
  ngOnInit(): void {
  }
  signUpForm = new FormGroup({
    firstName: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
    lastName: new FormControl("", [
      Validators.required,
      Validators.minLength(5)
    ]),
    address: new FormGroup({
      street: new FormControl("", [
        Validators.required,
        Validators.minLength(5)
      ]),
      city: new FormControl("", [Validators.required, Validators.minLength(5)]),
      region: new FormControl("", [Validators.required])
    })
  });

  updateProfile() {
    this.signUpForm.patchValue({
      firstName: "Jane",
      lastName: "Smith",
      address: {
        street: "123 1st Street"
      }
    });
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }
}