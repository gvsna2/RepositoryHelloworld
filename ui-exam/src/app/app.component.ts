import { Component } from '@angular/core';

import { HeaderComponent } from './Components/header/header.component'; 

// services
import { AuthService } from './Services/Auth-service/auth-service.service'
import { AllServicesService } from "./Services/AllServices/all-services.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private authService:AuthService,private apiService: AllServicesService){
    var url = window.location.hostname.split('.');
    this.checkDomain(url[0]); 
  }

  checkDomain(domain){
    if(domain != 'register'){
      this.apiService.getAll('auth/tenant/domaincheck?domian='+domain)
      .subscribe(res=>{ 
        if(res['statusCode'] != '1'){
          // location.href="https://register.nocheatingdude.com"
        }
      })
    }
  }

}
