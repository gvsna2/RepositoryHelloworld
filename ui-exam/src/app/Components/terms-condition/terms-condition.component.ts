import { Component, OnInit } from '@angular/core';
import { AllServicesService } from "./../../Services/AllServices/all-services.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.css']
})
export class TermsConditionComponent implements OnInit {

  constructor(private apiService : AllServicesService,private router:Router) { }

  ngOnInit() {
  }

  acceptTerms(){
    var isSuperUser = localStorage.getItem('isSuper');
    var isRoleSelected = localStorage.getItem('isRoleSelected');

    this.apiService.postData('auth/authentication/agreetermsandconditions?token='+localStorage.getItem('token'),{})
      .subscribe(res=>{
          if(res['statusCode']){
            if(isSuperUser == '1' && !isRoleSelected){
              this.router.navigate(['/list-users'])
            }else if(isSuperUser == '1' && isRoleSelected){
              this.router.navigate(['/dashboard'])
            }
          }
      },error=>{
        
      })
  }

}
