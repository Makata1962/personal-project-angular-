import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from 'src/app/shared/sharedcomponents/header/header.component';
import { RegistrationModule } from '../registration/registration.module';


@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    RegistrationModule
  ]
})
export class LandingModule { }
