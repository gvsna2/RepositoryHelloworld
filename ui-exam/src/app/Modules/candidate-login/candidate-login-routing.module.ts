import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CandidateLoginComponent } from './../../Components/candidate-login/candidate-login.component'

const routes: Routes = [{
  path:"",
  component: CandidateLoginComponent
}];

@NgModule({
  declarations:[CandidateLoginComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateLoginRoutingModule { }
