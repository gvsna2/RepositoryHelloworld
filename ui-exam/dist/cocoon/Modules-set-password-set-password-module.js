(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Modules-set-password-set-password-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/set-password/set-password.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/set-password/set-password.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<block-ui>\n\n</block-ui>\n<section class=\"tenant_reg_sec\">\n    <div class=\"tenant_reg_gradient\">\n        <div class=\"form_tenant_reg\">\n            <h3 class=\" text-center signin_black\">Set Password</h3>\n            <hr class=\"signin_brdr\">\n            <div class=\"animated fadeInLeft\">\n                <form class=\"mt-4 mb-5 set_pas_frm\" #setPass=\"ngForm\">\n                    <div class=\"form-group\">\n                        <label for=\"currentpassword\">Current Password</label>\n                        <input type=\"password\" class=\"form-control\" name=\"currentpassword\" id=\"currentpassword\" #currentpassword=\"ngModel\" ngModel\n                            placeholder=\"Current Password\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"newpassword\">New Password</label>\n                        <input type=\"password\" class=\"form-control\" name=\"newpassword\" #newpassword=\"ngModel\" ngModel placeholder=\"New Password\">\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"newpassword\">Confirm Password</label>\n                        <input type=\"password\" class=\"form-control\" name=\"confirmpassword\" #confirmpassword=\"ngModel\" ngModel placeholder=\"Confirm Password\">\n                    </div>\n                    <div class=\"form-group\">\n                        <button class=\"btn btn-primary form-control\" (click)=\"setPassword(setPass)\">Confirm</button>\n                    </div>\n                </form>\n            </div>\n\n            <!-- <h4 class=\"animated slideInUp\">India's one and only leading corporate online test platform.</h4> -->\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/Components/set-password/set-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/Components/set-password/set-password.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tenant_reg_sec{\n    height:100vh;\n    background-image: url('office_building.jpg');\n    background-size: cover;\n}\n.tenant_reg_gradient{\n    background-image: linear-gradient(0.40turn,rgba(61, 112, 178, 0.89), rgba(65, 214, 195, 0.89),rgba(85, 150, 230, 0.89));\n    height: 100vh;\n}\n.coc_title{\n    color: #ffffff;\n    font-weight: 700;\n}\n.form_tenant_reg h3{\n    /* color:#ffffff; */\n    font-weight: 700;\n}\n.form_tenant_reg h4{\n    color:#ffffff;\n}\n.form_tenant_reg{\n    position: absolute;\n    /* text-align:center; */\n    top: 15%;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    background-color: #ffffff;\n    padding: 30px 0px;\n    width: 700px;\n}\n.form_tenant_reg .form-control{\n    /* width:46%; */\n    margin:0 auto;\n    padding:24px 20px;\n    border-color:#4B4B4B;\n    /* border:none; */\n    box-shadow: none;\n}\n.form_tenant_reg .btn-primary{\n    padding: 0px;\n    height: 46px;\n    /* background-color:#41D6C3;\n    border-color: #41D6C3; */\n    /* background-color:#12BCFF;\n    border-color:#12BCFF; */\n    /* background-color: #d63732;\n    border-color: #d63732; */\n    background-color: #2ECC71;\n    border-color: #2ECC71;\n}\n.form_tenant_reg .form-group{\n    /* margin-bottom:2rem; */\n}\n.form_tenant_reg .d-flex{\n    width:46%;\n    margin:0 auto;\n    color:#fff;\n}\n.active_tab::after{\n    width: 0;\n    height: 0;\n    border-left: 15px solid transparent;\n    border-right: 15px solid transparent;\n    border-bottom: 20px solid #ffffff;\n    content: \"\";\n    position: absolute;\n    left: 8px;\n    top: 44px;\n}\n.active_tab{\n    position: relative;\n    font-weight: 600;\n}\n/* new ui */\n.signin_black{\n    color:#4B4B4B;\n}\n.set_pas_frm{\n    width: 50%;\n    margin: 0 auto;\n}\n.form_tenant_reg .form-control:focus{\n    /* box-shadow: 0 0 0 0.2rem #12BCFF; */\n    /* border-color:#12BCFF; */\n    border-color: #2ECC71;\n    border-width:3px;\n}\n.signin_brdr{\n    /* border-top: 2px solid #12BCFF; */\n    /* border-top: 2px solid #d63732; */\n    border-top: 2px solid #2ECC71;\n    width: 50%;\n    margin: 6px auto;\n}\n.set_pas_frm label{\n    color:#4B4B4B;\n    font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9zZXQtcGFzc3dvcmQvc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osNENBQXFFO0lBQ3JFLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksdUhBQXVIO0lBQ3ZILGFBQWE7QUFDakI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsUUFBUTtJQUNSLFNBQVM7SUFDVCxtQ0FBMkI7WUFBM0IsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1o7NEJBQ3dCO0lBQ3hCOzJCQUN1QjtJQUN2Qjs0QkFDd0I7SUFDeEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLFVBQVU7QUFDZDtBQUNBO0lBQ0ksUUFBUTtJQUNSLFNBQVM7SUFDVCxtQ0FBbUM7SUFDbkMsb0NBQW9DO0lBQ3BDLGlDQUFpQztJQUNqQyxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0FBQ2I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFFQSxXQUFXO0FBQ1g7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztBQUNsQjtBQUNBO0lBQ0ksc0NBQXNDO0lBQ3RDLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMsbUNBQW1DO0lBQ25DLDZCQUE2QjtJQUM3QixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9zZXQtcGFzc3dvcmQvc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVuYW50X3JlZ19zZWN7XG4gICAgaGVpZ2h0OjEwMHZoO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL29mZmljZV9idWlsZGluZy5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuLnRlbmFudF9yZWdfZ3JhZGllbnR7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDAuNDB0dXJuLHJnYmEoNjEsIDExMiwgMTc4LCAwLjg5KSwgcmdiYSg2NSwgMjE0LCAxOTUsIDAuODkpLHJnYmEoODUsIDE1MCwgMjMwLCAwLjg5KSk7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cbi5jb2NfdGl0bGV7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5mb3JtX3RlbmFudF9yZWcgaDN7XG4gICAgLyogY29sb3I6I2ZmZmZmZjsgKi9cbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuLmZvcm1fdGVuYW50X3JlZyBoNHtcbiAgICBjb2xvcjojZmZmZmZmO1xufVxuLmZvcm1fdGVuYW50X3JlZ3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLyogdGV4dC1hbGlnbjpjZW50ZXI7ICovXG4gICAgdG9wOiAxNSU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDMwcHggMHB4O1xuICAgIHdpZHRoOiA3MDBweDtcbn1cbi5mb3JtX3RlbmFudF9yZWcgLmZvcm0tY29udHJvbHtcbiAgICAvKiB3aWR0aDo0NiU7ICovXG4gICAgbWFyZ2luOjAgYXV0bztcbiAgICBwYWRkaW5nOjI0cHggMjBweDtcbiAgICBib3JkZXItY29sb3I6IzRCNEI0QjtcbiAgICAvKiBib3JkZXI6bm9uZTsgKi9cbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuLmZvcm1fdGVuYW50X3JlZyAuYnRuLXByaW1hcnl7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGhlaWdodDogNDZweDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiM0MUQ2QzM7XG4gICAgYm9yZGVyLWNvbG9yOiAjNDFENkMzOyAqL1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IzEyQkNGRjtcbiAgICBib3JkZXItY29sb3I6IzEyQkNGRjsgKi9cbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZDYzNzMyO1xuICAgIGJvcmRlci1jb2xvcjogI2Q2MzczMjsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkVDQzcxO1xuICAgIGJvcmRlci1jb2xvcjogIzJFQ0M3MTtcbn1cbi5mb3JtX3RlbmFudF9yZWcgLmZvcm0tZ3JvdXB7XG4gICAgLyogbWFyZ2luLWJvdHRvbToycmVtOyAqL1xufVxuLmZvcm1fdGVuYW50X3JlZyAuZC1mbGV4e1xuICAgIHdpZHRoOjQ2JTtcbiAgICBtYXJnaW46MCBhdXRvO1xuICAgIGNvbG9yOiNmZmY7XG59XG4uYWN0aXZlX3RhYjo6YWZ0ZXJ7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkICNmZmZmZmY7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogOHB4O1xuICAgIHRvcDogNDRweDtcbn1cbi5hY3RpdmVfdGFie1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4vKiBuZXcgdWkgKi9cbi5zaWduaW5fYmxhY2t7XG4gICAgY29sb3I6IzRCNEI0Qjtcbn1cbi5zZXRfcGFzX2ZybXtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogMCBhdXRvO1xufVxuLmZvcm1fdGVuYW50X3JlZyAuZm9ybS1jb250cm9sOmZvY3Vze1xuICAgIC8qIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSAjMTJCQ0ZGOyAqL1xuICAgIC8qIGJvcmRlci1jb2xvcjojMTJCQ0ZGOyAqL1xuICAgIGJvcmRlci1jb2xvcjogIzJFQ0M3MTtcbiAgICBib3JkZXItd2lkdGg6M3B4O1xufVxuLnNpZ25pbl9icmRye1xuICAgIC8qIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMTJCQ0ZGOyAqL1xuICAgIC8qIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZDYzNzMyOyAqL1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMkVDQzcxO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiA2cHggYXV0bztcbn1cbi5zZXRfcGFzX2ZybSBsYWJlbHtcbiAgICBjb2xvcjojNEI0QjRCO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/Components/set-password/set-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Components/set-password/set-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: SetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPasswordComponent", function() { return SetPasswordComponent; });
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




