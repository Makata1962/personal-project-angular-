import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpResponse } from '../shared/interfaces/interfaces';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {
 public signupForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname: [null, Validators.required],
      email: [null, Validators.required],
      phoneNumber: [null, Validators.required],
      password: [null, Validators.required, Validators.minLength(8)],
    });
  }

  signUp() {
    this.http
      .post<SignUpResponse>(
        'http://localhost:3000/users',
        this.signupForm.value
      )
      .subscribe({
        next: () => {
          this.signupForm.reset();
          this.router.navigate(['/']);
        },
        error: (err) => {
          alert(`${err.message}`);
          alert('Something went wrong');
        },
      });
  }
}
