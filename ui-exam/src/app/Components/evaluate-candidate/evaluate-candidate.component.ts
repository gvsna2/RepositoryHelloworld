import { Component, OnInit } from '@angular/core';

import { Router,ActivatedRoute } from '@angular/router';

import { AllServicesService } from "./../../Services/AllServices/all-services.service"

@Component({
  selector: 'app-evaluate-candidate',
  templateUrl: './evaluate-candidate.component.html',
  styleUrls: ['./evaluate-candidate.component.css']
})
export class EvaluateCandidateComponent implements OnInit {
  public testId:any;
  public testCandidates:object;

  constructor(private router:Router,private activeRoute: ActivatedRoute,private apiService : AllServicesService) { 
    this.activeRoute.params.subscribe(params=>{
      this.testId = params['id'];
    })
  }

  ngOnInit() {
      this.getTestUsers();
  }

  gotoTests(){
    this.router.navigate(['/evaluate-tests'])
  }

  getTestUsers(){
    this.apiService.getAll("testmanagement/testcandidate/testcandidates?token="+localStorage.getItem('token')+"&testConfigId="+this.testId)
    .subscribe(res=>{
        this.testCandidates = res;
    },error=>{

    })
  }

  getQuestions(testInstanceId){
    this.router.navigate(['/evaluate-tests/test/questions',testInstanceId]);
    localStorage.setItem("testId",this.testId)
  }

}
