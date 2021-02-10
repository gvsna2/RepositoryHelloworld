import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AllServicesService } from "./../../Services/AllServices/all-services.service";
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.css']
})
export class SetPasswordComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  constructor(private apiService : AllServicesService,private router:Router) { }

  ngOnInit() {

  }

  setPassword(setPass:NgForm){
    var data = setPass.value;
    data['jwtToken'] = localStorage.getItem('token')
    var queryString = Object.keys(data).map(key => key + '=' + data[key]).join('&');
    if(setPass['newpassword'] == setPass['confirmpassword']){
      this.blockUI.start('Please Wait we are Changing password...');
      this.apiService.postData('auth/authentication/changepassword?'+queryString,{})
      .subscribe(res=>{
        this.blockUI.stop();
        if(res['statusCode'] == '1'){
          setPass.reset(); 

          var role = JSON.parse(localStorage.getItem('role'))
          // console.log(role.id);
          if(role.id=="4"){
            this.router.navigate(['/evaluate-tests'])
            .then(()=>{
              this.apiService.successAlert(res['message'])
              }
            ) 
          }else{
            this.router.navigate(['/dashboard'])
            .then(()=>{
              this.apiService.successAlert(res['message'])
              }
            )
          } 
          
        }else{
          this.apiService.errorAlert(res['message'])
        }
        
      },error=>{
        this.blockUI.stop();
        this.apiService.errorAlert(error['message']);
      })
    }else{
      this.apiService.errorAlert('Password do not match')
    }
    
  }

}
