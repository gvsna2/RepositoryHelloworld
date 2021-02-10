import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './Components/header/header.component';
import { ManageTestsComponent } from './Components/manage-tests/manage-tests.component';
import { ConfigureTestsComponent } from './Components/configure-tests/configure-tests.component';
import { AdministerTestComponent } from './Components/administer-test/administer-test.component';
import { ActivationComponent } from './Components/activation/activation.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { NgxLoadingModule } from 'ngx-loading';
import { NgxDatetimeRangePickerModule } from 'ngx-datetime-range-picker';
import { TagInputModule } from 'ngx-chips';
import {NgxPaginationModule} from 'ngx-pagination';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';



// services
import { AuthenticationGaurdService } from './Services/Authentication-gaurd/authentication-gaurd.service'
import { LoginAuthService } from './Services/LoginAuth/login-auth.service';
import { LoggingOutService} from './Services/Loggin-Out/logging-out.service'
//block ui
import { BlockUIModule } from 'ng-block-ui';
import {MatMenuModule} from '@angular/material/menu';
import {MatRadioModule} from '@angular/material/radio';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';

import { CandidateResultComponent } from './Components/candidate-result/candidate-result.component';
import {PopoverModule} from "ngx-smart-popover";
import {DownloadsComponent} from './Components/downloads/downloads.component';
import {ContributeComponent } from './Components/contribute/contribute.component'
import {StarRatingModule} from 'angular-star-rating';
import {MatInputModule} from '@angular/material/input';
 
const routes: Routes = [{
  path:"candidate-login",
  loadChildren:"./Modules/candidate-login/candidate-login.module#CandidateLoginModule",
  canActivate:[LoginAuthService]
},
{
  path:"candidate/results/:uniqueCode",
  component:CandidateResultComponent,
  canActivate:[LoggingOutService]
},
{
  path:"contribute/:instanceId",
  component:ContributeComponent,
  canActivate:[LoggingOutService]
},
{
  path:"terms-conditions",
  loadChildren: "./Modules/terms-condition/terms-condition.module#TermsConditionModule"
},
{
  path:"tenant-registration",
  loadChildren: "./Modules/tenant-reg/tenant-reg.module#TenantRegModule",
  canActivate:[LoginAuthService]
},
{
  path:"activation/:tassdsdxwergtyuoIasddE/:encryptId",
  component: ActivationComponent,
  canActivate:[LoginAuthService]
},{
  path:"tenant-login",
  loadChildren: "./Modules/tenant-reg/tenant-reg.module#TenantRegModule",
  canActivate:[LoginAuthService]
},
{
  path:"",
  loadChildren: "./Modules/dashboard/dashboard.module#DashboardModule",
  canActivate:[AuthenticationGaurdService]
},
{
  path:"content-verification",
  loadChildren: "./Modules/content-verification/content-verification.module#ContentVerificationModule",
  canActivate:[AuthenticationGaurdService]
},
{
  path:"dashboard",
  loadChildren: "./Modules/dashboard/dashboard.module#DashboardModule",
  canActivate:[AuthenticationGaurdService]
},
{
  path:"set-password",
  loadChildren: "./Modules/set-password/set-password.module#SetPasswordModule",
  canActivate:[AuthenticationGaurdService]
},
{
  path:"set-password/tdfeaSkUfdRYrgtAyuoIasddE/:encrypToken",
  component: ForgotPasswordComponent,
  canActivate:[LoginAuthService]
},
{
  path:"manage-tests",
  component: ManageTestsComponent,
  canActivate:[AuthenticationGaurdService]
},
{
  path:"configure-tests",
  component: ConfigureTestsComponent,
  canActivate:[AuthenticationGaurdService]
},
{
  path:"administer-tests",
  component: AdministerTestComponent,
  canActivate:[AuthenticationGaurdService]
},
{
  path:"list-users",
  loadChildren: "./Modules/list-users/list-users.module#ListUsersModule",
  canActivate:[AuthenticationGaurdService]
},
{
  path:"list-questions",
  loadChildren: "./Modules/list-questions/list-questions.module#ListQuestionsModule",
  canActivate:[AuthenticationGaurdService]
},
{
  path:"evaluate-tests",
  loadChildren: "./Modules/evaluate-candidate/evaluate-candidate.module#EvaluateCandidateModule",
  canActivate:[AuthenticationGaurdService]
},
{
  path:"reports",
  loadChildren: "./Modules/reports/reports.module#ReportsModule",
  canActivate:[AuthenticationGaurdService]
},
  // {
  //   path:"candidate-registration",
  //   loadChildren: "./Modules/candidate-registraion/candidate-registraion.module#CandidateRegistraionModule"
  // },

{
  path:"candidate",
  loadChildren: "./Modules/candidate-registraion/candidate-registraion.module#CandidateRegistraionModule",
  canActivate:[LoggingOutService]
},{
  path:"settings",
  loadChildren: "./Modules/settings/settings.module#SettingsModule",
  canActivate:[AuthenticationGaurdService]
},
{
  path:"sections",
  loadChildren: "./Modules/sections/sections.module#SectionsModule",
  canActivate:[AuthenticationGaurdService]
},
{
  path:"test-setup",
  loadChildren: "./Modules/test-setup/test-setup.module#TestSetupModule",
  canActivate:[AuthenticationGaurdService]
},
{
  path:"exam",
  loadChildren: "./Modules/exam/exam.module#ExamModule",
  canActivate:[LoggingOutService]
},
{
  path:"test-config",
  loadChildren: "./Modules/test-config/test-config.module#TestConfigModule",
  canActivate:[AuthenticationGaurdService]
},
{
  path:"downloads",
  component: DownloadsComponent
}];


@NgModule({
  declarations:[HeaderComponent,DownloadsComponent],
   
  imports: [RouterModule.forRoot(routes),HttpClientModule,
    BlockUIModule.forRoot(),MatMenuModule,MatRadioModule,TagInputModule,NgxPaginationModule,MatInputModule,MatCheckboxModule,MatRadioModule,MatSlideToggleModule,AngularMultiSelectModule,MatAutocompleteModule,
    PopoverModule,JwSocialButtonsModule,ReactiveFormsModule, StarRatingModule.forRoot(),NgxLoadingModule.forRoot({}) ],
  exports: [RouterModule,StarRatingModule,HeaderComponent,ReactiveFormsModule,NgxLoadingModule,JwSocialButtonsModule,MatInputModule,MatMenuModule,TagInputModule,BlockUIModule,MatRadioModule,NgxPaginationModule,MatCheckboxModule,MatRadioModule,MatSlideToggleModule,AngularMultiSelectModule,MatAutocompleteModule,PopoverModule],
  providers:[HeaderComponent]
})
export class AppRoutingModule { }
