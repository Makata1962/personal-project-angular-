import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { ListComponent } from 'src/app/modules/note-list/list/list.component';
import { RegistrationComponent } from 'src/app/modules/registration/registration/registration.component';

const routes: Routes = [
 {
    path: 'registration',
    canActivate: [AuthGuard],
    loadChildren: () =>
    import('../modules/registration/registration.module').then((m) => m.RegistrationModule
    ),
    component:RegistrationComponent
  },
  {
    path: 'notelist',
    canActivate: [AuthGuard],
    loadChildren: () =>
    import('../modules/note-list/list.module').then((m) => m.ListModule
    ),
    component:ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedcomponentsRoutingModule { }
