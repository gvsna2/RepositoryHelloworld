import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import {AuthService} from './../../Services/Auth-service/auth-service.service'

@Injectable({
  providedIn: 'root'
})
export class LoginAuthService {

  constructor(private authService:AuthService,private router:Router) { }
  canActivate() {
    if(this.authService.isLogin()){
      this.router.navigate(['/dashboard'])
      return false;
    }
  else{
    return true;
  }

}

}
