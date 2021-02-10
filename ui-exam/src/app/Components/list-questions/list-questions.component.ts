import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllServicesService } from "./../../Services/AllServices/all-services.service";
import { NgForm } from '@angular/forms';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
declare var $;

@Component({
  selector: 'app-list-questions',
  templateUrl: './list-questions.component.html',
  styleUrls: ['./list-questions.component.css']
})
export class ListQuestionsComponent implements OnInit {


  questionsSuccessCount:any;
  questionsExistCount:any;
  totalQuestionsCount:any;

  dropdownListInstance = [];
    selectedItemsInstance = [];
    dropdownSettingsInstance = {
      singleSelection: true,
      text:"Select Test Instance",
      enableSearchFilter: true,
      classes:"myclass custom-class",
      showCheckbox:false
    };

  oldSection:boolean = true;

  checked = false;
  disabled = false;

  public secCatName:any;
  public seactionSuccessMessage: boolean = false;
  public seactionFailMessage: boolean = false;
  public sectionStatusMessage: String;
  public obj: {
    "type": null,
    "id": null
  };
  public type: number;
  subcategoryId;
  public categoryId;
  public heirarchy: String;

  public impAllQues:boolean;
  public categoryPath:any[]=[];
  public isQues:boolean;
  public isGlobQues:boolean;
  public alphaArr: any[] = ['All', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  public allCategory: object;
  public allCategBack:object;
  public globalQuesBack:object;

  public newGlobQues:object ={};
  public newGlobQuesBack:object = {};
  public allGlobalCategory:object;
  public allGlobalCategBack:object;
  public p_glob_1:number = 1;
  public p_glob_2:number = 1;
  public p_glob_3:number = 1;
  public isGlobal:boolean;
  public categoryGlobalPath:any[]=[];

  public selectedSecId: any = null;
  public checkBoxAnswers: any[] = [];
  public uploadedQues: object;
  
  public offset: number = 0;
  public limitRecords: number = 10;
  public globalSearchKey: any = null

  templateLink: any;
  questComplexity: any = null;
  questionTypeEdit: any = null;
  questionTxt: any = null;
  hoverGlobQues: object;
  globalQues: object;
  impQues: object = {}
  importQuesArr: any[] = [];
  color: any = 'primary';
  searchQues: any;
  @BlockUI() blockUI: NgBlockUI;
  mcaAns: any;
  checkboxList: any[] = [];
  p: number = 1;
  p_one: number = 1;
  p_two: number = 1;
  p_three: number = 1;
  p_four: number = 1;
  filesToUpload: Array<File> = [];
  public qustionList: any[] = []
  public filterQuesList: any[] = [];
  createdQuestion: any[] = [];
  
  public optionObj: any = {
    '0': {
      'optionText': null,
      'tempId': 0
    }
  };
  public optionList: any[] = [""];
  public complexityArr: any[];
  getComplexCity() {
    this.apiService.getAll("reports/questions/getcomplexity?token=" + localStorage.getItem('token')).subscribe(
      (data) => {
        if (data['statusCode'] == 1) {
          this.complexityArr = data['compelxityTypeDTO'];
        } else {

        }
      }, (error) => {
        // console.log(error)
      },
      () => {

      }
    );
  }
  public questionTypeArr: any[];
  getQuestionType() {
    this.apiService.getAll("reports/questions/getquestiontype?token=" + localStorage.getItem('token')).subscribe(
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
    this.apiService.postData("notification/image/option/add", formData).subscribe(
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
    if (!this.selectedItemsAll.length) {
      this.apiService.errorAlert('Please Select the Section to Add Question')
    }
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
    // if (!optionFilled) {
    //   this.apiService.errorAlert("Please Enter the Options");
    //   this.blockUI.stop();
    //   return false
    // }
    this.selectedSecId = this.selectedItems.length ? this.selectedItems[0].id : null;
    const formData = new FormData();
    formData.append("optionList", JSON.stringify(formListOptions))
    formData.append("sectionId", this.selectedItemsAll.length ? this.selectedItemsAll[0].id : 0)
    formData.append("questionText", data.questionText)
    formData.append("questionImage", this.questionImageSelectedFile)
    formData.append("questionTypeId", data.questionTypeId)
    formData.append("complexityId", data.complexityId)
    formData.append("questionCode", data.questionCode)
    if (data.globaleShare) {
      formData.append("globaleShare", 'yes')
    } else {
      formData.append("globaleShare", 'no')
    }

    if (data.questionTypeId == '1' || data.questionTypeId == '2') {
      if (!optionFilled) {
        this.apiService.errorAlert("Please Enter the Options");
        this.blockUI.stop();
        return false
      }
    }
    if (data.questionTypeId == "1") {
      if (this.mcaAns != null) {
        formData.append("answer", this.mcaAns)
      } else {
        this.apiService.errorAlert("Please Select the Answer");
        this.blockUI.stop();
        return false
      }
    } else if (data.questionTypeId == "2") {
      if (this.checkboxList.length) {
        var checkboxSting = this.checkboxList.sort((a, b) => {
          return a - b
        })
      } else {
        this.apiService.errorAlert("Please Select the Answer");
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

    this.apiService.postData("reports/questions/addquestion", formData).subscribe(
      (data) => {
        // console.log(data['statusMessage'])
        if (data['statusCode'] == 1) {
          this.mcaAns = null;
          this.getQuestions();
          this.checkboxList = []
          // get ques by id
          this.apiService.getAll('reports/questions/getquestionsbyquestionid?token=' + localStorage.getItem('token') + '&questionid=' + data['questionId'])
            .subscribe(res => {
              this.blockUI.stop()
              this.createdQuestion = res['questionsList'];
            }, error => {

            })
          //  end

            // get questions by section
            this.getQuestionsBySection(this.selectedItemsAll[0].id)

          myForm.reset();
          delete this.optionObj;
          this.selectedItemsAll = []
          // this.optionList = [""];
          this.optionList = [];
          this.optionObj = {
            '0': {
              'optionText': null,
              'tempId': 0
            }
          };
          this.questionSuccesMessage = true;
          this.statusMessage = data['statusMessage'];
          setTimeout(() => {
            this.questionSuccesMessage = false;
            this.statusMessage = null
          }, 4000)
          this.apiService.successAlert(data['statusMessage'])
        } else {
          this.blockUI.stop();
          this.questionFailMessage = true;
          this.apiService.errorAlert(data['statusMessage']);
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
      () => { }
    );
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

  public sectionsData: any[];
  serachBySection: String;
  getAllSections() {
    this.apiService.getAll("reports/questions/getsections?token=" + localStorage.getItem('token')).subscribe(
      (data) => {
        // console.log(data)
        if (data['statusCode'] == 1) {
          this.sectionsData = data['sectionsList']
          for (let i = 0; i < this.sectionsData.length; i++) {
            if(this.sectionsData[i].isOwner){
              this.dropdownListAll.push({
                id: this.sectionsData[i].sectionId,
                itemName: this.sectionsData[i].sectionName + '( ' + this.sectionsData[i].sectionCode + ' )'
              })
            }
            
          }
        } else {

        }
      },
      (error) => {
        // console.log(error)
      },
      () => { }
    );
  }

  public questionType: any;
  setType(qType) {
    this.mcaAns = null;
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
  dropdownListAll = [];
  selectedItemsAll = [];

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {
    singleSelection: true,
    text:"Select Section",
    enableSearchFilter: true,
    classes:"myclass custom-class",
    showCheckbox:false
  };
  dropdownCateg = {
    singleSelection: true,
    text: "Select Category",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
    classes: "myclass custom-class",
    showCheckbox:false
  };

  selectedCateg = [];
  dropdownListCateg = [];

  public tenantName:any;
  constructor(private apiService: AllServicesService, private router: Router) { 
    var domain = window.location.hostname;
    this.tenantName = domain.split('.')[0]
  }

  ngOnInit() {
    this.getQuestions();
    this.getComplexCity();
    this.getQuestionType();
    this.getAllSections();

    this.getAllCategories();
    this.getAllGlobalCategories();
    // this.getCategoryAndSubCategoryList();

    this.getTestInstance();
    var self = this;
    $('#exampleModalCenter').on('hidden.bs.modal', function () {
        self.createdQuestion = [];
    })

    
    $('#bulkUploadModal').on('hidden.bs.modal', function () {
      self.selectedItemsInstance = [];
    self.selectedItems = [];
    self.selectedCateg = [];
    self.heirarchy = null;
    self.secCatName = null;
    self.oldSection = true;
  })
  $('#globQuesModal').on('hidden.bs.modal', function () {
    self.selectedItemsInstance = [];
  self.selectedItems = [];
  self.selectedCateg = [];
  self.heirarchy = null;
  self.secCatName = null;
  self.oldSection = true;
})
$('#UploadedQuesModal').on('hidden.bs.modal', function () {
  $("body").css("overflow", "auto");
  $("#UploadedQuesModal").css("overflow", "hidden");
});
$('#UploadedQuesModal').on('show.bs.modal', function () {
  $("body").css("overflow", "hidden");
  $("#UploadedQuesModal").css("overflow", "auto");
});


  }


  getQuestions() {
    this.blockUI.start('Please Wait ...');
    this.apiService.getAll('reports/questions/getallquestions?token=' + localStorage.getItem('token'))
      .subscribe(res => {
        this.blockUI.stop();
        this.qustionList = res['questionsList'];
        this.filterQuesList = res['questionsList'];
      }, error => {
        this.blockUI.stop();
      })
  }

  uploadFile(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    // console.log(this.filesToUpload)
  }

  getSize(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

  clickUpload() {
    document.getElementById('upload_file_btn').click();
  }

  uploadBulkQues() {
    this.blockUI.start('Please Wait We Are Uploading ')
    var formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    if(!this.dropdownList.length){
      this.blockUI.stop()
      this.apiService.errorAlert("Please Select Section");
      return
    }

    if (this.filesToUpload.length == 0) {
      this.blockUI.stop()
      this.apiService.errorAlert("No file selected!");
      return
    }
    // console.log(files[0])
    formData.append("files", files[0], files[0]['name']);
    formData.append("token", localStorage.getItem('token'))
    formData.append('sectionid', this.selectedItems.length ? this.selectedItems[0].id : 0) 
   
    if(this.apiService.cfs){
 
      var cfsformData: any = new FormData();
     // cfsformData.append("access-token",this.service.secretKey);
      cfsformData.append("files",files[0]);
      this.apiService.postDataCfs(cfsformData).subscribe(
        res=>{
          // console.log(res);
          if(res.status==200){
            formData.append("cfsId",res.body[0].id);
            formData.append("cfsViewURL",res.body[0].selfLink.view);
            formData.append("cfsDownloadURL",res.body[0].selfLink.download);

            this.apiService.postData('notification/cfs/bulkquestions', formData)
            .subscribe(res => {
              if (!res['statusCode']) {
                this.blockUI.stop()
                // document.getElementById('uploaded_ques').click();
                this.apiService.errorAlert(res['statusMessage']);
              } else {
                this.blockUI.stop();
                this.getQuestions();
                this.dropdownList = [];
                // this.dropdownListInstance = [];
                this.selectedItemsInstance = [];
                this.selectedItems = [];
                document.getElementById('close_bul_btn').click();
                this.uploadedQues = res;

                this.filesToUpload = []
                this.questionsSuccessCount=res['questionsSuccessCount'];
                this.questionsExistCount=res['questionsExistCount'];
                this.totalQuestionsCount=res['totalQuestionsCount'];
                
                document.getElementById('uploaded_ques').click();
                this.apiService.successAlert(res['statusMessage']);
              }
      
            }, error => {
              this.blockUI.stop();
            })

          }else{
            this.apiService.errorAlert(files[0].name+"Upload Failed");
          }

        },
        error=>{
          // console.log(error);
        },
        ()=>{

        }
      );


      

    }else{

      this.apiService.postData('notification/upload/bulkquestions', formData)
      .subscribe(res => {
        if (!res['statusCode']) {
          this.blockUI.stop()
          // document.getElementById('uploaded_ques').click();
          this.apiService.errorAlert(res['statusMessage']);
        } else {
          this.blockUI.stop();
          this.getQuestions();
          this.dropdownList = [];
          // this.dropdownListInstance = [];
          this.selectedItemsInstance = [];
          this.selectedItems = [];
          document.getElementById('close_bul_btn').click();
          this.uploadedQues = res;

          this.filesToUpload = []
          this.questionsSuccessCount=res['questionsSuccessCount'];
          this.questionsExistCount=res['questionsExistCount'];
          this.totalQuestionsCount=res['totalQuestionsCount'];

          document.getElementById('uploaded_ques').click();
          this.apiService.successAlert(res['statusMessage']);
        }

      }, error => {
        this.blockUI.stop();
      })
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
  searchQuestion(searchQues) {
    this.qustionList = this.filterQuesList
    if (searchQues.trim().length > 0) {
      var filterArr = this.qustionList.filter((item) => {
        return item.qustionText.includes(searchQues.trim())
      })
      // console.log(filterArr)
      this.qustionList = filterArr;
    } else {
      this.getQuestions()
    }
  }


  getNextGlob() {
    this.offset += 10;
    this.pickGlobalQUestions();
  }
  getPrevGlob() {
    this.offset -= 10;
    this.pickGlobalQUestions();
  }
  pickGlobalQUestions() {
    this.isQues = true;
    // console.log(this.globalSearchKey)
    if (this.globalSearchKey.length) {
      this.apiService.getAll('reports/questions/searchquestion?searchkey=' + this.globalSearchKey + '&limitRecords=' + this.limitRecords + '&offset=' + this.offset + '&token=' + localStorage.getItem('token'))
        .subscribe(res => {
          this.globalQues = res;
          if (!res['questionsList'].length) {
            this.offset = 10;
          }
        }, error => {

        })
    } else {
      this.offset = 10;
      this.globalQues = null;
    }

  }
  setPos(ind, ques) {
    if (ques) {
      var answerArr: any[] = ques.questionAnswer.split(',');
      var optLis: any[] = [];
      for (let i = 0; i < ques.optionsList.length; i++) {
        if (answerArr.includes(String(ques.optionsList[i].optionId))) {
          optLis.push({
            answer: true,
            optionId: ques.optionsList[i].optionId,
            optionText: ques.optionsList[i].optionText,
            optionImageId: ques.optionsList[i].optionImageId,
            optionImageUrl: ques.optionsList[i].optionImageUrl
          })
        } else {
          optLis.push({
            answer: false,
            optionId: ques.optionsList[i].optionId,
            optionText: ques.optionsList[i].optionText,
            optionImageId: ques.optionsList[i].optionImageId,
            optionImageUrl: ques.optionsList[i].optionImageUrl
          })
        }
      }

      ques.optionsList = optLis;

    }
    this.hoverGlobQues = ques;
    $('#glob_ques_id' + ind).css('position', 'relative')
    $('#glob_ques_id' + ind + ' #menu_content').css({ 'position': 'absolute', 'left': '0px' })
  }
  editQuestion(hoverGlobQues) {
    // document.getElementById('edit_ques').click();
    $('#exampleModalCenter').modal('show');
    this.questionTxt = hoverGlobQues.questionTitle;
    this.questionTypeEdit = hoverGlobQues.questionTypeId;
    this.questionType = hoverGlobQues.questionTypeId;
    this.questComplexity = hoverGlobQues.questionComplexityId;
    this.optionList = hoverGlobQues.optionsList;
    // console.log(this.optionList)

    if (hoverGlobQues.questionTypeId == '1') {
      var ind = this.optionList.findIndex((item) => {
        return item.optionId == hoverGlobQues.questionAnswer;
      })
      if (ind > -1) {
        this.mcaAns = ind
      }
    }

    if (hoverGlobQues.questionTypeId == '2') {
      var answerId = hoverGlobQues.questionAnswer.split(',');

      for (let i = 0; i < answerId.length; i++) {
        var ind = this.optionList.findIndex((item) => {
          return item.optionId == answerId[i];
        })
        if (ind > -1) {
          this.checkBoxAnswers.push(ind);
        }
      }
      // console.log("this.checkBoxAnswers", this.checkBoxAnswers)

      // if(ind > -1){
      //   this.mcaAns = ind
      // }
    }

    for (let i = 0; this.optionList.length; i++) {
      this.optionObj[i] = {
        'optionText': this.optionList[i].optionText,
        'tempId': 0
      }
    }

  }
  checkMaqAnsers(i) {
    return this.checkBoxAnswers.includes(i)
  }
  getTemplateLink() {

    if(this.apiService.cfs){
    this.templateLink =this.apiService.cfsUrl + this.apiService.questionTemplateUrl;
      
     }else{
      this.templateLink = this.apiService.url + 'notification/template/download?filetype=question&fileId=1&token=' + localStorage.getItem('token')
     }
    //this.templateLink = this.apiService.url + 'notification/template/download?filetype=question&fileId=1&token=' + localStorage.getItem('token')
  }

  importAllQues(impAllQues){
    // // console.log('this.globalQuessssssssssssssssssssssss',this.globalQues)
    if(!impAllQues){
      var x:object = {
        ...this.newGlobQues
      }
      this.importQuesArr =  [ ...x['questionsList']]
    }else{
      this.importQuesArr = []
    }
   
  } 

  checkAllImported(){

    if(this.importQuesArr.length == this.newGlobQues['questionsList'].length){
      return true
    }else{
      return false;
    }
  }

  checkImport(ques){
    // // console.log('this.importQuesArrssssssssss',this.importQuesArr)
    var ind = this.importQuesArr.findIndex((item)=>{
      return item.questionId == ques.questionId;
    })

    if(ind > -1){
      return true;
    }else{
      return false;
    }
  }

  stopProp(event){
    event.stopPropagation();
  }

  importQues(globalQues, bool,event,i) {
   

    // if (!bool) {
    //   // var ind = this.importQuesArr.findIndex(x=>x == globalQues);
    //   // if(ind<0){
    //   this.importQuesArr.push(globalQues);
    //   // }else{
    //   //   this.importQuesArr.splice(ind,1);
    //   // }
    // } else {
    //   var ind = this.importQuesArr.findIndex(x => x == globalQues);
    //   if (ind < 0) {
    //     this.importQuesArr.push(globalQues);
    //   } else {
    //     this.importQuesArr.splice(ind, 1);
    //   }
    // }
    if(event.checked){
      var ind = this.importQuesArr.findIndex(x => {
        return x.questionId == globalQues.questionId;
      });
      if (ind < 0) {
        this.importQuesArr.push(globalQues);
      } else {
        this.importQuesArr.splice(ind, 1);
        // this.getGlobalQuestionsBySection(globalQues.sectionName);
        if(this.importQuesArr.length == this.newGlobQues['questionsList'].length){
          this.impAllQues = true;
        }else{
          this.impAllQues = false;
        }
        // this.getQuestionsBySection(this.categoryGlobalPath[this.categoryPath.length-1].sectionName)
      }
      if(this.importQuesArr.length == this.newGlobQuesBack['questionsList'].length){
        this.impAllQues = true;
      }else{
        this.impAllQues = false;
      }
    }else{
      var ind = this.importQuesArr.findIndex(x => {
        return x.questionId == globalQues.questionId;
      });
      if (ind < 0) {
        this.importQuesArr.push(globalQues);
      } else {
        this.importQuesArr.splice(ind, 1);
        // this.getGlobalQuestionsBySection(globalQues.sectionName)

        if(this.importQuesArr.length == this.newGlobQuesBack['questionsList'].length){
          this.impAllQues = true;
        }else{
          this.impAllQues = false;
        }
        
      }
    }

    
//     // console.log(this.importQuesArr)
//     // console.log("this.globalQues",this.globalQues)
// // console.log("this.globalQuesBack",this.globalQuesBack)


  }

  importQuesAns() {

    var questionList: any[] = []
    for (let i = 0; i < this.importQuesArr.length; i++) {
      var optionList: any[] = this.importQuesArr[i].optionsList;
      if (this.selectedItems.length) {
        this.importQuesArr[i].sectionId = this.selectedItems[0].id
      }
      if (this.importQuesArr[i].questionTypeId == '2') {
        var arr: any[] = []
        var multiIndArr: any[] = []
        this.importQuesArr[i].optionsList.filter(
          item => {
            arr = this.importQuesArr[i].answer.split(',')
            if (arr.includes(String(item.optionId))) {
              multiIndArr.push(item)
            }
           
          }
        )

        // console.log("multiIndArr", multiIndArr)

        var indArr = [];
        for (let j = 0; j < multiIndArr.length; j++) {
          let indx = this.importQuesArr[i].optionsList.findIndex(item => item == this.importQuesArr[i].optionsList[j])
          if (indx > -1) {
            indArr.push(indx)
          }

        }

        indArr.sort((a, b) => {
          return a - b;
        })

        this.importQuesArr[i].answer = indArr.join(',')

      } else if (this.importQuesArr[i].questionTypeId == '1') {
        var optInd = this.importQuesArr[i].optionsList.findIndex(
          item => item.optionId == this.importQuesArr[i].answer
        )
        if (optInd > -1) {
          this.importQuesArr[i].answer = String(optInd)
        }
      } else {
        this.importQuesArr[i].answer = this.importQuesArr[i].answer
      }

    }

    // console.log("this.importQuesArr", this.importQuesArr)
    var data = {
      "questionsList": this.importQuesArr,
      "token": localStorage.getItem('token')
    }
    this.apiService.postData('reports/questions/multiquestionimport', data)
      .subscribe(res => {
        if (res['statusCode'] == "1") {
          this.apiService.successAlert(res['statusMessage'])
          this.impQues = {}
          this.importQuesArr = []
          this.questionsSuccessCount=res['questionsSuccessCount'];
          this.questionsExistCount=res['questionsExistCount'];
          this.totalQuestionsCount=res['totalQuestionsCount'];
          this.selectedItems = []
          $('#globQuesModal').modal('hide')
          this.getQuestions();
          this.uploadedQues = res;
          document.getElementById('uploaded_ques').click();
          this.impAllQues = false;
        }

      }, error => {

      })

  }
  onItemSelect(item: any) {
    if (this.selectedSecId && this.selectedSecId != item.id) {
      this.createdQuestion = [];
    }
    // // console.log(item);
    // // console.log(this.selectedItems);
  }

  getAllCategories() {
    // this.isQues = true;
    this.categoryPath = [];
    this.apiService.getAll('testmanagement/testsetup/listoftestcategorys?token=' + localStorage.getItem('token'))
      .subscribe(res => {
        if (res['statusCode'] == '1') {
          this.allCategory = res;
          this.allCategBack = {
            ...this.allCategory
            }
        }
      })
  }

  getAllGlobalCategories() {
    // this.isQues = true;
    this.categoryGlobalPath = [];
    this.apiService.getAll('reports/questions/getglobalcategories?token=' + localStorage.getItem('token'))
      .subscribe(res => {
        if (res['statusCode'] == '1') {
          this.allGlobalCategory = res;
          this.allGlobalCategBack = {
            ...this.allGlobalCategory
            }
        }else{
          this.allGlobalCategory = res;
          this.allGlobalCategBack = {
            ...this.allGlobalCategory
            }
        }
      })
  }

  getSubCategories(cat) {
    this.allCategory = {};
    this.categoryPath = [];
    this.categoryPath.push(cat);
    this.apiService.getAll('testmanagement/testsetup/gettestcatelogdetails?token=' + localStorage.getItem('token') + '&id=' + cat.testCategoryId + '&type=' + cat.type)
      .subscribe(res => {
        if (res['statusCode'] == '1') {
          this.allCategory['listOfTestSubCategory'] = res['children'];
          this.allCategBack = {};
          this.allCategBack['listOfTestSubCategory'] = res['children'];
        }
      })

  }

  getGlobalSubCategories(cat) {
    this.allGlobalCategory = {};
    this.categoryGlobalPath = [];
    this.categoryGlobalPath.push(cat);
    this.apiService.getAll('reports/questions/getglobalsubcatandsectionsbycategory?token=' + localStorage.getItem('token') + '&categoryname=' + cat.categoryName)
      .subscribe(res => {
        if (res['statusCode'] == '1') {
          this.allGlobalCategory['listOfGlobalSubCategory'] = res['children'];
          this.allGlobalCategBack = {};
          this.allGlobalCategBack['listOfGlobalSubCategory'] = res['children'];
        }
      })

  }

  getSubCategoriesBy(cat) {
    this.categoryPath.push(cat);

    this.allCategory = {};
    if (cat.type == '2') {
      this.apiService.getAll('testmanagement/testsetup/gettestcatelogdetails?token=' + localStorage.getItem('token') + '&id=' + cat.id + '&type=' + cat.type)
        .subscribe(res => {
          if (res['statusCode'] == '1') {
            this.allCategory['listOfTestSubCategory'] = res['children'];
            this.allCategBack = {
              ...this.allCategory
            }
          }
        })
    } else if (cat.type == '3') {
      this.getQuestionsBySection(cat.id)
    }

  }

  getGlobalSubCategoriesBy(cat) {
    this.categoryGlobalPath.push(cat);

    this.allGlobalCategory = {};
    if (cat.type == '2') {
      this.apiService.getAll('reports/questions/getglobalsectionsbycatandsubcatnames?token=' + localStorage.getItem('token') + '&categoryname=' + this.categoryGlobalPath[0].categoryName + '&subcategoryname=' + this.categoryGlobalPath[this.categoryGlobalPath.length-1].subCategoryName)
        .subscribe(res => {
          if (res['statusCode'] == '1') {
            this.allGlobalCategory['listOfGlobalSubCategory'] = res['children'];
            this.allGlobalCategBack = {
              ...this.allGlobalCategory
            }
          }
        })
    } else if (cat.type == '3') {
      this.getGlobalQuestionsBySection(cat.sectionName)
    }

  }

  getGlobalQuestionsBySection(sec) {
    this.blockUI.start('Please Wait We Are Fetching Questions ...')
    // console.log(this.categoryGlobalPath)
    var url:any;
    if(this.categoryGlobalPath.length>2){
       url = 'reports/questions/getglobalquestionsbycatandsubcatandsectionsnames?token='+localStorage.getItem('token')+'&sectionName='+this.categoryGlobalPath[this.categoryGlobalPath.length-1].sectionName+'&subcategoryname='+this.categoryGlobalPath[this.categoryGlobalPath.length-2].subCategoryName+'&categoryname='+this.categoryGlobalPath[0].categoryName+'&hierarchy='+this.categoryGlobalPath[this.categoryGlobalPath.length-1].hierarchy
    }else{
      url = 'reports/questions/getglobalquestionsbycatandsubcatandsectionsnames?token='+localStorage.getItem('token')+'&sectionName='+this.categoryGlobalPath[this.categoryGlobalPath.length-1].sectionName+'&subcategoryname='+this.categoryGlobalPath[0].categoryName+'&categoryname='+this.categoryGlobalPath[0].categoryName+'&hierarchy='+this.categoryGlobalPath[this.categoryGlobalPath.length-1].hierarchy
    }
    this.apiService.getAll(url)
      .subscribe(res => {
        this.blockUI.stop();
        if(res['statusCode'] == '1'){
          this.isGlobQues = true;
          this.newGlobQues = res;
          this.newGlobQuesBack = {
            ...res
          }

          // if(res['questionsList'].length){
          //   // this.categoryGlobalPath.push({
          //   //   sectionName:res['questionsList'][0].sectionName
          //   // })
          // }

          if(this.importQuesArr.length == this.newGlobQuesBack['questionsList'].length){
            this.impAllQues = true;
          }else{
            this.impAllQues = false;
          }

        }else{
          this.apiService.errorAlert(res['statusMessage'])
        }
       
      }, error => {
        this.blockUI.stop();
      })

  }

  getQuestionsBySection(sec) {
    this.blockUI.start('Please Wait We Are Fetching Questions ...')
    this.apiService.getAll('reports/questions/getquestionsbysectionid?token='+localStorage.getItem('token')+'&sectionId='+sec)
      .subscribe(res => {
        this.blockUI.stop()
        if(res['statusCode'] == '1'){
          this.isQues = true;
          this.globalQues = res;
          this.globalQuesBack = {
            ...this.globalQues
          }
          if(res['questionsList'].length){
            // this.categoryPath[0] = {
            //   id:res['questionsList'][0].sectionId,
            //   name:res['questionsList'][0].sectionName
            // }
          }
          
        }else{
          this.apiService.errorAlert(res['statusMessage'])
          this.blockUI.stop()
        }
       
      }, error => {
        this.blockUI.stop()
      })

  }

  getByAlphaGlob(alpha){
    if (alpha == 'All') {
      this.isGlobQues = false;
      this.getAllGlobalCategories();
    }else{
      var listCatSubCat:any;
      if(!this.isGlobQues){
        if(this.allGlobalCategBack && this.allGlobalCategBack['globalCategoriesList']){
          listCatSubCat =   this.allGlobalCategBack['globalCategoriesList'].filter((item)=>{
           return  item.categoryName.toLowerCase()[0] == alpha; 
          })

          this.allGlobalCategory['globalCategoriesList'] = listCatSubCat;
        }else if(this.allGlobalCategBack && this.allGlobalCategBack['listOfGlobalSubCategory']){
          listCatSubCat =   this.allGlobalCategBack['listOfGlobalSubCategory'].filter((item)=>{
            if(item && item.subCategoryName){
              return  item.subCategoryName.toLowerCase()[0] == alpha; 
            }else if(item && item.sectionName){
              return  item.sectionName.toLowerCase()[0] == alpha;
            }
            
           })
 
           this.allGlobalCategory['listOfGlobalSubCategory'] = listCatSubCat;
        }   
      }else{
        if(this.newGlobQuesBack && this.newGlobQuesBack['questionsList']){
          listCatSubCat = this.newGlobQuesBack['questionsList'].filter((item)=>{
            return item.qustionText.toLowerCase()[0] == alpha;
          })
          this.newGlobQues['questionsList'] = listCatSubCat;
        }
      }
  }
  }

  getByAlpha(alpha) {
    if (alpha == 'All') {
      this.isQues = false;
      this.getAllCategories();
    }else{
        var listCatSubCat:any;
        if(!this.isQues){
          if(this.allCategBack && this.allCategBack['listOfTestCategory']){
            listCatSubCat =   this.allCategBack['listOfTestCategory'].filter((item)=>{
             return  item.testCategoryName.toLowerCase()[0] == alpha; 
            })
  
            this.allCategory['listOfTestCategory'] = listCatSubCat;
          }else if(this.allCategBack && this.allCategBack['listOfTestSubCategory']){
            listCatSubCat =   this.allCategBack['listOfTestSubCategory'].filter((item)=>{
              return  item.name.toLowerCase()[0] == alpha; 
             })
   
             this.allCategory['listOfTestSubCategory'] = listCatSubCat;
          }   
        }else{
          if(this.globalQuesBack && this.globalQuesBack['questionsList']){
            listCatSubCat = this.globalQuesBack['questionsList'].filter((item)=>{
              return item.qustionText.toLowerCase()[0] == alpha;
            })
            this.globalQues['questionsList'] = listCatSubCat;
          }
        }
    }
  }

  gotoPath(catPath,i){
    if(catPath.type == '1'){
      this.isQues = false;
      this.getSubCategories(catPath);
      this.categoryPath.splice(i,this.categoryPath.length-i-1)
    }else if(catPath.type == '2'){
      this.isQues = false;
      this.getSubCategoriesBy(catPath);
      this.categoryPath.splice(i,this.categoryPath.length-i-1)
    }else if(catPath.type == '3'){
      this.getSubCategoriesBy(catPath);
      this.categoryPath.splice(i,this.categoryPath.length-i-1)
    }
  }
  gotoPathGlobal(catPath,i){
    if(catPath.type == '1'){
      this.isGlobQues = false;
      this.getGlobalSubCategories(catPath);
      this.categoryGlobalPath.splice(i,this.categoryGlobalPath.length-i-1)
    }else if(catPath.type == '2'){
      this.isGlobQues = false;
      this.getGlobalSubCategoriesBy(catPath);
      this.categoryGlobalPath.splice(i,this.categoryGlobalPath.length-i-1)
    }else if(catPath.type == '3'){
      this.getGlobalQuestionsBySection(catPath);
      this.categoryGlobalPath.splice(i,this.categoryGlobalPath.length-i-1)
    }
  }

  viewQuestion(ques){
    this.hoverGlobQues = ques;

    if (this.hoverGlobQues['questionTypeId'] == '1') {
      var ind = this.hoverGlobQues['optionsList'].findIndex((item) => {
        return item.optionId == this.hoverGlobQues['answer'];
      })
      if (ind > -1) {
        this.mcaAns = ind
      }
    }

    if (this.hoverGlobQues['questionTypeId']== '2') {
      var answerId = this.hoverGlobQues['answer'].split(',');

      for (let i = 0; i < answerId.length; i++) {
        var ind = this.hoverGlobQues['optionsList'].findIndex((item) => {
          return item.optionId == answerId[i];
        })
        if (ind > -1) {
          this.checkBoxAnswers.push(ind);
        }
      }


    }

    // console.log("this.checkBoxAnswers",this.checkBoxAnswers)

  }
  onLinkClick(event){
    // // console.log(event)
    // if(event.index == 1){
    //   this.isGlobal = false;
    // }else if (event.index == 2){
    //   this.isGlobal = true;
    // }
    // console.log(event)
    if(!event.checked){
      this.isGlobal = false;
    }else{
      this.isGlobal = true;

      this.getTestInstance();
    }
  }

  getTestInstance(){
    this.dropdownListInstance = []
      this.apiService.getAll('reports/questions/listoftestinstance?token='+localStorage.getItem('token'))
        .subscribe(res=>{
          if(res['statusCode'] == '1'){
            for(let i=0;i<res['tsetInstancesList'].length;i++){
              this.dropdownListInstance.push({
                id: res['tsetInstancesList'][i].testInstanceId,
                itemName: res['tsetInstancesList'][i].testInstanceName,
                sections: res['tsetInstancesList'][i].sectionList,
                isGlobal: res['tsetInstancesList'][i].isGlobalInstance
              })
            }
          }
        })
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

  showDelete(i){
  $('#close_'+i).css('visibility','visible')
  }

  hideDelete(i){
    $('#close_'+i).css('visibility','hidden')
  }
  
  getCategoryAndSubCategoryList() {
    this.apiService.getAll("testmanagement/globalcategorylist?token=" + localStorage.getItem('token')).subscribe(
      (data) => {
        if (data['statusCode'] == 1) {
          for(let i=0;i<data['globalCategoryList'].length;i++){
            this.dropdownListCateg.push({
              id : data['globalCategoryList'][i].id,
              itemName: data['globalCategoryList'][i].name,
              type: data['globalCategoryList'][i].type
            })
          }
         
        }
      },
      (error) => {
        // console.log(error)
      },
      () => {

      }
    )
  }

  onCategSelect(){
    this.obj = this.selectedCateg[0];
    // // console.log("Type=" + this.obj.type)
    // // console.log("Id=" + this.obj.id)
    if (this.obj.type != 0 && this.obj.id != 0) {
      this.apiService.getAll("testmanagement/getsubcategorylist?token=" + localStorage.getItem('token') + "&type=" + this.obj.type + "&id=" + this.obj.id).subscribe(
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

  // createSection(data) {
  //   this.seactionSuccessMessage = false;
  //   this.seactionFailMessage = false;
  //   // console.log(data)
  //   const formData = new FormData();
  //   if (this.obj.type != 0) {
  //     this.type = this.obj.type;
  //     this.subcategoryId = this.obj.id
  //     if (this.type == 2) {
  //       formData.append("testCategoryId", this.categoryId)
  //       formData.append("testSubCategoryId", this.subcategoryId)
  //     } if (this.type == 1) {
  //       this.subcategoryId = 0;
  //       formData.append("testCategoryId", this.categoryId)
  //       formData.append("testSubCategoryId", this.subcategoryId)
  //     }
  //   }
  //   formData.append("testSectionName", this.secCatName);
  //   formData.append("token", localStorage.getItem('token'))
  //   this.apiService.postData("testmanagement/createsection", formData).subscribe(
  //     (data) => {
  //       if (data['statusCode'] == 1) {
  //         this.seactionSuccessMessage = true;
  //         this.sectionStatusMessage = data['statusMessage'];
  //         this.getAllSections();
  //         $('#addSectionModal').modal('hide');
  //         setTimeout(() => {
  //           this.seactionSuccessMessage = false;
  //         }, 3000)
  //         this.apiService.successAlert(data['statusMessage'])
  //         this.selectedCateg = [];
  //         this.secCatName  = []
  //         this.oldSection = !this.oldSection;
  //       } else {
  //         this.seactionFailMessage = true;
  //         this.sectionStatusMessage = data['statusMessage'];
  //         setTimeout(() => {
  //           this.seactionFailMessage = false;
  //         }, 3000)
  //       }
  //     },
  //     (error) => {
  //       // console.log(error)
  //     },
  //     () => { 
        
  //     }
  //   );
  // }
  createSection(data) {
    this.seactionSuccessMessage = false;
    this.seactionFailMessage = false;
    const formData = new FormData();
   
    formData.append("testSectionName", this.secCatName);
    formData.append("token", localStorage.getItem('token'))
    formData.append("id", this.selectedCateg.length ? this.selectedCateg[0].id : 0);
    formData.append("type", this.selectedCateg.length ? this.selectedCateg[0].type : 0)
    formData.append("testInstanceId", this.selectedItemsInstance.length ? this.selectedItemsInstance[0].id : 0);

    this.apiService.postData("testmanagement/testsetup/createcatalogueinstancesection", formData).subscribe(
      (data) => {
        if (data['statusCode'] == 1) {
          this.getTestInstance();
          this.seactionSuccessMessage = true;
          this.sectionStatusMessage = data['statusMessage'];
          // this.getAllSections();
          $('#addSectionModal').modal('hide');
          setTimeout(() => {
            this.seactionSuccessMessage = false;
          }, 3000)
          this.apiService.successAlert(data['statusMessage'])
          this.selectedCateg = [];
          this.selectedItemsInstance = [];
          this.secCatName = null;
          this.oldSection = !this.oldSection;
        } else {
          this.seactionFailMessage = true;
          this.sectionStatusMessage = data['statusMessage'];
          setTimeout(() => {
            this.seactionFailMessage = false;
          }, 3000)
        }
      },
      (error) => {
        // console.log(error)
      },
      () => { 
        
      }
    );
  }

  toggleOldNewSections(){
      this.oldSection = !this.oldSection;
  }

  pushSections(event){
    this.dropdownList = []
    if(event.sections){
      for(let i=0;i<event.sections.length;i++){
        this.dropdownList.push({
          id:  event.sections[i].sectionId,
          itemName: event.sections[i].sectionName
        })
      }
    }
    document.getElementById('mul_close').click();
  }

  removeSections(){
    this.dropdownList = [];
    this.selectedItems = [];
    document.getElementById('mul_close').click();
  }
  removeSec(){
    this.selectedItems = [];
    document.getElementById('sec_mul').click();
  }
  addSec(){
    document.getElementById('sec_mul').click(); 
  } 

  impQuestoSec(){
    this.selectedItemsInstance =  [];
    this.selectedItems = [];
  }
  onInstanceSelect(event){
    this.dropdownListCateg = [];
    this.selectedCateg = []
    this.apiService.getAll('testmanagement/testsetup/listoftestinstancerootconfigs?token='+localStorage.getItem('token')+'&testInstanceId='+event.id)
      .subscribe(res=>{
        if (res['statusCode'] == 1) {
          for(let i=0;i<res['testInstanceConfigList'].length;i++){
            this.dropdownListCateg.push({
              id : res['testInstanceConfigList'][i].id,
              itemName: res['testInstanceConfigList'][i].name,
              type: res['testInstanceConfigList'][i].type
            })
          }
         
        }
      })
  }

  clearCateg(){
    this.selectedCateg = [];
    this.dropdownListCateg = [];
    this.heirarchy = null;
  }

}
