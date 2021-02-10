import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllServicesService } from "./../../Services/AllServices/all-services.service";
import { environment } from '../../../environments/environment';
import { NgForm } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { trigger, state, style, animate, transition,keyframes } from '@angular/animations';
import { element } from 'protractor';

declare var $;

@Component({
  selector: 'app-tenant-reg',
  templateUrl: './tenant-reg.component.html',
  styleUrls: ['./tenant-reg.component.css'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        backgroundColor: '#4dad60',
        width: '11vw',
        height: '23vh',
        float:'left  '
       
      })),
      state('final', style({
        backgroundColor: '#4dad60',
        width: '11vw',
        height: '23vh',
        float:'right  '
        
      })),
      transition('initial=>final', animate('600ms', keyframes([
        style({transform: 'translateX(0)     ',        }),
        style({transform: 'translateX(100%)   ',     }),
        // style({transform: 'translateY(-75%) rotateY(180deg)',   offset: 0.66}),
        // style({transform: 'translateX(-100%)',                  offset: 1.0})
      ]) )),
      transition('final=>initial', animate('600ms', keyframes([
        style({transform: 'translateX(100px)     ',        }),
        style({transform: 'translateX(-9%)   ',     }),
         
        // style({transform: 'translateY(-75%) rotateY(180deg)',   offset: 0.66}),
        // style({transform: 'translateX(-100%)',                  offset: 1.0})
      ]) )),
      //transition('final=>initial', animate('1000ms'))
    ]),
  ]
})
export class TenantRegComponent implements OnInit {


  currentState = 'initial';//recruiter
  

   

  changeState() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';

