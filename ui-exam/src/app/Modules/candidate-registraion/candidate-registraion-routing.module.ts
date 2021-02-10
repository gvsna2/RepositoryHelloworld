import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { CandidateRegistrationComponent } from './../../Components/candidate-registration/candidate-registration.component';
import {  CandidateLoginComponent } from './../../Components/candidate-login/candidate-login.component'
import { CandidateWalkinOtpComponent } from './../../Components/candidate-walkin-otp/candidate-walkin-otp.component';
import {DatePipe} from '@angular/common';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule,MatFormFieldModule,MatInputModule,MatRippleModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { BlockUIModule } from 'ng-block-ui';

const routes: Routes = [{
  path:'registration/:encryptedToken',
  component:CandidateRegistrationComponent
},
{
  path:'login/:encryptedToken',
  component:CandidateLoginComponent
},
{
  path:'walkin/:encryptedToken',
  component:CandidateWalkinOtpComponent
}];

@NgModule({
  providers: [ DatePipe],
  declarations:[CandidateRegistrationComponent,CandidateLoginComponent,CandidateWalkinOtpComponent],
  imports: [RouterModule.forChild(routes),MatStepperModule,
    MatButtonModule,MatFormFieldModule,MatInputModule,MatRippleModule,ReactiveFormsModule,
    FormsModule,CommonModule,MatDatepickerModule,MatNativeDateModule,MatCheckboxModule,
    BlockUIModule.forRoot()],
  exports: [RouterModule]
})
export class CandidateRegistraionRoutingModule { }
