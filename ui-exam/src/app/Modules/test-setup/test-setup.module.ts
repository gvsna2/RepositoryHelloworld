import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SectionsModule} from './../../Modules/sections/sections.module';  
import { TestSetupRoutingModule } from './test-setup-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TestSetupRoutingModule,
    SectionsModule
  ]
})
export class TestSetupModule { }
