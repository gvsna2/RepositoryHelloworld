(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Modules-candidate-registraion-candidate-registraion-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/candidate-registration/candidate-registration.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/candidate-registration/candidate-registration.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<block-ui>\n\n</block-ui>\n<section class=\"tenant_reg_sec\">\n    <div class=\"tenant_reg_gradient\">\n        <div class=\"p-4\">\n            <img src=\"./../../../assets/images/316X120.png\" width=\"144px\" height=\"50px\" style=\"margin:0.28rem;padding-top:2px ;padding-bottom:2px ;\"\n            />\n        </div>\n        <div class=\"text-center mt-4 mb-5 test_tile\" *ngIf=\"testTiltle\">\n            <h2>Welcome to {{testTiltle}} Test</h2>\n            <hr>\n        </div>\n        <div class=\"candid_forms_sec pl-5 pr-5\">\n            <div class=\"pl-5 pr-5\">\n                <mat-horizontal-stepper [linear]=\"isLinear\" #stepper class=\"p-5\">\n                    <mat-step [stepControl]=\"firstFormGroup\">\n                        <div class=\"p-4 reg_title text-center\">\n                            <h5>\n                                <b style=\"border-bottom: 2px solid #5ccd71;\">Personal Details</b>\n                            </h5>\n                        </div>\n                        <form [formGroup]=\"firstFormGroup\" #formDir=\"ngForm\" class=\"row\">\n                            <!-- <ng-template matStepLabel>Fill out your name</ng-template> -->\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"candidateFirstName\">First Name</label>\n                                    <input type=\"text\" placeholder=\"John\" [(ngModel)]=\"candidForm?.candidateDetails.candidatePersonalDetails.candidateFirstName\"\n                                        class=\"form-control\" id=\"candidateFirstName\" formControlName=\"candidateFirstName\" [ngClass]=\"{'form-control':true,'red_border': firstFormGroup.controls['candidateFirstName'].touched && firstFormGroup.controls['candidateFirstName'].errors,'disabledClass':testTypeId == 1}\">\n                                    <span *ngIf=\"(firstFormGroup.controls['candidateFirstName'].touched && firstFormGroup.controls['candidateFirstName'].errors && firstFormGroup.controls['candidateFirstName'].errors.required) || (submittedFirst && firstFormGroup.controls['candidateFirstName'].errors)\"\n                                        class=\"errorTxt\">Please Enter First Name</span>\n                                    <!-- <span *ngIf=\"firstFormGroup.touched && firstFormGroup.controls['candidateFirstName'].errors\" class=\"errorTxt\">Please Enter First Name</span> -->\n                                    <p class=\"m-0\">\n                                        <span class=\"errorTxt\" *ngIf=\"firstFormGroup.controls.candidateFirstName.errors && firstFormGroup.controls.candidateFirstName.errors.minlength\">Must have atleast 3 characters</span>\n                                    </p>\n                                    <p class=\"m-0\">\n                                        <span class=\"errorTxt\" *ngIf=\"firstFormGroup.controls.candidateFirstName.errors && firstFormGroup.controls.candidateFirstName.errors.pattern\">\n                                            Numbers Not Allowed\n                                        </span>\n                                    </p>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"candidateLastName\">Last Name</label>\n                                    <input type=\"text\" placeholder=\"Doe\" [(ngModel)]=\"candidForm?.candidateDetails.candidatePersonalDetails.candidateLastName\"\n                                        class=\"form-control\" id=\"candidateLastName\" formControlName=\"candidateLastName\" [ngClass]=\"{'form-control':true,'red_border': firstFormGroup.controls['candidateLastName'].touched && firstFormGroup.controls['candidateLastName'].errors,'disabledClass':testTypeId == 1}\">\n                                    <span *ngIf=\"(firstFormGroup.controls['candidateLastName'].touched && firstFormGroup.controls['candidateLastName'].errors && firstFormGroup.controls['candidateLastName'].errors.required) || (submittedFirst && firstFormGroup.controls['candidateLastName'].errors)\"\n                                        class=\"errorTxt\">Please Enter Last Name</span>\n                                    <!-- <span *ngIf=\"firstFormGroup.touched && firstFormGroup.controls['candidateLastName'].errors\" class=\"errorTxt\">Please Enter Last Name</span> -->\n                                    <p class=\"m-0\">\n                                        <span class=\"errorTxt\" *ngIf=\"firstFormGroup.controls.candidateLastName.errors && firstFormGroup.controls.candidateLastName.errors.pattern\">\n                                            Numbers Not Allowed\n                                        </span>\n                                    </p>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"candidateMail\">Email ID</label>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"john.doe@gmail.com\" [(ngModel)]=\"candidForm?.candidateDetails.candidatePersonalDetails.candidateMail\"\n                                        id=\"candidateMail\" formControlName=\"candidateMail\" [ngClass]=\"{'form-control':true,'red_border': firstFormGroup.controls['candidateMail'].touched && firstFormGroup.controls['candidateMail'].errors,'disabledClass':testTypeId == 1}\">\n                                    <!-- <span *ngIf=\"firstFormGroup.touched && firstFormGroup.controls['candidateMail'].errors\" class=\"errorTxt\">Please Enter Valid Email Id</span> -->\n                                    <span class=\"errorTxt\" *ngIf=\"checkMail() || (submittedFirst && firstFormGroup.controls['candidateMail'].errors)\">Please Enter Valid Email Id</span>\n                                    <span *ngIf=\"firstFormGroup.controls['candidateMail'].touched && firstFormGroup.controls['candidateMail'].errors && firstFormGroup.controls['candidateMail'].errors.required\"\n                                        class=\"errorTxt\">Please Enter Email ID</span>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\" id=\"dob\">\n                                    <label class=\"d-block\" for=\"dob\">Date of Birth</label>\n                                    <!-- <mat-form-field>\n                                        <input placeholder=\"MM/DD/YYYY\" matInput [matDatepicker]=\"dobPicker\" [(ngModel)]=\"candidForm?.candidateDetails.candidatePersonalDetails.candidateDateOfBirth\"\n                                            id=\"dob\" formControlName=\"candidateDateOfBirth\" [ngClass]=\"{'form-control':true,'red_border': firstFormGroup.controls['candidateDateOfBirth'].touched && firstFormGroup.controls['candidateDateOfBirth'].errors}\">\n                                        <mat-datepicker-toggle matSuffix [for]=\"dobPicker\"></mat-datepicker-toggle>\n                                        <mat-datepicker #dobPicker></mat-datepicker>\n                                    </mat-form-field> -->\n                                    <div *ngIf=\"startDOB\">\n                                        <input placeholder=\"MM/DD/YYYY\" class=\"form-control \" [(ngModel)]=\"candidForm['candidateDetails'].candidatePersonalDetails.candidateDateOfBirth\"\n                                            id=\"dob\" formControlName=\"candidateDateOfBirth\" disabled>\n                                    </div>\n                                    <div *ngIf=\"!startDOB\">\n                                        <mat-form-field >\n                                            <input placeholder=\"MM/DD/YYYY\"  [max]=\"todayDate\" matInput [matDatepicker]=\"dobPicker\" id=\"dob\" formControlName=\"candidateDateOfBirth\" [ngClass]=\"{'form-control':true,'red_border': firstFormGroup.controls['candidateDateOfBirth'].touched && firstFormGroup.controls['candidateDateOfBirth'].errors}\">\n                                            <mat-datepicker-toggle matSuffix [for]=\"dobPicker\"></mat-datepicker-toggle>\n                                            <mat-datepicker  #dobPicker></mat-datepicker>\n                                        </mat-form-field>\n                                    </div>\n                                    <span *ngIf=\"(firstFormGroup.controls['candidateDateOfBirth'].touched && firstFormGroup.controls['candidateDateOfBirth'].errors && firstFormGroup.controls['candidateDateOfBirth'].errors.required) || (submittedFirst && firstFormGroup.controls['candidateDateOfBirth'].errors)\"\n                                        class=\"errorTxt\">Please Enter DOB</span>\n                                    <!-- <span *ngIf=\"firstFormGroup.touched && firstFormGroup.controls['candidateDateOfBirth'].errors\" class=\"errorTxt\">Please Enter DOB</span> -->\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                            <label for=\"candidateGender\">Gender</label>\n                                            <select class=\"form-control\" id=\"candidateGender\" formControlName=\"candidateGender\" [ngClass]=\"{'form-control':true,'red_border': firstFormGroup.controls['candidateGender'].touched && firstFormGroup.controls['candidateGender'].errors}\">\n                                                <option [value]=\"\" [selected]=\"true\" disabled>Select Gender</option>\n                                                <option [value]=\"'Male'\" [selected]=\"'Male' == candidForm?.candidateDetails.candidatePersonalDetails.candidateGender\">Male</option>\n                                                <option [value]=\"'Female'\" [selected]=\"'Female' == candidForm?.candidateDetails.candidatePersonalDetails.candidateGender\">Female</option>\n                                            </select>\n                                            <span *ngIf=\"(firstFormGroup.controls['candidateGender'].touched && firstFormGroup.controls['candidateGender'].errors && firstFormGroup.controls['candidateGender'].errors.required) || (submittedFirst && firstFormGroup.controls['candidateGender'].errors)\"\n                                                class=\"errorTxt\">Please Select Gender</span>\n                                            <!-- <span *ngIf=\"firstFormGroup.touched && firstFormGroup.controls['candidateGender'].errors\" class=\"errorTxt\">Please Select Gender</span> -->\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-6\">\n                                        <div class=\"form-group\">\n                                            <label for=\"maritalStatus\">Marital Status</label>\n                                            <select class=\"form-control\" id=\"maritalStatus\" [(ngModel)]=\"candidForm?.candidateDetails.candidatePersonalDetails.maritalStatus\"\n                                                formControlName=\"maritalStatus\" [ngClass]=\"{'form-control':true,'red_border': firstFormGroup.controls['maritalStatus'].touched && firstFormGroup.controls['maritalStatus'].errors}\">\n                                                <option [selected]=\"true\" disabled>Select</option>\n                                                <option [value]=\"'married'\" [selected]=\"'married' == candidForm?.candidateDetails.candidatePersonalDetails.maritalStatus\">Married</option>\n                                                <option [value]=\"'unmarried'\" [selected]=\"'unmarried' == candidForm?.candidateDetails.candidatePersonalDetails.maritalStatus\">Unmarried</option>\n                                            </select>\n                                            <span *ngIf=\"(firstFormGroup.controls['maritalStatus'].touched && firstFormGroup.controls['maritalStatus'].errors && firstFormGroup.controls['maritalStatus'].errors.required) || (submittedFirst && firstFormGroup.controls['maritalStatus'].errors)\"\n                                                class=\"errorTxt\">Please Select Marital Status</span>\n                                            <!-- <span *ngIf=\"firstFormGroup.touched && firstFormGroup.controls['maritalStatus'].errors\" class=\"errorTxt\">Please Select Marital Status</span> -->\n                                        </div>\n\n                                    </div>\n                                </div>\n\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"candidateMobile\">Phone Number</label>\n                                    <input placeholder=\"9898989898\" type=\"number\" [(ngModel)]=\"candidForm?.candidateDetails.candidatePersonalDetails.candidateMobile\"\n                                        class=\"form-control\" id=\"candidateMobile\" formControlName=\"candidateMobile\" [ngClass]=\"{'form-control':true,'red_border': firstFormGroup.controls['candidateMobile'].touched && firstFormGroup.controls['candidateMobile'].errors,'disabledClass':testTypeId == 1}\">\n                                    <span class=\"errorTxt\" *ngIf=\"checkMobile()\">Please Enter Valid Mobile Number</span>\n                                    <span *ngIf=\"(firstFormGroup.controls['candidateMobile'].touched && firstFormGroup.controls['candidateMobile'].errors && firstFormGroup.controls['candidateMobile'].errors.required) || (submittedFirst && firstFormGroup.controls['candidateMobile'].errors)\"\n                                        class=\"errorTxt\">Please Enter Mobile Number</span>\n                                    <!-- <span *ngIf=\"firstFormGroup.touched && firstFormGroup.controls['candidateMobile'].errors\" class=\"errorTxt\">Please Enter Mobile Number</span> -->\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"occupation\">Selection Occupation</label>\n                                    <select class=\"form-control\" id=\"occupation\" \n                                     \n                                        formControlName=\"occupation\" [ngClass]=\"{'form-control':true,'red_border': firstFormGroup.controls['occupation'].touched && firstFormGroup.controls['occupation'].errors,'disabledClass':candidForm.candidateDetails.candidatePersonalDetails.occupation ==1 || candidForm.candidateDetails.candidatePersonalDetails.occupation == 2 || candidForm.candidateDetails.candidatePersonalDetails.occupation ==3}\">\n                                        <option [selected]=\"true\" disabled>Select Occupation</option>\n                                        <option value=\"2\" [selected]=\"2 == candidForm?.candidateDetails.candidatePersonalDetails.occupation\">Student</option>\n                                        <option value=\"3\" [selected]=\"3 == candidForm?.candidateDetails.candidatePersonalDetails.occupation\">Fresher</option>\n                                        <option value=\"1\" [selected]=\"1 == candidForm?.candidateDetails.candidatePersonalDetails.occupation\">Experienced</option>\n                                    </select>\n                                    <span *ngIf=\"(firstFormGroup.controls['occupation'].touched && firstFormGroup.controls['occupation'].errors) || (submittedFirst && firstFormGroup.controls['occupation'].errors)\"\n                                        class=\"errorTxt\">Please Select Occupation</span>\n                                    <!-- <span *ngIf=\"firstFormGroup.touched && firstFormGroup.controls['occupation'].errors\" class=\"errorTxt\">Please Enter Occupation</span> -->\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6 pt-4 mt-1\" *ngIf=\"firstFormGroup.controls['occupation'].value == 1\">\n                                <mat-checkbox formControlName=\"contractPositionStatus\">\n                                    I am interested in contract positions too\n                                </mat-checkbox>\n                            </div>\n                        </form>\n                        <div class=\"text-right pt-4 pb-4\">\n                            <button mat-button matStepperNext class=\"submit_btn\" (click)=\"eductionDetails(firstFormGroup)\">\n                                <b>Next</b>\n                            </button>\n                        </div>\n                    </mat-step>\n                    <mat-step [stepControl]=\"secondFormGroup\">\n                        <div class=\"p-4 reg_title text-center\">\n                            <h5>\n                                <b style=\"border-bottom: 2px solid #5ccd71;\">Educational Details</b>\n                            </h5>\n                        </div>\n                        <div *ngIf=\"qualificationList.length\" class=\"mb-5\">\n                            <div class=\"row\" *ngFor=\"let qual of qualificationList;let i=index\">\n                                <div class=\"col-sm-12\">\n                                    <hr class=\"qual_hr\" *ngIf=\"i!=0\">\n                                </div>\n                                <p class=\"col-sm-12\">\n                                    <b>Qualification - {{i+1}}</b>\n                                    <span class=\"qual_icon\">\n                                        <i class=\"material-icons\" (click)=\"editEducDetails(qual,i)\">\n                                            edit\n                                        </i>\n                                    </span>\n                                    <!-- <span class=\"qual_icon\" data-toggle=\"modal\" data-target=\"#qualEditModal\">\n                                        <i class=\"material-icons\" (click)=\"editEducDetails(qual,i)\">\n                                            edit\n                                        </i>\n                                    </span> -->\n                                    <span class=\"cert_icon pl-4\">\n                                        <i class=\"material-icons\" (click)=\"deleteQual(qual,i)\">\n                                            highlight_off\n                                        </i>\n                                    </span>\n                                </p>\n                                <div class=\"col-sm-4 mb-4\">\n                                    <span>Qualification - {{i+1}} :</span>\n                                    <span class=\"pl-4\">\n                                        <b>{{qual.qualification}}</b>\n                                    </span>\n                                </div>\n                                <div class=\"col-sm-8 mb-4\">\n                                        <span>College :</span>\n                                        <span class=\"pl-4\">\n                                            <b>{{qual.collegeName}}</b>\n                                        </span>\n                                    </div>\n                                <div class=\"col-sm-4 mb-4\">\n                                    <span>University Name :</span>\n                                    <span class=\"pl-4\">\n                                        <b>{{qual.univercity}}</b>\n                                    </span>\n                                </div>\n                                <div class=\"col-sm-8 mb-4\">\n                                    <span>Percentage / CGPA :</span>\n                                    <span class=\"pl-4\">\n                                        <b>{{qual.passPercentage}}</b>\n                                    </span>\n                                </div>\n                                <div class=\"col-sm-4 mb-4\">\n                                    <span>Year of Completion :</span>\n                                    <span class=\"pl-4\">\n                                        <b>{{qual.yearOfCompletion}}</b>\n                                    </span>\n                                </div>\n\n                                <div class=\"col-sm-12\">\n                                    <hr class=\"qual_hr\" *ngIf=\"(i+1)==qualificationList.length\">\n                                </div>\n                            </div>\n\n                        </div>\n                        <div *ngIf=\"certificationList.length\" class=\"mb-5\">\n                            <div class=\"row\" *ngFor=\"let cert of certificationList;let i=index\">\n                                <div class=\"col-sm-12\">\n                                    <hr class=\"qual_hr\" *ngIf=\"i!=0\">\n                                </div>\n\n                                <p class=\"col-sm-12\">\n                                    <b>Certification - {{i+1}}</b>\n                                    <span class=\"qual_icon\">\n                                        <i class=\"material-icons\" (click)=\"editCertDetails(cert,i)\">\n                                            edit\n                                        </i>\n                                    </span>\n                                    <!-- <span class=\"qual_icon\" data-toggle=\"modal\" data-target=\"#certEditModal\">\n                                        <i class=\"material-icons\" (click)=\"editCertDetails(cert,i)\">\n                                            edit\n                                        </i>\n                                    </span> -->\n                                    <span class=\"cert_icon pl-4\">\n                                        <i class=\"material-icons\" (click)=\" deleteCert(cert,i)\">\n                                            highlight_off\n                                        </i>\n                                    </span>\n                                </p>\n                                <div class=\"col-sm-6 mb-4\">\n                                    <span>Certification Name :</span>\n                                    <span class=\"pl-4\">\n                                        <b>{{cert.certificationName}}</b>\n                                    </span>\n                                </div>\n                                <div class=\"col-sm-6 mb-4\">\n                                    <span>Year of Completion :</span>\n                                    <span class=\"pl-4\">\n                                        <b>{{cert.yearOfCompletion}}</b>\n                                    </span>\n                                </div>\n                                <div class=\"col-sm-6 mb-4\">\n                                    <span>Percentage / CGPA :</span>\n                                    <span class=\"pl-4\">\n                                        <b>{{cert.passPercentage}}</b>\n                                    </span>\n                                </div>\n                                <div class=\"col-sm-12\">\n                                    <hr class=\"qual_hr\" *ngIf=\"(i+1)==certificationList.length\">\n                                </div>\n                            </div>\n\n                        </div>\n\n                        <form [formGroup]=\"secondFormGroup\" class=\"row\" *ngIf=\"!isCertf && isEdit\">\n                            <!-- <ng-template matStepLabel>Fill out your address</ng-template> -->\n                            <div class=\"col-sm-12 text-right close_form\">\n                                <span class=\"errorTxt pointer\">\n                                    <i class=\"material-icons\" (click)=\"closeSecondForm()\">\n                                        highlight_off\n                                    </i>\n                                </span>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"qualification\">Qualification</label>\n                                    <input type=\"text\" placeholder=\"B.Tech\" class=\"form-control\" formControlName=\"qualification\" [ngClass]=\"{'form-control':true,'red_border': secondFormGroup.controls['qualification'].touched && secondFormGroup.controls['qualification'].errors}\">\n                                    <span class=\"errorTxt\" *ngIf=\"(secondFormGroup.controls['qualification'].touched && secondFormGroup.controls['qualification'].errors && secondFormGroup.controls['qualification'].errors.required) || (QualSubmit && secondFormGroup.controls['qualification'].errors && secondFormGroup.controls['qualification'].errors.required)\">Please Enter Qualification</span>\n                                    <span class=\"errorTxt\" *ngIf=\"secondFormGroup.controls.qualification.errors && secondFormGroup.controls.qualification.errors.pattern\">\n                                        Numbers Not Allowed\n                                    </span>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"univercity\">University Name</label>\n                                    <input type=\"text\" placeholder=\"JNTUK\" class=\"form-control\" formControlName=\"univercity\" [ngClass]=\"{'form-control':true,'red_border': secondFormGroup.controls['univercity'].touched && secondFormGroup.controls['univercity'].errors}\">\n                                    <span class=\"errorTxt\" *ngIf=\"(secondFormGroup.controls['univercity'].touched && secondFormGroup.controls['univercity'].errors && secondFormGroup.controls['univercity'].errors.required) || (QualSubmit && secondFormGroup.controls['univercity'].errors && secondFormGroup.controls['univercity'].errors.required)\">Please Enter University</span>\n                                    <span class=\"errorTxt\" *ngIf=\"secondFormGroup.controls.univercity.errors && secondFormGroup.controls.univercity.errors.pattern\">\n                                        Numbers Not Allowed\n                                    </span>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"collegeName\">College</label>\n                                    <input type=\"text\" placeholder=\"Layola College\" class=\"form-control\" id=\"collegeName\" formControlName=\"collegeName\" [ngClass]=\"{'form-control':true,'red_border': secondFormGroup.controls['collegeName'].touched && secondFormGroup.controls['collegeName'].errors}\">\n                                    <span class=\"errorTxt\" *ngIf=\"(secondFormGroup.controls['collegeName'].touched && secondFormGroup.controls['collegeName'].errors && secondFormGroup.controls['collegeName'].errors.required) || (QualSubmit && secondFormGroup.controls['collegeName'].errors && secondFormGroup.controls['collegeName'].errors.required)\">Please Provide College Name</span>\n                                    <span class=\"errorTxt\" *ngIf=\"secondFormGroup.controls.collegeName.errors && secondFormGroup.controls.collegeName.errors.pattern\">\n                                        Numbers Not Allowed\n                                    </span>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"passPercentage\">Percentage / CGPA</label>\n                                    <input placeholder=\"90.99\" type=\"number\" class=\"form-control\" id=\"passPercentage\" formControlName=\"passPercentage\" [ngClass]=\"{'form-control':true,'red_border': secondFormGroup.controls['passPercentage'].touched && secondFormGroup.controls['passPercentage'].errors}\">\n                                    <!-- <span class=\"errorTxt\" *ngIf=\"(secondFormGroup.controls['yearOfCompletion'].touched &&secondFormGroup.controls['yearOfCompletion'].errors) || (QualSubmit &&secondFormGroup.controls['yearOfCompletion'].errors)\">Please Enter Percentage</span> -->\n                                    <span class=\"errorTxt\" *ngIf=\"(secondFormGroup.controls['passPercentage'].touched && secondFormGroup.controls['passPercentage'].errors && secondFormGroup.controls['passPercentage'].errors.required) || (QualSubmit && secondFormGroup.controls['passPercentage'].errors && secondFormGroup.controls['passPercentage'].errors.required)\">\n                                        Please Enter Percentage\n                                    </span>\n                                    <!-- <span class=\"errorTxt\" *ngIf=\"secondFormGroup.controls['passPercentage'].touched && secondFormGroup.controls['passPercentage'].errors && secondFormGroup.controls['passPercentage'].errors.pattern\">\n                                        Must be a number with up to 2 decimal places may have %\n                                    </span> -->\n                                    <span class=\"errorTxt\" *ngIf=\"secondFormGroup.controls['passPercentage'].touched && secondFormGroup.controls['passPercentage'].errors && secondFormGroup.controls['passPercentage'].errors.max\">\n                                        Please Enter Valid Percentage\n                                    </span>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"yearOfCompletion\">Year of Completion</label>\n                                    <input type=\"number\" placeholder=\"2019\" class=\"form-control\" id=\"yearOfCompletion\" formControlName=\"yearOfCompletion\" [ngClass]=\"{'form-control':true,'red_border': secondFormGroup.controls['yearOfCompletion'].touched && secondFormGroup.controls['yearOfCompletion'].errors}\">\n\n                                    <span class=\"errorTxt\" *ngIf=\"(secondFormGroup.controls['yearOfCompletion'].touched &&secondFormGroup.controls['yearOfCompletion'].errors) || (QualSubmit &&secondFormGroup.controls['yearOfCompletion'].errors)\">Please Enter Year of Completion, Year Should not be More than the Current Year</span>\n                                   \n\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <button class=\"btn btn-success save_btn\" (click)=\"saveQual()\">Save</button>\n                            </div>\n                        </form>\n                        <form [formGroup]=\"certificateFormGroup\" class=\"row\" *ngIf=\"isCertf && isEdit\">\n                            <!-- <ng-template matStepLabel>Fill out your address</ng-template> -->\n                            <div class=\"col-sm-12 text-right close_form\">\n                                    <span class=\"errorTxt pointer\">\n                                        <i class=\"material-icons\" (click)=\"closeCertForm()\">\n                                            highlight_off\n                                        </i>\n                                    </span>\n                                </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"certificationName\">Certification Name</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"certificationName\" formControlName=\"certificationName\" [ngClass]=\"{'form-control':true,'red_border': certificateFormGroup.controls['certificationName'].touched && certificateFormGroup.controls['certificationName'].errors}\">\n                                    <span class=\"errorTxt\" *ngIf=\"(certificateFormGroup.controls['certificationName'].touched && certificateFormGroup.controls['certificationName'].errors) || (CertSubmit && certificateFormGroup.controls['certificationName'].errors && certificateFormGroup.controls['certificationName'].errors.required)\">Please Mention Certification Name</span>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"yearOfCompletion\">Year of Completion</label>\n                                    <input type=\"number\" minlength=\"4\" maxlength=\"4\" class=\"form-control\" id=\"yearOfCompletion\" formControlName=\"yearOfCompletion\"\n                                        [ngClass]=\"{'form-control':true,'red_border': certificateFormGroup.controls['yearOfCompletion'].touched && certificateFormGroup.controls['yearOfCompletion'].errors}\">\n                                    <span class=\"errorTxt\" *ngIf=\"(certificateFormGroup.controls['yearOfCompletion'].touched && certificateFormGroup.controls['yearOfCompletion'].errors) || (CertSubmit && certificateFormGroup.controls['yearOfCompletion'].errors && certificateFormGroup.controls['yearOfCompletion'].errors.required)\">Please Enter Year of Completion, Year Should not be More than the Current Year</span>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <div class=\"form-group\">\n                                    <label for=\"passPercentage\">Percentage / CGPA</label>\n                                    <input type=\"number\" class=\"form-control\" id=\"passPercentage\" formControlName=\"passPercentage\" [ngClass]=\"{'form-control':true,'red_border': certificateFormGroup.controls['passPercentage'].touched && certificateFormGroup.controls['passPercentage'].errors}\">\n                                    <span class=\"errorTxt\" *ngIf=\"(certificateFormGroup.controls['passPercentage'].touched && certificateFormGroup.controls['passPercentage'].errors && certificateFormGroup.controls['passPercentage'].errors.required) || (CertSubmit && certificateFormGroup.controls['passPercentage'].errors && certificateFormGroup.controls['passPercentage'].errors.required)\">Please Enter Percentage</span>\n                                    <!-- <span class=\"errorTxt\" *ngIf=\"certificateFormGroup.controls['passPercentage'].touched && certificateFormGroup.controls['passPercentage'].errors && certificateFormGroup.controls['passPercentage'].errors.pattern\">\n                                    Must be a number with up to 2 decimal places may have %</span> -->\n                                    <span class=\"errorTxt\" *ngIf=\"certificateFormGroup.controls['passPercentage'].touched && certificateFormGroup.controls['passPercentage'].errors && certificateFormGroup.controls['passPercentage'].errors.max\">\n                                        Please Enter Valid Percentage</span>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-6\">\n                                <button class=\"btn btn-success save_btn\" (click)=\"saveCert()\">Save</button>\n                            </div>\n\n                        </form>\n                        <div class=\"pt-4 pb-4\">\n                            <button mat-button type=\"button\" class=\"another_btn\" (click)=\"addQual(secondFormGroup)\">+ Add Another Qualification</button>\n                        </div>\n                        <div class=\"pt-4 pb-4\">\n                            <button type=\"button\" class=\"btn btn-link\" (click)=\"addCertif(certificateFormGroup)\">+ Add Certification</button>\n                        </div>\n                        <div class=\"text-right pt-4 pb-4\">\n                            <button mat-button matStepperPrevious class=\"submit_btn float-left\">\n                                <b>Back</b>\n                            </button>\n                            <ng-container *ngIf=\"firstFormGroup.controls['occupation'].value != 1\">\n                                <button mat-button matStepperNext class=\"submit_btn\" (click)=\"careerForm()\">\n                                    <b>Finish</b>\n                                </button>\n                            </ng-container>\n                            <ng-container *ngIf=\"firstFormGroup.controls['occupation'].value == 1\">\n                                <button mat-button matStepperNext class=\"submit_btn\" (click)=\"checkQualList()\">\n                                    <b>Next</b>\n                                </button>\n                            </ng-container>\n\n                        </div>\n                    </mat-step>\n                    <mat-step [stepControl]=\"thirdFormGroup\" *ngIf=\"firstFormGroup.controls['occupation'].value == 1\">\n                        <!-- <ng-template matStepLabel>Done</ng-template> -->\n                        <div class=\"p-4 reg_title text-center\">\n                            <h5>\n                                <b style=\"border-bottom: 2px solid #5ccd71;\">Career Details</b>\n                            </h5>\n                        </div>\n                        <div *ngIf=\"experienceList.length\" class=\"mb-5\">\n                            <div class=\"row\" *ngFor=\"let exp of experienceList;let i=index\">\n                                <p class=\"col-sm-12\">\n                                    <b>Experience - {{i+1}}</b>\n                                    <span class=\"qual_icon\" (click)=\"editExpDetails(exp,i)\">\n                                        <i class=\"material-icons\">\n                                            edit\n                                        </i>\n                                    </span>\n                                    <!-- <span class=\"qual_icon\" (click)=\"editExpDetails(exp,i)\" data-toggle=\"modal\" data-target=\"#expDetailModal\">\n                                        <i class=\"material-icons\">\n                                            edit\n                                        </i>\n                                    </span> -->\n                                    <span class=\"cert_icon pl-4\">\n                                        <i class=\"material-icons\" (click)=\"deleteExp(exp,i)\">\n                                            highlight_off\n                                        </i>\n                                    </span>\n                                </p>\n                                <div class=\"col-sm-5 mb-4\">\n                                    <span>Company Name :</span>\n                                    <span class=\"pl-4\">\n                                        <b>{{exp.companyName}}</b>\n                                    </span>\n                                </div>\n                                <div class=\"col-sm-7 mb-4\">\n                                    <span>Designation :</span>\n                                    <span class=\"pl-4\">\n                                        <b>{{exp.designation}}</b>\n                                    </span>\n                                </div>\n                                <div class=\"col-sm-5 mb-4\">\n                                    <span>Start Date :</span>\n                                    <span class=\"pl-4\">\n                                        <b>{{exp.startDate | date:'mediumDate'}}</b>\n                                    </span>\n                                </div>\n                                <div class=\"col-sm-7 mb-4\">\n                                    <span>End Date :</span>\n                                    <span class=\"pl-4\" *ngIf=\"exp.endDate != 'null'\">\n                                        <b>{{exp.endDate | date:'mediumDate'}}</b>\n                                    </span>\n                                    <span class=\"pl-4\" *ngIf=\"exp.endDate == 'null'\">\n                                        <b>-</b>\n                                    </span>\n                                </div>\n                                <div class=\"col-sm-5 mb-4\">\n                                    <span>Location :</span>\n                                    <span class=\"pl-4\">\n                                        <b>{{exp.location}}</b>\n                                    </span>\n                                </div>\n                                <div class=\"col-sm-7 mb-4\">\n                                    <span>Mode of Employment :</span>\n                                    <span class=\"pl-4\">\n                                        <b>{{exp.modeOfEmployement}}</b>\n                                    </span>\n                                </div>\n                                <div class=\"col-sm-5 mb-4\">\n                                    <span>Salary :</span>\n                                    <span class=\"pl-4\">\n                                        <b>{{exp.salary}}</b> &nbsp; &nbsp;\n                                        <b>{{exp.currency}} </b>\n                                    </span>\n                                </div>\n                                <div class=\"col-sm-7 mb-4\">\n                                    <span>Currently Working here:</span>\n                                    <span class=\"pl-4\" *ngIf=\"exp.currentWorking\">\n                                        <b>Yes</b>\n                                    </span>\n                                    <span class=\"pl-4\" *ngIf=\"!exp.currentWorking\">\n                                        <b>No</b>\n                                    </span>\n                                </div>\n                            </div>\n                            <hr class=\"qual_hr\">\n                        </div>\n\n                        <form [formGroup]=\"thirdFormGroup\" class=\"row\" *ngIf=\"expForm\">\n                            <!-- <ng-template matStepLabel>Fill out your address</ng-template> -->\n                            <div class=\"col-sm-12 text-right close_form\">\n                                <span class=\"errorTxt pointer\">\n                                    <i class=\"material-icons\" (click)=\"closeThirdForm()\">\n                                        highlight_off\n                                    </i>\n                                </span>\n                            </div>\n                            <div class=\"col-sm-5\">\n                                <div class=\"form-group\">\n                                    <label for=\"companyName\">Company Name</label>\n                                    <input type=\"text\" placeholder=\"Nexiilabs\" class=\"form-control\" id=\"companyName\" formControlName=\"companyName\" [ngClass]=\"{'form-control':true,'red_border': thirdFormGroup.controls['companyName'].touched && thirdFormGroup.controls['companyName'].errors}\">\n                                    <span class=\"errorTxt\" *ngIf=\"(thirdFormGroup.controls['companyName'].touched && thirdFormGroup.controls['companyName'].errors && thirdFormGroup.controls['companyName'].errors.required) || (ExpSub && thirdFormGroup.controls['companyName'].errors && thirdFormGroup.controls['companyName'].errors.required)\">\n                                        Please Provide the Company Name\n                                    </span>\n                                    <span class=\"errorTxt\" *ngIf=\"(thirdFormGroup.controls['companyName'].touched && thirdFormGroup.controls['companyName'].errors && thirdFormGroup.controls['companyName'].errors.pattern)\">\n                                        Numbers Not Allowed\n                                    </span>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label for=\"designation\">Designation</label>\n                                    <input placeholder=\"MTS-1\" type=\"text\" class=\"form-control\" id=\"designation\" formControlName=\"designation\" [ngClass]=\"{'form-control':true,'red_border': thirdFormGroup.controls['designation'].touched && thirdFormGroup.controls['designation'].errors}\">\n                                    <span class=\"errorTxt\" *ngIf=\"(thirdFormGroup.controls['designation'].touched && thirdFormGroup.controls['designation'].errors) || (ExpSub && thirdFormGroup.controls['designation'].errors  && thirdFormGroup.controls['designation'].errors.required)\">\n                                        Please Provide the Designation\n                                    </span>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\"></div>\n                            <div class=\"col-sm-5\">\n                                <div class=\"form-group\">\n                                    <label class=\"d-block\" for=\"startDate\">Start Date</label>\n                                    <mat-form-field>\n                                        <input placeholder=\"MM/DD/YYYY\" matInput [matDatepicker]=\"picker\" [max]=\"todayDate\" id=\"startDate\" formControlName=\"startDate\" [ngClass]=\"{'form-control':true,'red_border': thirdFormGroup.controls['startDate'].touched && thirdFormGroup.controls['startDate'].errors}\">\n                                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                        <mat-datepicker #picker></mat-datepicker>\n                                    </mat-form-field>\n                                    <span class=\"errorTxt\" *ngIf=\"(thirdFormGroup.controls['startDate'].touched && thirdFormGroup.controls['startDate'].errors) || (ExpSub && thirdFormGroup.controls['startDate'].errors  && thirdFormGroup.controls['startDate'].errors.required)\">\n                                        Please Mention the Start Date\n                                    </span>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-4\" *ngIf='!checkbox.checked'>\n                                <div class=\"form-group\">\n                                    <label class=\"d-block\" for=\"endDate\">End Date</label>\n                                    <mat-form-field>\n                                        <input placeholder=\"MM/DD/YYYY\" matInput [max]=\"todayDate\" [matDatepicker]=\"picker1\" id=\"endDate\" formControlName=\"endDate\" [ngClass]=\"{'form-control':true,'red_border': thirdFormGroup.controls['endDate'].touched && thirdFormGroup.controls['endDate'].errors}\">\n                                        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                                        <mat-datepicker #picker1></mat-datepicker>\n                                    </mat-form-field>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\" style=\"padding-top: 2.25rem;\">\n                                <mat-checkbox formControlName=\"currentWorking\" #checkbox [ngClass]=\"{'red_border': thirdFormGroup.controls['currentWorking'].touched && thirdFormGroup.controls['currentWorking'].errors}\">\n                                    Currently Working here\n                                </mat-checkbox>\n                            </div>\n                            <div class=\"col-sm-5\">\n                                <div class=\"form-group\">\n                                    <label for=\"location\">Location</label>\n                                    <input placeholder=\"Hyderabad\" type=\"text\" class=\"form-control\" id=\"location\" formControlName=\"location\" [ngClass]=\"{'form-control':true,'red_border': thirdFormGroup.controls['location'].touched && thirdFormGroup.controls['location'].errors}\">\n                                    <span class=\"errorTxt\" *ngIf=\" (thirdFormGroup.controls['location'].touched && thirdFormGroup.controls['location'].errors && thirdFormGroup.controls['location'].errors.required) || (ExpSub && thirdFormGroup.controls['location'].errors && thirdFormGroup.controls['location'].errors.required)\">\n                                        Please Provide the Location\n                                    </span>\n                                    <span class=\"errorTxt\" *ngIf=\" (thirdFormGroup.controls['location'].touched && thirdFormGroup.controls['location'].errors && thirdFormGroup.controls['location'].errors.pattern)\">\n                                        Numbers Not Allowed\n                                    </span>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label for=\"modeOfEmployement\">Mode of Employment</label>\n                                    <select class=\"form-control\" id=\"modeOfEmployement\" formControlName=\"modeOfEmployement\" [ngClass]=\"{'form-control':true,'red_border': thirdFormGroup.controls['modeOfEmployement'].touched && thirdFormGroup.controls['modeOfEmployement'].errors}\">\n                                        <option [selected]=\"true\" disabled>Select Mode</option>\n                                        <option>Permanent</option>\n                                        <option>Contract</option>\n                                    </select>\n                                    <span class=\"errorTxt\" *ngIf=\"(thirdFormGroup.controls['modeOfEmployement'].touched && thirdFormGroup.controls['modeOfEmployement'].errors) || (ExpSub && thirdFormGroup.controls['modeOfEmployement'].errors  && thirdFormGroup.controls['modeOfEmployement'].errors.required)\">\n                                        Please Select the Mode of Employment\n                                    </span>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-3\"></div>\n                            <div class=\"col-sm-5\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-8\">\n                                        <div class=\"form-group\">\n                                            <label for=\"salary\">Salary (Lacs Per Annum)</label>\n                                            <input placeholder=\"5 (or) 3.25 (or) 7.5 ..\" type=\"number\" class=\"form-control\" id=\"salary\" formControlName=\"salary\" [ngClass]=\"{'form-control':true,'red_border': thirdFormGroup.controls['salary'].touched && thirdFormGroup.controls['salary'].errors}\">\n                                            <span class=\"errorTxt\" *ngIf=\"(thirdFormGroup.controls['salary'].touched && thirdFormGroup.controls['salary'].errors && thirdFormGroup.controls['salary'].errors.required) || (ExpSub && thirdFormGroup.controls['salary'].errors && thirdFormGroup.controls['salary'].errors.required)\">\n                                                Please Enter the salary\n                                            </span>\n                                            <!-- <span class=\"errorTxt\" *ngIf=\"thirdFormGroup.controls['salary'].touched && thirdFormGroup.controls['salary'].errors && thirdFormGroup.controls['salary'].errors.pattern\">\n                                                Only Numbers upto two decimals are allowed\n                                            </span> -->\n                                        </div>\n                                    </div>\n                                    <div class=\"col-sm-4\">\n                                        <div class=\"form-group\">\n                                            <label for=\"currency\">Currency</label>\n                                            <select class=\"form-control\" id=\"currency\" formControlName=\"currency\" [ngClass]=\"{'form-control':true,'red_border': thirdFormGroup.controls['currency'].touched && thirdFormGroup.controls['currency'].errors}\">\n                                                <option [selected]=\"true\" disabled>Select Currency</option>\n                                                <option>INR</option>\n                                                <option>USD</option>\n                                            </select>\n                                            <span class=\"errorTxt\" *ngIf=\"(thirdFormGroup.controls['currency'].touched && thirdFormGroup.controls['currency'].errors) || (ExpSub && thirdFormGroup.controls['currency'].errors && thirdFormGroup.controls['currency'].errors.required)\">\n                                                Please Select the Currency\n                                            </span>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-sm-4\">\n                                <button class=\"btn btn-success save_btn\" (click)=\"addExp(thirdFormGroup)\">Save</button>\n                            </div>\n\n                        </form>\n                        <div class=\"pt-4 pb-4\">\n                            <button *ngIf=\"experienceList.length\" mat-button type=\"button\" class=\"another_btn\" (click)=\"addExpForm()\">+ Add Another Experience</button>\n\n                            <button *ngIf=\"!experienceList.length\" mat-button type=\"button\" class=\"another_btn\" (click)=\"addExpForm()\">+ Add Experience</button>\n                        </div>\n                        <div class=\"text-right pt-4 pb-4\">\n                            <button mat-button matStepperPrevious class=\"submit_btn float-left\">\n                                <b>Back</b>\n                            </button>\n                            <button mat-button matStepperNext class=\"submit_btn\" (click)=\"careerForm(thirdFormGroup)\">\n                                <b>Finish</b>\n                            </button>\n                        </div>\n                    </mat-step>\n                </mat-horizontal-stepper>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"qualEditModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n            <!-- Modal Header -->\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Education Details</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n\n            <!-- Modal body -->\n            <div class=\"modal-body\">\n                <form [formGroup]=\"secondFormGroup\" class=\"row\">\n                    <!-- <ng-template matStepLabel>Fill out your address</ng-template> -->\n                    <input type=\"hidden\" [(ngModel)]=\"qualEditData.candidateEducationDetailsId\" id=\"candidateEducationDetailsId\"\n                    formControlName=\"candidateEducationDetailsId\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"qualification\">Qualification</label>\n                            <input type=\"text\" placeholder=\"B.Tech\" class=\"form-control\" [(ngModel)]=\"qualEditData.qualification\" id=\"qualification\"\n                                formControlName=\"qualification\" [ngClass]=\"{'form-control':true,'red_border': secondFormGroup.controls['qualification'].touched && secondFormGroup.controls['qualification'].errors}\">\n                                <span class=\"errorTxt\" *ngIf=\"(secondFormGroup.controls['qualification'].touched && secondFormGroup.controls['qualification'].errors && secondFormGroup.controls['qualification'].errors.required)\">Please Enter Qualification</span>\n                                <span class=\"errorTxt\" *ngIf=\"(secondFormGroup.controls['qualification'].touched && secondFormGroup.controls['qualification'].errors && secondFormGroup.controls['qualification'].errors.pattern)\">Numbers Not Allowed</span>\n                            </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"univercity\">University Name</label>\n                            <input type=\"text\" placeholder=\"JNTUK\" class=\"form-control\" [(ngModel)]=\"qualEditData.univercity\" id=\"univercity\" formControlName=\"univercity\"\n                                [ngClass]=\"{'form-control':true,'red_border': secondFormGroup.controls['univercity'].touched && secondFormGroup.controls['univercity'].errors}\">\n                                <span class=\"errorTxt\" *ngIf=\"(secondFormGroup.controls['univercity'].touched && secondFormGroup.controls['univercity'].errors && secondFormGroup.controls['univercity'].errors.required)\">Please Enter University</span>\n                                <span class=\"errorTxt\" *ngIf=\"(secondFormGroup.controls['univercity'].touched && secondFormGroup.controls['univercity'].errors && secondFormGroup.controls['univercity'].errors.pattern)\">Numbers Not Allowed</span>\n                            </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"collegeName\">College</label>\n                            <input type=\"text\" placeholder=\"Layola College\" class=\"form-control\" [(ngModel)]=\"qualEditData.collegeName\" id=\"collegeName\"\n                                formControlName=\"collegeName\" [ngClass]=\"{'form-control':true,'red_border': secondFormGroup.controls['collegeName'].touched && secondFormGroup.controls['collegeName'].errors}\">\n                                <span class=\"errorTxt\" *ngIf=\"(secondFormGroup.controls['collegeName'].touched && secondFormGroup.controls['collegeName'].errors && secondFormGroup.controls['collegeName'].errors.required)\">Please Provide College Name</span>\n                                <span class=\"errorTxt\" *ngIf=\"(secondFormGroup.controls['collegeName'].touched && secondFormGroup.controls['collegeName'].errors && secondFormGroup.controls['collegeName'].errors.pattern)\">Numbers Not Allowed</span>\n                            </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"passPercentage\">Percentage</label>\n                            <input placeholder=\"90.99\" type=\"number\" class=\"form-control\" [(ngModel)]=\"qualEditData.passPercentage\" id=\"passPercentage\"\n                                formControlName=\"passPercentage\" [ngClass]=\"{'form-control':true,'red_border': secondFormGroup.controls['passPercentage'].touched && secondFormGroup.controls['passPercentage'].errors}\">\n                                <span class=\"errorTxt\" *ngIf=\"(secondFormGroup.controls['passPercentage'].touched && secondFormGroup.controls['passPercentage'].errors && secondFormGroup.controls['passPercentage'].errors.required)\">\n                                    Please Enter Percentage\n                                </span>\n                                <span class=\"errorTxt\" *ngIf=\"secondFormGroup.controls['passPercentage'].touched && secondFormGroup.controls['passPercentage'].errors && secondFormGroup.controls['passPercentage'].errors.max\">\n                                    Please Enter Valid Percentage\n                                </span>\n                            </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"yearOfCompletion\">Year of Completion</label>\n                            <input type=\"number\" placeholder=\"2019\" class=\"form-control\" id=\"yearOfCompletion\" formControlName=\"yearOfCompletion\" [(ngModel)]=\"qualEditData.yearOfCompletion\"\n                                [ngClass]=\"{'form-control':true,'red_border': secondFormGroup.controls['yearOfCompletion'].touched && secondFormGroup.controls['yearOfCompletion'].errors}\">\n                                <span class=\"errorTxt\" *ngIf=\"(secondFormGroup.controls['yearOfCompletion'].touched &&secondFormGroup.controls['yearOfCompletion'].errors) || (QualSubmit &&secondFormGroup.controls['yearOfCompletion'].errors)\">Please Enter Year of Completion, Year Should not be More than the Current Year</span>\n                                <!-- <span class=\"errorTxt\" \n                            *ngIf=\"secondFormGroup.controls['yearOfCompletion'].errors\">Please Enter Valid Mobile Number</span> -->\n                        </div>\n                    </div>\n                </form>\n            </div>\n\n            <!-- Modal footer -->\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"editQualification(qual,i)\" [disabled]=\"secondFormGroup.invalid\">Update</button>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"certEditModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n            <!-- Modal Header -->\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Certification Details</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n\n            <!-- Modal body -->\n            <div class=\"modal-body\">\n                <form [formGroup]=\"certificateFormGroup\" class=\"row\">\n                    <!-- <ng-template matStepLabel>Fill out your address</ng-template> -->\n                    <input type=\"hidden\" [(ngModel)]=\"qualEditData.candidateCertificationId\" id=\"candidateCertificationId\"\n                    formControlName=\"candidateCertificationId\">\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"certificationName\">Certification Name</label>\n                            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"certEditData.certificationName\" id=\"certificationName\" formControlName=\"certificationName\"\n                                [ngClass]=\"{'form-control':true,'red_border': certificateFormGroup.controls['certificationName'].touched && certificateFormGroup.controls['certificationName'].errors}\">\n                                <span class=\"errorTxt\" *ngIf=\"(certificateFormGroup.controls['certificationName'].touched && certificateFormGroup.controls['certificationName'].errors)\">Please Mention Certification Name</span>\n                            </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"yearOfCompletion\">Year of Completion</label>\n                            <input type=\"number\" minlength=\"4\" maxlength=\"4\" [(ngModel)]=\"certEditData.yearOfCompletion\" class=\"form-control\" id=\"yearOfCompletion\"\n                                formControlName=\"yearOfCompletion\" [ngClass]=\"{'form-control':true,'red_border': certificateFormGroup.controls['yearOfCompletion'].touched && certificateFormGroup.controls['yearOfCompletion'].errors}\">\n                                <span class=\"errorTxt\" *ngIf=\"(certificateFormGroup.controls['yearOfCompletion'].touched && certificateFormGroup.controls['yearOfCompletion'].errors) || (CertSubmit && certificateFormGroup.controls['yearOfCompletion'].errors && certificateFormGroup.controls['yearOfCompletion'].errors.required)\">Please Enter Year of Completion, Year Should not be More than the Current Year</span>\n                            </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <div class=\"form-group\">\n                            <label for=\"passPercentage\">Percentage / CGPA</label>\n                            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"certEditData.passPercentage\" id=\"passPercentage\" formControlName=\"passPercentage\"\n                                [ngClass]=\"{'form-control':true,'red_border': certificateFormGroup.controls['passPercentage'].touched && certificateFormGroup.controls['passPercentage'].errors}\">\n                                <span class=\"errorTxt\" *ngIf=\"(certificateFormGroup.controls['passPercentage'].touched && certificateFormGroup.controls['passPercentage'].errors && certificateFormGroup.controls['passPercentage'].errors.required)\">Please Enter Percentage</span>\n                                <!-- <span class=\"errorTxt\" *ngIf=\"certificateFormGroup.controls['passPercentage'].touched && certificateFormGroup.controls['passPercentage'].errors && certificateFormGroup.controls['passPercentage'].errors.pattern\">\n                                Must be a number with up to 2 decimal places may have %</span> -->\n                                <span class=\"errorTxt\" *ngIf=\"certificateFormGroup.controls['passPercentage'].touched && certificateFormGroup.controls['passPercentage'].errors && certificateFormGroup.controls['passPercentage'].errors.max\">\n                                    Please Enter Valid Percentage</span>\n                            </div>\n                    </div>\n\n                </form>\n            </div>\n\n            <!-- Modal footer -->\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"editCertification(cert,i)\" [disabled]=\"certificateFormGroup.invalid\">Update</button>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"expDetailModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n            <!-- Modal Header -->\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Experience Details</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n\n            <!-- Modal body -->\n            <div class=\"modal-body\">\n                <form [formGroup]=\"thirdFormGroup\" class=\"row\">\n                    <!-- <ng-template matStepLabel>Fill out your address</ng-template> -->\n                    <input type=\"hidden\" [(ngModel)]=\"qualEditData.candidateProfessionalDetailsId\" id=\"candidateProfessionalDetailsId\"\n                    formControlName=\"candidateProfessionalDetailsId\">\n                    <div class=\"col-sm-5\">\n                        <div class=\"form-group\">\n                            <label for=\"companyName\">Company Name</label>\n                            <input type=\"text\" placeholder=\"Nexiilabs\" class=\"form-control\" [(ngModel)]=\"expDetails.companyName\" id=\"companyName\" formControlName=\"companyName\"\n                                [ngClass]=\"{'form-control':true,'red_border': thirdFormGroup.controls['companyName'].touched && thirdFormGroup.controls['companyName'].errors}\">\n                                <span class=\"errorTxt\" *ngIf=\"(thirdFormGroup.controls['companyName'].touched && thirdFormGroup.controls['companyName'].errors && thirdFormGroup.controls['companyName'].errors.required)\">\n                                        Please Provide the Company Name\n                                    </span>\n                                    <span class=\"errorTxt\" *ngIf=\"(thirdFormGroup.controls['companyName'].touched && thirdFormGroup.controls['companyName'].errors && thirdFormGroup.controls['companyName'].errors.pattern)\">\n                                        Numbers Not Allowed\n                                    </span>\n                            </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <div class=\"form-group\">\n                            <label for=\"designation\">Designation</label>\n                            <input placeholder=\"MTS-1\" type=\"text\" class=\"form-control\" [(ngModel)]=\"expDetails.designation\" id=\"designation\" formControlName=\"designation\"\n                                [ngClass]=\"{'form-control':true,'red_border': thirdFormGroup.controls['designation'].touched && thirdFormGroup.controls['designation'].errors}\">\n                                <span class=\"errorTxt\" *ngIf=\"(thirdFormGroup.controls['designation'].touched && thirdFormGroup.controls['designation'].errors)\">\n                                        Please Provide the Designation\n                                    </span>\n                            </div>\n                    </div>\n                    <div class=\"col-sm-3\"></div>\n                    <div class=\"col-sm-5\" *ngIf=\"expDetails && expDetails.startDate\">\n                        <div class=\"form-group\">\n                            <label class=\"d-block\" for=\"startDate\">Start Date</label>\n                            <mat-form-field>\n                                <input placeholder=\"MM/DD/YYYY\" matInput [max]=\"todayDate\" [matDatepicker]=\"picker\" id=\"startDate\" formControlName=\"startDate\" [ngClass]=\"{'form-control':true,'red_border': thirdFormGroup.controls['startDate'].touched && thirdFormGroup.controls['startDate'].errors}\">\n                                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                                <mat-datepicker #picker></mat-datepicker>\n                            </mat-form-field>\n                            <span class=\"errorTxt\" *ngIf=\"(thirdFormGroup.controls['startDate'].touched && thirdFormGroup.controls['startDate'].errors)\">\n                                    Please Mention the Start Date\n                                </span>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-4\" *ngIf='!checkbox.checked'>\n                        <div class=\"form-group\">\n                            <label class=\"d-block\" for=\"endDate\">End Date</label>\n                            <mat-form-field>\n                                <input placeholder=\"MM/DD/YYYY\" matInput [max]=\"todayDate\" [matDatepicker]=\"picker1\" id=\"endDate\" formControlName=\"endDate\" [ngClass]=\"{'form-control':true,'red_border': thirdFormGroup.controls['endDate'].touched && thirdFormGroup.controls['endDate'].errors}\">\n                                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                                <mat-datepicker #picker1></mat-datepicker>\n                            </mat-form-field>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-3\" style=\"padding-top: 2.25rem;\">\n                        <mat-checkbox formControlName=\"currentWorking\" #checkbox [ngClass]=\"{'red_border': thirdFormGroup.controls['currentWorking'].touched && thirdFormGroup.controls['currentWorking'].errors}\">\n                            Currently Working here\n                        </mat-checkbox>\n                    </div>\n                    <div class=\"col-sm-5\">\n                        <div class=\"form-group\">\n                            <label for=\"location\">Location</label>\n                            <input placeholder=\"Hyderabad\" type=\"text\" [(ngModel)]=\"expDetails.location\" class=\"form-control\" id=\"location\" formControlName=\"location\"\n                                [ngClass]=\"{'form-control':true,'red_border': thirdFormGroup.controls['location'].touched && thirdFormGroup.controls['location'].errors}\">\n                                <span class=\"errorTxt\" *ngIf=\"(thirdFormGroup.controls['location'].touched && thirdFormGroup.controls['location'].errors && thirdFormGroup.controls['location'].errors.required)\">\n                                        Please Provide the Location\n                                    </span>\n                                    <span class=\"errorTxt\" *ngIf=\"(thirdFormGroup.controls['location'].touched && thirdFormGroup.controls['location'].errors && thirdFormGroup.controls['location'].errors.pattern)\">\n                                        Numbers Not Allowed\n                                    </span>\n                            </div>\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <div class=\"form-group\">\n                            <label for=\"modeOfEmployement\">Mode of Employment</label>\n                            <select class=\"form-control\" id=\"modeOfEmployement\" [(ngModel)]=\"expDetails.modeOfEmployement\" formControlName=\"modeOfEmployement\"\n                                [ngClass]=\"{'form-control':true,'red_border': thirdFormGroup.controls['modeOfEmployement'].touched && thirdFormGroup.controls['modeOfEmployement'].errors}\">\n                                <option [selected]=\"true\" disabled>Select Mode</option>\n                                <option>Permanent</option>\n                                <option>Contract</option>\n                            </select>\n                            <span class=\"errorTxt\" *ngIf=\"(thirdFormGroup.controls['modeOfEmployement'].touched && thirdFormGroup.controls['modeOfEmployement'].errors)\">\n                                    Please Select the Mode of Employment\n                                </span>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-3\"></div>\n                    <div class=\"col-sm-5\">\n                        <div class=\"row\">\n                            <div class=\"col-sm-8\">\n                                <div class=\"form-group\">\n                                    <label for=\"salary\">Salary (Lacs Per Annum)</label>\n                                    <input placeholder=\"5\" type=\"number\" [(ngModel)]=\"expDetails.salary\" class=\"form-control\" id=\"salary\" formControlName=\"salary\"\n                                        [ngClass]=\"{'form-control':true,'red_border': thirdFormGroup.controls['salary'].touched && thirdFormGroup.controls['salary'].errors}\">\n                                        <span class=\"errorTxt\" *ngIf=\"(thirdFormGroup.controls['salary'].touched && thirdFormGroup.controls['salary'].errors && thirdFormGroup.controls['salary'].errors.required)\">\n                                            Please Enter the salary\n                                        </span>\n                                    </div>\n                            </div>\n                            <div class=\"col-sm-4\">\n                                <div class=\"form-group\">\n                                    <label for=\"currency\">Currency</label>\n                                    <select class=\"form-control\" id=\"currency\" [(ngModel)]=\"expDetails.currency\" formControlName=\"currency\" [ngClass]=\"{'form-control':true,'red_border': thirdFormGroup.controls['currency'].touched && thirdFormGroup.controls['currency'].errors}\">\n                                        <option [selected]=\"true\" disabled>Select Currency</option>\n                                        <option>INR</option>\n                                        <option>USD</option>\n                                    </select>\n                                    <span class=\"errorTxt\" *ngIf=\"(thirdFormGroup.controls['currency'].touched && thirdFormGroup.controls['currency'].errors)\">\n                                            Please Select the Currency\n                                        </span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- <div class=\"col-sm-4\">\n                    <button class=\"btn btn-success save_btn\" (click)=\"updateExp(thirdFormGroup)\">Update</button>\n                </div> -->\n\n                </form>\n            </div>\n\n            <!-- Modal footer -->\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"updateExp(thirdFormGroup)\" \n                    [disabled]=\"!thirdFormGroup.valid\">Update</button>\n            </div>\n\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/candidate-walkin-otp/candidate-walkin-otp.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/candidate-walkin-otp/candidate-walkin-otp.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<block-ui>\n       \n    </block-ui>\n    <div class=\"login_section\">\n        <div class=\"login-gradient\">\n            <div class=\"coccon_title\">\n                <img src=\"./../../../assets/images/ncd_finalized_logo.png\" width=\"144px\" height=\"50px\" style=\"margin:0.28rem;padding-top:2px ;padding-bottom:2px ;\" />\n            </div>\n            <div class=\"\">\n                <div class=\"col-sm-4 pl-4 pr-4 pt-5 pb-5 form_center rounded\">\n                    <div class=\"login_round_img boxShadow\">\n                        <img src=\"./../../../assets//images/boy.png\">\n                    </div>\n                    <form>\n                        <!-- <div class=\"form-group flname_inline pr-3\">\n                            <label for=\"fname\">First Name</label>\n                            <input type=\"text\" class=\"form-control\" id=\"fname\" name=\"fname\">\n                        </div>\n                        <div class=\"form-group flname_inline pl-3\">\n                            <label for=\"lname\">Last Name</label>\n                            <input type=\"text\" class=\"form-control\" id=\"lname\" name=\"lname\">\n                        </div> -->\n                        <div class=\"form-group mt-4\">\n                            <label for=\"lname\">Enter Unique Code (\n                                <small>ex. DIVYV28ZBFP0</small> )</label>\n                            <input type=\"text\" class=\"form-control\" id=\"otp\" name=\"otp\"\n                                [(ngModel)]=\"otp\">\n                            <p class=\"text-right\">\n                                <small>OTP is sent to your registered mobile email</small>\n                            </p>\n                        </div>\n                        <div class=\"text-center\">\n                            <button type=\"submit\" class=\"btn btn-primary\" \n                                (click)=\"getCandidateDetails()\">Proceed</button>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/Components/candidate-registration/candidate-registration.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/Components/candidate-registration/candidate-registration.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tenant_reg_sec{\n    height:100%;\n    /* background-color: #12BCFF; */\n    /* background-color: #D63031; */\n    background-color: #2ECC71;\n    /* background-image: url('./../../../assets/images/office_building.jpg'); */\n    background-size: cover;\n    position: fixed;\n    overflow:auto;\n}\n.tenant_reg_gradient{\n    /* background-image: linear-gradient(0.40turn,rgba(61, 112, 178, 0.89), rgba(65, 214, 195, 0.89),rgba(85, 150, 230, 0.89)); */\n    height: 100%;\n    overflow:auto;\n}\n.coc_title{\n    color: #ffffff;\n    font-weight: 700; \n}\n.submit_btn{\n    /* background-color: #19bbfc; */\n    /* background-color: #d63732; */\n    background-color: #2ECC71;\n    color: #ffffff;\n    padding: 5px 40px;\n}\n.another_btn{\n    border:1px solid #707070;\n    color:#707070;\n}\n.reg_title{\n    /* color: #19bbfc; */\n    /* color: #d63732; */\n    color: #2ECC71;\n}\n.qual_hr{\n    border-top: 2px dashed #1CBC90; \n}\n.qual_icon i{\n    color: #1CBC90;\n    position: relative;\n    top: 3px;\n    left: 10px;\n    font-size: 20px;\n}\n.cert_icon i{\n    color: #FA7070;\n    position: relative;\n    top: 3px;\n    left: 10px;\n    font-size: 20px;\n    cursor: pointer;\n}\n.test_tile{\n    color:#ffffff;\n}\n.test_tile hr{\n    border-width: 1px;\n    width: 25%;\n    border-color: #ffffff;\n    margin: 0 auto;\n}\n.qual_icon i{\n    cursor: pointer;\n}\ninput::-webkit-input-placeholder{\n    opacity:0.5\n}\n.scheduledDob{\n    pointer-events: none;\n    cursor: not-allowed;\n}\n.scheduledDob input{\n    background-color: #e9ecef; \n}\n.disabledClass{\n    pointer-events: none;\n    cursor: not-allowed;\n    background-color: #e9ecef; \n}\n.disabledClass_dob{\n   \n}\n.disabledClass_dob input{\n    background-color: #e9ecef; \n    pointer-events: none;\n    cursor: not-allowed;\n}\n.save_btn{\n    margin-top: 30px;\n    width: 100%;\n    background-color: #1CBC90;\n    color: #ffffff;\n    border-color: #1CBC90;\n}\n#expDetailModal .modal-dialog{\n    max-width: 1000px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9jYW5kaWRhdGUtcmVnaXN0cmF0aW9uL2NhbmRpZGF0ZS1yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCwrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QiwyRUFBMkU7SUFDM0Usc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSw2SEFBNkg7SUFDN0gsWUFBWTtJQUNaLGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQztBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixxQkFBcUI7SUFDckIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3QjtBQUNBOztBQUVBO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsY0FBYztJQUNkLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9jYW5kaWRhdGUtcmVnaXN0cmF0aW9uL2NhbmRpZGF0ZS1yZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZW5hbnRfcmVnX3NlY3tcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMTJCQ0ZGOyAqL1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNENjMwMzE7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJFQ0M3MTtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9vZmZpY2VfYnVpbGRpbmcuanBnJyk7ICovXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgb3ZlcmZsb3c6YXV0bztcbn1cbi50ZW5hbnRfcmVnX2dyYWRpZW50e1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwLjQwdHVybixyZ2JhKDYxLCAxMTIsIDE3OCwgMC44OSksIHJnYmEoNjUsIDIxNCwgMTk1LCAwLjg5KSxyZ2JhKDg1LCAxNTAsIDIzMCwgMC44OSkpOyAqL1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzphdXRvO1xufVxuLmNvY190aXRsZXtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXdlaWdodDogNzAwOyBcbn1cbi5zdWJtaXRfYnRue1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMxOWJiZmM7ICovXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2Q2MzczMjsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkVDQzcxO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDVweCA0MHB4O1xufVxuLmFub3RoZXJfYnRue1xuICAgIGJvcmRlcjoxcHggc29saWQgIzcwNzA3MDtcbiAgICBjb2xvcjojNzA3MDcwO1xufVxuLnJlZ190aXRsZXtcbiAgICAvKiBjb2xvcjogIzE5YmJmYzsgKi9cbiAgICAvKiBjb2xvcjogI2Q2MzczMjsgKi9cbiAgICBjb2xvcjogIzJFQ0M3MTtcbn1cbi5xdWFsX2hye1xuICAgIGJvcmRlci10b3A6IDJweCBkYXNoZWQgIzFDQkM5MDsgXG59XG4ucXVhbF9pY29uIGl7XG4gICAgY29sb3I6ICMxQ0JDOTA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogM3B4O1xuICAgIGxlZnQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLmNlcnRfaWNvbiBpe1xuICAgIGNvbG9yOiAjRkE3MDcwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDNweDtcbiAgICBsZWZ0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4udGVzdF90aWxle1xuICAgIGNvbG9yOiNmZmZmZmY7XG59XG4udGVzdF90aWxlIGhye1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIHdpZHRoOiAyNSU7XG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuLnF1YWxfaWNvbiBpe1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbmlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye1xuICAgIG9wYWNpdHk6MC41XG59XG4uc2NoZWR1bGVkRG9ie1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uc2NoZWR1bGVkRG9iIGlucHV0e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7IFxufVxuLmRpc2FibGVkQ2xhc3N7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmOyBcbn1cbi5kaXNhYmxlZENsYXNzX2RvYntcbiAgIFxufVxuLmRpc2FibGVkQ2xhc3NfZG9iIGlucHV0e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7IFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uc2F2ZV9idG57XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUNCQzkwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlci1jb2xvcjogIzFDQkM5MDtcbn1cbiNleHBEZXRhaWxNb2RhbCAubW9kYWwtZGlhbG9ne1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Components/candidate-registration/candidate-registration.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/Components/candidate-registration/candidate-registration.component.ts ***!
  \***************************************************************************************/
/*! exports provided: CandidateRegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateRegistrationComponent", function() { return CandidateRegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Services/AllServices/all-services.service */ "./src/app/Services/AllServices/all-services.service.ts");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CandidateRegistrationComponent = /** @class */ (function () {
    function CandidateRegistrationComponent(_formBuilder, router, datePipe, activeRoute, apiService) {
        var _this = this;
        this._formBuilder = _formBuilder;
        this.router = router;
        this.datePipe = datePipe;
        this.activeRoute = activeRoute;
        this.apiService = apiService;
        this.expForm = true;
        this.expDetails = {
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
        this.isEdit = true;
        this.qualEditData = {
            'qualification': null,
            'univercity': null,
            'collegeName': null,
            'passPercentage': null,
            'yearOfCompletion': null
        };
        this.certEditData = {
            'certificationName': null,
            'yearOfCompletion': null,
            'passPercentage': null
        };
        this.candidForm = {
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
        };
        this.isLinear = true;
        this.isQUal = true;
        this.qualificationList = [];
        this.certificationList = [];
        this.experienceList = [];
        this.startDOB = false;
        this.activeRoute.params.subscribe(function (params) {
            _this.encryptedToken = params['encryptedToken'];
        });
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
                this.experienceList.forEach(function (item, i) {
                    if (item['endDate'] == 'null') {
                        _this.experienceList[i]['endDate'] = null;
                    }
                    else {
                        _this.experienceList[i]['endDate'] = new Date(item['endDate']);
                    }
                    if (item['startDate'] == 'null') {
                        _this.experienceList[i]['startDate'] = null;
                    }
                    else {
                        _this.experienceList[i]['startDate'] = new Date(item['startDate']);
                    }
                    // // console.log('this.experienceListtttttttttttttttttt',this.experienceList)
                });
            }
        }
        else {
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
            };
        }
    }
    CandidateRegistrationComponent.prototype.afterEditWithBack = function (qual) {
        this.qualificationList = qual;
    };
    CandidateRegistrationComponent.prototype.ngOnDestroy = function () {
        localStorage.removeItem('regForm');
    };
    CandidateRegistrationComponent.prototype.ngOnInit = function () {
        if (this.candidForm['candidateDetails'].candidatePersonalDetails.candidateDateOfBirth != "null") {
            this.startDOB = true;
        }
        var self = this;
        $('#qualEditModal').on('hidden.bs.modal', function () {
            // // console.log("before",self.qualificationList)
            // self.qualificationList.splice(self.educIndex,1,self.qualEditBack)
            self.qualificationList[self.educIndex] = self.qualEditBack;
            self.afterEditWithBack(self.qualificationList);
            self.secondFormGroup.reset();
            // // console.log("after",self.qualificationList)
        });
        $('#certEditModal').on('hidden.bs.modal', function () {
            self.certificationList.splice(self.certIndex, 1, self.certEditBack);
            self.certificateFormGroup.reset();
        });
        $('#expDetailModal').on('hidden.bs.modal', function () {
            self.experienceList.splice(self.expIndex, 1, self.expDetailsBack);
        });
        var date = new Date();
        var fullYear = date.getFullYear();
        this.firstFormGroup = this._formBuilder.group({
            candidateFirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z ]*$')]],
            candidateLastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z ]*$')]],
            candidateDateOfBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            candidateMail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            candidateGender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            candidateMobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9999999999)]],
            maritalStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            occupation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            contractPositionStatus: [false]
        });
        // this.firstFormGroup.errors
        this.secondFormGroup = this._formBuilder.group({
            candidateEducationDetailsId: [''],
            qualification: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z. ]*$')]],
            univercity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z. ]*$')]],
            collegeName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z. ]*$')]],
            // passPercentage: ['', [Validators.required, Validators.pattern('[0-9]+(\.[0-9]{1,2})?%?'),Validators.max(100)]],
            passPercentage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100)]],
            yearOfCompletion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1947), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(fullYear)]]
        });
        this.editSecondFormGroup = this._formBuilder.group({
            qualification: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            univercity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            collegeName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            // passPercentage: ['', [Validators.required, Validators.pattern('[0-9]+(\.[0-9]{1,2})?%?')]],
            passPercentage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100)]],
            yearOfCompletion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1947), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(fullYear)]]
        });
        this.certificateFormGroup = this._formBuilder.group({
            candidateCertificationId: [''],
            certificationName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            yearOfCompletion: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1947), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(fullYear)]],
            // passPercentage: ['', [Validators.required, Validators.pattern('[0-9]+(\.[0-9]{1,2})?%?'),Validators.max(100)]]
            passPercentage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(100)]],
        });
        this.thirdFormGroup = this._formBuilder.group({
            candidateProfessionalDetailsId: [''],
            companyName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z ]*$')]],
            designation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            startDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            endDate: ['',],
            currentWorking: [false],
            location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z ]*$')]],
            modeOfEmployement: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            // salary: ['', [Validators.required,Validators.pattern('^[0-9]*\.[0-9]{2}$')]],
            // salary: ['', [Validators.required, Validators.pattern('^[1-9]*$')]],
            // salary: ['', [Validators.required, Validators.pattern('[0-9]+(\.[0-9][0-9]?)?')]],
            salary: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            // contractInterest:[false,Validators.required],
            currency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    CandidateRegistrationComponent.prototype.testLinkVerify = function () {
        var _this = this;
        this.apiService.postData('testmanagement/testconfig/testlinkverification?encryptedToken=' + encodeURIComponent(this.encryptedToken), {})
            .subscribe(function (res) {
            _this.blockUI.stop();
            if (res['statusCode'] == '1') {
                _this.testTypeId = res['testTypeId'];
                _this.testTiltle = res['testTitle'];
            }
            if (_this.testTypeId == 1) {
                if (!JSON.parse(localStorage.getItem('regForm'))) {
                    _this.router.navigate(['candidate/login', _this.encryptedToken]);
                }
                _this.firstFormGroup = _this._formBuilder.group({
                    candidateFirstName: [_this.candidForm['candidateDetails'].candidatePersonalDetails.candidateFirstName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z ]*$')]],
                    candidateLastName: [_this.candidForm['candidateDetails'].candidatePersonalDetails.candidateLastName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z ]*$')]],
                    candidateDateOfBirth: [_this.candidForm['candidateDetails'].candidatePersonalDetails.candidateDateOfBirth.replace(/-/g, "/"), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    candidateMail: [_this.candidForm['candidateDetails'].candidatePersonalDetails.candidateMail, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
                    candidateGender: [_this.candidForm['candidateDetails'].candidatePersonalDetails.candidateGender, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    candidateMobile: [_this.candidForm['candidateDetails'].candidatePersonalDetails.candidateMobile, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9999999999)]],
                    maritalStatus: [_this.candidForm['candidateDetails'].candidatePersonalDetails.maritalStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    occupation: [_this.candidForm['candidateDetails'].candidatePersonalDetails.occupation, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    contractPositionStatus: [_this.candidForm['candidateDetails'].candidatePersonalDetails.contractPositionStatus == '1']
                });
                // // console.log("this.firstFormGroup......", this.firstFormGroup)
            }
            else if (_this.testTypeId == 2) {
                _this.startDOB = false;
                _this.firstFormGroup = _this._formBuilder.group({
                    candidateFirstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z ]*$')]],
                    candidateLastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z ]*$')]],
                    candidateDateOfBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    candidateMail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
                    candidateGender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    candidateMobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(9999999999)]],
                    maritalStatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    occupation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                    contractPositionStatus: [false]
                });
            }
        }, function (error) {
            _this.blockUI.stop();
        });
    };
    CandidateRegistrationComponent.prototype.eductionDetails = function (firstFormGroup) {
        this.submittedFirst = true;
        // // console.log(firstFormGroup)
        if (this.qualificationList.length > 0) {
            this.isLinear = false;
            this.isEdit = false;
        }
    };
    CandidateRegistrationComponent.prototype.addQual = function (secondFormGroup) {
        this.QualSubmit = false;
        this.isEdit = true;
        this.isQUal = true;
        this.isCertf = false;
        if (this.secondFormGroup.valid) {
            if (this.educIndex == 0 || this.educIndex) {
                this.qualificationList.splice(this.educIndex, 1, this.secondFormGroup.value);
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
    };
    CandidateRegistrationComponent.prototype.checkQualList = function () {
        // // console.log("this.qualificationList",this.qualificationList)
        if (this.qualificationList.length > 0) {
            this.isLinear = false;
            if (this.experienceList.length > 0) {
                this.expForm = false;
            }
        }
        else {
            this.apiService.errorAlert('Please Provide Atleast One Qualification to Proceed');
        }
    };
    CandidateRegistrationComponent.prototype.editExpDetails = function (exp, i) {
        this.expForm = false;
        this.expDetails = exp;
        this.expDetailsBack = __assign({}, exp);
        // this.expDetails['startDate'] = new FormControl(new Date(this.expDetails['startDate']).toISOString()).value;
        // // console.log("this.expDetails", this.expDetails)
        this.expIndex = i;
        //// // console.log("this.expDetails",this.expDetails)
        this.thirdFormGroup = this._formBuilder.group({
            candidateProfessionalDetailsId: [this.expDetails.candidateProfessionalDetailsId],
            companyName: [this.expDetails.companyName, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z ]*$')]],
            designation: [this.expDetails.designation, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            startDate: [this.expDetails.startDate, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            endDate: [this.expDetails.endDate],
            currentWorking: [this.expDetails.currentWorking],
            location: [this.expDetails.location, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z ]*$')]],
            modeOfEmployement: [this.expDetails.modeOfEmployement, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            // salary: [this.expDetails.salary, [Validators.required,Validators.pattern('[0-9]+(\.[0-9][0-9]?)?')]],
            salary: [this.expDetails.salary, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            // contractInterest:[false,Validators.required],
            currency: [this.expDetails.currency, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        $('#expDetailModal').modal('show');
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
    };
    CandidateRegistrationComponent.prototype.updateExp = function (thirdFormGroup) {
        var startDate = new Date(thirdFormGroup.value['startDate']);
        var endDate = new Date(thirdFormGroup.value['endDate']);
        if (startDate.getTime() > endDate.getTime()) {
            this.apiService.errorAlert('End Date Should be After Start Date');
            return false;
        }
        if (this.thirdFormGroup.valid) {
            var editData = __assign({}, this.thirdFormGroup.value);
            // this.qualificationList.splice(this.educIndex, 1, editData);
            if (thirdFormGroup.value['currentWorking'] || thirdFormGroup.value['endDate']) {
                this.experienceList.splice(this.expIndex, 1, editData);
                this.expDetailsBack = editData;
                if (thirdFormGroup.value['currentWorking']) {
                    delete this.experienceList[this.expIndex].endDate;
                }
                $('#expDetailModal').modal('hide');
                this.thirdFormGroup.reset();
            }
            else {
                this.apiService.errorAlert('Please Select atleast one from end date (or) Currently working');
                return false;
            }
        }
    };
    CandidateRegistrationComponent.prototype.addExp = function (thirdFormGroup) {
        this.ExpSub = true;
        if (thirdFormGroup.valid) {
            var startDate = new Date(thirdFormGroup.value['startDate']);
            var endDate = new Date(thirdFormGroup.value['endDate']);
            if (startDate.getTime() > endDate.getTime()) {
                this.apiService.errorAlert('End Date Should be After Start Date');
                return false;
            }
            if (thirdFormGroup.value['currentWorking'] || thirdFormGroup.value['endDate']) {
                this.experienceList.push(thirdFormGroup.value);
                if (thirdFormGroup.value['currentWorking']) {
                    delete this.experienceList[this.experienceList.length - 1].endDate;
                }
                this.thirdFormGroup.reset();
                this.expForm = false;
            }
            else {
                this.apiService.errorAlert('Please Select atleast one from end date (or) Currently working');
                return false;
            }
        }
        // this.experienceList.push(thirdFormGroup.value);
        // // console.log(this.firstFormGroup)
        // // console.log(this.secondFormGroup)
        // // console.log(this.thirdFormGroup)
    };
    CandidateRegistrationComponent.prototype.addExpForm = function () {
        this.expForm = true;
        this.ExpSub = false;
        this.thirdFormGroup = this._formBuilder.group({
            candidateProfessionalDetailsId: [''],
            companyName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z ]*$')]],
            designation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            startDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            endDate: ['',],
            currentWorking: [false],
            location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern('^[a-zA-Z ]*$')]],
            modeOfEmployement: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            // salary: ['', [Validators.required,Validators.pattern('^[0-9]*\.[0-9]{2}$')]],
            // salary: ['', [Validators.required, Validators.pattern('^[1-9]*$')]],
            // salary: ['', [Validators.required, Validators.pattern('[0-9]+(\.[0-9][0-9]?)?')]],
            salary: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            // contractInterest:[false,Validators.required],
            currency: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        // if(this.thirdFormGroup.valid){
        //   if(this.expIndex == 0 || this.expIndex ){
        //     this.experienceList.splice(this.expIndex,1,this.thirdFormGroup.value)
        //   }
        // }
        // this.thirdFormGroup.reset();
    };
    CandidateRegistrationComponent.prototype.addCertif = function (certificateFormGroup) {
        this.CertSubmit = false;
        this.isCertf = true;
        this.isEdit = true;
        this.isQUal = false;
        if (this.certificateFormGroup.valid) {
            if (this.certIndex == 0 || this.certIndex) {
                this.certificationList.splice(this.certIndex, 1, this.certificateFormGroup.value);
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
    };
    CandidateRegistrationComponent.prototype.careerForm = function (thirdFormGroup) {
        var _this = this;
        this.blockUI.start('Please Wait ...');
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
                personDetails['contractPositionStatus'] = "1";
            }
            else {
                personDetails['contractPositionStatus'] = "0";
            }
            personDetails['candidateDateOfBirth'] = this.convertToDate(personDetails['candidateDateOfBirth'], 'dob');
            var expList = [];
            this.experienceList.forEach(function (item) {
                item['startDate'] = _this.convertToDate(item['startDate']);
                // item['startDate'] = this.datePipe.transform(item['startDate'],'yyyy-MM-dd');
                item['endDate'] = _this.convertToDate(item['endDate']);
                // item['endDate'] = this.datePipe.transform(item['endDate'],'yyyy-MM-dd');
                ////// console.log(this.datePipe.transform(item['endDate'],'yyyy-MM-dd'));
                if (item['currentWorking']) {
                    delete item['endDate'];
                    item['currentWorking'] = 1;
                }
                else {
                    item['currentWorking'] = 0;
                }
                expList.push(item);
            });
            // 
            var data = {
                "candidatePersonalDetails": personDetails,
                "certificationDetails": this.certificationList,
                "educationDetails": this.qualificationList,
                "encryptedToken": this.encryptedToken,
                "professionalDetails": expList
            };
            this.apiService.postData('testmanagement/testconfig/candidatewalkinregistration', data)
                .subscribe(function (res) {
                _this.blockUI.stop();
                if (res['statusCode'] == "1") {
                    _this.router.navigate(['candidate/walkin', res['encryptedToken']]);
                    _this.apiService.successAlert(res['statusMessage']);
                    _this.firstFormGroup.reset();
                    _this.secondFormGroup.reset();
                    _this.certificateFormGroup.reset();
                    _this.thirdFormGroup.reset();
                }
                else {
                    _this.apiService.errorAlert(res['statusMessage']);
                }
            }, function (error) {
                _this.blockUI.stop();
            });
        }
        else {
            this.firstFormGroup.value['candidateId'] = this.candidForm['candidateDetails']['candidatePersonalDetails']['candidateId'];
            // date format
            var personDetails = this.firstFormGroup.value;
            personDetails['candidateDateOfBirth'] = this.convertToDate(personDetails['candidateDateOfBirth'], 'dob');
            if (personDetails['contractPositionStatus']) {
                personDetails['contractPositionStatus'] = "1";
            }
            else {
                personDetails['contractPositionStatus'] = "0";
            }
            var expList = [];
            this.experienceList.forEach(function (item) {
                item['startDate'] = _this.convertToDate(item['startDate']);
                // item['startDate'] = this.datePipe.transform(item['startDate'],'yyyy-MM-dd');
                item['endDate'] = _this.convertToDate(item['endDate']);
                // item['endDate'] = this.datePipe.transform(item['endDate'],'yyyy-MM-dd');
                if (item['currentWorking']) {
                    item['currentWorking'] = 1;
                }
                else {
                    item['currentWorking'] = 0;
                }
                expList.push(item);
            });
            // // console.log("hfsgdsgxgd" + this.experienceList);
            // end date format
            // // console.log(expList);
            data = {
                "candidatePersonalDetails": personDetails,
                "certificationDetails": this.certificationList,
                "educationDetails": this.qualificationList,
                "encryptedToken": this.encryptedToken,
                "professionalDetails": expList
            };
            this.apiService.postData('testmanagement/testconfig/candidateregistration', data)
                .subscribe(function (res) {
                _this.blockUI.stop();
                if (res['statusCode'] == "1" && res['examStatus'] == 'active') {
                    _this.router.navigate(['/exam', res['testInstanceId']]);
                    localStorage.setItem('encryptedToken', _this.encryptedToken);
                    _this.apiService.successAlert(res['statusMessage']);
                    _this.firstFormGroup.reset();
                    _this.secondFormGroup.reset();
                    _this.certificateFormGroup.reset();
                    _this.thirdFormGroup.reset();
                }
                else {
                    _this.apiService.errorAlert(res['statusMessage']);
                }
            }, function (error) {
                _this.blockUI.stop();
            }, function () {
                _this.blockUI.stop();
            });
        }
    };
    CandidateRegistrationComponent.prototype.convertToDate = function (dat, dob) {
        if (typeof dat == 'object') {
            var date = new Date(dat);
            var mnth;
            var day;
            if ((date.getMonth() + 1) > 9) {
                mnth = ((date.getMonth() + 1));
            }
            else {
                mnth = ("0" + (date.getMonth() + 1)).slice(-2);
            }
            if (date.getDate() > 9) {
                day = (date.getDate());
            }
            else {
                day = ("0" + date.getDate()).slice(-2);
            }
            if (dob) {
                return [day, mnth, date.getFullYear()].join("-");
            }
            else {
                return [date.getFullYear(), mnth, day].join("-");
            }
        }
        else if (typeof dat == "string") {
            var createDate = dat.split('-');
            if (dob) {
                var date = new Date(Number(createDate[2]), Number(createDate[1]) - 1, Number(createDate[0]));
            }
            else {
                var date = new Date(Number(createDate[0]), Number(createDate[1]) - 1, Number(createDate[2]));
            }
            var mnth;
            var day;
            if ((date.getMonth() + 1) > 9) {
                mnth = ((date.getMonth() + 1));
            }
            else {
                mnth = ("0" + (date.getMonth() + 1)).slice(-2);
            }
            if (date.getDate() > 9) {
                day = (date.getDate());
            }
            else {
                day = ("0" + date.getDate()).slice(-2);
            }
            if (dob) {
                return [day, mnth, date.getFullYear()].join("-");
            }
            else {
                return [date.getFullYear(), mnth, day].join("-");
            }
            // return [date.getFullYear(),mnth,day].join("-");
            // return dat;
        }
        else {
            return dat;
        }
    };
    CandidateRegistrationComponent.prototype.checkMail = function () {
        if (this.firstFormGroup.controls.candidateMail.errors && this.firstFormGroup.controls.candidateMail.errors.email) {
            return this.firstFormGroup.controls.candidateMail.errors.email;
        }
        else {
            return false;
        }
    };
    CandidateRegistrationComponent.prototype.checkMobile = function () {
        //  // console.log(this.firstFormGroup)
        if ((this.firstFormGroup.controls.candidateMobile.errors && this.firstFormGroup.controls.candidateMobile.errors.min) || this.firstFormGroup.controls.candidateMobile.errors && this.firstFormGroup.controls.candidateMobile.errors.max) {
            return true;
        }
        else {
            return false;
        }
    };
    CandidateRegistrationComponent.prototype.preventKeys = function (event) {
        event.preventDefault();
    };
    CandidateRegistrationComponent.prototype.editEducDetails = function (qual, i) {
        this.educIndex = i;
        this.qualEditData = qual;
        this.qualEditBack = __assign({}, qual);
        this.isEdit = false;
        $('#qualEditModal').modal('show');
    };
    CandidateRegistrationComponent.prototype.editCertDetails = function (cert, i) {
        this.certIndex = i;
        this.certEditData = cert;
        this.certEditBack = __assign({}, cert);
        this.isEdit = false;
        $('#certEditModal').modal('show');
    };
    CandidateRegistrationComponent.prototype.editQualification = function () {
        var editData = __assign({}, this.secondFormGroup.value);
        this.qualificationList.splice(this.educIndex, 1, editData);
        this.qualEditBack = editData;
        this.secondFormGroup.reset();
        $('#qualEditModal').modal('hide');
        // this.isCertf = false;
        // this.qualEditData = qual;
        // this.qualificationList.splice(i,1)
    };
    CandidateRegistrationComponent.prototype.editCertification = function (cert, i) {
        var editCert = __assign({}, this.certificateFormGroup.value);
        this.certificationList.splice(this.certIndex, 1, editCert);
        this.certEditBack = editCert;
        this.certificateFormGroup.reset();
        $('#certEditModal').modal('hide');
        // this.isCertf = true;
        // this.certEditData = cert;
        // this.certificationList.splice(i,1)
    };
    CandidateRegistrationComponent.prototype.saveQual = function () {
        // if (this.secondFormGroup.valid) {
        //   var secForm = this.qualificationList.find((item)=>{
        //     return item == this.secondFormGroup.value;
        //   });
        //   if (secForm == undefined) {
        this.QualSubmit = true;
        if (this.secondFormGroup.valid) {
            this.qualificationList.push(this.secondFormGroup.value);
            this.secondFormGroup.reset();
            this.isEdit = false;
            if (this.qualificationList.length > 0) {
                this.isLinear = false;
            }
        }
        //   }
        // }
    };
    CandidateRegistrationComponent.prototype.saveCert = function () {
        this.CertSubmit = true;
        if (this.certificateFormGroup.valid) {
            this.certificationList.push(this.certificateFormGroup.value);
            this.certificateFormGroup.reset();
            this.isEdit = false;
        }
    };
    CandidateRegistrationComponent.prototype.deleteQual = function (qual, i) {
        var del = confirm("Are You Sure You Want to Delete");
        if (del) {
            this.qualificationList.splice(i, 1);
            this.secondFormGroup.reset();
        }
        if (!this.qualificationList.length) {
            this.isLinear = true;
        }
    };
    CandidateRegistrationComponent.prototype.deleteCert = function (cert, i) {
        var del = confirm("Are You Sure You Want to Delete");
        if (del) {
            this.certificationList.splice(i, 1);
            this.certificateFormGroup.reset();
        }
    };
    CandidateRegistrationComponent.prototype.deleteExp = function (exp, i) {
        var del = confirm("Are You Sure You Want to Delete");
        if (del) {
            this.experienceList.splice(i, 1);
            this.thirdFormGroup.reset();
        }
    };
    CandidateRegistrationComponent.prototype.closeSecondForm = function () {
        this.isEdit = false;
        this.secondFormGroup.reset();
    };
    CandidateRegistrationComponent.prototype.closeThirdForm = function () {
        this.expForm = false;
        this.thirdFormGroup.reset();
    };
    CandidateRegistrationComponent.prototype.closeCertForm = function () {
        this.isEdit = false;
        this.certificateFormGroup.reset();
    };
    CandidateRegistrationComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_3__["AllServicesService"] }
    ]; };
    __decorate([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_4__["BlockUI"])(),
        __metadata("design:type", Object)
    ], CandidateRegistrationComponent.prototype, "blockUI", void 0);
    CandidateRegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-candidate-registration',
            template: __webpack_require__(/*! raw-loader!./candidate-registration.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/candidate-registration/candidate-registration.component.html"),
            styles: [__webpack_require__(/*! ./candidate-registration.component.css */ "./src/app/Components/candidate-registration/candidate-registration.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_3__["AllServicesService"]])
    ], CandidateRegistrationComponent);
    return CandidateRegistrationComponent;
}());



/***/ }),

