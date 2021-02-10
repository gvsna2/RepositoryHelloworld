import { Component, OnInit } from '@angular/core';
import {AllServicesService} from '../../Services/AllServices/all-services.service';
import { Router,ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common'; 
import Swal from 'sweetalert2';
declare var $ :any;

@Component({
  selector: 'app-test-config',
  templateUrl: './test-config.component.html',
  styleUrls: ['./test-config.component.css']
})
export class TestConfigComponent implements OnInit {

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

    totalQuestions:number=0;
    flag=false;
    passpercentage;
    testDuration;
    progressiveDecrement;
    progressiveIncrement;
    notifyEmail;
    testConfigTitle;

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

      }else{
       // this.service.errorAlert("Value should be 0 to "+this.sectionsData.totalNumberOfAllSectionQuestions);
        document.getElementById("noOfQuestions").classList.add("is-invalid");
      }
    this.checkTotal();
    }

    totalSectionQuestions=0;
    sectionQuestionCheck(value,index){
      // // console.log(value.target.id);
      // // console.log(value.target.value);
      
      if(value.target.value==""){
      
        $("#section"+index).val('0');
      }
      this.sections[index].numberOfQuestions=value.target.value;
      
      document.getElementById(value.target.id).classList.add("is-valid");
      document.getElementById(value.target.id).classList.remove("is-invalid");
      if(value.target.value<=this.sections[index].totalNoOfQuestions && value.target.value>=0){

      }else{
       // this.service.errorAlert("Value should be 0 to "+this.sectionsData.totalNumberOfAllSectionQuestions);
        document.getElementById(value.target.id).classList.add("is-invalid");
      }
       

    this.checkTotal();
    }

    checkTotal(){
 var temp=0;
      this.sections.forEach(element => {
        if(element.numberOfQuestions==""){
          // console.log(element.numberOfQuestions);
          element.numberOfQuestions=0;
          
        }else{
          temp=temp+parseInt(element.numberOfQuestions);
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
    
    administerTest(){

      //// console.log(formData);
      

      var selectedIds="";
      this.selectedItems.forEach(element => {
        selectedIds+=element.id+",";
      });
      selectedIds=selectedIds.substring(0, selectedIds.length - 1);
     if(this.sectionsData.manualEvaluationStatus==1){

      if(selectedIds==""){
        this.service.errorAlert("Please Select Evaluator");
      }else{
        this.service.postData("testmanagement/testsetup/createtestconfigsections?token="+localStorage.getItem('token'),
        {
          "administeredTestActivationTime": "",
          "administeredTestExpirationTime": "",
          "evaluatorIds": selectedIds,
          "administeredAliasTitle":this.testAdminAliasName,
          "instanceId": this.routeId,
          "notifyResultToMail": this.notifyEmail,
          "passPercentage": this.passpercentage,
          "progressiveDecrement": this.progressiveDecrement,
          "progressiveIncrement": this.progressiveIncrement,
          "testComplexityId": 0,
          "testConfigId": this.testConfigId,
          "testConfigTitle": "",
          "testDuration": this.testDuration,
          "testSectionConfiguration":  this.sections,
          "testSetupId": 0,
          "testStatusId": 0,
          "testTotalQuestions": this.totalQuestions,
          "testTypeId": 0,
          "imageProctoringStatus":this.imageProctoringStatus


        }
      
       ).subscribe
       (
         data=>{
           // console.log(data);
           if(data["statusCode"]==1){
             this.route.navigateByUrl("/test-config/"+data["testConfigId"]+'/done');
           }else{
             this.service.errorAlert(data["statusMessage"]);
           }
         },
         error=>{
           // console.log(error);
         },
         ()=>{
  
         }
       )
      }

     }else{

      this.service.postData("testmanagement/testsetup/createtestconfigsections?token="+localStorage.getItem('token'),
      {
        "administeredTestActivationTime": "",
        "administeredTestExpirationTime": "",
        "evaluatorIds": selectedIds,
        "administeredAliasTitle":this.testAdminAliasName,
        "instanceId": this.routeId,
        "notifyResultToMail": this.notifyEmail,
        "passPercentage": this.passpercentage,
        "progressiveDecrement": this.progressiveDecrement,
        "progressiveIncrement": this.progressiveIncrement,
        "testComplexityId": 0,
        "testConfigId": this.testConfigId,
        "testConfigTitle": "",
        "testDuration": this.testDuration,
        "testSectionConfiguration":  this.sections,
        "testSetupId": 0,
        "testStatusId": 0,
        "testTotalQuestions": this.totalQuestions,
        "testTypeId": 0,
        "imageProctoringStatus":this.imageProctoringStatus


      }
    
     ).subscribe
     (
       data=>{
         // console.log(data);
         if(data["statusCode"]==1){
           this.route.navigateByUrl("/test-config/"+data["testConfigId"]+'/done');
         }else{
           this.service.errorAlert(data["statusMessage"]);
         }
       },
       error=>{
         // console.log(error);
       },
       ()=>{

       }
     )
     }
     
        

        
       }

    imageProctoringStatus=0;
    createAdministerTest(formData){
      if($('#customSwitch1').prop("checked")){
        this.imageProctoringStatus=1
      }else{
        this.imageProctoringStatus=0;
      }

     
   //// console.log(formData);
      this.service.postData("testmanagement/testsetup/createtestconfig?token="+localStorage.getItem('token'),
      {
        "administeredTestActivationTime": this.datePipe.transform(formData.testvalidity[0],"y-MM-dd HH:mm:ss"),
        "administeredTestExpirationTime": this.datePipe.transform(formData.testvalidity[1],"y-MM-dd HH:mm:ss"),
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
        "testTypeId": formData.testTypeId,
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

    ngOnInit(){

      //  // console.log(this.routeId);
        
       // // console.log(location.href.split('/').length);
        var url=location.href.split('/');
        var edit=url[url.length-1];
       // // console.log(edit);

        if(edit=="create"){
         
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
              },
              ()=>{

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
