import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestSetupComponent } from './../../Components/test-setup/test-setup.component';
import { SectionsComponent } from './../../Components/sections/sections.component';
import { TestSetupDoneComponent } from './../../Components/test-setup-done/test-setup-done.component';
import { TestInstanceDoneComponent } from './../../Components/test-instance-done/test-instance-done.component';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import {SectionsModule} from './../../Modules/sections/sections.module';
import { TreeModule } from 'angular-tree-component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {SectionFilterPipe} from './../../Components/sections/section-filter.pipe';
import { BlockUIModule } from 'ng-block-ui';
import {PopoverModule} from "ngx-smart-popover";
import {AddQuestionComponent } from "./../../Components/add-question/add-question.component"
import { from } from 'rxjs';
// import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
// import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';


import {NgxPaginationModule} from 'ngx-pagination';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

const routes: Routes = [
  {
    path:"",
    component : TestSetupComponent
  },
  {
    path:"edit/:id",
    component : TestSetupComponent
  },
  {
    path : "sections/:id",
    component : SectionsComponent
    },
  {
    path:"done/:id",
    component : TestSetupDoneComponent
  },
  {
    path:"instance/:id",
    component : TestInstanceDoneComponent
  }

  
];

@NgModule({
  declarations:[TestSetupComponent,TestSetupDoneComponent,AddQuestionComponent,TestInstanceDoneComponent],
  imports: [RouterModule.forChild(routes),BlockUIModule.forRoot(),PopoverModule,AutocompleteLibModule,TreeModule.forRoot(),CommonModule,FormsModule
   ,MatRadioModule,NgxPaginationModule,MatCheckboxModule,MatRadioModule,MatSlideToggleModule,AngularMultiSelectModule,MatAutocompleteModule],
  exports: [RouterModule,AutocompleteLibModule,TreeModule,MatRadioModule,NgxPaginationModule,MatCheckboxModule,MatRadioModule,MatSlideToggleModule,AngularMultiSelectModule,MatAutocompleteModule],
})
export class TestSetupRoutingModule { }
