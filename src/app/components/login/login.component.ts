import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  error_login: boolean= false;
  constructor(private formBuilder: FormBuilder, private authService: AuthService,
    private router: Router) {

    this.form = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
  ngOnInit(): void {
  }
  get Password() {
    return this.form.get("password");
  }

  get Mail() {
    return this.form.get("username");
  }

  get PasswordValid() {
    return this.Password?.touched && !this.Password?.valid;
  }

  get MailValid() {
    return false;
  }
 
  onSend(event: Event) {
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault;
    this.error_login = false;
    if (this.form.valid) {
      this.authService.login(this.form.value).subscribe(data => {
        console.log("data: " + JSON.stringify(data));
        this.router.navigate(['/home']);
      }, err => {
        this.error_login = true;
    })
    } else {
      this.form.markAllAsTouched();
    }
  }
}
