import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AllServicesService } from "./../../Services/AllServices/all-services.service"
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { DatePipe } from '@angular/common';
declare var $;


@Component({
  selector: 'app-candidate-registration',
  templateUrl: './candidate-registration.component.html',
  styleUrls: ['./candidate-registration.component.css']
})
export class CandidateRegistrationComponent implements OnInit,OnDestroy {

  todayDate:any;

  QualSubmit:boolean;
  CertSubmit:boolean;
  ExpSub:boolean;

  qualEditBack:any;
  certEditBack:any;
  expDetailsBack:any;

  expForm: boolean = true;
  expDetails: any = {
    companyName: null,
    designation: null,
    startDate: null,
    endDate: null,
    currentWorking: [false],
    location: null,
    modeOfEmployement: null,
    salary: null,
    // contractInterest:[false,Validators.required],
    currency: null
  };
  expIndex: number;
  isEdit: boolean = true;
  certIndex: number;
  educIndex: number;
  submittedFirst: boolean;
  testTiltle: any;
  @BlockUI() blockUI: NgBlockUI;

  public qualEditData: object = {
    'qualification': null,
    'univercity': null,
    'collegeName': null,
    'passPercentage': null,
    'yearOfCompletion': null
  };
  public certEditData: object = {
    'certificationName': null,
    'yearOfCompletion': null,
    'passPercentage': null
  }
  public candidForm: object = {
    "candidateDetails": {
      "candidatePersonalDetails": {
        "candidateFirstName": null,
        "candidateGender": null,
        "candidateId": 0,
        "candidateLastName": null,
        "candidateLocation": null,
        "candidateMail": null,
        "candidateMobile": null,
        "candidateName": null,
        "candidateQualification": null,
        "maritalStatus": null,
        "occupation": null,
      },
      "certificationDetails": [],
      "educationDetails": [],
      "encryptedToken": null,
      "professionalDetails": []
    }
  }
  testTypeId: any;
  encryptedToken: any;

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  editSecondFormGroup: FormGroup;
  certificateFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  secondForm: boolean;
  thirdForm: boolean;
  isCertf: boolean;
  isQUal: boolean = true;

  qualificationList: any[] = [];
  certificationList: any[] = []
  experienceList: any[] = [];


  constructor(private _formBuilder: FormBuilder, private router: Router, private datePipe: DatePipe, private activeRoute: ActivatedRoute, private apiService: AllServicesService) {
    this.activeRoute.params.subscribe(params => {
      this.encryptedToken = params['encryptedToken'];
    })

    this.todayDate = new Date();

    // this.testTypeId = localStorage.getItem('testTypeId')
    // if (localStorage.getItem('encryptedToken')) {
    //   this.encryptedToken = localStorage.getItem('encryptedToken');
    // }

    this.testLinkVerify();

    if (JSON.parse(localStorage.getItem('regForm'))) {
      this.candidForm = JSON.parse(localStorage.getItem('regForm'));
     // // console.log("this.candidForm", this.candidForm)
      if (this.candidForm["candidateDetails"]['educationDetails'].length) {
        this.qualificationList = this.candidForm["candidateDetails"]['educationDetails'];
      }
      if (this.qualificationList.length > 0) {
        // this.isLinear = false;
      }
      if (this.candidForm["candidateDetails"]['certificationDetails'].length) {
        this.certificationList = this.candidForm["candidateDetails"]['certificationDetails'];
      }
      if (this.candidForm["candidateDetails"]['professionalDetails'].length) {
        this.experienceList = this.candidForm["candidateDetails"]['professionalDetails'];
        this.experienceList.forEach((item,i)=>{
          if(item['endDate'] == 'null'){
            this.experienceList[i]['endDate'] = null;
          }else{
            this.experienceList[i]['endDate'] = new Date(item['endDate'])
          }
          if(item['startDate'] == 'null'){
            this.experienceList[i]['startDate'] = null;
          }else{
            this.experienceList[i]['startDate'] = new Date(item['startDate'])
          }
         // // console.log('this.experienceListtttttttttttttttttt',this.experienceList)
        })
      }
    } else {
      this.candidForm = {
        "candidateDetails": {
          "candidatePersonalDetails": {
            "candidateFirstName": null,
            "candidateDateOfBirth": null,
            "candidateGender": null,
            "candidateId": 0,
            "candidateLastName": null,
            "candidateLocation": null,
            "candidateMail": null,
            "candidateMobile": null,
            "candidateName": null,
            "candidateQualification": null,
            "maritalStatus": null,
            "occupation": null,
          },
          "certificationDetails": [],
          "educationDetails": [],
          "encryptedToken": null,
          "professionalDetails": []
        }
      }
    }

    
  }

