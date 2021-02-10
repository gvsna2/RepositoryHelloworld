(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Modules-content-verification-content-verification-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/content-verification/content-verification.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/content-verification/content-verification.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\" style=\"margin-top:2rem\">\n\n    <p *ngIf=\"links.length==0\" style=\"    text-align: center;\n    color: rebeccapurple;\n    font-weight: 900;\" >No Data to Verify</p>\n    <div *ngIf=\"links.length>0\" class=\"row\" style=\"color: blue;font-weight: 700;    margin-bottom: 0.5rem;\">\n            <div class=\"col-4\" style=\"padding-left: 3rem;\"> Test Instance</div>\n            <div class=\"col-5\" > Requested By</div>\n            <div class=\"col-3\" style=\"padding-left: 2rem;\"> No. of Sections</div>\n    </div>\n    <mat-accordion>\n        <mat-expansion-panel *ngFor=\"let i=index;let link of links\" (opened)=getDetails(link.contributionRequestId,i); >\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n                <div class=\"col-4\"> {{link.instanceName}}</div>\n                <div class=\"col-5\"> {{link.requestRaisedByName}}</div>\n                <div class=\"col-3\" style=\"text-align:center\"> {{link.numberOfTopics}}</div>\n             \n            </mat-panel-title>\n            <!-- <mat-panel-description>\n              {{link.requestRaisedByName}}\n            </mat-panel-description> -->\n          </mat-expansion-panel-header>\n      <hr>\n           <div id=car{{i}} class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"false\" >\n               <div class=\"carousel-inner row w-100 mx-auto\" role=\"listbox\" >\n                    <div class=\"carousel-item col-12 col-sm-6 col-md-4 col-lg-3 section\" [ngClass]=\"{'active':i==0}\" (click)=getQuestions(section,0); *ngFor=\"let i=index;let section of sectionList\" >\n                            <p>  {{section.sectionName}}</p> <p>\n                                    <span>\n                                            <i class=\"material-icons\">\n                                                    person_pin\n                                                 </i>\n                                    </span>\n                                        <span style=\"margin-top: -3px;\n                                        margin-left: 4px;\n                                        position: absolute;\n                                        \n                                        \">\n                                                {{ section.contributerName | slice:0:15}}\n                                        </span>\n                                        \n                                       <span title=\"Pending Questions\" style=\"margin-top: -3px;\n                                        margin-left: 4px;\n                                        position: absolute;\n                                        right: 19px;\n                                        font-weight: 500;\">\n                                        <span style=\"color: #ea8e7d;;\n                                        font-weight: 600;\n                                        font-size: 13px;\">{{ section.contributionQuestionsCount}}</span>\n                                        <span style=\" padding: 0.15rem;\n                                        margin-top: 0px;\n                                        position: absolute;\"><i class=\"material-icons\" style=\"color: #ea8e7d;;\">\n                                                timelapse\n                                             </i></span>\n                                       \n                                                \n                                        </span>\n                                    </p> <p>\n                                        <span>\n                                                <i class=\"material-icons\">\n                                                        alternate_email\n                                                    </i>\n                                        </span>\n                                        <span style=\"margin-top: -3px;\n                                        margin-left: 4px;\n                                        position: absolute;\">\n                                                {{ section.contributerMail | slice:0:15}}..\n                                        </span>\n\n                                        <span title=\"Verified Questions\" style=\"margin-top: -3px;\n                                        margin-left: 4px;\n                                        position: absolute;\n                                        right: 19px;\n                                        font-weight: 500;\">\n                                        <span style=\"color: #279827;\n                                        font-weight: 600;\n                                        font-size: 13px;\">{{ section.totalVerifiedQuestionCount}}</span>\n                                        <span style=\" padding: 0.15rem;\n                                        margin-top: 0px;\n                                        position: absolute;\"><i class=\"material-icons\" style=\"color: #279827;\">\n                                                verified_user\n                                             </i></span>\n                                       \n                                                \n                                        </span>\n                                        </p>\n                        </div>\n\n                        <a *ngIf=\"sectionList.length>4\" class=\"carousel-control-prev\" href=#car{{i}} role=\"button\" data-slide=\"prev\">\n                                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                                <span class=\"sr-only\">Previous</span>\n                            </a>\n                            <a *ngIf=\"sectionList.length>4\" class=\"carousel-control-next\" href=#car{{i}} role=\"button\" data-slide=\"next\">\n                                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                                <span class=\"sr-only\">Next</span>\n                            </a>\n               </div>\n           \n           </div>\n\n           <div class=\"row\"   *ngIf=\"questionFlag\" style=\"    border: 1px dotted #5ccd71;\n            margin-top: 1rem;\">\n            <table class=\"table sec_ques text-center\">\n                <thead *ngIf=\"questionsList.length>0\" >\n                    <tr class=\"tbl_hdng\">\n                        <th class=\"border-0\">S.No</th>\n                        <th class=\"border-0\">Question Title</th>\n                        <th class=\"border-0\">Type</th>\n                        <th class=\"border-0\">Complexity</th>\n                        <!-- <th class=\"border-0 sel_all_che\">\n                                    <mat-checkbox [color]=\"color\" class=\"example-margin\" [(ngModel)]=\"impAllQues\" (click)=\"importAllQues(impAllQues)\" [checked]=\"checkAllImported()\">Select All</mat-checkbox>\n                                </th> -->\n\n                    </tr>\n                </thead>\n\n                <tbody *ngIf=\"questionsList.length>0\" >\n                    <tr *ngFor=\"let ques of questionsList let i=index\" class=\"pointer glob_ques\"   data-toggle=\"modal\" data-target=\"#quesViewModal\" (click)=\"viewQuestion(ques)\">\n                        <td>\n                                <span *ngIf=\"localPageNo==1\" class=\" pr-3\">{{(i+1)}}.</span>\n                                <!-- <span *ngIf=\"localPageNo!=1\" class=\" pr-3\">{{(i+1)+((localPageNo-1)*10) }}.</span> -->\n                             \n                        </td>\n\n\n\n                        <td *ngIf=\"ques.qustionText.length < 50\" title=\"{{ques.qustionText}}\">{{ques.qustionText}}</td>\n                        <td *ngIf=\"ques.qustionText.length >= 50\" title=\"{{ques.qustionText}}\">{{ques.qustionText | slice:0:50}} ...</td>\n\n                        <td title=\"{{ques.questionType}}\">{{ques.questionType}}</td>\n                        <td title=\"{{ques.questionComplexityType}}\">{{ques.questionComplexityType}}</td>\n                        <!-- <td class=\"\">\n                                    <mat-checkbox [color]=\"color\" class=\"example-margin\" (change)=\"importQues(ques,impQues[i],$event)\" (click)=\"stopProp($event)\"\n                                        [checked]=\"checkImport(ques)\"></mat-checkbox>\n    \n                                </td> -->\n                        <!-- <div id=\"menu_content\">\n                                    <table class=\"table\" *ngIf=\"hoverGlobQues\">\n                                        <tr>\n                                            <th>Question</th>\n                                            <th>Category</th>\n                                            <th>Options</th>\n                                            <th>Answer</th>\n                                        </tr>\n                                        <tr>\n                                            <td class=\"maxWidth240\">{{ hoverGlobQues.questionTitle}}</td>\n                                            <td class=\"maxWidth320\">{{hoverGlobQues.hierarchy}}</td>\n                                            <td>\n                                                <p *ngFor=\"let opt of hoverGlobQues?.optionsList\">{{opt.optionText}}</p>\n                                            </td>\n                                            <td>\n                                                <div *ngFor=\"let opt of hoverGlobQues?.optionsList\">\n                                                    <p *ngIf=\"opt.answer\"> {{opt.optionText}}</p>\n                                                </div>\n                                            </td>\n                                            <td>\n                                                <button class=\"btn btn-link\" (click)=\"editQuestion(hoverGlobQues)\">Edit</button>\n                                            </td>\n    \n                                        </tr>\n                                    </table>\n                                </div> -->\n                    </tr>\n                </tbody>\n                <tbody *ngIf=\"questionFlag && questionsList.length==0\">\n                    <tr class=\"errorTxt text-center\">\n                        <td colspan=\"4\">Questions Not Found</td>\n                    </tr>\n                </tbody>\n\n            </table>\n\n            <div class=\"ques_sec_div col-sm-12 text-center\" style=\"padding: 1rem;\">\n                    <!-- <pagination-controls (pageChange)=\"p_local_1 = $event;onLocalPageChange($event)\" previousLabel=\"<\" nextLabel=\">\" [id]=\"local_page_1\"></pagination-controls> -->\n                <!-- <jw-pagination [items]=\"items\" (changePage)=\"onChangePage($event)\"></jw-pagination> -->\n            </div>\n           </div>\n           \n        </mat-expansion-panel>\n        <!-- <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                             (closed)=\"panelOpenState = false\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Self aware panel\n            </mat-panel-title>\n            <mat-panel-description>\n              Currently I am {{panelOpenState ? 'open' : 'closed'}}\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n          <p>I'm visible because I am open</p>\n        </mat-expansion-panel> -->\n      </mat-accordion>\n      <div class=\"modal\" id=\"quesViewModal\">\n        <div class=\"modal-dialog\">\n            <div class=\"modal-content p-4 pb-5\" *ngIf=\"hoverGlobQues\">\n    \n                <!-- Modal Header -->\n                <div class=\"modal-header\">\n                    <!-- <h4 class=\"modal-title\">Modal Heading</h4> -->\n                    <span class=\"ques_type_colr\">Questions Type:</span> &nbsp; &nbsp;\n                    <span class=\"\">{{hoverGlobQues.questionType}}</span>\n                    <span class=\"ques_type_colr pl-5\">Complexity Mode:</span> &nbsp; &nbsp;\n                    <span class=\"\">{{hoverGlobQues.questionComplexityType}}</span>\n                    <button type=\"button\" class=\"close boxShadow\" data-dismiss=\"modal\">&times;</button>\n                </div>\n    \n                <!-- Modal body -->\n                <div class=\"modal-body\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-12\">\n                            <h5 class=\"mod_ques_clr\">1. &nbsp; {{hoverGlobQues.qustionText}}</h5>\n                        </div>\n    \n                        <div class=\"pl-3 pt-3 col-sm-12\">\n                            <pre class=\"ques_type_colr pl-4\" *ngIf=\"hoverGlobQues.questionCode && hoverGlobQues.questionCode != 'null'\">{{hoverGlobQues.questionCode}}</pre>\n                        </div>\n    \n                        <div *ngIf=\"hoverGlobQues.questionTypeId =='1'\" class=\"pl-3 pt-3\">\n                            <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"mcaAns\" name=\"radio_btn\">\n                                <div *ngFor=\"let opt of hoverGlobQues.optionsList;let i=index\">\n    \n                                    <mat-radio-button class=\"example-radio-button\" [value]=\"i\" class=\"correct_radio\" [disabled]=\"true\">\n                                        <span class=\"white_spac_rad\">{{opt.optionText}}</span>\n                                    </mat-radio-button>\n                                </div>\n                            </mat-radio-group>\n                        </div>\n                        <div *ngIf=\"hoverGlobQues.questionTypeId =='2'\" class=\"pl-3 pt-3\">\n                            <mat-checkbox [color]=\"color\" class=\"example-margin view_ques_chkbox\" [checked]=\"this.checkBoxAnswers.includes(i)\" *ngFor=\"let opt of hoverGlobQues.optionsList;let i=index\">\n                                <span class=\"white_spac_rad\">{{opt.optionText}}</span>\n                            </mat-checkbox>\n    \n                        </div>\n    \n    \n    \n                        <div *ngIf=\"hoverGlobQues.questionTypeId =='3' || hoverGlobQues.questionTypeId =='4' || hoverGlobQues.questionTypeId =='5' || hoverGlobQues.questionTypeId =='6'\" class=\"pl-3 pt-3\">\n    \n                            <p class=\"ques_type_colr\">\n                                <span style=\"color:#000000\"> A.</span>\n                                <span class=\"pl-4\"> {{hoverGlobQues.answer}}</span>\n                            </p>\n                        </div>\n    \n                    </div>\n                </div>\n    \n                <!-- Modal footer -->\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-success\" (click)=\"validateQuestion(1)\" >Valid</button>\n                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"validateQuestion(2)\" >Invalid</button>\n                </div>\n    \n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/Components/content-verification/content-verification.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/Components/content-verification/content-verification.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section{\n    padding: 1rem;\n    border: 1px solid #d9e4f1;\n    border-radius: 8px;\n    box-shadow: 0px 1px 0px 1px #bdd4ef;\n    color: darkslategray;\n    margin: 0.25rem;\n    cursor: pointer;\n    flex: 0 0 23%;\n    max-width: 23%;\n}\n.carousel-control-next-icon,\n.carousel-control-prev-icon {\n  -webkit-filter: invert(1);\n          filter: invert(1);\n}\n.carousel-control-next{\n    padding-left: 5rem;\n}\n.carousel-control-prev{\n    padding-right: 8rem;\n}\n.carousel-inner{\n    padding-left: 2rem;\n}\n.carousel{\n    padding-left: 2rem;\n}\n.section:hover{\n    color: black;\n    background: #d9e4f1a6; \n}\n#quesViewModal .modal-dialog {\n    max-width: 1000px;\n}\n#quesViewModal .close {\n    background-color: #41D6C3;\n    padding: 0px 6px;\n    position: relative;\n    top: 10px;\n    right: 10px;\n    color: #ffffff;\n    border-radius: 17px;\n}\n.close_icon {\n    position: absolute;\n    color: #f44336;\n    right: -30px;\n    z-index: 9999;\n    top: 5px;\n    visibility: hidden;\n    transition-delay: 0.2s;\n}\n.close_icon i {\n    font-size: 18px;\n    cursor: pointer;\n    font-weight: bold;\n}\n@media (min-width: 768px) and (max-width: 991px) {\n    /* Show 4th slide on md if col-md-4*/\n    .carousel-inner .active.col-md-4.carousel-item + .carousel-item + .carousel-item + .carousel-item {\n        position: absolute;\n        top: 0;\n        right: -33.3333%;  /*change this with javascript in the future*/\n        z-index: -1;\n        display: block;\n        visibility: visible;\n    }\n}\n@media (min-width: 576px) and (max-width: 768px) {\n    /* Show 3rd slide on sm if col-sm-6*/\n    .carousel-inner .active.col-sm-6.carousel-item + .carousel-item + .carousel-item {\n        position: absolute;\n        top: 0;\n        right: -50%;  /*change this with javascript in the future*/\n        z-index: -1;\n        display: block;\n        visibility: visible;\n    }\n}\n@media (min-width: 576px) {\n    .carousel-item {\n        margin-right: 0;\n    }\n    /* show 2 items */\n    .carousel-inner .active + .carousel-item {\n        display: block;\n    }\n    .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left),\n    .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item {\n        transition: none;\n    }\n    .carousel-inner .carousel-item-next {\n        position: relative;\n        -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0);\n    }\n    /* left or forward direction */\n    .active.carousel-item-left + .carousel-item-next.carousel-item-left,\n    .carousel-item-next.carousel-item-left + .carousel-item,\n    .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item {\n        position: relative;\n        -webkit-transform: translate3d(-100%, 0, 0);\n                transform: translate3d(-100%, 0, 0);\n        visibility: visible;\n    }\n    /* farthest right hidden item must be also positioned for animations */\n    .carousel-inner .carousel-item-prev.carousel-item-right {\n        position: absolute;\n        top: 0;\n        left: 0;\n        z-index: -1;\n        display: block;\n        visibility: visible;\n    }\n    /* right or prev direction */\n    .active.carousel-item-right + .carousel-item-prev.carousel-item-right,\n    .carousel-item-prev.carousel-item-right + .carousel-item,\n    .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item {\n        position: relative;\n        -webkit-transform: translate3d(100%, 0, 0);\n                transform: translate3d(100%, 0, 0);\n        visibility: visible;\n        display: block;\n        visibility: visible;\n    }\n}\n/* MD */\n@media (min-width: 768px) {\n    /* show 3rd of 3 item slide */\n    .carousel-inner .active + .carousel-item + .carousel-item {\n        display: block;\n    }\n    .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item + .carousel-item {\n        transition: none;\n    }\n    .carousel-inner .carousel-item-next {\n        position: relative;\n        -webkit-transform: translate3d(0, 0, 0);\n                transform: translate3d(0, 0, 0);\n    }\n    /* left or forward direction */\n    .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item + .carousel-item {\n        position: relative;\n        -webkit-transform: translate3d(-100%, 0, 0);\n                transform: translate3d(-100%, 0, 0);\n        visibility: visible;\n    }\n    /* right or prev direction */\n    .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item + .carousel-item {\n        position: relative;\n        -webkit-transform: translate3d(100%, 0, 0);\n                transform: translate3d(100%, 0, 0);\n        visibility: visible;\n        display: block;\n        visibility: visible;\n    }\n}\n/* LG */\n@media (min-width: 991px) {\n    /* show 4th item */\n    .carousel-inner .active + .carousel-item + .carousel-item + .carousel-item {\n        display: block;\n    }\n    .carousel-inner .carousel-item.active:not(.carousel-item-right):not(.carousel-item-left) + .carousel-item + .carousel-item + .carousel-item {\n        transition: none;\n    }\n    /* Show 5th slide on lg if col-lg-3 */\n    .carousel-inner .active.col-lg-3.carousel-item + .carousel-item + .carousel-item + .carousel-item + .carousel-item {\n        position: absolute;\n        top: 0;\n        right: -25%;  /*change this with javascript in the future*/\n        z-index: -1;\n        display: block;\n        visibility: visible;\n    }\n    /* left or forward direction */\n    .carousel-item-next.carousel-item-left + .carousel-item + .carousel-item + .carousel-item + .carousel-item {\n        position: relative;\n        -webkit-transform: translate3d(-100%, 0, 0);\n                transform: translate3d(-100%, 0, 0);\n        visibility: visible;\n    }\n    /* right or prev direction //t - previous slide direction last item animation fix */\n    .carousel-item-prev.carousel-item-right + .carousel-item + .carousel-item + .carousel-item + .carousel-item {\n        position: relative;\n        -webkit-transform: translate3d(100%, 0, 0);\n                transform: translate3d(100%, 0, 0);\n        visibility: visible;\n        display: block;\n        visibility: visible;\n    }\n}\n.material-icons{\n    font-size: 14px;\n    line-height: 0px;\n    color: purple;\n}\np{\n    margin-bottom: 0rem;\n   \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9jb250ZW50LXZlcmlmaWNhdGlvbi9jb250ZW50LXZlcmlmaWNhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsbUNBQW1DO0lBQ25DLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsZUFBZTtJQUNmLGFBQWE7SUFDYixjQUFjO0FBQ2xCO0FBQ0E7O0VBRUUseUJBQWlCO1VBQWpCLGlCQUFpQjtBQUNuQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1oscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0lBQ1osYUFBYTtJQUNiLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUlBO0lBQ0ksb0NBQW9DO0lBQ3BDO1FBQ0ksa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixnQkFBZ0IsR0FBRyw0Q0FBNEM7UUFDL0QsV0FBVztRQUNYLGNBQWM7UUFDZCxtQkFBbUI7SUFDdkI7QUFDSjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDO1FBQ0ksa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixXQUFXLEdBQUcsNENBQTRDO1FBQzFELFdBQVc7UUFDWCxjQUFjO1FBQ2QsbUJBQW1CO0lBQ3ZCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBLGlCQUFpQjtJQUNqQjtRQUNJLGNBQWM7SUFDbEI7SUFDQTs7UUFFSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGtCQUFrQjtRQUNsQix1Q0FBK0I7Z0JBQS9CLCtCQUErQjtJQUNuQztJQUNBLDhCQUE4QjtJQUM5Qjs7O1FBR0ksa0JBQWtCO1FBQ2xCLDJDQUFtQztnQkFBbkMsbUNBQW1DO1FBQ25DLG1CQUFtQjtJQUN2QjtJQUNBLHNFQUFzRTtJQUN0RTtRQUNJLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sT0FBTztRQUNQLFdBQVc7UUFDWCxjQUFjO1FBQ2QsbUJBQW1CO0lBQ3ZCO0lBQ0EsNEJBQTRCO0lBQzVCOzs7UUFHSSxrQkFBa0I7UUFDbEIsMENBQWtDO2dCQUFsQyxrQ0FBa0M7UUFDbEMsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxtQkFBbUI7SUFDdkI7QUFDSjtBQUNBLE9BQU87QUFDUDtJQUNJLDZCQUE2QjtJQUM3QjtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLHVDQUErQjtnQkFBL0IsK0JBQStCO0lBQ25DO0lBQ0EsOEJBQThCO0lBQzlCO1FBQ0ksa0JBQWtCO1FBQ2xCLDJDQUFtQztnQkFBbkMsbUNBQW1DO1FBQ25DLG1CQUFtQjtJQUN2QjtJQUNBLDRCQUE0QjtJQUM1QjtRQUNJLGtCQUFrQjtRQUNsQiwwQ0FBa0M7Z0JBQWxDLGtDQUFrQztRQUNsQyxtQkFBbUI7UUFDbkIsY0FBYztRQUNkLG1CQUFtQjtJQUN2QjtBQUNKO0FBQ0EsT0FBTztBQUNQO0lBQ0ksa0JBQWtCO0lBQ2xCO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0EscUNBQXFDO0lBQ3JDO1FBQ0ksa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixXQUFXLEdBQUcsNENBQTRDO1FBQzFELFdBQVc7UUFDWCxjQUFjO1FBQ2QsbUJBQW1CO0lBQ3ZCO0lBQ0EsOEJBQThCO0lBQzlCO1FBQ0ksa0JBQWtCO1FBQ2xCLDJDQUFtQztnQkFBbkMsbUNBQW1DO1FBQ25DLG1CQUFtQjtJQUN2QjtJQUNBLG1GQUFtRjtJQUNuRjtRQUNJLGtCQUFrQjtRQUNsQiwwQ0FBa0M7Z0JBQWxDLGtDQUFrQztRQUNsQyxtQkFBbUI7UUFDbkIsY0FBYztRQUNkLG1CQUFtQjtJQUN2QjtBQUNKO0FBR0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7QUFDQTtJQUNJLG1CQUFtQjs7QUFFdkIiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2NvbnRlbnQtdmVyaWZpY2F0aW9uL2NvbnRlbnQtdmVyaWZpY2F0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbntcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOWU0ZjE7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggMHB4IDFweCAjYmRkNGVmO1xuICAgIGNvbG9yOiBkYXJrc2xhdGVncmF5O1xuICAgIG1hcmdpbjogMC4yNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmxleDogMCAwIDIzJTtcbiAgICBtYXgtd2lkdGg6IDIzJTtcbn1cbi5jYXJvdXNlbC1jb250cm9sLW5leHQtaWNvbixcbi5jYXJvdXNlbC1jb250cm9sLXByZXYtaWNvbiB7XG4gIGZpbHRlcjogaW52ZXJ0KDEpO1xufVxuLmNhcm91c2VsLWNvbnRyb2wtbmV4dHtcbiAgICBwYWRkaW5nLWxlZnQ6IDVyZW07XG59XG4uY2Fyb3VzZWwtY29udHJvbC1wcmV2e1xuICAgIHBhZGRpbmctcmlnaHQ6IDhyZW07XG59XG4uY2Fyb3VzZWwtaW5uZXJ7XG4gICAgcGFkZGluZy1sZWZ0OiAycmVtO1xufVxuLmNhcm91c2Vse1xuICAgIHBhZGRpbmctbGVmdDogMnJlbTtcbn1cbi5zZWN0aW9uOmhvdmVye1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kOiAjZDllNGYxYTY7IFxufVxuI3F1ZXNWaWV3TW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XG59XG5cbiNxdWVzVmlld01vZGFsIC5jbG9zZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxRDZDMztcbiAgICBwYWRkaW5nOiAwcHggNnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMTdweDtcbn1cblxuLmNsb3NlX2ljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogI2Y0NDMzNjtcbiAgICByaWdodDogLTMwcHg7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICB0b3A6IDVweDtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4ycztcbn1cblxuLmNsb3NlX2ljb24gaSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbiBcbiBcbiBcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtd2lkdGg6IDk5MXB4KSB7XG4gICAgLyogU2hvdyA0dGggc2xpZGUgb24gbWQgaWYgY29sLW1kLTQqL1xuICAgIC5jYXJvdXNlbC1pbm5lciAuYWN0aXZlLmNvbC1tZC00LmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IC0zMy4zMzMzJTsgIC8qY2hhbmdlIHRoaXMgd2l0aCBqYXZhc2NyaXB0IGluIHRoZSBmdXR1cmUqL1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAvKiBTaG93IDNyZCBzbGlkZSBvbiBzbSBpZiBjb2wtc20tNiovXG4gICAgLmNhcm91c2VsLWlubmVyIC5hY3RpdmUuY29sLXNtLTYuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IC01MCU7ICAvKmNoYW5nZSB0aGlzIHdpdGggamF2YXNjcmlwdCBpbiB0aGUgZnV0dXJlKi9cbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1NzZweCkge1xuICAgIC5jYXJvdXNlbC1pdGVtIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbiAgICAvKiBzaG93IDIgaXRlbXMgKi9cbiAgICAuY2Fyb3VzZWwtaW5uZXIgLmFjdGl2ZSArIC5jYXJvdXNlbC1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbS5hY3RpdmU6bm90KC5jYXJvdXNlbC1pdGVtLXJpZ2h0KTpub3QoLmNhcm91c2VsLWl0ZW0tbGVmdCksXG4gICAgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtLmFjdGl2ZTpub3QoLmNhcm91c2VsLWl0ZW0tcmlnaHQpOm5vdCguY2Fyb3VzZWwtaXRlbS1sZWZ0KSArIC5jYXJvdXNlbC1pdGVtIHtcbiAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICB9XG4gICAgLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtLW5leHQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgfVxuICAgIC8qIGxlZnQgb3IgZm9yd2FyZCBkaXJlY3Rpb24gKi9cbiAgICAuYWN0aXZlLmNhcm91c2VsLWl0ZW0tbGVmdCArIC5jYXJvdXNlbC1pdGVtLW5leHQuY2Fyb3VzZWwtaXRlbS1sZWZ0LFxuICAgIC5jYXJvdXNlbC1pdGVtLW5leHQuY2Fyb3VzZWwtaXRlbS1sZWZ0ICsgLmNhcm91c2VsLWl0ZW0sXG4gICAgLmNhcm91c2VsLWl0ZW0tbmV4dC5jYXJvdXNlbC1pdGVtLWxlZnQgKyAuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9XG4gICAgLyogZmFydGhlc3QgcmlnaHQgaGlkZGVuIGl0ZW0gbXVzdCBiZSBhbHNvIHBvc2l0aW9uZWQgZm9yIGFuaW1hdGlvbnMgKi9cbiAgICAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0tcHJldi5jYXJvdXNlbC1pdGVtLXJpZ2h0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9XG4gICAgLyogcmlnaHQgb3IgcHJldiBkaXJlY3Rpb24gKi9cbiAgICAuYWN0aXZlLmNhcm91c2VsLWl0ZW0tcmlnaHQgKyAuY2Fyb3VzZWwtaXRlbS1wcmV2LmNhcm91c2VsLWl0ZW0tcmlnaHQsXG4gICAgLmNhcm91c2VsLWl0ZW0tcHJldi5jYXJvdXNlbC1pdGVtLXJpZ2h0ICsgLmNhcm91c2VsLWl0ZW0sXG4gICAgLmNhcm91c2VsLWl0ZW0tcHJldi5jYXJvdXNlbC1pdGVtLXJpZ2h0ICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgfVxufVxuLyogTUQgKi9cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC8qIHNob3cgM3JkIG9mIDMgaXRlbSBzbGlkZSAqL1xuICAgIC5jYXJvdXNlbC1pbm5lciAuYWN0aXZlICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0uYWN0aXZlOm5vdCguY2Fyb3VzZWwtaXRlbS1yaWdodCk6bm90KC5jYXJvdXNlbC1pdGVtLWxlZnQpICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSB7XG4gICAgICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgfVxuICAgIC5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbS1uZXh0IHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIH1cbiAgICAvKiBsZWZ0IG9yIGZvcndhcmQgZGlyZWN0aW9uICovXG4gICAgLmNhcm91c2VsLWl0ZW0tbmV4dC5jYXJvdXNlbC1pdGVtLWxlZnQgKyAuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIH1cbiAgICAvKiByaWdodCBvciBwcmV2IGRpcmVjdGlvbiAqL1xuICAgIC5jYXJvdXNlbC1pdGVtLXByZXYuY2Fyb3VzZWwtaXRlbS1yaWdodCArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgfVxufVxuLyogTEcgKi9cbkBtZWRpYSAobWluLXdpZHRoOiA5OTFweCkge1xuICAgIC8qIHNob3cgNHRoIGl0ZW0gKi9cbiAgICAuY2Fyb3VzZWwtaW5uZXIgLmFjdGl2ZSArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgICAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0uYWN0aXZlOm5vdCguY2Fyb3VzZWwtaXRlbS1yaWdodCk6bm90KC5jYXJvdXNlbC1pdGVtLWxlZnQpICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtIHtcbiAgICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICB9XG4gICAgLyogU2hvdyA1dGggc2xpZGUgb24gbGcgaWYgY29sLWxnLTMgKi9cbiAgICAuY2Fyb3VzZWwtaW5uZXIgLmFjdGl2ZS5jb2wtbGctMy5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IC0yNSU7ICAvKmNoYW5nZSB0aGlzIHdpdGggamF2YXNjcmlwdCBpbiB0aGUgZnV0dXJlKi9cbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIH1cbiAgICAvKiBsZWZ0IG9yIGZvcndhcmQgZGlyZWN0aW9uICovXG4gICAgLmNhcm91c2VsLWl0ZW0tbmV4dC5jYXJvdXNlbC1pdGVtLWxlZnQgKyAuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgfVxuICAgIC8qIHJpZ2h0IG9yIHByZXYgZGlyZWN0aW9uIC8vdCAtIHByZXZpb3VzIHNsaWRlIGRpcmVjdGlvbiBsYXN0IGl0ZW0gYW5pbWF0aW9uIGZpeCAqL1xuICAgIC5jYXJvdXNlbC1pdGVtLXByZXYuY2Fyb3VzZWwtaXRlbS1yaWdodCArIC5jYXJvdXNlbC1pdGVtICsgLmNhcm91c2VsLWl0ZW0gKyAuY2Fyb3VzZWwtaXRlbSArIC5jYXJvdXNlbC1pdGVtIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9XG59XG5cblxuLm1hdGVyaWFsLWljb25ze1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMHB4O1xuICAgIGNvbG9yOiBwdXJwbGU7XG59XG5we1xuICAgIG1hcmdpbi1ib3R0b206IDByZW07XG4gICBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Components/content-verification/content-verification.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/Components/content-verification/content-verification.component.ts ***!
  \***********************************************************************************/
/*! exports provided: ContentVerificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentVerificationComponent", function() { return ContentVerificationComponent; });
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


var ContentVerificationComponent = /** @class */ (function () {
    function ContentVerificationComponent(apiService) {
        this.apiService = apiService;
        this.questionsList = [];
        this.questionFlag = false;
        this.localPageNo = 1;
        this.quetionCount = 0;
        this.checkBoxAnswers = [];
        this.sectionList = [];
        this.links = [];
    }
    ContentVerificationComponent.prototype.getQuestions = function (section, offset) {
        var _this = this;
        this.questionsList = [];
        this.currentSection = section;
        this.apiService.getAll('reports/questioncontribution/listofquestioncontribution?token=' + localStorage.getItem('token') + '&contributionQuestionsOffset=' + offset + '&sectionId=' + section.sectionId + '&contributerId=' + section.contributerId + '&instanceId=' + section.instanceId)
            .subscribe(function (res) {
            console.log(res);
            if (res['statusCode'] == 1) {
                // this.links=res['contributionRequestDTOList'];
                _this.questionsList = res['questionContribution'];
                _this.questionFlag = true;
                // this.quetionCount=res['']
            }
        }, function (error) {
        }),
            function () {
            };
    };
    ContentVerificationComponent.prototype.onLocalPageChange = function (event) {
        this.localPageNo = event;
        this.getQuestions(this.currentSection, this.localPageNo - 1);
    };
    ContentVerificationComponent.prototype.viewQuestion = function (ques) {
        var _this = this;
        this.hoverGlobQues = ques;
        if (this.hoverGlobQues['questionTypeId'] == '1') {
            var ind = this.hoverGlobQues['optionsList'].findIndex(function (item) {
                return item.optionId == _this.hoverGlobQues['answer'];
            });
            if (ind > -1) {
                this.mcaAns = ind;
            }
        }
        if (this.hoverGlobQues['questionTypeId'] == '2') {
            var answerId = this.hoverGlobQues['answer'].split(',');
            var _loop_1 = function (i) {
                ind = this_1.hoverGlobQues['optionsList'].findIndex(function (item) {
                    return item.optionId == answerId[i];
                });
                if (ind > -1) {
                    this_1.checkBoxAnswers.push(ind);
                }
            };
            var this_1 = this, ind;
            for (var i = 0; i < answerId.length; i++) {
                _loop_1(i);
            }
        }
        // console.log("this.checkBoxAnswers",this.checkBoxAnswers)
    };
    ContentVerificationComponent.prototype.validateQuestion = function (status) {
        var _this = this;
        this.hoverGlobQues.questionVerificationStatus = status;
        var temp = [];
        temp.push(this.hoverGlobQues);
        this.apiService.postData("reports/questioncontribution/contributionquestionsadding?token=" + localStorage.getItem('token'), {
            contributionQuestionRequestList: temp,
            token: localStorage.getItem('token')
        }).subscribe(function (res) {
            if (res['statusCode'] == 1) {
                _this.getQuestions(_this.currentSection, 0);
                $('#quesViewModal').modal('hide');
            }
        }, function (error) {
            console.log(error);
        }, function () {
        });
    };
    ContentVerificationComponent.prototype.getDetails = function (id, index) {
        var _this = this;
        this.questionFlag = false;
        this.questionsList = [];
        this.sectionList = [];
        this.apiService.getAll('reports/questioncontribution/listofcontributiondetailesbyrequestid?token=' + localStorage.getItem('token') + '&contributionRequestId=' + id)
            .subscribe(function (res) {
            console.log(res);
            if (res['statusCode'] == 1) {
                // this.links=res['contributionRequestDTOList'];
                _this.sectionList = res['contributionRequestDetailesList'];
            }
        }, function (error) {
        }),
            function () {
                /*
                    Carousel
                */
                if (_this.sectionList.length > 4) {
                    $('#car' + index).on('slide.bs.carousel', function (e) {
                        /*
                            CC 2.0 License Iatek LLC 2018 - Attribution required
                        */
                        var $e = $(e.relatedTarget);
                        var idx = $e.index();
                        var itemsPerSlide = 4;
                        var totalItems = $('.carousel-item').length;
                        if (idx >= totalItems - (itemsPerSlide - 1)) {
                            var it = itemsPerSlide - (totalItems - idx);
                            for (var i = 0; i < it; i++) {
                                // append slides to end
                                if (e.direction == "left") {
                                    $('.carousel-item').eq(i).appendTo('.carousel-inner');
                                }
                                else {
                                    $('.carousel-item').eq(0).appendTo('.carousel-inner');
                                }
                            }
                        }
                    });
                }
            };
    };
    ContentVerificationComponent.prototype.getContributorLinks = function () {
        var _this = this;
        this.apiService.getAll('reports/questioncontribution/listofcontributionrequests?token=' + localStorage.getItem('token'))
            .subscribe(function (res) {
            console.log(res);
            if (res['statusCode'] == 1) {
                _this.links = res['contributionRequestDTOList'];
            }
        }, function (error) {
        }),
            function () {
            };
    };
    ContentVerificationComponent.prototype.ngOnInit = function () {
        this.getContributorLinks();
    };
    ContentVerificationComponent.ctorParameters = function () { return [
        { type: _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"] }
    ]; };
    ContentVerificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-content-verification',
            template: __webpack_require__(/*! raw-loader!./content-verification.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/content-verification/content-verification.component.html"),
            styles: [__webpack_require__(/*! ./content-verification.component.css */ "./src/app/Components/content-verification/content-verification.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"]])
    ], ContentVerificationComponent);
    return ContentVerificationComponent;
}());



