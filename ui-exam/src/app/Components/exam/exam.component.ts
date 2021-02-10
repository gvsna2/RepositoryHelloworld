import { Component, OnInit,OnDestroy,Inject ,HostListener} from '@angular/core';
import {Location} from '@angular/common';

import {AllServicesService} from '../../Services/AllServices/all-services.service';
import { Router,ActivatedRoute } from '@angular/router';
import { PipeTransform, Pipe } from "@angular/core";
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';
import Swal from 'sweetalert2';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import adapter from 'webrtc-adapter';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';


declare var $ :any;
adapter.browserDetails
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css']
})
export class ExamComponent implements OnInit,OnDestroy {
focus=0;
blur=0;
fullScreenCount=0;
toggleClass = 'ft-maximize';
ratingSubmited=false;

 
@BlockUI() blockUI: NgBlockUI;
ngOnDestroy() { 
  // this.endChat();
  if(this.examStarted){
    this.submitTest();
  }
  
  
}

  userActivity(count,activity){
    
    var formData: any = new FormData();
    
    
   
    formData.append("testInstanceId",this.routeId);
    formData.append("encryptedToken",this.token);
    formData.append("activityType",1);
    formData.append("activity",activity);
    formData.append("activitySno",count);

    this.service.postData("testmanagement/exam/suspiciousactivity",formData).subscribe(
      data=>{
        // console.log(data);
      },
      error=>{
        // console.log(error);
      },
      ()=>{
        // Swal.fire('Hello world!');
        if(activity=='IN'){
          Swal.fire({
            title: 'Dude!',
            text: 'Your Activity is Tracked.',
            imageUrl: "./../../../assets/images/resized_logo.png",
            imageWidth: 375,
            imageHeight: 100,
            imageAlt: 'No Cheating Dude',
          })
        }
        
        // this.service.errorAlert(count+ ". Your Activity is Tracked");
      }
    );

  }


 

//   @HostListener('window:beforeunload', ['$event'])
//   public beforeunloadHandler($event) {
//   $event.returnValue = "Are you sure?";
//  }


  @HostListener('window:focus', ['$event'])
  onFocus(event: FocusEvent): void {
   if(this.examStarted){
     this.focus++;
     // console.log("focus" + this.focus);  
    // alert(this.focus);
    this.userActivity(this.focus,"IN");
   
    
   }
    


  }

  @HostListener('window:blur', ['$event'])
  onBlur(event: FocusEvent): void {
    if(this.examStarted){
    this.blur++
    // console.log("blur" + this.blur);
    this.userActivity(this.blur,"OUT");
    }
  }

