import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { EvaluateTestComponent } from './../../Components/evaluate-test/evaluate-test.component';

import { EvaluateCandidateComponent } from './../../Components/evaluate-candidate/evaluate-candidate.component';

import { CandidateQuestionComponent } from './../../Components/candidate-question/candidate-question.component';

import { CodemirrorModule } from 'ng2-codemirror';
import { BlockUIModule } from 'ng-block-ui';
import {PopoverModule} from "ngx-smart-popover";

const routes: Routes = [{
  path:"",
  component:EvaluateTestComponent
},
// {
//   path:"candidate",
//   component:EvaluateCandidateComponent
// },
{
  path:"candidate/:id",
  component:EvaluateCandidateComponent
},
{
  path:"test/questions/:testInstanceId",
  component:CandidateQuestionComponent
}];

@NgModule({
  declarations: [EvaluateTestComponent,EvaluateCandidateComponent,CandidateQuestionComponent],
  imports: [RouterModule.forChild(routes),PopoverModule,CommonModule,CodemirrorModule,FormsModule,
    BlockUIModule.forRoot()],
  exports: [RouterModule]
})
export class EvaluateCandidateRoutingModule { }
