import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLogin(){
    if(localStorage.getItem("token")){
      return true;
    }
    else {
      return false
    }
 }

 isSetPass(){
    var ifSetPass = location.hash.includes('set-password');
    if(ifSetPass){
      return false
    }else{
      return true
    }
 }

}
