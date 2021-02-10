(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Modules-reports-reports-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/reports/reports.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/reports/reports.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<block-ui>\n\n</block-ui>\n\n<div class=\"reports_sec pt-4 pb-4 pl-4 pr-4\" *ngIf=\"!showResult\">\n    <div class=\"row\">\n        <div class=\"col-sm-12 report_txt\">\n            <h4>\n                <b>Reports</b>\n            </h4>\n            <hr class=\"m-0\">\n        </div>\n    </div>\n    <div class=\"row filters_sec pt-4 pb-4\">\n        <!-- <div class=\"col-sm-5\">\n            <input class=\"form-control\" placeholder=\"Search\" [(ngModel)]=\"searchCandid\" (input)=\"getCandidResults(searchCandid,testTitle,duration)\">\n            <button class=\"filter_Serch_btn btn\">\n                <i class=\"material-icons\">\n                    search\n                </i>\n            </button>\n        </div> -->\n        <div class=\"col-sm-12\">\n            <div class=\"row\" *ngIf=\"allTests && allTests['listOfTests']\">\n                <div class=\"test_title\">\n                    <select class=\"form-control pointer\" [(ngModel)]=\"testTitle\" (change)=\"getCandidResults(testTitle,resultStatus)\">\n                        <option disabled>Test Title</option>\n                        <option [title]=\"test.testTitle\" *ngFor=\"let test of allTests['listOfTests']\" [value]=\"test.testConfigId\">{{test.testTitle}}</option>\n                    </select>\n                    <span class=\"select_arrow\">\n                        <i class=\"material-icons\">\n                            expand_more\n                        </i>\n                    </span>\n                </div>\n                <div class=\"qualified_title\">\n                    <select class=\"form-control pointer\" [(ngModel)]=\"resultStatus\" (change)=\"getCandidResults(testTitle,resultStatus)\">\n                        <option [value]=\"1\">Qualified</option>\n                        <option [value]=\"0\">Not Qualified</option>\n                    </select>\n                    <span class=\"select_arrow\">\n                        <i class=\"material-icons\">\n                            expand_more\n                        </i>\n                    </span>\n                </div>\n                <div class=\"notify_results\">\n                    <!-- <select class=\"form-control\">\n                        <option>All</option>\n                    </select>\n                    <span class=\"select_arrow\">\n                        <i class=\"material-icons\">\n                            expand_more\n                        </i>\n                    </span> -->\n                    <button *ngIf=\"notifyResult\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#notifyResultsModal\">Notify Results</button>\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <div class=\"row filter_tbl boxShadow m-0\">\n        <table class=\"table mb-0\">\n            <thead>\n                <tr class=\"cursor_initial\" style=\"color: #ffffff;background-color: #425db5;\">\n                    <th>S.NO</th>\n                    <th>Candidate Name</th>\n                    <th>Test Title</th>\n                    <th>Percentage</th>\n                    <th>Notified?</th>\n                </tr>\n            </thead>\n            <tbody *ngIf=\"filterData && filterData['listOfCandidateResults'].length>0\">\n                <tr style=\"background-color: #ffffff;color:black;\" *ngFor=\"let user of filterData['listOfCandidateResults']; index as i\" (click)=\"getResult(user);apiService.cfs ? getCandidPicsFromCfs(user):getCandidPics(user);getSuspiciosActivity(user)\">\n                    <td>{{i+1}}</td>\n                    <td>{{user.candidateName}}</td>\n                    <td>{{user.testTitle}}</td>\n                    <td> {{user.testPercentage}}</td>\n                    <td>\n                        <img src=\"./../../../assets/images/email-non-tick.png\" *ngIf=\"user.resultMailSendStatus == 0\" />\n                        <img src=\"./../../../assets/images/email-tick.png\" *ngIf=\"user.resultMailSendStatus == 1\" />\n                    </td>\n                </tr>\n            </tbody>\n            <tbody *ngIf=\"filterData && !filterData['listOfCandidateResults'].length\">\n                <tr class=\"text-center no_filter_tbl\">\n                    <td class=\"errorTxt\" colspan=\"5\">{{filterData.statusMessage}}</td>\n                </tr>\n            </tbody>\n\n        </table>\n    </div>\n    <!-- <div class=\"row boxShadow m-0\" *ngIf=\"filterData && !filterData['listOfCandidateResults'].length\">\n        <table class=\"table mb-0\">\n            <tr class=\"text-center\">\n                <td class=\"errorTxt\" colspan=\"5\">{{filterData.statusMessage}}</td>\n            </tr>\n        </table>\n    </div> -->\n</div>\n<div class=\"\" *ngIf=\"showResult\">\n    <div class=\"row m-0 mb-4\">\n        <button class=\"btn close_btn ml-auto mr-5 mt-4 boxShadow\" (click)=\"getResult()\">\n            <i class=\"material-icons\">\n                close\n            </i>\n        </button>\n    </div>\n    <div class=\"row m-0 report_result p-5 boxShadow\" *ngIf=\"candidate\">\n        <div class=\"col-sm-2 text-center\">\n            <span class=\"person_img\">\n                <i class=\"material-icons boxShadow\">\n                    person\n                </i>\n            </span>\n        </div>\n        <div class=\"col-sm-6\">\n            <div class=\"d-flex\">\n                <div class=\"flex-fill\">\n                    <h4>\n                        <b>{{candidate.candidateName | titlecase}}</b>\n                    </h4>\n                    <hr>\n                </div>\n                <div class=\"flex-fill text-center\">\n                    <span class=\"ml-3 mr-3 check_icon\" *ngIf=\"candidate.testStatus == 'Qualified'\">\n                        <i class=\"material-icons\">\n                            check\n                        </i>\n                    </span>\n                    <span class=\"ml-3 mr-3 cancel_icon\" *ngIf=\"candidate.testStatus == 'Not Qualified'\">\n                        <i class=\"material-icons\">\n                            close\n                        </i>\n                    </span>\n                    <span *ngIf=\"candidate.testStatus == 'Qualified'\">{{candidate.testStatus}}</span>\n                    <span class=\"errorTxt\" *ngIf=\"candidate.testStatus == 'Not Qualified' \">{{candidate.testStatus}}</span>\n                </div>\n            </div>\n            <div class=\"test_details\">\n                <div class=\"d-flex\">\n                    <div class=\"\">\n                        <p>Test Title</p>\n                    </div>\n                    <div class=\"pl-5 ml-1\">\n                        <b>{{candidate.testTitle}}</b>\n                    </div>\n                </div>\n                <div class=\"d-flex\">\n                    <div class=\"\">\n                        <p>Test Duration</p>\n                    </div>\n                    <div class=\"pl-3 ml-1\">\n                        <b>{{candidate.testDuration}}</b>\n                    </div>\n                </div>\n                <div class=\"d-flex\">\n                    <div class=\"\">\n                        <p>Written on</p>\n                    </div>\n                    <div class=\"pl-4 ml-3\">\n                        <b>{{candidate.writtenOn | date:'mediumDate'}}</b>\n                    </div>\n                </div>\n                <div class=\"d-flex\">\n                    <div class=\"\">\n                        <p>Percentage</p>\n                    </div>\n                    <div class=\"pl-5 ml-4\">\n                        <b>{{candidate.testPercentage}} %</b>\n                    </div>\n                </div>\n                <div class=\"mail_Score col-sm-12\">\n                    <button class=\"btn pb-2\" (click)=\"mailResult()\">\n                        <i class=\"material-icons pl-2\">\n                            email\n                        </i>\n                        <span class=\"pl-4\">Mail This</span>\n                    </button>\n                    <button class=\"btn pb-2 review_btn  ml-4\" data-toggle=\"modal\" data-target=\"#reviewModal\" (click)=\"getCandidateQUestions(candidate)\">\n                        <i class=\"material-icons pl-2\">\n                            remove_red_eye\n                        </i>\n                        <span class=\"pl-4\">Review</span>\n                    </button>\n\n                </div>\n\n            </div>\n        </div>\n        <div class=\"col-sm-4\">\n            <div class=\"row score_board p-4\">\n                <div class=\"col-sm-6\">\n                    <h4>Sections</h4>\n                    <hr>\n                </div>\n                <div class=\"col-sm-6\">\n                    <h4>Percentage</h4>\n                    <hr>\n                </div>\n                <div class=\"col-sm-12\" *ngFor=\"let sec of sectionList['sections']\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <p>{{sec.sectionName}}</p>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            :\n                            <span class=\"score_left\">{{sec.sectionwisePercentage}} %</span>\n                        </div>\n                    </div>\n                </div>\n                <hr class=\"col-sm-12 mt-0\">\n                <div class=\"col-sm-12\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <p>Overall Test Percentage</p>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            :\n                            <span class=\"score_left\">{{sectionList.total}} %</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row pt-5 pb-5 col-sm-12\" *ngIf=\"candidate.candidateResultViewURL\">\n            <div class=\"col-sm-8 mail_Score\">\n                <input class=\"form-control\" placeholder=\"Link to View Result\" [(ngModel)]=\"candidate.candidateResultViewURL\" disabled>\n            </div>\n            <div class=\"col-sm-4 mail_Score\">\n                <button class=\"btn pb-2\" (click)=\"shareResult(candidate)\">Copy Link to Share Result </button>\n            </div>\n        </div>\n        <div *ngIf=\"!apiService.cfs\" class=\"col-sm-12\">\n            <div class=\"col-sm-12\" *ngIf=\"userPics && userPics['candidatePictureList'].length\">\n                <h4>ScreenShots</h4>\n                <div class=\"row pt-5 pb-5 col-sm-12\">\n                    <div class=\"col-sm-2\" *ngFor=\"let pic of userPics['candidatePictureList']\">\n                        <img [src]=\"pic.imgSrc\" class=\"exam_pic pointer\" alt=\"candidate-exam-pics\">\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"apiService.cfs\" class=\"col-sm-12\">\n            <div class=\"col-sm-12\" *ngIf=\"userPics && userPics['candidatePictureList'].length\">\n                <h4>ScreenShots</h4>\n                <div class=\"row pt-5 pb-5 col-sm-12\">\n                    <div class=\"col-sm-2\" *ngFor=\"let pic of userPics['candidatePictureList']\">\n                        <img [src]=\"pic.cfsViewURL\" class=\"exam_pic pointer\" alt=\"candidate-exam-pics\">\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"col-sm-12\">\n            <h4>User Suspicious Activities</h4>\n            <div class=\"row filter_tbl boxShadow m-0\" *ngIf=\"activities && activities['candidateSuspiciousActivityList'].length\">\n\n                <table class=\"table mb-0\">\n                    <thead style=\"background-color: #425db5;\">\n                        <tr class=\"cursor_initial\">\n                            <th>S.NO</th>\n                            <th>Activity</th>\n                            <th>Out Time</th>\n                            <th>In Time</th>\n                            <th>Duration<span style=\"font-size:x-small\">(In Secs)</span></th>\n\n\n\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr style=\"background-color:  #ffffff;color:black;\" *ngFor=\"let activity of activities['candidateSuspiciousActivityList']; index as i\">\n                            <td>{{i+1}}</td>\n                            <td>{{activity.activityTypeName}}</td>\n                            <td> {{activity.activityOUT | date:'medium' }}</td>\n                            <td> {{activity.activityIn | date:'medium' }}</td>\n                            <td> {{activity.timeDuration }}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <div class=\"row filter_tbl boxShadow m-0\" *ngIf=\"activities && !activities['candidateSuspiciousActivityList'].length\">\n\n                <table class=\"table mb-0\">\n                    <thead style=\"background-color: #425db5;\">\n                        <tr class=\"cursor_initial\">\n                            <th>S.NO</th>\n                            <th>Activity</th>\n                            <th>Out Time</th>\n                            <th>In Time</th>\n                            <th>Duration</th>\n\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr style=\"background-color:  #ffffff;color:red;text-align:center;\">\n                            <td></td>\n                            <td>No Suspicious Activity Found</td>\n                            <td> </td>\n\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n        </div>\n\n    </div>\n</div>\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"reviewModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n            <!-- Modal Header -->\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title report_txt\">Review Test</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n                    <span class=\"boxShadow\">\n                        <i class=\"material-icons\">\n                            clear\n                        </i>\n                    </span>\n\n                </button>\n            </div>\n\n            <!-- Modal body -->\n            <div class=\"modal-body pl-5\">\n                <div *ngIf=\"!candidReview\" class=\"well errorTxt text-center\">\n                    No Test Review Questions Available.\n                </div>\n                <div class=\"row m-0\" *ngFor=\"let ques of candidReview;let i=index\">\n                    <div class=\"col-sm-12\" *ngIf=\"ques.questionTypeId == '3' || ques.questionTypeId == '4' || ques.questionTypeId == '5' || ques.questionTypeId == '6'\">\n                        <div class=\"pt-3 pb-3\">\n                            <span class=\"report_txt\">\n                                <b>{{i+1}}.</b>\n                            </span>\n                            <span class=\"report_txt pl-4\"> {{ques.qustionText}}</span>\n                            <span *ngIf=\"ques.answerStatus=='Correct'\" [ngClass]=\"{'correct_tick':ques.answerStatus=='Correct','review_tick':true}\">\n                                <i class=\"material-icons\">\n                                    done\n                                </i>\n                            </span>\n                            <span *ngIf=\"ques.answerStatus=='InCorrect'\" [ngClass]=\"{'wrong_tick':ques.answerStatus=='InCorrect','review_tick':true}\">\n                                <i class=\"material-icons\">\n                                    clear\n                                </i>\n                            </span>\n\n                        </div>\n                        <div class=\"pt-3 pb-3 col-sm-12\">\n                            <pre *ngIf=\"ques.questionCode && ques.questionCode!='null'\">{{ques.questionCode}}</pre>\n                        </div>\n                        <div>\n                            <div class=\"col-sm-12\" *ngIf=\"ques.questionTypeId == '3'\">\n                                <span class=\"pl-4 ml-2 reports_answer\">\n                                    <b>A .</b>\n                                </span>\n                                <textarea [ngModel]=\"ques.candidateAnswer\" cols='50' rows=\"5\" [ngClass]=\"{'fill_ans': ques.answerStatus == 'Correct','fill_in form-control ml-4':true}\" disabled> </textarea>\n                                <span *ngIf=\"ques.answerStatus == 'Correct'\" [ngClass]=\"{'correct_ans_txt':ques.answerStatus == 'Correct'}\">Correct Answer !</span>\n                            </div>\n                            <div class=\"col-sm-12\" *ngIf=\"ques.questionTypeId != '3'\">\n                                <textarea [ngModel]=\"ques.candidateAnswer\" class=\"text_area_ans\" cols=\"50\" rows=\"5\" disabled></textarea>\n                                <span *ngIf=\" ques.questionTypeId != '3' && ques.answerStatus == 'Correct'\" [ngClass]=\"{'correct_ans_txt':ques.answerStatus == 'Correct'}\">Correct Answer !</span>\n                            </div>\n                        </div>\n                        <div class=\"col-sm-12\">\n\n                            <!-- <p class=\"p-4 ml-4\">\n                                <span *ngIf=\"ques.questionTypeId == '3' && ques.candidateAnswer != ques.actualAnswer\" [ngClass]=\"{'fill_ans': ques.candidateAnswer != ques.actualAnswer}\">\n                                    {{ques.actualAnswer}}\n                                </span>\n                                <span *ngIf=\"ques.candidateAnswer!=ques.actualAnswer\" [ngClass]=\"{'correct_ans_txt':ques.candidateAnswer!=ques.actualAnswer}\">Correct Answer !</span>\n                            </p>\n                            <textarea *ngIf=\"ques.questionTypeId != '3' && ques.candidateAnswer!=ques.actualAnswer\" [ngModel]=\"ques.actualAnswer\" class=\"text_area_ans\"\n                                cols=\"50\" rows=\"5\" disabled></textarea>\n                            <span *ngIf=\" ques.questionTypeId != '3' && ques.candidateAnswer!=ques.actualAnswer\" [ngClass]=\"{'correct_ans_txt':ques.candidateAnswer!=ques.actualAnswer}\">Correct Answer !</span> -->\n                            <div class=\"p-4 ml-4 row\">\n                                <div *ngIf=\"ques.questionTypeId == '3' && ques.answerStatus == 'InCorrect'\" [ngClass]=\"{'fill_ans': ques.answerStatus == 'InCorrect','col-sm-8 m-0':true}\">\n                                    {{ques.actualAnswer}}\n                                </div>\n                                <div *ngIf=\"ques.questionTypeId == '3' && ques.answerStatus == 'InCorrect'\" [ngClass]=\"{'correct_ans_txt':ques.answerStatus == 'InCorrect','col-sm-4 m-0':true}\">Correct Answer !</div>\n                            </div>\n                            <textarea *ngIf=\"ques.questionTypeId != '3' && ques.answerStatus == 'InCorrect'\" [ngModel]=\"ques.actualAnswer\" class=\"text_area_ans\" cols=\"50\" rows=\"5\" disabled></textarea>\n                            <span *ngIf=\" ques.questionTypeId != '3' && ques.answerStatus == 'InCorrect'\" [ngClass]=\"{'correct_ans_txt':ques.answerStatus == 'InCorrect'}\">Correct Answer !</span>\n\n                        </div>\n                    </div>\n                    <div *ngIf=\"ques.questionTypeId == '1'\" class=\"col-sm-12\">\n                        <div class=\"pt-3 pb-3\">\n                            <span class=\"report_txt\">\n                                <b>{{i+1}}.</b>\n                            </span>\n                            <span class=\"report_txt pl-4\">{{ques.qustionText}}</span>\n                            <span *ngIf=\"ques.answerStatus=='Correct'\" [ngClass]=\"{'correct_tick':ques.answerStatus=='Correct','review_tick':true}\">\n                                <i class=\"material-icons\">\n                                    done\n                                </i>\n                            </span>\n                            <span *ngIf=\"ques.answerStatus=='InCorrect'\" [ngClass]=\"{'wrong_tick':ques.answerStatus=='InCorrect','review_tick':true}\">\n                                <i class=\"material-icons\">\n                                    clear\n                                </i>\n                            </span>\n\n                        </div>\n\n                        <div class=\"pt-3 pb-3 col-sm-12\">\n                            <pre *ngIf=\"ques.questionCode && ques.questionCode!='null'\">{{ques.questionCode}}</pre>\n                        </div>\n\n                        <div class=\"col-sm-12\">\n\n                            <mat-radio-group [(ngModel)]=\"ques.candidateAnswer\" disabled=\"true\">\n                                <mat-radio-button [ngClass]=\"{'correct_radio': ques.candidateAnswer==ques.actualAnswer,'wrong_radio':ques.candidateAnswer!=ques.actualAnswer}\" [value]=\"option.optionText\" *ngFor=\"let option of ques.optionsList\">\n                                    <span [ngClass]=\"{'correct_ans':option.optionText==ques.actualAnswer,'white_spac_rad':true}\">{{option.optionText}}</span>\n                                    <span *ngIf=\"option.optionText==ques.actualAnswer\" [ngClass]=\"{'correct_ans_txt':option.optionText==ques.actualAnswer}\">Correct Answer !</span>\n                                </mat-radio-button>\n                            </mat-radio-group>\n                        </div>\n                        <!-- <div class=\"col-sm-12\">\n                                        <button class=\"btn btn-success\">Answer &nbsp; : &nbsp;\n                                            <b class=\"actul_ans_bg\">{{ques.actualAnswer}}</b>\n                                        </button>\n                                    </div> -->\n                    </div>\n                    <div *ngIf=\"ques.questionTypeId == '2'\" class=\"col-sm-12\">\n                        <div class=\"pt-3 pb-3\">\n                            <span class=\"report_txt\">\n                                <b>{{i+1}}.</b>\n                            </span>\n                            <span class=\"report_txt pl-4\">{{ques.qustionText}}</span>\n                            <span *ngIf=\"ques.answerStatus=='Correct'\" [ngClass]=\"{'correct_tick':ques.answerStatus=='Correct','review_tick':true}\">\n                                <i class=\"material-icons\">\n                                    done\n                                </i>\n                            </span>\n                            <span *ngIf=\"ques.answerStatus=='InCorrect'\" [ngClass]=\"{'wrong_tick':ques.answerStatus=='InCorrect','review_tick':true}\">\n                                <i class=\"material-icons\">\n                                    clear\n                                </i>\n                            </span>\n\n                        </div>\n                        <div class=\"pt-3 pb-3 col-sm-12\">\n                            <pre *ngIf=\"ques.questionCode && ques.questionCode!='null'\">{{ques.questionCode}}</pre>\n                        </div>\n\n                        <div class=\"col-sm-12\">\n\n                            <div class=\"check_green\" *ngFor=\"let opt of ques.optionsList\">\n                                <mat-checkbox [ngClass]=\"{'check_ans' : ques.candidateAnswer.split(',').includes(opt.optionText)}\" [checked]=\"ques.candidateAnswer.split(',').includes(opt.optionText)\" [disabled]=\"true\">\n                                    <!-- {{opt.optionText}} -->\n                                    <span [ngClass]=\"{'correct_ans':ques.actualAnswer.split(',').includes(opt.optionText),'white_spac_rad':true}\">{{opt.optionText}}</span>\n                                    <span *ngIf=\"ques.actualAnswer.split(',').includes(opt.optionText)\" [ngClass]=\"{'correct_ans_txt':ques.actualAnswer.split(',').includes(opt.optionText)}\">Correct Answer !</span>\n                                </mat-checkbox>\n                            </div>\n                            <!-- <mat-radio-group [(ngModel)]=\"ques.candidateAnswer\" disabled=\"true\">\n                                                <mat-radio-button [ngClass]=\"{'correct_radio': ques.candidateAnswer==ques.actualAnswer,'wrong_radio':ques.candidateAnswer!=ques.actualAnswer}\" [value]=\"option.optionText\" *ngFor=\"let option of ques.optionsList\">\n                                                    {{option.optionText}}\n                                                </mat-radio-button>\n                                            </mat-radio-group>                                 -->\n\n                        </div>\n                        <!-- <div class=\"col-sm-12 mt-4\">\n                                        <button class=\"btn btn-success\">Answer &nbsp; : &nbsp;\n                                            <b class=\"actul_ans_bg\">{{ques.actualAnswer}}</b>\n                                        </button>\n                                    </div> -->\n                    </div>\n                </div>\n            </div>\n\n            <!-- Modal footer -->\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"notifyResultsModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h5 class=\"modal-title\" id=\"exampleModalLabel\">Notify Results To {{this.resultStatus==1?'Qualified':'Not Qualified'}} Candidates</h5>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                    <span aria-hidden=\"true\">&times;</span>\n                </button>\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"md-form\">\n                    <textarea id=\"customMessage\" #customMessage class=\"md-textarea form-control\" rows=\"3\"></textarea>\n\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancel</button>\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"notifyResultsToCandidates(customMessage)\">Send</button>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/Components/reports/reports.component.css":
/*!**********************************************************!*\
  !*** ./src/app/Components/reports/reports.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".report_txt {\n    color: #707070;\n    font-size: 18px;\n    font-weight: bold;\n    word-break: break-all;\n}\n\nhr {\n    border-top: 1px solid #707070;\n    margin-top: 0px;\n}\n\n.filters_sec input {\n    display: inline-block;\n    width: auto;\n}\n\n.filters_sec .form-control {\n    border-radius: 0px;\n}\n\n.filters_sec select {\n    /* -webkit-appearance: none; */\n    /* -webkit-appearance: button-bevel; */\n    -webkit-appearance: media-sliderthumb;\n}\n\n.filter_Serch_btn {\n    background-color: #41D6C3;\n    color: #ffffff;\n    padding: 2px 5px;\n    border-radius: 0px;\n    margin: 0px 15px;\n}\n\n.filter_Serch_btn i {\n    position: relative;\n    top: 4px;\n}\n\n.select_arrow {\n    position: absolute;\n    right: 5px;\n    top: 5px;\n    cursor: pointer;\n}\n\n.filter_tbl {\n    background-color: #ffffff;\n}\n\n.filter_tbl tr:hover {\n    background-color: #5596E6;\n    color: #ffffff;\n    box-shadow: 0 1px 5px #959595;\n    cursor: pointer;\n}\n\n.filter_tbl tr {\n    background-color: #425db5;\n    ;\n    color: #ffffff;\n    box-shadow: 0 1px 5px #959595;\n}\n\n.no_filter_tbl:hover,\n.no_filter_tbl {\n    background-color: inherit !important;\n    cursor: inherit !important;\n    box-shadow: inherit !important;\n}\n\n.report_result {\n    background-color: #ffffff;\n}\n\n.close_btn {\n    background-color: #41D6C3;\n    color: #ffffff;\n    padding: 0px 5px;\n    border-radius: 50%;\n}\n\n.close_btn i {\n    position: relative;\n    right: 0px;\n    top: 3px;\n}\n\n.person_img i {\n    background-color: #ffffff;\n    color: #41D6C3;\n    padding: 5px 5px;\n    border-radius: 50%;\n    font-size: 50px;\n}\n\n.check_icon i {\n    background-color: #44DA39;\n    color: #ffffff;\n    border-radius: 50%;\n    font-size: 20px;\n    padding: 3px;\n    position: relative;\n    top: 5px;\n}\n\n.check_icon span {\n    color: #44DA39;\n}\n\n.cancel_icon i {\n    background-color: #d63732;\n    color: #ffffff;\n    border-radius: 50%;\n    font-size: 20px;\n    padding: 3px;\n    position: relative;\n    top: 5px;\n}\n\n.cancel_icon span {\n    color: #d63732;\n}\n\n.mail_Score button {\n    border: 1px solid #41D6C3;\n    color: #41D6C3;\n}\n\n.mail_Score i {\n    position: relative;\n    top: 5px;\n}\n\n.score_board {\n    border: 1px solid #707070;\n}\n\n.score_left {\n    padding: 0px 30px;\n    color: #707070;\n    font-weight: bolder;\n}\n\n.review_btn {\n    padding: 7px 9px;\n}\n\n#reviewModal .modal-dialog {\n    max-width: 1000px;\n}\n\n.text_area {\n    background-color: #707070;\n    color: #ffffff;\n}\n\n.text_area_ans {\n    border-color: #d1f6f3;\n    background-color: #d1f6f3;\n    padding: 10px 30px;\n    margin-left: 75px;\n    cursor: not-allowed;\n}\n\n.actul_ans_bg {\n    color: #707070;\n    background-color: #ffffff;\n    padding: 3px 10px;\n    border-radius: 6px;\n}\n\n.exam_pic {\n    width: 150px;\n    padding-bottom: 1rem;\n    position: relative;\n    z-index: 99;\n}\n\n.exam_pic:hover {\n    /* transform:scale(2); */\n    -webkit-transform: scale(1.5);\n            transform: scale(1.5);\n    z-index: 999;\n}\n\n.correct_tick {\n    background-color: #40BF37;\n    color: #ffffff;\n    padding: 2px 3px;\n    border-radius: 50%;\n}\n\n.review_tick {\n    /* margin: 0px 10px; */\n    margin: 0px 50px;\n}\n\n.review_tick i {\n    position: relative;\n    top: 3px;\n    font-size: 18px;\n}\n\n.wrong_tick {\n    background-color: #F31320;\n    color: #ffffff;\n    padding: 2px 3px;\n    border-radius: 50%;\n}\n\n.test_title {\n    position: relative;\n    margin-right: 20px;\n    padding-left: 1rem;\n}\n\n.qualified_title {\n    position: relative;\n    margin-right: 20px;\n}\n\n.notify_results {\n    position: relative;\n    margin-right: 20px;\n}\n\n.correct_ans_txt {\n    color: #40BF37;\n    font-size: 14px;\n    margin-left: 15px;\n}\n\n.rev_txt {\n    color: #3D70B2;\n}\n\n#reviewModal .close span {\n    background-color: #41D6C3;\n    color: #fff;\n    padding: 2px 5px 0px 5px;\n    border-radius: 21px;\n}\n\n#reviewModal .close span i {\n    font-size: 20px;\n}\n\n.rev_txt {\n    color: #3D70B2;\n}\n\n.fill_in {\n    padding: 10px 40px;\n    border-left: none;\n    border-left: none;\n    border-right: none;\n    width: auto;\n    display: inline-block;\n    border-top: none;\n    border-radius: 0px;\n}\n\n.fill_ans {\n    background-color: rgba(65, 214, 195, 0.2);\n    padding: 10px 40px;\n    margin-left: 27px;\n}\n\ninput:not([type]):disabled {\n    background-color: #ffffff;\n    cursor: not-allowed;\n}\n\n.reports_answer {\n    position: absolute;\n    top: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixzQ0FBc0M7SUFDdEMscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFFBQVE7SUFDUixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5Qjs7SUFFekIsY0FBYztJQUNkLDZCQUE2QjtBQUNqQzs7QUFFQTs7SUFFSSxvQ0FBb0M7SUFDcEMsMEJBQTBCO0lBQzFCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsUUFBUTtBQUNaOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0FBQ1o7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVwb3J0X3R4dCB7XG4gICAgY29sb3I6ICM3MDcwNzA7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbn1cblxuaHIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNzA3MDcwO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLmZpbHRlcnNfc2VjIGlucHV0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgd2lkdGg6IGF1dG87XG59XG5cbi5maWx0ZXJzX3NlYyAuZm9ybS1jb250cm9sIHtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbi5maWx0ZXJzX3NlYyBzZWxlY3Qge1xuICAgIC8qIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTsgKi9cbiAgICAvKiAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbi1iZXZlbDsgKi9cbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG1lZGlhLXNsaWRlcnRodW1iO1xufVxuXG4uZmlsdGVyX1NlcmNoX2J0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxRDZDMztcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAycHggNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBtYXJnaW46IDBweCAxNXB4O1xufVxuXG4uZmlsdGVyX1NlcmNoX2J0biBpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA0cHg7XG59XG5cbi5zZWxlY3RfYXJyb3cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICAgIHRvcDogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZpbHRlcl90Ymwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5maWx0ZXJfdGJsIHRyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU5NkU2O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCAjOTU5NTk1O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmZpbHRlcl90YmwgdHIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjVkYjU7XG4gICAgO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCAjOTU5NTk1O1xufVxuXG4ubm9fZmlsdGVyX3RibDpob3Zlcixcbi5ub19maWx0ZXJfdGJsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgY3Vyc29yOiBpbmhlcml0ICFpbXBvcnRhbnQ7XG4gICAgYm94LXNoYWRvdzogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuXG4ucmVwb3J0X3Jlc3VsdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmNsb3NlX2J0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxRDZDMztcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiAwcHggNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmNsb3NlX2J0biBpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcmlnaHQ6IDBweDtcbiAgICB0b3A6IDNweDtcbn1cblxuLnBlcnNvbl9pbWcgaSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBjb2xvcjogIzQxRDZDMztcbiAgICBwYWRkaW5nOiA1cHggNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmb250LXNpemU6IDUwcHg7XG59XG5cbi5jaGVja19pY29uIGkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NERBMzk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNXB4O1xufVxuXG4uY2hlY2tfaWNvbiBzcGFuIHtcbiAgICBjb2xvcjogIzQ0REEzOTtcbn1cblxuLmNhbmNlbF9pY29uIGkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNjM3MzI7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNXB4O1xufVxuXG4uY2FuY2VsX2ljb24gc3BhbiB7XG4gICAgY29sb3I6ICNkNjM3MzI7XG59XG5cbi5tYWlsX1Njb3JlIGJ1dHRvbiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQxRDZDMztcbiAgICBjb2xvcjogIzQxRDZDMztcbn1cblxuLm1haWxfU2NvcmUgaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNXB4O1xufVxuXG4uc2NvcmVfYm9hcmQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG59XG5cbi5zY29yZV9sZWZ0IHtcbiAgICBwYWRkaW5nOiAwcHggMzBweDtcbiAgICBjb2xvcjogIzcwNzA3MDtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4ucmV2aWV3X2J0biB7XG4gICAgcGFkZGluZzogN3B4IDlweDtcbn1cblxuI3Jldmlld01vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xufVxuXG4udGV4dF9hcmVhIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4udGV4dF9hcmVhX2FucyB7XG4gICAgYm9yZGVyLWNvbG9yOiAjZDFmNmYzO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWY2ZjM7XG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5hY3R1bF9hbnNfYmcge1xuICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuXG4uZXhhbV9waWMge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogOTk7XG59XG5cbi5leGFtX3BpYzpob3ZlciB7XG4gICAgLyogdHJhbnNmb3JtOnNjYWxlKDIpOyAqL1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KTtcbiAgICB6LWluZGV4OiA5OTk7XG59XG5cbi5jb3JyZWN0X3RpY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MEJGMzc7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMnB4IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5yZXZpZXdfdGljayB7XG4gICAgLyogbWFyZ2luOiAwcHggMTBweDsgKi9cbiAgICBtYXJnaW46IDBweCA1MHB4O1xufVxuXG4ucmV2aWV3X3RpY2sgaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogM3B4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLndyb25nX3RpY2sge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMzEzMjA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMnB4IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi50ZXN0X3RpdGxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbn1cblxuLnF1YWxpZmllZF90aXRsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLm5vdGlmeV9yZXN1bHRzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uY29ycmVjdF9hbnNfdHh0IHtcbiAgICBjb2xvcjogIzQwQkYzNztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5yZXZfdHh0IHtcbiAgICBjb2xvcjogIzNENzBCMjtcbn1cblxuI3Jldmlld01vZGFsIC5jbG9zZSBzcGFuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDFENkMzO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDJweCA1cHggMHB4IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMXB4O1xufVxuXG4jcmV2aWV3TW9kYWwgLmNsb3NlIHNwYW4gaSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucmV2X3R4dCB7XG4gICAgY29sb3I6ICMzRDcwQjI7XG59XG5cbi5maWxsX2luIHtcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuLmZpbGxfYW5zIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY1LCAyMTQsIDE5NSwgMC4yKTtcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDI3cHg7XG59XG5cbmlucHV0Om5vdChbdHlwZV0pOmRpc2FibGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5yZXBvcnRzX2Fuc3dlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTJweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Components/reports/reports.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Components/reports/reports.component.ts ***!
  \*********************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Services/AllServices/all-services.service */ "./src/app/Services/AllServices/all-services.service.ts");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportsComponent = /** @class */ (function () {
    // [{
    //   "qustionText": "what is JAVA. Explain OOPS Concepts in detail",
    //   "actualAnswer": "Object Oriented Programming Language",
    //   "candidAnswer": "Object based Programming Language",
    //   "questionTypeId": "5"
    // },
    // {
    //   "qustionText": "Two-way binding",
    //   "actualAnswer": "ngModel",
    //   "candidAnswer": "ngModel",
    //   "questionTypeId": "1",
    //   "optionList": [{
    //     "name": "ng-bind",
    //   },
    //   {
    //     "name": "ngModel"
    //   }]
    // },
    // {
    //   "qustionText": "what is JAVA. Explain OOPS Concepts in detail",
    //   "actualAnswer": "Object Oriented Programming Language",
    //   "candidAnswer": "Object based Programming Language",
    //   "questionTypeId": "5"
    // },
    // {
    //   "qustionText": "Two-way binding",
    //   "actualAnswer": "ngModel",
    //   "candidAnswer": "ngModel",
    //   "questionTypeId": "1",
    //   "optionList": [{
    //     "name": "ng-bind",
    //   },
    //   {
    //     "name": "ngModel"
    //   }]
    // },
    // {
    //   "qustionText": "what is JAVA. Explain OOPS Concepts in detail",
    //   "actualAnswer": "Object Oriented Programming Language",
    //   "candidateAnswer": "Object based Programming Language",
    //   "questionTypeId": "5"
    // },
    // {
    //   "qustionText": "Two-way binding",
    //   "actualAnswer": "ngModel",
    //   "candidAnswer": "ng-bind",
    //   "questionTypeId": "1",
    //   "optionList": [{
    //     "name": "ng-bind",
    //   },
    //   {
    //     "name": "ngModel"
    //   }]
    // }];
    function ReportsComponent(apiService) {
        this.apiService = apiService;
        this.sectionList = {
            total: 80,
            sections: [{
                    name: "section 1",
                    score: 24
                },
                {
                    name: "section 2",
                    score: 25
                },
                {
                    name: "section 3",
                    score: 20
                },
                {
                    name: "section 4",
                    score: 11
                }]
        };
        this.testTitle = 'Test Title';
        this.resultStatus = 1;
        this.notifyResult = false;
        // [{
        //   name : "Vivek Verma",
        //   test : "Python Developer - 7+ years of experience",
        //   score : 80,
        // },
        // {
        //   name : "Kusuma Kiranmai",
        //   test : "Python Developer - 7+ years of experience",
        //   score : 92,
        // },
        // {
        //   name : "Sukumar",
        //   test : "Python Developer - 7+ years of experience",
        //   score : 82,
        // },
        // {
        //   name : "Rajesh Kumar",
        //   test : "Python Developer - 7+ years of experience",
        //   score : 82,
        // },
        // {
        //   name : "Omprakash",
        //   test : "Python Developer - 7+ years of experience",
        //   score : 80,
        // },
        // {
        //   name : "Vivek Verma",
        //   test : "Python Developer - 7+ years of experience",
        //   score : 80,
        // },
        // {
        //   name : "Kusuma Kiranmai",
        //   test : "Python Developer - 7+ years of experience",
        //   score : 92,
        // },
        // {
        //   name : "Sukumar",
        //   test : "Python Developer - 7+ years of experience",
        //   score : 82,
        // },
        // {
        //   name : "Rajesh Kumar",
        //   test : "Python Developer - 7+ years of experience",
        //   score : 82,
        // },
        // {
        //   name : "Omprakash",
        //   test : "Python Developer - 7+ years of experience",
        //   score : 80,
        // }];
        this.candidReview = [];
    }
    ReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getAll('reports/result/listoftests?token=' + localStorage.getItem('token'))
            .subscribe(function (res) {
            _this.allTests = res;
        }, function (error) {
        }, function () {
            _this.getAllResults();
        });
    };
    ReportsComponent.prototype.getCandidateQUestions = function (candidate) {
        var _this = this;
        this.blockUI.start('Please Wait We Are Fetching Questions');
        this.apiService.postData('reports/result/reviewcandidateanswers?testInstanceId=' + candidate.testInstanceId + '&token=' + localStorage.getItem('token'), {})
            .subscribe(function (res) {
            _this.blockUI.stop();
            if (res['statusCode'] == "1") {
                _this.apiService.successAlert(res['statusMessage']);
                _this.candidReview = res['listOfTestQuestions'];
            }
            else {
                _this.apiService.errorAlert(res['statusMessage']);
                _this.candidReview = res['listOfTestQuestions'];
            }
        }, function (error) {
            _this.blockUI.stop();
        });
    };
    ReportsComponent.prototype.getResult = function (candidate) {
        this.showResult = this.showResult ? false : true;
        this.candidate = candidate;
        if (candidate) {
            this.sectionList = {
                total: candidate.testPercentage,
                sections: candidate.sectionwiseResult
            };
        }
    };
    ReportsComponent.prototype.mailResult = function () {
        var _this = this;
        this.blockUI.start('Please Wait We Are Sending Mail...');
        this.apiService.postData('reports/result/sendcandidateresult?testInstanceId=' + this.candidate.testInstanceId + '&token=' + localStorage.getItem('token'), {})
            .subscribe(function (res) {
            _this.blockUI.stop();
            if (res['statusCode'] == '1') {
                _this.apiService.successAlert(res['statusMessage']);
            }
            else {
                _this.apiService.errorAlert(res['statusMessage']);
            }
        }, function (error) {
            _this.blockUI.stop();
        });
    };
    ReportsComponent.prototype.getAllResults = function () {
        this.testTitle = this.allTests['listOfTests'].length > 0 ? this.allTests['listOfTests'][0].testConfigId : 'Test Title';
        this.resultStatus = 1;
        this.searchCandid = null;
        //  this.apiService.getAll('reports/result/allrecentresults?token=' + localStorage.getItem('token'))
        //    .subscribe(res => {
        //    this.filterData = res;
        //    if(this.filterData['listOfCandidateResults'].length > 0){
        //     this.notifyResult=true;
        //    }else{
        //     this.notifyResult=false;
        //    }
        //   })
        this.getCandidResults(this.testTitle, this.resultStatus, this.searchCandid);
    };
    ReportsComponent.prototype.getTests = function () {
        var _this = this;
        this.apiService.getAll('reports/result/listoftests?token=' + localStorage.getItem('token'))
            .subscribe(function (res) {
            _this.allTests = res;
        }, function (error) {
        }, function () {
        });
    };
    ReportsComponent.prototype.getSuspiciosActivity = function (user) {
        var _this = this;
        this.apiService.getAll('reports/result/suspiciousactivitylist?token=' + localStorage.getItem('token') + '&testInstanceId=' + user.testInstanceId)
            .subscribe(function (res) {
            _this.activities = res;
        }, function (error) {
        }, function () {
        });
    };
    ReportsComponent.prototype.getCandidResults = function (testTitle, resultStatus, searchCandid) {
        var _this = this;
        // console.log(testTitle +" "+resultStatus)
        if (testTitle != 'Test Title') {
            this.apiService.getAll('reports/result/searchcandidateresults?token=' + localStorage.getItem('token') + '&testConfigId=' + testTitle + '&resultStatus=' + resultStatus + '&candidateNameKey=' + searchCandid)
                .subscribe(function (res) {
                // console.log(res)
                _this.filterData = res;
                if (_this.filterData['listOfCandidateResults'].length > 0) {
                    _this.notifyResult = true;
                }
                else {
                    _this.notifyResult = false;
                }
            }, function (error) {
                // console.log(error);
            }, function () { });
        }
        else {
            // console.log(testTitle +" "+resultStatus)
            this.apiService.getAll('reports/result/searchcandidateresults?token=' + localStorage.getItem('token') + '&testConfigId=' + 0 + '&resultStatus=' + resultStatus + '&candidateNameKey=' + searchCandid)
                .subscribe(function (res) {
                // console.log(res)
                _this.filterData = res;
                if (_this.filterData['listOfCandidateResults'].length > 0) {
                    _this.notifyResult = true;
                }
                else {
                    _this.notifyResult = false;
                }
            }, function (error) {
                // console.log(error)
            });
        }
    };
    ReportsComponent.prototype.getCandidPicsFromCfs = function (user) {
        var _this = this;
        this.apiService.getAll('testmanagement/cfs/getcandidatepictures/?testInstanceId=' + user.testInstanceId + '&token=' + localStorage.getItem('token'))
            .subscribe(function (res) {
            _this.userPics = res;
            // for(let i=0;i<this.userPics['candidatePictureList'].length;i++){
            //   this.userPics['candidatePictureList'][i].imgSrc = this.getBase64Image("http://14.98.167.101:6060/api/fs/v1.0/access/file/ncd-test/2020-04-01/Wed1420205238529903.jpg");
            // }
            //  // console.log('this.userPics',this.userPics)
        }, function (error) {
        });
    };
    ReportsComponent.prototype.getBase64Image = function (img) {
        var canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    };
    ReportsComponent.prototype.getCandidPics = function (user) {
        var _this = this;
        this.apiService.getAll('testmanagement/exam/getcandidatepictures/?testInstanceId=' + user.testInstanceId + '&token=' + localStorage.getItem('token'))
            .subscribe(function (res) {
            _this.userPics = res;
            for (var i = 0; i < _this.userPics['candidatePictureList'].length; i++) {
                _this.userPics['candidatePictureList'][i].imgSrc = _this.apiService.url + 'testmanagement' + _this.userPics['candidatePictureList'][i].baseViewURL + '?candidateExamPictureId=' + _this.userPics['candidatePictureList'][i].candidateExamPictureId + '&token=' + localStorage.getItem('token');
            }
            // console.log('this.userPics',this.userPics)
        }, function (error) {
        });
    };
    ReportsComponent.prototype.notifyResultsToCandidates = function (customMessage) {
        var _this = this;
        // console.log(customMessage.value)
        var queryParamObj = {
            "testConfigId": this.testTitle,
            "customMessage": customMessage.value,
            "token": localStorage.getItem('token')
        };
        // console.log(queryParamObj);
        var queryParam = $.param(queryParamObj);
        // console.log(queryParam);
        this.blockUI.start('Please wait we are sending candidate results');
        if (this.resultStatus == 1) {
            this.apiService.postData("reports/result/sendresultstatustoallqualifiedcandidates?" + queryParam, "")
                .subscribe(function (res) {
                if (res['statusCode'] == 1) {
                    $('#customMessage').val('');
                    _this.apiService.successAlert(res['statusMessage']);
                    // console.log(res['statusMessage']);
                    $('#notifyResultsModal').modal('hide');
                    _this.blockUI.stop();
                    //this.getCandidResults(this.testTitle,this.)
                }
                else {
                    _this.apiService.errorAlert(res['statusMessage']);
                    // console.log(res['statusMessage']);
                    // $('#notifyResultsModal').modal('hide');
                    _this.blockUI.stop();
                }
            }, function (error) {
                // console.log(error);
                _this.blockUI.stop();
            }, function () {
                // this.ngOnInit();
                //this.getAllResults();
                _this.getCandidResults(_this.testTitle, _this.resultStatus, _this.searchCandid);
            });
        }
        else {
            this.apiService.postData("reports/result/sendresultstatustonotqualifiedcandidates?" + queryParam, "")
                .subscribe(function (res) {
                if (res['statusCode'] == 1) {
                    $('#customMessage').val('');
                    _this.apiService.successAlert(res['statusMessage']);
                    // console.log(res['statusMessage']);
                    $('#notifyResultsModal').modal('hide');
                    _this.blockUI.stop();
                }
                else {
                    _this.apiService.errorAlert(res['statusMessage']);
                    // console.log(res['statusMessage']);
                    // $('#notifyResultsModal').modal('hide');
                    _this.blockUI.stop();
                }
            }, function (error) {
                // console.log(error)
                _this.blockUI.stop();
            }, function () {
                // this.ngOnInit();
                _this.getCandidResults(_this.testTitle, _this.resultStatus, _this.searchCandid);
            });
        }
    };
    ReportsComponent.prototype.shareResult = function (candidate) {
        var selBox = document.createElement('textarea');
        selBox.value = candidate.candidateResultViewURL;
        ;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    };
    ReportsComponent.ctorParameters = function () { return [
        { type: _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"] }
    ]; };
    __decorate([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUI"])(),
        __metadata("design:type", Object)
    ], ReportsComponent.prototype, "blockUI", void 0);
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reports',
            template: __webpack_require__(/*! raw-loader!./reports.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/reports/reports.component.html"),
            styles: [__webpack_require__(/*! ./reports.component.css */ "./src/app/Components/reports/reports.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/Modules/reports/reports-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/Modules/reports/reports-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _Components_reports_reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Components/reports/reports.component */ "./src/app/Components/reports/reports.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [{
        path: "",
        component: _Components_reports_reports_component__WEBPACK_IMPORTED_MODULE_3__["ReportsComponent"]
    }];
var ReportsRoutingModule = /** @class */ (function () {
    function ReportsRoutingModule() {
    }
    ReportsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_Components_reports_reports_component__WEBPACK_IMPORTED_MODULE_3__["ReportsComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ng_block_ui__WEBPACK_IMPORTED_MODULE_5__["BlockUIModule"].forRoot(), _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ReportsRoutingModule);
    return ReportsRoutingModule;
}());



/***/ }),

/***/ "./src/app/Modules/reports/reports.module.ts":
/*!***************************************************!*\
  !*** ./src/app/Modules/reports/reports.module.ts ***!
  \***************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reports-routing.module */ "./src/app/Modules/reports/reports-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _reports_routing_module__WEBPACK_IMPORTED_MODULE_2__["ReportsRoutingModule"]
            ]
        })
    ], ReportsModule);
    return ReportsModule;
}());



/***/ })

}]);
//# sourceMappingURL=Modules-reports-reports-module.js.map