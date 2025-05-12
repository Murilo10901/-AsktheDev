import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/home/components/login/login.component';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { NgModule } from '@angular/core';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [
      
      SocialLoginModule
    ],
    providers: [
      {
        provide: 'SocialAuthServiceConfig',
        useValue: {
          autoLogin: false,
          providers: [
            {
              id: GoogleLoginProvider.PROVIDER_ID,
              provider: new GoogleLoginProvider('SEU_CLIENT_ID_GOOGLE_AQUI')
            }
          ]
        } as SocialAuthServiceConfig,
      }
    ]
  })
  export class AppModule { }
 
