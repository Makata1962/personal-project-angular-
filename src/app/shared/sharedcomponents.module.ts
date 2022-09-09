import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedcomponentsRoutingModule } from './sharedcomponents-routing.module';
import { HeaderComponent } from './sharedcomponents/header/header.component';


@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    SharedcomponentsRoutingModule
  ],
  exports: [HeaderComponent]
})
export class SharedcomponentsModule { }
