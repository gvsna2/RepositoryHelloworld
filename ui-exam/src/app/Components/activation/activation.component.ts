import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { AllServicesService } from "./../../Services/AllServices/all-services.service"
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-activation',
  templateUrl: './activation.component.html',
  styleUrls: ['./activation.component.css']
})
export class ActivationComponent implements OnInit {

  userDet:any;
  tenantUrl:any;
  tassdsdxwergtyuoIasddE:any;
  encryptId:any;
  tenantActivated:boolean;
  allReadyActivated:boolean;

  @BlockUI() blockUI: NgBlockUI;

  constructor(private router:Router,private activeRoute: ActivatedRoute,private apiService : AllServicesService) { 
    this.activeRoute.params.subscribe(params=>{
      this.tassdsdxwergtyuoIasddE = params['tassdsdxwergtyuoIasddE'];
      this.encryptId = params['encryptId']
    })
  }

  ngOnInit() {
    this.activateTenant()
  }

  activateTenant(){
    this.blockUI.start('Please Wait! We Are Activating Your Account')
      this.apiService.getAll('auth/tenant/activation?tassdsdxwergtyuoIasddE='+encodeURIComponent(this.encryptId))
        .subscribe(res=>{
          if (res['statusCode'] == 1) {
            this.tenantActivated = true;
            this.tenantUrl = res['loginurl']
            this.userDet = {
              email : res['email'],
              password : res['password']
            }
            this.blockUI.stop()
              this.apiService.successAlert(res['message'])
          }else if (res['statusCode'] == 4) {
            this.allReadyActivated = true;
            this.tenantUrl = res['loginurl'];
            this.userDet = {
              email : res['email'],
              password : res['password']
            }
            this.blockUI.stop()
              this.apiService.successAlert(res['message']);
            if(res['defaulPasswordChangeStatus']==1){

              var companyDomainName =window.location.host.split('.')[0];
              this.blockUI.start('Please Wait ...');
              var queryString = Object.keys(this.userDet).map(key => key + '=' + this.userDet[key]).join('&');
        
      this.apiService.postData("auth/authentication/userloginwithencryption?"+queryString+'&domain='+companyDomainName,{})
              .subscribe(
                    ress=>{
                      if(ress['statusCode'] == '1'){
                         
                        if(ress['token']){
                          localStorage.setItem("token",ress['token']);
                          var User = {
                            userId : ress['userId'],
                            userName : ress['userName']
                          }
                          localStorage.setItem("user", JSON.stringify(User));
                          localStorage.setItem("userId", ress['userId']);
                          localStorage.setItem("isSuper",ress['isSuperUser'])
                          localStorage.setItem('Permissions',JSON.stringify(ress['menuList']))
                          localStorage.setItem('isRoleSelected',ress['isRoleSeleted'])
                          localStorage.setItem('role',JSON.stringify({'id':ress['roleId'],'name':ress['roleName']}))
                          localStorage.setItem('userImage',ress['userImage'])
                          
                          if(ress['isSuperUser'] && !ress['isAgreedTermsAndConditions']){
                            this.router.navigate(['/terms-conditions'])  
                            this.blockUI.stop();
                          }else if(ress['isSuperUser'] == '1' && !ress['isRoleSeleted']){
                            this.router.navigate(['/list-users'])
                            .then(()=>{
                              this.apiService.successAlert("You are Successfully logged in")
                              this.blockUI.stop();
                              }
                            )
                            
                          }else if(ress['isSuperUser'] == '1' && ress['isRoleSeleted']){
                            this.router.navigate(['/dashboard'])
                            .then(()=>{
                              this.apiService.successAlert("You are Successfully logged in")
                              this.blockUI.stop();
                              }
                            )
                          }else if(ress['roleId'] == '4'){
                            this.router.navigate(['/evaluate-tests'])
                            .then(()=>{
                              this.apiService.successAlert("You are Successfully logged in")
                              this.blockUI.stop();
                              }
                            )
                           
                          }else{
                            this.router.navigate(['/dashboard'])
                            .then(()=>{
                              this.apiService.successAlert("You are Successfully logged in")
                              this.blockUI.stop();
                              }
                            )
                           
                          }
                         
                        }else{
                          this.apiService.errorAlert(ress['message'])
                        }
                      }else{
                        this.blockUI.stop();
                        this.apiService.errorAlert(ress['message'])
                      }
                    }
              );

            }
              



          }else{
            this.apiService.errorAlert(res['message'])
            this.blockUI.stop()
          }
        },error=>{
          this.blockUI.stop()
        })
  }
  

