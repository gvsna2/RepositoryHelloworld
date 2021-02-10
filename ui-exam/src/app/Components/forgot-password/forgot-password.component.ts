import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { AllServicesService } from "./../../Services/AllServices/all-services.service"
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  public tdfeaSkUfdRYrgtAyuoIasddE:any;
  @BlockUI() blockUI: NgBlockUI;

  constructor(private router:Router,private activeRoute: ActivatedRoute,private apiService : AllServicesService) { 
    this.activeRoute.params.subscribe(params=>{
      this.tdfeaSkUfdRYrgtAyuoIasddE = params['encrypToken'];
    })
  }

  ngOnInit() {
  }

  setPassword(setPass:NgForm){

    this.blockUI.start('Please Wait We Are Changing the Password')
    if(setPass.value.password == setPass.value.confirmpassword){
      this.apiService.getAll('auth/authentication/resetpassword?tdfeaSkUfdRYrgtAyuoIasddE='+encodeURIComponent(this.tdfeaSkUfdRYrgtAyuoIasddE)+'&password='+setPass.value.password+'&confirmpassword='+setPass.value.confirmpassword)
      .subscribe(res=>{
        this.blockUI.stop();
        if(res['statusCode'] == 1){
          setPass.reset(); 
          this.apiService.successAlert(res['statusMessage']);
          this.router.navigate(['/tenant-login'])
        }else if(res['statusCode'] == 0){
          this.apiService.errorAlert(res['statusMessage'])
        }
      },erro=>{
        this.blockUI.stop();
      })
    }else{
      this.blockUI.stop();
      this.apiService.errorAlert('Password and Confirm Password Should be Same')
    }
    

  }

}
