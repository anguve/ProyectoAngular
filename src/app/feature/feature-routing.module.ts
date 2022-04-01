import { AuthGuardGuard } from './../core/guards/Auth/auth-guard.guard';
import { FeatureComponent } from './feature.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AdminGuardGuard } from '../core/guards/admin/admin-guard.guard';
import { ProductComponent } from './product/product/product.component';


const routes: Routes = [
  {
    path: '',
    canActivate:[AuthGuardGuard],
    children: [
      {
        path: '',
        component:FeatureComponent
      },

      {
        path: 'productos',
        component:ProductComponent,
        canActivate:[AuthGuardGuard],
      },
      {
        path: 'admin',
        canActivate:[AuthGuardGuard,AdminGuardGuard],
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      },

      {
        path: '**',
        redirectTo:'login',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
