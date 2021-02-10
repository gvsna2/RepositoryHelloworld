import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../app/Component/login/login.component';
import { UsersListComponent} from '../app/Component/users/users-list.component';
import {PageNotFoundComponent} from '../app/Component/pagenotfound/page-not-found.component';
import { DashboardComponent} from '../app/Component/dashboard/dashboard.component';
import {HeaderComponent} from '../app/Component/header/header.component';
import { AuthGuard} from'../app/auth/auth.guard';



const routes: Routes = [
  {path:"",component:DashboardComponent, pathMatch:'full',canActivate:[AuthGuard]},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'header',component:HeaderComponent,canActivate:[AuthGuard]},
  {path:"**",component:PageNotFoundComponent,canActivate:[AuthGuard]}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      onSameUrlNavigation: 'reload'
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponets=[
  PageNotFoundComponent,
  LoginComponent,
  UsersListComponent,
  DashboardComponent]