/***/ "./src/app/Components/candidate-walkin-otp/candidate-walkin-otp.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/Components/candidate-walkin-otp/candidate-walkin-otp.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flname_inline{\n    width: 50%;\n    float: left;\n}\n.login_section .form-control{\n    height:42px;\n}\n.login_section{\n    /* background-color: #47bd91;\n    height: 100vh;\n    overflow-y: hidden; */\n    height:100vh;\n    /* background-image: url('./../../../assets/images/office_building.jpg'); */\n    /* background-color:#d63732; */\n    background-color: #2ECC71;\n    background-size: cover;\n}\n.login-gradient{\n    /* background-image: linear-gradient(0.40turn,rgba(61, 112, 178, 0.89), rgba(65, 214, 195, 0.89),rgba(85, 150, 230, 0.89)); */\n    height: 100vh;\n}\n.form_center{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%,-50%);\n            transform: translate(-50%,-50%);\n    background-color:#ffffff\n}\n.login_round_img{\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translatex(-50%);\n            transform: translatex(-50%);\n    background-color: #ffffff;\n    top: -19%;\n    border-radius: 50%;\n    padding: 24px;\n}\n.boxShadow{\n    box-shadow: 0 1px 5px #959595;\n}\n.login_round_img img{\n    width:60px;\n}\n.form_center .btn-primary{\n    background-color: #47bd91;\n    border-color:#47bd91;\n}\n.coccon_title{\n    position: absolute;\n    color: #ffffff;\n    top: 20px;\n    left: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9jYW5kaWRhdGUtd2Fsa2luLW90cC9jYW5kaWRhdGUtd2Fsa2luLW90cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSTs7eUJBRXFCO0lBQ3JCLFlBQVk7SUFDWiwyRUFBMkU7SUFDM0UsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLDZIQUE2SDtJQUM3SCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCx1Q0FBK0I7WUFBL0IsK0JBQStCO0lBQy9CO0FBQ0o7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxTQUFTO0lBQ1QsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9jYW5kaWRhdGUtd2Fsa2luLW90cC9jYW5kaWRhdGUtd2Fsa2luLW90cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsbmFtZV9pbmxpbmV7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBmbG9hdDogbGVmdDtcbn1cbi5sb2dpbl9zZWN0aW9uIC5mb3JtLWNvbnRyb2x7XG4gICAgaGVpZ2h0OjQycHg7XG59XG4ubG9naW5fc2VjdGlvbntcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjNDdiZDkxO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuOyAqL1xuICAgIGhlaWdodDoxMDB2aDtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9vZmZpY2VfYnVpbGRpbmcuanBnJyk7ICovXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjojZDYzNzMyOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRUNDNzE7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbi5sb2dpbi1ncmFkaWVudHtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMC40MHR1cm4scmdiYSg2MSwgMTEyLCAxNzgsIDAuODkpLCByZ2JhKDY1LCAyMTQsIDE5NSwgMC44OSkscmdiYSg4NSwgMTUwLCAyMzAsIDAuODkpKTsgKi9cbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuLmZvcm1fY2VudGVye1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmZcbn1cbi5sb2dpbl9yb3VuZF9pbWd7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoLTUwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICB0b3A6IC0xOSU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBhZGRpbmc6IDI0cHg7XG59XG4uYm94U2hhZG93e1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCAjOTU5NTk1O1xufVxuLmxvZ2luX3JvdW5kX2ltZyBpbWd7XG4gICAgd2lkdGg6NjBweDtcbn1cbi5mb3JtX2NlbnRlciAuYnRuLXByaW1hcnl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ3YmQ5MTtcbiAgICBib3JkZXItY29sb3I6IzQ3YmQ5MTtcbn1cbi5jb2Njb25fdGl0bGV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHRvcDogMjBweDtcbiAgICBsZWZ0OiA0MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Components/candidate-walkin-otp/candidate-walkin-otp.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/Components/candidate-walkin-otp/candidate-walkin-otp.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CandidateWalkinOtpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateWalkinOtpComponent", function() { return CandidateWalkinOtpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Services/AllServices/all-services.service */ "./src/app/Services/AllServices/all-services.service.ts");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CandidateWalkinOtpComponent = /** @class */ (function () {
    function CandidateWalkinOtpComponent(router, activeRoute, apiService) {
        var _this = this;
        this.router = router;
        this.activeRoute = activeRoute;
        this.apiService = apiService;
        this.otp = null;
        this.activeRoute.params.subscribe(function (params) {
            _this.encryptedToken = params['encryptedToken'];
            // console.log(this.encryptedToken)
        });
    }
    CandidateWalkinOtpComponent.prototype.ngOnInit = function () {
    };
    CandidateWalkinOtpComponent.prototype.getCandidateDetails = function () {
        var _this = this;
        this.blockUI.start('Please Wait We are Verifying...');
        var data = {
        // encryptedToken : this.encryptedToken,
        // uniqueCode : this.otp         
        };
        this.apiService.postData('testmanagement/testconfig/candidatewalkinverification/?encryptedToken=' + encodeURIComponent(this.encryptedToken) + '&uniqueCode=' + this.otp, data)
            .subscribe(function (res) {
            _this.blockUI.stop();
            if (res['statusCode'] == "1" && res['examStatus'] == 'active') {
                _this.router.navigate(['/exam', res['testInstanceId']]);
                localStorage.setItem('encryptedToken', _this.encryptedToken);
            }
            else if (res['statusCode'] == "1" && res['examStatus'] == 'inprogress') {
                _this.apiService.errorAlert(res['statusMessage']);
            }
            if (res['statusCode'] == "0") {
                _this.apiService.errorAlert(res['statusMessage']);
            }
            // if(res['testTypeId'] == '2'){
            //   this.router.navigate(['/candidate/registration'])
            //   localStorage.setItem('testTypeId',res['testTypeId']);
            //   localStorage.setItem('encryptedToken',this.encryptedToken)
            // }
        }, function (error) {
            _this.blockUI.stop();
        });
    };
    CandidateWalkinOtpComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_2__["AllServicesService"] }
    ]; };
    __decorate([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_3__["BlockUI"])(),
        __metadata("design:type", Object)
    ], CandidateWalkinOtpComponent.prototype, "blockUI", void 0);
    CandidateWalkinOtpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-candidate-login',
            template: __webpack_require__(/*! raw-loader!./candidate-walkin-otp.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/candidate-walkin-otp/candidate-walkin-otp.component.html"),
            styles: [__webpack_require__(/*! ./candidate-walkin-otp.component.css */ "./src/app/Components/candidate-walkin-otp/candidate-walkin-otp.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_2__["AllServicesService"]])
    ], CandidateWalkinOtpComponent);
    return CandidateWalkinOtpComponent;
}());



