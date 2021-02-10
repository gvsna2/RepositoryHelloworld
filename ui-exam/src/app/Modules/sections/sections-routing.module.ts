import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
//import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { SectionsComponent } from './../../Components/sections/sections.component';
import {SectionFilterPipe} from './../../Components/sections/section-filter.pipe';
import { BlockUIModule } from 'ng-block-ui';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {PopoverModule} from "ngx-smart-popover";
import { TagInputModule } from 'ngx-chips';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
  path : "",
  component : SectionsComponent
  }
  
];

@NgModule({
  declarations:[SectionsComponent,
    SectionFilterPipe],
  imports: [RouterModule.forChild(routes),CommonModule,TagInputModule, 
    FormsModule,ReactiveFormsModule,BlockUIModule.forRoot(),
    AngularMultiSelectModule,PopoverModule,MatCheckboxModule,MatRadioModule,MatSlideToggleModule],
  exports: [RouterModule]
})
export class SectionsRoutingModule { }
