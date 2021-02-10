import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { QuestionFilterPipe } from './../../Pipes/question-filter.pipe';
import { ListQuestionsComponent } from './../../Components/list-questions/list-questions.component';

import {NgxPaginationModule} from 'ngx-pagination';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { BlockUIModule } from 'ng-block-ui';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';

import {PopoverModule} from "ngx-smart-popover";

const routes: Routes = [{
  path : "",
  component : ListQuestionsComponent
}];

@NgModule({
  declarations: [ListQuestionsComponent,QuestionFilterPipe],
  imports: [RouterModule.forChild(routes),CommonModule,FormsModule,NgxPaginationModule,
    AngularMultiSelectModule,BlockUIModule.forRoot(),MatCheckboxModule,MatRadioModule,
      MatSlideToggleModule,MatTabsModule,MatMenuModule,PopoverModule],
  exports: [RouterModule]
})
export class ListQuestionsRoutingModule { }
