import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import {AllServicesService} from '../Service/AllServices/all-services.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private service :AllServicesService,private router: Router) { }
   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if (this.service.isUserLogin())
      return true;

    this.router.navigate(['/login']);
    return false;
  }
  
}
