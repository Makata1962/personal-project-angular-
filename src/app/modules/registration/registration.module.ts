import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import {  ReactiveFormsModule } from '@angular/forms';

//dropzone
import { FormsModule } from '@angular/forms';
import { NgxFileDropModule } from 'ngx-file-drop'
import { SharedcomponentsModule } from 'src/app/shared/sharedcomponents.module';


@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgxFileDropModule,
    SharedcomponentsModule
  ]
})
export class RegistrationModule { }
