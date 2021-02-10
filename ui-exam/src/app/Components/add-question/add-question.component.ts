import { Component, OnInit, Input } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { AllServicesService } from "./../../Services/AllServices/all-services.service";
import { NgForm } from '@angular/forms';
import { TestSetupComponent } from './../../Components/test-setup/test-setup.component';
import { Router ,ActivatedRoute} from '@angular/router';
declare var $;

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  questionsSuccessCount:any;
  questionsExistCount:any;
  totalQuestionsCount:any;
  
  toggleImpQues:boolean = true;

  dropdownListInstance = [];
    selectedItemsInstance = [];
    dropdownSettingsInstance = {
      singleSelection: false,
      limitSelection: 1, 
      text:"Select Test Instance",
      enableSearchFilter: true,
      classes:"myclass custom-class"
    };

  oldSection:boolean = true;

  public uploadedQues: object;
  subcategoryId;
  public sectionStatusMessage: String;
  public type: number;
  public seactionSuccessMessage: boolean = false;
  public seactionFailMessage: boolean = false;

  public questionSuccesMessage: boolean = false;
  public questionFailMessage: boolean = false;
  questionImageSelectedFile = null;
  @Input() public sectionId: any;

  createdQuestion: any[] = [];
  public complexityArr: any[];
  public obj: {
    "type": null,
    "id": null
  };
  public heirarchy: String;
  public categoryId;
  public sectionsData: any[];
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {
    singleSelection: true,
    text: "Select Sections",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
    classes: "myclass custom-class"
  };

  public questionTypeArr: any[];
  checkboxList: any[] = [];
  public optionList: any[] = [""];
  public optionObj: any = {
    '0': {
      'optionText': null,
      'tempId': null
    }
  };

  bulkUpload: boolean;
  impQuesTab: boolean;
  templateLink: any;

  mcaAns: any;
  public checkBoxAnswers: any[] = [];
  hoverGlobQues: object;
  public secCatName: any;
  dropdownCateg = {
    singleSelection: true,
    text: "Select Category",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    enableSearchFilter: true,
    classes: "myclass custom-class"
  };

  selectedCateg = [];
  dropdownListCateg = [];

  impQues: object = {}
  importQuesArr: any[] = [];
  public impAllQues: boolean;
  public categoryPath: any[] = [];
  public isQues: boolean;
  public isGlobQues: boolean;
  public alphaArr: any[] = ['All', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  public allCategory: object;
  public allCategBack: object;
  public globalQuesBack: object;
  filesToUpload: Array<File> = [];
  public qustionList: any[] = []
  public filterQuesList: any[] = [];

  public newGlobQues: object;
  public newGlobQuesBack;
  public allGlobalCategory: object;
  public allGlobalCategBack: object;
  public imp_p_glob_1: number = 1;
  public imp_p_glob_2: number = 1;
  public p_glob_3: number = 1;
  imp_glob_p: number = 1;
  public isGlobal: boolean;
  public categoryGlobalPath: any[] = [];


  @BlockUI() blockUI: NgBlockUI;

  constructor(private apiService : AllServicesService,private router:Router,private activeRoute: ActivatedRoute) { 

  }
  
  ngOnInit() {
    var th=this;
    $('#questionModal').on('hidden.bs.modal', function () {
     if(!th.bulkUpload && !th.impQuesTab){
      $('#questionForm')[0].reset();
     }
     

    
     th.optionList=[];
    })
    this.getAllGlobalCategories();
    this.getQuestionType();
    this.getAllSections();
    this.getCategoryAndSubCategoryList();
    this.getComplexCity()

    this.apiService.getAll('reports/questions/listoftestinstance?token='+localStorage.getItem('token'))
      .subscribe(res=>{
        if(res['statusCode'] == '1'){
          for(let i=0;i<res['tsetInstancesList'].length;i++){
            this.dropdownListInstance.push({
              id: res['tsetInstancesList'][i].testInstanceId,
              itemName: res['tsetInstancesList'][i].testInstanceName,
              sections: res['tsetInstancesList'][i].sectionList
            })
          }
        }
      })

  }
  
  onInput(){
    // // // console.log("sec..........."+this.sectionId);

  }
 
  toggleBulk(tab) {
    if (tab == '1') {
      this.bulkUpload = false;
      this.impQuesTab = false;
    } else if (tab == '2') {
      this.bulkUpload = true;
      this.impQuesTab = false;
      this.getTemplateLink()
    } if (tab == '3') {
      this.impQuesTab = true;
      this.bulkUpload = false;
    }
  }

  getTemplateLink() {

    
   if(this.apiService.cfs){
    this.templateLink =this.apiService.cfsUrl + this.apiService.questionTemplateUrl;
   }else{
    this.templateLink = this.apiService.url + 'notification/template/download?filetype=question&fileId=1&token=' + localStorage.getItem('token')
   }

  }



  // global import start
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

  getGlobalSubCategoriesBy(cat) {
    this.categoryGlobalPath.push(cat);

    this.allGlobalCategory = {};
    if (cat.type == '2') {
      this.apiService.getAll('reports/questions/getglobalsectionsbycatandsubcatnames?token=' + localStorage.getItem('token') + '&categoryname=' + this.categoryGlobalPath[0].categoryName + '&subcategoryname=' + this.categoryGlobalPath[this.categoryGlobalPath.length - 1].subCategoryName)
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
    // // // console.log(this.categoryGlobalPath)
    var url: any;
    if (this.categoryGlobalPath.length > 2) {
      url = 'reports/questions/getglobalquestionsbycatandsubcatandsectionsnames?token=' + localStorage.getItem('token') + '&sectionName=' + this.categoryGlobalPath[this.categoryGlobalPath.length - 1].sectionName + '&subcategoryname=' + this.categoryGlobalPath[this.categoryGlobalPath.length - 2].subCategoryName + '&categoryname=' + this.categoryGlobalPath[0].categoryName + '&hierarchy=' + this.categoryGlobalPath[this.categoryGlobalPath.length - 1].hierarchy
    } else {
      url = 'reports/questions/getglobalquestionsbycatandsubcatandsectionsnames?token=' + localStorage.getItem('token') + '&sectionName=' + this.categoryGlobalPath[this.categoryGlobalPath.length - 1].sectionName + '&subcategoryname=' + this.categoryGlobalPath[0].categoryName + '&categoryname=' + this.categoryGlobalPath[0].categoryName + '&hierarchy=' + this.categoryGlobalPath[this.categoryGlobalPath.length - 1].hierarchy
    }
    this.apiService.getAll(url)
      .subscribe(res => {
        this.blockUI.stop();
        if (res['statusCode'] == '1') {
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

          if (this.importQuesArr.length == this.newGlobQuesBack['questionsList'].length) {
            this.impAllQues = true;
          } else {
            this.impAllQues = false;
          }

        } else {
          this.apiService.errorAlert(res['statusMessage'])
        }

      }, error => {
        this.blockUI.stop();
      })

  }

  checkImport(ques) {
    // // // console.log('this.importQuesArrssssssssss',this.importQuesArr)
    var ind = this.importQuesArr.findIndex((item) => {
      return item.questionId == ques.questionId;
    })

    if (ind > -1) {
      return true;
    } else {
      return false;
    }
  }

  gotoPathGlobal(catPath, i) {
    if (catPath.type == '1') {
      this.isGlobQues = false;
      this.getGlobalSubCategories(catPath);
      this.categoryGlobalPath.splice(i, this.categoryGlobalPath.length - i - 1)
    } else if (catPath.type == '2') {
      this.isGlobQues = false;
      this.getGlobalSubCategoriesBy(catPath);
      this.categoryGlobalPath.splice(i, this.categoryGlobalPath.length - i - 1)
    } else if (catPath.type == '3') {
      this.getGlobalQuestionsBySection(catPath);
      this.categoryGlobalPath.splice(i, this.categoryGlobalPath.length - i - 1)
    }
  }

  getByAlphaGlob(alpha) {
    if (alpha == 'All') {
      this.isGlobQues = false;
      this.getAllGlobalCategories();
    } else {
      var listCatSubCat: any;
      if (!this.isGlobQues) {
        if (this.allGlobalCategBack && this.allGlobalCategBack['globalCategoriesList']) {
          listCatSubCat = this.allGlobalCategBack['globalCategoriesList'].filter((item) => {
            return item.categoryName.toLowerCase()[0] == alpha;
          })

          this.allGlobalCategory['globalCategoriesList'] = listCatSubCat;
        } else if (this.allGlobalCategBack && this.allGlobalCategBack['listOfGlobalSubCategory']) {
          listCatSubCat = this.allGlobalCategBack['listOfGlobalSubCategory'].filter((item) => {
            if (item && item.subCategoryName) {
              return item.subCategoryName.toLowerCase()[0] == alpha;
            } else if (item && item.sectionName) {
              return item.sectionName.toLowerCase()[0] == alpha;
            }

          })

          this.allGlobalCategory['listOfGlobalSubCategory'] = listCatSubCat;
        }
      } else {
        if (this.newGlobQuesBack && this.newGlobQuesBack['questionsList']) {
          listCatSubCat = this.newGlobQuesBack['questionsList'].filter((item) => {
            return item.qustionText.toLowerCase()[0] == alpha;
          })
          this.newGlobQues['questionsList'] = listCatSubCat;
        }
      }
    }
  }

  importAllQues(impAllQues) {
    // // // console.log('this.globalQuessssssssssssssssssssssss',this.globalQues)
    if (!impAllQues) {
      var x: object = {
        ...this.newGlobQues
      }
      this.importQuesArr = [ ...x['questionsList']]
    } else {
      this.importQuesArr = []
    }

  }

  importQues(globalQues, bool, event) {


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
    if (event.checked) {
      var ind = this.importQuesArr.findIndex(x => {
        return x.questionId == globalQues.questionId;
      });
      if (ind < 0) {
        this.importQuesArr.push(globalQues);
      } else {
        this.importQuesArr.splice(ind, 1);
        // this.getGlobalQuestionsBySection(globalQues.sectionName);
        if (this.importQuesArr.length == this.newGlobQues['questionsList'].length) {
          this.impAllQues = true;
        } else {
          this.impAllQues = false;
        }
        // this.getQuestionsBySection(this.categoryGlobalPath[this.categoryPath.length-1].sectionName)
      }
      if (this.importQuesArr.length == this.newGlobQuesBack['questionsList'].length) {
        this.impAllQues = true;
      } else {
        this.impAllQues = false;
      }
    } else {
      var ind = this.importQuesArr.findIndex(x => {
        return x.questionId == globalQues.questionId;
      });
      if (ind < 0) {
        this.importQuesArr.push(globalQues);
      } else {
        this.importQuesArr.splice(ind, 1);
        // this.getGlobalQuestionsBySection(globalQues.sectionName)

        if (this.importQuesArr.length == this.newGlobQuesBack['questionsList'].length) {
          this.impAllQues = true;
        } else {
          this.impAllQues = false;
        }

      }
    }

  }


  importQuesAns() {

    var questionList: any[] = []
    for (let i = 0; i < this.importQuesArr.length; i++) {
      var optionList: any[] = this.importQuesArr[i].optionsList;
      if(this.sectionId){
        this.importQuesArr[i].sectionId = this.sectionId;
      }else if (this.selectedItems.length) {
        this.importQuesArr[i].sectionId = this.selectedItems[0].id
      }
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

        // // console.log("multiIndArr", multiIndArr)

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

    // // console.log("this.importQuesArr", this.importQuesArr)
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
          this.selectedItems = []
          $('#globQuesModal').modal('hide')
          this.getQuestions();
          this.uploadedQues = res;
          this.toggleImpQues = !this.toggleImpQues;
          this.impAllQues = false;
          // document.getElementById('uploaded_ques').click();
        }

      }, error => {

      })

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

  getQuestionType() {
    this.apiService.getAll("reports/questions/getquestiontype?token=" + localStorage.getItem('token')).subscribe(
      (data) => {
        if (data['statusCode'] == 1) {
          // // console.log(data)
          this.questionTypeArr = data['questionType'];
        }
      },
      (error) => {
        // // console.log(error)
      },
      () => { }
    );
  }

  viewQuestion(ques) {
    this.hoverGlobQues = ques;

    if (this.hoverGlobQues['questionTypeId'] == '1') {
      var ind = this.hoverGlobQues['optionsList'].findIndex((item) => {
        return item.optionId == this.hoverGlobQues['answer'];
      })
      if (ind > -1) {
        this.mcaAns = ind
      }
    }

    if (this.hoverGlobQues['questionTypeId'] == '2') {
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

    // // console.log("this.checkBoxAnswers", this.checkBoxAnswers)

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
      // // console.log("hi");
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

    // // console.log(this.optionObj)
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

  stopProp(event) {
    event.stopPropagation();
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


  getAllSections() {
    this.dropdownList = [];
    this.blockUI.start('Please Wait ...');
    this.apiService.getAll("reports/questions/getsections?token=" + localStorage.getItem('token')).subscribe(
      (data) => {
        // // console.log(data)
        if (data['statusCode'] == 1) {
          this.sectionsData = data['sectionsList'];
          // for (let i = 0; i < this.sectionsData.length; i++) {
          //   this.dropdownList.push({
          //     id: this.sectionsData[i].sectionId,
          //     itemName: this.sectionsData[i].sectionName + '( ' + this.sectionsData[i].sectionCode + ' )'
          //   })
          // }
        } else {

        }
      },
      (error) => {
        // // console.log(error)
        this.blockUI.stop();
      },
      () => {
        this.blockUI.stop();
      }
    );
  }

  getCategoryAndSubCategoryList() {
    this.apiService.getAll("testmanagement/globalcategorylist?token=" + localStorage.getItem('token')).subscribe(
      (data) => {
        if (data['statusCode'] == 1) {
          for (let i = 0; i < data['globalCategoryList'].length; i++) {
            this.dropdownListCateg.push({
              id: data['globalCategoryList'][i].id,
              itemName: data['globalCategoryList'][i].name,
              type: data['globalCategoryList'][i].type
            })
          }
        }
      },
      (error) => {
        // // console.log(error)
        this.blockUI.stop();
      },
      () => {

      }
    )
  }

  onCategSelect() {
    this.obj = this.selectedCateg[0];
    // // // console.log("Type=" + this.obj.type)
    // // // console.log("Id=" + this.obj.id)
    if (this.obj.type != 0 && this.obj.id != 0) {
      this.apiService.getAll("testmanagement/getsubcategorylist?token=" + localStorage.getItem('token') + "&type=" + this.obj.type + "&id=" + this.obj.id).subscribe(
        (data) => {
          if (data['statusCode'] == 1) {
            // // console.log(data)
            this.heirarchy = data['categoryName'];
            this.categoryId = data['categoryId'];
          } else {

          }
        },
        (error) => {
          // // console.log(error)
        },
        () => { }
      );
    }
  }

  getComplexCity() {
    this.apiService.getAll("reports/questions/getcomplexity?token=" + localStorage.getItem('token')).subscribe(
      (data) => {
        if (data['statusCode'] == 1) {
          this.complexityArr = data['compelxityTypeDTO'];
        } else {

        }
      },
      (error) => {
        // // console.log(error)
      },
      () => {

      }
    );
  } 


  addQuestion(myForm: NgForm) {
    var questionCode = $('#txtarea').val();
    // // console.log(questionCode);
    // // console.log(this.checkboxList)
    // // console.log(this.mcaAns)
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




    // // console.log(formListOptions)
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
      if (this.mcaAns == "0" || this.mcaAns) {
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
      // // console.log(checkboxSting)
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
    // // console.log(data)

    this.apiService.postData("reports/questions/addquestion", formData).subscribe(
      (data) => {
        // // console.log(data['statusMessage'])
        if (data['statusCode'] == 1) {
          $('#questionModal').modal('hide')
          this.mcaAns = null;
          // get ques by id
          this.apiService.getAll('reports/questions/getquestionsbyquestionid?token=' + localStorage.getItem('token') + '&questionid=' + data['questionId'])
            .subscribe(res => {
              this.blockUI.stop()
              this.createdQuestion = res['questionsList'];
            }, error => {

            })
          //  end
          this.checkboxList = [];
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
          //this.ngOnInit();
          // setTimeout(() => {
          //   this.questionSuccesMessage = false;
          //   this.statusMessage = null
          // }, 4000)
          this.apiService.successAlert(data['statusMessage']);
          // let testSetupObject = new TestSetupComponent(this.apiService,this.router,this.activeRoute);
        
          // testSetupObject.questionCount=2
          // // // console.log();
         // this.sectionId = null
         
        } else {
          this.blockUI.stop();
          this.optionList = [];
          // this.questionFailMessage = true;
          // this.statusMessage = data['statusMessage']
          // setTimeout(() => {
          //   this.questionFailMessage = false;
          //   this.statusMessage = null
          // }, 3000)
          this.apiService.errorAlert(data['statusMessage'])
        }
      },
      (error) => {
        // // console.log(error)
        this.blockUI.stop()
      },
      () => {
        
        $('#questionModal').modal('toggle');
        
        // this.ngOnInit();
      }
    );
  }

  uploadBulkQues() {
    this.blockUI.start('Please Wait We Are Uploading ')
    var formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;
    if (this.filesToUpload.length == 0) {
      this.blockUI.stop()
      this.apiService.errorAlert("No file selected!");
      return
    }
    // // console.log(files[0])
    formData.append("files", files[0], files[0]['name']);
    formData.append("token", localStorage.getItem('token'))
    if(this.sectionId){
      formData.append("sectionid", this.sectionId)
    }



    if(this.apiService.cfs){
      var FileArr= [];
      FileArr.push(files[0]);
      var cfsformData: any = new FormData();
     // cfsformData.append("access-token",this.service.secretKey);
      cfsformData.append("files",files[0]);
      this.apiService.postDataCfs(cfsformData).subscribe(
        res=>{
          // // console.log(res);
          if(res.status==200){
            formData.append("cfsId",res.body[0].id);
            formData.append("cfsViewURL",res.body[0].selfLink.view);
            formData.append("cfsDownloadURL",res.body[0].selfLink.download);

            this.apiService.postData('notification/cfs/bulkquestions', formData)
            .subscribe(res => {
              if (!res['statusCode']) {
                this.blockUI.stop()
                this.apiService.errorAlert(res['statusMessage']);
              } else {
                this.blockUI.stop()
                this.filesToUpload = []

                this.toggleBulk('1');

                // this.ngOnInit();
                // document.getElementById('close_bul_btn').click()
                this.uploadedQues = res;

                this.questionsSuccessCount=res['questionsSuccessCount'];
                this.questionsExistCount=res['questionsExistCount'];
                this.totalQuestionsCount=res['totalQuestionsCount'];

                // $('#exampleModalCenter').modal('toggle');
                $('#UploadedQuesModal').modal('show')
                this.apiService.successAlert(res['statusMessage']);
              }
      
            }, error => {
              this.blockUI.stop();
            },
              () => {
                
                // this.ngOnInit();
              })


          }else{
            this.apiService.errorAlert(files[0].name+"Upload Failed");
          }

        },
        error=>{
          // // console.log(error);
        },
        ()=>{

        }
      );


      

    }else{
      this.apiService.postData('notification/upload/bulkquestions', formData)
      .subscribe(res => {
        if (!res['statusCode']) {
          this.blockUI.stop()
          this.apiService.errorAlert(res['statusMessage']);
        } else {
          this.blockUI.stop()
          this.filesToUpload = []
          // this.ngOnInit();
          // document.getElementById('close_bul_btn').click()
          this.uploadedQues = res;

          this.toggleBulk('1');


          this.questionsSuccessCount=res['questionsSuccessCount'];
          this.questionsExistCount=res['questionsExistCount'];
          this.totalQuestionsCount=res['totalQuestionsCount'];

          // $('#exampleModalCenter').modal('toggle');
          $('#UploadedQuesModal').modal('show')
          this.apiService.successAlert(res['statusMessage']);
        }

      }, error => {
        this.blockUI.stop();
      },
        () => {
          
          // this.ngOnInit();
        })
    }

   
  }

  clickUpload() {
    document.getElementById('upload_file_btn').click();
  }

  createSection(data) {
    this.seactionSuccessMessage = false;
    this.seactionFailMessage = false;
    // // console.log(data)
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
    formData.append("testSectionName", this.secCatName);
    formData.append("token", localStorage.getItem('token'))
    this.apiService.postData("testmanagement/createsection", formData).subscribe(
      (data) => {
        if (data['statusCode'] == 1) {
          this.seactionSuccessMessage = true;
          this.sectionStatusMessage = data['statusMessage'];
          this.getAllSections();
          $('#addSectionModal').modal('hide')
          // this.router.navigate(['sections'])
          setTimeout(() => {
            this.seactionSuccessMessage = false;
          }, 3000)
          this.apiService.successAlert(data['statusMessage'])
          this.selectedCateg = [];
          this.secCatName  = []
          this.oldSection = !this.oldSection
          // this.ngOnInit();
        } else {
          this.seactionFailMessage = true;
          this.sectionStatusMessage = data['statusMessage'];
          setTimeout(() => {
            this.seactionFailMessage = false;
          }, 3000)
        }
      },
      (error) => {
        // // console.log(error)
      },
      () => {

      }
    );
  }

  uploadFile(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    // // console.log(this.filesToUpload)
  }
  getSize(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
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
checkSectionId(){
    if(this.sectionId){
        this.importQuesAns();
    }else{
      $('#globQuesModal').modal('show')
    }
}
closeViewModal(){
  $('#quesViewModal').modal('hide')
}

}
