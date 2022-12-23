import { Component, Input } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   isLoggedIn : boolean = false;
  title = 'frontend_portfolio';


  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
logout(){
  this.authService.logout();
  this.isLoggedIn = false;
}

}