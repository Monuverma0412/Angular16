import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent implements OnInit {
  result: string = ''

  constructor() { }
  ngOnInit() { }

  onClick(value: string) {

    let last = this.result.slice(-1);
    if (value == '=') {
      this.data();
    }
    else if (value == 'AC') {
      this.result = '';
    }
    else if (!isNaN(parseInt(last)) || !isNaN(parseInt(value))) {
      this.result += value;
    }
    else if (value == '+' || value == '-' || value == '*' || value == '/' || value == '%' || value == '.') {
      if (last == '+' || last == '-' || last == '*' || last == '/' || last == '%' || last == '.') {
        this.result = this.result.slice(0, -1);
      }
      this.result += value;
    }
    else {
      this.result += '';
    }
  }

  data() {
    try {
      this.result = eval(this.result).toString();
    } catch (error) {
      this.result = '';
    }
  }
  delete() {
    this.result = this.result.slice(0, -1);
  }
}

