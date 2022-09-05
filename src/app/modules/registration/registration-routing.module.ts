import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
//  {
//   path:'registration',
//   component:RegistrationComponent
//  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
