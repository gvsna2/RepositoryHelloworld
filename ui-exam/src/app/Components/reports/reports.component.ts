import { Component, OnInit } from '@angular/core';
import { AllServicesService } from "./../../Services/AllServices/all-services.service";
import { BlockUI, NgBlockUI } from 'ng-block-ui';
declare var $;
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  userPics:object;
  @BlockUI() blockUI: NgBlockUI;
  public sectionList: object = {
    total: 80,
    sections: [{
      name: "section 1",
      score: 24
    },
    {
      name: "section 2",
      score: 25
    },
    {
      name: "section 3",
      score: 20
    },
    {
      name: "section 4",
      score: 11
    }]
  }

  public showResult: boolean;
  public filterData: object;
  public searchCandid: any;
  public testTitle: String = 'Test Title';
  public resultStatus: Number = 1;
  public allTests: object;
  public candidate: any;
  public notifyResult:boolean=false;
  // [{
  //   name : "Vivek Verma",
  //   test : "Python Developer - 7+ years of experience",
  //   score : 80,
  // },
  // {
  //   name : "Kusuma Kiranmai",
  //   test : "Python Developer - 7+ years of experience",
  //   score : 92,
  // },
  // {
  //   name : "Sukumar",
  //   test : "Python Developer - 7+ years of experience",
  //   score : 82,
  // },
  // {
  //   name : "Rajesh Kumar",
  //   test : "Python Developer - 7+ years of experience",
  //   score : 82,
  // },
  // {
  //   name : "Omprakash",
  //   test : "Python Developer - 7+ years of experience",
  //   score : 80,
  // },
  // {
  //   name : "Vivek Verma",
  //   test : "Python Developer - 7+ years of experience",
  //   score : 80,
  // },
  // {
  //   name : "Kusuma Kiranmai",
  //   test : "Python Developer - 7+ years of experience",
  //   score : 92,
  // },
  // {
  //   name : "Sukumar",
  //   test : "Python Developer - 7+ years of experience",
  //   score : 82,
  // },
  // {
  //   name : "Rajesh Kumar",
  //   test : "Python Developer - 7+ years of experience",
  //   score : 82,
  // },
  // {
  //   name : "Omprakash",
  //   test : "Python Developer - 7+ years of experience",
  //   score : 80,
  // }];

  public candidReview: any[] = []
  // [{
  //   "qustionText": "what is JAVA. Explain OOPS Concepts in detail",
  //   "actualAnswer": "Object Oriented Programming Language",
  //   "candidAnswer": "Object based Programming Language",
  //   "questionTypeId": "5"
  // },
  // {
  //   "qustionText": "Two-way binding",
  //   "actualAnswer": "ngModel",
  //   "candidAnswer": "ngModel",
  //   "questionTypeId": "1",
  //   "optionList": [{
  //     "name": "ng-bind",
  //   },
  //   {
  //     "name": "ngModel"
  //   }]
  // },
  // {
  //   "qustionText": "what is JAVA. Explain OOPS Concepts in detail",
  //   "actualAnswer": "Object Oriented Programming Language",
  //   "candidAnswer": "Object based Programming Language",
  //   "questionTypeId": "5"
  // },
  // {
  //   "qustionText": "Two-way binding",
  //   "actualAnswer": "ngModel",
  //   "candidAnswer": "ngModel",
  //   "questionTypeId": "1",
  //   "optionList": [{
  //     "name": "ng-bind",
  //   },
  //   {
  //     "name": "ngModel"
  //   }]
  // },
  // {
  //   "qustionText": "what is JAVA. Explain OOPS Concepts in detail",
  //   "actualAnswer": "Object Oriented Programming Language",
  //   "candidateAnswer": "Object based Programming Language",
  //   "questionTypeId": "5"
  // },
  // {
  //   "qustionText": "Two-way binding",
  //   "actualAnswer": "ngModel",
  //   "candidAnswer": "ng-bind",
  //   "questionTypeId": "1",
  //   "optionList": [{
  //     "name": "ng-bind",
  //   },
  //   {
  //     "name": "ngModel"
  //   }]
  // }];

  constructor(private apiService: AllServicesService) { }

  ngOnInit() {
    this.apiService.getAll('reports/result/listoftests?token=' + localStorage.getItem('token'))
    .subscribe(res => {
      this.allTests = res;
      
    },(error)=>{
      
    },()=>{
      this.getAllResults();
    })
   
  }

  getCandidateQUestions(candidate) {
    this.blockUI.start('Please Wait We Are Fetching Questions')
    this.apiService.postData('reports/result/reviewcandidateanswers?testInstanceId=' + candidate.testInstanceId + '&token=' + localStorage.getItem('token'), {})
      .subscribe(res => {
        this.blockUI.stop()
        if (res['statusCode'] == "1") {
          this.apiService.successAlert(res['statusMessage'])
          this.candidReview = res['listOfTestQuestions'];
          
        } else {
          this.apiService.errorAlert(res['statusMessage'])
          this.candidReview = res['listOfTestQuestions'];
        }
      }, error => {
        this.blockUI.stop()
      })
  }

  getResult(candidate) {
    this.showResult = this.showResult ? false : true;
    this.candidate = candidate;
    if (candidate) {
      this.sectionList = {
        total: candidate.testPercentage,
        sections: candidate.sectionwiseResult
      }
    }
  }

  mailResult() {
    this.blockUI.start('Please Wait We Are Sending Mail...');
    this.apiService.postData('reports/result/sendcandidateresult?testInstanceId=' + this.candidate.testInstanceId + '&token=' + localStorage.getItem('token'), {})
      .subscribe(res => {
        this.blockUI.stop();
        if (res['statusCode'] == '1') {
          this.apiService.successAlert(res['statusMessage'])
        } else {
          this.apiService.errorAlert(res['statusMessage'])
        }
      }, error => {
        this.blockUI.stop();
      })
  }

  getAllResults() {
    this.testTitle = this.allTests['listOfTests'].length>0?this.allTests['listOfTests'][0].testConfigId:'Test Title';
    this.resultStatus = 1;
    this.searchCandid = null;

   
    //  this.apiService.getAll('reports/result/allrecentresults?token=' + localStorage.getItem('token'))
    //    .subscribe(res => {
    //    this.filterData = res;
    //    if(this.filterData['listOfCandidateResults'].length > 0){
    //     this.notifyResult=true;
    //    }else{
    //     this.notifyResult=false;
    //    }
    //   })
    this.getCandidResults(this.testTitle,this.resultStatus,this.searchCandid);
  }

  
  getTests() {
    this.apiService.getAll('reports/result/listoftests?token=' + localStorage.getItem('token'))
      .subscribe(res => {
        this.allTests = res;
        
      },(error)=>{

      },()=>{
        
      })
  }

  activities;
  getSuspiciosActivity(user) {
    this.apiService.getAll('reports/result/suspiciousactivitylist?token=' + localStorage.getItem('token')+'&testInstanceId='+user.testInstanceId)
      .subscribe(res => {
        this.activities = res;
        
      },(error)=>{

      },()=>{
        
      })
  }

  
  getCandidResults(testTitle, resultStatus,searchCandid) {
    // console.log(testTitle +" "+resultStatus)
    if ( testTitle != 'Test Title') {
      this.apiService.getAll('reports/result/searchcandidateresults?token=' + localStorage.getItem('token') + '&testConfigId=' + testTitle + '&resultStatus=' + resultStatus + '&candidateNameKey=' + searchCandid)
        .subscribe(res => {
          // console.log(res)
          this.filterData = res;
          if(this.filterData['listOfCandidateResults'].length > 0){
            this.notifyResult=true;
           }else{
            this.notifyResult=false;
           }
        },
        (error)=>{
          // console.log(error);
        },()=>{})
    } else {
      // console.log(testTitle +" "+resultStatus)
      this.apiService.getAll('reports/result/searchcandidateresults?token=' + localStorage.getItem('token') + '&testConfigId=' + 0 + '&resultStatus=' + resultStatus + '&candidateNameKey=' + searchCandid)
        .subscribe(res => {
          // console.log(res)
          this.filterData = res;
          if(this.filterData['listOfCandidateResults'].length > 0){
            this.notifyResult=true;
           }else{
            this.notifyResult=false;
           }
        },(error)=>{
          // console.log(error)
        })
    }
  }


  getCandidPicsFromCfs(user){
    this.apiService.getAll('testmanagement/cfs/getcandidatepictures/?testInstanceId='+user.testInstanceId+'&token='+localStorage.getItem('token'))
      .subscribe(res=>{
        this.userPics = res;
        // for(let i=0;i<this.userPics['candidatePictureList'].length;i++){
        //   this.userPics['candidatePictureList'][i].imgSrc = this.getBase64Image("http://14.98.167.101:6060/api/fs/v1.0/access/file/ncd-test/2020-04-01/Wed1420205238529903.jpg");
        // }
        //  // console.log('this.userPics',this.userPics)
      },error=>{

      })
  }


  getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }
  
  getCandidPics(user){
    this.apiService.getAll('testmanagement/exam/getcandidatepictures/?testInstanceId='+user.testInstanceId+'&token='+localStorage.getItem('token'))
      .subscribe(res=>{
        this.userPics = res;
        for(let i=0;i<this.userPics['candidatePictureList'].length;i++){
          this.userPics['candidatePictureList'][i].imgSrc = this.apiService.url+'testmanagement'+this.userPics['candidatePictureList'][i].baseViewURL+'?candidateExamPictureId='+this.userPics['candidatePictureList'][i].candidateExamPictureId+'&token='+localStorage.getItem('token')
        }
        // console.log('this.userPics',this.userPics)
      },error=>{

      })
  }
  notifyResultsToCandidates(customMessage){
    // console.log(customMessage.value)
    let queryParamObj={
      "testConfigId":this.testTitle,
      "customMessage":customMessage.value,
      "token":localStorage.getItem('token')
    };
    // console.log(queryParamObj);
    let queryParam=$.param(queryParamObj);
    // console.log(queryParam);
    this.blockUI.start('Please wait we are sending candidate results')
    if(this.resultStatus ==1){
     
      this.apiService.postData("reports/result/sendresultstatustoallqualifiedcandidates?"+queryParam,"")
      .subscribe(
        (res)=>{
          if(res['statusCode'] == 1){
            $('#customMessage').val('');

            this.apiService.successAlert(res['statusMessage']);
            // console.log(res['statusMessage']);
            $('#notifyResultsModal').modal('hide');
            this.blockUI.stop();
           //this.getCandidResults(this.testTitle,this.)
          }else{
            this.apiService.errorAlert(res['statusMessage']);
            // console.log(res['statusMessage']);
            // $('#notifyResultsModal').modal('hide');
            this.blockUI.stop();
          }
        },
        (error)=>{
          // console.log(error);
          this.blockUI.stop();
        },
        ()=>{
         // this.ngOnInit();
         //this.getAllResults();
         this.getCandidResults(this.testTitle,this.resultStatus,this.searchCandid);
        }
      );
    }else{
      this.apiService.postData("reports/result/sendresultstatustonotqualifiedcandidates?"+queryParam,"")
      .subscribe(
        (res)=>{
          if(res['statusCode'] == 1){
            $('#customMessage').val('');

            this.apiService.successAlert(res['statusMessage']);
            // console.log(res['statusMessage']);
            $('#notifyResultsModal').modal('hide');
            
            this.blockUI.stop();
          }else{
            this.apiService.errorAlert(res['statusMessage']);
            // console.log(res['statusMessage']);
            // $('#notifyResultsModal').modal('hide');
            this.blockUI.stop();
          }
        },
        (error)=>{
          // console.log(error)
          this.blockUI.stop();
        },
        ()=>{
         // this.ngOnInit();
         this.getCandidResults(this.testTitle,this.resultStatus,this.searchCandid);
        }
      );
    }
    
  }

  shareResult(candidate){

    const selBox = document.createElement('textarea');
    selBox.value = candidate.candidateResultViewURL;;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);

  }


}
