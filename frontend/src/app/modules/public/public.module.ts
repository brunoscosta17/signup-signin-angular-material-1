import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './modules/login/login.component';
import { SigninComponent } from './modules/signin/signin.component';
import { SignupComponent } from './modules/signup/signup.component';
import { PasswordResetComponent } from './modules/password-reset/password-reset.component';


@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    SignupComponent,
    PasswordResetComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule { }
