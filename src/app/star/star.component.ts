import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  title = '';
  array: any
  ngOnInit(): void {

    this.transfer()
  }
  transfer() {
    const count = parseInt(prompt() || '0')
    if (!count) return alert('No user input value')
    for (let index = 0; index <= count; index++) {
      let a = ''
      for (let i = count; i > index; i--) {
        a += ' '
      }
      for (let j = 0; j < index * 2 - 1; j++) {
        a += index
      }
      this.title += a;
      this.title += "<br>"
    }

    for (let index = count - 1; index > 0; index--) {
      let a = ''
      for (let i = index; i < count; i++) {
        a += ' '
      }
      for (let j = 0; j < index * 2 - 1; j++) {
        a += index
      }
      this.title += a;
      this.title += "<br>"
    }

    // for (let i = 1; i <= count; i++) {
    //   let a = "";
    //   for (let j = 1; j < count - i + 1; j++) {
    //     a += " ";
    //   }
    //   for (let k = 1; k < i * 2; k++) {
    //     a += i;
    //   }
    //   this.title += a;
    //   this.title += "<br>"
    // }

    // for (let i = count-1; i >0; i--) {
    //   let a = "";
    //   for (let j = 1; j < i + 1; j++) {
    //     a += " ";
    //   }
    //   for (let k = 1; k <= 2 * (count - i) - 1; k++) {
    //     a += i;
    //   }
    //     this.title += a;
    //     this.title += "<br>"
    // }

    // for (let index = input-1; index >0; index--) {
    //     let b = ''
    //     for (let j = 0; j < index*2-1; j++) {
    //         b += index
    //     }
    //    console.log(b)
    // }

    // for (let i = 1; i <= 5; i++) {
    //   let a = "";
    //   for (let j = 1; j <= i; j++) {
    //     a += j;
    //   }
    //   this.title+=a;
    //   this.title+="<br>"
    // }

    // for (let i = 5; i > 0; i--) {
    //   let a = ""
    //   for (let j = 0; j < i*2-1; j++) {
    //           a +=  j- i +5;
    //   }
    //   this.title += a;
    //   this.title += '<br>'
    // }


    // for (let i = 0; i < 5; i++) {
    //   let a = "";
    //   for (let j = 0; j < 5; j++) {
    //     a += "*";
    //   }
    //   this.title += a;
    //   this.title += "<br>";
    // }


    // for (let i = 1; i <= 5; i++) {
    //   let a = "";
    //   for (let j = 0; j < 5 - i; j++) {
    //     a += " ";
    //   }
    //   for (let k = 0; k < i*2-1; k++) {
    //     a += "*";
    //   }
    //   this.title += a;
    //   this.title += "<br>"
    // }

    // for (let i = 0; i <= 5; i++) {
    //   let a = "";
    //   for (let j = 0; j < 0; j++) {
    //     a += " "
    //   }
    //   for (let k = 0; k < i; k++) {
    //     a += "*"
    //   }
    //   this.title += a;
    //   this.title += "<br>"
    // }




    // for (let i = 5; i >= 1; i--) {
    //   let a = " ";
    //   for (let j = 5; j > i; j--) {
    //     a += " ";
    //   }
    //   for (let k = 0; k < i*2-1; k++) {
    //     a += "*";
    //   }
    //   this.title += a;
    //   this.title += "<br>";
    // }

    // for (let i = 5; i >= 1; i--) {
    //   let a = " ";
    //   for (let j = 5; j > i; j--) {
    //     a += " ";
    //   }
    //   for (let k = 0; k < i*2-1; k++) {
    //         a +=  k- i +5;

    //   }
    //   this.title += a;
    //   this.title += "<br>";
    // }


    // for (let i = 5; i > 0; i--) {
    //   let a = "  ";
    //   for (let j = 5; j > i; j--) {
    //     a += " ";
    //   }
    //   for (let k = 0; k < i * 2 - 1; k++) {
    //     a += "*";
    //   }
    //   this.title += a;
    //   this.title += "<br>";
    // }


    // for (let i = 5; i > 0; i--) {
    //   let a = "  ";
    //   for (let j = 5; j > i; j--) {
    //     a += " ";
    //   }
    //   for (let k = 0; k < i * 2 - 1; k++) {
    //         a +=  k- i +5;
    //   }
    //   this.title += a;
    //   this.title += "<br>";
    // }
    // for (let i = 5; i > 0; i--) {
    //   let a = ""
    //   for (let j = 0; j < i; j++) {
    //     a += '*'
    //   }
    //   this.title += a;
    //   this.title += '<br>'
    // }

    // for (let i = 8; i > 0; i--) {
    //   let a = ''
    //   for (let j = 0; j < i; j++) {
    //     a += "*"
    //   }
    //   this.title += a;
    //   this.title += "<br>"
    // }

    //   for (let i = 1; i <= 5; i++) {
    //   let a = "";
    //   for (let j = 1; j <= 5 - i+ 1; j++) {
    //     a += 5 - j - i + 2;
    //   }
    //   a += "";
    //   this.title += a;
    //   this.title += "<br>"
    // }

    // for (let i = 1; i <= 6; i++) {
    //   let a = " ";
    //   for (let j = 2; j < 3- i; j++) {
    //     a += " ";
    //   }
    //   for (let k = 0; k < i * 2 - 1; k++) {
    //     a +=  i ;

    //   }
    //   this.title += a;
    //   this.title += "<br>"

    // }


  }
}