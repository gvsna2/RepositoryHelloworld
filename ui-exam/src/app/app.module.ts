import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';

// angular material
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';

import {FormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ManageTestsComponent } from './Components/manage-tests/manage-tests.component';
import { ConfigureTestsComponent } from './Components/configure-tests/configure-tests.component';
import { AdministerTestComponent } from './Components/administer-test/administer-test.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';


import { ActivationComponent } from './Components/activation/activation.component';
import { TestInstanceDoneComponent } from './Components/test-instance-done/test-instance-done.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { CandidateResultComponent } from './Components/candidate-result/candidate-result.component';
import { AddQuestionComponent } from './Components/add-question/add-question.component';
import { SearchPipe } from './Components/administer-test/search.pipe';
 
import { ToastrModule } from 'ngx-toastr';
import { PinkToast } from './Components/custom-toast/custom-toast.component';
import { ContributeComponent } from './Components/contribute/contribute.component';




@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    ManageTestsComponent,
    ConfigureTestsComponent,
    AdministerTestComponent,
    ActivationComponent,
    ForgotPasswordComponent,
    CandidateResultComponent,
    SearchPipe,PinkToast, ContributeComponent,
    
  ],
  entryComponents: [PinkToast],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    MatExpansionModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    MatTabsModule,
    MatCheckboxModule,
    FormsModule,
    ToastrModule.forRoot(
      {toastComponent: PinkToast}
    )
    
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
