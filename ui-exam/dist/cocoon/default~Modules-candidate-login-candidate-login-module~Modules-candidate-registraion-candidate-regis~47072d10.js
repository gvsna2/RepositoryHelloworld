(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Modules-candidate-login-candidate-login-module~Modules-candidate-registraion-candidate-regis~47072d10"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/candidate-login/candidate-login.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/candidate-login/candidate-login.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<block-ui>\n       \n</block-ui>\n<div class=\"login_section\">\n    <div class=\"login-gradient\">\n        <div class=\"coccon_title\">\n            <img src=\"./../../../assets/images/ncd_finalized_logo.png\" width=\"144px\" height=\"50px\" style=\"margin:0.28rem;padding-top:2px ;padding-bottom:2px ;\" />\n        </div>\n        <div class=\"\">\n            <div class=\"col-sm-4 pl-4 pr-4 pt-5 pb-5 form_center rounded\">\n                <div *ngIf=\"isCandidLogin\">\n                        <div class=\"login_round_img boxShadow\">\n                                <img src=\"./../../../assets//images/boy.png\">\n                            </div>\n                            <form class=\"mt-4\">\n                                <!-- <div class=\"form-group flname_inline pr-3\">\n                                    <label for=\"fname\">First Name</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"fname\" name=\"fname\">\n                                </div>\n                                <div class=\"form-group flname_inline pl-3\">\n                                    <label for=\"lname\">Last Name</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"lname\" name=\"lname\">\n                                </div> -->\n                                <div class=\"form-group\">\n                                    <label for=\"lname\">Enter Unique Code (\n                                        <small>ex. DIVYV28ZBFP0</small> )</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"otp\" name=\"otp\"\n                                        [(ngModel)]=\"otp\">\n                                    <p class=\"text-right\">\n                                        <small>OTP is sent to your registered email</small>\n                                    </p>\n                                </div>\n                                <div class=\"text-center\">\n                                    <button type=\"submit\" class=\"btn btn-primary\" \n                                        (click)=\"getCandidateDetails()\">Proceed</button>\n                                </div>\n                            </form>\n                </div>\n                <div *ngIf=\"!isCandidLogin\" class=\"animated fadeInDown errorTxt\">\n                    <h4>Your Link is Not Active . Please Check the Link</h4>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/Components/candidate-login/candidate-login.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/Components/candidate-login/candidate-login.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flname_inline{\n    width: 50%;\n    float: left;\n}\n.login_section .form-control{\n    height:42px;\n}\n.login_section{\n    /* background-color: #47bd91;\n    height: 100vh;\n    overflow-y: hidden; */\n    height:100vh;\n    /* background-image: url('./../../../assets/images/office_building.jpg'); */\n    /* background-color:#d63732; */\n    background-color: #2ECC71;\n    background-size: cover;\n}\n.login-gradient{\n    /* background-image: linear-gradient(0.40turn,rgba(61, 112, 178, 0.89), rgba(65, 214, 195, 0.89),rgba(85, 150, 230, 0.89)); */\n    height: 100vh;\n}\n.form_center{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%,-50%);\n            transform: translate(-50%,-50%);\n    background-color:#ffffff\n}\n.login_round_img{\n    position: absolute;\n    left: 50%;\n    -webkit-transform: translatex(-50%);\n            transform: translatex(-50%);\n    background-color: #ffffff;\n    top: -19%;\n    border-radius: 50%;\n    padding: 24px;\n}\n.boxShadow{\n    box-shadow: 0 1px 5px #959595;\n}\n.login_round_img img{\n    width:60px;\n}\n.form_center .btn-primary{\n    background-color: #47bd91;\n    border-color:#47bd91;\n}\n.coccon_title{\n    position: absolute;\n    color: #ffffff;\n    top: 20px;\n    left: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9jYW5kaWRhdGUtbG9naW4vY2FuZGlkYXRlLWxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJOzt5QkFFcUI7SUFDckIsWUFBWTtJQUNaLDJFQUEyRTtJQUMzRSw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksNkhBQTZIO0lBQzdILGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHVDQUErQjtZQUEvQiwrQkFBK0I7SUFDL0I7QUFDSjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7QUFDQTtJQUNJLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFNBQVM7SUFDVCxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2NhbmRpZGF0ZS1sb2dpbi9jYW5kaWRhdGUtbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbG5hbWVfaW5saW5le1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG4ubG9naW5fc2VjdGlvbiAuZm9ybS1jb250cm9se1xuICAgIGhlaWdodDo0MnB4O1xufVxuLmxvZ2luX3NlY3Rpb257XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzQ3YmQ5MTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjsgKi9cbiAgICBoZWlnaHQ6MTAwdmg7XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvb2ZmaWNlX2J1aWxkaW5nLmpwZycpOyAqL1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6I2Q2MzczMjsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkVDQzcxO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ubG9naW4tZ3JhZGllbnR7XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDAuNDB0dXJuLHJnYmEoNjEsIDExMiwgMTc4LCAwLjg5KSwgcmdiYSg2NSwgMjE0LCAxOTUsIDAuODkpLHJnYmEoODUsIDE1MCwgMjMwLCAwLjg5KSk7ICovXG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5mb3JtX2NlbnRlcntcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmXG59XG4ubG9naW5fcm91bmRfaW1ne1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGV4KC01MCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgdG9wOiAtMTklO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwYWRkaW5nOiAyNHB4O1xufVxuLmJveFNoYWRvd3tcbiAgICBib3gtc2hhZG93OiAwIDFweCA1cHggIzk1OTU5NTtcbn1cbi5sb2dpbl9yb3VuZF9pbWcgaW1ne1xuICAgIHdpZHRoOjYwcHg7XG59XG4uZm9ybV9jZW50ZXIgLmJ0bi1wcmltYXJ5e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0N2JkOTE7XG4gICAgYm9yZGVyLWNvbG9yOiM0N2JkOTE7XG59XG4uY29jY29uX3RpdGxle1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0b3A6IDIwcHg7XG4gICAgbGVmdDogNDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Components/candidate-login/candidate-login.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Components/candidate-login/candidate-login.component.ts ***!
  \*************************************************************************/
/*! exports provided: CandidateLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateLoginComponent", function() { return CandidateLoginComponent; });
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




var CandidateLoginComponent = /** @class */ (function () {
    function CandidateLoginComponent(router, activeRoute, apiService) {
        var _this = this;
        this.router = router;
        this.activeRoute = activeRoute;
        this.apiService = apiService;
        this.isCandidLogin = true;
        this.otp = null;
        this.activeRoute.params.subscribe(function (params) {
            _this.encryptedToken = params['encryptedToken'];
            // console.log(this.encryptedToken)
        });
    }
    CandidateLoginComponent.prototype.ngOnInit = function () {
        localStorage.clear();
        this.blockUI.start('Loading...');
        this.testLinkVerify();
    };
    CandidateLoginComponent.prototype.testLinkVerify = function () {
        var _this = this;
        this.apiService.postData('testmanagement/testconfig/testlinkverification?encryptedToken=' + encodeURIComponent(this.encryptedToken), {})
            .subscribe(function (res) {
            _this.blockUI.stop();
            if (res['testTypeId'] == '2') {
                _this.router.navigate(['/candidate/registration', _this.encryptedToken]);
                // localStorage.setItem('testTypeId',res['testTypeId']);
                // localStorage.setItem('encryptedToken',this.encryptedToken)
            }
            else if (res['testTypeId'] == '1') {
                _this.isCandidLogin = true;
            }
            else {
                _this.isCandidLogin = false;
            }
        }, function (error) {
            _this.blockUI.stop();
        });
    };
    CandidateLoginComponent.prototype.getCandidateDetails = function () {
        var _this = this;
        this.apiService.getAll('testmanagement/testconfig/candidatedetails?encryptedToken=' + encodeURIComponent(this.encryptedToken) + "&uniqueCode=" + this.otp)
            .subscribe(function (res) {
            if (res['statusCode'] == 1) {
                _this.candidDetails = res;
                localStorage.setItem('regForm', JSON.stringify(_this.candidDetails));
                _this.router.navigate(['/candidate/registration', _this.encryptedToken]);
            }
            else if (res['statusCode'] == 0) {
                _this.apiService.errorAlert(res['statusMessage']);
            }
        }, function (error) {
        });
    };
    CandidateLoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_2__["AllServicesService"] }
    ]; };
    __decorate([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_3__["BlockUI"])(),
        __metadata("design:type", Object)
    ], CandidateLoginComponent.prototype, "blockUI", void 0);
    CandidateLoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-candidate-login',
            template: __webpack_require__(/*! raw-loader!./candidate-login.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/candidate-login/candidate-login.component.html"),
            styles: [__webpack_require__(/*! ./candidate-login.component.css */ "./src/app/Components/candidate-login/candidate-login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_2__["AllServicesService"]])
    ], CandidateLoginComponent);
    return CandidateLoginComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~Modules-candidate-login-candidate-login-module~Modules-candidate-registraion-candidate-regis~47072d10.js.map