  openfullscreen() {
    // Trigger fullscreen
    const docElmWithBrowsersFullScreenFunctions = document.documentElement as HTMLElement & {
      mozRequestFullScreen(): Promise<void>;
      webkitRequestFullscreen(): Promise<void>;
      msRequestFullscreen(): Promise<void>;
    };
  
    if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {
      docElmWithBrowsersFullScreenFunctions.requestFullscreen();
    } else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) { /* Firefox */
      docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen();
    } else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen();
    } else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) { /* IE/Edge */
      docElmWithBrowsersFullScreenFunctions.msRequestFullscreen();
    }
  
  }
  
  closefullscreen(){
    const docWithBrowsersExitFunctions = document as Document & {
      mozCancelFullScreen(): Promise<void>;
      webkitExitFullscreen(): Promise<void>;
      msExitFullscreen(): Promise<void>;
    };
    if (docWithBrowsersExitFunctions.exitFullscreen) {
      docWithBrowsersExitFunctions.exitFullscreen();
    } else if (docWithBrowsersExitFunctions.mozCancelFullScreen) { /* Firefox */
      docWithBrowsersExitFunctions.mozCancelFullScreen();
    } else if (docWithBrowsersExitFunctions.webkitExitFullscreen) { /* Chrome, Safari and Opera */
      docWithBrowsersExitFunctions.webkitExitFullscreen();
    } else if (docWithBrowsersExitFunctions.msExitFullscreen) { /* IE/Edge */
      docWithBrowsersExitFunctions.msExitFullscreen();
    }
   
  }



  public webcamImage: WebcamImage = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  public errors: WebcamInitError[] = [];



  routeId=0;
  token;
  constructor(private _location: Location,private service : AllServicesService,private route : Router,private activeRoute: ActivatedRoute) { 

    this.activeRoute.params.subscribe(params=>{
      this.routeId = params['id'];
      this.token=localStorage.getItem('encryptedToken');
      
     // this.token="t1Sl5gfIZBbIUslmILWP1i0uC42BSNvYnrZhJKRiPNo%3D";

    })
  }
  examData;
  examActive=true;
  questionFlag=false;
  questionData;
  isAnswered=0;
  shouldBeReviewed=0;
  answer='';
  questionId;

  getAnswer(event){
    if(this.questionData.questionTypeId==1){
      // console.log(event.target.id);
      this.answer=event.target.id;
      this.isAnswered=1
    }
    else if(this.questionData.questionTypeId==2){
      var temp='';
      this.options.forEach(element => {
        temp+=element+',';
      });
      temp=temp.substring(0, temp.length - 1);
      this.answer=temp;
     // this.answer
      //// console.log(this.answer);
    }
   
  }

  confirmSubmission(){
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to Submit the Test!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Submit!'
    }).then((result) => {
      if (result.value) {
         this.submitTest();
      }
    })
  }

  afterGet(){
    if(this.questionData.shouldBeReview==1){
      setTimeout(() => {
      // console.log(true);
        $("#review"+this.questionData.testInstanceQuestionId).prop( "checked", true );
       // document.getElementById("review"+this.questionData.testInstanceQuestionId)[0].checked=true;
       // checkbox[0].checked
       }, 500);
    }else{
      setTimeout(() => {
        // console.log(false);
        $("#review"+this.questionData.testInstanceQuestionId).prop( "checked", false );
       // document.getElementById("review"+this.questionData.testInstanceQuestionId)[0].checked=true;
       // checkbox[0].checked
       }, 500);
    }
    if(this.questionData.isAnswered==1){
      // console.log("#options #"+this.questionData.candidateAnswer);
      this.answer=this.questionData.candidateAnswer;
      if(this.questionData.questionTypeId==1){
        setTimeout(() => {
          document.getElementById(this.questionData.candidateAnswer).click();
         }, 500);
      }
      else if(this.questionData.questionTypeId==2){
        var temp=this.questionData.candidateAnswer.split(',');
        temp.forEach(element => {
          this.options.push(parseInt(element));
        });
        // console.log(this.options);
        setTimeout(() => {
          this.options.forEach(element => {
            
          $('#'+element).prop( "checked", true );
          });
         }, 500);
        
      }
      else if(this.questionData.questionTypeId==4 || this.questionData.questionTypeId==6){
        setTimeout(() => {
          $("#descriptiveCode"+this.questionData.testInstanceQuestionId).val(this.questionData.candidateAnswer);
        }, 300);
        this.answer=this.questionData.candidateAnswer;
      }
      else if(this.questionData.questionTypeId==3 || this.questionData.questionTypeId==5){
        setTimeout(() => {
          $("#shortAnswer"+this.questionData.testInstanceQuestionId).val(this.questionData.candidateAnswer) ;
        }, 300);
        this.answer=this.questionData.candidateAnswer;
      }
      
       
       
    }else{
      this.answer='';
      this.options=[];
      
      if(this.questionData.questionTypeId==4 || this.questionData.questionTypeId==6){
        setTimeout(() => {
          $("#descriptiveCode"+this.questionData.testInstanceQuestionId).val("");
        }, 300);
      
      }
      else if(this.questionData.questionTypeId==3 || this.questionData.questionTypeId==5){
        setTimeout(() => {
          $("#shortAnswer"+this.questionData.testInstanceQuestionId).val("");
        }, 300);
        
      }
      
     
    }


    
  }



  counter = 0;
  interval = 1000;
 

  submitTest(){
    this.blockUI.start('Please Wait ...');
    
    this.examStarted=false;
  if(this.questionData){
    if($("#review"+this.questionData.testInstanceQuestionId).prop("checked")){
      //  // console.log("box checked")
        this.shouldBeReviewed=1;
       } else{
        this.shouldBeReviewed=0;
       }
 
  }

  
  
       this.service.postData("testmanagement/exam/finishtest?encryptedToken="+encodeURIComponent(this.token)+"&testInstanceId="+this.routeId,{}).subscribe(
        data=>{
      // console.log(data);
          if(data["statusCode"]==1){
            if(data["examStatus"]=="finished"){
              this.examActive=false;
              this.tokenForRating=data["encryptedToken"]; 
              
            }
           
          }
        },
        error=>{
          // console.log(error);
          this.blockUI.stop();
        },
        ()=>{
          this.blockUI.stop();
          // console.log("this.examActive"+this.examActive);
          // console.log("this.flag"+this.flag);
          //localStorage.setItem('encryptedToken','');
          
          localStorage.clear();
          this.closefullscreen();
        }
      );


  
   
  }

  getQuestion(id){
    // console.log(this.questionData)
    if(this.questionData){
      this.submitQuestion();
    }
    this.questionId=id;
    this.service.getAll("testmanagement/exam/getquestion?encryptedToken="+encodeURIComponent(this.token)+"&testInstanceQuestionId="+id).subscribe(
      data=>{
        // console.log(data);
        if(data["statusCode"]==1){
          this.questionFlag=true;
          this.questionData=data["question"];  
         // this.options=this.questionData.optionsList;

        }
      },
      error=>{

      },
      ()=>{
        this.getExamData();
        this.afterGet();
      }
    );

  }
  