    if(this.currentState == 'initial'){
      this.secondFormGroup = this._formBuilder.group({
        companyName: [],
        companyWebsite: [],
        countryName: ['', [Validators.required]],
        termsAndConditions: [,[Validators.required]],
        
      });
    }else{
this.secondFormGroup = this._formBuilder.group({
      companyName: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
      companyWebsite: ['', [Validators.required]],
      countryName: ['', [Validators.required]],
      termsAndConditions: [,[Validators.required]],
      
    });
    }
   

  }


  formOne:boolean;
  formTwo:boolean;
  registerTypeSelected=false;
  isForgot:boolean = false;
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  tenantSignin:boolean=true;
  arrayOFCountris:any[]=[];

  emailTxt:any;
  regDomain:any;
  @BlockUI() blockUI: NgBlockUI;

  public tabActive:any = 'signin';
  public domain:any;
  constructor(private apiService : AllServicesService,private router:Router,private _formBuilder: FormBuilder) { 
    
    var url = window.location.hostname;
    if(url.split(".")[0] == 'register'){
      this.tenantSignin = false;
      this.isForgot = false;
    }
    
    if(environment.production){
      this.domain = window.location.host.split('.')[0];
    }else{
      this.domain = window.location.host.split('.')[0];
    }
  }

  ngOnInit() {

    $('.carousel').carousel({
      interval: 2000
  }); 

    this.firstFormGroup = this._formBuilder.group({
      userFirstName: ['', [Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z ]*$')]],
      userLastName:['',[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
      companyMailId:['',[Validators.required,Validators.email]],
      contactNum:['',Validators.required]
    });
 this.secondFormGroup = this._formBuilder.group({
      companyName: [],
      companyWebsite: [],
      countryName: ['', [Validators.required]],
      termsAndConditions: [,[Validators.required]],
      
    });
    
    this.getCountryList();
    this.domainNameCheck();
  }

  formOneSubmit(){
    this.formOne = true;
  }

  formTwoSubmit(){
    this.formTwo = true;
  }

  activeTabs(tab) {
    this.tabActive = tab;
  }

  registerTenant(){
    // console.log(this.secondFormGroup)
    // console.log(this.currentState);
    if(this.secondFormGroup.controls.termsAndConditions.value){
      this.blockUI.start('Please Wait! We Are Creating Your Account...');
      if(this.secondFormGroup.valid || this.currentState =='initial'){
        const formData = new FormData();
        formData.append("userFirstName", this.firstFormGroup.value['userFirstName']);
        formData.append("userLastName", this.firstFormGroup.value['userLastName']);
        formData.append("companyName", this.secondFormGroup.value['companyName']);
        formData.append("companyMailId", this.firstFormGroup.value['companyMailId']);
        formData.append("companyWebsite", this.secondFormGroup.value['companyWebsite']);
        formData.append("companyDomainName", this.regDomain);
        formData.append("countryName", this.secondFormGroup.value['countryName']);
        // console.log(this.secondFormGroup.value['countryName'])
        formData.append("contactNum", this.firstFormGroup.value['contactNum']);
        if(this.secondFormGroup.value['termsAndConditions']){
          formData.append("termsAndConditions", "1");
        }else{
          formData.append("termsAndConditions", "0");
        }
        
        this.apiService.postData("auth/tenant/registration",formData)
        .subscribe(res=>{
          this.blockUI.stop()
          if (res['statusCode'] == 1) {
            this.firstFormGroup.reset();
            this.secondFormGroup.reset();
            this.router.navigate(['/tenant-registration/successful']).then(()=>{
              this.apiService.successAlert(res['message'])
            })
          }else{
            this.apiService.errorAlert(res['message'])
          }
          
        },error=>{
          this.blockUI.stop()
        })
  
      }else{
        this.blockUI.stop();
      }
    }else{
      this.apiService.errorAlert('Please Accept Terms & Conditions')
    }
  
  }

  registerTenant1(registerForm){
    this.blockUI.start('Please Wait We Are Creating Your Account...');
    const formData = new FormData();
    formData.append("userFirstName", registerForm.userFirstName);
    formData.append("userLastName", registerForm.userLastName);
    formData.append("companyName", registerForm.companyName);
    formData.append("companyMailId", registerForm.companyMailId);
    formData.append("companyWebsite", registerForm.companyWebsite);
    formData.append("companyDomainName", this.regDomain);
    formData.append("countryName", registerForm.countryName);
    formData.append("contactNum", registerForm.contactNum);
    if(registerForm.termsAndConditions){
      formData.append("termsAndConditions", "1");
    }else{
      formData.append("termsAndConditions", "0");
    }
  
    var queryString = Object.keys(registerForm).map(key => key + '=' + registerForm[key]).join('&');
    this.apiService.postData("auth/tenant/registration",formData)
      .subscribe(res=>{
        this.blockUI.stop()
        if (res['statusCode'] == 1) {
          this.router.navigate(['/tenant-registration/successful']).then(()=>{
            this.apiService.successAlert(res['message'])
          })
        }else{
          this.apiService.errorAlert(res['message'])
        }
        
      },error=>{
        this.blockUI.stop()
      })
  }

  signin(loginForm){
   //var companyDomainName =loginForm.email.substring(loginForm.email.indexOf('@')+1,loginForm.email.lastIndexOf('.'));
   var companyDomainName =window.location.host.split('.')[0]
  //  var url=''
  //  window.location.host.split('.').forEach((element,index)=>{
  //     if(index!=0){
  //       url+="."+element;
  //     }
  //  })

  //  var http= window.location.href.split('//')[0];
  //  // console.log(http)
  //  // console.log(window.location.host);
  //  // console.log(url);
  
  //  if(companyDomainName=="register"){
  //   companyDomainName=loginForm.email.substring(loginForm.email.indexOf('@')+1,loginForm.email.lastIndexOf('.'));
   
    
  // }
   // console.log(companyDomainName);
   this.blockUI.start('Please Wait ...');
    var queryString = Object.keys(loginForm).map(key => key + '=' + loginForm[key]).join('&');
    // console.log(loginForm);
    // console.log(queryString);
    this.apiService.postData("auth/authentication/userlogin?email="+loginForm["email"]+"&password="+encodeURIComponent(loginForm["password"])+'&domain='+companyDomainName,{})
      .subscribe(res=>{
        this.blockUI.stop();
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
          localStorage.setItem('isRoleSelected',res['isRoleSeleted'])
          localStorage.setItem('role',JSON.stringify({'id':res['roleId'],'name':res['roleName']}))
          localStorage.setItem('userImage',res['userImage'])
          if(!res['defaulPasswordChangeStatus']){
            this.router.navigate(['/set-password'])  
          }else if(res['isSuperUser'] && !res['isAgreedTermsAndConditions']){
            this.router.navigate(['/terms-conditions'])  
          }else if(res['isSuperUser'] == '1' && !res['isRoleSeleted']){
            this.router.navigate(['/list-users'])
            .then(()=>{
              this.apiService.successAlert("You are Successfully logged in")
              }
            )
          }else if(res['isSuperUser'] == '1' && res['isRoleSeleted']){
            this.router.navigate(['/dashboard'])
            .then(()=>{
              this.apiService.successAlert("You are Successfully logged in")
              }
            )
          }else if(res['roleId'] == '4'){
            this.router.navigate(['/evaluate-tests'])
            .then(()=>{
              this.apiService.successAlert("You are Successfully logged in")
              }
            )
          }else{
            this.router.navigate(['/dashboard'])
            .then(()=>{
              this.apiService.successAlert("You are Successfully logged in")
              }
            )
          }
         
        }else{
          this.apiService.errorAlert(res['message'])
        }
      },error=>{
        this.blockUI.stop();
      })
  }

  forgotPassword(forgotPass:NgForm){
      if(forgotPass.valid){
        this.blockUI.start('Please Wait ...');
        this.apiService.postData('auth/authentication/forgotpassword?email='+forgotPass.value.email+"&domain="+this.domain,{}).subscribe(res=>{
          if(res['statusCode'] == 1){
            this.apiService.successAlert(res['statusMessage'])
          forgotPass.reset();
          this.blockUI.stop();
          }else{
            this.apiService.errorAlert(res['statusMessage'])
            this.blockUI.stop();
          }
        },error=>{

        })
      }
  }

  setDomain(){
    var dom = this.emailTxt.substring(this.emailTxt.lastIndexOf('@')+1,this.emailTxt.lastIndexOf('.'))
    if(this.currentState == 'initial'){
      this.regDomain='recruiter'
    }
    else{
      this.regDomain = dom;
    }
    
    
  }

  switchSignup(){
    this.tenantSignin = !this.tenantSignin;
    this.isForgot = false;
  }

  switchSignin(){
    this.tenantSignin = true;
  }

  forgotPass(){
    this.isForgot = true;
    this.tenantSignin = !this.tenantSignin;
  }

  checkEmail(){
    // // console.log(this.firstFormGroup)
    if(this.firstFormGroup.controls.companyMailId.errors && this.firstFormGroup.controls.companyMailId.errors.email){
      return true
    }
  }
  checkFirstName(){
  
    if(this.firstFormGroup.controls.userFirstName.errors && this.firstFormGroup.controls.userFirstName.errors.minlength){
      if(this.firstFormGroup.controls.userFirstName.errors.minlength.actualLength < this.firstFormGroup.controls.userFirstName.errors.minlength.requiredLength)
      return true
    }
  }

  getCountryList(){
    this.apiService.getAll("auth/tenant/getCountryNames").subscribe(
      (res)=>{
        if(res['statusCode'] == 1){
          this.arrayOFCountris=res['countryList'];
          // console.log(this.arrayOFCountris);
        }
      },(error)=>{
        // console.log(error);
      },()=>{

      }
    );
  }

  public domainExist:boolean=false;
  public domainNotExist:boolean=false;
  domainNameCheck(){
      this.apiService.getAll("auth/tenant/domaincheck?domian="+this.domain).subscribe(
        (res)=>{
          if(res['statusCode'] == 1){
            // console.log(res['message'])
            // this.domainExist=false;
            this.domainNotExist=false;
            // console.log(this.domainExist)
          }else{
            // console.log(res['message'])
            this.domainNotExist=true;
            
          }
        },(error)=>{
          // console.log(error)
        },()=>{

        }
      );
  }


}
