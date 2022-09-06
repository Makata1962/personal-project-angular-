import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './auth/authentification.component';
import { AuthGuard } from './guards/auth.guard';
import { LandingComponent } from './modules/landingPage/landing.component';
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
    import('./modules/landingPage/landing.component').then((m) => m.LandingComponent
    ),
    component:LandingComponent
 },
  {
    path:'registration',
    canActivate: [AuthGuard],
    loadChildren: () =>
    import('./modules/registration/registration/registration.component').then((m) => m.RegistrationComponent
    ),
    component:LandingComponent
  },
  {
    path:'noteList',
    canActivate: [AuthGuard],
    loadChildren: () =>
    import('./modules/note-list/list/list.component').then((m) => m.ListComponent
    ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
