import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlockUIModule } from 'ng-block-ui';
import {ContentVerificationComponent } from '../../Components/content-verification/content-verification.component'
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
 
import { FormsModule } from '@angular/forms'
import {NgxPaginationModule} from 'ngx-pagination';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatMenuModule} from '@angular/material/menu';
const routes: Routes = [{
  path:'',
  component:ContentVerificationComponent
}];

@NgModule({
  declarations:[ContentVerificationComponent],
  imports: [RouterModule.forChild(routes),CommonModule,NgxPaginationModule,FormsModule,MatTabsModule,MatMenuModule,MatCheckboxModule,MatSlideToggleModule,MatRadioModule,BlockUIModule,MatExpansionModule,MatFormFieldModule,MatInputModule],
  exports: [RouterModule]
})
export class ContentVerificationRoutingModule { }
