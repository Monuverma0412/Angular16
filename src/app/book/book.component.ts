import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  constructor(){}

public datauser= [ 
    { "id": 1, "title": "The Catcher in the Rye", "author": "J.D. Salinger" },
    { "id": 2, "title": "To Kill a Mockingbird", "author": "Harper Lee" },
    { "id": 3, "title": "1984", "author": "George Orwell" },
    { "id": 4, "title": "The Great Gatsby", "author": "F. Scott Fitzgerald" },
    { "id": 5, "title": "One Hundred Years of Solitude", "author": "Gabriel Garcia Marquez" },
    { "id": 6, "title": "The Lord of the Rings", "author": "J.R.R. Tolkien" },
    { "id": 7, "title": "Pride and Prejudice", "author": "Jane Austen" },
    { "id": 8, "title": "The Hobbit", "author": "J.R.R. Tolkien" },
    { "id": 9, "title": "Brave New World", "author": "Aldous Huxley" },
    { "id": 10, "title": "Harry Potter and the Sorcerer's Stone", "author": "J.K. Rowling" }
  ]

  isGridView = false;
  isLightMode = true;
  isDarkMode = false;

  searchTerm :any= ''; 
  filteredBooks: any = [];

  switchToGridView() {
    this.isGridView = true;
  }

  switchToListView() {
    this.isGridView = false;
  }

  switchToLightMode() {
    this.isLightMode = true;
    this.isDarkMode = false;
  }

  switchToDarkMode() {
    this.isLightMode = false;
    this.isDarkMode = true;
  }


  get listItems(){
    if (this.searchTerm.trim() === '') {
      return this.datauser;
    } else {
         return this.datauser.filter(e=> e.id == this.searchTerm || e.author ==  this.searchTerm)
    }
  }
 
}