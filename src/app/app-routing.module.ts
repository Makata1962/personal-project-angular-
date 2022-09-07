import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './auth/authentification.component';
import { AuthGuard } from './guards/auth.guard';
import { LandingComponent } from './modules/landingpage/landing/landing.component';
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
    canActivate: [AuthGuard],
    loadChildren: () =>
    import('./modules/landingpage/landing.module').then((m) => m.LandingModule
    ),
    component: LandingComponent
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
