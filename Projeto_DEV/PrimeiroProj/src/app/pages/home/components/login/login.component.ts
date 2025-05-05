import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { loginAnimations } from './login.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: loginAnimations
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    remember: [false]
  });

  showPassword = false;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private socialAuthService: SocialAuthService
  ) {}

  onSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      // Simulação de login (substitua por sua lógica real)
      setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/dashboard']);
      }, 1500);
    }
  }

  googleLogin() {
    this.isLoading = true;
    this.socialAuthService.signIn('google')
      .then(() => this.router.navigate(['/dashboard']))
      .catch(() => this.isLoading = false);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}