options=[];

  onReviewChanged(){
  //  if($("#review"+this.questionData.testInstanceQuestionId).prop("checked")){
  //   this.questionData.shouldBeReview=
  //  } 
  
  }

  testInstanceIdForRating;
  tokenForRating;
  overallTestRating=0;
  questionQualityRating=0;
  comments="";

  

 
  submitRating(){
    
    var formData: any = new FormData();
 
    formData.append("encryptedToken",this.tokenForRating);
    formData.append("testInstanceId",this.routeId);
    formData.append("overAllTestRating",this.overallTestRating );
    formData.append("questionQualityRating",this.questionQualityRating );
    formData.append("comments",this.comments);
                                                                                                                                                       
    this.service.postData('testmanagement/rating/addtestrating',formData).subscribe(
      data=>{
        // console.log(data);
        if(data["statusCode"]==1){
          this.ratingSubmited=true;
        }
      },
      error=>{
        // console.log(error);
      },
      ()=>{

      }
    );


  }




  submitAnswerInProgressive(){
    this.blockUI.start('Please Wait ...');
    // console.log(this.questionData);
    let queryParamObj={
      "testInstanceQuestionId":this.questionData.testInstanceQuestionId,
      "questionSno":this.questionData.questionSno,
      "answer":this.answer,
      "shouldbeReviewed":this.shouldBeReviewed,
      "encryptedToken":this.token
    };
    let queryParam=$.param(queryParamObj);
this.service.getAll("testmanagement/exam/submitanswer?"+queryParam)
    .subscribe(
      data=>{
        // console.log(data);
        if(data["statusCode"]==1){
          this.questionFlag=true;
          this.questionData=data["question"];  
         

        }
      },
      error=>{
        // console.log(error);
        this.blockUI.stop();
      },
      ()=>{
        this.blockUI.stop();
        this.answer='';
        this.options=[];
        
        if(this.questionData.questionTypeId==4 || this.questionData.questionTypeId==6){
          setTimeout(() => {
            $("#descriptiveCode"+this.questionData.testInstanceQuestionId).val("");
          }, 300);
        
        }
        else if(this.questionData.questionTypeId==3 || this.questionData.questionTypeId==5){
          setTimeout(() => {
            $("#shortAnswer"+this.questionData.testInstanceQuestionId).val("");
          }, 300);
          
        }

       }
    );
  }


  onCheckboxChagen(event, value) {

    // if (event.checked) {

    //   this.options.push(value);
    // } 
    // if (!event.checked) {

    //   let index = this.options.indexOf(value);

    //   if (index > -1) {

    //     this.options.splice(index, 1);
    //   }
    // }
    
    var hasValue=false;
    if(this.options.length==0){
      //this.options.push(value);
    }
    else {
      this.options.forEach(element => {
        // console.log(element)
        // console.log(value);
        if(element==value){
         
          this.options.splice(this.options.indexOf(value), 1);
          hasValue=true;
        } 
      });

      
    }
    
    if(!hasValue){
      this.options.push(value);
    }



   

    // console.log(this.options);
  }

 

  getQuestionBySno(value){
    this.blockUI.start('Please Wait ...');
    // console.log(this.answer);
    if($("#review"+this.questionData.testInstanceQuestionId).prop("checked")){
    //  // console.log("box checked")
      this.shouldBeReviewed=1;
     } else{
      this.shouldBeReviewed=0;
     }
    var res;

    
    let queryParamObj={
      "testInstanceQuestionId":this.questionId,
      "questionSno":this.questionData.questionSno,
      "answer":this.answer,
      "shouldbeReviewed":this.shouldBeReviewed,
      "encryptedToken":this.token
    };
    let queryParam=$.param(queryParamObj);
this.service.getAll("testmanagement/exam/submitanswer?"+queryParam)
    .subscribe(
      data=>{
        res=data;
          // console.log(data);
      },
      error=>{
        // console.log(error);
        this.blockUI.stop();
      },
      ()=>{
        
        var sNo;
        if(value=='next'){
        sNo=  this.questionData.questionSno+1;
        }
        if(value=='pre') {
          sNo=  this.questionData.questionSno-1;
        }
        if(res["statusCode"]==1){
          this.service.getAll("testmanagement/exam/getquestionbysno?encryptedToken="+encodeURIComponent(this.token)+"&testInstanceId="+this.routeId+"&questionSno="+sNo)
          .subscribe(
            data=>{
              if(data["statusCode"]==1){
                this.questionFlag=true;
                this.questionData=data["question"];  
                //// console.log(this.questionData.testInstanceQuestionId);
                this.questionId=this.questionData.testInstanceQuestionId
               // this.options=this.questionData.optionsList;
      
              }
            },
            error=>{
              this.blockUI.stop();
            },
            ()=>{
              this.getExamData();
               this.afterGet();
               this.blockUI.stop();
            }
          );
        }
      }
    );

   
    

  }

  submitQuestion(){
    this.blockUI.start('Please Wait ...');
    // console.log(this.questionData.questionSno);
    // console.log(this.answer);
    // console.log(this.isAnswered)
   

    if($("#review"+this.questionData.testInstanceQuestionId).prop("checked")){
      //  // console.log("box checked")
        this.shouldBeReviewed=1;
       } else{
        this.shouldBeReviewed=0;
       }

       let queryParamObj={
        "testInstanceQuestionId":this.questionId,
        "questionSno":this.questionData.questionSno,
        "answer":this.answer,
        "shouldbeReviewed":this.shouldBeReviewed,
        "encryptedToken":this.token
      };
      let queryParam=$.param(queryParamObj);
this.service.getAll("testmanagement/exam/submitanswer?"+queryParam)
.subscribe(
  data=>{
      // console.log(data);
  },
  error=>{
    this.blockUI.stop();
  },
  ()=>{
    this.getExamData();
    this.blockUI.stop();
    
  }
);
  }





  
  getExamData(){
    this.service.getAll("testmanagement/exam/getallquestiondetails?encryptedToken="+encodeURIComponent(this.token)+"&testInstanceId="+this.routeId)
    .subscribe(
      data=>{
        // console.log(data);
        if(data["statusCode"]==1 && data["examStatus"]!="finished"){
          this.examActive=true;
          this.examData=data["listOfTestQuestions"];  
          localStorage.setItem('exam','started');

        }else{
          this.examActive=false;
        }
      },
      error=>{
        // console.log(error);
      },
      ()=>{
        

          

      }
    );
  }

  testType;
  testTotalNoOfQuestions;



  



  // timer




 // testDuration;

 triggerSnapshot(): void {
  // console.log("clicked");
  this.trigger.next();
 
}

 
noCamera=false;
public handleInitError(error: WebcamInitError): void {
  this.errors.push(error);
  this.noCamera=true;
  this.blockUI.stop();
  // console.log("No Camera");
}

 

 
public handleImage(webcamImage: WebcamImage): void {
  console.info('received webcam image', webcamImage);
  this.webcamImage = webcamImage;

  var image = new Image();
  image.src = this.webcamImage.imageAsDataUrl;

   
 fetch(this.webcamImage.imageAsDataUrl)
  .then(res => res.blob())
  .then(blob => {
    const file = new File([blob], this.candidateName+"-"+this.routeId+".jpg");
    // console.log(file);
    var formData: any = new FormData();
    
    
    //formData.append("candidatePictureFile",file);
    formData.append("testInstanceId",this.routeId);
    formData.append("encryptedToken",this.token);

    if(this.service.cfs){
      var response;
      var cfsformData: any = new FormData();
     // cfsformData.append("access-token",this.service.secretKey);
      cfsformData.append("files",file);
      this.service.postDataCfs(cfsformData).subscribe(
        res=>{
          // console.log(res);
          response =res;
          
        },
        error=>{
          // console.log(error);
        },
        ()=>{

          if(response.status==200){
            formData.append("cfsId",response.body[0].id);
            formData.append("cfsViewURL",response.body[0].selfLink.view);
            formData.append("cfsDownloadURL",response.body[0].selfLink.download);

            this.service.postData("testmanagement/cfs/uploadcandidatepicture",formData).subscribe(
              data=>{
                // console.log(data);
              },
              error=>{
                // console.log(error);
              },
              ()=>{
          
              }
            );


          }else{
            // console.log("file upload serviice down");
          }

        }
      );


      

    }else{
      formData.append("candidatePictureFile",file);
 
      this.service.postData("testmanagement/exam/uploadcandidatepicture",formData).subscribe(
        data=>{
          // console.log(data);
        },
        error=>{
          // console.log(error);
        },
        ()=>{
    
        }
      );
    }



    
  



  })

  
 
}

