import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './../../Services/Auth-service/auth-service.service'
import { HeaderComponent } from './../../Components/header/header.component'

@Injectable({
  providedIn: 'root'
})
export class LoggingOutService {

  constructor(private authService: AuthService, private router: Router, private header: HeaderComponent) { }
  canActivate() {
    if (this.authService.isLogin()) {
      // this.header.logout();
      localStorage.clear()
      return true;
    }
    else {
      return true;
    }

  }
}
