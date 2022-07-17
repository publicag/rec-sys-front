import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private authURL: string = environment.url + "accounts";
  private userSubject: BehaviorSubject<User | null>;
  public user: Observable<User | null>

  constructor(private router: Router, private httpClient: HttpClient) { 
    this.userSubject = new BehaviorSubject<User | null>(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value!;
  }

  login(username: string, password: string) {
    return this.httpClient.post<any>(this.authURL + "/login", {email: username, password})
    .pipe(map(user => {
      localStorage.setItem('user', JSON.stringify(user.token));
      this.userSubject.next(user.token);
      return user.token;
    }))
  }

  logout(): void {
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/login']);
  }

  register(firstName: string, lastName: string, userName: string, email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(this.authURL + "/register", {
      firstName,
      lastName,
      userName,
      email,
      password
    });
  }
}
