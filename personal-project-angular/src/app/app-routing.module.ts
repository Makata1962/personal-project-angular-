import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landingPage/landing.component';
import { LaptopComponent } from './modules/note-list/laptop/laptop.component';
import { ListComponent } from './modules/note-list/list/list.component';
import { RegistrationComponent } from './modules/registration/registration/registration.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  //   {
  //   path: 'registration',
  //   loadChildren: () =>
  //     import('./modules/registration/registration/registration.component').then((m) => m.RegistrationComponent),
  // }

  {
    path:'registration',
    component: RegistrationComponent
  },
  {
    path:'noteList',
    component: ListComponent
  },
  {
    path:'laptopInfo',
    component: LaptopComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
