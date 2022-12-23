import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 private url = "https://portfolio-backend-marianopuchetta.koyeb.app/authenticate";
  current_user_subject: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.current_user_subject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem('current_user') || '{}'));
  }
  login(credenciales: any): Observable<any> {
    return this.http.post(this.url, credenciales).pipe(map(data => {
      sessionStorage.setItem('current_user', JSON.stringify(data))
      this.current_user_subject.next(data);
      return data;
    }))
  }
  logout(){
    sessionStorage.removeItem('current_user');
    location.reload();

  }
  get current_user_autenticado() {
    return this.current_user_subject.value;
  }
   isLogIn(): boolean{
    return(sessionStorage.getItem('current_user') !== null);
  }
}
