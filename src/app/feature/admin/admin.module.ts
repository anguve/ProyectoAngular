import { CreateRollComponent } from './roll/createRoll/createRoll.component';
import { RollComponent } from './roll/roll.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeatureRoutingModule } from './../feature-routing.module';
import { EditUserComponent } from './user/editUser/editUser.component';
import { UserComponent } from './user/user.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { EditRollComponent } from './roll/editRoll/editRoll.component';


@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FeatureRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  declarations: [AdminComponent,UserComponent,EditUserComponent,RollComponent,EditRollComponent,CreateRollComponent]
})
export class AdminModule { }
