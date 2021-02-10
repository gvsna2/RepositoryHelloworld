import { Component,ViewChild,ElementRef, OnInit, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AllServicesService } from "./../../Services/AllServices/all-services.service";
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
declare var $:any;

@Component({
  selector: 'app-candidate-result',
  templateUrl: './candidate-result.component.html',
  styleUrls: ['./candidate-result.component.css']
})
export class CandidateResultComponent implements OnInit,AfterViewChecked,AfterViewInit {
  userPics:object;
  public uniqueCode:any;
  domainName:any;
  candidReview:any[]=[];
  candidate:any;
  public sectionList: object = {
    total: null,
    sections: []
  }
  
  @BlockUI() blockUI: NgBlockUI;
  constructor(private router:Router,private activeRoute: ActivatedRoute,private apiService : AllServicesService) { 
    this.activeRoute.params.subscribe(params=>{
      this.uniqueCode = params['uniqueCode'];
      // console.log(this.uniqueCode)
    })

    var domain = window.location.hostname;
    if(domain.split('.').length > 1){
      this.domainName = domain.split('.')[0]
    }else{
      this.domainName = 'gmail';
    }
    
  }


  

  ngAfterViewInit() {
    
  }

  download() {

    $("#dowloadBtn").hide();
          


      
    html2canvas(document.querySelector("#content")).then(canvas => {

      var w = window.innerWidth;
      var h = window.innerHeight;
      
      var width = window.innerWidth;
      var height = $("#content").height();
      
      var pdf = new jsPDF("p", "px",[width-350,height]);


      //var pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);

      var imgData  = canvas.toDataURL("image/jpeg",  1.0);
       
      pdf.addImage(imgData, 'JPEG',0, 0);
      pdf.save(this.candidate.candidateName+"_"+this.uniqueCode+'.pdf');
      $("#dowloadBtn").show()

  });

    
}


getCandidPicsFromCfs(uniqueCode){
  this.blockUI.start('Loading User Pics!')
  // console.log("getCandidPics :::::::::"+uniqueCode)
  // console.log("domain :::::::::"+this.domainName)
  this.apiService.getAll('testmanagement/cfs/getcandidatepicturesforcustomer/?uniquecode='+this.uniqueCode+'&domain='+this.domainName)
    .subscribe(res=>{
      this.userPics = res;

      // for(let i=0;i<this.userPics['candidatePictureList'].length;i++){
      //   this.userPics['candidatePictureList'][i].imgSrc = this.getBase64Image(this.userPics['candidatePictureList'][i].cfsViewURL);
      // }
      //  // console.log('this.userPics',this.userPics)
    },error=>{
      this.blockUI.stop()
    },
    ()=>{
      this.blockUI.stop() 
     
    })
} 

onImageLoad(event,i){
 
  this.userPics['candidatePictureList'][i].cfsViewURL=this.getBase64Image(document.getElementById(this.userPics['candidatePictureList'][i].pictureFileName)); 
}

getBase64Image(img) {
  var canvas = document.createElement("canvas");
  canvas.width = 6.5*img.width;
  canvas.height = 6.5*img.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  var dataURL = canvas.toDataURL("image/png");
  return dataURL;
}

//var base64 = getBase64Image(document.getElementById("imageid"));

getCandidPics(uniqueCode){
  this.blockUI.start('Please Wait!')
  this.apiService.getAll('testmanagement/cfs/getcandidatepicturesforcustomer/?uniquecode='+uniqueCode+'&domain='+this.domainName)
    .subscribe(res=>{
      this.userPics = res;
      for(let i=0;i<this.userPics['candidatePictureList'].length;i++){
        this.userPics['candidatePictureList'][i].imgSrc = this.apiService.url+'testmanagement'+this.userPics['candidatePictureList'][i].baseViewURL+'?candidateExamPictureId='+this.userPics['candidatePictureList'][i].candidateExamPictureId+'&token='+localStorage.getItem('token')
      }
      // console.log('this.userPics',this.userPics)
    },error=>{
      this.blockUI.stop()
    },
    ()=>{
      this.blockUI.stop()
    })
}

activities;
  getSuspiciosActivity(uniqueCode) {
    this.blockUI.start('Loading Suspicious Activities!')
    // console.log("unicode "+uniqueCode)
    // console.log("domain "+this.domainName)
    this.apiService.getAll('reports/result/suspiciousactivitylistforcustomer?uniquecode=' + uniqueCode+'&domain='+this.domainName)
      .subscribe(res => {
        this.activities = res;
        
      },(error)=>{
        this.blockUI.stop()
      },()=>{
        this.blockUI.stop()
      })
  }

ngAfterViewChecked(){
  setTimeout(() => {
    
  }, 1000);
}
  ngOnInit() {
    this.blockUI.start('Loading ..')
    this.apiService.getAll('reports/result/candidateresults?uniqueCode='+this.uniqueCode+'&domainName='+this.domainName)
      .subscribe(res=>{
        this.candidReview = res['listOfTestReviewQuestions'];
        this.candidate = res['candidateResult'];
        if (this.candidate) {
          this.sectionList = {
            total: this.candidate.testPercentage,
            sections: this.candidate.sectionwiseResult
          }
        }
      },error=>{
        this.blockUI.stop()
      },
      ()=>{
        this.blockUI.stop()
      })
     // this.getCandidPics(this.uniqueCode)
      this.getCandidPicsFromCfs(this.uniqueCode)
      this.getSuspiciosActivity(this.uniqueCode)
  }

}
