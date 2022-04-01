
import { AuthGuardGuard } from './../../core/guards/Auth/auth-guard.guard';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RollComponent } from './roll/roll.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {
      path: '',
      canActivate:[AuthGuardGuard],
      children: [
      {
        path: '',
        component:AdminComponent
      },

      {
        path: 'roll',
        component:RollComponent
      },
      {
        path: 'user',
        component:UserComponent
      },
      {
        path: '**',
        redirectTo:'',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