/***/ }),

/***/ "./src/app/Modules/content-verification/content-verification-routing.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/Modules/content-verification/content-verification-routing.module.ts ***!
  \*************************************************************************************/
/*! exports provided: ContentVerificationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentVerificationRoutingModule", function() { return ContentVerificationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
/* harmony import */ var _Components_content_verification_content_verification_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Components/content-verification/content-verification.component */ "./src/app/Components/content-verification/content-verification.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [{
        path: '',
        component: _Components_content_verification_content_verification_component__WEBPACK_IMPORTED_MODULE_4__["ContentVerificationComponent"]
    }];
var ContentVerificationRoutingModule = /** @class */ (function () {
    function ContentVerificationRoutingModule() {
    }
    ContentVerificationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_Components_content_verification_content_verification_component__WEBPACK_IMPORTED_MODULE_4__["ContentVerificationComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_14__["MatMenuModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__["MatCheckboxModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_12__["MatSlideToggleModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_11__["MatRadioModule"], ng_block_ui__WEBPACK_IMPORTED_MODULE_3__["BlockUIModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ContentVerificationRoutingModule);
    return ContentVerificationRoutingModule;
}());



/***/ }),

/***/ "./src/app/Modules/content-verification/content-verification.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/Modules/content-verification/content-verification.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ContentVerificationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentVerificationModule", function() { return ContentVerificationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _content_verification_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-verification-routing.module */ "./src/app/Modules/content-verification/content-verification-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContentVerificationModule = /** @class */ (function () {
    function ContentVerificationModule() {
    }
    ContentVerificationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _content_verification_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContentVerificationRoutingModule"]
            ]
        })
    ], ContentVerificationModule);
    return ContentVerificationModule;
}());



/***/ })

}]);
//# sourceMappingURL=Modules-content-verification-content-verification-module.js.map