var SetPasswordComponent = /** @class */ (function () {
    function SetPasswordComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
    }
    SetPasswordComponent.prototype.ngOnInit = function () {
    };
    SetPasswordComponent.prototype.setPassword = function (setPass) {
        var _this = this;
        var data = setPass.value;
        data['jwtToken'] = localStorage.getItem('token');
        var queryString = Object.keys(data).map(function (key) { return key + '=' + data[key]; }).join('&');
        if (setPass['newpassword'] == setPass['confirmpassword']) {
            this.blockUI.start('Please Wait we are Changing password...');
            this.apiService.postData('auth/authentication/changepassword?' + queryString, {})
                .subscribe(function (res) {
                _this.blockUI.stop();
                if (res['statusCode'] == '1') {
                    setPass.reset();
                    var role = JSON.parse(localStorage.getItem('role'));
                    // console.log(role.id);
                    if (role.id == "4") {
                        _this.router.navigate(['/evaluate-tests'])
                            .then(function () {
                            _this.apiService.successAlert(res['message']);
                        });
                    }
                    else {
                        _this.router.navigate(['/dashboard'])
                            .then(function () {
                            _this.apiService.successAlert(res['message']);
                        });
                    }
                }
                else {
                    _this.apiService.errorAlert(res['message']);
                }
            }, function (error) {
                _this.blockUI.stop();
                _this.apiService.errorAlert(error['message']);
            });
        }
        else {
            this.apiService.errorAlert('Password do not match');
        }
    };
    SetPasswordComponent.ctorParameters = function () { return [
        { type: _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_2__["AllServicesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    __decorate([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_3__["BlockUI"])(),
        __metadata("design:type", Object)
    ], SetPasswordComponent.prototype, "blockUI", void 0);
    SetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-set-password',
            template: __webpack_require__(/*! raw-loader!./set-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/set-password/set-password.component.html"),
            styles: [__webpack_require__(/*! ./set-password.component.css */ "./src/app/Components/set-password/set-password.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_2__["AllServicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SetPasswordComponent);
    return SetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/Modules/set-password/set-password-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/Modules/set-password/set-password-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: SetPasswordRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPasswordRoutingModule", function() { return SetPasswordRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Components_set_password_set_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Components/set-password/set-password.component */ "./src/app/Components/set-password/set-password.component.ts");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [{
        path: "",
        component: _Components_set_password_set_password_component__WEBPACK_IMPORTED_MODULE_4__["SetPasswordComponent"]
    }];
var SetPasswordRoutingModule = /** @class */ (function () {
    function SetPasswordRoutingModule() {
    }
    SetPasswordRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_Components_set_password_set_password_component__WEBPACK_IMPORTED_MODULE_4__["SetPasswordComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                ng_block_ui__WEBPACK_IMPORTED_MODULE_5__["BlockUIModule"].forRoot()],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SetPasswordRoutingModule);
    return SetPasswordRoutingModule;
}());



/***/ }),

/***/ "./src/app/Modules/set-password/set-password.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/Modules/set-password/set-password.module.ts ***!
  \*************************************************************/
/*! exports provided: SetPasswordModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetPasswordModule", function() { return SetPasswordModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _set_password_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set-password-routing.module */ "./src/app/Modules/set-password/set-password-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SetPasswordModule = /** @class */ (function () {
    function SetPasswordModule() {
    }
    SetPasswordModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _set_password_routing_module__WEBPACK_IMPORTED_MODULE_2__["SetPasswordRoutingModule"]
            ]
        })
    ], SetPasswordModule);
    return SetPasswordModule;
}());



/***/ })

}]);
//# sourceMappingURL=Modules-set-password-set-password-module.js.map