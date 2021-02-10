import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { ListUsersComponent } from './../../Components/list-users/list-users.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatMenuModule} from '@angular/material/menu';
import { BlockUIModule } from 'ng-block-ui';
import {PopoverModule} from "ngx-smart-popover";


const routes: Routes = [{
  path : '',
  component : ListUsersComponent
}];

@NgModule({
  declarations: [ListUsersComponent],
  imports: [RouterModule.forChild(routes),PopoverModule,CommonModule,MatMenuModule,FormsModule,MatCheckboxModule,
    BlockUIModule.forRoot()],
  exports: [RouterModule]
})
export class ListUsersRoutingModule { }
