import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { AllServicesService } from "./../../Services/AllServices/all-services.service"
import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-evaluate-test',
  templateUrl: './evaluate-test.component.html',
  styleUrls: ['./evaluate-test.component.css']
})
export class EvaluateTestComponent implements OnInit {

  @BlockUI() blockUI: NgBlockUI;

  public evalTestData :object;
  // [{
  //   test : "Java Developer- 8+ years of experience",
  //   type : "Scheduled",
  //   complexity : "Medium",
  //   category : "Information Technology"
  // },
  // {
  //   test : "Business Development Manager",
  //   type : "Walkin",
  //   complexity : "Medium",
  //   category : "Sales"
  // },
  // {
  //   test : "Python Developer - 7+ years of experience",
  //   type : "Scheduled",
  //   complexity : "Medium",
  //   category : "Information Technology"
  // },
  // {
  //   test : "Java Developer- 8+ years of experience",
  //   type : "Scheduled",
  //   complexity : "Medium",
  //   category : "Information Technology"
  // },
  // {
  //   test : "Business Development Manager",
  //   type : "Walkin",
  //   complexity : "Medium",
  //   category : "Sales"
  // },
  // {
  //   test : "Python Developer - 7+ years of experience",
  //   type : "Scheduled",
  //   complexity : "Medium",
  //   category : "Information Technology"
  // },
  // {
  //   test : "Java Developer- 8+ years of experience",
  //   type : "Scheduled",
  //   complexity : "Medium",
  //   category : "Information Technology"
  // },
  // {
  //   test : "Business Development Manager",
  //   type : "Walkin",
  //   complexity : "Medium",
  //   category : "Sales"
  // },
  // {
  //   test : "Python Developer - 7+ years of experience",
  //   type : "Scheduled",
  //   complexity : "Medium",
  //   category : "Information Technology"
  // }]

  constructor(private router:Router,private apiService : AllServicesService){
  }

  ngOnInit() {
    this.getTests();
  }

  getUsers(testConfigId){
    this.router.navigate(['/evaluate-tests/candidate',testConfigId])
  }

  getTests(){
    this.blockUI.start('Please Wait We Are Fetching Tests')
    this.apiService.getAll("testmanagement/testcandidate/evaluatortests?token="+localStorage.getItem('token'))
      .subscribe(res=>{
          this.blockUI.stop();
          this.evalTestData = res;
      },error=>{
        
      })
  }

}
