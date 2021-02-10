import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ExamComponent,MinuteSecondsPipe } from './../../Components/exam/exam.component';
import { CounterDirective } from './../../Components/exam/counter.directive';
import { WebcamModule } from 'ngx-webcam';
import {  ResumeUploadComponent }  from './../../Components/resume-upload/resume-upload.component';
import {NgxFilesizeModule} from 'ngx-filesize';
import { NoRightClickDirective } from './../../Components/exam/no-right-click.directive';
import { BlockUIModule } from 'ng-block-ui';
import { ChartsModule } from 'ng2-charts';
import {StarRatingModule} from 'angular-star-rating';
const routes: Routes = [

  {
    path:":id",
    component : ExamComponent
  },
  {
    path:"results/profileupload/:encryptedToken",
    component : ResumeUploadComponent
  }


];

@NgModule({
  declarations:[ExamComponent,CounterDirective,ResumeUploadComponent,MinuteSecondsPipe,NoRightClickDirective],
    
    imports: [RouterModule.forChild(routes),BlockUIModule.forRoot(),StarRatingModule.forRoot(),CommonModule, WebcamModule,NgxFilesizeModule,ChartsModule],
  exports: [RouterModule]
})
export class ExamRoutingModule { }
