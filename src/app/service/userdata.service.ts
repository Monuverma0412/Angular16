import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserdataService implements OnInit {

  constructor(private http: HttpClient) { }
  url = 'https://jsonplaceholder.typicode.com/posts'
  ngOnInit(): void { }

  users(): Observable<any[]> {
    return this.http.get<any[]>(this.url)
  }
}
