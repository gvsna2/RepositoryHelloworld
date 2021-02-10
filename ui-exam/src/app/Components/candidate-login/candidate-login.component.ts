import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AllServicesService } from "./../../Services/AllServices/all-services.service"
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-candidate-login',
  templateUrl: './candidate-login.component.html',
  styleUrls: ['./candidate-login.component.css']
})
export class CandidateLoginComponent implements OnInit {

  isCandidLogin:boolean = true;
  @BlockUI() blockUI: NgBlockUI;
  public encryptedToken:any;
  otp:any = null;
  candidDetails:object;

  constructor(private router:Router,private activeRoute: ActivatedRoute,private apiService : AllServicesService) { 
    this.activeRoute.params.subscribe(params=>{
      this.encryptedToken = params['encryptedToken'];
      // console.log(this.encryptedToken)
    })

  }

  ngOnInit() {
    localStorage.clear();
    this.blockUI.start('Loading...');
    this.testLinkVerify();
  }

  testLinkVerify(){
    this.apiService.postData('testmanagement/testconfig/testlinkverification?encryptedToken='+encodeURIComponent(this.encryptedToken),{})
      .subscribe(res=>{
        this.blockUI.stop();
        if(res['testTypeId'] == '2'){
          this.router.navigate(['/candidate/registration',this.encryptedToken])
          // localStorage.setItem('testTypeId',res['testTypeId']);
          // localStorage.setItem('encryptedToken',this.encryptedToken)
        }else if(res['testTypeId'] == '1'){
            this.isCandidLogin = true;
        }else{
            this.isCandidLogin = false;
        }
      },error=>{
        this.blockUI.stop();
      })
  }

  getCandidateDetails(){
    this.apiService.getAll('testmanagement/testconfig/candidatedetails?encryptedToken='+encodeURIComponent(this.encryptedToken)+"&uniqueCode="+this.otp)
      .subscribe(res=>{
        if(res['statusCode'] == 1){
          this.candidDetails = res;
          localStorage.setItem('regForm',JSON.stringify(this.candidDetails))
          this.router.navigate(['/candidate/registration',this.encryptedToken])
        }else if(res['statusCode'] == 0){
          this.apiService.errorAlert(res['statusMessage'])
        }
      },error=>{

      })
  }

}
