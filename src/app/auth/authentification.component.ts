import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export type SignUpResponse = {
  fullname?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
};

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {
  public loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private auth: AuthService,
    private router: Router,

) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  
  onSubmit() {
    this.http.get<SignUpResponse[]>('http://localhost:3000/users').subscribe({
      next: (res) => {
        const user = res.find((a: SignUpResponse) => {
          return (
            a.email === this.loginForm.value.email &&
            a.password === this.loginForm.value.password
          );
        });
        if (user) {
          this.auth.login();
          this.loginForm.reset();
          this.router.navigate(['/landingpage']);
        } else {
          alert('თქვენ დარეგისტრირებული არ ხართ, გთხოვთ დარეგისტრირდეთ!');
        }
      },
      error: (err) => alert(`${err.message}`)
    });
  }
}
