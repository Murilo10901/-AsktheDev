import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  onSubmit() {
    console.log('Email:', this.email);
    console.log('Senha:', this.senha);
    // Aqui você pode chamar um serviço de autenticação futuramente
  }
}
