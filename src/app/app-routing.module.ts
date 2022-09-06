import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './auth/authentification.component';
import { LandingComponent } from './landingPage/landing.component';
import { ListComponent } from './modules/note-list/list/list.component';
import { RegistrationComponent } from './modules/registration/registration/registration.component';
import { SingupComponent } from './singup/singup.component';

const routes: Routes = [
  {
    path: '',
    component: AuthentificationComponent
  },
  {
    path: 'signup',
    component: SingupComponent
  },

  {
    path: 'landingpage',
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
