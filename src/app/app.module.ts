import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './modules/landingPage/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './modules/registration/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './modules/note-list/list/list.component';
import { AuthentificationComponent } from './auth/authentification.component';
import { SingupComponent } from './singup/singup.component';
import { HeaderComponent } from './shared/sharedcomponents/header/header.component';

 
@NgModule({
  declarations: [AppComponent, LandingComponent, RegistrationComponent, ListComponent, AuthentificationComponent, SingupComponent, HeaderComponent, ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
