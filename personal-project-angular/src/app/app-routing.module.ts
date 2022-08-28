import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landingPage/landing/landing.component';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
