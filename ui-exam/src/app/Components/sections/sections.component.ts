import { Component, OnInit } from '@angular/core';
import { AllServicesService } from '../../Services/AllServices/all-services.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { NgForm } from '@angular/forms';
 
declare var $;
 
@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {

  questionsSuccessCount:any;
  questionsExistCount:any;
  totalQuestionsCount:any;
  public uploadedQues: object;

  dropdownCateg = {
    singleSelection: true,
    text: "Select Test Master",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
    classes: "myclass custom-class",
    'showCheckbox':false
  };
  selectedItems:any[] = [];

  dropdownCateg2 = {
    singleSelection: true,
    text: "Select ",
    showCheckbox:false,
    enableSearchFilter: true,
     
  };

  onDeSelectAll(event){
    this.heirarchy=undefined;
  }

  onItemSelect(event){
    // console.log(event.type)
    this.obj=event;
    this.service.getAll("testmanagement/getsubcategorylist?token=" + localStorage.getItem('token') + "&type=" + event.type + "&id=" + event.id).subscribe(
      (data) => {
        if (data['statusCode'] == 1) {
          // console.log(data)
          this.heirarchy = data['categoryName'];
          this.categoryId = data['categoryId'];
        } else {

        }
      },
      (error) => {
        // console.log(error)
      },
      () => { }
    );
  }



   selectedMaster:any[] = [];
   dropdownListMaster = [];
   testSectionList=[];


   onClosed(event){
// console.log(event);
   }
   onOpened(event){
// console.log(event);
  }

  templateLink: any;
  filesToUpload: Array<File> = [];
  bulkUpload:boolean;
  color:any = 'accent';
  checked = true;
  itemsAsObjects = [];
  // items=[{value: '0', display: 'Angular'}, {value: '1', display: 'React'}];
  onInputBlur(event){
    if(event!=""){
      this.itemsAsObjects.push({instanceModelTagId: "0",instanceModelTagName: event});
    }

  }
  onItemAdded(event){
    // this.itemsAsObjects.forEach(element => {
    //   element.id=0;
    // });
    // this.itemsAsObjects.push({instanceModelTagId: "0",instanceModelTagName: event})

    // console.log(this.itemsAsObjects);
    // console.log(event);
  }
  public optionObj: any = {
    '0': {
      'optionText': null,
      'tempId': null
    }
  };
  public optionList: any[] = [""];

  public heirarchy: String;
  public categoryId;

  routeId = 0;
  constructor(private service: AllServicesService, private route: Router, private activeRoute: ActivatedRoute) {

    this.activeRoute.params.subscribe(params => {
      this.routeId = params['id'];
    })
  }
  public sectionsData: any[];
  serachBySection: String;
  getAllSections() {
    this.blockUI.start('Please Wait ...');
    this.service.getAll("reports/questions/getsections?token=" + localStorage.getItem('token')).subscribe(
      (data) => {
        // console.log(data)
        if (data['statusCode'] == 1) {
          this.sectionsData = data['sectionsList']
        } else {

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
  testSetup;
  testSetupData;
  getAllSectionsByTestId() {

    this.service.getAll("testmanagement/testsetup/listofsectionsbytestsetupid?token=" + localStorage.getItem('token') + "&testSetupId=" + this.routeId).subscribe(
      (data) => {
        
        if (data['statusCode'] == 1) {
          // console.log(data)
          this.testSetupData=data;
          this.sectionsData = data['sectionsList']
          this.testSetup = data['testSetupTitle']

          // console.log(this.sectionsData )
        } else {

        }
      },
      (error) => {
        // console.log(error)
      },
      () => { }
    );
  }
  public complexityArr: any[];
  getComplexCity() {
    this.service.getAll("reports/questions/getcomplexity?token=" + localStorage.getItem('token')).subscribe(
      (data) => {
        if (data['statusCode'] == 1) {
          this.complexityArr = data['compelxityTypeDTO'];
        } else {

        }
      },
      (error) => {
        // console.log(error)
      },
      () => {

      }
    );
  }
  public questionTypeArr: any[];
  getQuestionType() {
    this.service.getAll("reports/questions/getquestiontype?token=" + localStorage.getItem('token')).subscribe(
      (data) => {
        if (data['statusCode'] == 1) {
          // console.log(data)
          this.questionTypeArr = data['questionType'];
        }
      },
      (error) => {
        // console.log(error)
      },
      () => { }
    );
  }



  public categoryAndSubCategoryArr: any[] = [];
  public subCategoryArr: any[] = [];
  getCategoryAndSubCategoryList() {

                   var   url;
                   if(this.flag){
                    url="testmanagement/globalcategorylist?token=" + localStorage.getItem('token')
                   }
                   else{
                     url="testmanagement/testsetup/listoftestmasterrootconfigs?token="+localStorage.getItem('token')+"&testSetupId="+this.routeId
                   }
                   

    this.service.getAll(url).subscribe(
      (data) => {
        if (data['statusCode'] == 1) {
          console.log(this.flag);
          if(this.flag){
            this.categoryAndSubCategoryArr = data['globalCategoryList']
            console.log(this.categoryAndSubCategoryArr);
          }
          else{
            this.categoryAndSubCategoryArr = data['testMasterConfigList']
             
            for(let i=0;i<data['testMasterConfigList'].length;i++){
              this.testSectionList.push({
                id: data['testMasterConfigList'][i].id,
                itemName: data['testMasterConfigList'][i].name,
                type:data['testMasterConfigList'][i].type
              })
            }
          }
          
          // console.log(data)
        }
      },
      (error) => {
        // console.log(error)
      },
      () => {

      }
    )
  }




  public id: number;
  public type: number;
  public obj: {
    "type": null,
    "id": null
  };
  subcategoryId;
  onSeletedCatAndSub(arr) {
    // console.log("sss"+arr)
    this.obj = this.categoryAndSubCategoryArr[arr];
    // // console.log("Type=" + this.obj.type)
    // // console.log("Id=" + this.obj.id)
    if (this.obj.type != 0 && this.obj.id != 0) {
      this.service.getAll("testmanagement/getsubcategorylist?token=" + localStorage.getItem('token') + "&type=" + this.obj.type + "&id=" + this.obj.id).subscribe(
        (data) => {
          if (data['statusCode'] == 1) {
            // console.log(data)
            this.heirarchy = data['categoryName'];
            this.categoryId = data['categoryId'];
          } else {

          }
        },
        (error) => {
          // console.log(error)
        },
        () => { }
      );
    }
  }

  flag = true;



  ngOnInit() {
    if (this.routeId) {
      this.flag = false;
      this.getAllSectionsByTestId();
      $('.ng2-tag-input__text-input').focusout(function(){
        // console.log("its working...........");
      });
    } else {
      // this.getAllSections();
      this.getTestMasters();


    }

    var self = this;

    $('#UploadedQuesModal').on('show.bs.modal', function () {
      $("body").css('overflow', 'hidden');
      $('.modal').css('overflow', 'auto');
    })
    
    $('#UploadedQuesModal').on("hidden.bs.modal", function () {
      $("body").css('overflow', 'auto');
      $('.modal').css('overflow', 'hidden');
    });

    $('#exampleModalCenter').on("show.bs.modal", function () {
      self.filesToUpload = [];
      self.toggleBulk('1');
    });

    // console.log(this.routeId);
    
    
      this.getComplexCity();
      this.getQuestionType();
      this.getCategoryAndSubCategoryList();
  
   

   
    

  }


  
  public sectionId: any;
  onSection(event, sectionId) {
    if(this.sectionId != sectionId){
        if(this.createdQuestion.length){
          this.createdQuestion = []
        }
    }
    this.sectionId = sectionId;
  }

  createdQuestion: any[] = [];

  dropdownList = [];
  // selectedItems = [];
  dropdownSettings = {
    singleSelection: true,
    text: "Select Sections",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
    classes: "myclass custom-class"
  };

  @BlockUI() blockUI: NgBlockUI;
  mcaAns: any;
  checkboxList: any[] = [];

  questionImageSelectedFile = null;
  onSelectedQuestionImage(event) {
    this.questionImageSelectedFile = event.target.files[0];
    // console.log(this.questionImageSelectedFile)
  }

  public questionOptionImageFile = null;
  public optionImageSuccess: boolean = false;
  public optionImageFail: boolean = false;
  public optionStatusMessage: String;
  public tempOptionImageId: Number;
  onSelectedOptionImage(event, ind) {
    this.optionImageSuccess = false;
    this.optionImageFail = false;

    this.questionOptionImageFile = event.target.files[0];
    const formData = new FormData();
    formData.append("files", this.questionOptionImageFile);
    formData.append('token', localStorage.getItem('token'));
    // console.log(this.questionOptionImageFile)
    this.service.postData("notification/image/option/add", formData).subscribe(
      (data) => {
        alert(data['statusMessage']);
        if (data['statusCode'] == 1) {
          // this.tempOptionImageId=data['tempoptionImageId'];
          this.optionObj[ind].tempId = data['tempoptionImageId'];
          // console.log(this.tempOptionImageId)
          this.optionImageSuccess = true;
          this.optionStatusMessage = data['statusMessage']
          setTimeout(
            () => {
              this.optionImageSuccess = false;
            }, 3000
          )
        } else {
          this.optionImageFail = true;
          this.optionStatusMessage = data['statusMessage'];
          setTimeout(
            () => {
              this.optionImageFail = false;
            }, 3000
          )
        }

      },
      (error) => {
        // console.log(error)
      },
      () => { }
    );

  }

  public statusMessage: String;
  public questionSuccesMessage: boolean = false;
  public questionFailMessage: boolean = false;
  addQuestion(myForm: NgForm) {
    var questionCode =$('#txtarea').val();
    // console.log(questionCode);
    // console.log(this.checkboxList)
    // console.log(this.mcaAns)
    this.blockUI.start('Please Wait ...');
    var data = myForm.value;
    this.questionFailMessage = false;
    this.questionSuccesMessage = false;
    var formListOptions: any[] = [];
    // options
    for (var key in this.optionObj) {
      if (this.optionObj.hasOwnProperty(key)) {
        var optionFilled: number = 0;
        if (this.optionObj[key]['optionText'] != null && this.optionObj[key]['optionText'].trim() != "") {
          optionFilled = 1;
        }
        formListOptions.push({
          "tempId": this.optionObj[key]['tempId'],
          "optionText": this.optionObj[key]['optionText']
        })
      }
    }


    

    // console.log(formListOptions)
    // end
    // if(!optionFilled){
    //     this.service.errorAlert("Please Enter the Options");
    //     this.blockUI.stop();
    //     return false
    // }
    const formData = new FormData();
    formData.append("optionList", JSON.stringify(formListOptions))
    formData.append("sectionId", this.sectionId)
    formData.append("questionText", data.questionText)
    formData.append("questionImage", this.questionImageSelectedFile)
    formData.append("questionTypeId", data.questionTypeId)
    formData.append("complexityId", data.complexityId)
    formData.append("questionCode", questionCode)
    if(data.globaleShare){
      formData.append("globaleShare", 'yes')
    }else{
      formData.append("globaleShare", 'no')
    }
    
    if (data.questionTypeId == '1' || data.questionTypeId == '2') {
      if (!optionFilled) {
        this.service.errorAlert("Please Enter the Options");
        this.blockUI.stop();
        return false
      }
    }
    if (data.questionTypeId == "1") {
      if (this.mcaAns == "0" || this.mcaAns) {
        formData.append("answer", this.mcaAns)
      } else {
        this.service.errorAlert("Please Select the Answer");
        this.blockUI.stop();
        return false
      }
    } else if (data.questionTypeId == "2") {
      if (this.checkboxList.length) {
        var checkboxSting = this.checkboxList.sort((a, b) => {
          return a - b
        })
      } else {
        this.service.errorAlert("Please Select the Answer");
        this.blockUI.stop();
        return false
      }
      formData.append("answer", checkboxSting.join(','))
      // console.log(checkboxSting)
    } else {
      formData.append("answer", data.answer)
    }

    formData.append("token", localStorage.getItem('token'))
    if (data.isMandate) {
      formData.append("isMandate", "1")
    } else {
      formData.append("isMandate", "0")
    }
    //formData.append("")
    // console.log(data)

    this.service.postData("reports/questions/addquestion", formData).subscribe(
      (data) => {
        // console.log(data['statusMessage'])
        if (data['statusCode'] == 1) {
          $('#exampleModalCenter').modal('hide')
          this.mcaAns = null;
          this.ngOnInit();
          // get ques by id
          this.service.getAll('reports/questions/getquestionsbyquestionid?token=' + localStorage.getItem('token') + '&questionid=' + data['questionId'])
            .subscribe(res => {
              this.blockUI.stop()
              this.createdQuestion = res['questionsList'];
            }, error => {

            })
          //  end
          this.checkboxList= [];
          myForm.reset();
          delete this.optionObj;
          this.selectedItems = []
          this.optionList = [];
          this.optionObj = {
            '0': {
              'optionText': null,
              'tempId': 0
            }
          };
          // this.questionSuccesMessage = true;
          // this.statusMessage = data['statusMessage'];
          // this.ngOnInit();
          // setTimeout(() => {
          //   this.questionSuccesMessage = false;
          //   this.statusMessage = null
          // }, 4000)
          this.service.successAlert(data['statusMessage'])
          if(this.routeId){
            this.updateSections();

          }
        } else {
          this.blockUI.stop();
          this.questionFailMessage = true;
          this.service.errorAlert(data['statusMessage']);
          // this.statusMessage = data['statusMessage']
          setTimeout(() => {
            this.questionFailMessage = false;
            // this.statusMessage = null
          }, 3000)
        }
      },
      (error) => {
        // console.log(error)
        this.blockUI.stop()
      },
      () => { 
        // $('#exampleModalCenter').modal('toggle');
        // this.ngOnInit();
      }
    );
  }
  testInstanceName;
  createTestInstance(){
    this.blockUI.start('Loading....')
    this.itemsAsObjects.forEach(element => {
      element.instanceModelTagId=0;
    });
  // console.log(this.testInstanceName);
    this.service.postData("testmanagement/testsetup/createtestinstance?token=" + localStorage.getItem('token'),{
      "instanceAliasTitle": this.testSetupData.testInstanceAliasName,
      "instanceId": 0,
      "instanceTitle": this.testInstanceName,
      "listOfTestSections":this.sectionsData,
      "instanceTags":this.itemsAsObjects,
      "testId": this.routeId
    }).subscribe(
      data => {
        // console.log(data);
        if(data["statusCode"]==1){
          this.route.navigate(['/test-setup/instance',data['testInstanceId']])
        }else{
          this.service.errorAlert(data["statusMessage"]);
        }
      },
      error => {
        // console.log(error);
        this.blockUI.stop()
      },
      () => {
        this.blockUI.stop()
      });
  }
  selectSection(index){
   
    if(this.sectionsData[index].isSectionActive==0){
     this.sectionsData[index].isSectionActive=1;
    }
     else{
       this.sectionsData[index].isSectionActive=0;
     }
    
    //  var temp =0
    //  this.sectionsData.forEach(element => {
       
    //    if(element.isSectionActive==1){
    //      temp+=element.totalNumberOfQuestions
    //    }
      // this.sectionsData.totalNumberOfAllSectionQuestions=temp;

    //  });
   }
  onAccordion() {
    document.getElementById('txtarea').addEventListener('keyup', function () {
      this.style.overflow = 'hidden';
      this.style.height = '0';
      this.style.height = this.scrollHeight + 'px';
    }, false);

  }

  onCode() {
    
    document.getElementById('txtarea2').addEventListener('keyup', function () {
      // console.log("hi");
      this.style.overflow = 'hidden';
      this.style.height = '0';
      this.style.height = this.scrollHeight + 'px';
       
    }, false);

  }

  questionImg() {
    document.getElementById('imageId').click();
  }

  optionImg(i) {
    document.getElementById('optionImageId' + i).click();
  }

  incOptionList() {
    this.optionList.push("")
    this.optionObj[this.optionList.length - 1] = {
      'optionText': null,
      'tempId': 0
    }

    // console.log(this.optionObj)
  }

  public questionType: any;
  setType(qType) {
    if (qType != 'Select Type') {
      this.optionList = [""];
      this.optionObj = {
        '0': {
          'optionText': null,
          'tempId': 0
        }
      };
      this.questionType = qType;
    }
  }

  checkboxAns(i) {
    if (!this.checkboxList.includes(i)) {
      this.checkboxList.push(i)
    } else {
      var ind = this.checkboxList.indexOf(i);
      this.checkboxList.splice(ind, 1)
    }
  }
  setMcqAns(ind) {
    this.mcaAns = ind;
  }

  public seactionSuccessMessage: boolean = false;
  public seactionFailMessage: boolean = false;
  public sectionStatusMessage: String;

  addSectionByTestInsatanceId(data){
    // console.log(data);

    const formData = new FormData();
    formData.append("id", this.obj.id);
    formData.append("type", this.obj.type);
    formData.append("testSectionName", data.seactionName);
    formData.append("isMasterSection",data.addToMaster ? '1' : '0' );

    formData.append("testSetupId", ''+this.routeId);
    
    



    formData.append("token", localStorage.getItem('token'))
    
    this.service.postData("testmanagement/testsetup/createinstancesection", formData).subscribe(
      data=>{
        // console.log(data);
        if(data['statusCode']==1){
          this.sectionsData.push(data['testInstanceSection']);
          this.service.successAlert(data['statusMessage']);
          $('#section_input').val('');
          $('#sectionModal').modal('toggle');
          
          this.selectedItems=[];
        }else{
          this.service.errorAlert(data['statusMessage']);
          
        }
        
      },
      error=>{
        // console.log(error);
      },
      ()=>{

      }
    );
  }



  addSection(data) {
    this.blockUI.start('Please Wait , We Are Creating Section ...')
    this.seactionSuccessMessage = false;
    this.seactionFailMessage = false;
    // console.log(data)
    const formData = new FormData();
    if (this.obj.type != 0) {
      this.type = this.obj.type;
      this.subcategoryId = this.obj.id
      if (this.type == 2) {
        formData.append("testCategoryId", this.categoryId)
        formData.append("testSubCategoryId", this.subcategoryId)
      } if (this.type == 1) {
        this.subcategoryId = 0;
        formData.append("testCategoryId", this.categoryId)
        formData.append("testSubCategoryId", this.subcategoryId)
      }
    }
    formData.append("testSectionName", data.seactionName);
    formData.append("token", localStorage.getItem('token'))
    
    this.service.postData("testmanagement/createsection", formData).subscribe(
      (data) => {
        if (data['statusCode'] == 1) {
          this.blockUI.stop();
          this.seactionSuccessMessage = true;
          this.sectionStatusMessage = data['statusMessage'];
          // this.route.navigate(['sections'])
          setTimeout(() => {
            this.seactionSuccessMessage = false;
            $('#myModal').modal('hide');
            this.ngOnInit();
          }, 2000)
          // this.ngOnInit();
        } else {
          this.blockUI.stop();
          this.seactionFailMessage = true;
          this.sectionStatusMessage = data['statusMessage'];
          setTimeout(() => {
            this.seactionFailMessage = false;
          }, 3000)
        }
      },
      (error) => {
        // console.log(error)
        this.blockUI.stop();
      },
      () => { 
        
      }
    );
  }

  toggleBulk(tab){
    if(tab == '1'){
      this.bulkUpload = false;
    }else if(tab == '2'){
      this.bulkUpload = true;
    }
  }
  clickUpload() {
    document.getElementById('upload_file_btn').click();
  }
  uploadFile(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    // console.log(this.filesToUpload)
  }

  uploadBulkQues() {
    this.blockUI.start('Please Wait We Are Uploading ')
    var formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    if (this.filesToUpload.length == 0) {
      this.blockUI.stop()
      this.service.errorAlert("No file selected!");
      return
    }
    // console.log(files[0])
    formData.append("files", files[0], files[0]['name']);
    formData.append("token", localStorage.getItem('token'));
    formData.append("sectionid", this.sectionId);

    if(this.service.cfs){
 
      var cfsformData: any = new FormData();
     // cfsformData.append("access-token",this.service.secretKey);
      cfsformData.append("files",files[0]);
      this.service.postDataCfs(cfsformData).subscribe(
        res=>{
          // console.log(res);
          if(res.status==200){
            formData.append("cfsId",res.body[0].id);
            formData.append("cfsViewURL",res.body[0].selfLink.view);
            formData.append("cfsDownloadURL",res.body[0].selfLink.download);

            this.service.postData('notification/cfs/bulkquestions', formData)
      .subscribe(res => {
        if (!res['statusCode']) {
          this.blockUI.stop()
          this.service.errorAlert(res['statusMessage']);
        } else {
          $('#exampleModalCenter').modal('toggle');
          this.blockUI.stop()
          this.filesToUpload = []
          this.ngOnInit();
          
          this.uploadedQues = res;

          this.filesToUpload = []
          this.questionsSuccessCount=res['questionsSuccessCount'];
          this.questionsExistCount=res['questionsExistCount'];
          this.totalQuestionsCount=res['totalQuestionsCount'];
          $('#UploadedQuesModal').modal('show');

          if(this.routeId){
            this.updateSections();

          }

          // document.getElementById('close_bul_btn').click()
          this.service.successAlert(res['statusMessage']);
        }

      }, error => {
        this.blockUI.stop()
      },
      () => { 
        // $('#exampleModalCenter').modal('toggle');
        //this.ngOnInit();
      })

          }else{
            this.service.errorAlert(files[0].name+"Upload Failed");
          }

        },
        error=>{
          // console.log(error);
        },
        ()=>{

        }
      );


      

    }else{

      this.service.postData('notification/upload/bulkquestions', formData)
      .subscribe(res => {
        if (!res['statusCode']) {
          this.blockUI.stop()
          this.service.errorAlert(res['statusMessage']);
        } else {
          $('#exampleModalCenter').modal('toggle');
          this.blockUI.stop()
          this.filesToUpload = []
          this.ngOnInit();
          this.uploadedQues = res;

          this.filesToUpload = []
          this.questionsSuccessCount=res['questionsSuccessCount'];
          this.questionsExistCount=res['questionsExistCount'];
          this.totalQuestionsCount=res['totalQuestionsCount'];
          $('#UploadedQuesModal').modal('show');
         
          if(this.routeId){
            this.updateSections();

          }

          // document.getElementById('close_bul_btn').click()
          this.service.successAlert(res['statusMessage']);
        }

      }, error => {
        this.blockUI.stop()
      },
      () => { 
        // $('#exampleModalCenter').modal('toggle');
        //this.ngOnInit();
      })
    }
    
  }

  getSize(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  getTemplateLink() {

    
    if(this.service.cfs){
     this.templateLink =this.service.cfsUrl + this.service.questionTemplateUrl;
    }else{
     this.templateLink = this.service.url + 'notification/template/download?filetype=question&fileId=1&token=' + localStorage.getItem('token')
    }
 
   }
 

  
 deleteOption(i) {
  if (this.optionList.length > 1) {
  this.optionList.splice(i, 1)
  delete this.optionObj[i]
 
  var alignObj = {}
  var objList = Object.keys(this.optionObj);
  for(let i=0;i<objList.length;i++){
  alignObj[i] = this.optionObj[objList[i]]
  }
  this.optionObj = alignObj;
 
  }
 
  }
   
    showDelete(i) {
    $('#close_' + i).css('visibility', 'visible')
    }
   
    hideDelete(i) {
    $('#close_' + i).css('visibility', 'hidden')
    }

    onMasterSelect(event){
      this.service.getAll('reports/questions/getsectionsbymaterid?token='+localStorage.getItem('token')+'&masterId='+event.id)
        .subscribe(res=>{
          this.sectionsData = res['sectionsList']
        },error=>{
  
        })
    }
    onRemoveAll(){
      // alert("hi")
      // var esc = $.Event("keydown", { keyCode: 27 });
      // $("body").trigger(esc);
      // // $.event.trigger({ type : 'keypress', which : 27 });
      document.getElementById('mul_close').click();
        // this.getAllSections();
        this.sectionsData=[];
    }
    clickDiv(){
      document.getElementById('mul_close').click();
    }
  
    getTestMasters(){
      this.dropdownListMaster = []
      this.service.getAll('testmanagement/testsetup/listoftestsetups?token='+localStorage.getItem('token'))
        .subscribe(res=>{
          if(res['statusCode']=='1'){
            for(let i=0;i<res['listOfTestSetups'].length;i++){
              this.dropdownListMaster.push({
                id: res['listOfTestSetups'][i].testSetupId,
                itemName: res['listOfTestSetups'][i].testSetupTitle
              })
            }

            if(this.dropdownListMaster.length){
              this.selectedMaster[0] = this.dropdownListMaster[0];              
               this.onMasterSelect(this.selectedMaster[0]);
             }

            
          }else{
            this.service.errorAlert(res['statusMessage'])
            
          }
         
        },error=>{
  
        })
      
    }


  updateSections(){
    this.service.postData("testmanagement/testsetup/instancetempsections?token=" + localStorage.getItem('token'),this.sectionsData
   ).subscribe(
      data=>{
        this.sectionsData=data['sectionsList'];
      },
      error=>{

      },
      ()=>{

      }
    );
  }

}
