import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import {AuthService} from './../../Services/Auth-service/auth-service.service'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGaurdService {

  constructor(private authService:AuthService,private router:Router) { }

  canActivate(state: RouterStateSnapshot) {
    var menuList = JSON.parse(localStorage.getItem('Permissions'));
    var roleList = JSON.parse(localStorage.getItem('role'));
 
    if(this.authService.isLogin()){
      // console.log(roleList.name);
      if(state['routeConfig'].path == '' && menuList.includes('Dash Board')){
        return true;
      }else if(state['routeConfig'].path == 'dashboard' && menuList.includes('Dash Board')){
        return true;
      }else if(state['routeConfig'].path == 'reports' && menuList.includes('Reports')){
        return true;
      }else if(state['routeConfig'].path == 'list-questions' && menuList.includes('ListOfQuestions')){
        return true;
      }else if(state['routeConfig'].path == 'manage-tests' && menuList.includes('TestManagement')){
        return true;
      }else if(state['routeConfig'].path == 'configure-tests' && menuList.includes('TestManagement')){
        return true;
      }else if(state['routeConfig'].path == 'test-setup' && menuList.includes('TestManagement')){
        return true;
      }else if(state['routeConfig'].path == 'test-config' && menuList.includes('TestManagement')){
        return true;
      }else if(state['routeConfig'].path == 'sections' && menuList.includes('TestManagement') ){
        return true;
      }else if(state['routeConfig'].path == 'list-users' && menuList.includes('UserManagement')){
        return true;
      }else if(state['routeConfig'].path == 'evaluate-tests' && menuList.includes('EvaluateManagement')){
        return true;
      }else if(state['routeConfig'].path == 'administer-tests' && menuList.includes('TestManagement')){
        return true;
      }else if(state['routeConfig'].path == 'content-verification' && menuList.includes('Content Verification')){
        return true;
      }else if(state['routeConfig'].path == 'settings'){
        return true;
      }else if(state['routeConfig'].path == 'set-password'){
        return true;
      }else if(menuList.length == '1' && menuList.includes('EvaluateManagement')){
        this.router.navigate(['/evaluate-tests'])
      }else if(menuList.length == '1' && menuList.includes('Content Verification')){
        this.router.navigate(['/content-verification'])
      }
      else{
        this.router.navigate(['/list-users'])
      }
      
    }
  else{
    this.router.navigate(['/tenant-login'])
    return false;
  }
}

}
