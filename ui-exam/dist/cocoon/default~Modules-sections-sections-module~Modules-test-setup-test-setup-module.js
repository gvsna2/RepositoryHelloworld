(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~Modules-sections-sections-module~Modules-test-setup-test-setup-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/sections/sections.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/sections/sections.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<block-ui>\n\n</block-ui>\n   <div class=\"sections\">\n       <div class=\"row\" *ngIf=\"flag\">\n           <div class=\"col-sm-12 report_txt\">\n               <h4 style=\"padding:0rem;padding-top: 1rem;color: #707070;\">\n                   <p>List of Sections</p>\n               </h4>\n               <hr class=\"m-0\">\n           </div>\n       </div>\n       <div *ngIf=\"!flag\" pt-4 pb-4>\n           <div class=\"row\">\n               <div class=\"col-6\">\n                   <h4><span style=\"color:#434b4a;font-size: 20px;margin-left: -1.25rem;\">Test Instance Creation</span></h4>\n   \n   \n   \n               </div>\n   \n   \n               <div class=\"col-6\">\n   \n                   <button type=\"button\" class=\"btn btn-primary\" style=\"    background: #3D70B2;border: 1px solid #3D70B2;height: 30px;line-height: 17px;border-radius: 0px;width: 200px;font-weight: 600;font-size: 15px;margin: 1rem;float: right;margin-right: 7rem;\" (click)=\"createTestInstance()\">Create Test Instance </button>\n   \n   \n   \n   \n               </div>\n           </div>\n   \n           <div class=\"row\" style=\"padding: 0rem 4rem;margin-left: -5rem;margin-right: 1rem;\">\n               <div class=\"col\">\n   \n   \n                   <div class=\"form-group\">\n                           <popover-content #namePop title=\"\"placement=\"right\"[animation]=\"true\"  style=\"box-shadow: 10px 10px 5px #aaaaaa;\">\n                           <span style=\"color: #646363;\"> Add a name/number to identify your test.</span>  \n                           \n                           </popover-content>\n                       <label for=\"Title\">Test Instance Name <span><i style=\"    font-size: 13px;color: #969696;top: 2px;\"  [popoverOnHover]=\"true\" [popover]=\"namePop\" class=\"material-icons\">info</i></span></label>\n                       <input *ngIf=\"testSetupData\" type=\"text\" class=\"form-control\" id=\"testInstanceAliasName\"  value={{testSetupData.testInstanceAliasName}} name=\"testSetupTitle\"  disabled>\n                   </div>\n   \n                   <div class=\"form-group\">\n                           <popover-content #aliasNamePop title=\"\"placement=\"right\"[animation]=\"true\"  style=\"box-shadow: 10px 10px 5px #aaaaaa;\">\n                           <span style=\"color: #646363;\">  Create a descriptive name for you to easily identify the test. </span>  \n                           \n                           </popover-content>\n                       <label for=\"Title\">Test Instance Alias Name <span><i style=\"    font-size: 13px;color: #969696;top: 2px;\"  [popoverOnHover]=\"true\" [popover]=\"aliasNamePop\" class=\"material-icons\">info</i></span></label>\n                       <input type=\"text\" class=\"form-control\" id=\"Title\" placeholder=\"\" name=\"testInstanceName\" (input)=\"testInstanceName=$event.target.value\">\n                   </div>\n   \n               </div>\n               <div class=\"col\">\n   \n                   <div class=\"form-group\">\n                       <label for=\"Title\">Test Master</label>\n                       <input *ngIf=testSetup type=\"text\" class=\"form-control\" id=\"testMaster\" placeholder=\"\" value={{testSetup}} name=\"testSetupTitle\"   disabled>\n                   </div>\n                   <div class=\"form-group\">\n                       <label for=\"Title\">Category </label>\n                       <input *ngIf=testSetupData type=\"text\" class=\"form-control\" id=\"category\" placeholder=\"\" value={{testSetupData.testCategoryName}} name=\"testSetupTitle\" disabled>\n                   </div>\n   \n               </div>\n   \n           </div>\n           <div class=\"row\" >\n               <div class=\"col-md-11\">\n                       <div class=\"form-group\">\n                   \n                               <label for=\"Title\">Tags<span style=\"font-size:x-small;color: #051d0a;\">(Max Tags Limit:10)</span></label>\n                               <tag-input theme='bootstrap' [(ngModel)]=\"itemsAsObjects\" [onlyFromAutocomplete]=\"false\"  [addOnBlur]=true (identifyBy)=0 [identifyBy]=\"'instanceModelTagId'\" [displayBy]=\"'instanceModelTagName'\" [maxItems]=10 (onAdd)=\"onItemAdded($event)\" >\n                                       <!-- <tag-input-dropdown [showDropdownIfEmpty]=\"true\"\n                                       [autocompleteItems]=\"items\">\n                   </tag-input-dropdown> -->\n                               </tag-input>\n                           </div>\n               </div>\n               \n           </div>\n   \n       </div>\n      \n       <div *ngIf=\"flag\" class=\"row\" style=\"padding-top: 2rem;\">\n        <div class=\"form-group col-md-6\">\n\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search By Sections\" [(ngModel)]=\"serachBySection\" style=\"border-radius: 0px;box-shadow: 1px 2px 3px 2px #c2c2c2;\">\n\n\n        </div>\n        <div class=\"col-md-6\">\n            <div class=\"row\">\n                <div class=\"col-sm-4\">\n\n                    <span>\n                        <b>Filter By Test Master :</b>\n                    </span>\n                </div>\n                <div class=\"col-sm-7 p-0\">\n                    <div id=\"mul_close\">\n                            <angular2-multiselect name=\"testInsSections2\" [data]=\"dropdownListMaster\" [(ngModel)]=\"selectedMaster\" [settings]=\"dropdownCateg\" (onSelect)=\"onMasterSelect($event)\"\n                            (onDeSelectAll)=\"onRemoveAll()\" (onDeSelect)=\"onRemoveAll()\" (onSelect)=\"clickDiv()\"></angular2-multiselect>\n                    </div>\n                    \n                </div>\n            </div>\n\n        </div>\n\n    </div>\n\n   \n       <div *ngIf=\"flag\" class=\"row justify-content-end\" style=\"padding-right:6.5rem\">\n   \n   \n   \n   \n       </div>\n   \n       <h4 *ngIf=\"!flag\"><span style=\"color:#434b4a;font-size: 20px;margin-left: -1.25rem;\">Sections</span></h4>\n   \n       <div class=\"row \" style=\"margin-left: -2rem;\">\n           <div *ngIf=false class=\"card col-md-4\" id=\"add\" style=\" cursor: pointer;   border: 1px dashed;background: transparent;\" data-toggle=\"modal\" data-target=\"#myModal\">\n   \n               <i class=\"material-icons mx-auto\" style=\"background: #DEDBDB;margin-top: 3.5rem;color: #2C2C2C;width: fit-content;border-radius: 50%;font-size: 30px;padding: 0.3rem;\">add</i>\n               <p style=\"text-align: center\">Add New Section</p>\n   \n           </div>\n           <div *ngIf=!flag class=\"card col-md-4\" id=\"add\" style=\" cursor: pointer;   border: 1px dashed;background: transparent;\" data-toggle=\"modal\" data-target=\"#sectionModal\">\n   \n            <i class=\"material-icons mx-auto\" style=\"background: #DEDBDB;margin-top: 3.5rem;color: #2C2C2C;width: fit-content;border-radius: 50%;font-size: 30px;padding: 0.3rem;\">add</i>\n            <p style=\"text-align: center\">Add New Section</p>\n\n        </div>\n   \n           <!-- The Modal -->\n           <!-- The Modal -->\n           <div class=\"modal\" id=\"myModal\">\n               <div class=\"modal-dialog\">\n                   <div class=\"modal-content\">\n   \n                       <!-- Modal Header -->\n                       <div class=\"modal-header\">\n                           <h4 class=\"modal-title\">Create Section</h4>\n                           <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                       </div>\n   \n                       <!-- Modal body -->\n                       <div class=\"modal-body\">\n                       <form #myForm1=\"ngForm\" (ngSubmit)=\"flag ? addSection(myForm1.value):addSectionByTestInsatanceId(myForm1.value)\">\n                       \n                               <div class=\"form-group\">\n   \n                                   <select class=\"form-control\" name=\"categoryId\" (change)=\"onSeletedCatAndSub($event.target.value)\">\n                                    <option disabled>Please Select Category</option>\n                                   <option   *ngFor=\"let arr of categoryAndSubCategoryArr;let i = index\"   value={{i}}><span style=\"color:#34bd6f\" *ngIf=\"arr.type==2\" >&#xf07c; {{arr.name}} </span> <span   *ngIf=\"arr.type==1\">&#xf07c; {{arr.name}} </span></option>\n                                   <!-- <option   value=\"type={{arr.type}},id={{arr.id}}\"  *ngFor=\"let arr of categoryAndSubCategoryArr\" > &#xf022; {{arr.name}} </option> -->\n                                   \n                             </select>\n                               </div>\n   \n                               <div class=\"form-group\">\n   \n                                   <label for=\"exampleFormControlInput1\">{{this.heirarchy}}</label>\n   \n                               </div>\n                               <div class=\"form-group\">\n                                   <label for=\"exampleFormControlInput1\">Section Name</label>\n                                   <input type=\"text\" class=\"form-control\" name=\"seactionName\" ngModel placeholder=\"section name\">\n                               </div>\n                               <!-- Modal footer -->\n                               <div class=\"modal-footer\">\n                                   <button type=\"submit\" class=\"btn btn-primary\">Add Section</button>\n                               </div>\n   \n                               <div class=\"alert alert-success\" *ngIf=\"this.seactionSuccessMessage\">\n                                   {{this.sectionStatusMessage}}\n                               </div>\n                               <div class=\"alert alert-danger\" *ngIf=\"this.seactionFailMessage\">\n                                   {{this.sectionStatusMessage}}\n                               </div>\n   \n                           </form>\n   \n                       </div>\n   \n                   </div>\n               </div>\n           </div>\n            <!-- The TI Sectiom Modal -->\n           <div class=\"modal\" id=\"sectionModal\">\n            <div class=\"modal-dialog\">\n                <div class=\"modal-content\">\n\n                    <!-- Modal Header -->\n                    <div class=\"modal-header\">\n                        <h4 class=\"modal-title\">Create Section</h4>\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                    </div>\n\n                    <!-- Modal body -->\n                    <div class=\"modal-body\">\n                    <form #myForm=\"ngForm\" (ngSubmit)=\"flag ? addSection(myForm.value):addSectionByTestInsatanceId(myForm.value)\">\n                    \n                            <div class=\"form-group\">\n                                <div *ngIf=\"imgFlag\">\n                                        <span class=\"blue\" style=\"padding: 2rem;\">\n                                                <i style=\"position: absolute;\" class=\"material-icons\">folder </i> <span style=\"color:rgb(168, 165, 165);padding-left: 2rem \"  >(Category)</span> \n                                             </span>\n                                             <span  style=\"padding: 2rem; color: seagreen\">\n                                                <i style=\"position: absolute;\" class=\"material-icons\">folder </i> <span style=\"color:rgb(168, 165, 165);padding-left: 2rem \" >(Sub-Category)</span>\n                                             </span>\n                                </div>\n                                    \n                          <angular2-multiselect name=\"testInsSections\" (onOpen)=\"imgFlag=$event\" (onClose)=\"imgFlag=$event\" (onDeSelectAll)=\"onDeSelectAll($event)\" (onSelect)=\"onItemSelect($event)\" [data]=\"testSectionList\"  [settings]=\"dropdownCateg2\" [(ngModel)]=\"selectedItems\" >\n                               \n                            \n                            <c-item>\n                                <ng-template let-item=\"item\">\n                                        \n                                        <span class=\"blue\" *ngIf=\"item.type==1\" >\n                                                <i    title=\"category\" class=\"material-icons\">folder </i> \n                                             </span>\n                                             <span  style=\"  color: seagreen\" *ngIf=\"item.type==2\">\n                                                <i title=\"sub-category\" class=\"material-icons\">folder </i> \n                                             </span>\n                                             <label style=\"color: #333;min-width: 50px;\"></label>\n                                  <label style=\"color: #333;\">{{item.itemName}} </label>\n                                  \n                                </ng-template>\n                        </c-item>  \n                          </angular2-multiselect>\n                            </div>\n\n                            <div class=\"form-group\">\n\n                                <label for=\"exampleFormControlInput1\">{{this.heirarchy}}</label>\n\n                            </div>\n                            <div class=\"form-group\">\n                                <!-- <label for=\"exampleFormControlInput1\">Section Name</label> -->\n                                <input type=\"text\" id=\"section_input\" class=\"form-control\" name=\"seactionName\" ngModel placeholder=\"section name\">\n                            </div>\n                            <div class=\"form-group\" style=\"padding:2rem\" *ngIf=testSetupData>\n                                <!-- <label for=\"exampleFormControlInput1\">Section Name</label> -->\n                                <input *ngIf=\"testSetupData.isOwner==1\" id=\"check\" class=\"mt-2 mr-2\" type=\"checkbox\" name=\"addToMaster\" ngModel><span *ngIf=\"testSetupData.isOwner==1\" >Add to Master</span> \n                                \n                                <!-- <input type=\"text\" class=\"form-control\" name=\"seactionName\" ngModel placeholder=\"section name\"> -->\n                            </div>\n                            <!-- Modal footer -->\n                            <div class=\"modal-footer\">\n                                <button  *ngIf=heirarchy type=\"submit\" class=\"btn btn-primary\">Add Section</button>\n                            </div>\n\n                           \n\n                        </form>\n\n                    </div>\n\n                </div>\n            </div>\n        </div>\n   \n   \n   \n   \n           <div class=\"card col-md-4\" style=\"border-bottom:3px solid #41D6C3\" *ngFor=\"let i=index;let section of sectionsData | sectionFilter:serachBySection\">\n               <div class=\"card-body\" *ngIf=\"section.hierarchy\">\n                   <label class=\"container\">\n                                     <input type=\"checkbox\" [attr.checked]=\"section.isSectionActive==1 ? 'checked' : null\" (change)=selectSection(i); *ngIf=\"!flag\">\n                                     <span class=\"checkmark\" *ngIf=\"!flag\"></span>\n                                 </label>\n                   <h5 class=\"card-title\">{{section.sectionName}}</h5>\n                   <h6 class=\"card-subtitle mb-2 text-muted\">No. of Questions: {{section.totalNoOfQuestions}}</h6>\n                   <p class=\"card-text\">Section Code: <span style=\"color:green\">{{section.sectionCode}}</span></p>\n   \n                   <p class=\"card-text\">Last modified: {{section.modifiedOn =='null' ? \" \" : section.modifiedOn | date }}</p>\n                   <p class=\"card-text\" style=\"cursor: pointer\" title={{section.hierarchy}} *ngIf=\"section.hierarchy.length>=40\">{{section.hierarchy | slice:0:40}}..</p>\n                   <p class=\"card-text\" *ngIf=\"section.hierarchy.length<40\">{{section.hierarchy }}</p>\n                   <hr>\n   \n                   <!-- <a href=\"#\" class=\"card-link\" style=\"float: right;\" (click)=\"onSection($event,section.sectionId);getTemplateLink()\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">+ Add New Question</a> -->\n                   <button class=\"btn btn-link\" style=\"float: right;\" (click)=\"onSection($event,section.sectionId);getTemplateLink();sectionId=section.sectionId\" data-toggle=\"modal\"\n                   data-target=\"#exampleModalCenter\" [disabled]=\"!section.isOwner\">+ Add Questions</button>\n   \n   \n                   \n   \n               </div>\n   \n           </div>\n   \n   \n   \n       </div>\n   \n   \n   \n   \n   </div>\n   \n\n   <div id=\"UploadedQuesModal\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n    \n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\">Bulk Upload Status</h4>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n    \n                <div class=\"modal-body pt-0 pb-0\">\n    \n                    <div class=\"row pt-4 pb-4\">\n                        <div class=\"col-sm-4\">\n                            <label><b>Total no of questions :</b></label>\n                            <span class=\"pl-3 quesCountSize tot_count\">{{totalQuestionsCount}}</span>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <label><b>No .of success questions :</b></label>\n                            <span class=\"pl-3 quesCountSize succ_count\">{{questionsSuccessCount}}</span>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <label><b>No .of already exist questions :</b></label>\n                            <span class=\"pl-3 quesCountSize exist_count\">{{questionsExistCount}}</span>\n                        </div>\n                    </div>\n    \n                    <div class=\"row\">\n                        <table class=\"table text-center\" *ngIf=\"uploadedQues && !uploadedQues['questionResponseList'].length\">\n                            <tr class=\"text-center errorTxt\">\n                                <th colspan=\"3\">No Questions Uploaded</th>\n                            </tr>\n                        </table>\n                        <table class=\"table text-center\" *ngIf=\"uploadedQues && uploadedQues['questionResponseList'].length\">\n                            <thead>\n                                <tr>\n                                    <th>Question</th>\n                                    <!-- <th>Status</th> -->\n                                    <th>Message</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let ques of uploadedQues['questionResponseList']\">\n                                    <td>{{ques.questionName}}</td>\n                                    <!-- <td>\n                                                <p *ngIf=\"ques.statusCode == 0\">Failed</p>\n                                                <p *ngIf=\"ques.statusCode == 1\">Uploaded</p>\n                                                <p *ngIf=\"ques.statusCode == 2\">Already Exists !</p>\n                                            </td> -->\n                                    <td [ngClass]=\"{'red_col': ques.statusCode == 0, 'green_col':ques.statusCode == 1, 'yellow_col':ques.statusCode == 2}\">{{ques.statusMessage}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n    \n        </div>\n    </div>\n\n    <!-- Modal -->\n   \n    <div class=\"modal fade\" id=\"exampleModalCenter\" role=\"dialog\">\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\n            <div class=\"modal-content\">\n\n                <div class=\"modal-body\">\n\n                        <div class=\"row\">\n                                <div class=\"col-sm-8 text-center\">\n                                    <!-- <h4 class=\"blueColor\">Add Questions</h4> -->\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n                                        <span class=\"boxShadow\">\n                                            <i class=\"material-icons\">\n                                                clear\n                                            </i>\n                                        </span>\n            \n                                    </button>\n                                </div>\n                                <!-- <div class=\"col-sm-12\">\n                                    <hr>\n                                </div> -->\n                            </div>\n\n                    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n                        <li class=\"nav-item col\" (click)=\"toggleBulk('1')\">\n                            <a [ngClass]=\"{'nav-link':true,'active':!bulkUpload}\" style=\"text-align: center;\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Add Questions</a>\n                        </li>\n                        <li class=\"nav-item col\" (click)=\"toggleBulk('2')\">\n                            <a [ngClass]=\"{'nav-link':true,'active':bulkUpload}\" id=\"profile-tab\" style=\"text-align: center;\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Bulk Upload</a>\n                        </li>\n\n                    </ul>\n\n                    <div class=\"tab-content\" id=\"myTabContent\" *ngIf=\"!bulkUpload\">\n\n                        <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n\n                            <!-- <div class=\"p-4 text-center\">\n                            <h4 class=\"blueColor\">Add Questions</h4>\n                            <hr>\n                        </div>\n         -->\n                            <!-- Created Question -->\n                            <div class=\"createdQuestion.length\">\n                                <div *ngFor=\"let ques of createdQuestion\">\n                                    <div class=\"pl-4 pr-4\">\n                                        <h4 class=\"blueColor\">Q. {{ques.qustionText}}</h4>\n                                        <div *ngIf=\"ques.questionTypeId == '1' || ques.questionTypeId == '2'\">\n                                            <p *ngFor=\"let opt of ques['optionsList'];let i=index\">\n                                                <b>{{i+1}}. </b>\n                                                <span class=\"pl-4\">{{opt.optionText}}</span>\n                                            </p>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"ques.questionTypeId == '3' || ques.questionTypeId == '4' || ques.questionTypeId == '5' || ques.questionTypeId == '6'\">\n                                        <!-- <textarea rows=\"6\" cols=\"40\" name=\"answer\" [(ngModel)]=\"ques.answer\"></textarea> -->\n                                        <p>\n                                            {{ques.answer}}\n                                        </p>\n                                    </div>\n                                    <hr>\n                                </div>\n                            </div>\n                            <!-- End Created QUestion -->\n\n\n                            <!-- <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n                            <li class=\"nav-item col\">\n                                <a class=\"nav-link active\" style=\"text-align: center;\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\"\n                                    aria-selected=\"true\">Add Questions</a>\n                            </li>\n                            <li class=\"nav-item col\">\n                                <a class=\"nav-link\" id=\"profile-tab\" style=\"text-align: center;\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\"\n                                    aria-selected=\"false\">Bulk Upload</a>\n                            </li>\n        \n                        </ul> -->\n\n                            <div class=\"tab-content\" id=\"myTabContent\">\n\n                                <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n\n                                    <form #myForm=\"ngForm\" (ngSubmit)=\"addQuestion(myForm)\">\n\n\n                                        <div style=\"padding: 2rem 3rem;\n            text-align: left;\n            font-size: 14px;\">\n                                            <div class=\"form-row\">\n                                                <div class=\"form-group col-md-6\">\n                                                    <div class=\"form-row\">\n\n                                                        <div class=\"col-md-10\">\n                                                                \n\n                                                            <label for=\"firstName\">Question Title  <sup class=\"errorTxt\">*</sup></label>\n                                                            <!-- <input type=\"hidden\" name=\"sectionId\" #sectionId=\"ngModel\" ngModel/> -->\n                                                            <input type=\"text\" class=\"form-control\" id=\"questionTitle\" name=\"questionText\" ngModel placeholder=\"\" required>\n                                                        </div>\n\n                                                        <div class=\"col-md-2\" style=\"padding-top: 2rem;\">\n                                                            <!-- <i class=\"material-icons\" (click)=\"questionImg()\" style=\"cursor: pointer;\">\n                                                            image\n                                                        </i> -->\n                                                            <!-- <input type=\"file\" [hidden]=\"true\" (change)=\"onSelectedQuestionImage($event)\" id=\"imageId\"> -->\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"form-group col-md-3\">\n                                                        <popover-content #questionTypePop \n                                                        title=\"\"\n                                                        placement=\"right\"\n                                                        [animation]=\"true\" \n                                                         style=\"box-shadow: 10px 10px 5px #aaaaaa;\">\n                                                        <span style=\"color: #646363;\"> Define the type of question.Eg.Multiple choice, descriptive,True/False etc</span>  \n                                                        \n                                                        </popover-content>\n                                                    <label for=\"lastName\">Question type <span><i style=\"    font-size: 13px;color: #969696;top: 2px;\"  [popoverOnHover]=\"true\" [popover]=\"questionTypePop\" class=\"material-icons\">info</i></span> <sup class=\"errorTxt\">*</sup></label>\n\n                                                    <select class=\"form-control\" id=\"questionType\" name=\"questionTypeId\" #questionTypeId=ngModel ngModel (change)=\"setType(questionTypeId.value)\" required>\n                                                    <option value=\"\"> Select Type</option>\n                                                    <option value=\"{{questionType.questionTypeId}}\" *ngFor=\"let questionType of questionTypeArr\">{{questionType.questionType}}</option>\n                                                </select>\n                                                </div>\n                                                <div class=\"form-group col-md-3\">\n                                                        <popover-content #complexity \n                                                        title=\"\"\n                                                        placement=\"right\"\n                                                        [animation]=\"true\" \n                                                         style=\"box-shadow: 10px 10px 5px #aaaaaa;\">\n                                                        <span style=\"color: #646363;\"> Identify the level of difficulty of the question. Easy/Basic, medium, Advanced etc </span>  \n                                                        \n                                                        </popover-content>\n                                                    <label for=\"lastName\">Complexity <span><i style=\"    font-size: 13px;color: #969696;top: 2px;\"  [popoverOnHover]=\"true\" [popover]=\"complexity\" class=\"material-icons\">info</i></span> <sup class=\"errorTxt\">*</sup></label>\n                                                    <select class=\"form-control\" id=\"complexity\" name=\"complexityId\" ngModel required>\n                                                    <option value=\"\">Select </option>\n                                                    <option value=\"{{complex.complexityId}}\" *ngFor=\"let complex of complexityArr\">{{complex.complexity}} </option>\n                                                </select>\n                                                </div>\n                                            </div>\n                                            <div class=\"form-row\">\n                                                <div class=\"form-group col-md-6\">\n                                                    <p>\n                                                            <popover-content #additionalData \n                                                            title=\"\"\n                                                            placement=\"right\"\n                                                            [animation]=\"true\" \n                                                             style=\"box-shadow: 10px 10px 5px #aaaaaa;\">\n                                                            <span style=\"color: #646363;\"> Use this to add specific instructions on the questions.Eg.Answer one of two.</span>  \n                                                            \n                                                            </popover-content>\n                                                        <a (click)=\"onAccordion()\" style=\"float: right;margin-right: 4rem;\" data-toggle=\"collapse\" href=\"#collapseExample\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n                                                        + Additional data <span><i style=\"    font-size: 13px;color: #969696;top: 2px;\"  [popoverOnHover]=\"true\" [popover]=\"additionalData\" class=\"material-icons\">info</i></span>\n                                                    </a>\n\n                                                    </p>\n                                                </div>\n                                            </div>\n                                            <div class=\"collapse\" id=\"collapseExample\">\n                                                <div style=\"border: 1px solid #c2c1e1;border-radius: 5px;\">\n                                                    <ul class=\"nav nav-tabs\" id=\"myTab2\" role=\"tablist\">\n                                                        <!-- <li class=\"nav-item col\">\n                                                        <a (click)=\"onAccordion()\" class=\"nav-link active\" style=\"text-align: center;\" id=\"text-tab\" data-toggle=\"tab\" href=\"#text\"\n                                                            role=\"tab\" aria-controls=\"text\" aria-selected=\"true\">Text</a>\n                                                    </li> -->\n                                                        <li class=\"nav-item col\">\n                                                            <a (click)=\"onCode()\" class=\"nav-link\" id=\"code-tab\" style=\"text-align: center;\" data-toggle=\"tab\" href=\"#code\" role=\"tab\" aria-controls=\"code\" aria-selected=\"false\">Text/Code</a>\n                                                        </li>\n\n                                                    </ul>\n                                                    <div class=\"tab-content\">\n                                                        <div class=\"tab-pane active\" id=\"text\" role=\"tabpanel\" aria-labelledby=\"text-tab\" style=\"padding:1rem\">\n\n                                                            <textarea id=\"txtarea\" class=\"form-control \" style=\"border:none\" spellcheck=\"false\" placeholder=\"Add description..\"></textarea>\n\n\n\n                                                        </div>\n                                                        <div class=\"tab-pane fade\" id=\"code\" role=\"tabpanel\" aria-labelledby=\"code-tab\" style=\"padding:1rem\">\n                                                            <textarea id=\"txtarea2\" class=\"form-control \" name=\"questionCode\" ngModel style=\"border:none\" spellcheck=\"false\" placeholder=\"Add Code..\"></textarea>\n\n                                                        </div>\n                                                    </div>\n\n                                                </div>\n                                            </div>\n\n                                            <div *ngIf=\"questionType == 1 || questionType == 2\">\n                                                <div *ngIf=\"optionList.length\">\n                                                <h5>Options</h5>\n                                                <hr>\n                                                </div>\n                                               \n                                                <mat-radio-group class=\"example-radio-group\">\n                                                <div *ngFor=\"let opt of optionList;let i=index\">\n                                                <div class=\"form-row pt-4\" (mouseover)=\"showDelete(i)\" (mouseleave)=\"hideDelete(i)\">\n                                                <div *ngIf=\"questionType == '1'\" class=\"col-sm-1\">\n                                               \n                                                <mat-radio-button class=\"example-radio-button\" (click)=\"setMcqAns(i)\" [value]=\"i\" class=\"correct_radio\">\n                                               \n                                                </mat-radio-button>\n                                                </div>\n                                                <div *ngIf=\"questionType == '2'\" class=\"check_green\">\n                                                <mat-checkbox class=\"example-margin\" (click)=\"checkboxAns(i)\"></mat-checkbox>\n                                                </div>\n                                                <div class=\"form-group col-md-4\">\n                                                <!-- <label for=\"email\">Option</label> -->\n                                                <!-- <input type=\"hidden\" class=\"form-control\" name=\"tempId\" ngModel=\"{{this.tempOptionImageId}}\"> -->\n                                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"optionObj[i].optionText\" [ngModelOptions]=\"{standalone:true}\">\n                                                <span id=\"close_{{i}}\" class=\"close_icon\" (click)=\"deleteOption(i)\" [hidden]=\"optionList.length == 1\">\n                                                <i class=\"material-icons\">\n                                                close\n                                                </i>\n                                                </span>\n                                               \n                                                </div>\n                                               \n                                                <div class=\" col-md-2 \" style=\"padding-top: 2.25rem; \">\n                                               \n                                                <i class=\"material-icons\" (click)=\"optionImg(i)\" style=\"cursor:pointer;\" *ngIf=\"questionType == '7'\">\n                                                image\n                                                </i>\n                                                <input type=\"file\" [hidden]=\"true \" (change)=\"onSelectedOptionImage($event,i)\" id=\"optionImageId{{i}}\">\n                                               \n                                                </div>\n                                               \n                                               \n                                                </div>\n                                                <button class=\"btn btn-link \" (click)=\"incOptionList()\" style=\"margin-left: 18%;\" *ngIf=\"optionList.length == i+1\">\n                                                + Add another option\n                                                </button>\n                                                </div>\n                                                </mat-radio-group>\n                                                </div>\n                                               \n                                               \n                                               \n                                                \n                                                <div class=\"form-row\">\n                                                <div class=\"form-group col-md-4 \">\n                                                <div *ngIf=\"questionType == 3 || questionType == 4 || questionType == 5 || questionType == 6\">\n                                                <label for=\"te \">Answer</label>\n                                                </div>\n                                                <div *ngIf=\"questionType == 3 || questionType == 4 || questionType == 5 || questionType == 6\">\n                                                <textarea rows=\"6\" cols=\"40\" name=\"answer\" ngModel></textarea>\n                                                </div>\n                                                <!-- <div *ngIf=\"questionType == 1 || questionType == 2\">\n                                                <input type=\"text \" class=\"form-control \" name=\"answer\" ngModel placeholder=\" \">\n                                                </div> -->\n                                                </div>\n                                                </div>\n\n\n\n                                            <!-- <div class=\"form-row \">\n            <div class=\"form-group col-md-4 \">\n            <label for=\"email \">Option</label>\n            <input type=\"text \" class=\"form-control \" id=\"option \" name=\"optionText \" [(ngModel)]=\"this.optionObj \" placeholder=\" \">\n            </div>\n           \n            <div class=\"col-md-2 \" style=\"padding-top: 2.25rem; \"> <i class=\"material-icons \" (click)=\"optionImg() \" style=\"cursor: pointer; \">\n            image\n            </i>\n            <input type=\"file \" [hidden]=\"true \" (change)=\"onSelectedOptionImage($event) \" id=\"optionImageId \">\n            </div>\n           \n            </div> -->\n                                            <!-- <div class=\"form-row \">\n            <div class=\"form-group col-md-4 \">\n            <label for=\"email \">Option</label>\n            <input type=\"text \" class=\"form-control \" id=\"option \" placeholder=\" \">\n            <a href=\"JavaScript:Void(0); \" style=\"float: right \">\n            + Add another option\n            </a>\n            </div>\n            <div class=\"col-md-2 \" style=\"padding-top: 2.25rem; \"> <i class=\"material-icons \" (click)=\"optionImg1() \" style=\"cursor: pointer; \">\n            image\n            </i>\n            <input type=\"file \" [hidden]=\"true \" (change)=\"onSelectedOptionImage($event) \" id=\"optionImageId1 \">\n            </div>\n            </div> -->\n                                             \n                                            <div class=\"col-md-12 pt-5 pl-0\">\n                                                <div style=\"float:left;margin-left: -2rem \">\n                                                    <!-- <label>Mandatory</label> -->\n                                                    <!-- <label class=\"container-mand\">\n                                                            <popover-content #manditoryPop \n                                                            title=\"\"\n                                                            placement=\"right\"\n                                                            [animation]=\"true\" \n                                                             style=\"box-shadow: 10px 10px 5px #aaaaaa;\">\n                                                            <span style=\"color: #646363;\"> Specify questions must be answered before progressing to the next question.</span>  \n                                                            \n                                                            </popover-content>\n                                                    <input id=\"check\" class=\"mt-2 mr-2\" type=\"checkbox\" name=\"isMandate\" ngModel>Mandatory<span><i style=\"    font-size: 13px;color: #969696;top: 2px;\"  [popoverOnHover]=\"true\" [popover]=\"manditoryPop\" class=\"material-icons\">info</i></span> \n                                                  \n                                                </label>-->\n\n                                                </div>\n                                                <div class=\"float-left mt-1 ml-4\">\n                                                    <section class=\"example-section\">\n                                                            <popover-content #globalPop \n                                                            title=\"\"\n                                                            placement=\"right\"\n                                                            [animation]=\"true\" \n                                                             style=\"box-shadow: 10px 10px 5px #aaaaaa;\">\n                                                            <span style=\"color: #646363;\"> Here you get the option to contribute your question to the global catalogue and help enrich the community.</span>  \n                                                            \n                                                            </popover-content>\n                                                        <mat-slide-toggle class=\"example-margin\" [color]=\"color\" [checked]=\"true\" data-toggle=\"toggle\" name=\"globaleShare\" ngModel>\n                                                            Contribute to Global Question Catalouge <span><i style=\"    font-size: 13px;color: #969696;top: 2px;\"  [popoverOnHover]=\"true\" [popover]=\"globalPop\" class=\"material-icons\">info</i></span>\n                                                        </mat-slide-toggle>\n                                                    </section>\n                                                </div>\n                                                <div style=\"float: right; \">\n\n                                                    <!-- <button type=\"button \" class=\"btn btn-primary \" style=\"background: #fff;color: #3D70B2;margin-right:2rem; border: 1px solid #3D70B2; height: 30px; line-height: 17px; border-radius: 0px; font-weight:\n            600; font-size: 15px; \" routerLink=\"sections \">+ Add Another Question</button>\n                                                <button type=\"button \" class=\"btn btn-primary \" style=\"background: #fff;color: #3D70B2;margin-right:2rem; border: 1px solid #3D70B2; height: 30px; line-height: 17px; border-radius: 0px; font-weight:\n            600; font-size: 15px; \" routerLink=\"sections \">Create New Section</button> -->\n\n                                                    <button type=\"submit \" class=\"btn btn-primary add_ques_btn\" [disabled]=\"!myForm.valid\" [ngClass]=\"{'cursor_not':!myForm.valid}\">\n                                                    Add Question</button>\n                                                </div>\n\n                                            </div>\n                                        </div>\n                                    </form>\n                                    <!-- <div class=\"alert alert-success\" style=\"text-align:center\" *ngIf=\"questionSuccesMessage\">\n                                        <span style=\"text-align:center\">{{this.statusMessage}}</span>\n                                    </div>\n                                    <div class=\"alert alert-danger\" style=\"text-align:center\" *ngIf=\"questionFailMessage\">\n                                        <span>{{this.statusMessage}}</span>\n                                    </div> -->\n\n\n\n                                    <div class=\"alert alert-success\" style=\"text-align:center\" *ngIf=\"optionImageSuccess\">\n                                        <span style=\"text-align:center\">{{this.optionStatusMessage}}</span>\n                                    </div>\n                                    <div class=\"alert alert-danger\" style=\"text-align:center\" *ngIf=\"optionImageFail\">\n                                        <span>{{this.optionStatusMessage}}</span>\n                                    </div>\n\n                                </div>\n                                <div class=\"tab-pane fade \" id=\"profile \" role=\"tabpanel \" aria-labelledby=\"profile-tab \">...</div>\n\n                            </div>\n\n\n                        </div>\n                        <div class=\"tab-pane fade \" id=\"profile \" role=\"tabpanel \" aria-labelledby=\"profile-tab \">...</div>\n\n                    </div>\n                    <div *ngIf=\"bulkUpload\">\n                        <div class=\"text-center\">\n                            <div class=\"pt-4\">\n                                <button class=\"btn btn-primary\" (click)=\"clickUpload()\">\n                                        <i class=\"material-icons\">\n                                            vertical_align_top\n                                        </i>\n                                        Choose File\n                                    </button>\n                                <small *ngIf=\"filesToUpload.length\" class=\"pl-5 blueColor\">{{filesToUpload[0].name}}</small>\n                                <small *ngIf=\"filesToUpload.length\" class=\"pl-3 redCol\">{{getSize(filesToUpload[0].size)}}</small>\n                                <input id=\"upload_file_btn\" [hidden]=\"true\" type=\"file\" (change)=\"uploadFile($event)\">\n                            </div>\n                            <div class=\"mt-5 mb-5\">\n                                <button class=\"btn btn-success\" (click)=\"uploadBulkQues()\">\n                                        Upload\n                                    </button>\n                            </div>\n                            <div class=\"mt-4 mb-4\">\n                                <button class=\"btn btn-link float-left\">\n                                        <a [href]=\"templateLink\" download> Download Template for Questions Bulk Upload </a>\n                                    </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/Components/sections/section-filter.pipe.ts":
/*!************************************************************!*\
  !*** ./src/app/Components/sections/section-filter.pipe.ts ***!
  \************************************************************/
/*! exports provided: SectionFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionFilterPipe", function() { return SectionFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SectionFilterPipe = /** @class */ (function () {
    function SectionFilterPipe() {
    }
    SectionFilterPipe.prototype.transform = function (sectionsData, serachBySection) {
        if (!sectionsData || !serachBySection) {
            return sectionsData;
        }
        var arr = sectionsData.filter(function (section) {
            return section.sectionName.toLowerCase().includes(serachBySection.toLowerCase());
        });
        // console.log("arr",arr)
        return arr;
    };
    SectionFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sectionFilter'
        })
    ], SectionFilterPipe);
    return SectionFilterPipe;
}());



