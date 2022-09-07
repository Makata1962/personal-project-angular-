import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './modules/landingpage/landing/landing.component'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './modules/registration/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './modules/note-list/list/list.component';
import { AuthentificationComponent } from './auth/authentification.component'; 
import { SingupComponent } from './singup/singup.component';
import { HeaderComponent } from './shared/sharedcomponents/header/header.component';
import { LandingModule } from './modules/landingpage/landing.module';
import { ListModule } from './modules/note-list/list.module';
import { RegistrationModule } from './modules/registration/registration.module';

 
@NgModule({
  declarations: [AppComponent, AuthentificationComponent, SingupComponent, HeaderComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    LandingModule,
    ListModule,
     RegistrationModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
