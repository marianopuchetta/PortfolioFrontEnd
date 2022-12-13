import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://portfolio-backend-marianopuchetta.koyeb.app/user';
  currentUSerSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.currentUSerSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('currentUser') || '{}'))
  }
  login(credentials: any): Observable<any> {
    return this.http.post(this.apiUrl, credentials).pipe(map(data => {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentUSerSubject.next(data);
      return data;
    }))
  }
  logout() {
    sessionStorage.removeItem('token')
  }
  get isLogin(): boolean {
    return (sessionStorage.getItem('tokem') !== null);
  }
  get authUser() {
    return this.currentUSerSubject.value;
  }
}
