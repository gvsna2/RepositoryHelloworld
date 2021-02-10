import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common'; 
import {AllServicesService} from '../../Services/AllServices/all-services.service';
import { Router,ActivatedRoute } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
declare var $;

@Component({
  selector: 'app-test-config-done',
  templateUrl: './test-config-done.component.html',
  styleUrls: ['./test-config-done.component.css']
})
export class TestConfigDoneComponent implements OnInit {

  routeId=0;
  @BlockUI() blockUI: NgBlockUI;
  constructor(private service : AllServicesService,private datePipe: DatePipe,private route : Router,private activeRoute: ActivatedRoute) { 

    this.activeRoute.params.subscribe(params=>{
      this.routeId = params['id'];
    })
  }


  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;

    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  
  copyText(){
    // console.log("copyText");
    var copyText = document.getElementById("myInput")  as HTMLInputElement;;
    copyText.select();
    document.execCommand("copy");
  }

  public participantFirstName:String;
  public participantLastName:String;
  public participantemail:String;
  public phoneNumber:String;
  public testActivationTime:String;
  public testExpirationTime:String;
  public statusMessage:String;
  public candidateDateOfBirth:String;
  public participantSuccess:boolean=false;
  public participantFail:boolean=false;
  min;
  max;


  resendEmail(candidate){
    candidate.processing=true;
    this.service.postData("testmanagement/testconfig/sharecandidatedetails?token="+localStorage.getItem('token')+"&testInstanceId="+candidate.testInstanceId,{}).subscribe(
      data=>{
        // console.log(data);
        if(data["statusCode"]==1){
          this.service.successAlert(data["statusMessage"]);
        }else{
          this.service.errorAlert(data["statusMessage"]);
        }
      },
      error=>{
        // console.log(error);
      },
      ()=>{
        candidate.processing=false;
      }
    );
  }

  addparticipant(data){
    this.blockUI.start('Please Wait ...');
  // console.log(data)
  this.participantSuccess=false;
  this.participantFail=false;
  this.participantFirstName=data.fName;
  this.participantLastName=data.lName;
  this.participantemail=data.email;
  this.phoneNumber=data.phoneNumber;
  this.candidateDateOfBirth=data.dateofbirth;
  this.testActivationTime=data.testValidFrom;
  this.testExpirationTime=data.testValidTo;
  var dateOfBirth = this.datePipe.transform(this.candidateDateOfBirth,"dd-MM-yyyy");
  // console.log("dateOfBirth :"+dateOfBirth)
  var activationTime = this.datePipe.transform(this.testActivationTime,"y-MM-dd HH:mm:ss");
  var expireTime = this.datePipe.transform(this.testExpirationTime,"y-MM-dd HH:mm:ss");
  // console.log("testActivationTime::"+activationTime)
  // console.log("testExpirationTime::"+expireTime)
  this.service.postData("testmanagement/testsetup/v3/addparticipants?token="+localStorage.getItem('token')+"&testConfigId="+this.routeId,[{
  "candidateFirstName":this.participantFirstName,
  "candidateLastName":this.participantLastName,
  "candidateMail":this.participantemail,
  "candidateMobile":this.phoneNumber,
  "candidateDateOfBirth":dateOfBirth,
  "testActivationTime":activationTime,
  "testExpirationTime":expireTime
  }]).subscribe(
  (data)=>{
  if(data[0]['statusCode'] == 1){
  // console.log(data)
  this.participantSuccess=true;
  this.statusMessage=data[0]['statusMessage'];
  this.service.successAlert(data[0]['statusMessage']);
  //this.participantSuccess=false;
  $('#exampleModalCenter').modal('toggle');
  
  $("#addParticipantForm")[0].reset();
   this.ngOnInit();

  }else{
  // console.log(data)
  this.participantFail=true;
  this.statusMessage=data[0]['statusMessage']
  this.service.errorAlert(data[0]['statusMessage']);
  // setTimeout(
  // ()=>{
  // this.participantFail=false;
  // },3000
  // );
  }
  },
  (error)=>{
  // console.log(error);
  this.blockUI.stop();
  },
  ()=>{
    this.blockUI.stop();
  }
  );
  }
   
