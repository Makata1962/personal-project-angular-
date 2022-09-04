import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list/list.component';
import { LaptopComponent } from './laptop/laptop.component';


@NgModule({
  declarations: [
    ListComponent,
    LaptopComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule
  ]
})
export class ListModule { }
