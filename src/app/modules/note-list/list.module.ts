import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list/list.component';
import { HeaderComponent } from 'src/app/shared/sharedcomponents/header/header.component';
// import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, ListRoutingModule],
  providers: [],
})
export class ListModule {}