/***/ }),

/***/ "./src/app/Components/sections/sections.component.css":
/*!************************************************************!*\
  !*** ./src/app/Components/sections/sections.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  \n.modal-lg{\n    max-width: 1000px;\n}\n.card {\n    padding: 0rem;\n    border: none;\n    margin-left: 2rem;\n    box-shadow: 0px 1px 6px 2px #cec9c9;\n}\nhr {\n    margin: 0rem -1.2rem;\n    border-top: 2px solid rgba(4, 2, 2, 0.31);\n}\n.card-body {\n    padding-bottom: 0rem;\n}\n.card-link {\n    padding: 0.5rem;\n    color: #3D70B2;\n    text-decoration: none;\n    background-color: transparent;\n    font-size: 12px;\n}\n.card-body {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.card-title {\n    font-size: 18px;\n    font-weight: 700;\n    color: #2C2C2C;\n    padding-bottom: 0.4rem;\n    margin-top: -1.5rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: 250px;\n}\n.card-subtitle {\n    font-size: 14px;\n    color: #707070!important;\n    padding-bottom: 0.4rem;\n}\n.card-text {\n    font-size: 12px;\n    opacity: 0.7;\n    color: #707070!important;\n    margin: 2px 0px;\n    \n}\n.col-md-4 {\n    flex: 0 0 27.333333%;\n    max-width: 33.333333%;\n    margin-bottom: 1rem;\n}\nh4{\n    padding: 1rem;\n    color: #3D70B2;\n    font-size: 24px;\n    font-weight: 300;\n}\nhr{\n    border-top: 1px solid #707070;\n    margin-top: 0px;\n}\n/* The container */\n.container {\n    display: block;\n    position: relative;\n    padding-left: 35px;\n    padding-top: 10px;\n    margin-bottom: 12px;\n    /* cursor: pointer; */\n    font-size: 12px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n/* Hide the browser's default checkbox */\n.container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n}\n.container-mand input {\n    /* position: absolute;\n    cursor: pointer;\n    left: 15px;\n    top: 12px; */\n}\n/* Create a custom checkbox */\n.checkmark {\n    position: absolute;\n    top: 0;\n    right: 0;\n    height: 20px;\n    width: 20px;\n    margin-top: -3px;\n    background-color: #fff;\n    border: 1px solid black;\n}\n/* On mouse-over, add a grey background color */\n.container:hover input~.checkmark {\n    background-color: #fff;\n    border: 1px solid black;\n}\n/* When the checkbox is checked, add a blue background */\n.container input:checked~.checkmark {\n    background-color: #fff;\n    border: 1px solid black;\n}\n/* Create the checkmark/indicator (hidden when not checked) */\n.checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n}\n/* Show the checkmark when checked */\n.container input:checked~.checkmark:after {\n    display: block;\n}\n/* Style the checkmark/indicator */\n.container .checkmark:after {\n    left: 6px;\n    top: 0px;\n    width: 7px;\n    height: 15px;\n    border: solid #000;\n    border-width: 0 2px 2px 0;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n}\n#ad {\n    display: -ms-flexbox;\n    -ms-flex-pack: center;\n    -ms-flex-align: center;\n    /* Firefox */\n    display: -moz-box;\n    -moz-box-pack: center;\n    -moz-box-align: center;\n    /* Safari, Opera, and Chrome */\n    display: -webkit-box;\n    -webkit-box-pack: center;\n    -webkit-box-align: center;\n}\n.add_anoth_option{\n    background: inherit;\n    line-height: inherit;\n    color: #007ad9;\n    border-radius: inherit;\n    box-shadow: inherit;\n}\n.close_icon{\n    position: absolute;\n    color: #f44336;\n    right: -30px;\n    z-index: 9999;\n    top: 5px;\n    transition-delay: 0.2s;\n    visibility: hidden;\n}\n.close_icon i{\n    font-size:18px;\n    cursor: pointer;\n    font-weight:bold;\n}\n#exampleModalCenter .close span{\n    background-color: #41D6C3;\n    color: #fff;\n    padding: 2px 5px 0px 5px;\n    border-radius: 21px;\n}\n#exampleModalCenter .close span i{\n    font-size:20px;\n}\n#UploadedQuesModal .modal-dialog{\n    max-width: 1000px;\n}\n.quesCountSize{\n    font-size:20px;\n}\n.tot_count{\n    color:#fc7b03\n}\n.succ_count{\n    color:#20BF6B;\n}\n.exist_count{\n    color:#f70800;\n}\n.red_col{\n    color:#c0392b;\n}\n.green_col{\n    color:#2ecc71;\n}\n.yellow_col{\n    color:#f1c40f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9zZWN0aW9ucy9zZWN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUNBQW1DO0FBQ3ZDO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIseUNBQXlDO0FBQzdDO0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLGVBQWU7SUFDZixjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25CO0FBRUE7SUFDSSxpREFBaUQ7QUFDckQ7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixzQkFBc0I7QUFDMUI7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLGVBQWU7O0FBRW5CO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjtBQUVBLGtCQUFrQjtBQUVsQjtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7QUFHQSx3Q0FBd0M7QUFFeEM7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGVBQWU7SUFDZixTQUFTO0lBQ1QsUUFBUTtBQUNaO0FBRUE7SUFDSTs7O2dCQUdZO0FBQ2hCO0FBR0EsNkJBQTZCO0FBRTdCO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjtBQUdBLCtDQUErQztBQUUvQztJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7QUFHQSx3REFBd0Q7QUFFeEQ7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCO0FBR0EsNkRBQTZEO0FBRTdEO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBR0Esb0NBQW9DO0FBRXBDO0lBQ0ksY0FBYztBQUNsQjtBQUdBLGtDQUFrQztBQUVsQztJQUNJLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUVoQyx3QkFBd0I7QUFDNUI7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4Qix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9zZWN0aW9ucy9zZWN0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBcbi5tb2RhbC1sZ3tcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbn1cbi5jYXJkIHtcbiAgICBwYWRkaW5nOiAwcmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDZweCAycHggI2NlYzljOTtcbn1cblxuaHIge1xuICAgIG1hcmdpbjogMHJlbSAtMS4ycmVtO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDQsIDIsIDIsIDAuMzEpO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHJlbTtcbn1cblxuLmNhcmQtbGluayB7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGNvbG9yOiAjM0Q3MEIyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jYXJkLWJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMkMyQzJDO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XG4gICAgbWFyZ2luLXRvcDogLTEuNXJlbTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2lkdGg6IDI1MHB4O1xufVxuXG4uY2FyZC1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNzA3MDcwIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xufVxuXG4uY2FyZC10ZXh0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGNvbG9yOiAjNzA3MDcwIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDJweCAwcHg7XG4gICAgXG59XG5cbi5jb2wtbWQtNCB7XG4gICAgZmxleDogMCAwIDI3LjMzMzMzMyU7XG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMzMlO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbmg0e1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgY29sb3I6ICMzRDcwQjI7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5ocntcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzcwNzA3MDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi8qIFRoZSBjb250YWluZXIgKi9cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctbGVmdDogMzVweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIC8qIGN1cnNvcjogcG9pbnRlcjsgKi9cbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuXG4vKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xuXG4uY29udGFpbmVyIGlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiAwO1xufVxuXG4uY29udGFpbmVyLW1hbmQgaW5wdXQge1xuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbGVmdDogMTVweDtcbiAgICB0b3A6IDEycHg7ICovXG59XG5cblxuLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXG5cbi5jaGVja21hcmsge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cblxuLmNvbnRhaW5lcjpob3ZlciBpbnB1dH4uY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG5cbi8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xuXG4uY29udGFpbmVyIGlucHV0OmNoZWNrZWR+LmNoZWNrbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuXG4vKiBDcmVhdGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xuXG4uY2hlY2ttYXJrOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi8qIFNob3cgdGhlIGNoZWNrbWFyayB3aGVuIGNoZWNrZWQgKi9cblxuLmNvbnRhaW5lciBpbnB1dDpjaGVja2Vkfi5jaGVja21hcms6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cbi8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXG5cbi5jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XG4gICAgbGVmdDogNnB4O1xuICAgIHRvcDogMHB4O1xuICAgIHdpZHRoOiA3cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIGJvcmRlcjogc29saWQgIzAwMDtcbiAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4jYWQge1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIC8qIEZpcmVmb3ggKi9cbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAvKiBTYWZhcmksIE9wZXJhLCBhbmQgQ2hyb21lICovXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG59XG4uYWRkX2Fub3RoX29wdGlvbntcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIGNvbG9yOiAjMDA3YWQ5O1xuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgYm94LXNoYWRvdzogaW5oZXJpdDtcbn1cbi5jbG9zZV9pY29ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogI2Y0NDMzNjtcbiAgICByaWdodDogLTMwcHg7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICB0b3A6IDVweDtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5jbG9zZV9pY29uIGl7XG4gICAgZm9udC1zaXplOjE4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG59XG4jZXhhbXBsZU1vZGFsQ2VudGVyIC5jbG9zZSBzcGFue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MUQ2QzM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMnB4IDVweCAwcHggNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIxcHg7XG59XG4jZXhhbXBsZU1vZGFsQ2VudGVyIC5jbG9zZSBzcGFuIGl7XG4gICAgZm9udC1zaXplOjIwcHg7XG59XG4jVXBsb2FkZWRRdWVzTW9kYWwgLm1vZGFsLWRpYWxvZ3tcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbn1cbi5xdWVzQ291bnRTaXple1xuICAgIGZvbnQtc2l6ZToyMHB4O1xufVxuLnRvdF9jb3VudHtcbiAgICBjb2xvcjojZmM3YjAzXG59XG4uc3VjY19jb3VudHtcbiAgICBjb2xvcjojMjBCRjZCO1xufVxuLmV4aXN0X2NvdW50e1xuICAgIGNvbG9yOiNmNzA4MDA7XG59XG4ucmVkX2NvbHtcbiAgICBjb2xvcjojYzAzOTJiO1xufVxuLmdyZWVuX2NvbHtcbiAgICBjb2xvcjojMmVjYzcxO1xufVxuLnllbGxvd19jb2x7XG4gICAgY29sb3I6I2YxYzQwZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Components/sections/sections.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Components/sections/sections.component.ts ***!
  \***********************************************************/
/*! exports provided: SectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsComponent", function() { return SectionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/AllServices/all-services.service */ "./src/app/Services/AllServices/all-services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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




var SectionsComponent = /** @class */ (function () {
    function SectionsComponent(service, route, activeRoute) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.activeRoute = activeRoute;
        this.dropdownCateg = {
            singleSelection: true,
            text: "Select Test Master",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "myclass custom-class",
            'showCheckbox': false
        };
        this.selectedItems = [];
        this.dropdownCateg2 = {
            singleSelection: true,
            text: "Select ",
            showCheckbox: false,
            enableSearchFilter: true,
        };
        this.selectedMaster = [];
        this.dropdownListMaster = [];
        this.testSectionList = [];
        this.filesToUpload = [];
        this.color = 'accent';
        this.checked = true;
        this.itemsAsObjects = [];
        this.optionObj = {
            '0': {
                'optionText': null,
                'tempId': null
            }
        };
        this.optionList = [""];
        this.routeId = 0;
        this.categoryAndSubCategoryArr = [];
        this.subCategoryArr = [];
        this.flag = true;
        this.createdQuestion = [];
        this.dropdownList = [];
        // selectedItems = [];
        this.dropdownSettings = {
            singleSelection: true,
            text: "Select Sections",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "myclass custom-class"
        };
        this.checkboxList = [];
        this.questionImageSelectedFile = null;
        this.questionOptionImageFile = null;
        this.optionImageSuccess = false;
        this.optionImageFail = false;
        this.questionSuccesMessage = false;
        this.questionFailMessage = false;
        this.seactionSuccessMessage = false;
        this.seactionFailMessage = false;
        this.activeRoute.params.subscribe(function (params) {
            _this.routeId = params['id'];
        });
    }
    SectionsComponent.prototype.onDeSelectAll = function (event) {
        this.heirarchy = undefined;
    };
    SectionsComponent.prototype.onItemSelect = function (event) {
        var _this = this;
        // console.log(event.type)
        this.obj = event;
        this.service.getAll("testmanagement/getsubcategorylist?token=" + localStorage.getItem('token') + "&type=" + event.type + "&id=" + event.id).subscribe(function (data) {
            if (data['statusCode'] == 1) {
                // console.log(data)
                _this.heirarchy = data['categoryName'];
                _this.categoryId = data['categoryId'];
            }
            else {
            }
        }, function (error) {
            // console.log(error)
        }, function () { });
    };
    SectionsComponent.prototype.onClosed = function (event) {
        // console.log(event);
    };
    SectionsComponent.prototype.onOpened = function (event) {
        // console.log(event);
    };
    // items=[{value: '0', display: 'Angular'}, {value: '1', display: 'React'}];
    SectionsComponent.prototype.onInputBlur = function (event) {
        if (event != "") {
            this.itemsAsObjects.push({ instanceModelTagId: "0", instanceModelTagName: event });
        }
    };
    SectionsComponent.prototype.onItemAdded = function (event) {
        // this.itemsAsObjects.forEach(element => {
        //   element.id=0;
        // });
        // this.itemsAsObjects.push({instanceModelTagId: "0",instanceModelTagName: event})
        // console.log(this.itemsAsObjects);
        // console.log(event);
    };
    SectionsComponent.prototype.getAllSections = function () {
        var _this = this;
        this.blockUI.start('Please Wait ...');
        this.service.getAll("reports/questions/getsections?token=" + localStorage.getItem('token')).subscribe(function (data) {
            // console.log(data)
            if (data['statusCode'] == 1) {
                _this.sectionsData = data['sectionsList'];
            }
            else {
            }
        }, function (error) {
            // console.log(error)
            _this.blockUI.stop();
        }, function () {
            _this.blockUI.stop();
        });
    };
    SectionsComponent.prototype.getAllSectionsByTestId = function () {
        var _this = this;
        this.service.getAll("testmanagement/testsetup/listofsectionsbytestsetupid?token=" + localStorage.getItem('token') + "&testSetupId=" + this.routeId).subscribe(function (data) {
            if (data['statusCode'] == 1) {
                // console.log(data)
                _this.testSetupData = data;
                _this.sectionsData = data['sectionsList'];
                _this.testSetup = data['testSetupTitle'];
                // console.log(this.sectionsData )
            }
            else {
            }
        }, function (error) {
            // console.log(error)
        }, function () { });
    };
    SectionsComponent.prototype.getComplexCity = function () {
        var _this = this;
        this.service.getAll("reports/questions/getcomplexity?token=" + localStorage.getItem('token')).subscribe(function (data) {
            if (data['statusCode'] == 1) {
                _this.complexityArr = data['compelxityTypeDTO'];
            }
            else {
            }
        }, function (error) {
            // console.log(error)
        }, function () {
        });
    };
    SectionsComponent.prototype.getQuestionType = function () {
        var _this = this;
        this.service.getAll("reports/questions/getquestiontype?token=" + localStorage.getItem('token')).subscribe(function (data) {
            if (data['statusCode'] == 1) {
                // console.log(data)
                _this.questionTypeArr = data['questionType'];
            }
        }, function (error) {
            // console.log(error)
        }, function () { });
    };
    SectionsComponent.prototype.getCategoryAndSubCategoryList = function () {
        var _this = this;
        var url;
        if (this.flag) {
            url = "testmanagement/globalcategorylist?token=" + localStorage.getItem('token');
        }
        else {
            url = "testmanagement/testsetup/listoftestmasterrootconfigs?token=" + localStorage.getItem('token') + "&testSetupId=" + this.routeId;
        }
        this.service.getAll(url).subscribe(function (data) {
            if (data['statusCode'] == 1) {
                console.log(_this.flag);
                if (_this.flag) {
                    _this.categoryAndSubCategoryArr = data['globalCategoryList'];
                    console.log(_this.categoryAndSubCategoryArr);
                }
                else {
                    _this.categoryAndSubCategoryArr = data['testMasterConfigList'];
                    for (var i = 0; i < data['testMasterConfigList'].length; i++) {
                        _this.testSectionList.push({
                            id: data['testMasterConfigList'][i].id,
                            itemName: data['testMasterConfigList'][i].name,
                            type: data['testMasterConfigList'][i].type
                        });
                    }
                }
                // console.log(data)
            }
        }, function (error) {
            // console.log(error)
        }, function () {
        });
    };
    SectionsComponent.prototype.onSeletedCatAndSub = function (arr) {
        var _this = this;
        // console.log("sss"+arr)
        this.obj = this.categoryAndSubCategoryArr[arr];
        // // console.log("Type=" + this.obj.type)
        // // console.log("Id=" + this.obj.id)
        if (this.obj.type != 0 && this.obj.id != 0) {
            this.service.getAll("testmanagement/getsubcategorylist?token=" + localStorage.getItem('token') + "&type=" + this.obj.type + "&id=" + this.obj.id).subscribe(function (data) {
                if (data['statusCode'] == 1) {
                    // console.log(data)
                    _this.heirarchy = data['categoryName'];
                    _this.categoryId = data['categoryId'];
                }
                else {
                }
            }, function (error) {
                // console.log(error)
            }, function () { });
        }
    };
    SectionsComponent.prototype.ngOnInit = function () {
        if (this.routeId) {
            this.flag = false;
            this.getAllSectionsByTestId();
            $('.ng2-tag-input__text-input').focusout(function () {
                // console.log("its working...........");
            });
        }
        else {
            // this.getAllSections();
            this.getTestMasters();
        }
        var self = this;
        $('#UploadedQuesModal').on('show.bs.modal', function () {
            $("body").css('overflow', 'hidden');
            $('.modal').css('overflow', 'auto');
        });
        $('#UploadedQuesModal').on("hidden.bs.modal", function () {
            $("body").css('overflow', 'auto');
            $('.modal').css('overflow', 'hidden');
        });
        $('#exampleModalCenter').on("show.bs.modal", function () {
            self.filesToUpload = [];
            self.toggleBulk('1');
        });
        // console.log(this.routeId);
        this.getComplexCity();
        this.getQuestionType();
        this.getCategoryAndSubCategoryList();
    };
    SectionsComponent.prototype.onSection = function (event, sectionId) {
        if (this.sectionId != sectionId) {
            if (this.createdQuestion.length) {
                this.createdQuestion = [];
            }
        }
        this.sectionId = sectionId;
    };
    SectionsComponent.prototype.onSelectedQuestionImage = function (event) {
        this.questionImageSelectedFile = event.target.files[0];
        // console.log(this.questionImageSelectedFile)
    };
    SectionsComponent.prototype.onSelectedOptionImage = function (event, ind) {
        var _this = this;
        this.optionImageSuccess = false;
        this.optionImageFail = false;
        this.questionOptionImageFile = event.target.files[0];
        var formData = new FormData();
        formData.append("files", this.questionOptionImageFile);
        formData.append('token', localStorage.getItem('token'));
        // console.log(this.questionOptionImageFile)
        this.service.postData("notification/image/option/add", formData).subscribe(function (data) {
            alert(data['statusMessage']);
            if (data['statusCode'] == 1) {
                // this.tempOptionImageId=data['tempoptionImageId'];
                _this.optionObj[ind].tempId = data['tempoptionImageId'];
                // console.log(this.tempOptionImageId)
                _this.optionImageSuccess = true;
                _this.optionStatusMessage = data['statusMessage'];
                setTimeout(function () {
                    _this.optionImageSuccess = false;
                }, 3000);
            }
            else {
                _this.optionImageFail = true;
                _this.optionStatusMessage = data['statusMessage'];
                setTimeout(function () {
                    _this.optionImageFail = false;
                }, 3000);
            }
        }, function (error) {
            // console.log(error)
        }, function () { });
    };
    SectionsComponent.prototype.addQuestion = function (myForm) {
        var _this = this;
        var questionCode = $('#txtarea').val();
        // console.log(questionCode);
        // console.log(this.checkboxList)
        // console.log(this.mcaAns)
        this.blockUI.start('Please Wait ...');
        var data = myForm.value;
        this.questionFailMessage = false;
        this.questionSuccesMessage = false;
        var formListOptions = [];
        // options
        for (var key in this.optionObj) {
            if (this.optionObj.hasOwnProperty(key)) {
                var optionFilled = 0;
                if (this.optionObj[key]['optionText'] != null && this.optionObj[key]['optionText'].trim() != "") {
                    optionFilled = 1;
                }
                formListOptions.push({
                    "tempId": this.optionObj[key]['tempId'],
                    "optionText": this.optionObj[key]['optionText']
                });
            }
        }
        // console.log(formListOptions)
        // end
        // if(!optionFilled){
        //     this.service.errorAlert("Please Enter the Options");
        //     this.blockUI.stop();
        //     return false
        // }
        var formData = new FormData();
        formData.append("optionList", JSON.stringify(formListOptions));
        formData.append("sectionId", this.sectionId);
        formData.append("questionText", data.questionText);
        formData.append("questionImage", this.questionImageSelectedFile);
        formData.append("questionTypeId", data.questionTypeId);
        formData.append("complexityId", data.complexityId);
        formData.append("questionCode", questionCode);
        if (data.globaleShare) {
            formData.append("globaleShare", 'yes');
        }
        else {
            formData.append("globaleShare", 'no');
        }
        if (data.questionTypeId == '1' || data.questionTypeId == '2') {
            if (!optionFilled) {
                this.service.errorAlert("Please Enter the Options");
                this.blockUI.stop();
                return false;
            }
        }
        if (data.questionTypeId == "1") {
            if (this.mcaAns == "0" || this.mcaAns) {
                formData.append("answer", this.mcaAns);
            }
            else {
                this.service.errorAlert("Please Select the Answer");
                this.blockUI.stop();
                return false;
            }
        }
        else if (data.questionTypeId == "2") {
            if (this.checkboxList.length) {
                var checkboxSting = this.checkboxList.sort(function (a, b) {
                    return a - b;
                });
            }
            else {
                this.service.errorAlert("Please Select the Answer");
                this.blockUI.stop();
                return false;
            }
            formData.append("answer", checkboxSting.join(','));
            // console.log(checkboxSting)
        }
        else {
            formData.append("answer", data.answer);
        }
        formData.append("token", localStorage.getItem('token'));
        if (data.isMandate) {
            formData.append("isMandate", "1");
        }
        else {
            formData.append("isMandate", "0");
        }
        //formData.append("")
        // console.log(data)
        this.service.postData("reports/questions/addquestion", formData).subscribe(function (data) {
            // console.log(data['statusMessage'])
            if (data['statusCode'] == 1) {
                $('#exampleModalCenter').modal('hide');
                _this.mcaAns = null;
                _this.ngOnInit();
                // get ques by id
                _this.service.getAll('reports/questions/getquestionsbyquestionid?token=' + localStorage.getItem('token') + '&questionid=' + data['questionId'])
                    .subscribe(function (res) {
                    _this.blockUI.stop();
                    _this.createdQuestion = res['questionsList'];
                }, function (error) {
                });
                //  end
                _this.checkboxList = [];
                myForm.reset();
                delete _this.optionObj;
                _this.selectedItems = [];
                _this.optionList = [];
                _this.optionObj = {
                    '0': {
                        'optionText': null,
                        'tempId': 0
                    }
                };
                // this.questionSuccesMessage = true;
                // this.statusMessage = data['statusMessage'];
                // this.ngOnInit();
                // setTimeout(() => {
                //   this.questionSuccesMessage = false;
                //   this.statusMessage = null
                // }, 4000)
                _this.service.successAlert(data['statusMessage']);
                if (_this.routeId) {
                    _this.updateSections();
                }
            }
            else {
                _this.blockUI.stop();
                _this.questionFailMessage = true;
                _this.service.errorAlert(data['statusMessage']);
                // this.statusMessage = data['statusMessage']
                setTimeout(function () {
                    _this.questionFailMessage = false;
                    // this.statusMessage = null
                }, 3000);
            }
        }, function (error) {
            // console.log(error)
            _this.blockUI.stop();
        }, function () {
            // $('#exampleModalCenter').modal('toggle');
            // this.ngOnInit();
        });
    };
    SectionsComponent.prototype.createTestInstance = function () {
        var _this = this;
        this.blockUI.start('Loading....');
        this.itemsAsObjects.forEach(function (element) {
            element.instanceModelTagId = 0;
        });
        // console.log(this.testInstanceName);
        this.service.postData("testmanagement/testsetup/createtestinstance?token=" + localStorage.getItem('token'), {
            "instanceAliasTitle": this.testSetupData.testInstanceAliasName,
            "instanceId": 0,
            "instanceTitle": this.testInstanceName,
            "listOfTestSections": this.sectionsData,
            "instanceTags": this.itemsAsObjects,
            "testId": this.routeId
        }).subscribe(function (data) {
            // console.log(data);
            if (data["statusCode"] == 1) {
                _this.route.navigate(['/test-setup/instance', data['testInstanceId']]);
            }
            else {
                _this.service.errorAlert(data["statusMessage"]);
            }
        }, function (error) {
            // console.log(error);
            _this.blockUI.stop();
        }, function () {
            _this.blockUI.stop();
        });
    };
    SectionsComponent.prototype.selectSection = function (index) {
        if (this.sectionsData[index].isSectionActive == 0) {
            this.sectionsData[index].isSectionActive = 1;
        }
        else {
            this.sectionsData[index].isSectionActive = 0;
        }
        //  var temp =0
        //  this.sectionsData.forEach(element => {
        //    if(element.isSectionActive==1){
        //      temp+=element.totalNumberOfQuestions
        //    }
        // this.sectionsData.totalNumberOfAllSectionQuestions=temp;
        //  });
    };
    SectionsComponent.prototype.onAccordion = function () {
        document.getElementById('txtarea').addEventListener('keyup', function () {
            this.style.overflow = 'hidden';
            this.style.height = '0';
            this.style.height = this.scrollHeight + 'px';
        }, false);
    };
    SectionsComponent.prototype.onCode = function () {
        document.getElementById('txtarea2').addEventListener('keyup', function () {
            // console.log("hi");
            this.style.overflow = 'hidden';
            this.style.height = '0';
            this.style.height = this.scrollHeight + 'px';
        }, false);
    };
    SectionsComponent.prototype.questionImg = function () {
        document.getElementById('imageId').click();
    };
    SectionsComponent.prototype.optionImg = function (i) {
        document.getElementById('optionImageId' + i).click();
    };
    SectionsComponent.prototype.incOptionList = function () {
        this.optionList.push("");
        this.optionObj[this.optionList.length - 1] = {
            'optionText': null,
            'tempId': 0
        };
        // console.log(this.optionObj)
    };
    SectionsComponent.prototype.setType = function (qType) {
        if (qType != 'Select Type') {
            this.optionList = [""];
            this.optionObj = {
                '0': {
                    'optionText': null,
                    'tempId': 0
                }
            };
            this.questionType = qType;
        }
    };
    SectionsComponent.prototype.checkboxAns = function (i) {
        if (!this.checkboxList.includes(i)) {
            this.checkboxList.push(i);
        }
        else {
            var ind = this.checkboxList.indexOf(i);
            this.checkboxList.splice(ind, 1);
        }
    };
    SectionsComponent.prototype.setMcqAns = function (ind) {
        this.mcaAns = ind;
    };
    SectionsComponent.prototype.addSectionByTestInsatanceId = function (data) {
        // console.log(data);
        var _this = this;
        var formData = new FormData();
        formData.append("id", this.obj.id);
        formData.append("type", this.obj.type);
        formData.append("testSectionName", data.seactionName);
        formData.append("isMasterSection", data.addToMaster ? '1' : '0');
        formData.append("testSetupId", '' + this.routeId);
        formData.append("token", localStorage.getItem('token'));
        this.service.postData("testmanagement/testsetup/createinstancesection", formData).subscribe(function (data) {
            // console.log(data);
            if (data['statusCode'] == 1) {
                _this.sectionsData.push(data['testInstanceSection']);
                _this.service.successAlert(data['statusMessage']);
                $('#section_input').val('');
                $('#sectionModal').modal('toggle');
                _this.selectedItems = [];
            }
            else {
                _this.service.errorAlert(data['statusMessage']);
            }
        }, function (error) {
            // console.log(error);
        }, function () {
        });
    };
    SectionsComponent.prototype.addSection = function (data) {
        var _this = this;
        this.blockUI.start('Please Wait , We Are Creating Section ...');
        this.seactionSuccessMessage = false;
        this.seactionFailMessage = false;
        // console.log(data)
        var formData = new FormData();
        if (this.obj.type != 0) {
            this.type = this.obj.type;
            this.subcategoryId = this.obj.id;
            if (this.type == 2) {
                formData.append("testCategoryId", this.categoryId);
                formData.append("testSubCategoryId", this.subcategoryId);
            }
            if (this.type == 1) {
                this.subcategoryId = 0;
                formData.append("testCategoryId", this.categoryId);
                formData.append("testSubCategoryId", this.subcategoryId);
            }
        }
        formData.append("testSectionName", data.seactionName);
        formData.append("token", localStorage.getItem('token'));
        this.service.postData("testmanagement/createsection", formData).subscribe(function (data) {
            if (data['statusCode'] == 1) {
                _this.blockUI.stop();
                _this.seactionSuccessMessage = true;
                _this.sectionStatusMessage = data['statusMessage'];
                // this.route.navigate(['sections'])
                setTimeout(function () {
                    _this.seactionSuccessMessage = false;
                    $('#myModal').modal('hide');
                    _this.ngOnInit();
                }, 2000);
                // this.ngOnInit();
            }
            else {
                _this.blockUI.stop();
                _this.seactionFailMessage = true;
                _this.sectionStatusMessage = data['statusMessage'];
                setTimeout(function () {
                    _this.seactionFailMessage = false;
                }, 3000);
            }
        }, function (error) {
            // console.log(error)
            _this.blockUI.stop();
        }, function () {
        });
    };
    SectionsComponent.prototype.toggleBulk = function (tab) {
        if (tab == '1') {
            this.bulkUpload = false;
        }
        else if (tab == '2') {
            this.bulkUpload = true;
        }
    };
    SectionsComponent.prototype.clickUpload = function () {
        document.getElementById('upload_file_btn').click();
    };
    SectionsComponent.prototype.uploadFile = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        // console.log(this.filesToUpload)
    };
    SectionsComponent.prototype.uploadBulkQues = function () {
        var _this = this;
        this.blockUI.start('Please Wait We Are Uploading ');
        var formData = new FormData();
        var files = this.filesToUpload;
        if (this.filesToUpload.length == 0) {
            this.blockUI.stop();
            this.service.errorAlert("No file selected!");
            return;
        }
        // console.log(files[0])
        formData.append("files", files[0], files[0]['name']);
        formData.append("token", localStorage.getItem('token'));
        formData.append("sectionid", this.sectionId);
        if (this.service.cfs) {
            var cfsformData = new FormData();
            // cfsformData.append("access-token",this.service.secretKey);
            cfsformData.append("files", files[0]);
            this.service.postDataCfs(cfsformData).subscribe(function (res) {
                // console.log(res);
                if (res.status == 200) {
                    formData.append("cfsId", res.body[0].id);
                    formData.append("cfsViewURL", res.body[0].selfLink.view);
                    formData.append("cfsDownloadURL", res.body[0].selfLink.download);
                    _this.service.postData('notification/cfs/bulkquestions', formData)
                        .subscribe(function (res) {
                        if (!res['statusCode']) {
                            _this.blockUI.stop();
                            _this.service.errorAlert(res['statusMessage']);
                        }
                        else {
                            $('#exampleModalCenter').modal('toggle');
                            _this.blockUI.stop();
                            _this.filesToUpload = [];
                            _this.ngOnInit();
                            _this.uploadedQues = res;
                            _this.filesToUpload = [];
                            _this.questionsSuccessCount = res['questionsSuccessCount'];
                            _this.questionsExistCount = res['questionsExistCount'];
                            _this.totalQuestionsCount = res['totalQuestionsCount'];
                            $('#UploadedQuesModal').modal('show');
                            if (_this.routeId) {
                                _this.updateSections();
                            }
                            // document.getElementById('close_bul_btn').click()
                            _this.service.successAlert(res['statusMessage']);
                        }
                    }, function (error) {
                        _this.blockUI.stop();
                    }, function () {
                        // $('#exampleModalCenter').modal('toggle');
                        //this.ngOnInit();
                    });
                }
                else {
                    _this.service.errorAlert(files[0].name + "Upload Failed");
                }
            }, function (error) {
                // console.log(error);
            }, function () {
            });
        }
        else {
            this.service.postData('notification/upload/bulkquestions', formData)
                .subscribe(function (res) {
                if (!res['statusCode']) {
                    _this.blockUI.stop();
                    _this.service.errorAlert(res['statusMessage']);
                }
                else {
                    $('#exampleModalCenter').modal('toggle');
                    _this.blockUI.stop();
                    _this.filesToUpload = [];
                    _this.ngOnInit();
                    _this.uploadedQues = res;
                    _this.filesToUpload = [];
                    _this.questionsSuccessCount = res['questionsSuccessCount'];
                    _this.questionsExistCount = res['questionsExistCount'];
                    _this.totalQuestionsCount = res['totalQuestionsCount'];
                    $('#UploadedQuesModal').modal('show');
                    if (_this.routeId) {
                        _this.updateSections();
                    }
                    // document.getElementById('close_bul_btn').click()
                    _this.service.successAlert(res['statusMessage']);
                }
            }, function (error) {
                _this.blockUI.stop();
            }, function () {
                // $('#exampleModalCenter').modal('toggle');
                //this.ngOnInit();
            });
        }
    };
    SectionsComponent.prototype.getSize = function (bytes, decimals) {
        if (decimals === void 0) { decimals = 2; }
        if (bytes === 0)
            return '0 Bytes';
        var k = 1024;
        var dm = decimals < 0 ? 0 : decimals;
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };
    SectionsComponent.prototype.getTemplateLink = function () {
        if (this.service.cfs) {
            this.templateLink = this.service.cfsUrl + this.service.questionTemplateUrl;
        }
        else {
            this.templateLink = this.service.url + 'notification/template/download?filetype=question&fileId=1&token=' + localStorage.getItem('token');
        }
    };
    SectionsComponent.prototype.deleteOption = function (i) {
        if (this.optionList.length > 1) {
            this.optionList.splice(i, 1);
            delete this.optionObj[i];
            var alignObj = {};
            var objList = Object.keys(this.optionObj);
            for (var i_1 = 0; i_1 < objList.length; i_1++) {
                alignObj[i_1] = this.optionObj[objList[i_1]];
            }
            this.optionObj = alignObj;
        }
    };
    SectionsComponent.prototype.showDelete = function (i) {
        $('#close_' + i).css('visibility', 'visible');
    };
    SectionsComponent.prototype.hideDelete = function (i) {
        $('#close_' + i).css('visibility', 'hidden');
    };
    SectionsComponent.prototype.onMasterSelect = function (event) {
        var _this = this;
        this.service.getAll('reports/questions/getsectionsbymaterid?token=' + localStorage.getItem('token') + '&masterId=' + event.id)
            .subscribe(function (res) {
            _this.sectionsData = res['sectionsList'];
        }, function (error) {
        });
    };
    SectionsComponent.prototype.onRemoveAll = function () {
        // alert("hi")
        // var esc = $.Event("keydown", { keyCode: 27 });
        // $("body").trigger(esc);
        // // $.event.trigger({ type : 'keypress', which : 27 });
        document.getElementById('mul_close').click();
        // this.getAllSections();
        this.sectionsData = [];
    };
    SectionsComponent.prototype.clickDiv = function () {
        document.getElementById('mul_close').click();
    };
    SectionsComponent.prototype.getTestMasters = function () {
        var _this = this;
        this.dropdownListMaster = [];
        this.service.getAll('testmanagement/testsetup/listoftestsetups?token=' + localStorage.getItem('token'))
            .subscribe(function (res) {
            if (res['statusCode'] == '1') {
                for (var i = 0; i < res['listOfTestSetups'].length; i++) {
                    _this.dropdownListMaster.push({
                        id: res['listOfTestSetups'][i].testSetupId,
                        itemName: res['listOfTestSetups'][i].testSetupTitle
                    });
                }
                if (_this.dropdownListMaster.length) {
                    _this.selectedMaster[0] = _this.dropdownListMaster[0];
                    _this.onMasterSelect(_this.selectedMaster[0]);
                }
            }
            else {
                _this.service.errorAlert(res['statusMessage']);
            }
        }, function (error) {
        });
    };
    SectionsComponent.prototype.updateSections = function () {
        var _this = this;
        this.service.postData("testmanagement/testsetup/instancetempsections?token=" + localStorage.getItem('token'), this.sectionsData).subscribe(function (data) {
            _this.sectionsData = data['sectionsList'];
        }, function (error) {
        }, function () {
        });
    };
    SectionsComponent.ctorParameters = function () { return [
        { type: _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_3__["BlockUI"])(),
        __metadata("design:type", Object)
    ], SectionsComponent.prototype, "blockUI", void 0);
    SectionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sections',
            template: __webpack_require__(/*! raw-loader!./sections.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/sections/sections.component.html"),
            styles: [__webpack_require__(/*! ./sections.component.css */ "./src/app/Components/sections/sections.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SectionsComponent);
    return SectionsComponent;
}());



