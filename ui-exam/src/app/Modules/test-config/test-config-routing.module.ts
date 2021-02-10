import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockUIModule } from 'ng-block-ui';
import {DatePipe} from '@angular/common';

import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TestConfigComponent } from './../../Components/test-config/test-config.component';
import { TestAdministrationComponent } from './../../Components/test-administration/test-administration.component';
import { TestConfigDoneComponent } from './../../Components/test-config-done/test-config-done.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import {MatButtonModule,MatFormFieldModule,MatInputModule,MatRippleModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {PopoverModule} from "ngx-smart-popover";

const routes: Routes = [
  {
    path:"",
    component : TestAdministrationComponent
  },
  {
    path:":id",
    component : TestAdministrationComponent
  },
  {
    path:":id/edit",
    component : TestAdministrationComponent
  },
  {
    path:":id/create",
    component : TestAdministrationComponent
  },
  {
    path:":id/done",
    component : TestConfigDoneComponent
  }
  
  
];

@NgModule({

 providers: [ DatePipe],

  declarations:[TestConfigComponent,TestConfigDoneComponent, TestAdministrationComponent,],
  imports: [RouterModule.forChild(routes),BlockUIModule.forRoot(),CommonModule,ReactiveFormsModule,FormsModule,OwlDateTimeModule,OwlNativeDateTimeModule,AngularMultiSelectModule
  ,MatButtonModule,MatFormFieldModule,MatInputModule,PopoverModule,MatRippleModule,MatDatepickerModule,MatNativeDateModule],
  exports: [RouterModule,AngularMultiSelectModule,ReactiveFormsModule,FormsModule,OwlDateTimeModule,OwlNativeDateTimeModule]
})
export class TestConfigRoutingModule { }
