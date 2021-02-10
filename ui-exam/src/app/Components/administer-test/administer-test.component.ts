import { Component, OnInit ,ViewChild} from '@angular/core';
import { AllServicesService } from "./../../Services/AllServices/all-services.service";
import { BlockUI, NgBlockUI } from 'ng-block-ui';
 
import { ngxLoadingAnimationTypes, NgxLoadingComponent } from 'ngx-loading';
import { ToastrService } from 'ngx-toastr';

declare var $;
@Component({
  selector: 'app-administer-test',
  templateUrl: './administer-test.component.html',
  styleUrls: ['./administer-test.component.css']
})
export class AdministerTestComponent implements OnInit {

  @BlockUI('contact-list') blockUIList: NgBlockUI;
  items = [];
  pageOfItems: Array<any>;
  p_glob_1;
  color:any = 'primary';
  localInstance:boolean = true;
  globalTestSetup:object;
  instanceGlobalView:object;
  searchTag:object;
  tagList:any[]=[]
  localTagList:any[]=[]
  instanceView:object;
  public sectionId: any;
  public sectionsData: any[]=[];
  createdQuestion: any[] = [];

  handleKeyDown(event){
    // console.log(event.code);
    if(event.code=="Enter"){
    //  this.addNode(tree,node,sub,2):temp=0
    }
  }

  @ViewChild('auto',{static:true}) auto;


  hideInput(){

    
  }

  @BlockUI() blockUI: NgBlockUI;
  public testSetups:object={
    'listOfTestSetups':[]
  }
  public tenantName:any;
  constructor(private apiService : AllServicesService,private toastr: ToastrService) { 
    var domain = window.location.hostname;
    this.tenantName = domain.split('.')[0]
  }

 
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;

  isRecruiter=false;
  checkRec(){
    var roleList = JSON.parse(localStorage.getItem('role'));
    if(roleList.name == 'Recruiter'){
      // console.log(window.location.hostname.split('.')[0]);
      if(window.location.hostname.split('.')[0] == 'recruiter'){
        this.isRecruiter=true;
        
      }else{
        this.isRecruiter=false;
      }
      
    }
   }

   goToLink(instanceId){
  console.log(instanceId);
  console.log(window.location.href.split('#')[0])
  var tempurl=window.location.href.split('#')[0]+'#/contribute/'+instanceId;
  var url='https://www.linkedin.com/shareArticle?mini=true&url='+tempurl+'&title=NoCheatingdude&summary=My%20favorite%20developer%20program&source=NoCheatingdude'

     window.open( encodeURIComponent(url), "","width=500,height=500");
}




   localPageNo=1;
   onLocalPageChange(event){
     this.localPageNo=event;
     this.getTestSetups(this.localPageNo-1,'')
    }

   pageNo=1;
   onPageChange(event){
     this.pageNo=event;
    // console.log(event);

    this.blockUI.start('Please Wait We Are Fetching Global Test Instances ...')
          this.apiService.getAll('testmanagement/testinstance/globaltestinstance?token='+localStorage.getItem('token')+'&instanceOffset='+(this.pageNo-1)+'&tagKeyword=')
          .subscribe(res=>{
              if(res['statusCode'] == '1'){
                this.globalTestSetup = res;
                this.globPageFlag=true;
              }
              this.blockUI.stop();
          },error=>{
            this.blockUI.stop();
          },
          ()=>{
            this.globalTestSetup["listOfGlobalTestInstances"].forEach(element => {
              element.processing=false;
        });
          })

   }
   globalInstanceCount=0;
   localInstanceCount=0;
  ngOnInit() {

     
     
    this.loading=true;
    this.getLocalTags();
    this.checkRec();
    this.getTestSetups(0,'');
    // this.getAllSections();

    

    $('.modal').on('show.bs.modal', function () {
      $("body").css('overflow', 'hidden');
      $('.modal').css('overflow', 'auto');
    })
    
    $('#instanceViewModal').on("hidden.bs.modal", function () {
      $("body").css('overflow', 'auto');
      $('.modal').css('overflow', 'hidden');
    });
  }


  
  getTestSetups(offset,tag){
    this.blockUI.start("Please Wait ...")
    // this.testSetups = {"statusCode":1,"statusMessage":"List of TestInstances.","listOfTestInstances":[{"instanceId":1,"instanceTitle":"Data Science Python","instanceAliasTitle":null,"testId":0,"finishStatus":0,"deleteStatus":0,"createdBy":0,"updatedBy":0,"deletedBy":0,"createdOn":null,"updatedOn":null,"deletedOn":null,"testOwner":"Mahesh Chandolu","testSetupTitle":"Data Science","administeredTestCount":2}]};
    this.apiService.getAll('testmanagement/testsetup/listoftestinstances?token='+localStorage.getItem('token')+'&instanceOffset='+offset+'&tagKeyword='+tag)
      .subscribe(res=>{
          this.blockUI.stop();
          if(res["statusCode"]==1){
            this.testSetups = res;
            this.localInstanceCount=res['localInstanceCount'];
            
            
          }
          

      },error=>{
        this.blockUI.stop();
      },
      ()=>{
        this.blockUI.stop();
        $('tag-input-form input').css('height', "28px");
      this.testSetups["listOfTestInstances"].forEach(element => {
              element.processing=false;
        });
      })
  }

