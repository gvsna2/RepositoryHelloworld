import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'
import { DashboardComponent } from './../../Components/dashboard/dashboard.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {PopoverModule} from "ngx-smart-popover";
const routes: Routes = [{
  path:"",
  component:DashboardComponent
}];

@NgModule({
  declarations:[DashboardComponent],
  imports: [RouterModule.forChild(routes),CommonModule,MatCheckboxModule,PopoverModule],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