/***/ }),

/***/ "./src/app/Modules/candidate-registraion/candidate-registraion-routing.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/Modules/candidate-registraion/candidate-registraion-routing.module.ts ***!
  \***************************************************************************************/
/*! exports provided: CandidateRegistraionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateRegistraionRoutingModule", function() { return CandidateRegistraionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Components_candidate_registration_candidate_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Components/candidate-registration/candidate-registration.component */ "./src/app/Components/candidate-registration/candidate-registration.component.ts");
/* harmony import */ var _Components_candidate_login_candidate_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Components/candidate-login/candidate-login.component */ "./src/app/Components/candidate-login/candidate-login.component.ts");
/* harmony import */ var _Components_candidate_walkin_otp_candidate_walkin_otp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../Components/candidate-walkin-otp/candidate-walkin-otp.component */ "./src/app/Components/candidate-walkin-otp/candidate-walkin-otp.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var routes = [{
        path: 'registration/:encryptedToken',
        component: _Components_candidate_registration_candidate_registration_component__WEBPACK_IMPORTED_MODULE_3__["CandidateRegistrationComponent"]
    },
    {
        path: 'login/:encryptedToken',
        component: _Components_candidate_login_candidate_login_component__WEBPACK_IMPORTED_MODULE_4__["CandidateLoginComponent"]
    },
    {
        path: 'walkin/:encryptedToken',
        component: _Components_candidate_walkin_otp_candidate_walkin_otp_component__WEBPACK_IMPORTED_MODULE_5__["CandidateWalkinOtpComponent"]
    }];
