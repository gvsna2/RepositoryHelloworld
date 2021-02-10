import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ReportsComponent } from './../../Components/reports/reports.component';
import { FormsModule } from '@angular/forms';
import { BlockUIModule } from 'ng-block-ui';
import {MatRadioModule} from '@angular/material/radio';

import {MatCheckboxModule} from '@angular/material/checkbox';

const routes: Routes = [{
  path:"",
  component:ReportsComponent
}];

@NgModule({
  declarations:[ReportsComponent],
  imports: [RouterModule.forChild(routes),CommonModule,FormsModule,
    BlockUIModule.forRoot(),MatRadioModule,MatCheckboxModule],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
