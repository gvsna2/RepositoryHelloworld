import { Component, OnInit } from '@angular/core';
import { AllServicesService } from "./../../Services/AllServices/all-services.service";
import { SearchPipe } from '../administer-test/search.pipe';
@Component({
  selector: 'app-manage-tests',
  templateUrl: './manage-tests.component.html',
  styleUrls: ['./manage-tests.component.css']
})
export class ManageTestsComponent implements OnInit {

  public tests:object;
  public draftTest:any[]=[];
  // [{
  //   testName : "Python Developer - 7+ years of experience",
  //   date : "04, July",
  //   questions : "60 Questions",
  //   marks : "Marks: 60",
  //   pass :25
  // },
  // {
  //   testName : "Senior Java Developer - 8+ years",
  //   date : "04, July",
  //   questions : "60 Questions",
  //   marks : "Marks: 60",
  //   pass :25
  // }];

  public activeTest:any[]= []
  // [{
  //   testName : "DevOps Engineer - 10+ years of experience",
  //   date : "02, July",
  //   questions : "60 Questions",
  //   marks : "Marks: 60",
  //   pass :25
  // },
  // {
  //   testName : "Senior Business Development Manager",
  //   date : "04, July",
  //   questions : "60 Questions",
  //   marks : "Marks: 60",
  //   pass :25
  // },
  // {
  //   testName : "AWS Engineer - 5+ Years of experience",
  //   date : "06, July",
  //   questions : "60 Questions",
  //   marks : "Marks: 60",
  //   pass :25
  // },
  // {
  //   testName : "Digital Marketing Manger",
  //   date : "10, July",
  //   questions : "60 Questions",
  //   marks : "Marks: 60",
  //   pass :25
  // },
  // {
  //   testName : "DevOps Engineer - 10+ years of experience",
  //   date : "4, July",
  //   questions : "60 Questions",
  //   marks : "Marks: 60",
  //   pass :25
  // }]

  public completedTest:any[]=[]
  // [{
  //   testName : "Python Developer - 7+ years of experience",
  //   date : "4, July",
  //   questions : "60 Questions",
  //   marks : "Marks: 60",
  //   pass :25
  // },
  // {
  //   testName : "Senior Java Developer - 8+ years",
  //   date : "4, July",
  //   questions : "60 Questions",
  //   marks : "Marks: 60",
  //   pass :25
  // }]

  constructor(private apiService : AllServicesService) { }

  ngOnInit() {
    this.getTests();
  }

  getTests(){
    this.apiService.getAll('testmanagement/testconfig/totaltestsbystatus?token='+localStorage.getItem('token'))
      .subscribe(res=>{
        this.tests = res['testDetailsByStatus'];
        this.draftTest = this.tests['listOfDraftTests'] ? this.tests['listOfDraftTests'] : [];
        this.activeTest = this.tests['listOfActiveTests'] ? this.tests['listOfActiveTests'] : [];
        this.completedTest = this.tests['listOfCompletedTests'] ? this.tests['listOfCompletedTests'] : []
      },error=>{

      })
  }
  deleteTestConfig(test){
    this.apiService.postData('testmanagement/testconfig/deletetestconfig?testConfigId='+test.testConfigId+'&token='+localStorage.getItem('token'),{})
      .subscribe(res=>{
        if (res['statusCode'] == 1) {
          this.getTests();
          this.apiService.successAlert(res['statusMessage'])
      }else{
        this.apiService.errorAlert(res['statusMessage'])
      }
      },error=>{

      })
  }

}
