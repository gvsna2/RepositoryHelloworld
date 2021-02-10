(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Modules-settings-settings-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/settings/settings.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/settings/settings.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"settings_sec pt-4 pb-4 pr-5\">\n    <div class=\"\">\n        <h4>My Profile</h4>\n        <hr>\n    </div>\n\n    <div class=\"card\" *ngIf=\"userData.length\">\n        <form class=\"row profile_form\" #myForm=\"ngForm\" (ngSubmit)=\"editUser(myForm.value)\">\n            <div class=\"col-md-8\" style=\"padding: 2rem 6rem;\">\n                <div class=\"form-row\">\n                    <input type=\"hidden\" class=\"form-control\" hide id=\"userId\" name=\"userId\" ngModel={{this.userData[0].userId}} #userId=\"ngModel\"\n                        placeholder=\"\">\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"firstName\">First Name</label>\n                        <p *ngIf=\"!isEdit\">{{this.userData[0].userFirstName}}</p>\n                        <input *ngIf=\"isEdit\" type=\"text\" class=\"form-control\" id=\"firstName\" name=\"userFirstName\" ngModel={{this.userData[0].userFirstName}}\n                            placeholder=\"\">\n                    </div>\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"lastName\">Last Name</label>\n                        <p *ngIf=\"!isEdit\">{{this.userData[0].userLastName}}</p>\n                        <input *ngIf=\"isEdit\" type=\"text\" class=\"form-control\" id=\"lastName\" name=\"userLastName\" ngModel={{this.userData[0].userLastName}}\n                            placeholder=\"\">\n                    </div>\n                </div>\n                <div class=\"form-row\">\n\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"designation\">Designation</label>\n                        <p *ngIf=\"!isEdit\">{{this.userData[0].designation}}</p>\n                        <input *ngIf=\"isEdit\" type=\"text\" class=\"form-control\" id=\"designation\" name=\"designation\" ngModel={{this.userData[0].designation}}\n                            placeholder=\"\">\n                    </div>\n                    <div class=\"form-group col-md-6\">\n                        <label for=\"department\">Department</label>\n                        <p *ngIf=\"!isEdit\">{{this.userData[0].department}}</p>\n                        <input *ngIf=\"isEdit\" type=\"text\" class=\"form-control\" id=\"department\" name=\"department\" ngModel={{this.userData[0].department}}\n                            placeholder=\"\">\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <p *ngIf=\"!isEdit\">{{this.userData[0].userEmail}}</p>\n                    <input *ngIf=\"isEdit\" type=\"email\" class=\"form-control\" id=\"email\" name=\"userEmail\" ngModel={{this.userData[0].userEmail}}\n                        placeholder=\"\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"phoneNumber\">Phone Number</label>\n                    <p *ngIf=\"!isEdit\">{{this.userData[0].phoneNumber}}</p>\n                    <input *ngIf=\"isEdit\" type=\"text\" class=\"form-control\" id=\"phoneNumber\" name=\"phoneNumber\" ngModel={{this.userData[0].phoneNumber}}\n                        placeholder=\"\">\n                </div>\n                <div class=\"form-group\">\n\n                    <input type=\"hidden\" class=\"form-control\" id=\"phoneNumber\" readonly name=\"roleId\" ngModel={{this.userData[0].roleId}} placeholder=\"\">\n                </div>\n\n            </div>\n\n            <div class=\"col-md-4\" style=\"display:grid;padding: 2rem\">\n                <div class=\"profile\" style=\"text-align: center;\">\n                    \n                    <span *ngIf=\"!apiService.cfs\">\n                        <img *ngIf=\"this.userData[0].imageUrl == 'No Image For This User'\" src=\"./../../../assets/images/profile.png\" />\n                        <img *ngIf=\"this.userData[0].imageUrl != 'No Image For This User'\" [src]=\"this.userData[0].imageUrl\" >\n                       \n                    </span>\n                    <span *ngIf=\"apiService.cfs\">\n                        <img *ngIf=\"this.userData[0].viewUrl == 'No Image For This User'\" src=\"./../../../assets/images/profile.png\" />\n                        <img *ngIf=\"this.userData[0].viewUrl != 'No Image For This User'\" [src]=\"this.userData[0].viewUrl\" >\n                        \n                    </span>\n                    <label  *ngIf=\"isEdit\" class=\"fileContainer\">\n                        <span  >Update</span>\n                        \n                        <input   type=\"file\" (change)=onFileSelected($event)/>\n                    </label>\n                </div>\n               \n                <!-- <img src=\"./../../../assets/images/profile.png\" style=\"padding-left: 7rem;max-width: 65%;margin-bottom: -4rem;\"> -->\n                <!-- <img src=\"./../../../assets/images/profile.png\" style=\"padding-left: 7rem;max-width: 65%;\"> -->\n               <div style=\"    text-align: center;\n               margin-top: -6rem;\n               padding-left: 1rem;\">\n               \n               </div>\n                \n                <!-- <input *ngIf=\"isEdit\"  type=\"file\" (change)=onFileSelected($event); /> -->\n                <!-- <button *ngIf=\"isEdit\" type=\"button\" class=\"btn btn-primary\" style=\"height: 25px;line-height: 14px;margin-top: -5rem;font-size: 12px;\n                        width: 50%;margin-left: 4.5rem;background: #41D6C3;border: 1px solid #41D6C3;\">Upload</button> -->\n            </div>\n            <div class=\"col-md-12\">\n                <button type=\"button\" *ngIf=\"isEdit\" (click)=\"cancelEdit()\" class=\"btn btn-danger\" style=\"float: right;\n                    height: 30px;line-height: 17px;border-radius: 0px;width: 110px;font-weight: 600;font-size: 15px;\">Cancel</button>\n                <button type=\"submit\" *ngIf=\"isEdit\" class=\"btn btn-primary\" style=\"float: right;background: #3D70B2;margin-right:20px;\n                border: 1px solid #3D70B2;height: 30px;line-height: 17px;border-radius: 0px;width: 110px;font-weight: 600;font-size: 15px;\">Save</button>\n                <button type=\"button\" *ngIf=\"!isEdit\" (click)=\"editUserDet()\" class=\"btn btn-danger\" style=\"float: right;\n                height: 30px;line-height: 17px;border-radius: 0px;width: 110px;font-weight: 600;font-size: 15px;\">Edit</button>\n            </div>\n        </form>\n\n    </div>\n</div>\n\n<div class=\"settings_sec pt-4 pb-4 pr-5\" *ngIf=\"isSuperUser()\">\n    <div class=\"\">\n            <popover-content #rolePermissions \n            title=\"\"\n            placement=\"right\"\n            [animation]=\"true\" \n             style=\"box-shadow: 10px 10px 5px #aaaaaa;\">\n            <span style=\"color: #646363;\"> Use this to grant permissions to users.</span>  \n            \n            </popover-content>          \n        <h4>Role Permissions <span><i style=\"    font-size: 13px;color: #969696;top: 2px;\"  [popoverOnHover]=\"true\" [popover]=\"rolePermissions\" class=\"material-icons\">info</i></span></h4>\n        <hr>\n    </div>\n    <div>\n            <!-- <button id=\"perm_modal\" type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#permissionModal\">\n                    Open modal\n                </button> -->\n                <!-- The Modal -->\n                <div>\n                    <div class=\"\">\n                        <div class=\"\">\n                \n                            <!-- Modal Header -->\n                            <!-- <div class=\"modal-header\">\n                                <h4 class=\"modal-title\">Select Your Roles</h4>\n                                <button type=\"button\" id=\"close_perm_modal\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                            </div> -->\n                \n                            <!-- Modal body -->\n                            <div class=\"card\">\n                                <div class=\"row\" *ngIf=\"!useRoles\">\n                                    <div class=\"col-sm-12 text-center errorTxt\">\n                                        <p><b>Please Wait! We Are Fetching Roles ...</b></p>\n                                    </div>\n                                </div>\n                                <div class=\"row role_checkbox_sett\" *ngIf=\"useRoles && useRoles['allRoles'].length\">\n                                    <!-- <div class=\"col-sm-12\" *ngFor=\"let role of useRoles['allRoles']\">\n                                        <mat-checkbox class=\"example-margin\" [color]=\"color\" [checked]=\"role.roleName == 'Admin'\" [disabled]=\"role.roleName == 'Admin'\"\n                                            (click)=\"selectRole(role.roleId)\">\n                                            {{role.roleName}}\n                                        </mat-checkbox>\n                                    </div> -->\n                                    <div class=\"col-sm-6 mt-5 pl-5 pr-5\" *ngFor=\"let role of useRoles['allRoles']\">\n                                        <div class=\"d-flex boxShadow\" *ngIf=\"role.roleName == 'Admin'\">\n                                            <div class=\"admin_role\">\n                                                <div>\n                                                    <img src=\"./../../../assets/images/student.png\" alt=\"employee\">\n                                                </div>\n                                                <p>\n                                                    <b>Admin</b>\n                                                </p>\n                                            </div>\n                                            <div class=\"flex-fill\">\n                                                <p class=\"mb-0 text-right mt-2 mr-2\">\n                                                    <mat-checkbox class=\"example-margin\" [color]=\"color\" [checked]=\"role.roleName == 'Admin'\" [disabled]=\"role.roleName == 'Admin'\" (click)=\"selectRole(role.roleId)\">\n                                                        <!-- {{role.roleName}} -->\n                                                    </mat-checkbox>\n                                                </p>\n                                                <ul>\n                                                    <li>User Creation</li>\n                                                </ul>\n                                            </div>\n                                        </div>\n                                        <div class=\"d-flex boxShadow\" *ngIf=\"role.roleName == 'Test Manager'\">\n                                            <div class=\"test_role\">\n                                                <div>\n                                                    <img src=\"./../../../assets/images/student.png\" alt=\"employee\">\n                                                </div>\n                                                <p>\n                                                    <b>Test Manager</b>\n                                                </p>\n                                            </div>\n                                            <div class=\"flex-fill\">\n                                                <p class=\"mb-0 text-right mt-2 mr-2\">\n                                                    <mat-checkbox class=\"example-margin\" [color]=\"color\" [checked]=\"role.roleName == 'Admin'\" [disabled]=\"role.roleName == 'Admin'\" \n                                                    [(ngModel)]=\"rolesPermArr[0]\" (click)=\"updateRoles('3',rolesPermArr[0])\" [checked]=\"disableTestManager()\">\n                                                        <!-- {{role.roleName}} -->\n                                                    </mat-checkbox>\n                                                </p>\n                \n                                                <ul>\n                                                    <li>Test & Test Instance Creation</li>\n                                                    <li>Test Administraion</li>\n                                                    <li>Section & Category Management </li>\n                                                    <li>Reports </li>\n                                                    <li>Sub Category Management </li>\n                                                </ul>\n                                            </div>\n                                        </div>\n                                        <div class=\"d-flex boxShadow\" *ngIf=\"role.roleName == 'Evaluator'\">\n                                            <div class=\"eval_role\">\n                                                <div>\n                                                    <img src=\"./../../../assets/images/student.png\" alt=\"employee\">\n                                                </div>\n                                                <p>\n                                                    <b>Evaluator</b>\n                                                </p>\n                                            </div>\n                                            <div class=\"flex-fill\">\n                                                <p class=\"mb-0 text-right mt-2 mr-2\">\n                                                    <mat-checkbox class=\"example-margin\" [color]=\"color\" [checked]=\"role.roleName == 'Admin'\" [disabled]=\"role.roleName == 'Admin'\"\n                                                    [(ngModel)]=\"rolesPermArr[1]\" [color]=\"color\" (click)=\"updateRoles('4',rolesPermArr[1])\" [checked]=\"disableEvaluator()\">\n                                                        <!-- {{role.roleName}} -->\n                                                    </mat-checkbox>\n                                                </p>\n                \n                                                <ul>\n                                                    <li>Evaluation</li>\n                \n                                                </ul>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <!-- <div class=\"col-sm-12\">\n                                        <mat-checkbox class=\"example-margin\">\n                                            Test Manager\n                                        </mat-checkbox>\n                                    </div>\n                                    <div class=\"col-sm-12\">\n                                        <mat-checkbox class=\"example-margin\">\n                                            Evaluator\n                                        </mat-checkbox>\n                                    </div> -->\n                                </div>\n                                <div class=\"row p-4 text-center\" *ngIf=\"useRoles && useRoles['allRoles'].length\">\n                                    <!-- <button class=\"btn btn-primary updateSupRole m-auto\" (click)=\"updateRoles()\">Update</button> -->\n                                </div>\n                            </div>\n                \n                \n                        </div>\n                    </div>\n                </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/Components/settings/settings.component.css":
/*!************************************************************!*\
  !*** ./src/app/Components/settings/settings.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n .fileContainer {\n    overflow: hidden;\n    position: relative;\n    \n  \n}\n\n.fileContainer [type=file] {\n    cursor: inherit;\n    display: block;\n    font-size: 9px;\n    filter: alpha(opacity=0);\n    min-height: 100%;\n    min-width: 100%;\n    opacity: 0;\n    position: absolute;\n    right: 0;\n    text-align: right;\n    top: 0;\n}\n\n/* Example stylistic flourishes */\n\n.fileContainer {\n   \n    background: rgba(119, 107, 223, 0.35);\n    padding: 3.5rem;\n    border-radius: 51%;\n    color: white;\n    font-weight: 900;\n    /* border-radius: 2.5em; */\n    /* float: left; */\n    /* padding: 1.5em; */\n}\n\n.profile{\n    padding-right: 5rem;\n}\n\n.fileContainer [type=file] {\n    cursor: pointer;\n}\n\n.settings_sec hr{\n    border-top: 1px solid #707070;\n    margin-top: 0px;\n}\n\nform{\n    padding: 2rem;\n}\n\ninput{\n    padding: 1.3rem;\n}\n\nlabel{\n    font-size: 14px;\n}\n\n.card{\n    box-shadow: 2px 4px 5px #959595;\n}\n\nh4{\n        color: #707070;\n        font-size: 24px;\n        /* font-weight: 600; */\n}\n\n.profile_form label{\n    /* font-weight:bold; */\n    font-size: 12px;\n}\n\n.profile_form .form-group p {\n    font-weight: bold;\n    padding: 0px 0px 0px 15px;\n}\n\n/* #permissionModal .modal-dialog{\n    max-width: 1000px;\n}\n#permissionModal .modal-header{\n    border:none;\n} */\n\n.admin_role{\n    background-color: #12BCFF;\n    color: #ffffff;\n    text-align: center;\n    padding: 15px 20px;\n}\n\n.test_role{\n    background-color: #F39C12;\n    color: #ffffff;\n    text-align: center;\n    padding: 15px 20px;\n}\n\n.eval_role{\n    background-color: #2ECC71;\n    color: #ffffff;\n    text-align: center;\n    padding: 15px 20px;\n}\n\n.admin_role img,.test_role img,.eval_role img{\n    width: 74px;\n    height: 74px;\n    background-color: #ffffff;\n    padding: 15px;\n    border-radius: 50%;\n}\n\n.updateSupRole{\n    color: #fff;\n    background-color: #19bbfc;\n    border-color: #19bbfc;\n    font-weight: bold;\n    padding: 10px 30px;\n}\n\n.settings_sec .flex-fill{\n    height: 169px;\n}\n\n.profile img{\n    width: 150px;\n    height: 130px;\n    border-radius: 50%;\n    position: absolute;\n    border: 2px solid wheat;\n}\n\np{\n    margin-left: -1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9zZXR0aW5ncy9zZXR0aW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0NBRUM7SUFDRyxnQkFBZ0I7SUFDaEIsa0JBQWtCOzs7QUFHdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsTUFBTTtBQUNWOztBQUVBLGlDQUFpQzs7QUFFakM7O0lBRUkscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQiwwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFLQTtJQUNJLGVBQWU7QUFDbkI7O0FBSUE7SUFDSSw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGFBQWE7QUFDakI7O0FBQ0E7SUFDSSxlQUFlO0FBQ25COztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFDQTtRQUNRLGNBQWM7UUFDZCxlQUFlO1FBQ2Ysc0JBQXNCO0FBQzlCOztBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCOztBQUVBOzs7OztHQUtHOztBQUNIO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjs7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gLmZpbGVDb250YWluZXIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIFxuICBcbn1cblxuLmZpbGVDb250YWluZXIgW3R5cGU9ZmlsZV0ge1xuICAgIGN1cnNvcjogaW5oZXJpdDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDlweDtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgdG9wOiAwO1xufVxuXG4vKiBFeGFtcGxlIHN0eWxpc3RpYyBmbG91cmlzaGVzICovXG5cbi5maWxlQ29udGFpbmVyIHtcbiAgIFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTE5LCAxMDcsIDIyMywgMC4zNSk7XG4gICAgcGFkZGluZzogMy41cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDUxJTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAvKiBib3JkZXItcmFkaXVzOiAyLjVlbTsgKi9cbiAgICAvKiBmbG9hdDogbGVmdDsgKi9cbiAgICAvKiBwYWRkaW5nOiAxLjVlbTsgKi9cbn1cbiBcbi5wcm9maWxle1xuICAgIHBhZGRpbmctcmlnaHQ6IDVyZW07XG59XG5cblxuXG5cbi5maWxlQ29udGFpbmVyIFt0eXBlPWZpbGVdIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuXG4uc2V0dGluZ3Nfc2VjIGhye1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNzA3MDcwO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbn1cbmZvcm17XG4gICAgcGFkZGluZzogMnJlbTtcbn1cbmlucHV0e1xuICAgIHBhZGRpbmc6IDEuM3JlbTtcbn1cbmxhYmVse1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jYXJke1xuICAgIGJveC1zaGFkb3c6IDJweCA0cHggNXB4ICM5NTk1OTU7XG59XG5oNHtcbiAgICAgICAgY29sb3I6ICM3MDcwNzA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgLyogZm9udC13ZWlnaHQ6IDYwMDsgKi9cbn1cbi5wcm9maWxlX2Zvcm0gbGFiZWx7XG4gICAgLyogZm9udC13ZWlnaHQ6Ym9sZDsgKi9cbiAgICBmb250LXNpemU6IDEycHg7XG59XG4ucHJvZmlsZV9mb3JtIC5mb3JtLWdyb3VwIHAge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDBweCAwcHggMHB4IDE1cHg7XG59XG5cbi8qICNwZXJtaXNzaW9uTW9kYWwgLm1vZGFsLWRpYWxvZ3tcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbn1cbiNwZXJtaXNzaW9uTW9kYWwgLm1vZGFsLWhlYWRlcntcbiAgICBib3JkZXI6bm9uZTtcbn0gKi9cbi5hZG1pbl9yb2xle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMkJDRkY7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE1cHggMjBweDtcbn1cbi50ZXN0X3JvbGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YzOUMxMjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTVweCAyMHB4O1xufVxuLmV2YWxfcm9sZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkVDQzcxO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNXB4IDIwcHg7XG59XG4uYWRtaW5fcm9sZSBpbWcsLnRlc3Rfcm9sZSBpbWcsLmV2YWxfcm9sZSBpbWd7XG4gICAgd2lkdGg6IDc0cHg7XG4gICAgaGVpZ2h0OiA3NHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4udXBkYXRlU3VwUm9sZXtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTliYmZjO1xuICAgIGJvcmRlci1jb2xvcjogIzE5YmJmYztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG59XG5cbi5zZXR0aW5nc19zZWMgLmZsZXgtZmlsbHtcbiAgICBoZWlnaHQ6IDE2OXB4O1xufVxuLnByb2ZpbGUgaW1ne1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDEzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm9yZGVyOiAycHggc29saWQgd2hlYXQ7XG59XG5we1xuICAgIG1hcmdpbi1sZWZ0OiAtMXJlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Components/settings/settings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
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



var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(apiService, route) {
        this.apiService = apiService;
        this.route = route;
        this.testPerm = this.disableTestManager();
        this.evalPerm = this.disableEvaluator();
        this.rolesPermArr = [this.testPerm, this.evalPerm];
        this.color = 'primary';
        this.userData = [];
        this.selectFile = null;
    }
    SettingsComponent.prototype.getRoles = function () {
        var _this = this;
        // this.blockUI.start('Please Wait ...');
        this.apiService.getAll('auth/role?token=' + localStorage.getItem('token'))
            .subscribe(function (res) {
            // this.blockUI.stop();
            // this.listRoles = res;
            _this.useRoles = res;
        }, function (error) {
            // this.blockUI.stop();
        });
    };
    SettingsComponent.prototype.getUserDetailesById = function () {
        var _this = this;
        this.apiService.getAll("auth/user/getuserbyid?userId=" + localStorage.getItem('userId') + "&token=" + localStorage.getItem('token')).subscribe(function (data) {
            if (data["statusCode"] == 1) {
                // console.log(data)
                _this.userData = data["userById"];
                _this.userId = _this.userData[0].userId;
                if (_this.userData[0].department == 'null') {
                    _this.userData[0].department = '';
                }
                if (_this.userData[0].designation == 'null') {
                    _this.userData[0].designation = '';
                }
                // console.log(this.userId)
            }
            else {
                // console.log(data['statusMessage'])
            }
        }, function (error) {
            // console.log(error)
        }, function () { });
    };
    SettingsComponent.prototype.onFileSelected = function (event) {
        var _this = this;
        // console.log(event)
        this.selectFile = event.target.files[0];
        var formData = new FormData();
        formData.append("token", localStorage.getItem('token'));
        formData.append('files', this.selectFile);
        if (this.apiService.cfs) {
            var cfsformData = new FormData();
            // cfsformData.append("access-token",this.service.secretKey);
            cfsformData.append("files", this.selectFile);
            this.apiService.postDataCfs(cfsformData).subscribe(function (res) {
                // console.log(res);
                if (res.status == 200) {
                    formData.append("cfsId", res.body[0].id);
                    formData.append("cfsViewURL", res.body[0].selfLink.view);
                    formData.append("cfsDownloadURL", res.body[0].selfLink.download);
                    _this.apiService.postData("notification/cfs/user/profilepic", formData)
                        .subscribe(function (res) {
                        if (res['statusCode'] == 1) {
                            _this.getUserDetailesById();
                            // console.log(res['statusMessage'])
                            localStorage.setItem('userImage', res['imageViewurl']);
                            // console.log(res['imageViewurl'])
                            _this.apiService.successAlert(res['statusMessage']);
                        }
                        else {
                            // console.log(res['statusMessage'])
                            _this.apiService.errorAlert(res['statusMessage']);
                        }
                    }, function (error) {
                        // console.log(error)
                    }, function () {
                    });
                }
                else {
                    _this.apiService.errorAlert(_this.selectFile.name + "Upload Failed");
                }
            }, function (error) {
                // console.log(error);
            }, function () {
            });
        }
        else {
            formData.append('files', this.selectFile);
            this.apiService.postData("notification/image/user/profilepic", formData)
                .subscribe(function (res) {
                if (res['statusCode'] == 1) {
                    _this.getUserDetailesById();
                    // console.log(res['statusMessage'])
                    _this.apiService.successAlert(res['statusMessage']);
                }
                else {
                    // console.log(res['statusMessage'])
                    _this.apiService.errorAlert(res['statusMessage']);
                }
            }, function (error) {
                // console.log(error)
            }, function () {
            });
        }
    };
    SettingsComponent.prototype.editUser = function (data) {
        // console.log(this.selectFile)
        var _this = this;
        var formData = new FormData();
        formData.append("userId", data.userId);
        formData.append("userFirstName", data.userFirstName);
        formData.append("userLastName", data.userLastName);
        formData.append("userEmail", data.userEmail);
        formData.append("phoneNumber", data.phoneNumber);
        formData.append("roleId", data.roleId);
        formData.append("token", localStorage.getItem('token'));
        formData.append('designation', data.designation);
        formData.append('department', data.department);
        // formData.append('userdpUpload', this.selectFile);
        var userInfo = data;
        this.apiService.postData("auth/user/updateuser", formData).subscribe(function (data) {
            // console.log(data)
            if (data['statusCode'] == 1) {
                _this.getUserDetailesById();
                _this.isEdit = false;
                // console.log(data['statusMessage'])
                var user = JSON.parse(localStorage.getItem('user'));
                user.userName = userInfo['userFirstName'] + ' ' + userInfo['userLastName'];
                localStorage.setItem('user', JSON.stringify(user));
                _this.route.navigate(['settings']).then(function () {
                    _this.apiService.successAlert(data['statusMessage']);
                });
            }
            else {
                // console.log(data['statusMessage'])
                _this.route.navigate(['settings']).then(function () {
                    _this.apiService.errorAlert(data['statusMessage']);
                });
            }
        }, function (error) {
            // console.log(error)
        }, function () { });
    };
    SettingsComponent.prototype.ngOnInit = function () {
        this.getUserDetailesById();
        this.getRoles();
    };
    SettingsComponent.prototype.editUserDet = function () {
        this.isEdit = true;
    };
    SettingsComponent.prototype.cancelEdit = function () {
        this.isEdit = false;
    };
    SettingsComponent.prototype.disableTestManager = function () {
        var adminRole = JSON.parse(localStorage.getItem('Permissions'));
        if (adminRole.includes('TestManagement')) {
            return true;
        }
        else {
            return false;
        }
    };
    SettingsComponent.prototype.disableEvaluator = function () {
        var adminRole = JSON.parse(localStorage.getItem('Permissions'));
        if (adminRole.includes('EvaluateManagement')) {
            return true;
        }
        else {
            return false;
        }
    };
    SettingsComponent.prototype.updateRoles = function (roleId, addPermBool) {
        var _this = this;
        var role = JSON.parse(localStorage.getItem('role'));
        if (!addPermBool) {
            var bool = confirm("Do you want to add permission");
            if (bool) {
                var roleIds = [];
                if (roleId == '4') {
                    if (this.rolesPermArr[0]) {
                        roleIds.push(3);
                    }
                    roleIds.push(4);
                }
                else if (roleId == '3') {
                    roleIds.push(3);
                    if (this.rolesPermArr[1]) {
                        roleIds.push(4);
                    }
                }
                //  if(this.rolesPermArr[0] == true){
                //   roleIds.push(3)
                //  }
                //  if(this.rolesPermArr[1] == true){
                //   roleIds.push(4)
                //  }
                this.apiService.postData('auth/authentication/roleupdateforadmin?token=' + localStorage.getItem('token') + '&roleId=' + role.id + '&roleIds=' + roleIds.join(','), {})
                    .subscribe(function (res) {
                    if (res['statusCode'] == '1') {
                        _this.getUpdatedPermissions();
                        _this.apiService.successAlert(res['statusMeaasge']);
                    }
                    else {
                        _this.apiService.errorAlert(res['statusMeaasge']);
                    }
                });
            }
            else {
                return false;
            }
        }
        else {
            var roleIds = [];
            if (roleId == '4') {
                if (this.rolesPermArr[0]) {
                    roleIds.push(3);
                }
            }
            else if (roleId == '3') {
                if (this.rolesPermArr[1]) {
                    roleIds.push(4);
                }
            }
            // if(this.rolesPermArr[0] = true){
            //  roleIds.push(3)
            // }
            // if(this.rolesPermArr[1] = true){
            //  roleIds.push(4)
            // }
            this.apiService.postData('auth/authentication/roleupdateforadmin?token=' + localStorage.getItem('token') + '&roleId=' + role.id + '&roleIds=' + roleIds.join(','), {})
                .subscribe(function (res) {
                if (res['statusCode'] == '1') {
                    _this.getUpdatedPermissions();
                    _this.apiService.successAlert(res['statusMeaasge']);
                }
                else {
                    _this.apiService.errorAlert(res['statusMeaasge']);
                }
            });
        }
    };
    SettingsComponent.prototype.getUpdatedPermissions = function () {
        var user = JSON.parse(localStorage.getItem('user'));
        // console.log(user)
        this.apiService.getAll('auth/user/getpermissionsbyrole?token=' + localStorage.getItem('token') + '&userId=' + user.userId)
            .subscribe(function (res) {
            if (res["statusCode"] == '1') {
                var permissions = res['permissionsbyrole'];
                var permList = [];
                permissions.forEach(function (item) {
                    permList.push(item['menuName']);
                });
                localStorage.setItem('Permissions', JSON.stringify(permList));
            }
        }, function (error) {
        });
    };
    SettingsComponent.prototype.isSuperUser = function () {
        var superUser = localStorage.getItem('isSuper');
        if (superUser == "1")
            return true;
    };
    SettingsComponent.ctorParameters = function () { return [
        { type: _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/Components/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/Modules/settings/settings-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/Modules/settings/settings-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SettingsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsRoutingModule", function() { return SettingsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Components_settings_settings_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Components/settings/settings.component */ "./src/app/Components/settings/settings.component.ts");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var ngx_smart_popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-smart-popover */ "./node_modules/ngx-smart-popover/fesm5/ngx-smart-popover.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [{
        path: "",
        component: _Components_settings_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"]
    }];
var SettingsRoutingModule = /** @class */ (function () {
    function SettingsRoutingModule() {
    }
    SettingsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_Components_settings_settings_component__WEBPACK_IMPORTED_MODULE_4__["SettingsComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), ngx_smart_popover__WEBPACK_IMPORTED_MODULE_6__["PopoverModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], SettingsRoutingModule);
    return SettingsRoutingModule;
}());



/***/ }),

/***/ "./src/app/Modules/settings/settings.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/Modules/settings/settings.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings-routing.module */ "./src/app/Modules/settings/settings-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SettingsModule = /** @class */ (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _settings_routing_module__WEBPACK_IMPORTED_MODULE_2__["SettingsRoutingModule"]
            ]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ })

}]);
//# sourceMappingURL=Modules-settings-settings-module.js.map