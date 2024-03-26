import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class BookService {
  private mockedBooks = [
    { "id": 1, "title": 'The Catcher in the Rye', "author": 'J.D. Salinger' },
    { "id": 2, "title": 'To Kill a Mockingbird', "author": 'Harper Lee' },
    { "id": 3, "title": "1984", "author": "George Orwell" },
    { "id": 4, "title": "The Great Gatsby", "author": "F. Scott Fitzgerald" },
    { "id": 5, "title": "One Hundred Years of Solitude", "author": "Gabriel Garcia Marquez" },
    { "id": 6, "title": "The Lord of the Rings", "author": "J.R.R. Tolkien" },
    { "id": 7, "title": "Pride and Prejudice", "author": "Jane Austen" },
    { "id": 8, "title": "The Hobbit", "author": "J.R.R. Tolkien" },
    { "id": 9, "title": "Brave New World", "author": "Aldous Huxley" },
    { "id": 10, "title": "Harry Potter and the Sorcerer's Stone", "author": "J.K. Rowling" }
  ];

  constructor() { }

  getBooks(): Observable<any[]> {
    return of(this.mockedBooks);
  }
}
