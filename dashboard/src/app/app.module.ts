import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HashLocationStrategy, LocationStrategy  } from '@angular/common'
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import{ NgxPaginationModule} from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';

import { UsersListComponent } from './Component/users/users-list.component';
import { HeaderComponent } from './Component/header/header.component';
import { FotterComponent } from './Component/fotter/fotter.component';
import { PageNotFoundComponent } from './Component/pagenotfound/page-not-found.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { TopbarComponent } from './Component/topbar/topbar.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsersListComponent,
    HeaderComponent,
    FotterComponent,
    PageNotFoundComponent,
    DashboardComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true
      
    }),
  ],
  providers: [
    {provide : LocationStrategy , useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
