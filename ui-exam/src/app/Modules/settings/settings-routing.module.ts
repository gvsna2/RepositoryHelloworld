import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'; 
import { SettingsComponent } from './../../Components/settings/settings.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {PopoverModule} from "ngx-smart-popover";

const routes: Routes = [{
  path : "",
  component : SettingsComponent
}];

@NgModule({
  declarations:[SettingsComponent],
  imports: [RouterModule.forChild(routes),PopoverModule,FormsModule,CommonModule,MatCheckboxModule],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
