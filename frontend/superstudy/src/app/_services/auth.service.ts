import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'https://superstudybackend.glitch.me/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(@Inject(HttpClient) public http: HttpClient) {}

  login(login: string, password: string): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',
      {
        login,
        password,
      },
      httpOptions
    );
  }

  register(
    first_name: string,
    last_name: string,
    email: string,
    login: string,
    password: string,
    roles: string
  ): Observable<any> {
    
    console.log(first_name)
    return this.http.post(
      AUTH_API + 'signup',
      {
        first_name : first_name,
        last_name,
        email,
        login,
        password,
        roles
      },
      httpOptions
    );
  }
}