var CandidateRegistraionRoutingModule = /** @class */ (function () {
    function CandidateRegistraionRoutingModule() {
    }
    CandidateRegistraionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
            declarations: [_Components_candidate_registration_candidate_registration_component__WEBPACK_IMPORTED_MODULE_3__["CandidateRegistrationComponent"], _Components_candidate_login_candidate_login_component__WEBPACK_IMPORTED_MODULE_4__["CandidateLoginComponent"], _Components_candidate_walkin_otp_candidate_walkin_otp_component__WEBPACK_IMPORTED_MODULE_5__["CandidateWalkinOtpComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"],
                ng_block_ui__WEBPACK_IMPORTED_MODULE_11__["BlockUIModule"].forRoot()],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], CandidateRegistraionRoutingModule);
    return CandidateRegistraionRoutingModule;
}());



/***/ }),

/***/ "./src/app/Modules/candidate-registraion/candidate-registraion.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/Modules/candidate-registraion/candidate-registraion.module.ts ***!
  \*******************************************************************************/
/*! exports provided: CandidateRegistraionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateRegistraionModule", function() { return CandidateRegistraionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _candidate_registraion_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./candidate-registraion-routing.module */ "./src/app/Modules/candidate-registraion/candidate-registraion-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CandidateRegistraionModule = /** @class */ (function () {
    function CandidateRegistraionModule() {
    }
    CandidateRegistraionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _candidate_registraion_routing_module__WEBPACK_IMPORTED_MODULE_2__["CandidateRegistraionRoutingModule"]
            ]
        })
    ], CandidateRegistraionModule);
    return CandidateRegistraionModule;
}());



/***/ })

}]);
//# sourceMappingURL=Modules-candidate-registraion-candidate-registraion-module.js.map