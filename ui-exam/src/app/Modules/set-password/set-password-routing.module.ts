import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'
import { SetPasswordComponent } from './../../Components/set-password/set-password.component';
import { BlockUIModule } from 'ng-block-ui';

const routes: Routes = [{
  path : "",
  component : SetPasswordComponent
}];

@NgModule({
  declarations:[SetPasswordComponent],
  imports: [RouterModule.forChild(routes),CommonModule,FormsModule,
    BlockUIModule.forRoot()],
  exports: [RouterModule]
})
export class SetPasswordRoutingModule { }