  selectedFile;
  onSeletedBulkparticipantsFile(event){
    // console.log(event.target.files[0]);
    this.selectedFile=event.target.files[0];
  }
  uploadResponse;
  bulkParticipantUpload(){

    this.blockUI.start('Please Wait ...');
    var formData: any = new FormData();
  
   
    formData.append("participantfile", this.selectedFile);
    formData.append("token", localStorage.getItem('token'));
    formData.append("testConfigId",this.routeId);

    
    if(this.service.cfs){
      var FileArr= [];
      FileArr.push(this.selectedFile);
      var cfsformData: any = new FormData();
     // cfsformData.append("access-token",this.service.secretKey);
      cfsformData.append("files",this.selectedFile);
      this.service.postDataCfs(cfsformData).subscribe(
        res=>{
          // console.log(res);
          if(res.status==200){
            formData.append("cfsId",res.body[0].id);
            formData.append("cfsViewURL",res.body[0].selfLink.view);
            formData.append("cfsDownloadURL",res.body[0].selfLink.download);

            this.service.postData("testmanagement/cfs/addbulkparticipants",formData) 
            .subscribe(
              data=>{
                // console.log(data);
                this.uploadResponse=data;
                if(data[0]["statusCode"]==1){
                 // this.service.successAlert(data[0]["statusMessage"]);
                 
                }else{
                 //this.service.errorAlert(data[0]["statusMessage"]); 
                }
                
              },
              error=>{
                // console.log(error);
                this.blockUI.stop();
              },
              ()=>{
                this.ngOnInit();
                this.blockUI.stop();
              }
            );


          }else{
            this.service.errorAlert(this.selectedFile.name+"Upload Failed");
          }

        },
        error=>{
          // console.log(error);
        },
        ()=>{

        }
      );


      

    }else{

      this.service.postData("testmanagement/participant/addbulkparticipants",formData) 
    .subscribe(
      data=>{
        // console.log(data);
        this.uploadResponse=data;
        if(data[0]["statusCode"]==1){
         // this.service.successAlert(data[0]["statusMessage"]);
         
        }else{
         // this.service.errorAlert(data[0]["statusMessage"]); 
        }
        
      },
      error=>{
        // console.log(error);
        this.blockUI.stop();
      },
      ()=>{
        this.ngOnInit();
        this.blockUI.stop();
      }
    );
    }


    
  
  }
  templateLink="";
  getTemplateLink() {

   
   if(this.service.cfs){
    this.templateLink = this.service.cfsUrl + this.service.participantTemplateUrl;

   }else{
    this.templateLink = this.service.url + 'notification/template/download?filetype=participant&fileId=2&token=' + localStorage.getItem('token')
   }
  
  }



  public candidateList:any=[];
  getAllCandidateList(){
    this.service.getAll("testmanagement/testconfig/allparticipants?token="+localStorage.getItem('token')+"&testConfigId="+this.routeId).subscribe(
      (data)=>{
        if(data['statusCode'] == 1){
          this.candidateList=data['listOfParticipants'];
          // console.log(this.candidateList)
        }
      },
      (error)=>{
        // console.log(error)
      },
      ()=>{
        this.candidateList.forEach(element => {
          element.processing=false;
        });
      }
    );
  }

  changeTime(event){
    // console.log(event);
  }
  showPart(){
    // console.log(this.participant);
    this.activationTime=this.participant.testActivationTime;
    this.expireTime=this.participant.testExpirationTime;
    this.participantMail=this.participant.candidateMail;
  }
  activationTime;
  expireTime;
  participantMail;
  updateCandidate(){
    this.blockUI.start('Please Wait ...');
    var activationTime = this.datePipe.transform(this.activationTime,"y-MM-dd HH:mm:ss");
    var expireTime = this.datePipe.transform(this.expireTime,"y-MM-dd HH:mm:ss");
    // console.log(activationTime);
    this.service.postData("testmanagement/testconfig/updateparticipant?token="+localStorage.getItem('token'),{
      
        administerTestLink: "",
        candidateId: 0,
        candidateMail: this.participantMail,
        candidateMobile: "",
        candidateName: "",
        editStatus: 0,
        testActivationTime: activationTime,
        testEvaluationStatus: "",
        testExpirationTime: expireTime,
        testInstanceId: this.participant.testInstanceId,
        testStatus: "",
        testUniqueCode: ""
      
    })
    .subscribe(
      data=>{
        
        if(data["statusCode"]==1){
          this.service.successAlert(data["statusMessage"]);
          this.getAllCandidateList();
          $('#EditParticipant').modal('toggle');
        }else{
          this.service.errorAlert(data["statusMessage"]);
        }
      },
      error=>{
        // console.log(error);
        this.blockUI.stop();
      },
      ()=>{
        this.blockUI.stop();
      }
    );
  }
  
  participant;
  response;
  url;
  testData;
  ngOnInit() {
    this.getTemplateLink();
    this.service.getAll("testmanagement/testsetup/gettestconfiglink?token="+localStorage.getItem('token')+"&testConfigId="+this.routeId)
    .subscribe(
      data=>{
        // console.log(data);
        if(data["statusCode"]==1){
          this.response=data;
          var temp=this.response.testConfigLink.split("localhost:4200");
          var url="http://"+location.hostname+"/#"+temp[temp.length-1];
          this.testData=this.response.administerTestDetails;
          this.url=url;
          
        }
        
      },
      error=>{
        // console.log(error);
      },
      ()=>{
      this.getAllCandidateList();
      }
    );
  }

}
