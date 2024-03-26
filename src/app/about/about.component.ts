import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  submitted=false
  // data:any
// selected = 1
// cleck =0
// pageTitle='test'
// bookTitle = 'hello'
  ngOnInit(): void {
  //  setInterval(()=>{this.selected++}, 2000)
  //  setInterval(()=>{this.cleck++},3000)
  }
  // dataKeyUp: string = '';
  // dataKeyDown: string = '';

  // get1(value:string) {
  //   this.dataKeyDown = value;
  //   console.log('Button Clicked');
  // }

  // get(data: string) {
  //   this.dataKeyUp = data;
  // }

  // onClick(){
  //   alert('button pressed')
  // }
  // count(event:string){
  //   if(event==='add') this.selected++
  //   if(event==='sub') this.selected--
  // }


Submit(value:string){
console.log(value)
this.submitted = true
}


}
