import { RegisterComponent } from './feature/auth/register/register.component';
import { LoginComponent } from './feature/auth/login/login.component';
import { NoRegisterUserComponent } from './feature/noRegisterUser/noRegisterUser.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from './core/guards/Auth/auth-guard.guard';
import { LogoutGuardGuard } from './core/guards/logout/logout-guard.guard';


const routes: Routes = [
  {
    path: '',
    canActivate:[LogoutGuardGuard],
    component:NoRegisterUserComponent
  },
  {
    path: 'login',
    canActivate:[LogoutGuardGuard],
    component:LoginComponent
  },
  {
    path: 'registro',
    canActivate:[LogoutGuardGuard],
    component:RegisterComponent
  },
  {
    path: 'user',
    canActivate:[AuthGuardGuard],
    loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule)
  },
  {
    path: '**',
    redirectTo:'login',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
