import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AllServicesService } from "./../../Services/AllServices/all-services.service"
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-candidate-login',
  templateUrl: './candidate-walkin-otp.component.html',
  styleUrls: ['./candidate-walkin-otp.component.css']
})
export class CandidateWalkinOtpComponent implements OnInit {

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
  }


  getCandidateDetails(){
    this.blockUI.start('Please Wait We are Verifying...');
    var data = {
      // encryptedToken : this.encryptedToken,
      // uniqueCode : this.otp         
    }
    this.apiService.postData('testmanagement/testconfig/candidatewalkinverification/?encryptedToken='+encodeURIComponent(this.encryptedToken)+'&uniqueCode='+this.otp,data)
      .subscribe(res=>{
        this.blockUI.stop();
        if(res['statusCode']=="1" && res['examStatus'] == 'active'){
          this.router.navigate(['/exam',res['testInstanceId']])
          localStorage.setItem('encryptedToken',this.encryptedToken)
        }else if(res['statusCode']=="1" && res['examStatus'] == 'inprogress'){
            this.apiService.errorAlert(res['statusMessage'])
        }if(res['statusCode']=="0"){
          this.apiService.errorAlert(res['statusMessage']);
        }
        // if(res['testTypeId'] == '2'){
        //   this.router.navigate(['/candidate/registration'])
        //   localStorage.setItem('testTypeId',res['testTypeId']);
        //   localStorage.setItem('encryptedToken',this.encryptedToken)
        // }
      },error=>{
        this.blockUI.stop();
      })
  }

}
