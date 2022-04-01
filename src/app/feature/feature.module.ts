import { ModalOpenEditComponent } from './product/product/modalOpenEdit/modalOpenEdit.component';
import { ModalCreateComponent } from './product/product/modalCreate/modalCreate.component';



import { ModalViewProductComponent } from './product/product/modalViewProduct/modalViewProduct.component';

import { LoginComponent } from './auth/login/login.component';
import { ModalHeaderComponent } from './header/modalHeader/modalHeader.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './feature.component';
import { FeatureRoutingModule } from './feature-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoRegisterUserComponent } from './noRegisterUser/noRegisterUser.component';
import { AuthGuardGuard } from '../core/guards/Auth/auth-guard.guard';
import { ProductComponent } from './product/product/product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterComponent } from './auth/register/register.component';
import { ModalToSellComponent } from './product/product/modalToSell/modalToSell.component';



@NgModule({
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,

  ],
  declarations: [
    FeatureComponent,
    ModalHeaderComponent,
    NoRegisterUserComponent,
    LoginComponent,
    ProductComponent,
    RegisterComponent,
    ModalViewProductComponent,
    ModalToSellComponent,
    ModalCreateComponent,
    ModalOpenEditComponent

  ],
  providers:[
    AuthGuardGuard,

  ]
})
export class FeatureModule { }
