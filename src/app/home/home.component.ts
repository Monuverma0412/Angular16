import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  originalArray: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  ngOnInit(): void {
    const input = parseInt(prompt() || '0') 
    this.transfer(this.originalArray, input);
  }

  transfer(array: any[], count: number) {

    for (let i = 0; i < count; i++) {
      array.unshift(this.originalArray.pop());
      // console.log(array);
    }
    return array;
  }

}




























// routeLastElement() {
//   const one = this.originalArray.pop();
//   this.originalArray.unshift(one); 

//   const two = this.originalArray.pop();
//   this.originalArray.unshift(two);

//   const three = this.originalArray.pop();
//   this.originalArray.unshift(three)
//   console.log(this.originalArray);
// } 