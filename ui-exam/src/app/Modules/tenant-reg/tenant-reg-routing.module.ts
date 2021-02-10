import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { TenantRegComponent } from './../../Components/tenant-reg/tenant-reg.component';
import { RegistrationSuccessfulComponent } from './../../Components/registration-successful/registration-successful.component';

import {MatCheckboxModule} from '@angular/material/checkbox';
import { BlockUIModule } from 'ng-block-ui';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule,MatFormFieldModule,MatInputModule,MatRippleModule} from '@angular/material';
import {ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [{
  path:"",
  component:TenantRegComponent
},
{
  path:"successful",
  component:RegistrationSuccessfulComponent
}];

@NgModule({
  declarations:[TenantRegComponent,RegistrationSuccessfulComponent],
  imports: [RouterModule.forChild(routes),CommonModule,FormsModule,MatCheckboxModule,
    BlockUIModule.forRoot(),MatStepperModule,MatButtonModule,MatFormFieldModule,MatInputModule,MatRippleModule,ReactiveFormsModule],
  exports: [RouterModule]
})
export class TenantRegRoutingModule { }