/***/ }),

/***/ "./src/app/Modules/sections/sections-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/Modules/sections/sections-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: SectionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsRoutingModule", function() { return SectionsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Components_sections_sections_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Components/sections/sections.component */ "./src/app/Components/sections/sections.component.ts");
/* harmony import */ var _Components_sections_section_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Components/sections/section-filter.pipe */ "./src/app/Components/sections/section-filter.pipe.ts");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm5/angular2-multiselect-dropdown.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var ngx_smart_popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-smart-popover */ "./node_modules/ngx-smart-popover/fesm5/ngx-smart-popover.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/fesm5/ngx-chips.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { FormsModule } from '@angular/forms';










//import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!

var routes = [
    {
        path: "",
        component: _Components_sections_sections_component__WEBPACK_IMPORTED_MODULE_3__["SectionsComponent"]
    }
];
var SectionsRoutingModule = /** @class */ (function () {
    function SectionsRoutingModule() {
    }
    SectionsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_Components_sections_sections_component__WEBPACK_IMPORTED_MODULE_3__["SectionsComponent"],
                _Components_sections_section_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["SectionFilterPipe"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_11__["TagInputModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], ng_block_ui__WEBPACK_IMPORTED_MODULE_5__["BlockUIModule"].forRoot(),
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__["AngularMultiSelectModule"], ngx_smart_popover__WEBPACK_IMPORTED_MODULE_10__["PopoverModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SectionsRoutingModule);
    return SectionsRoutingModule;
}());



/***/ }),

/***/ "./src/app/Modules/sections/sections.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/Modules/sections/sections.module.ts ***!
  \*****************************************************/
/*! exports provided: SectionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsModule", function() { return SectionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sections_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections-routing.module */ "./src/app/Modules/sections/sections-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SectionsModule = /** @class */ (function () {
    function SectionsModule() {
    }
    SectionsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _sections_routing_module__WEBPACK_IMPORTED_MODULE_2__["SectionsRoutingModule"]
            ]
        })
    ], SectionsModule);
    return SectionsModule;
}());



/***/ })

}]);
//# sourceMappingURL=default~Modules-sections-sections-module~Modules-test-setup-test-setup-module.js.map