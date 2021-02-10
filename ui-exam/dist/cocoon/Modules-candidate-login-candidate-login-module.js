(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Modules-candidate-login-candidate-login-module"],{

/***/ "./src/app/Modules/candidate-login/candidate-login-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Modules/candidate-login/candidate-login-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: CandidateLoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateLoginRoutingModule", function() { return CandidateLoginRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Components_candidate_login_candidate_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Components/candidate-login/candidate-login.component */ "./src/app/Components/candidate-login/candidate-login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: "",
        component: _Components_candidate_login_candidate_login_component__WEBPACK_IMPORTED_MODULE_2__["CandidateLoginComponent"]
    }];
var CandidateLoginRoutingModule = /** @class */ (function () {
    function CandidateLoginRoutingModule() {
    }
    CandidateLoginRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_Components_candidate_login_candidate_login_component__WEBPACK_IMPORTED_MODULE_2__["CandidateLoginComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CandidateLoginRoutingModule);
    return CandidateLoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/Modules/candidate-login/candidate-login.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Modules/candidate-login/candidate-login.module.ts ***!
  \*******************************************************************/
/*! exports provided: CandidateLoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateLoginModule", function() { return CandidateLoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _candidate_login_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./candidate-login-routing.module */ "./src/app/Modules/candidate-login/candidate-login-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CandidateLoginModule = /** @class */ (function () {
    function CandidateLoginModule() {
    }
    CandidateLoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _candidate_login_routing_module__WEBPACK_IMPORTED_MODULE_2__["CandidateLoginRoutingModule"]
            ]
        })
    ], CandidateLoginModule);
    return CandidateLoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=Modules-candidate-login-candidate-login-module.js.map