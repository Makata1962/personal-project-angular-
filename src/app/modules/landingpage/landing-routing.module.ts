import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ListComponent } from '../note-list/list/list.component';
import { RegistrationComponent } from '../registration/registration/registration.component';

const routes: Routes = [
  {
    path: 'registration',
    canLoad: [AuthGuard],
    loadChildren: () =>
    import('../registration/registration.module').then((m) => m.RegistrationModule
    ),
    component:RegistrationComponent
  },
  {
    path: 'notelist',
    canLoad: [AuthGuard],
    loadChildren: () =>
    import('../note-list/list.module').then((m) => m.ListModule
    ),
    component:ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
