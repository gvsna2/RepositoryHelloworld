import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { AllServicesService } from "./../../Services/AllServices/all-services.service";
import { Router, ActivatedRoute } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-resume-upload',
  templateUrl: './resume-upload.component.html',
  styleUrls: ['./resume-upload.component.css']
})
export class ResumeUploadComponent implements OnInit {

  encryptedToken;
  constructor( private router: Router,private activeRoute: ActivatedRoute, private apiService: AllServicesService) {
    this.activeRoute.params.subscribe(params => {
      this.encryptedToken = params['encryptedToken'];
      // console.log(this.encryptedToken)
    })

 

    
  }

  resultsFlag=false;
  candidate;
  getResults(){

    this.apiService.getAll('testmanagement/exam/viewcandidateresults?uniqueCode='+this.encryptedToken+'&domainName='+this.domain).subscribe(
      data=>{
        // console.log(data);
        if(data["statusCode"]==1){
          this.candidate=data["candidateResult"];
          // console.log(this.candidate.candidateName);
          this.flag=true;
          this.lineChartLabels=[];
          var numArr:number[]=[];
          this.candidate.currentRanking.sectionwiseCurrentRankings.forEach(element => {
            this.lineChartLabels.push(element.sectionName);
          
           
            numArr.push(element.sectionRank);
            
           

          });
          this.lineChartData[0].data=numArr;
        }
      },
      error=>{
        // console.log(error);
      },
      ()=>{

      }
    );
  }

  onRankingTypeChanged(value){
    // console.log(value);
    var numArr:number[]=[]
    if(value=='Overall'){
      this.candidate.overallRanking.sectionwiseOverAllRankings.forEach(element => {
        //this.lineChartLabels.push(element.sectionName);
      
       
        numArr.push(element.sectionRank);
        
       
  
      });
      this.lineChartData[0].data=numArr;
    }else{
      this.candidate.currentRanking.sectionwiseCurrentRankings.forEach(element => {
         
       
        numArr.push(element.sectionRank);
        
       

      });
      this.lineChartData[0].data=numArr;
    }
    
    
  }
  
  
  resumeFlag=false;
  fileName;
  fileType;
  fileSize;

  cancelUpload(){
    this.resumeFlag=false;
    // console.log("clicked");
  }
  uploadResume(event){
    // console.log(event.target.files);
    this.file=event.target.files[0];
    // console.log(this.file);

    this.fileName=this.file.name;
    var temp=this.fileName.split('.')
    this.fileType=temp[temp.length - 1];
    this.fileSize=this.file.size
    // console.log(this.fileType);
    var formData: any = new FormData();
    
    //formData.append("candidateResumeFile",this.file);

    formData.append("domainName",this.domain);
    formData.append("uniqueCode",this.encryptedToken);


    if(this.apiService.cfs){
      
      var cfsformData: any = new FormData();
     // cfsformData.append("access-token",this.service.secretKey);
      cfsformData.append("files",this.file);
      this.apiService.postDataCfs(cfsformData).subscribe(
        res=>{
          // console.log(res);
          if(res.status==200){
            formData.append("cfsId",res.body[0].id);
            formData.append("cfsViewURL",res.body[0].selfLink.view);
            formData.append("cfsDownloadURL",res.body[0].selfLink.download);

            this.apiService.postData('testmanagement/cfs/uploadcandidateresume',formData).subscribe(
              data=>{
                // console.log(data);
                if(data['statusCode']==1){
                  this.resumeFlag=true;
                }else{
                  this.apiService.errorAlert(data['statusMessage']);
                }
        
              },
              error=>{
        
              },
              ()=>{
                // console.log(this.resumeFlag);
              }
            );


          }else{
            this.apiService.errorAlert(this.file.name+"Upload Failed");
          }

        },
        error=>{
          // console.log(error);
        },
        ()=>{

        }
      );


      

    }else{
      formData.append("candidateResumeFile",this.file);
      this.apiService.postData('testmanagement/exam/uploadcandidateresume',formData).subscribe(
        data=>{
          // console.log(data);
          if(data['statusCode']==1){
            this.resumeFlag=true;
          }else{
            this.apiService.errorAlert(data['statusMessage']);
          }
  
        },
        error=>{
  
        },
        ()=>{
          // console.log(this.resumeFlag);
        }
      );
    }

    
  }
  file;
  domain;
  flag=false;


  public lineChartData: ChartDataSets[] = [
    { data: [65, 59], label: 'Rank',
                 
                  pointStyle:'circle',
                  
                  pointRadius:7,
                  pointBackgroundColor:'rgba(65, 214, 195, 0.52)',
                  hitRadius:2,
                  pointBorderColor:'#41D6C3',
                  pointBorderWidth:3

                  
                  },

  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartOptions: any = {
    responsive: true,
    scales: {
      yAxes: [{
        
        ticks: {
            min: 0,
            maxTicksLimit: 20,
            suggestedMax:10
           
        }
      }]
    },
    elements:{
      line:{
      fill:false,
      tension:0,
      },
     
    },
     
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'transparent',
      
      backgroundColor: '#41D6C3',
      
    },
  ];
  public lineChartLegend = false
  ;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  





  ngOnInit() {
    setTimeout(() => {
      
    }, 300);
    

    this.domain = window.location.host.split('.')[0];
   //this.domain='nexiilabs'
    //// console.log(window.location.host.split('.')[0]);

    this.apiService.getAll('testmanagement/exam/resultviewedstatus?uniqueCode='+this.encryptedToken+'&domainName='+this.domain).subscribe(
      data=>{
        // console.log(data);
        if(data["statusCode"]==1){
          // // console.log("inside if");
         if(data['resultViewedStatus']==1){
          // // console.log("inside results");
          this.getResults();
         }
         else{
           this.flag=false;
         }
        }
      },
      error=>{
        // console.log(error);
      },
      ()=>{


        var th=this;
    // $("#files").change(function() {
    //  var filename = this.files[0].name
      
    //   th.file=this.files[0];
    //   // console.log(th.file);
    //  // th.uploadResume();
    // });
      }
    );
  }

}
