import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '';

  ngOnInit(): void {
    for (let i = 5; i > 0; i--) {
      let a = ""
      for (let j = 0; j < i; j++) {
        a += '*'
      }
      
      this.title += a;
      this.title += '<br>'
      
    }
  }
}
