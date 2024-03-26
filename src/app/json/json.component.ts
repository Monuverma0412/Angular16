  import { Component, ViewChild } from '@angular/core';

  @Component({
    selector: 'app-json',
    templateUrl: './json.component.html',
    styleUrls: ['./json.component.css']
  })
  export class JSONComponent {

    searchText: any;
    filteredData: any = [];
    selectedUser: any;
    editUser: any;
    messageData:any;
    searchJson:any
    
    constructor() { }
     public data = [{ firstName: 'Ram', lastName: 'Sharma', gmail: 'ram@gmail.com', phone: '11223344' },

      { firstName: 'Rohan', lastName: 'Singh', gmail: 'rohan@gmail.com', phone: '11335577' },

      { firstName: 'Sohan', lastName: 'Singh', gmail: 'sohan@gmail.com', phone: "22446688" },

      { firstName: 'Seeta', lastName: 'Verma', gmail: 'seeta@gmail.com', phone: '33557799' },

      { firstName: 'Syam', lastName: 'Singh', gmail: 'syam@gmail.com', phone: '11447700' },

      { firstName: 'Rohit', lastName: 'kk', gmail: 'rohit@gmail.com', phone: '22660066' },

      { firstName: 'Mohil', lastName: 'sharma', gmail: 'mohit@gmail.com', phone: '44227799' },
      
      { firstName: 'Ranju', lastName: 'rani', gmail: 'ranju@gmail.com', phone: '88335500' },
      
      { firstName: 'Komal', lastName: 'rani', gmail: 'komal@gmail.com', phone: '33771188' },
      
      { firstName: 'Sunil', lastName: 'kumar', gmail: 'sunil@gmail.com', phone: '88335500' },
      ]

      public results = [...this.data];

    showUserData(person: any) {
      this.selectedUser = person;
    }

  edit(person: any) {
    this.editUser = { person };
  }

  cancelEdit() {
    this.editUser = null;
  }

  // update() {
  //   this.editUser = null; 
  // }

  delete(index: number) {
    this.results.splice(index, 1); 
  }

  // get jsonFilter(){
  //   if (this.searchJson.trim() === '') {
  //     return this.jsonData;
  //   } else {
  //        return this.jsonData.filter(e=> e.firstName == this.searchJson || e.lastName ==  this.searchJson)
  //   }
  // }

  
  handleInput() {
    this.results = this.data.filter((item) => 
     item.firstName.toLowerCase().includes( this.searchJson.toLowerCase())||
     item.lastName.toLowerCase().includes( this.searchJson.toLowerCase())
     
     );
  }


  }
