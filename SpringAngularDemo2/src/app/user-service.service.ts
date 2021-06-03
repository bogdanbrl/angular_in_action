import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './user';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  getUsers(url: string): Observable<any> {
    return this.http.get(url);
  }

  public save(user: User): void {
    this.http.post<User>(this.usersUrl, user);
  }
}
