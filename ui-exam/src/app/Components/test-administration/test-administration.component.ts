import { Component, OnInit } from '@angular/core';
import {AllServicesService} from '../../Services/AllServices/all-services.service';
import { Router,ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common'; 
import Swal from 'sweetalert2';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
declare var $ :any;


var _ = require('lodash');

@Component({
  selector: 'app-test-administration',
  templateUrl: './test-administration.component.html',
  styleUrls: ['./test-administration.component.css']
})
export class TestAdministrationComponent implements OnInit {

  routeId=0;
  constructor(private service : AllServicesService,private datePipe: DatePipe,private route : Router,private activeRoute: ActivatedRoute) { 

    this.activeRoute.params.subscribe(params=>{
      this.routeId = params['id'];
    })
  }

dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  

  sectionsData;
  sections=[];
  listOfTestSetups=[];

  totalQuestions:number=60;
  flag=false;
  passpercentage=60;
  testDuration=60;
  progressiveDecrement=2;
  progressiveIncrement=2;
  notifyEmail;
  testConfigTitle;
  testComplexity;

  testType=1;


  testTypeDisabled=true;
  testComplexityDisabled=true;
  testQuestionsDisabled=true;
  testPercentageDisabled=true;
  testDurationDisabled=true;

  onTypeChanged(event){
    this.testType=event.target.value;
  } 




  onSubmit(isDraft){
    // console.log(this.sectionsData);
    // console.log(this.sections);
    var selectedIds="";
    this.selectedItems.forEach(element => {
      selectedIds+=element.id+",";
    });
    selectedIds=selectedIds.substring(0, selectedIds.length - 1);
   
    
   this.service.postData("testmanagement/testsetup/createtestconfig?token="+localStorage.getItem('token')+"&isDraft="+isDraft,
   
   {
    "evaluatorIds": selectedIds,
    "testConfigId":this.testConfigId,
    "notifyResultToMail": this.notifyEmail,
    "passPercentage": this.passpercentage,
    "progressiveDecrement": this.progressiveDecrement,
    "progressiveIncrement": this.progressiveIncrement,
    "testDuration": this.testDuration,
    "testSectionConfiguration":this.sections,
    "testSetupId": this.routeId,
    "testConfigTitle":this.testConfigTitle,
    "testTotalQuestions": this.totalQuestions
  }
   ).subscribe(
     data=>{
      // console.log(data);
      if(data["statusCode"]==1){
        if(isDraft==0){
          this.route.navigateByUrl("/test-config/"+data["testConfigId"]+'/done');

        }else{
           this.route.navigateByUrl("/manage-tests");

        }
      }
     },
     error=>{

     },
     ()=>{

     }
   );
   
  }
  sectionActiveFlag=false;
  sum=0;
  // sectionActiveCheck(){
  //   // console.log(this.sections);
    
  //   this.sections.forEach(element => {
    
  //     if(element.isSectionActive==1){
  //       this.sectionActiveFlag=true;
  //     } 

  //   });
  // }
  totalQuestionCheck(value){
    // console.log(value);
    this.totalQuestions=value;
    document.getElementById("noOfQuestions").classList.add("is-valid");
    document.getElementById("noOfQuestions").classList.remove("is-invalid");
    if(value<=this.sectionsData.totalNumberOfQuestions && value>0){
      this.invalidAdministration=false;
    }else{
     // this.service.errorAlert("Value should be 0 to "+this.sectionsData.totalNumberOfAllSectionQuestions);
      document.getElementById("noOfQuestions").classList.add("is-invalid");
      this.invalidAdministration=true;
    }
  this.checkTotal();
  }

  totalSectionQuestions=0;
  invalidAdministration=false;
  sectionQuestionCheck(value,index){
    // // console.log(value.target.id);
    // // console.log(value.target.value);
   
    // console.log("seccccccc")
    if(value.target.value==""){
    
      $("#section"+index).val('0');
    }
    this.sections[index].numberOfQuestions=value.target.value;
    
    document.getElementById(value.target.id).classList.add("is-valid");
    document.getElementById(value.target.id).classList.remove("is-invalid");
    if(value.target.value<=this.sections[index].totalNoOfQuestions && value.target.value>=0){
      this.invalidAdministration=false;
    }else{
     // this.service.errorAlert("Value should be 0 to "+this.sectionsData.totalNumberOfAllSectionQuestions);
      document.getElementById(value.target.id).classList.add("is-invalid");
      this.invalidAdministration=true;

    }
     

  this.checkTotal();
  }

  checkTotal(){
var temp=0;
    this.sections.forEach(element => {
      // console.log(element);
      if(element.numberOfQuestions==""){
        
        element.numberOfQuestions=0;
        
      }else{
        if(element.isSectionActive==1){
          temp=temp+parseInt(element.numberOfQuestions);
        }
        
      }
      
    });
    this.totalSectionQuestions=temp;
    // console.log(this.totalSectionQuestions);
    if(this.totalSectionQuestions==this.totalQuestions){
      // console.log("success");
      document.getElementById("totalSections").classList.add("is-valid");
      document.getElementById("totalSections").classList.remove("is-invalid");
    }else{
      document.getElementById("totalSections").classList.add("is-invalid");
    }
  }


  selectSection(index){

     this.sum=0;
   if(this.sections[index].isSectionActive==0){
    this.sections[index].isSectionActive=1;
    
     
   }
    else{
      this.sections[index].isSectionActive=0;
      this.checkTotal();
       
    }
    var temp =0
    this.sections.forEach(element => {
      this.sum+=element.isSectionActive;
      if(element.isSectionActive==1){
        temp+=element.totalNumberOfQuestions
       
      }
     
      this.sectionsData.totalNumberOfAllSectionQuestions=temp;

    });
    if(this.sum>0){
      this.sectionActiveFlag=true;
    }else{
      this.sectionActiveFlag=false;
    }

    
    
  }

  pageFlag=false;
  sectionFlag=false;
  complexityFlag=false;
  advancedFlag=false;
  test(){
    // console.log(this.advancedFlag);
  }
  templateLink="";
  getTemplateLink() {

   
   if(this.service.cfs){
    this.templateLink = this.service.cfsUrl + this.service.participantTemplateUrl;

   }else{
    this.templateLink = this.service.url + 'notification/template/download?filetype=participant&fileId=2&token=' + localStorage.getItem('token')
   }
  
  }
   
  hasMACQQuestions=false;
  onComplexityChanged(testComplexityId){
    this.blockUI.start('Please Wait ...');
  //  // console.log(testComplexityId.control.value);
    var formData: any = new FormData();
    this.testComplexity=testComplexityId;
  
   
    formData.append("complexityId", testComplexityId);
    formData.append("token", localStorage.getItem('token'));
    formData.append("instanceId",this.routeId);
    formData.append("isMACQTest",this.isMCQ);

    
    this.service.postData("testmanagement/testsetup/v3/gettestconfigs",formData).subscribe(
      data=>{
        // console.log(data);
        this.sectionsData=data;
        //this.sectionFlag=true;
        this.complexityFlag=true;

        this.sections=data['sectionsList'];
        if(data['hasMACQQuestions']==1){
          this.hasMACQQuestions=true;
        }
      },
      error=>{
        // console.log(error);
        this.blockUI.stop();
      },
      ()=>{
        if(this.sectionsData.totalNumberOfQuestions<60){

          this.totalQuestions=this.sectionsData.totalNumberOfQuestions;
          this.testDuration=this.sectionsData.totalNumberOfQuestions;
        }else{
          this.totalQuestions=60;
          this.testDuration=60;
        }
        this.blockUI.stop();
      }
    );

  }
  @BlockUI() blockUI: NgBlockUI;

  addUploadedParticipants(){

    this.uploadedCandidateList.forEach(element => {
      var pushFlag=true;
     
      if(element.statusCode==1){
        
      this.candidateList.forEach(
        ele => {
           
         if(_.isEqual(ele, element)){
           
          pushFlag=false;
         }
        
        }
        
      )
      if(pushFlag){
        this.candidateList.push(element);
      }
        else{
          this.service.errorAlert("Participant Already Exists")
        }
      
     
        

        
      }
    });
    $('#exampleModalCenter').modal('toggle');
    this.uploadedCandidateList=[];
    this.failedList=[];

  }


  selectedFile;
  uploadResponse;
  uploadedCandidateList=[];
  isFailed=false;
  failedList=[];
  refreshData(){
    this.uploadedCandidateList=[];
    this.failedList=[];
  }
  onSeletedBulkparticipantsFile(event){
    this.isFailed=false;
    this.failedList=[];
    // console.log(event);
    this.selectedFile=event.target.files[0];
    this.blockUI.start('Please Wait ...');
    var formData: any = new FormData();
  
   
    formData.append("participantfile", this.selectedFile);
    formData.append("token", localStorage.getItem('token'));
   // formData.append("testConfigId",this.routeId);
  
   event.target.value = null; 
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

            this.service.postData("testmanagement/cfs/getbulkparticipantsdetails",formData) 
            .subscribe(
              data=>{
                // console.log(data);
                this.uploadResponse=data;
                // console.log(this.uploadResponse);
                if(data["statusCode"]==1){
                  this.uploadResponse.listOfCandidates.forEach(element => {
                    if(element.statusCode==1){
                      this.uploadedCandidateList.push(element);
                    }else{
                      // console.log(element.statusCode);
                      this.isFailed=true;
                      this.failedList.push(element);
                      // this.service.errorAlert(element.statusMessage);
                    }
                  });
                 
                 // this.service.successAlert(data[0]["statusMessage"]);
                 
                }else{
                 this.service.errorAlert(data["statusMessage"]); 
                }
                
              },
              error=>{
                // console.log(error);
                this.blockUI.stop();
              },
              ()=>{
               // this.ngOnInit();
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
     
      this.service.postData("testmanagement/testsetup/v3/getbulkparticipantsdetails",formData) 
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
   
  selectedProfiles;
  uploadProfileResponse;
  uploadedProfileCandidateList=[];
  profileActTime;
  profileExpTime;
  uploadProfiles(event){
    this.blockUI.start("Uploading...");
    var FileArr= [];
    // console.log(event.target.files.length);
    // event.target.files.forEach(element => {
    //   FileArr.push(element);
    // });
   
    

    var cvBankformData: any = new FormData();
    
    for(var i=0;i<event.target.files.length;i++){
      cvBankformData.append("files",event.target.files[i]);
     // // console.log(event.target.files[i]);
    }
    cvBankformData.append("is_resume","True");
    cvBankformData.append("tag","default");
    cvBankformData.append("is_notify","False");
    cvBankformData.append("parse_now","True");
    cvBankformData.append("req_infofill","False");
    

    // console.log(FileArr);


    this.profileActTime = this.datePipe.transform(this.profileActTime,"y-MM-dd HH:mm:ss");

            this.profileExpTime = this.datePipe.transform(this.profileExpTime,"y-MM-dd HH:mm:ss");
             
            this.service.postDataCVBank(cvBankformData) 
            .subscribe(
               res=>{
                 
                  
                 if(res.status==200){
                  // console.log(res.body);
                   this.uploadProfileResponse=res.body;
                 for(var i=0;i<event.target.files.length;i++){
                  this.uploadedProfileCandidateList.push({
                    selected:false,
                    candidateFirstName:res.body["data"][i].insights.first_name,
                    candidateLastName:res.body["data"][i].insights.last_name,
                    candidateMail:res.body["data"][i].insights.email[0],
                    candidateMobile:res.body["data"][i].insights.phone[0],
                    testActivationTime:this.profileActTime,
                    testExpirationTime:this.profileExpTime,
                    profileType:res.body["data"][i].insights.profile_type
                  })
                  
                 }

                 }

                // this.uploadProfileResponse=res.body;
                //  for(var i=0;i<event.target.files.length;i++){
                //   this.uploadedProfileCandidateList.push({
                //     selected:false,
                //     candidateFirstName:res.body["data"][i].insights.first_name,
                //     candidateLastName:res.body["data"][i].insights.last_name,
                //     candidateMail:res.body["data"][i].insights.email[0],
                //     candidateMobile:res.body["data"][i].insights.phone[0],
                //     testActivationTime:this.profileActTime,
                //     testExpirationTime:this.profileExpTime,
                //     profileType:res.body["data"][i].insights.profile_type
                //   })
                  
                //  }
                this.blockUI.stop();
               },
               error=>{
                // console.log(error);
                this.blockUI.stop();
               },
               ()=>{
                this.blockUI.stop();
               }
            );
    
      // this.service.postDataCfs(cvBankformData).subscribe(
      //   res=>{
      //     // console.log(res);
      //     if(res.status==200){
      //       this.blockUI.start("Parsing...");
            
      //        var cvBankArr:any=[]

             
      //       for(var i=0;i<event.target.files.length;i++){
             
      //        cvBankArr.push({
      //          id:res.body[i].id,
      //          view:res.body[i].selfLink.view,
      //          download:res.body[i].selfLink.download
      //       });
      //       }
      //       // console.log("cvvvvvvvvvv"+cvBankArr);
      //       // this.service.getAllCVBank().subscribe(
      //       //   data=>{
      //       //     // console.log(data);
      //       //   }
      //       // );
            
            

            
      //     }else{
      //       this.service.errorAlert("Upload Failed");
      //       this.blockUI.stop();
      //     }
      //   },
      //   error=>{
      //     // console.log(error);
      //     this.blockUI.stop();
      //   },
      //   ()=>{
      //     this.blockUI.stop();
      //   }
      // );
    // this.service.postDataCVBank()
  }


  checkProperties(obj) {
    for (var key in obj) {
      
        if (obj[key] !== null && obj[key] != ""){
          
          return false;
        }
            
    }
    return true;
}

  addFromProfiles(){

    // console.log(this.uploadedProfileCandidateList);
    var valid=false;
    this.uploadedProfileCandidateList.forEach(element => {
     
      if(element.selected){
       
        if (!this.checkProperties(element)) {
            valid=false;
       }else{
           valid=true;
        this.candidateList.push(element);
       }

       
 


        
      }
    });

     if(valid){
      this.uploadedProfileCandidateList.forEach(element => {
     
        if(element.selected){

          this.candidateList.push(element);
 
        }
      });

      this.uploadProfileResponse=undefined;
    this.uploadedProfileCandidateList=[];
    $('#exampleModalCenter').modal('toggle');
     } else{
        this.service.errorAlert('Missing participant details')
     }


    

  }

  confirmAdministertest(data){
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Proceed!'
    }).then((result) => {
      if (result.value) {
       this.createAdministerTest(data);
      }
    })
  }

  isRecruiter=false;
  MCQsFlag=false;
  isMCQ=0;
  onMCQsChanged(){
    if(this.MCQsFlag){
      this.isMCQ=1
    }else{
      this.isMCQ=0;
    }
    this.ngOnInit();
  }
  todayDate:any = new Date();
    checkRec(){
      var roleList = JSON.parse(localStorage.getItem('role'));
      if(roleList.name == 'Recruiter'){
        if(window.location.hostname.split('.')[0] == 'recruiter'){
          this.isRecruiter=true;
          
        }else{
          this.isRecruiter=false;
        }
      }
     }
  
  administerTest(formData){
    // console.log(this.invalidAdministration);
  if(this.totalSectionQuestions==0){
    this.invalidAdministration=true;
  }

    if(this.advancedFlag && this.invalidAdministration  ){
      this.service.errorAlert("Invalid Administration");
    }
    else{


    this.blockUI.start('Loading....');
    //// console.log(formData);
    if($('#customSwitch1').prop("checked")){
      this.imageProctoringStatus=1
    }else{
      this.imageProctoringStatus=0;
    }
    var mode=0;
    if($('#customSwitch2').prop("checked")){
      mode=1;
    }else{
      mode=0;
    }

    var selectedIds="";
    this.selectedItems.forEach(element => {
      selectedIds+=element.id+",";
    });
    selectedIds=selectedIds.substring(0, selectedIds.length - 1);


    
    this.service.postData("testmanagement/testsetup/v3/createtestconfig?token="+localStorage.getItem('token')+"&mode="+mode,
    {
       
      "evaluatorIds": selectedIds,
      "administeredAliasTitle":this.testAdminAliasName,
      "instanceId": this.routeId,
      "notifyResultToMail": this.notifyEmail,
      "passPercentage": this.passpercentage,
      "progressiveDecrement": this.progressiveDecrement,
      "progressiveIncrement": this.progressiveIncrement,
      "testComplexityId": this.testComplexity,
      "testConfigId": this.testConfigId,
      "testConfigTitle": formData.testAdminName,
      "testDuration": this.testDuration,
      "testSectionConfiguration":  this.sections,
      "testTotalQuestions": this.totalQuestions,
      "testTypeId": this.testType,
      "imageProctoringStatus":this.imageProctoringStatus, 
      "isMACQTest":this.isMCQ,
      "listOfCandidates":this.candidateList      
 
 
    }
  
   ).subscribe
   (
     data=>{
       // console.log(data);
       if(data["statusCode"]==1){
         // console.log(data);
        this.route.navigateByUrl("/test-config/"+data["testConfigId"]+'/done');
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
   )
   
      



    }
      
     }

  imageProctoringStatus=0;
  createAdministerTest(formData){
    

   
 //// console.log(formData);
    this.service.postData("testmanagement/testsetup/createtestconfig?token="+localStorage.getItem('token'),
    {
      "evaluatorIds": "",
      "administeredAliasTitle":this.testAdminAliasName,
      "instanceId": this.routeId,
      "notifyResultToMail": "",
      "passPercentage": 0,
      "progressiveDecrement": 0,
      "progressiveIncrement": 0,
      "testComplexityId": formData.testComplexityId,
      "testConfigId": 0,
      "testConfigTitle": formData.testAdminName,
      "testDuration": 0,
      "testSectionConfiguration":  [],
      "testSetupId": 0,
      "testStatusId": 0,
      "testTotalQuestions": 0,
      "testTypeId": this.testType,
      "imageProctoringStatus":this.imageProctoringStatus
    }
  
   ).subscribe
   (
     data=>{
       // console.log(data);
       if(data["statusCode"]==1){
        this.pageFlag=true;
      this.sectionsData=data;

        this.sections=data['sectionsList'];
        this.testConfigId=data['testConfigId']
        // console.log(data['sectionsList']);
       }else{
        this.service.errorAlert(data["statusMessage"]);
      }

     },
     error=>{
       // console.log(error);
     },
     ()=>{
       setTimeout(() => {
      $(".selected-list").css("width","50%");
         
       }, 500);
     }
   )
  }

  testConfigId=0;
  testAdminAliasName;
  testInstanceName;
  complexityList;
  candidateList=[];
  addparticipant(data){
    data.testActivationTime = this.datePipe.transform(data.testActivationTime,"y-MM-dd HH:mm:ss");

    data.testExpirationTime = this.datePipe.transform(data.testExpirationTime,"y-MM-dd HH:mm:ss");
   this.candidateList.push(data);
   $('#addParticipantForm').trigger("reset");
   $('#exampleModalCenter').modal('toggle');

   // console.log(this.candidateList);
  }
  ngOnInit(){
    this.getTemplateLink();
    this.checkRec();
    //  // console.log(this.routeId);
      
     // // console.log(location.href.split('/').length);
      var url=location.href.split('/');
      var edit=url[url.length-1];
     // // console.log(edit);

      if(edit=="create"){
       this.blockUI.start('Please Wait ...');
          this.service.getAll("testmanagement/testsetup/getadministeredtestaliasnamebyinstanceid?token="+localStorage.getItem('token')+"&instanceId="+this.routeId).subscribe(
            data=>{
                  // console.log(data);
                  if(data["statusCode"]==1){
                    this.testAdminAliasName=data["testInstanceAliasName"];
                    this.testInstanceName=data["instanceTitle"];
                    $('#testInstanceName').val(this.testInstanceName);
                    $('#testAdminAliasName').val(this.testAdminAliasName);
                  }
                  
            },
            error=>{
              // console.log(error);
              this.blockUI.stop();
            },
            ()=>{
               
              this.service.getAll("testmanagement/testsetup/v3/complexitymodes?token="+localStorage.getItem('token')+"&instanceId="+this.routeId+"&isMACQTest="+this.isMCQ).subscribe(
                data=>{
                  // console.log(data);
                  this.complexityList=data["complexityModes"];
                },
                error=>{
                  // console.log(error);
                  this.blockUI.stop();
                },
                ()=>{
                  this.blockUI.stop();
                  if(this.complexityList.length>0){
                    this.testComplexity=this.complexityList[0].testComplexityModeId;
                    this.onComplexityChanged(this.complexityList[0].testComplexityModeId);
                  }
                  //
                }
              ); 
            }
          );
      }

      // if(edit=="edit"){

      //   var res;
      //   this.service.getAll("testmanagement/testsetup/testconfigsectiondetailsbytestconfigid?token="+localStorage.getItem('token')+"&testConfigId="+this.routeId)
      // .subscribe(
      //     (data)=>{
      //       // console.log(data)
            
      //     if(data['statusCode'] == 1){
      //       res=data["testSetupDetails"];
      //     this.sectionsData=data['testSetupDetails'];
      //     this.sections=this.sectionsData.testSectionConfiguration;
      //       this.testConfigTitle=res.testConfigTitle;

          
      //     }else{
              
    
      //     }
      //     },
      //     (error)=>{
      //       // console.log(error)
      //     },
      //     ()=>{
      //       this.flag=true;
      //       this.testConfigId=res.testConfigId;
      //       setTimeout(() => {
             
              
      //         $("#testConfigTitle").val(res.testConfigTitle);
              
      //       $("#noOfQuestions").val(res.totalNumberOfTestConfigQuestions);
      //       this.totalQuestions=res.totalNumberOfTestConfigQuestions;
      //         $("#testDuration").val(res.testDuration);
      //         this.testDuration=res.testDuration
      //         $("#passPercentage").val(res.passPercentage);
      //         this.passpercentage=res.passPercentage;
      //         if(res.testComplexityId==5){
      //           $("#progressiveDecrement").val(res.progressiveDecrement);
      //           this.progressiveDecrement=res.progressiveDecrement;
      //           $("#progressiveIncrement").val(res.progressiveIncrement);
      //           this.progressiveIncrement=res.progressiveIncrement
      //         }
      //         if(res.notifyResultTo==null){
      //           $("#notifyResultsMail").val("");
      //         }else{
      //           $("#notifyResultsMail").val(res.notifyResultTo);
      //         }
              


      //         this.notifyEmail=res.notifyResultTo;
      //         var selectedEvals = res.evaluatorIds.split(',');
      //         // console.log(selectedEvals);
      //         selectedEvals.forEach(id => {
      //           this.dropdownList.forEach(element => {
      //             if(element.id==id){
      //               this.selectedItems.push(element);
      //             }
      //           });
      //         });

      //         this.sections.forEach((element,index)=>{
      //           // console.log(element.numberOfQuestions);
      //           if(element.isSectionActive==1){
      //             // console.log("enterrrr");
      //             $("#section"+index).val(element.numberOfQuestions);
      //             this.sections[index].numberOfQuestions=element.numberOfQuestions;
      //           }
      //         });
              
              

      //       }, 500);
            


      //     }
      //   );



      // }else{


      // this.service.getAll("testmanagement/testsetup/testsetupdetailsbytestsetupid?token="+localStorage.getItem('token')+"&testSetupId="+this.routeId)
      // .subscribe(
      //     (data)=>{
      //       // console.log(data)
      //     if(data['statusCode'] == 1){
      //     this.sectionsData=data['testSetupDetails']
      //     this.sections=this.sectionsData.testSectionConfiguration;

          
      //     }else{
              
    
      //     }
      //     },
      //     (error)=>{
      //       // console.log(error)
      //     },
      //     ()=>{
      //       this.flag=true;
      //     }
      //   );
      // }


          var response;
         this.service.getAll("auth/user/evaluatorlist?token="+localStorage.getItem('token'))
         .subscribe(
          (data)=>{
            // console.log(data)
          response=data;
          
          },
          (error)=>{
            // console.log(error)
          },
          ()=>{


          if(response['statusCode'] == 1){
           
        // console.log("eval");
      
        response.evaluatorList.forEach(element => {
          this.dropdownList.push({"id":element.evaluatorId,"itemName":element.evaluatorMail})
        });

        
      
          }else{
              // console.log("no");
    
          }

          }
        );
      

  //        this.service.getAll("testmanagement/testsetup/listoftestsetups?token="+localStorage.getItem('token'))
  //        .subscribe(
  //         (data)=>{
  //           // console.log(data)
  //         if(data["statusCode"] == 1){
  //           this.listOfTestSetups=data["listOfTestSetups"];
  //         }
          
  //         },
  //         (error)=>{
  //           // console.log(error)
  //         },
  //         ()=>{

  //              }
  //       );

       
      this.dropdownSettings = { 
                                singleSelection: false, 
                                text:"Select Evaluator",
                                selectAllText:'Select All',
                                unSelectAllText:'UnSelect All',
                                enableSearchFilter: true,
                                classes:"myclass custom-class"
                                  };            
  }
  onItemSelect(item:any){
      // console.log(item);
      // console.log(this.selectedItems);
  }
  OnItemDeSelect(item:any){
      // console.log(item);
      // console.log(this.selectedItems);
  }
  onSelectAll(items: any){
      // console.log(items);
  }
  onDeSelectAll(items: any){
      // console.log(items);
  }
}
