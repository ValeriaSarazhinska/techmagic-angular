import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly usersApiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers<T>(url: string = this.usersApiUrl): Observable<T> {
    return this.http.get<T>(url);
  }

  deleteUser(id: number) {
    return this.http.delete(`${this.usersApiUrl}/${id}`);
  }

  createUser(user: Omit<User, 'id' | 'image'>) {
    return this.http.post(this.usersApiUrl, user);
  }
}
