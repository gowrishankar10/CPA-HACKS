import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../Service/login.service';
@Component({
  selector: 'app-hacks-login',
  templateUrl: './hacks-login.component.html',
  styleUrls: ['./hacks-login.component.css']
})
export class HacksLoginComponent {
  constructor(private LoginService: LoginService, private router: Router) {}

  loginForm!: FormGroup;
  error: any = '';

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
    this.LoginService.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    );
    }

    this.LoginService.loginError.subscribe((error) =>{
      this.error = error;
    })

  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