  stopProp(event) {
    event.stopPropagation();
  }
  testInstance;
  showInstance(test){
    this.testInstance=test;
    this.apiService.getAll('testmanagement/testsetup/gettestinstancedetails?token='+localStorage.getItem('token')+'&instanceId='+test.instanceId)
      .subscribe(res=>{
        this.instanceView = res;
          $('#instanceViewModal').modal('show');
      },error=>{

      })
  }

  showGlobInstance(test){
    // console.log(test.instanceId);



 
    this.apiService.getAll("testmanagement/testinstance/globaltestinstancebyinstanceid?token="+localStorage.getItem('token')+"&instanceId="+test.instanceId).subscribe(
      (data) => {
       
        if (data['statusCode'] == 1) {
          // console.log(data);
          this.instanceGlobalView = data['instanceDetails'];
          $('#instanceGlobalViewModal').modal('show'); 
        } else {
          this.apiService.errorAlert(data['statusMessage'])
        }
      },
      (error) => {
        // console.log(error)
        this.blockUI.stop();
      },
      () => {
        this.blockUI.stop();
      }
    );
    
  }


  getAllSections() {
    this.blockUI.start('Please Wait ...');
    this.apiService.getAll("reports/questions/getsections?token=" + localStorage.getItem('token')).subscribe(
      (data) => {
        // console.log(data)
        if (data['statusCode'] == 1) {
          this.sectionsData = data['sectionsList'];
        } else {
          // this.apiService.errorAlert(data['statusMessage'])
        }
      },
      (error) => {
        // console.log(error)
        this.blockUI.stop();
      },
      () => {
        this.blockUI.stop();
      }
    );
  }

  onSection(event, sectionId) {
    if (this.sectionId != sectionId) {
      if (this.createdQuestion.length) {
        this.createdQuestion = []
      }
    }
    this.sectionId = sectionId;
  }

  toggleInstance(event){
    // console.log(this.localInstance) 
    this.localInstance = !this.localInstance;
    
    if(!this.localInstance){
      this.pageNo=1;
      this.p_glob_1=1;
        this.getAllTags();

        this.blockUI.start('Please Wait We Are Fetching Global Test Instances ...')
        this.apiService.getAll('testmanagement/testinstance/globaltestinstance?token='+localStorage.getItem('token')+'&instanceOffset='+0+'&tagKeyword=')
        .subscribe(res=>{
            if(res['statusCode'] == '1'){
              this.globalInstanceCount=res['globalInstanceCount'];
              this.globalTestSetup = res;
              this.globPageFlag=true;
            }
            this.blockUI.stop();
        },error=>{
          this.blockUI.stop();
        },
        ()=>{
          this.globalTestSetup["listOfGlobalTestInstances"].forEach(element => {
            element.processing=false;
      });
        })
         
       
    }else{
      this.getTestSetups(0,'');
    }
  }
selectedTags=[];
query='';

itemAdded(event){
  this.query='';
console.log(this.selectedTags);
// var tags=''
// this.selectedTags.forEach(
//   (element)=>{
// tags=element.display;
//   }
// );
setTimeout(() => {
  $('tag-input-form input').css('height', "34px");
}, 500);

if(this.selectedTags.length==1){

  this.getTestSetups(0,event.instanceModelTagName)
}else {

this.query=event.instanceModelTagName;
console.log(event);
}
this.selectedTags.forEach((element) => {
  if(this.selectedTags.length>1){
    this.selectedTags[0].removable=false;
  }else{
    this.selectedTags[0].removable=true;
  }
});
}

itemRemoved($event){
  
  if(this.selectedTags.length == 0){
    console.log(this.selectedTags.length);
    this.getTestSetups(0,'');
  }else{
    this.query=this.selectedTags[this.selectedTags.length-1].instanceModelTagName;
  }
  this.selectedTags.forEach((element) => {
    if(this.selectedTags.length>1){
      this.selectedTags[0].removable=false;
    }else{
      this.selectedTags[0].removable=true;
    }
  });
}



  getLocalTags(){
    this.query='';
    
    this.localTagList = [  
    ]

    this.apiService.getAll('testmanagement/testsetup/listoflocalinstancetags?token='+localStorage.getItem('token')+'&tagkeyword=')
      .subscribe(res=>{
          if(res['statusCode'] == '1'){
            this.localTagList = res['instanceTags']
            this.localTagList.forEach((element)=>{
              element.display=element.instanceModelTagName
              element.value=element.instanceModelTagId
              element.removable=true;
            })
          }
      },
      error=>{

      },
      ()=>{
        console.log(this.localTagList);
      })

}
  getAllTags(){
      this.tagList = [ { "instanceModelTagId": 1, "instanceModelTagName": "aws" }, 
      { "instanceModelTagId": 2, "instanceModelTagName": "jenkins" } 
      ]

      this.apiService.getAll('testmanagement/testinstance/listofglobalinstancetags?token='+localStorage.getItem('token'))
        .subscribe(res=>{
            if(res['statusCode'] == '1'){
              this.tagList = res['instanceTags']
            }
        })
  }