  afterEditWithBack(qual){
      this.qualificationList = qual;
  }

  ngOnDestroy(){
    localStorage.removeItem('regForm')
  }
  startDOB=false;
  ngOnInit() {
   if(this.candidForm['candidateDetails'].candidatePersonalDetails.candidateDateOfBirth != "null"){
    this.startDOB=true;
   } 
   
   var self = this;
    $('#qualEditModal').on('hidden.bs.modal', function () {
     // // console.log("before",self.qualificationList)
      // self.qualificationList.splice(self.educIndex,1,self.qualEditBack)
      self.qualificationList[self.educIndex] = self.qualEditBack;
      self.afterEditWithBack(self.qualificationList)
      self.secondFormGroup.reset();
     // // console.log("after",self.qualificationList)
      
    })

    

    $('#certEditModal').on('hidden.bs.modal', function () {
      self.certificationList.splice(self.certIndex,1,self.certEditBack)
      self.certificateFormGroup.reset();
    })

    $('#expDetailModal').on('hidden.bs.modal', function () {
      self.experienceList.splice(self.expIndex,1,self.expDetailsBack)
    })
 

    var date = new Date();
    var fullYear = date.getFullYear()

    this.firstFormGroup = this._formBuilder.group({
      candidateFirstName: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]],
      candidateLastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
      candidateDateOfBirth: ['', Validators.required],
      candidateMail: ['', [Validators.required, Validators.email]],
      candidateGender: ['', Validators.required],
      candidateMobile: ['', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]],
      maritalStatus: ['', Validators.required],
      occupation: ['', Validators.required],
      contractPositionStatus: [false]
    });

    // this.firstFormGroup.errors
    this.secondFormGroup = this._formBuilder.group({
      candidateEducationDetailsId:[''],
      qualification: ['', [Validators.required,Validators.pattern('^[a-zA-Z. ]*$')]],
      univercity: ['', [Validators.required,Validators.pattern('^[a-zA-Z. ]*$')]],
      collegeName: ['', [Validators.required,Validators.pattern('^[a-zA-Z. ]*$')]],
      // passPercentage: ['', [Validators.required, Validators.pattern('[0-9]+(\.[0-9]{1,2})?%?'),Validators.max(100)]],
      passPercentage: ['', [Validators.required,Validators.max(100)]],
      yearOfCompletion: ['', [Validators.required, Validators.min(1947), Validators.max(fullYear)]]
    });
    this.editSecondFormGroup = this._formBuilder.group({
      qualification: ['', Validators.required],
      univercity: ['', Validators.required],
      collegeName: ['', Validators.required],
      // passPercentage: ['', [Validators.required, Validators.pattern('[0-9]+(\.[0-9]{1,2})?%?')]],
      passPercentage: ['', [Validators.required,Validators.max(100)]],
      yearOfCompletion: ['', [Validators.required, Validators.min(1947), Validators.max(fullYear)]]
    });
    this.certificateFormGroup = this._formBuilder.group({
      candidateCertificationId: [''],
      certificationName: ['', Validators.required],
      yearOfCompletion: ['', [Validators.required, Validators.min(1947), Validators.max(fullYear)]],
      // passPercentage: ['', [Validators.required, Validators.pattern('[0-9]+(\.[0-9]{1,2})?%?'),Validators.max(100)]]
      passPercentage: ['', [Validators.required,Validators.max(100)]],
    });
    this.thirdFormGroup = this._formBuilder.group({
      candidateProfessionalDetailsId: [''],
      companyName: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
      designation: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['',],
      currentWorking: [false],
      location: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
      modeOfEmployement: ['', Validators.required],
      // salary: ['', [Validators.required,Validators.pattern('^[0-9]*\.[0-9]{2}$')]],
      // salary: ['', [Validators.required, Validators.pattern('^[1-9]*$')]],
      // salary: ['', [Validators.required, Validators.pattern('[0-9]+(\.[0-9][0-9]?)?')]],
      salary: ['', [Validators.required]],
      // contractInterest:[false,Validators.required],
      currency: ['', Validators.required]
    });
  }

  testLinkVerify() {
    this.apiService.postData('testmanagement/testconfig/testlinkverification?encryptedToken=' + encodeURIComponent(this.encryptedToken), {})
      .subscribe(res => {
        this.blockUI.stop();
        if (res['statusCode'] == '1') {
          this.testTypeId = res['testTypeId'];
          this.testTiltle = res['testTitle']
         
        }
        if (this.testTypeId == 1) {
           if(!JSON.parse(localStorage.getItem('regForm'))){
              this.router.navigate(['candidate/login',this.encryptedToken])
          }
          this.firstFormGroup = this._formBuilder.group({
            candidateFirstName: [this.candidForm['candidateDetails'].candidatePersonalDetails.candidateFirstName, [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]],
            candidateLastName: [this.candidForm['candidateDetails'].candidatePersonalDetails.candidateLastName, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
            candidateDateOfBirth: [this.candidForm['candidateDetails'].candidatePersonalDetails.candidateDateOfBirth.replace(/-/g, "/"), Validators.required],
            candidateMail: [this.candidForm['candidateDetails'].candidatePersonalDetails.candidateMail, [Validators.required, Validators.email]],
            candidateGender: [this.candidForm['candidateDetails'].candidatePersonalDetails.candidateGender, Validators.required],
            candidateMobile: [this.candidForm['candidateDetails'].candidatePersonalDetails.candidateMobile, [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]],
            maritalStatus: [this.candidForm['candidateDetails'].candidatePersonalDetails.maritalStatus, Validators.required],
            occupation: [this.candidForm['candidateDetails'].candidatePersonalDetails.occupation, Validators.required],
            contractPositionStatus: [this.candidForm['candidateDetails'].candidatePersonalDetails.contractPositionStatus == '1']
          });
         // // console.log("this.firstFormGroup......", this.firstFormGroup)
        } else if (this.testTypeId == 2) {

          this.startDOB=false;
          this.firstFormGroup = this._formBuilder.group({
            candidateFirstName: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z ]*$')]],
            candidateLastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
            candidateDateOfBirth: ['', Validators.required],
            candidateMail: ['', [Validators.required, Validators.email]],
            candidateGender: ['', Validators.required],
            candidateMobile: ['', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]],
            maritalStatus: ['', Validators.required],
            occupation: ['', Validators.required],
            contractPositionStatus: [false]
          });
        }

      }, error => {
        this.blockUI.stop();
      })
  }

  eductionDetails(firstFormGroup) {
    this.submittedFirst = true;
   // // console.log(firstFormGroup)
    if(this.qualificationList.length > 0){
      this.isLinear = false;
      this.isEdit = false;
    }
  }

  addQual(secondFormGroup) {
    this.QualSubmit = false;
    this.isEdit = true;
    this.isQUal = true;
    this.isCertf = false;
    if(this.secondFormGroup.valid){
      if(this.educIndex == 0 || this.educIndex){
          this.qualificationList.splice(this.educIndex,1,this.secondFormGroup.value)
      }
      this.secondFormGroup.reset();
    }
    this.secondFormGroup.reset();
    // if (secondFormGroup.valid) {
    //   var secForm = this.qualificationList.find((item) => {
    //     return item == secondFormGroup.value;
    //   });
    //   if (secForm == undefined) {
    //     this.qualificationList.push(this.secondFormGroup.value)
    //     this.secondFormGroup.reset();
    //   }


    // }
    if (this.qualificationList.length > 0) {
      this.isLinear = false;
    }
  }

  checkQualList() {
   // // console.log("this.qualificationList",this.qualificationList)
    if(this.qualificationList.length > 0){
      this.isLinear = false;
      if(this.experienceList.length >0){
        this.expForm = false;
      }
    }else{
      this.apiService.errorAlert('Please Provide Atleast One Qualification to Proceed')
    }
  }

  editExpDetails(exp, i) {
    this.expForm = false;
    this.expDetails = exp;
    this.expDetailsBack = {
      ...exp
    }
    // this.expDetails['startDate'] = new FormControl(new Date(this.expDetails['startDate']).toISOString()).value;
   // // console.log("this.expDetails", this.expDetails)
    this.expIndex = i;
    //// // console.log("this.expDetails",this.expDetails)
    this.thirdFormGroup = this._formBuilder.group({
      candidateProfessionalDetailsId: [this.expDetails.candidateProfessionalDetailsId],
      companyName: [this.expDetails.companyName, [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
      designation: [this.expDetails.designation, Validators.required],
      startDate: [this.expDetails.startDate, Validators.required],
      endDate: [this.expDetails.endDate],
      currentWorking: [this.expDetails.currentWorking],
      location: [this.expDetails.location, [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
      modeOfEmployement: [this.expDetails.modeOfEmployement, Validators.required],
      // salary: [this.expDetails.salary, [Validators.required,Validators.pattern('[0-9]+(\.[0-9][0-9]?)?')]],
      salary: [this.expDetails.salary, [Validators.required]],
      // contractInterest:[false,Validators.required],
      currency: [this.expDetails.currency, Validators.required]
    });

    $('#expDetailModal').modal('show')
    
    // this.thirdFormGroup = this._formBuilder.group({
    //   companyName: ['', Validators.required],
    //   designation: ['', Validators.required],
    //   startDate: ['', Validators.required],
    //   endDate: ['',],
    //   currentWorking: [false],
    //   location: ['', Validators.required],
    //   modeOfEmployement: ['', Validators.required],
    //   // salary: ['', [Validators.required,Validators.pattern('^[0-9]*\.[0-9]{2}$')]],
    //   // salary: ['', [Validators.required, Validators.pattern('^[1-9]*$')]],
    //   salary: ['', [Validators.required, Validators.pattern('[0-9]+(\.[0-9][0-9]?)?')]],
    //   // contractInterest:[false,Validators.required],
    //   currency: ['', Validators.required]
    // });

  }

  updateExp(thirdFormGroup) {
    var startDate = new Date(thirdFormGroup.value['startDate'])
    var endDate = new Date(thirdFormGroup.value['endDate'])
    if(startDate.getTime() > endDate.getTime()){
      this.apiService.errorAlert('End Date Should be After Start Date')
      return false;
    }
    if (this.thirdFormGroup.valid) {
      var editData = {
        ...this.thirdFormGroup.value
      }
      // this.qualificationList.splice(this.educIndex, 1, editData);
      if(thirdFormGroup.value['currentWorking'] || thirdFormGroup.value['endDate']){
        this.experienceList.splice(this.expIndex, 1, editData);
        this.expDetailsBack = editData;
        if(thirdFormGroup.value['currentWorking']){
          delete this.experienceList[this.expIndex].endDate;
        }
        $('#expDetailModal').modal('hide');
        this.thirdFormGroup.reset();
      }else{
        this.apiService.errorAlert('Please Select atleast one from end date (or) Currently working')
        return false;
      }
    }

  }

  addExp(thirdFormGroup) {
    this.ExpSub = true;
    if (thirdFormGroup.valid) {
      var startDate = new Date(thirdFormGroup.value['startDate'])
      var endDate = new Date(thirdFormGroup.value['endDate'])
      if(startDate.getTime() > endDate.getTime()){
        this.apiService.errorAlert('End Date Should be After Start Date')
        return false;
      }
      if(thirdFormGroup.value['currentWorking'] || thirdFormGroup.value['endDate']){
        this.experienceList.push(thirdFormGroup.value);
        if(thirdFormGroup.value['currentWorking']){
         delete this.experienceList[this.experienceList.length-1].endDate;
        }
        this.thirdFormGroup.reset();
        this.expForm = false;
      }else{
        this.apiService.errorAlert('Please Select atleast one from end date (or) Currently working')
        return false;
      }
    }
    
    // this.experienceList.push(thirdFormGroup.value);

   // // console.log(this.firstFormGroup)
   // // console.log(this.secondFormGroup)
   // // console.log(this.thirdFormGroup)
  }

  addExpForm(){
    this.expForm = true;
    this.ExpSub = false;

    this.thirdFormGroup = this._formBuilder.group({
      candidateProfessionalDetailsId: [''],
      companyName: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
      designation: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['',],
      currentWorking: [false],
      location: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]*$')]],
      modeOfEmployement: ['', Validators.required],
      // salary: ['', [Validators.required,Validators.pattern('^[0-9]*\.[0-9]{2}$')]],
      // salary: ['', [Validators.required, Validators.pattern('^[1-9]*$')]],
      // salary: ['', [Validators.required, Validators.pattern('[0-9]+(\.[0-9][0-9]?)?')]],
      salary: ['', [Validators.required]],
      // contractInterest:[false,Validators.required],
      currency: ['', Validators.required]
    });

    // if(this.thirdFormGroup.valid){
    //   if(this.expIndex == 0 || this.expIndex ){
    //     this.experienceList.splice(this.expIndex,1,this.thirdFormGroup.value)
    //   }
    // }
    // this.thirdFormGroup.reset();
  }
  addCertif(certificateFormGroup) {
    this.CertSubmit = false;
    this.isCertf = true;
    this.isEdit = true;
    this.isQUal = false;
    if(this.certificateFormGroup.valid){
      if(this.certIndex == 0 || this.certIndex){
          this.certificationList.splice(this.certIndex,1,this.certificateFormGroup.value)
      }
      this.certificateFormGroup.reset();
    }
    // if (this.certificateFormGroup.valid) {
    //   var cerFor = this.certificationList.find((item) => {
    //     return item == certificateFormGroup.value
    //   })
    //   if (cerFor == undefined) {
    //     this.certificationList.push(certificateFormGroup.value);
    //     this.certificateFormGroup.reset();
    //   }
    //   // this.certificationList.push(certificateFormGroup.value);

    // }
  }

  careerForm(thirdFormGroup) {

    this.blockUI.start('Please Wait ...')

   // // console.log("firstForm", this.firstFormGroup);
   // // console.log("secondForm", this.secondFormGroup);
   // // console.log("education", this.qualificationList);
   // // console.log("certification", this.certificationList);
   // // console.log(this.thirdFormGroup);
   // // console.log(this.experienceList);

    // if (this.secondFormGroup.valid) {
    //   var secForm = this.qualificationList.findIndex((item)=>{
    //    return item == this.secondFormGroup.value
    //   });
    //   if (secForm < 0) {
    //     this.qualificationList.push(this.secondFormGroup.value);
    //     this.secondFormGroup.reset();
    //   }
    // }

    // if (this.certificateFormGroup.valid) {
    //   var cerForm = this.certificationList.find(item =>{
    //    return  item == this.certificateFormGroup.value
    //   });
    //   if (cerForm == undefined) {
    //     this.certificationList.push(this.certificateFormGroup.value)
    //     this.certificateFormGroup.reset()
    //   }
    // }

    // if (this.thirdFormGroup.valid) {
    //   var thirdFor = this.experienceList.find(item =>{
    //     return item == this.thirdFormGroup.value
    //   });
    //   if(thirdFor == undefined){
    //     this.experienceList.push(this.thirdFormGroup.value)
    //     this.thirdFormGroup.reset()
    //   }

    // }

    if (this.testTypeId == '2') {

      //  date format
      var personDetails = this.firstFormGroup.value;
      if (personDetails['contractPositionStatus']) {
        personDetails['contractPositionStatus'] = "1"
      } else {
        personDetails['contractPositionStatus'] = "0"
      }
      personDetails['candidateDateOfBirth'] = this.convertToDate(personDetails['candidateDateOfBirth'],'dob')

      var expList: any[] = [];
      this.experienceList.forEach(item => {
        item['startDate'] = this.convertToDate(item['startDate'])
        // item['startDate'] = this.datePipe.transform(item['startDate'],'yyyy-MM-dd');
        item['endDate'] = this.convertToDate(item['endDate'])
        // item['endDate'] = this.datePipe.transform(item['endDate'],'yyyy-MM-dd');

        ////// console.log(this.datePipe.transform(item['endDate'],'yyyy-MM-dd'));
        if (item['currentWorking']) {
          delete item['endDate']
          item['currentWorking'] = 1
        } else {
          item['currentWorking'] = 0
        }
        expList.push(item)
      })
      // 
      var data = {
        "candidatePersonalDetails": personDetails,
        "certificationDetails": this.certificationList,
        "educationDetails": this.qualificationList,
        "encryptedToken": this.encryptedToken,
        "professionalDetails": expList
      }
      this.apiService.postData('testmanagement/testconfig/candidatewalkinregistration', data)
        .subscribe(res => {
          this.blockUI.stop()
          if (res['statusCode'] == "1") {
            this.router.navigate(['candidate/walkin', res['encryptedToken']])
            this.apiService.successAlert(res['statusMessage'])
            this.firstFormGroup.reset();
            this.secondFormGroup.reset();
            this.certificateFormGroup.reset();
            this.thirdFormGroup.reset();
          } else {
            this.apiService.errorAlert(res['statusMessage'])
          }
        }, error => {
          this.blockUI.stop()
        })
    } else {
      this.firstFormGroup.value['candidateId'] = this.candidForm['candidateDetails']['candidatePersonalDetails']['candidateId']

      // date format
      var personDetails = this.firstFormGroup.value;
      personDetails['candidateDateOfBirth'] = this.convertToDate(personDetails['candidateDateOfBirth'],'dob')

      if (personDetails['contractPositionStatus']) {
        personDetails['contractPositionStatus'] = "1"
      } else {
        personDetails['contractPositionStatus'] = "0"
      }

      var expList: any[] = [];
      this.experienceList.forEach(item => {
        item['startDate'] = this.convertToDate(item['startDate'])
        // item['startDate'] = this.datePipe.transform(item['startDate'],'yyyy-MM-dd');
        item['endDate'] = this.convertToDate(item['endDate'])
        // item['endDate'] = this.datePipe.transform(item['endDate'],'yyyy-MM-dd');

        if (item['currentWorking']) {

          item['currentWorking'] = 1
        } else {
          item['currentWorking'] = 0
        }
        expList.push(item)

      })
     // // console.log("hfsgdsgxgd" + this.experienceList);

      // end date format
     // // console.log(expList);
      data = {
        "candidatePersonalDetails": personDetails,
        "certificationDetails": this.certificationList,
        "educationDetails": this.qualificationList,
        "encryptedToken": this.encryptedToken,
        "professionalDetails": expList
      }
      this.apiService.postData('testmanagement/testconfig/candidateregistration', data)
        .subscribe(res => {
          this.blockUI.stop()
          if (res['statusCode'] == "1" && res['examStatus'] == 'active') {
            this.router.navigate(['/exam', res['testInstanceId']])
            localStorage.setItem('encryptedToken', this.encryptedToken)
            this.apiService.successAlert(res['statusMessage'])
            this.firstFormGroup.reset();
            this.secondFormGroup.reset();
            this.certificateFormGroup.reset();
            this.thirdFormGroup.reset();
          } else {
            this.apiService.errorAlert(res['statusMessage'])
          }
        }, error => {
          this.blockUI.stop()
        },()=>{
          this.blockUI.stop();
        })

    }


  }

  convertToDate(dat,dob?) {
    if (typeof dat == 'object') {
      var date = new Date(dat);
      var mnth;
      var day;
      if ((date.getMonth() + 1) > 9) {
        mnth = ((date.getMonth() + 1));
      } else {
        mnth = ("0" + (date.getMonth() + 1)).slice(-2);
      }

      if (date.getDate() > 9) {
        day = (date.getDate());
      } else {
        day = ("0" + date.getDate()).slice(-2);
      }
      if(dob){
        return [day,mnth,date.getFullYear()].join("-");
      }else{
        return [date.getFullYear(),mnth,day].join("-");
      }
     
    } else if (typeof dat == "string") {
      var createDate = dat.split('-')
      if(dob){
         var date = new Date(Number(createDate[2]),Number(createDate[1])-1,Number(createDate[0]));
      }else{
        var date = new Date(Number(createDate[0]),Number(createDate[1])-1,Number(createDate[2]));
      }
     
      var mnth;
      var day;
      if ((date.getMonth() + 1) > 9) {
        mnth = ((date.getMonth() + 1));
      } else {
        mnth = ("0" + (date.getMonth() + 1)).slice(-2);
      }

      if (date.getDate() > 9) {
        day = (date.getDate());
      } else {
        day = ("0" + date.getDate()).slice(-2);
      }

      if(dob){
        return [day,mnth,date.getFullYear()].join("-");
      }else{
        return [date.getFullYear(),mnth,day].join("-");
      }

      // return [date.getFullYear(),mnth,day].join("-");
      // return dat;
    } else {
      return dat;
    }

  }

  checkMail() {
    if (this.firstFormGroup.controls.candidateMail.errors && this.firstFormGroup.controls.candidateMail.errors.email) {
      return this.firstFormGroup.controls.candidateMail.errors.email
    } else {
      return false;
    }

  }
  checkMobile() {
  //  // console.log(this.firstFormGroup)
    if ((this.firstFormGroup.controls.candidateMobile.errors && this.firstFormGroup.controls.candidateMobile.errors.min) || this.firstFormGroup.controls.candidateMobile.errors && this.firstFormGroup.controls.candidateMobile.errors.max) {
      return true
    } else {
      return false;
    }
  }

  preventKeys(event) {
    event.preventDefault();
  }

  editEducDetails(qual, i) {
    this.educIndex = i;
    this.qualEditData = qual;
    this.qualEditBack = {
      ...qual
    };
    this.isEdit = false
    $('#qualEditModal').modal('show')
  }
  editCertDetails(cert, i) {
    this.certIndex = i;
    this.certEditData = cert;
    this.certEditBack = {
      ...cert
    }
    this.isEdit = false
    $('#certEditModal').modal('show')
    
  }
  editQualification() {
    var editData = {
      ...this.secondFormGroup.value
    }
    this.qualificationList.splice(this.educIndex, 1, editData);
    this.qualEditBack = editData;
    this.secondFormGroup.reset();
    $('#qualEditModal').modal('hide')
    // this.isCertf = false;
    // this.qualEditData = qual;
    // this.qualificationList.splice(i,1)
  }

  editCertification(cert, i) {
    var editCert = {
      ...this.certificateFormGroup.value
    }
    this.certificationList.splice(this.certIndex, 1, editCert)
    this.certEditBack = editCert
    this.certificateFormGroup.reset();
    $('#certEditModal').modal('hide')
    // this.isCertf = true;
    // this.certEditData = cert;
    // this.certificationList.splice(i,1)
  }

  saveQual() {
    // if (this.secondFormGroup.valid) {
    //   var secForm = this.qualificationList.find((item)=>{
    //     return item == this.secondFormGroup.value;
    //   });
    //   if (secForm == undefined) {
    this.QualSubmit = true;
    if (this.secondFormGroup.valid) {
      this.qualificationList.push(this.secondFormGroup.value)
      this.secondFormGroup.reset();
      this.isEdit = false;
      if(this.qualificationList.length > 0){
        this.isLinear = false;
      }
    }
    //   }
    // }
  }

  saveCert() {
    this.CertSubmit = true;
    if (this.certificateFormGroup.valid) {
      this.certificationList.push(this.certificateFormGroup.value)
      this.certificateFormGroup.reset();
      this.isEdit = false;
    }
  }

  deleteQual(qual, i) {
    var del = confirm("Are You Sure You Want to Delete")
    if (del) {
      this.qualificationList.splice(i, 1);
      this.secondFormGroup.reset();
    }
    if(!this.qualificationList.length){
      this.isLinear = true;
    }

  }

  deleteCert(cert, i) {
    var del = confirm("Are You Sure You Want to Delete")
    if (del) {
      this.certificationList.splice(i, 1);
      this.certificateFormGroup.reset();
    }
  }

  deleteExp(exp, i) {
    var del = confirm("Are You Sure You Want to Delete")
    if (del) {
      this.experienceList.splice(i, 1);
      this.thirdFormGroup.reset();
    }
  }

  closeSecondForm(){
    this.isEdit = false;
    this.secondFormGroup.reset();
  }
  closeThirdForm(){
    this.expForm = false;
    this.thirdFormGroup.reset();
  }
  closeCertForm(){
    this.isEdit = false;
    this.certificateFormGroup.reset();
  }

}