  setPassword(setPass:NgForm){

    // var companyDomainName =this.userDet.email.substring(this.userDet.email.indexOf('@')+1,this.userDet.email.lastIndexOf('.'));
    var companyDomainName =window.location.host.split('.')[0];
    this.blockUI.start('Please Wait ...');
    var queryString = Object.keys(this.userDet).map(key => key + '=' + this.userDet[key]).join('&');
    var loginpath,changepasswordpath;
    if(this.allReadyActivated){
      loginpath="userloginwithencryption";
      changepasswordpath="changepasswordwithencryption";

    }else{
      loginpath="userloginwithencryption"
      changepasswordpath="changepasswordwithencryption";
    }
    


    this.apiService.postData("auth/authentication/"+loginpath+"?"+queryString+'&domain='+companyDomainName,{})
      .subscribe(res=>{
        // this.blockUI.stop();
        if(res['statusCode']==1){
        var data = setPass.value;
        data['currentpassword']=this.userDet.password;
        data['jwtToken'] = res['token']
        var queryString = Object.keys(data).map(key => key + '=' + data[key]).join('&');
        if(data['newpassword'] == data['confirmpassword']){
          this.blockUI.start('Please Wait we are Changing password...');

          this.apiService.postData('auth/authentication/'+changepasswordpath+'?'+queryString,{})
          .subscribe(dat=>{
            // this.blockUI.stop();
            if(res['statusCode'] == '1'){
              setPass.reset(); 
              if(res['token']){
                localStorage.setItem("token",res['token']);
                var User = {
                  userId : res['userId'],
                  userName : res['userName']
                }
                localStorage.setItem("user", JSON.stringify(User));
                localStorage.setItem("userId", res['userId']);
                localStorage.setItem("isSuper",res['isSuperUser'])
                localStorage.setItem('Permissions',JSON.stringify(res['menuList']))
                localStorage.setItem('isRoleSelected',res['isRoleSeleted'])
                localStorage.setItem('role',JSON.stringify({'id':res['roleId'],'name':res['roleName']}))
                localStorage.setItem('userImage',res['userImage'])
                
                if(!dat['defaulPasswordChangeStatus']){
                  this.router.navigate(['/set-password'])  
                  this.blockUI.stop();
                }else if(res['isSuperUser'] && !res['isAgreedTermsAndConditions']){
                  this.router.navigate(['/terms-conditions'])  
                  this.blockUI.stop();
                }else if(res['isSuperUser'] == '1' && !res['isRoleSeleted']){
                  this.router.navigate(['/list-users'])
                  .then(()=>{
                    this.apiService.successAlert("You are Successfully logged in")
                    this.blockUI.stop();
                    }
                  )
                  
                }else if(res['isSuperUser'] == '1' && res['isRoleSeleted']){
                  this.router.navigate(['/dashboard'])
                  .then(()=>{
                    this.apiService.successAlert("You are Successfully logged in")
                    this.blockUI.stop();
                    }
                  )
                }else if(res['roleId'] == '4'){
                  this.router.navigate(['/evaluate-tests'])
                  .then(()=>{
                    this.apiService.successAlert("You are Successfully logged in")
                    this.blockUI.stop();
                    }
                  )
                 
                }else{
                  this.router.navigate(['/dashboard'])
                  .then(()=>{
                    this.apiService.successAlert("You are Successfully logged in")
                    this.blockUI.stop();
                    }
                  )
                 
                }
               
              }else{
                this.apiService.errorAlert(res['message'])
              }
            }else{
              this.blockUI.stop();
              this.apiService.errorAlert(res['message'])
            }
            
          },error=>{
            this.blockUI.stop();
            this.apiService.errorAlert(error['message']);
          })
        }else{
          this.blockUI.stop();
          this.apiService.errorAlert('Password do not match')
        }
      }
      },error=>{
        this.blockUI.stop();
      })

    
  }

}
