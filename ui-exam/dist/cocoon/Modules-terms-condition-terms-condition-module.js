(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Modules-terms-condition-terms-condition-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/terms-condition/terms-condition.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/terms-condition/terms-condition.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"terms-cond pt-4 pb-4\">\n    <h2 class=\"pb-4\">Terms & Conditions</h2>\n    <div>\n        <ol class=\"pl-4\">\n            <li>All the Questions Are Multiple Choice Questions.</li>\n            <li>Negative Marking is there for Wrong Answering.</li>\n            <li>Please Check the Timer to see time left to complete .</li>\n            <li>If you specify Wrong or Duplicate Information for Registration you will Not be Allowed. </li>\n            <li>Please Don't Press Back Button. If you try to go back your Exam will be Cancelled. </li>\n            <li>Please click on proceed to write the Test</li> \n            <li>After Completion of Test Please Click on Submit.</li>\n        </ol>\n    </div>\n    <div class=\"text-right\">\n        <button class=\"btn btn-primary\" (click)=\"acceptTerms()\">Accept</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/Components/terms-condition/terms-condition.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/Components/terms-condition/terms-condition.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".terms-cond{\n    position: absolute;\n    left: 12%;\n    top: 0px;\n}\n.terms-cond ol li{\n    margin-bottom:15px;\n}\n.terms-cond .btn-primary{\n    background-color: #47bd91;\n    border-color:#47bd91;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy90ZXJtcy1jb25kaXRpb24vdGVybXMtY29uZGl0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFFBQVE7QUFDWjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy90ZXJtcy1jb25kaXRpb24vdGVybXMtY29uZGl0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVybXMtY29uZHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTIlO1xuICAgIHRvcDogMHB4O1xufVxuLnRlcm1zLWNvbmQgb2wgbGl7XG4gICAgbWFyZ2luLWJvdHRvbToxNXB4O1xufVxuLnRlcm1zLWNvbmQgLmJ0bi1wcmltYXJ5e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0N2JkOTE7XG4gICAgYm9yZGVyLWNvbG9yOiM0N2JkOTE7XG59Il19 */"

/***/ }),

/***/ "./src/app/Components/terms-condition/terms-condition.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Components/terms-condition/terms-condition.component.ts ***!
  \*************************************************************************/
/*! exports provided: TermsConditionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionComponent", function() { return TermsConditionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Services/AllServices/all-services.service */ "./src/app/Services/AllServices/all-services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TermsConditionComponent = /** @class */ (function () {
    function TermsConditionComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
    }
    TermsConditionComponent.prototype.ngOnInit = function () {
    };
    TermsConditionComponent.prototype.acceptTerms = function () {
        var _this = this;
        var isSuperUser = localStorage.getItem('isSuper');
        var isRoleSelected = localStorage.getItem('isRoleSelected');
        this.apiService.postData('auth/authentication/agreetermsandconditions?token=' + localStorage.getItem('token'), {})
            .subscribe(function (res) {
            if (res['statusCode']) {
                if (isSuperUser == '1' && !isRoleSelected) {
                    _this.router.navigate(['/list-users']);
                }
                else if (isSuperUser == '1' && isRoleSelected) {
                    _this.router.navigate(['/dashboard']);
                }
            }
        }, function (error) {
        });
    };
    TermsConditionComponent.ctorParameters = function () { return [
        { type: _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    TermsConditionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-terms-condition',
            template: __webpack_require__(/*! raw-loader!./terms-condition.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/terms-condition/terms-condition.component.html"),
            styles: [__webpack_require__(/*! ./terms-condition.component.css */ "./src/app/Components/terms-condition/terms-condition.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TermsConditionComponent);
    return TermsConditionComponent;
}());



/***/ }),

/***/ "./src/app/Modules/terms-condition/terms-condition-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Modules/terms-condition/terms-condition-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: TermsConditionRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionRoutingModule", function() { return TermsConditionRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Components_terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Components/terms-condition/terms-condition.component */ "./src/app/Components/terms-condition/terms-condition.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: "",
        component: _Components_terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_2__["TermsConditionComponent"]
    }];
var TermsConditionRoutingModule = /** @class */ (function () {
    function TermsConditionRoutingModule() {
    }
    TermsConditionRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_Components_terms_condition_terms_condition_component__WEBPACK_IMPORTED_MODULE_2__["TermsConditionComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TermsConditionRoutingModule);
    return TermsConditionRoutingModule;
}());



/***/ }),

/***/ "./src/app/Modules/terms-condition/terms-condition.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Modules/terms-condition/terms-condition.module.ts ***!
  \*******************************************************************/
/*! exports provided: TermsConditionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionModule", function() { return TermsConditionModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _terms_condition_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terms-condition-routing.module */ "./src/app/Modules/terms-condition/terms-condition-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TermsConditionModule = /** @class */ (function () {
    function TermsConditionModule() {
    }
    TermsConditionModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _terms_condition_routing_module__WEBPACK_IMPORTED_MODULE_2__["TermsConditionRoutingModule"]
            ]
        })
    ], TermsConditionModule);
    return TermsConditionModule;
}());



/***/ })

}]);
//# sourceMappingURL=Modules-terms-condition-terms-condition-module.js.map