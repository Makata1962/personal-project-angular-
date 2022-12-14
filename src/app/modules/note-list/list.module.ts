import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list/list.component';
import { SharedcomponentsModule } from 'src/app/shared/sharedcomponents.module';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, ListRoutingModule, SharedcomponentsModule ],
  providers: [],
})
export class ListModule {}