  ratingChanged(event){
    // console.log(event);

    // POST /testinstance/addtestinstancerating
    var formData: any = new FormData();
    
    
   
    formData.append("token",localStorage.getItem('token'));
    formData.append("testinstacneid",this.testInstance.instanceId);

    formData.append("rating",parseInt(event.rating) );
    formData.append("comment","");

    
    this.apiService.postData('testmanagement/testinstance/addtestinstancerating',formData).subscribe(
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

  exportInstance(test){
    test.processing=true;
    var toast = this.toastr.show(test.instanceTitle,'Exporting...',{
      
      timeOut: 0,
      extendedTimeOut:0,
      positionClass:'toast-bottom-right',
      tapToDismiss:false
    });
    // this.blockUI.start('Please Wait We Are Exporting Your Test Instance')
    // this.apiService.successAlert('Test Instances Exported Successfully..')
    this.apiService.postData('testmanagement/testinstance/export?token='+localStorage.getItem('token')+'&testInstanceId='+test.instanceId,{})
      .subscribe(res=>{
          if(res['statusCode'] == '1'){
            
            this.apiService.successAlert(res['statusMessage']);
            test.isGlobalInstance=1
            // this.blockUI.stop();
            // this.getTestSetups();
            // getting updated global instances
            // this.blockUI.start('Please Wait We Are Fetching Global Test Instances ...')
            // this.apiService.getAll('testmanagement/testinstance/globaltestinstance?token='+localStorage.getItem('token')+'&instanceOffset='+0+'&tagKeyword=')
            // .subscribe(res=>{
            //     if(res['statusCode'] == '1'){
            //       this.globalTestSetup = res;
            //     }
            //     // this.blockUI.stop();
            // },error=>{
            //   // this.blockUI.stop();
            // })

          }else{
            // this.blockUI.stop();
            this.apiService.errorAlert(res['statusMessage']);
          }
          
      },error=>{
        this.toastr.clear(toast.toastId);
        test.processing=false;
        // this.blockUI.stop();
      },
      ()=>{
        this.toastr.clear(toast.toastId);
        test.processing=false;
      })
  }
  globPageFlag=false;
  searchTags(searchTag){
    if(searchTag.trim().length){
      this.apiService.getAll('testmanagement/testinstance/listofglobalinstancetagsbykeyword?token='+localStorage.getItem('token')+'&tagkeyword='+searchTag.trim())
      .subscribe(res=>{
        if(res['statusCode'] == '1'){
          this.tagList = res['instanceTags']
        }
      })
    }else{
      this.globalTestSetup = null;
      this.getAllTags();
      this.blockUI.start('Please Wait We Are Fetching Global Test Instances ...')
      this.apiService.getAll('testmanagement/testinstance/globaltestinstance?token='+localStorage.getItem('token')+'&instanceOffset='+0+'&tagKeyword=')
        .subscribe(res=>{
            if(res['statusCode'] == '1'){
              this.globalTestSetup = res;
              this.globPageFlag=true;
            }else{
              // this.globalTestSetup = res;
            }
            this.blockUI.stop()
        },error=>{
          this.blockUI.stop()
        },
        ()=>{
 this.globalTestSetup["listOfGlobalTestInstances"].forEach(element => {
            element.processing=false;
      });
        })
    }
    
  }
  getInstancesByTags(opt){
      this.apiService.getAll('testmanagement/testinstance/globaltestinstance?token='+localStorage.getItem('token')+'&instanceOffset='+0+'&tagKeyword='+opt)
        .subscribe(res=>{
            if(res['statusCode'] == '1'){
              this.globalTestSetup = res;
              this.globPageFlag=false;
            }else{
              // this.globalTestSetup = res;
            }
        },
        error=>{
          // console.log(error);
        },
        ()=>{
          this.globalTestSetup["listOfGlobalTestInstances"].forEach(element => {
            element.processing=false;
      });
        })
  }
  loading;
  importInstance(test){
    test.processing=true;
   var toast = this.toastr.show(test.instanceTitle,'Importing...',{
      
      timeOut: 0,
      extendedTimeOut:0,
      positionClass:'toast-bottom-right',
      tapToDismiss:false
    });
    
    
    //this.blockUIList.start('Loading...');
    // this.blockUI.start('Please Wait We Are Importing Global instance ...')
    this.apiService.postData('testmanagement/testinstanceimport/import?token='+localStorage.getItem('token')+'&globalTestInstanceId='+test.instanceId,{})
      .subscribe(res=>{
        this.blockUI.stop();
        if(res['statusCode'] == '1'){
          this.apiService.successAlert(res['statusMessage']);
          // this.getTestSetups();
          this.blockUIList.stop();
        }else{
          this.apiService.errorAlert(res['statusMessage']);
          // this.blockUIList.stop();
        }
      },error=>{
        // this.blockUIList.stop();
        this.toastr.clear(toast.toastId);
      },
      ()=>{
        this.toastr.clear(toast.toastId);
        test.processing=false;
      })
  }
}