public get triggerObservable(): Observable<void> {
  return this.trigger.asObservable();
}


  candidateName="candidateName";
  testDuration;

  capturepic(){
    var second =Math.floor(Math.random() * 60);
    //// console.log(second+"time....");
    setTimeout(() => {
      //// console.log(second+"time....");
     this.triggerSnapshot();
    }, second*1000);
  }
  examStarted=false;
  startExam(){
     
    this.ratingSubmited=false;
    this.flag=false;
    this.service.getAll("testmanagement/exam/getallquestiondetails?encryptedToken="+encodeURIComponent(this.token)+"&testInstanceId="+this.routeId)
    .subscribe(
      data=>{
        // console.log(data);
        if(data["statusCode"]==1 && data["examStatus"]!="finished"){
          this.openfullscreen();
          localStorage.setItem('exam','started');
          this.examStarted=true;
          this.candidateName=data['candidateName'];
          this.examActive=true;
          this.examData=data["listOfTestQuestions"];  
          this.testType=data["testComplexityTypeId"];
          this.testTotalNoOfQuestions=data["testTotalNoOfQuestions"];
          this.counter=data["testDuration"]*60;
          this.testDuration=data["testDuration"];
          let timer =  setInterval(() => {
              // console.log(this.testDuration);
             this.capturepic();
              
            }, 1000*60);


            // let timer = setTimeout(function myTimer() {
            //   var second =Math.floor(Math.random() * 60);
            //   // console.log(second+"timer......");
            //   // console.log(new Date());
            //   timer = setTimeout(myTimer, 1000*(60 - second));
            // }, 1000);

            setTimeout(() => {
              // // console.log('Cancelling');
              clearTimeout(timer);
            }, 1000*60*this.testDuration);

          // if((this.counter/60)<=5){
            
          //   setTimeout(() => {
          //     this.triggerSnapshot();
          //   }, 1000*60);

          // }else{


          //   var arr = []
          //   while(arr.length < 5){
          //    var time = Math.floor(Math.random()*this.testDuration) + 1;
          //   if(arr.indexOf(time) === -1) arr.push(time);
          //   }

          //   arr.forEach(element => {
          //     // console.log(element); 
          //     setTimeout(() => {
          //       // console.log(element);  
          //       this.triggerSnapshot();
          //     }, 1000*60*element);
          //   });


          //   // var temp=[];
          //   // for(var i=0;i<5;i++){
          //   //   // console.log(this.counter/60);
          //   //   var time=Math.floor((Math.random() * (this.counter/60))+1);
          //   //   // console.log("out side"+time);
          //   //   setTimeout(() => {
          //   //     // console.log(time);  
          //   //     this.triggerSnapshot();
          //   //   }, 1000*60*time);
               
          //   // }

          // }
        }
        else{
          this.examActive=false;
        }
      },
      error=>{
        // console.log(error);
      },
      ()=>{
       
        if(this.examActive){

          setTimeout(() => {
            if(this.testType==5){
              this.submitAnswerInProgressive();
            }else{
              this.submitQuestion();
            }
            this.submitTest();
            
          }, this.counter*1000);

          // console.log(this.examData[0].encryptedTestInstanceQuestionId);
          this.getQuestion(this.examData[0].encryptedTestInstanceQuestionId);
        }
      }
    );




  }

  flag=true;
  needCamera=false;
  elem;
  refreshCount=0
   
  public cameraSwitchedOn(event:string){
    console.log(event);
    this.blockUI.stop();
  }

  ngOnInit() {
    
    
    


    if(!localStorage.getItem('refreshCount')){ 
      localStorage.setItem('refreshCount',"start");
     
    } 
    else{

      if(localStorage.getItem('refreshCount') && localStorage.getItem('exam')){
       this.submitTest();
       setTimeout(() => {
       this.route.navigate(['/candidate/login',this.token])
         
       }, 2000);

      }else{
        
      }


     
     // // console.log(localStorage.getItem('refreshCount'));

      


    }
   
   //check for Navigation Timing API support
  // if (window.performance) {
  // alert("window.performance works fine on this browser");
  // }
  // if (performance.navigation.type == 1) {
  //   alert( "This page is reloaded" );
  // } else {
  //   alert( "This page is not reloaded");
  // }

    

    this.elem = document.documentElement;
    
     

    this.service.getAll("testmanagement/exam/getcandidateexamstatus?encryptedToken="+encodeURIComponent(this.token)+"&testInstanceId="+this.routeId)
    .subscribe(
      data=>{
        // console.log(data);
        if(data['statusCode']==1){
          if(data['imageProctoringStatus']==1){
            this.needCamera=true;
            this.blockUI.start("Please Allow the Camera");
          }else{
            this.needCamera=false;

          }
        }else{
          if(data['statusMessage']=='Something Went Wrong!!!'){
            this._location.back();
          }
        }
      },
      error=>{
        // console.log(error);
      },
      ()=>{
       
      }
    );

   
  }



}

@Pipe({
  name: 'minuteSeconds'
})
export class MinuteSecondsPipe implements PipeTransform {

    transform(value: number): string {
       const minutes: number = Math.floor(value / 60);
       return minutes.toString().padStart(2, '0') + ':' + 
           (value - minutes * 60).toString().padStart(2, '0');
    }
}