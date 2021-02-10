(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Modules-dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/dashboard/dashboard.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/dashboard/dashboard.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dashboard_sec pt-4 pb-4 pr-5\">\n    <div class=\"\">\n        <h4>Dashboard </h4>\n        <hr>\n    </div>\n    <div class=\"d-flex\" *ngIf=\"!isRecruiter\" >\n        <div class=\"p-2 text-center flex-fill pointer boxShadow mr-3 pt-3 pb-3 borderleft1 white_bg\" [routerLink]=\"['/test-setup']\">\n            Add Test Master\n            <i class=\"material-icons lightBlue\">\n                add\n            </i>\n        </div>\n        <div class=\"p-2 text-center flex-fill pointer boxShadow mr-3 pt-3 pb-3 borderleft2 white_bg\" [routerLink]=\"['/sections']\">\n            Add Sections\n            <i class=\"material-icons yellow\">\n                add\n            </i>\n        </div>\n        <div class=\"p-2 text-center flex-fill pointer boxShadow mr-3 pt-3 pb-3 borderleft3 white_bg\" [routerLink]=\"['/list-questions']\">\n            Add Questions\n            <i class=\"material-icons\">\n                add\n            </i>\n        </div>\n        <div class=\"p-2 text-center flex-fill pointer boxShadow mr-3 pt-3 pb-3 borderleft4 white_bg\" [routerLink]=\"['/list-users']\"\n            *ngIf=\"checkPerm('UserManagement')\">\n            Add Users\n            <i class=\"material-icons\">\n                add\n            </i>\n        </div>\n        <!-- <div class=\"p-2 text-center flex-fill pointer boxShadow pt-3 pb-3 borderleft5 white_bg\">\n            Add Candidates\n            <i class=\"material-icons orange\">\n                add\n            </i>\n        </div> -->\n    </div>\n    <div class=\"row m-0 mt-5\" *ngIf=\"!isRecruiter\">\n        <div class=\"col-sm-6 pl-0 pr-4\">\n            <popover-content #testMaster title=\"\" placement=\"right\" [animation]=\"true\" style=\"box-shadow: 10px 10px 5px #aaaaaa;\">\n                <span style=\"color: #646363;\">Set up the structure of your test.Set the topic,categories and sections</span>\n\n            </popover-content>\n\n\n            <h5>Test Masters\n                <span>\n                    <i style=\"font-size: 16px;color: #969696;top: 2px;\" [popoverOnHover]=\"true\" [popover]=\"testMaster\" class=\"material-icons\">info</i>\n                </span>\n            </h5>\n            <table class=\"table boxShadow borderleft1 white_bg  height247\">\n                <thead class=\"dash_th\">\n                    <tr>\n                        <th>Test Master Title</th>\n                        <th>Owner</th>\n                        <th>Category</th>\n                        <th>Instance Count</th>\n                        <!-- <th>createdOn</th> -->\n                        <!-- <th>Status</th> -->\n                    </tr>\n                </thead>\n                <tbody *ngIf=\"!testsArr\">\n                    <div class=\"loader_div\">\n                        <img src=\"./../../../assets/images/dashboard/loader_dash.gif\">\n                    </div>\n                </tbody>\n                <tbody *ngIf=\"testsArr && testsArr['listOfTestSetups'] && testsArr['listOfTestSetups'].length\">\n                    <tr *ngFor=\"let test of testsArr['listOfTestSetups'].slice(0,4)\">\n                        <td>\n                            <span>\n                                <i class=\"material-icons icon_dot lightBlue\">fiber_manual_record</i>\n                            </span>\n                            <span title=\"{{test.testSetupTitle}}\" *ngIf=\"test.testSetupTitle?.length>8\">{{test.testSetupTitle.slice(0,8)}}...</span>\n                            <span title=\"{{test.testSetupTitle}}\" *ngIf=\"test.testSetupTitle?.length<=8\">{{test.testSetupTitle}}</span>\n                        </td>\n                        <td>\n                            <span title=\"{{test.testOwner}}\" *ngIf=\"test.testOwner?.length>8\">{{test.testOwner.slice(0,8)}}...</span>\n                            <span title=\"{{test.testOwner}}\" *ngIf=\"test.testOwner?.length<=8\">{{test.testOwner}}</span>\n                        </td>\n\n                        <td>\n                            <span title=\"{{test.testCategoryName}}\" *ngIf=\"test.testCategoryName?.length>8\">{{test.testCategoryName.slice(0,8)}}...</span>\n                            <span title=\"{{test.testCategoryName}}\" *ngIf=\"test.testCategoryName?.length<=8\">{{test.testCategoryName}}</span>\n                        </td>\n                        <td class=\"text-center\">\n                            <span>{{test.instanceCount}}</span>\n                        </td>\n                        <!-- <td>\n                            <span *ngIf=\"test.createdOn\">{{test.createdOn | date:'mediumDate'}}</span>\n                            <span *ngIf=\"!test.createdOn\">-</span>\n                        </td> -->\n                        <!-- <td>{{test.testStatus}}</td> -->\n                    </tr>\n                </tbody>\n                <tbody *ngIf=\"testsArr && testsArr['listOfTestSetups'] && !testsArr['listOfTestSetups'].length\">\n                    <tr class=\"text-center\">\n                        <td class=\"errorTxt not_found_Dash\" colspan=\"4\">Test Masters Not Yet Created</td>\n                    </tr>\n                </tbody>\n            </table>\n            <p *ngIf=\"testsArr && testsArr['listOfTestSetups'] && testsArr['listOfTestSetups'].length>4\">\n                <button class=\"btn btn-link float-right\" [routerLink]=\"['/configure-tests']\">Load More</button>\n            </p>\n        </div>\n        <div class=\"col-sm-6 pr-0 pl-0\">\n            <popover-content #testInstance title=\"\" placement=\"right\" [animation]=\"true\" style=\"box-shadow: 10px 10px 5px #aaaaaa;\">\n                <span style=\"color: #646363;\">Create your test. Select questions from question Pool and/or add your own</span>\n\n            </popover-content>\n            <h5>Test Instances\n                <span>\n                    <i style=\" font-size: 16px;color: #969696;top: 2px;\" [popoverOnHover]=\"true\" [popover]=\"testInstance\" class=\"material-icons\">info</i>\n                </span>\n            </h5>\n            <table class=\"table boxShadow borderleft3 white_bg height247\">\n                <thead class=\"dash_th\">\n                    <tr>\n                        <th>Test Instance</th>\n                        <th>Owner</th>\n                        <th>Test</th>\n                        <th>Administered Tests</th>\n                        <!-- <th>createdOn</th> -->\n                    </tr>\n                </thead>\n                <tbody *ngIf=\"!testInstances\">\n                    <div class=\"loader_div\">\n                        <img src=\"./../../../assets/images/dashboard/loader_dash.gif\">\n                    </div>\n                </tbody>\n                <tbody *ngIf=\"testInstances && testInstances['listOfTestInstances'] && testInstances['listOfTestInstances'].length\">\n                    <tr *ngFor=\"let instance of testInstances['listOfTestInstances'] | slice:0:4\">\n                        <td>\n                            <span>\n                                <i class=\"material-icons sec_circ\">\n                                    fiber_manual_record\n                                </i>\n                            </span>\n                            <span title=\"{{instance.instanceTitle}}\" *ngIf=\"instance.instanceTitle?.length>8\">{{instance.instanceTitle.slice(0,8)}}...</span>\n                            <span title=\"{{instance.instanceTitle}}\" *ngIf=\"instance.instanceTitle?.length<=8\">{{instance.instanceTitle}}</span>\n                            <!-- {{instance.instanceTitle}} -->\n                        </td>\n                        <td>\n                            <span title=\"{{instance.testOwner}}\" *ngIf=\"instance.testOwner?.length>8\">{{instance.testOwner.slice(0,8)}}...</span>\n                            <span title=\"{{instance.testOwner}}\" *ngIf=\"instance.testOwner?.length<=8\">{{instance.testOwner}}</span>\n                            <!-- {{instance.testOwner}} -->\n                        </td>\n                        <td>\n                            <span title=\"{{instance.testSetupTitle}}\" *ngIf=\"instance.testSetupTitle?.length>8\">{{instance.testSetupTitle.slice(0,8)}}...</span>\n                            <span title=\"{{instance.testSetupTitle}}\" *ngIf=\"instance.testSetupTitle?.length<=8\">{{instance.testSetupTitle}}</span>\n                            <!-- {{instance.testSetupTitle}} -->\n                        </td>\n                        <td class=\"text-center\">\n                            <span>{{instance.administeredTestCount}}</span>\n                        </td>\n                        <!-- <td>\n                                <span *ngIf=\"instance.createdOn\">{{instance.createdOn | date:'mediumDate'}}</span>\n                                <span *ngIf=\"!instance.createdOn\">-</span>\n                            </td> -->\n                    </tr>\n                </tbody>\n                <tbody *ngIf=\"testInstances && testInstances['listOfTestInstances'] && !testInstances['listOfTestInstances'].length\">\n                    <tr class=\"text-center\">\n                        <td class=\"errorTxt not_found_Dash\" colspan=\"4\">Test Instances Not Yet Created</td>\n                    </tr>\n                </tbody>\n            </table>\n            <p *ngIf=\"testInstances && testInstances['listOfTestInstances'] && testInstances['listOfTestInstances'].length>4\">\n                <button class=\"btn btn-link float-right\" [routerLink]=\"['/administer-tests']\">Load More</button>\n            </p>\n        </div>\n        <!-- <div class=\"col-sm-6 pr-0 pl-4\">\n            <h5>Total Sections</h5>\n            <table class=\"table boxShadow borderleft3 white_bg height247\">\n                <thead>\n                    <tr>\n                        <th>Section Title</th>\n                        <th>Sub Category</th>\n                    </tr>\n                </thead>\n                <tbody *ngIf=\"sectionArr && sectionArr['listOfAllSections'].length\">\n                    <tr *ngFor=\"let sec of sectionArr['listOfAllSections'] | slice:0:4\">\n                        <td>\n                            <span>\n                                <i class=\"material-icons sec_circ\">\n                                    fiber_manual_record\n                                </i>\n                            </span>\n                            {{sec.testSectionName}}\n                        </td>\n                        <td>{{sec.testSubCategoryName}}</td>\n                    </tr>\n                </tbody>\n                <tbody *ngIf=\"sectionArr && !sectionArr['listOfAllSections'].length\">\n                    <tr class=\"text-center\">\n                        <td class=\"errorTxt not_found_Dash\" colspan=\"3\">No Sections Found</td>\n                    </tr>\n                </tbody>\n            </table>\n            <p *ngIf=\"sectionArr && sectionArr['listOfAllSections'].length>3\">\n                <button class=\"btn btn-link float-right\" [routerLink]=\"['/sections']\">Load More</button>\n            </p>\n        </div> -->\n    </div>\n    <div class=\"row m-0 mt-5\">\n\n        <div class=\"col-sm-12 pl-0 pr-4\">\n            <popover-content #administerTest title=\"\" placement=\"right\" [animation]=\"true\" style=\"box-shadow: 10px 10px 5px #aaaaaa;\">\n                <span style=\"color: #646363;\"> View the list of tests that have already been conducted.</span>\n\n            </popover-content>\n            <h5>Administered Tests\n                <span>\n                    <i style=\"    font-size: 16px;color: #969696;top: 2px;\" [popoverOnHover]=\"true\" [popover]=\"administerTest\" class=\"material-icons\">info</i>\n                </span>\n            </h5>\n            <table class=\"table boxShadow borderleft3 white_bg height247\">\n                <thead class=\"dash_th\">\n                    <tr>\n                        <th>Test</th>\n                        <th>Owner</th>\n                         \n                        <th class=\"text-center\">Administers</th>\n                        <!-- <th>createdOn</th> -->\n                    </tr>\n                </thead>\n                <tbody *ngIf=\"!administeredTests\">\n                        <div class=\"loader_div\">\n                            <img src=\"./../../../assets/images/dashboard/loader_dash.gif\">\n                        </div>\n                    </tbody>\n                <tbody *ngIf=\"administeredTests && administeredTests['listOfTests'] && administeredTests['listOfTests'].length\">\n                    <tr *ngFor=\"let test of administeredTests['listOfTests'] | slice:0:4\">\n                        <td>\n                            <span>\n                                <i class=\"material-icons sec_circ\">\n                                    fiber_manual_record\n                                </i>\n                            </span>\n                            <span title=\"{{test.testTitle}}\" *ngIf=\"test.testTitle?.length>14\">{{test.testTitle.slice(0,14)}}...</span>\n                            <span title=\"{{test.testTitle}}\" *ngIf=\"test.testTitle?.length<=14\">{{test.testTitle}}</span>\n                            <!-- {{instance.instanceTitle}} -->\n                        </td>\n                        <td>\n                            <span title=\"{{test.testOwner}}\" *ngIf=\"test.testOwner?.length>14\">{{test.testOwner.slice(0,14)}}...</span>\n                            <span title=\"{{test.testOwner}}\" *ngIf=\"test.testOwner?.length<=14\">{{test.testOwner}}</span>\n                            <!-- {{instance.testOwner}} -->\n                        </td>\n                         \n                        <td class=\"text-center\">\n                            <span>{{test.administeredTestCount}}</span>\n                        </td>\n                        <!-- <td>\n                                    <span *ngIf=\"instance.createdOn\">{{instance.createdOn | date:'mediumDate'}}</span>\n                                    <span *ngIf=\"!instance.createdOn\">-</span>\n                                </td> -->\n                    </tr>\n                </tbody>\n                <tbody *ngIf=\"administeredTests && administeredTests['listOfTests'] && !administeredTests['listOfTests'].length\">\n                    <tr class=\"text-center\">\n                        <td class=\"errorTxt not_found_Dash\" colspan=\"5\">Tests Not Yet Administered</td>\n                    </tr>\n                </tbody>\n            </table>\n            <p *ngIf=\"testInstances && testInstances['listOfTestInstances'] && testInstances['listOfTestInstances'].length>4\">\n                <button class=\"btn btn-link float-right\" [routerLink]=\"['/manage-tests']\">Load More</button>\n            </p>\n        </div>\n        <!-- <div class=\"col-sm-6 pr-0 pl-4  \">\n            <h5>Reports</h5>\n            <table class=\"table boxShadow borderleft2 white_bg height247\">\n                <thead class=\"dash_th\">\n                    <tr>\n                        <th>Name</th>\n                        <th>Test Title</th>\n                        <th>Score</th>\n                    </tr>\n                </thead>\n                <tbody *ngIf=\"reportsArr && reportsArr['listOfCandidateResults'].length\">\n                    <tr *ngFor=\"let rep of reportsArr['listOfCandidateResults'] | slice:0:4\">\n                        <td>\n                            <span>\n                                <i class=\"material-icons icon_dot yellow\">fiber_manual_record</i>\n                            </span>\n                            {{rep.candidateName}}\n                        </td>\n                        <td>{{rep.testTitle}}</td>\n                        <td>{{rep.testPercentage}}</td>\n                    </tr>\n                </tbody>\n                <tbody *ngIf=\"reportsArr && !reportsArr['listOfCandidateResults'].length\">\n                    <tr class=\"text-center\">\n                        <td class=\"errorTxt not_found_Dash\" colspan=\"3\">No Reports Found</td>\n                    </tr>\n                </tbody>\n            </table>\n            <p *ngIf=\"reportsArr && reportsArr['listOfCandidateResults'].length>4\">\n                <button class=\"btn btn-link float-right\" [routerLink]=\"['/reports']\">Load More</button>\n            </p>\n        </div> -->\n\n    </div>\n    <div class=\"row m-0 mt-5\" *ngIf=\"checkPerm('UserManagement') || isRecruiter\">\n        <div class=\"pr-4 pl-0\" [ngClass]=\"{'col-sm-6':!isRecruiter,'col-sm-12':isRecruiter}\">\n            <popover-content #testReports title=\"\" placement=\"right\" [animation]=\"true\" style=\"box-shadow: 10px 10px 5px #aaaaaa;\">\n                <span style=\"color: #646363;\">View analytics on tests conducted.</span>\n\n            </popover-content>\n            <h5>Test Reports\n                <span>\n                    <i style=\"    font-size: 16px;color: #969696;top: 2px;\" [popoverOnHover]=\"true\" [popover]=\"testReports\" class=\"material-icons\">info</i>\n                </span>\n            </h5>\n            <table class=\"table boxShadow borderleft2 white_bg height247\">\n                <thead class=\"dash_th\">\n                    <tr>\n                        <th>Candidate Name</th>\n                        <th>Test Title</th>\n                        <th>Score</th>\n                    </tr>\n                </thead>\n                <tbody *ngIf=\"!reportsArr\">\n                        <div class=\"loader_div\">\n                            <img src=\"./../../../assets/images/dashboard/loader_dash.gif\">\n                        </div>\n                    </tbody>\n                <tbody *ngIf=\"reportsArr && reportsArr['listOfCandidateResults'].length\">\n                    <tr *ngFor=\"let rep of reportsArr['listOfCandidateResults'] | slice:0:4\">\n                        <td>\n                            <span>\n                                <i class=\"material-icons icon_dot yellow\">fiber_manual_record</i>\n                            </span>\n                            {{rep.candidateName}}\n                        </td>\n                        <td>{{rep.testTitle}}</td>\n                        <td>{{rep.testPercentage}}</td>\n                    </tr>\n                </tbody>\n                <tbody *ngIf=\"reportsArr && !reportsArr['listOfCandidateResults'].length\">\n                    <tr class=\"text-center\">\n                        <td class=\"errorTxt not_found_Dash\" colspan=\"3\">Candidates Not Found</td>\n                    </tr>\n                </tbody>\n            </table>\n            <p *ngIf=\"reportsArr && reportsArr['listOfCandidateResults'].length>4\">\n                <button class=\"btn btn-link float-right\" [routerLink]=\"['/reports']\">Load More</button>\n            </p>\n        </div>\n        <div class=\"col-sm-6 pr-4 pl-0\" *ngIf=\"checkPerm('UserManagement')\" >\n            <popover-content #users title=\"\" placement=\"right\" [animation]=\"true\" style=\"box-shadow: 10px 10px 5px #aaaaaa;\">\n                <span style=\"color: #646363;\">Create new users. Add/edit access rights</span>\n\n            </popover-content>\n            <h5>Users\n                <span>\n                    <i style=\"    font-size: 16px;color: #969696;top: 2px;\" [popoverOnHover]=\"true\" [popover]=\"users\" class=\"material-icons\">info</i>\n                </span>\n            </h5>\n            <div class=\"d-flex boxShadow pointer users_dash pt-4 pb-3 borderleft4 white_bg user_block\" *ngIf=\"listUsers && listUsers['allUsers'] && listUsers['allUsers'].length\">\n                <div class=\"p-2 align-self-center text-center flex-fill border_right_users\" *ngFor=\"let user of listUsers['allUsers'].slice(0,3)\">\n                    <img *ngIf=\"user.imageUrl!='No Image For This User'\" [src]=\"user.imageUrl\" class=\"img-rounded\" alt=\"user_dp\">\n                    <img *ngIf=\"user.imageUrl == 'No Image For This User'\" src=\"./../../../assets/images/profile.png\" class=\"img-rounded\" alt=\"user_dp\">\n                    <h6 class=\"darkBlack mt-3 mb-2\">{{user.userName}}</h6>\n                    <p>\n                        <span>\n                            <i class=\"material-icons user_circ\">fiber_manual_record</i>\n                        </span>\n                        {{user.roleName}}\n                    </p>\n                </div>\n\n            </div>\n            <div class=\"d-flex boxShadow pointer users_dash pt-4 pb-3 borderleft4 white_bg user_block\" *ngIf=\"!listUsers || (listUsers && listUsers['allUsers'] && !listUsers['allUsers'].length)\">\n                    <div class=\"flex-fill text-center align-self-center\">\n                        <span class=\"errorTxt\">Users Not Found</span>\n                    </div>\n            </div>\n            <p *ngIf=\"listUsers && listUsers['allUsers'].length>3\">\n                <button class=\"btn btn-link float-right\" [routerLink]=\"['/list-users']\">Load More</button>\n            </p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/Components/dashboard/dashboard.component.css":
/*!**************************************************************!*\
  !*** ./src/app/Components/dashboard/dashboard.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dashboard_sec hr{\n    border-top: 1px solid #707070;\n    margin-top: 0px;\n}\n\n\n.dashboard_sec i{\n    position: relative;\n    top: 5px;\n    left: 5px;\n}\n\n\n.icon_dot{\n    font-size: 10px;\n    top: 0px !important;\n    left: 0px !important;\n}\n\n\n.yellow{\n    color:#FAD570;\n}\n\n\n.lightBlue{\n    color:#41D6C3\n}\n\n\n.red{\n    color:#FA7070;\n}\n\n\n.blue{\n    color:#3D70B2;\n}\n\n\n.orange{\n    color:#F0932B;\n}\n\n\n.green{\n    color:#47CC2D;\n}\n\n\n.borderleft1{\n    border-left: 3px solid #41D6C3;\n}\n\n\n.borderleft2{\n    border-left: 3px solid #FAD570;\n}\n\n\n.borderleft3{\n    border-left: 3px solid #FA7070;\n}\n\n\n.borderleft4{\n    border-left: 3px solid #3D70B2;\n}\n\n\n.borderleft5{\n    border-left: 3px solid #F0932B;\n}\n\n\n.darkBlack{\n    color:#2C2C2C;\n}\n\n\n.users_dash img{\n    width: 38px;\n    height: 38px;\n}\n\n\n.border_right_users{\n    border-right: 1px solid #dee2e7;\n}\n\n\n.sec_circ{\n    top: 0px !important;\n    left: 0px !important;\n    color:#FA7070;\n    font-size:10px;\n}\n\n\n.user_circ{\n    top: 0px !important;\n    left: 0px !important;\n    color:#47CC2D;\n    font-size:10px;\n}\n\n\n.not_found_Dash{\n    height: 195px;\n    vertical-align: middle;\n}\n\n\n.user_block,.height247{\n    height:247px;\n}\n\n\n#perm_modal{\n    display:none;\n}\n\n\n.ellips{\n    /* width: 250px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap; */\n}\n\n\n.dash_th{\n    background-color: #e7e5e5;\n    color: #453f3f;\n}\n\n\n.loader_div{\n    position: absolute;\n    top: 60%;\n    left: 45%;\n    -webkit-transform: translate(-50%,-50%);\n            transform: translate(-50%,-50%);\n}\n\n\n.loader_div img{\n    /* width: 100px; */\n    /* height: 100px; */\n    height: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7QUFDYjs7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOzs7QUFDQTtJQUNJO0FBQ0o7OztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBQ0E7SUFDSSxhQUFhO0FBQ2pCOzs7QUFDQTtJQUNJLGFBQWE7QUFDakI7OztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7O0FBQ0E7SUFDSSw4QkFBOEI7QUFDbEM7OztBQUNBO0lBQ0ksOEJBQThCO0FBQ2xDOzs7QUFDQTtJQUNJLDhCQUE4QjtBQUNsQzs7O0FBQ0E7SUFDSSw4QkFBOEI7QUFDbEM7OztBQUNBO0lBQ0ksOEJBQThCO0FBQ2xDOzs7QUFDQTtJQUNJLGFBQWE7QUFDakI7OztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7OztBQUNBO0lBQ0ksK0JBQStCO0FBQ25DOzs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLGNBQWM7QUFDbEI7OztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7O0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOzs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7OztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7O0FBQ0E7SUFDSTs7OzBCQUdzQjtBQUMxQjs7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCx1Q0FBK0I7WUFBL0IsK0JBQStCO0FBQ25DOzs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZF9zZWMgaHJ7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3MDcwNzA7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG5cbi5kYXNoYm9hcmRfc2VjIGl7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IDVweDtcbn1cbi5pY29uX2RvdHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICBsZWZ0OiAwcHggIWltcG9ydGFudDtcbn1cbi55ZWxsb3d7XG4gICAgY29sb3I6I0ZBRDU3MDtcbn1cbi5saWdodEJsdWV7XG4gICAgY29sb3I6IzQxRDZDM1xufVxuLnJlZHtcbiAgICBjb2xvcjojRkE3MDcwO1xufVxuLmJsdWV7XG4gICAgY29sb3I6IzNENzBCMjtcbn1cbi5vcmFuZ2V7XG4gICAgY29sb3I6I0YwOTMyQjtcbn1cbi5ncmVlbntcbiAgICBjb2xvcjojNDdDQzJEO1xufVxuLmJvcmRlcmxlZnQxe1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzQxRDZDMztcbn1cbi5ib3JkZXJsZWZ0MntcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNGQUQ1NzA7XG59XG4uYm9yZGVybGVmdDN7XG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjRkE3MDcwO1xufVxuLmJvcmRlcmxlZnQ0e1xuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzNENzBCMjtcbn1cbi5ib3JkZXJsZWZ0NXtcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNGMDkzMkI7XG59XG4uZGFya0JsYWNre1xuICAgIGNvbG9yOiMyQzJDMkM7XG59XG4udXNlcnNfZGFzaCBpbWd7XG4gICAgd2lkdGg6IDM4cHg7XG4gICAgaGVpZ2h0OiAzOHB4O1xufVxuLmJvcmRlcl9yaWdodF91c2Vyc3tcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGVlMmU3O1xufVxuLnNlY19jaXJje1xuICAgIHRvcDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgbGVmdDogMHB4ICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6I0ZBNzA3MDtcbiAgICBmb250LXNpemU6MTBweDtcbn1cbi51c2VyX2NpcmN7XG4gICAgdG9wOiAwcHggIWltcG9ydGFudDtcbiAgICBsZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICBjb2xvcjojNDdDQzJEO1xuICAgIGZvbnQtc2l6ZToxMHB4O1xufVxuLm5vdF9mb3VuZF9EYXNoe1xuICAgIGhlaWdodDogMTk1cHg7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi51c2VyX2Jsb2NrLC5oZWlnaHQyNDd7XG4gICAgaGVpZ2h0OjI0N3B4O1xufVxuI3Blcm1fbW9kYWx7XG4gICAgZGlzcGxheTpub25lO1xufVxuLmVsbGlwc3tcbiAgICAvKiB3aWR0aDogMjUwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyAqL1xufVxuLmRhc2hfdGh7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTVlNTtcbiAgICBjb2xvcjogIzQ1M2YzZjtcbn1cbi5sb2FkZXJfZGl2e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDYwJTtcbiAgICBsZWZ0OiA0NSU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbn1cbi5sb2FkZXJfZGl2IGltZ3tcbiAgICAvKiB3aWR0aDogMTAwcHg7ICovXG4gICAgLyogaGVpZ2h0OiAxMDBweDsgKi9cbiAgICBoZWlnaHQ6IDE1MHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Services/AllServices/all-services.service */ "./src/app/Services/AllServices/all-services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(apiService) {
        this.apiService = apiService;
        this.permissionList = [];
        this.isRecruiter = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkRec();
        this.apiService.getAll('testmanagement/testsetup/dashboard?token=' + localStorage.getItem('token'))
            .subscribe(function (res) {
            if (res['statusCode'] == '1') {
                //  console.log(res);
                if (!_this.isRecruiter) {
                    _this.testsArr = res['testSetupResponse'];
                    _this.testInstances = res['testInstanceResponse'];
                }
                _this.reportsArr = res['candidateResultResponseDTO'];
                _this.administeredTests = res['testConfigurationBasicResponseDTO'];
                _this.listUsers = res['userResponseDTO'];
            }
            else {
                _this.apiService.errorAlert(res['statusMessage']);
            }
        }, function (error) {
        });
        if (!this.isRecruiter) {
            // this.getTests();
            // this.getTestInstances();
        }
        // this.getSections();
        // this.getReports();
        // this.getAdministeredTest();
        // this.getUsers();
    };
    DashboardComponent.prototype.getPermissions = function () {
        var _this = this;
        this.apiService.getAll('auth/menupermissions/getallpermissions?token=' + localStorage.getItem('token'))
            .subscribe(function (res) {
            _this.permissionList = res['permissionList'];
        }, function (error) {
        });
    };
    DashboardComponent.prototype.getTests = function () {
        var _this = this;
        this.apiService.getAll('testmanagement/testsetup/listoftestsetups?token=' + localStorage.getItem('token'))
            .subscribe(function (res) {
            if (res['statusCode'] == '1') {
                _this.testsArr = res;
            }
            else {
                _this.apiService.errorAlert(res['statusMessage']);
            }
        }, function (error) {
        });
    };
    DashboardComponent.prototype.getAdministeredTest = function () {
        var _this = this;
        this.apiService.getAll('testmanagement/testconfig/totaltests?token=' + localStorage.getItem('token'))
            .subscribe(function (res) {
            if (res['statusCode'] == '1') {
                _this.administeredTests = res;
            }
            else {
                _this.apiService.errorAlert(res['statusMessage']);
            }
        }, function (error) {
        });
    };
    DashboardComponent.prototype.getTestInstances = function () {
        var _this = this;
        this.apiService.getAll('testmanagement/testsetup/listoftestinstances?token=' + localStorage.getItem('token'))
            .subscribe(function (res) {
            if (res['statusCode'] == '1') {
                _this.testInstances = res;
            }
            else {
                _this.apiService.errorAlert(res['statusMessage']);
            }
        }, function (error) {
        });
    };
    DashboardComponent.prototype.getSections = function () {
        var _this = this;
        this.apiService.getAll('testmanagement/totalsections?token=' + localStorage.getItem('token'))
            .subscribe(function (res) {
            if (res['statusCode'] == '1') {
                _this.sectionArr = res;
            }
            else {
                _this.apiService.errorAlert(res['statusMessage']);
            }
        }, function (error) {
        });
    };
    DashboardComponent.prototype.getReports = function () {
        var _this = this;
        this.apiService.getAll('reports/result/recentresults?token=' + localStorage.getItem('token'))
            .subscribe(function (res) {
            if (res['statusCode'] == '1') {
                _this.reportsArr = res;
            }
            else {
                _this.apiService.errorAlert(res['statusMessage']);
            }
        }, function (error) {
        });
    };
    DashboardComponent.prototype.getUsers = function () {
        var _this = this;
        this.apiService.getAll('auth/user?token=' + localStorage.getItem('token'))
            .subscribe(function (res) {
            if (res['statusCode'] == '1') {
                _this.listUsers = res;
            }
            else {
                // this.apiService.errorAlert(res['statusMessage'])
            }
        }, function (error) {
        });
    };
    DashboardComponent.prototype.checkRec = function () {
        var roleList = JSON.parse(localStorage.getItem('role'));
        if (roleList.name == 'Recruiter') {
            this.isRecruiter = true;
        }
    };
    DashboardComponent.prototype.checkPerm = function (perm) {
        var menuList = JSON.parse(localStorage.getItem('Permissions'));
        if (menuList.includes(perm)) {
            return true;
        }
        else {
            return false;
        }
    };
    DashboardComponent.ctorParameters = function () { return [
        { type: _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"] }
    ]; };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/Components/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/Modules/dashboard/dashboard-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/Modules/dashboard/dashboard-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Components/dashboard/dashboard.component */ "./src/app/Components/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var ngx_smart_popover__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-smart-popover */ "./node_modules/ngx-smart-popover/fesm5/ngx-smart-popover.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [{
        path: "",
        component: _Components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_Components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], ngx_smart_popover__WEBPACK_IMPORTED_MODULE_5__["PopoverModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], DashboardRoutingModule);
    return DashboardRoutingModule;
}());



/***/ }),

/***/ "./src/app/Modules/dashboard/dashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/Modules/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/Modules/dashboard/dashboard-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
            ]
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ })

}]);
//# sourceMappingURL=Modules-dashboard-dashboard-module.js.map