(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Modules-list-questions-list-questions-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/list-questions/list-questions.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/list-questions/list-questions.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<block-ui>\n\n</block-ui>\n\n<div class=\"ques_tabs p-4\">\n    <div class=\"col-sm-12 text-right\">\n        <span class=\"pr-4\">{{tenantName | titlecase}} Questions</span>\n        <mat-slide-toggle class=\"example-margin\" [color]=\"color\" [checked]=\"checked\" (change)=\"onLinkClick($event)\">\n        </mat-slide-toggle>\n        <span class=\"pl-4\">Global Questions</span>\n        <hr>\n    </div>\n    <div *ngIf=\"!isGlobal\">\n        <button class=\"btn btn-primary mr-4\" data-toggle=\"modal\n                \" data-target=\"#exampleModalCenter\" id=\"edit_ques\">\n            <i class=\"material-icons\">\n                add\n            </i>\n            Add Questions</button>\n        <!-- <div class=\"row m-0 add_ques_Sec pt-4 \">\n                    <div class=\"col-sm-6\">\n                        <input class=\"form-control search_ques\" [(ngModel)]=\"globalSearchKey\" placeholder=\"Search By Category\" (input)=\"pickGlobalQUestions(globalSearchKey)\">\n                    </div>\n                    <div class=\"col-sm-6 text-right\">\n                        <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#globQuesModal\" *ngIf=\"importQuesArr.length\">Import</button>\n                    </div>\n                </div> -->\n\n        <div class=\"row m-0 add_ques_Sec pt-4 \">\n            <div class=\"col-sm-8\">\n                <!-- <h4>Categories</h4> -->\n                <h4 *ngFor=\"let catPath of categoryPath;let i = index\" class=\"cat_h4\">\n                    <span class=\"catpath_arrow\" *ngIf=\"i!=0\">\n                        <i class=\"material-icons\">\n                            chevron_right\n                        </i>\n                    </span>\n                    <span *ngIf=\"catPath && catPath.testCategoryName\" (click)=\"gotoPath(catPath,i)\" class=\"pointer\">{{catPath.testCategoryName}}</span>\n                    <span *ngIf=\"catPath && catPath.name\" (click)=\"gotoPath(catPath,i)\" class=\"pointer\">{{catPath.name}}</span>\n\n                </h4>\n            </div>\n            <div class=\"col-sm-4\">\n\n                <button class=\"btn btn-primary mr-4\" id=\"add_ques_modal\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">\n                    <i class=\"material-icons\">\n                        add\n                    </i>\n                    Add Questions</button>\n\n                <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#bulkUploadModal\" (click)=\"getTemplateLink()\">\n                    <i class=\"material-icons\">\n                        vertical_align_top\n                    </i>\n                    Bulk Upload</button>\n\n\n\n                <!-- <form>\n                            <div class=\"input-group global_search\">\n                                <input class=\"form-control search_ques\" [(ngModel)]=\"globalSearchKey\" placeholder=\"Search By Category\" (input)=\"pickGlobalQUestions(globalSearchKey)\"\n                                    [ngModelOptions]=\"{standalone: true}\">\n                                <span class=\"input-group-addon\">\n                                    <i class=\"material-icons\">\n                                        search\n                                    </i>\n                                </span>\n                            </div>\n                        </form> -->\n            </div>\n\n            <div class=\"col-sm-12 mt-4 mb-4\">\n                <div class=\"alphabets_cat\">\n                    <span *ngFor=\"let alpha of alphaArr\" [ngClass]=\"{'alpha_letters':true,'alpha_all':alpha=='All'}\" (click)=\"getByAlpha(alpha)\">\n                        <h5>{{alpha}}</h5>\n                    </span>\n                </div>\n            </div>\n\n            <div class=\"col-sm-12 mt-4 mb-4 categ_ques_tbl\" *ngIf=\"!isQues\">\n                <table class=\"table\">\n                    <thead>\n                        <tr *ngIf=\"allCategory && allCategory['listOfTestCategory']\">\n                            <th>Category Title</th>\n                            <th>Created On</th>\n                            <!-- <th>Owner</th> -->\n                        </tr>\n                        <tr *ngIf=\"(allCategory && allCategory['listOfTestSubCategory'])\">\n                            <!-- <th></th> -->\n                            <th>Title</th>\n                            <th>Type</th>\n                            <th>Hierarchy</th>\n                        </tr>\n                    </thead>\n                    <tbody *ngIf=\"allCategory && allCategory['listOfTestCategory'] && allCategory['listOfTestCategory'].length\">\n                        <tr *ngFor=\"let cat of allCategory['listOfTestCategory'] | paginate: { itemsPerPage: 10, currentPage: p_two,id: cat_page_id};let i=index\" (click)=\"getSubCategories(cat)\">\n                            <td>{{cat.testCategoryName}}</td>\n                            <td>\n                                <span *ngIf=\"cat.createdOn != 'null'\">{{cat.createdOn | date:'medium'}}</span>\n                                <span *ngIf=\"!cat.createdOn\">-</span>\n                                <span *ngIf=\"cat.createdOn == 'null'\">-</span>\n                            </td>\n                            <!-- <td>{{cat.testCategoryOwner}}</td> -->\n                        </tr>\n                    </tbody>\n                    <tbody *ngIf=\"(allCategory && allCategory['listOfTestCategory'] && !allCategory['listOfTestCategory'].length)\">\n                        <tr>\n                            <td colspan=\"3\" class=\"errorTxt text-center\">{{allCategory.statusMessage}}</td>\n                        </tr>\n                    </tbody>\n                    <tbody *ngIf=\"allCategory && allCategory['listOfTestSubCategory'] && allCategory['listOfTestSubCategory'].length\">\n                        <tr *ngFor=\"let cat of allCategory['listOfTestSubCategory'] | paginate: { itemsPerPage: 10, currentPage: p_three,id:subcat_page_id};let i=index\" (click)=\"getSubCategoriesBy(cat)\" [ngClass]=\"{'sec_tr':cat.type == '3'}\">\n                            <!-- <td>\n                                        <span class=\"sub_cat_icon\" *ngIf=\"cat.type=='2'\">\n                                            <i class=\"material-icons\">\n                                                folder\n                                            </i>\n                                        </span>\n                                        <span class=\"sec_icon\" *ngIf=\"cat.type=='3'\">\n                                            <i class=\"material-icons\">\n                                                folder\n                                            </i>\n                                        </span>\n                                    </td> -->\n                            <td>\n                                <span class=\"sub_cat_icon\" *ngIf=\"cat.type=='2'\">\n                                    <i class=\"material-icons\">\n                                        folder\n                                    </i>\n                                </span>\n                                <span class=\"sec_icon\" *ngIf=\"cat.type=='3'\">\n                                    <i class=\"material-icons\">\n                                        folder\n                                    </i>\n                                </span> {{cat.name}}\n                            </td>\n                            <td>\n                                <span *ngIf=\"cat.type == '2'\">Sub-Category</span>\n                                <span *ngIf=\"cat.type == '3'\"> Section</span>\n                                <span *ngIf=\"cat.type == '3'\" class=\"badge badge-success ml-3\" [popoverOnHover]=\"true\" [popover]=\"questionCount\">{{cat.questionsCount}}</span>\n\n                                <popover-content #questionCount title=\"\" placement=\"right\" [animation]=\"true\" style=\"box-shadow: 10px 10px 5px #aaaaaa;\">\n                                    <span *ngIf=\"cat.type == '3'\" style=\"color: #646363;\">Total Questions - {{cat.questionsCount}}</span>\n\n                                </popover-content>\n                            </td>\n                            <td>{{cat.heirarchy}}</td>\n                        </tr>\n                    </tbody>\n                    <tbody *ngIf=\"(allCategory && allCategory['listOfTestSubCategory'] && !allCategory['listOfTestSubCategory'].length)\">\n                        <tr>\n                            <td colspan=\"3\" class=\"errorTxt text-center\">Categories Not Found</td>\n                        </tr>\n                    </tbody>\n                    <!-- <tbody *ngIf=\"allCategory && allCategory['listOfAllSections'] && allCategory['listOfAllSections'].length\">\n                                <tr *ngFor=\"let sec of allCategory['listOfAllSections']\" (click)=\"getSubCategoriesBy(cat)\">\n                                    <td>\n                                        <span class=\"sec_icon\">\n                                            <i class=\"material-icons\">\n                                                folder\n                                            </i>\n                                        </span>\n                                    </td>\n                                    <td>{{sec.testSectionName}}</td>\n                                    <td>{{sec.sectionHeirarchy}}</td>\n                                </tr>\n                            </tbody> -->\n                </table>\n\n                <div class=\"ques_sec_div col-sm-12 text-center\" *ngIf=\"allCategory && allCategory['listOfTestCategory'] && allCategory['listOfTestCategory'].length\">\n                    <pagination-controls (pageChange)=\"p_two = $event\" previousLabel=\"<\" nextLabel=\">\" [id]=\"cat_page_id\"></pagination-controls>\n                </div>\n                <div class=\"ques_sec_div col-sm-12 text-center\" *ngIf=\"allCategory && allCategory['listOfTestSubCategory'] && allCategory['listOfTestSubCategory'].length\">\n                    <pagination-controls (pageChange)=\"p_three = $event\" previousLabel=\"<\" nextLabel=\">\" [id]=\"subcat_page_id\"></pagination-controls>\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class=\"row mr-3 ml-3 mt-4 mb-4\" *ngIf=\"isQues\">\n            <div class=\"col-sm-12\">\n                <h5 class=\"text-center ques_sec_name\">\n                    <!-- <span *ngIf=\"catPath && catPath.testCategoryName\" (click)=\"gotoPath(catPath,i)\" class=\"pointer\">{{catPath.testCategoryName}}</span> -->\n                    <span *ngIf=\"categoryPath.length\">{{categoryPath[categoryPath.length-1].name}}</span>\n\n                </h5>\n                <hr class=\"ques_sec_hr\" *ngIf=\"categoryPath.length\">\n            </div>\n            <!-- <div class=\"col-sm-2 text-right p-0\">\n                        <button class=\"btn btn-primary import_ques_btn\" data-toggle=\"modal\" data-target=\"#globQuesModal\" [disabled]=\"!importQuesArr.length\">Import</button>\n                    </div> -->\n        </div>\n\n        <div class=\"row boxShadow table_div mr-3 ml-3 mt-4 mb-4\" *ngIf=\"isQues\">\n\n            <!-- <table class=\"table\">\n                        <thead>\n                            <tr class=\"tbl_hdng\">\n                                <th class=\"border-0\">S.No</th>\n                                <th class=\"border-0\">Questions</th>\n                                <th class=\"border-0\">Category</th>\n                                <th class=\"border-0\">Select</th>\n                            </tr>\n                        </thead>\n                        <tbody *ngIf=\"globalQues && globalQues['listOfQuestions'].length\">\n                            <tr *ngFor=\"let ques of globalQues['listOfQuestions'];let i=index\" class=\"pointer glob_ques\" id=\"glob_ques_id{{i}}\" (mouseover)=\"setPos(i,ques)\">\n                                <td class=\"\">\n                                    <span>{{i+1}}</span>\n                                </td>\n    \n    \n                                <td *ngIf=\"ques.questionTitle.length < 84\" title=\"{{ques.questionTitle}}\">{{ques.questionTitle}}</td>\n                                <td *ngIf=\"ques.questionTitle.length >= 84\" title=\"{{ques.questionTitle}}\">{{ques.questionTitle | slice:0:84}} ...</td>\n                                <td *ngIf=\"ques.hierarchy?.length < 12 && ques.hierarchy!='null'\" title=\"{{ques.hierarchy}}\" class=\"\">{{ques.hierarchy}}</td>\n                                <td *ngIf=\"ques.hierarchy?.length < 12 && ques.hierarchy=='null'\" title=\"{{ques.hierarchy}}\" class=\"\">-</td>\n                                <td *ngIf=\"ques.hierarchy?.length >= 12\" title=\"{{ques.hierarchy}}\" class=\"\">{{ques.hierarchy | slice:0:12}} ...</td>\n    \n                                <td>\n                                    <mat-checkbox [color]=\"color\" class=\"example-margin\" [(ngModel)]=\"impQues[i]\" (click)=\"importQues(ques,impQues[i])\"></mat-checkbox>\n                                </td>\n                                <div id=\"menu_content\">\n                                    <table class=\"table\" *ngIf=\"hoverGlobQues\">\n                                        <tr>\n                                            <th>Question</th>\n                                            <th>Category</th>\n                                            <th>Options</th>\n                                            <th>Answer</th>\n                                        </tr>\n                                        <tr>\n                                            <td class=\"maxWidth240\">{{ hoverGlobQues.questionTitle}}</td>\n                                            <td class=\"maxWidth320\">{{hoverGlobQues.hierarchy}}</td>\n                                            <td>\n                                                <p *ngFor=\"let opt of hoverGlobQues?.optionsList\">{{opt.optionText}}</p>\n                                            </td>\n                                            <td>\n                                                <div *ngFor=\"let opt of hoverGlobQues?.optionsList\">\n                                                    <p *ngIf=\"opt.answer\"> {{opt.optionText}}</p>\n                                                </div>\n                                            </td>\n                                            <td>\n                                                <button class=\"btn btn-link\" (click)=\"editQuestion(hoverGlobQues)\">Edit</button>\n                                            </td>\n    \n                                        </tr>\n                                    </table>\n                                </div>\n                            </tr>\n                        </tbody>\n                        <tbody *ngIf=\"!globalQues ||( globalQues && !globalQues['listOfQuestions'].length)\">\n                            <tr class=\"errorTxt text-center\">\n                                <td colspan=\"4\">Questions Not Found</td>\n                            </tr>\n                        </tbody>\n                    </table> -->\n\n            <table class=\"table sec_ques text-center\">\n                <thead>\n                    <tr class=\"tbl_hdng\">\n                        <th class=\"border-0\">S.No</th>\n                        <th class=\"border-0\">Question Title</th>\n                        <th class=\"border-0\">Type</th>\n                        <th class=\"border-0\">Complexity</th>\n                        <!-- <th class=\"border-0 sel_all_che\">\n                                    <mat-checkbox [color]=\"color\" class=\"example-margin\" [(ngModel)]=\"impAllQues\" (click)=\"importAllQues(impAllQues)\" [checked]=\"checkAllImported()\">Select All</mat-checkbox>\n                                </th> -->\n\n                    </tr>\n                </thead>\n\n                <tbody *ngIf=\"globalQues && globalQues['questionsList'].length\">\n                    <tr *ngFor=\"let ques of globalQues['questionsList']  | paginate: { itemsPerPage: 10,currentPage: p_one,id: sec_ques_local};let i=index\" class=\"pointer glob_ques\" id=\"glob_ques_id{{i}}\" data-toggle=\"modal\" data-target=\"#quesViewModal\" (click)=\"viewQuestion(ques)\">\n                        <td>\n                            <span class=\"ques_cunt_circle\" *ngIf=\"p_one==1\">{{i+1}}</span>\n                            <span class=\"ques_cunt_circle\" *ngIf=\"p_one>1\">{{(p_one-1)*10+i+1}}</span>\n                        </td>\n\n\n\n                        <td *ngIf=\"ques.qustionText.length < 50\" title=\"{{ques.qustionText}}\">{{ques.qustionText}}</td>\n                        <td *ngIf=\"ques.qustionText.length >= 50\" title=\"{{ques.qustionText}}\">{{ques.qustionText | slice:0:50}} ...</td>\n\n                        <td title=\"{{ques.questionType}}\">{{ques.questionType}}</td>\n                        <td title=\"{{ques.questionComplexityType}}\">{{ques.questionComplexityType}}</td>\n                        <!-- <td class=\"\">\n                                    <mat-checkbox [color]=\"color\" class=\"example-margin\" (change)=\"importQues(ques,impQues[i],$event)\" (click)=\"stopProp($event)\"\n                                        [checked]=\"checkImport(ques)\"></mat-checkbox>\n    \n                                </td> -->\n                        <!-- <div id=\"menu_content\">\n                                    <table class=\"table\" *ngIf=\"hoverGlobQues\">\n                                        <tr>\n                                            <th>Question</th>\n                                            <th>Category</th>\n                                            <th>Options</th>\n                                            <th>Answer</th>\n                                        </tr>\n                                        <tr>\n                                            <td class=\"maxWidth240\">{{ hoverGlobQues.questionTitle}}</td>\n                                            <td class=\"maxWidth320\">{{hoverGlobQues.hierarchy}}</td>\n                                            <td>\n                                                <p *ngFor=\"let opt of hoverGlobQues?.optionsList\">{{opt.optionText}}</p>\n                                            </td>\n                                            <td>\n                                                <div *ngFor=\"let opt of hoverGlobQues?.optionsList\">\n                                                    <p *ngIf=\"opt.answer\"> {{opt.optionText}}</p>\n                                                </div>\n                                            </td>\n                                            <td>\n                                                <button class=\"btn btn-link\" (click)=\"editQuestion(hoverGlobQues)\">Edit</button>\n                                            </td>\n    \n                                        </tr>\n                                    </table>\n                                </div> -->\n                    </tr>\n                </tbody>\n                <tbody *ngIf=\"!globalQues ||( globalQues && !globalQues['questionsList'].length)\">\n                    <tr class=\"errorTxt text-center\">\n                        <td colspan=\"4\">Questions Not Found</td>\n                    </tr>\n                </tbody>\n\n            </table>\n\n            <div class=\"ques_sec_div col-sm-12 text-center\" *ngIf=\"globalQues && globalQues['questionsList'] && globalQues['questionsList'].length\">\n                <pagination-controls (pageChange)=\"p_one = $event\" previousLabel=\"<\" nextLabel=\">\" [id]=\"sec_ques_local\"></pagination-controls>\n            </div>\n\n            <!-- <div class=\"col-sm-12 p-4 text-center\" *ngIf=\"globalQues && globalQues['questionsList'].length\">\n                        <button class=\"btn btn-primary mr-4\" (click)=\"getPrevGlob()\" [disabled]=\"offset<0\">Previous</button>\n                        <button class=\"btn btn-primary ml-4\" (click)=\"getNextGlob()\">Next</button>\n                    </div> -->\n\n        </div>\n    </div>\n    <div *ngIf=\"isGlobal\">\n        <button class=\"btn btn-primary mr-4\" data-toggle=\"modal\n                \" data-target=\"#exampleModalCenter\" id=\"edit_ques\">\n            <i class=\"material-icons\">\n                add\n            </i>\n            Add Questions</button>\n        <!-- <div class=\"row m-0 add_ques_Sec pt-4 \">\n                    <div class=\"col-sm-6\">\n                        <input class=\"form-control search_ques\" [(ngModel)]=\"globalSearchKey\" placeholder=\"Search By Category\" (input)=\"pickGlobalQUestions(globalSearchKey)\">\n                    </div>\n                    <div class=\"col-sm-6 text-right\">\n                        <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#globQuesModal\" *ngIf=\"importQuesArr.length\">Import</button>\n                    </div>\n                </div> -->\n\n        <div class=\"row m-0 add_ques_Sec pt-4 \">\n            <div class=\"col-sm-12\">\n                <!-- <h4>Categories</h4> -->\n                <h4 *ngFor=\"let catPath of categoryGlobalPath;let i = index\" class=\"cat_h4\">\n                    <span class=\"catpath_arrow\" *ngIf=\"i!=0\">\n                        <i class=\"material-icons\">\n                            chevron_right\n                        </i>\n                    </span>\n                    <span *ngIf=\"catPath && catPath.categoryName\" (click)=\"gotoPathGlobal(catPath,i)\" class=\"pointer\">{{catPath.categoryName}}</span>\n                    <span *ngIf=\"catPath && catPath.type == '2'\" (click)=\"gotoPathGlobal(catPath,i)\" class=\"pointer\">{{catPath.subCategoryName}}</span>\n                    <span *ngIf=\"catPath && catPath.type == '3'\" (click)=\"gotoPathGlobal(catPath,i)\" class=\"pointer\">{{catPath.sectionName}}</span>\n\n                </h4>\n            </div>\n            <!-- <div class=\"col-sm-4\">\n\n                    <button class=\"btn btn-primary mr-4\" id=\"add_ques_modal\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">\n                        <i class=\"material-icons\">\n                            add\n                        </i>\n                        Add Questions</button>\n\n                    <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#bulkUploadModal\" (click)=\"getTemplateLink()\">\n                        <i class=\"material-icons\">\n                            vertical_align_top\n                        </i>\n                        Bulk Upload</button>\n\n\n                </div> -->\n\n            <div class=\"col-sm-12 mt-4 mb-4\">\n                <div class=\"alphabets_cat\">\n                    <span *ngFor=\"let alpha of alphaArr\" [ngClass]=\"{'alpha_letters':true,'alpha_all':alpha=='All'}\" (click)=\"getByAlphaGlob(alpha)\">\n                        <h5>{{alpha}}</h5>\n                    </span>\n                </div>\n            </div>\n\n            <div class=\"col-sm-12 mt-4 mb-4 categ_ques_tbl\" *ngIf=\"!isGlobQues\">\n                <table class=\"table\">\n                    <thead>\n                        <tr *ngIf=\"allGlobalCategory && allGlobalCategory['globalCategoriesList']\">\n                            <th>Category Title</th>\n                            <th>Created On</th>\n                            <!-- <th>Hierarchy</th> -->\n                        </tr>\n                        <tr *ngIf=\"(allGlobalCategory && allGlobalCategory['listOfGlobalSubCategory'])\">\n                            <!-- <th></th> -->\n                            <th>Title</th>\n                            <th>Type</th>\n                            <th>Hierarchy</th>\n                        </tr>\n                    </thead>\n                    <tbody *ngIf=\"allGlobalCategory && allGlobalCategory['globalCategoriesList'] && allGlobalCategory['globalCategoriesList'].length\">\n                        <tr *ngFor=\"let cat of allGlobalCategory['globalCategoriesList'] | paginate: { itemsPerPage: 10, currentPage: p_glob_1,id: glob_page_1};let i=index\" (click)=\"getGlobalSubCategories(cat)\">\n                            <td>{{cat.categoryName}}</td>\n                            <td>\n                                <span *ngIf=\"cat.creadtedOn != 'null'\">{{cat.creadtedOn | date:'medium'}}</span>\n                                <span *ngIf=\"!cat.creadtedOn\">-</span>\n                                <span *ngIf=\"cat.creadtedOn == 'null'\">-</span>\n                            </td>\n                            <!-- <td>{{cat.hierarchy}}</td> -->\n                        </tr>\n                    </tbody>\n                    <tbody *ngIf=\"(allGlobalCategory && allGlobalCategory['globalCategoriesList'] && !allGlobalCategory['globalCategoriesList'].length)\">\n                        <tr>\n                            <td colspan=\"3\" class=\"errorTxt text-center\">{{allGlobalCategory.statusMessage}}</td>\n                        </tr>\n                    </tbody>\n                    <tbody *ngIf=\"allGlobalCategory && allGlobalCategory['listOfGlobalSubCategory'] && allGlobalCategory['listOfGlobalSubCategory'].length\">\n                        <tr *ngFor=\"let cat of allGlobalCategory['listOfGlobalSubCategory'] | paginate: { itemsPerPage: 10, currentPage: p_glob_2,id:glob_page_2};let i=index\" (click)=\"getGlobalSubCategoriesBy(cat)\" [ngClass]=\"{'sec_tr':cat.type == '3'}\">\n                            <!-- <td>\n                                        <span class=\"sub_cat_icon\" *ngIf=\"cat.type=='2'\">\n                                            <i class=\"material-icons\">\n                                                folder\n                                            </i>\n                                        </span>\n                                        <span class=\"sec_icon\" *ngIf=\"cat.type=='3'\">\n                                            <i class=\"material-icons\">\n                                                folder\n                                            </i>\n                                        </span>\n                                    </td> -->\n                            <td>\n                                <span class=\"sub_cat_icon\" *ngIf=\"cat.type=='2'\">\n                                    <i class=\"material-icons\">\n                                        folder\n                                    </i>\n                                </span>\n                                <span class=\"sec_icon\" *ngIf=\"cat.type=='3'\">\n                                    <i class=\"material-icons\">\n                                        folder\n                                    </i>\n                                </span>\n                                <span *ngIf=\"cat.type=='2'\">\n                                    {{cat.subCategoryName}}\n                                </span>\n                                <span *ngIf=\"cat.type=='3'\">\n                                    {{cat.sectionName}}\n                                </span>\n\n                            </td>\n                            <td>\n                                <span *ngIf=\"cat.type == '2'\">Sub-Category</span>\n                                <span *ngIf=\"cat.type == '3'\">Section</span>\n                                <span *ngIf=\"cat.type == '3'\" class=\"badge badge-success ml-3\" [popoverOnHover]=\"true\" [popover]=\"questionCount1\">{{cat.questionCount}}</span>\n                                <popover-content #questionCount1 title=\"\" placement=\"right\" [animation]=\"true\" style=\"box-shadow: 10px 10px 5px #aaaaaa;\">\n                                    <span *ngIf=\"cat.type == '3'\" style=\"color: #646363;\">Total Questions - {{cat.questionCount}}</span>\n\n                                </popover-content>\n                            </td>\n                            <td>{{cat.hierarchy}}</td>\n                        </tr>\n                    </tbody>\n                    <tbody *ngIf=\"(allGlobalCategory && allGlobalCategory['listOfGlobalSubCategory'] && !allGlobalCategory['listOfGlobalSubCategory'].length)\">\n                        <tr>\n                            <td colspan=\"3\" class=\"errorTxt text-center\">Categories Not Found</td>\n                        </tr>\n                    </tbody>\n                    <!-- <tbody *ngIf=\"allCategory && allCategory['listOfAllSections'] && allCategory['listOfAllSections'].length\">\n                                <tr *ngFor=\"let sec of allCategory['listOfAllSections']\" (click)=\"getSubCategoriesBy(cat)\">\n                                    <td>\n                                        <span class=\"sec_icon\">\n                                            <i class=\"material-icons\">\n                                                folder\n                                            </i>\n                                        </span>\n                                    </td>\n                                    <td>{{sec.testSectionName}}</td>\n                                    <td>{{sec.sectionHeirarchy}}</td>\n                                </tr>\n                            </tbody> -->\n                </table>\n\n                <div class=\"ques_sec_div col-sm-12 text-center\" *ngIf=\"allGlobalCategory && allGlobalCategory['globalCategoriesList'] && allGlobalCategory['globalCategoriesList'].length\">\n                    <pagination-controls (pageChange)=\"p_glob_1 = $event\" previousLabel=\"<\" nextLabel=\">\" [id]=\"glob_page_1\"></pagination-controls>\n                </div>\n                <div class=\"ques_sec_div col-sm-12 text-center\" *ngIf=\"allGlobalCategory && allGlobalCategory['listOfGlobalSubCategory'] && allGlobalCategory['listOfGlobalSubCategory'].length\">\n                    <pagination-controls (pageChange)=\"p_glob_2 = $event\" previousLabel=\"<\" nextLabel=\">\" [id]=\"glob_page_2\"></pagination-controls>\n                </div>\n\n            </div>\n\n        </div>\n\n        <div class=\"row mr-3 ml-3 mt-4 mb-4\" *ngIf=\"isGlobQues\">\n            <div class=\"col-sm-10\">\n                <h5 class=\"text-center ques_sec_name\">\n                    <!-- <span *ngIf=\"catPath && catPath.testCategoryName\" (click)=\"gotoPath(catPath,i)\" class=\"pointer\">{{catPath.testCategoryName}}</span> -->\n                    <span *ngIf=\"categoryGlobalPath.length\">{{categoryGlobalPath[categoryGlobalPath.length-1].sectionName}}</span>\n\n                </h5>\n                <hr class=\"ques_sec_hr\" *ngIf=\"categoryGlobalPath.length\">\n            </div>\n            <div class=\"col-sm-2 text-right p-0\">\n                <button class=\"btn btn-primary import_ques_btn\" (click)=\"impQuestoSec()\" data-toggle=\"modal\" data-target=\"#globQuesModal\" [disabled]=\"!importQuesArr.length\">Import</button>\n            </div>\n        </div>\n\n        <div class=\"row boxShadow table_div mr-3 ml-3 mt-4 mb-4\" *ngIf=\"isGlobQues\">\n\n            <!-- <table class=\"table\">\n                        <thead>\n                            <tr class=\"tbl_hdng\">\n                                <th class=\"border-0\">S.No</th>\n                                <th class=\"border-0\">Questions</th>\n                                <th class=\"border-0\">Category</th>\n                                <th class=\"border-0\">Select</th>\n                            </tr>\n                        </thead>\n                        <tbody *ngIf=\"globalQues && globalQues['listOfQuestions'].length\">\n                            <tr *ngFor=\"let ques of globalQues['listOfQuestions'];let i=index\" class=\"pointer glob_ques\" id=\"glob_ques_id{{i}}\" (mouseover)=\"setPos(i,ques)\">\n                                <td class=\"\">\n                                    <span>{{i+1}}</span>\n                                </td>\n    \n    \n                                <td *ngIf=\"ques.questionTitle.length < 84\" title=\"{{ques.questionTitle}}\">{{ques.questionTitle}}</td>\n                                <td *ngIf=\"ques.questionTitle.length >= 84\" title=\"{{ques.questionTitle}}\">{{ques.questionTitle | slice:0:84}} ...</td>\n                                <td *ngIf=\"ques.hierarchy?.length < 12 && ques.hierarchy!='null'\" title=\"{{ques.hierarchy}}\" class=\"\">{{ques.hierarchy}}</td>\n                                <td *ngIf=\"ques.hierarchy?.length < 12 && ques.hierarchy=='null'\" title=\"{{ques.hierarchy}}\" class=\"\">-</td>\n                                <td *ngIf=\"ques.hierarchy?.length >= 12\" title=\"{{ques.hierarchy}}\" class=\"\">{{ques.hierarchy | slice:0:12}} ...</td>\n    \n                                <td>\n                                    <mat-checkbox [color]=\"color\" class=\"example-margin\" [(ngModel)]=\"impQues[i]\" (click)=\"importQues(ques,impQues[i])\"></mat-checkbox>\n                                </td>\n                                <div id=\"menu_content\">\n                                    <table class=\"table\" *ngIf=\"hoverGlobQues\">\n                                        <tr>\n                                            <th>Question</th>\n                                            <th>Category</th>\n                                            <th>Options</th>\n                                            <th>Answer</th>\n                                        </tr>\n                                        <tr>\n                                            <td class=\"maxWidth240\">{{ hoverGlobQues.questionTitle}}</td>\n                                            <td class=\"maxWidth320\">{{hoverGlobQues.hierarchy}}</td>\n                                            <td>\n                                                <p *ngFor=\"let opt of hoverGlobQues?.optionsList\">{{opt.optionText}}</p>\n                                            </td>\n                                            <td>\n                                                <div *ngFor=\"let opt of hoverGlobQues?.optionsList\">\n                                                    <p *ngIf=\"opt.answer\"> {{opt.optionText}}</p>\n                                                </div>\n                                            </td>\n                                            <td>\n                                                <button class=\"btn btn-link\" (click)=\"editQuestion(hoverGlobQues)\">Edit</button>\n                                            </td>\n    \n                                        </tr>\n                                    </table>\n                                </div>\n                            </tr>\n                        </tbody>\n                        <tbody *ngIf=\"!globalQues ||( globalQues && !globalQues['listOfQuestions'].length)\">\n                            <tr class=\"errorTxt text-center\">\n                                <td colspan=\"4\">Questions Not Found</td>\n                            </tr>\n                        </tbody>\n                    </table> -->\n\n            <table class=\"table sec_ques text-center\">\n                <thead>\n                    <tr class=\"tbl_hdng\">\n                        <th class=\"border-0\">S.No</th>\n                        <th class=\"border-0\">Question Title</th>\n                        <th class=\"border-0\">Type</th>\n                        <th class=\"border-0\">Complexity</th>\n                        <th class=\"border-0 sel_all_che\">\n                            <mat-checkbox [color]=\"color\" class=\"example-margin\" [(ngModel)]=\"impAllQues\" (click)=\"importAllQues(impAllQues)\">Select All</mat-checkbox>\n                        </th>\n\n                    </tr>\n                </thead>\n                <!-- <tbody *ngIf=\"globalQues && globalQues['listOfQuestions'].length\">\n                            <tr *ngFor=\"let ques of globalQues['listOfQuestions'];let i=index\" class=\"pointer glob_ques\" id=\"glob_ques_id{{i}}\" (mouseover)=\"setPos(i,ques)\">\n                                <td class=\"\">\n                                        <mat-checkbox [color]=\"color\" class=\"example-margin\" [(ngModel)]=\"impQues[i]\" (click)=\"importQues(ques,impQues[i])\"></mat-checkbox> \n                                        <span class=\"ques_cunt_circle\">{{i+1}}</span>\n                                </td>\n    \n    \n                                <td *ngIf=\"ques.questionTitle.length < 84\" title=\"{{ques.questionTitle}}\">{{ques.questionTitle}}</td>\n                                <td *ngIf=\"ques.questionTitle.length >= 84\" title=\"{{ques.questionTitle}}\">{{ques.questionTitle | slice:0:84}} ...</td>\n                               \n                                <td title=\"{{ques.questionTitle}}\">{{ques.questionTypeName}}</td>\n                                <td title=\"{{ques.questionTitle}}\">{{ques.questionComplexity}}</td>\n    \n                                <div id=\"menu_content\">\n                                    <table class=\"table\" *ngIf=\"hoverGlobQues\">\n                                        <tr>\n                                            <th>Question</th>\n                                            <th>Category</th>\n                                            <th>Options</th>\n                                            <th>Answer</th>\n                                        </tr>\n                                        <tr>\n                                            <td class=\"maxWidth240\">{{ hoverGlobQues.questionTitle}}</td>\n                                            <td class=\"maxWidth320\">{{hoverGlobQues.hierarchy}}</td>\n                                            <td>\n                                                <p *ngFor=\"let opt of hoverGlobQues?.optionsList\">{{opt.optionText}}</p>\n                                            </td>\n                                            <td>\n                                                <div *ngFor=\"let opt of hoverGlobQues?.optionsList\">\n                                                    <p *ngIf=\"opt.answer\"> {{opt.optionText}}</p>\n                                                </div>\n                                            </td>\n                                            <td>\n                                                <button class=\"btn btn-link\" (click)=\"editQuestion(hoverGlobQues)\">Edit</button>\n                                            </td>\n    \n                                        </tr>\n                                    </table>\n                                </div>\n                            </tr>\n                        </tbody>\n                        <tbody *ngIf=\"!globalQues ||( globalQues && !globalQues['listOfQuestions'].length)\">\n                            <tr class=\"errorTxt text-center\">\n                                <td colspan=\"4\">Questions Not Found</td>\n                            </tr>\n                        </tbody> -->\n\n                <tbody *ngIf=\"newGlobQues && newGlobQues['questionsList'].length\">\n                    <tr *ngFor=\"let ques of newGlobQues['questionsList']  | paginate: { itemsPerPage: 10, currentPage: p_glob_3,id: sub_glob_ques};let i=index\" class=\"pointer glob_ques\" id=\"glob_ques_id{{i}}\" data-toggle=\"modal\" data-target=\"#quesViewModal\" (click)=\"viewQuestion(ques)\">\n                        <td>\n                            <span class=\"ques_cunt_circle\" *ngIf=\"p_glob_3==1\">{{i+1}}</span>\n                            <span class=\"ques_cunt_circle\" *ngIf=\"p_glob_3>1\">{{(p_glob_3-1)*10+i+1}}</span>\n                        </td>\n\n\n\n                        <td *ngIf=\"ques.qustionText.length < 50\" title=\"{{ques.qustionText}}\">{{ques.qustionText}}</td>\n                        <td *ngIf=\"ques.qustionText.length >= 50\" title=\"{{ques.qustionText}}\">{{ques.qustionText | slice:0:50}} ...</td>\n\n                        <td title=\"{{ques.questionType}}\">{{ques.questionType}}</td>\n                        <td title=\"{{ques.questionComplexityType}}\">{{ques.questionComplexityType}}</td>\n                        <td class=\"\">\n                            <mat-checkbox [color]=\"color\" class=\"example-margin\" (change)=\"importQues(ques,impQues[i],$event,i)\" (click)=\"stopProp($event)\" [checked]=\"checkImport(ques)\"></mat-checkbox>\n\n                        </td>\n                        <!-- <div id=\"menu_content\">\n                                    <table class=\"table\" *ngIf=\"hoverGlobQues\">\n                                        <tr>\n                                            <th>Question</th>\n                                            <th>Category</th>\n                                            <th>Options</th>\n                                            <th>Answer</th>\n                                        </tr>\n                                        <tr>\n                                            <td class=\"maxWidth240\">{{ hoverGlobQues.questionTitle}}</td>\n                                            <td class=\"maxWidth320\">{{hoverGlobQues.hierarchy}}</td>\n                                            <td>\n                                                <p *ngFor=\"let opt of hoverGlobQues?.optionsList\">{{opt.optionText}}</p>\n                                            </td>\n                                            <td>\n                                                <div *ngFor=\"let opt of hoverGlobQues?.optionsList\">\n                                                    <p *ngIf=\"opt.answer\"> {{opt.optionText}}</p>\n                                                </div>\n                                            </td>\n                                            <td>\n                                                <button class=\"btn btn-link\" (click)=\"editQuestion(hoverGlobQues)\">Edit</button>\n                                            </td>\n    \n                                        </tr>\n                                    </table>\n                                </div> -->\n                    </tr>\n                </tbody>\n                <tbody *ngIf=\"!newGlobQues ||( newGlobQues && !newGlobQues['questionsList'].length)\">\n                    <tr class=\"errorTxt text-center\">\n                        <td colspan=\"4\">Questions Not Found</td>\n                    </tr>\n                </tbody>\n\n            </table>\n\n            <div class=\"ques_sec_div col-sm-12 text-center\" *ngIf=\"newGlobQues && newGlobQues['questionsList'] && newGlobQues['questionsList'].length\">\n                <pagination-controls (pageChange)=\"p_glob_3 = $event\" previousLabel=\"<\" nextLabel=\">\" [id]=\"sub_glob_ques\"></pagination-controls>\n            </div>\n\n            <!-- <div class=\"col-sm-12 p-4 text-center\" *ngIf=\"globalQues && globalQues['questionsList'].length\">\n                        <button class=\"btn btn-primary mr-4\" (click)=\"getPrevGlob()\" [disabled]=\"offset<0\">Previous</button>\n                        <button class=\"btn btn-primary ml-4\" (click)=\"getNextGlob()\">Next</button>\n                    </div> -->\n\n        </div>\n    </div>\n</div>\n\n<!-- \n<div class=\"ques_tabs p-4\">\n    <mat-tab-group (selectedTabChange)=\"onLinkClick($event)\">\n        <mat-tab label=\"Tenant Questions Catalogue\">\n\n        </mat-tab>\n        <mat-tab label=\"Global Questions Catalogue\">\n\n\n        </mat-tab>\n    </mat-tab-group>\n</div> -->\n\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"bulkUploadModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n\n            <!-- Modal Header -->\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\"> Bulk Upload</h4>\n                <button id=\"close_bul_btn\" type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n\n            <!-- Modal body -->\n            <div class=\"modal-body text-center\" *ngIf=\"oldSection\">\n\n                <div class=\"row pl-0\">\n                    <div class=\"col-sm-4\">\n                        <label class=\"float-right\">Test Instance : </label>\n                    </div>\n                    <div class=\"col-sm-5\">\n                        <div id=\"mul_close\">\n                            <angular2-multiselect [data]=\"dropdownListInstance\" [(ngModel)]=\"selectedItemsInstance\" [settings]=\"dropdownSettingsInstance\" (onSelect)=\"pushSections($event)\" (onDeSelect)=\"removeSections();selectedItemsInstance = []\" (onDeSelectAll)=\"removeSections();selectedItemsInstance = []\"></angular2-multiselect>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-2\">\n                    </div>\n                </div>\n                <div class=\"row pl-0 mt-4\">\n                    <div class=\"col-sm-2 offset-sm-2\">\n                        <label class=\"float-right\">Section : </label>\n                    </div>\n                    <div class=\"col-sm-5\">\n                        <div [ngClass]=\"{'cursor_not':!dropdownList.length}\" id=\"sec_mul\">\n                            <angular2-multiselect [data]=\"dropdownList\" [(ngModel)]=\"selectedItems\" [settings]=\"dropdownSettings\" (onSelect)=\"addSec()\" (onDeSelect)=\"removeSec()\" (onDeSelectAll)=\"removeSec()\"></angular2-multiselect>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-2\">\n                        <span title=\"Add New Section\" class=\"add_new_sec\" *ngIf=\"selectedItemsInstance.length && selectedItemsInstance[0].isGlobal == '0'\" (click)=\"toggleOldNewSections();removeSections();selectedItemsInstance=[]\">\n                            <i class=\"material-icons\">\n                                add_circle\n                            </i>\n                        </span>\n\n                    </div>\n                </div>\n\n\n                <div class=\"mt-4\">\n                    <button class=\"btn btn-primary\" (click)=\"clickUpload()\">\n                        <i class=\"material-icons\">\n                            vertical_align_top\n                        </i>\n                        Choose File\n                    </button>\n                    <small *ngIf=\"filesToUpload.length\" class=\"pl-5 blueColor\">{{filesToUpload[0].name}}</small>\n                    <small *ngIf=\"filesToUpload.length\" class=\"pl-3 redCol\">{{getSize(filesToUpload[0].size)}}</small>\n                    <input id=\"upload_file_btn\" [hidden]=\"true\" type=\"file\" (change)=\"uploadFile($event)\">\n                </div>\n                <div class=\"mt-5 mb-5\">\n                    <button class=\"btn btn-success\" (click)=\"uploadBulkQues()\">\n                        Upload\n                    </button>\n                </div>\n                <div class=\"mt-4 mb-4\">\n                    <button class=\"btn btn-link float-left\">\n                        <a [href]=\"templateLink\" download> Download Template for Questions Bulk upload </a>\n                    </button>\n                </div>\n            </div>\n            <div class=\"modal-body animated fadeIn\" *ngIf=\"!oldSection\">\n                <div class=\"row\">\n                    <div class=\"col-sm-2\">\n                        <div class=\"back_to_sec\">\n                            <button class=\"btn btn-info\" (click)=\"toggleOldNewSections()\">\n                                <i class=\"material-icons\">\n                                    arrow_back\n                                </i>\n                                <span>Back</span>\n                            </button>\n\n                        </div>\n                    </div>\n                    <div class=\"col-sm-10\">\n                        <div class=\"row p-3\">\n                            <div class=\"col-sm-4\">\n                                <label>Test Instance : </label>\n                            </div>\n                            <div class=\"col-sm-7\">\n                                <angular2-multiselect [data]=\"dropdownListInstance\" [(ngModel)]=\"selectedItemsInstance\" [settings]=\"dropdownSettingsInstance\" (onSelect)=\"onInstanceSelect($event)\" (onDeSelectAll)=\"clearCateg()\" (onDeselect)=\"clearCateg()\"></angular2-multiselect>\n                            </div>\n                        </div>\n                        <div class=\"row p-3\">\n                            <div class=\"col-sm-4\">\n                                <label>Select Category : </label>\n                            </div>\n                            <div class=\"col-sm-7\">\n                                <div [ngClass]=\"{'cursor_not':!dropdownListCateg.length}\">\n                                    <angular2-multiselect [data]=\"dropdownListCateg\" [(ngModel)]=\"selectedCateg\" [settings]=\"dropdownCateg\" (onSelect)=\"onCategSelect($event)\" (onDeSelectAll)=\"heirarchy=null\"></angular2-multiselect>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"row col-sm-12 pl-5 pb-3\">\n                            <label for=\"exampleFormControlInput1\">\n                                <b>{{this.heirarchy}}</b>\n                            </label>\n                        </div>\n                        <div class=\"row p-3\">\n                            <div class=\"col-sm-4\">\n                                <label>Section Name </label>\n                            </div>\n                            <div class=\"col-sm-7\">\n                                <input type=\"text\" class=\"form-control\" name=\"seactionName\" [(ngModel)]=\"secCatName\" placeholder=\"section name\">\n                            </div>\n                        </div>\n                        <div class=\"row p-5\">\n                            <div class=\"col-sm-12 text-center\">\n                                <button class=\"btn btn-primary\" (click)=\"createSection()\" [disabled]=\"!secCatName || !selectedCateg.length\">Create Section</button>\n                            </div>\n\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"alert alert-success\" *ngIf=\"this.seactionSuccessMessage\">\n                                {{this.sectionStatusMessage}}\n                            </div>\n                            <div class=\"alert alert-danger\" *ngIf=\"this.seactionFailMessage\">\n                                {{this.sectionStatusMessage}}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n\n            </div>\n\n\n        </div>\n    </div>\n</div>\n\n<!-- add question modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-sm-8 text-center\">\n                        <h4 class=\"blueColor\">Add Questions</h4>\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n                            <span class=\"boxShadow\">\n                                <i class=\"material-icons\">\n                                    clear\n                                </i>\n                            </span>\n\n                        </button>\n                    </div>\n                    <div class=\"col-sm-12\">\n                        <hr>\n                    </div>\n                </div>\n                <!-- <div class=\"p-4 text-center\">\n                    <h4 class=\"blueColor\">Add Questions</h4>\n                    <hr>\n                </div> -->\n\n                <!-- Created Question -->\n                <div class=\"createdQuestion.length\">\n                    <div *ngFor=\"let ques of createdQuestion\">\n                        <div class=\"pl-4 pr-4\">\n                            <h4 class=\"blueColor\">Q. {{ques.qustionText}}</h4>\n                            <div *ngIf=\"ques.questionTypeId == '1' || ques.questionTypeId == '2'\">\n                                <p *ngFor=\"let opt of ques['optionsList'];let i=index\">\n                                    <b>{{i+1}}. </b>\n                                    <span class=\"pl-4\">{{opt.optionText}}</span>\n                                </p>\n                            </div>\n                        </div>\n                        <div *ngIf=\"ques.questionTypeId == '3' || ques.questionTypeId == '4' || ques.questionTypeId == '5' || ques.questionTypeId == '6'\">\n\n                            <p>\n                                {{ques.answer}}\n                            </p>\n                        </div>\n                        <hr>\n                    </div>\n                </div>\n                <!-- End Created QUestion -->\n\n                <div class=\"row pl-5\">\n                    <div class=\"col-sm-3\">\n                        <label>Select Section : </label>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <angular2-multiselect [data]=\"dropdownListAll\" (onSelect)=\"onItemSelect($event)\" [(ngModel)]=\"selectedItemsAll\" [settings]=\"dropdownSettings\"></angular2-multiselect>\n                    </div>\n                </div>\n                <!-- <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n                    <li class=\"nav-item col\">\n                        <a class=\"nav-link active\" style=\"text-align: center;\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\"\n                            aria-selected=\"true\">Add Questions</a>\n                    </li>\n                    <li class=\"nav-item col\">\n                        <a class=\"nav-link\" id=\"profile-tab\" style=\"text-align: center;\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\"\n                            aria-selected=\"false\">Bulk Upload</a>\n                    </li>\n\n                </ul> -->\n\n                <div class=\"tab-content\" id=\"myTabContent\">\n\n                    <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n\n                        <form #myForm=\"ngForm\" (ngSubmit)=\"addQuestion(myForm)\">\n\n\n                            <div style=\"padding: 2rem 3rem;\n    text-align: left;\n    font-size: 14px;\">\n                                <div class=\"form-row\">\n                                    <div class=\"form-group col-md-6\">\n                                        <div class=\"form-row\">\n\n                                            <div class=\"col-md-10\">\n                                                <label for=\"firstName\">Question Title\n                                                    <sup class=\"errorTxt\">*</sup>\n                                                </label>\n                                                <input type=\"hidden\" name=\"sectionId\" [(ngModel)]=this.sectionId>\n                                                <input type=\"text\" class=\"form-control\" id=\"questionTitle\" name=\"questionText\" [(ngModel)]=\"questionTxt\" placeholder=\"\" required>\n                                            </div>\n\n                                            <div class=\"col-md-2\" style=\"padding-top: 2rem;\" *ngIf=\"questionType && questionType =='7'\">\n                                                <i class=\"material-icons\" (click)=\"questionImg()\" style=\"cursor: pointer;\">\n                                                    image\n                                                </i>\n                                                <input type=\"file\" [hidden]=\"true\" (change)=\"onSelectedQuestionImage($event)\" id=\"imageId\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"form-group col-md-3\">\n                                        <label for=\"lastName\">Question type\n                                            <sup class=\"errorTxt\">*</sup>\n                                        </label>\n\n                                        <select class=\"form-control\" id=\"questionType\" name=\"questionTypeId\" #questionTypeId=ngModel [(ngModel)]=\"questionTypeEdit\" (change)=\"setType(questionTypeId.value)\" required>\n                                            <option value=\"\" disabled> Select Type</option>\n                                            <option value=\"{{questionType.questionTypeId}}\" [selected]=\"questionType.questionTypeId == questionTypeEdit\" *ngFor=\"let questionType of questionTypeArr\">{{questionType.questionType}}</option>\n                                        </select>\n                                    </div>\n                                    <div class=\"form-group col-md-3\">\n                                        <label for=\"lastName\">Complexity\n                                            <sup class=\"errorTxt\">*</sup>\n                                        </label>\n                                        <select class=\"form-control\" id=\"complexity\" name=\"complexityId\" [(ngModel)]=\"questComplexity\" required>\n                                            <option value=\"\" disabled>Select </option>\n                                            <option value=\"{{complex.complexityId}}\" *ngFor=\"let complex of complexityArr\">{{complex.complexity}} </option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"form-row\">\n                                    <div class=\"form-group col-md-6\">\n                                        <p>\n                                            <a (click)=\"onAccordion()\" style=\"float: right;margin-right: 4rem;\" data-toggle=\"collapse\" href=\"#collapseExample\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n                                                + Additional data\n                                            </a>\n\n                                        </p>\n                                    </div>\n                                </div>\n                                <div class=\"collapse\" id=\"collapseExample\">\n                                    <div style=\"\">\n\n                                        <h4>Text / Code</h4>\n\n                                        <div>\n                                            <textarea id=\"txtarea2\" class=\"form-control \" name=\"questionCode\" ngModel style=\"\" spellcheck=\"false\" placeholder=\"Add Code..\"></textarea>\n                                        </div>\n                                        <!-- <ul class=\"nav nav-tabs\" id=\"myTab2\" role=\"tablist\">\n                                            <li class=\"nav-item col\">\n                                                <a (click)=\"onAccordion()\" class=\"nav-link active\" style=\"text-align: center;\" id=\"text-tab\" data-toggle=\"tab\" href=\"#text\"\n                                                    role=\"tab\" aria-controls=\"text\" aria-selected=\"true\">Text</a>\n                                            </li>\n                                            <li class=\"nav-item col\">\n                                                <a (click)=\"onCode()\" class=\"nav-link\" id=\"code-tab\" style=\"text-align: center;\" data-toggle=\"tab\" href=\"#code\" role=\"tab\"\n                                                    aria-controls=\"code\" aria-selected=\"false\">Code</a>\n                                            </li>\n\n                                        </ul> -->\n                                        <!-- <div class=\"tab-content\">\n                                            <div class=\"tab-pane active\" id=\"text\" role=\"tabpanel\" aria-labelledby=\"text-tab\" style=\"padding:1rem\">\n\n                                                <textarea id=\"txtarea\" class=\"form-control \" style=\"border:none\" spellcheck=\"false\" placeholder=\"Add description..\"></textarea>\n\n\n\n                                            </div>\n                                            <div class=\"tab-pane fade\" id=\"code\" role=\"tabpanel\" aria-labelledby=\"code-tab\" style=\"padding:1rem\">\n                                                <textarea id=\"txtarea2\" class=\"form-control \" name=\"questionCode\" ngModel style=\"border:none\" spellcheck=\"false\" placeholder=\"Add Code..\"></textarea>\n\n                                            </div>\n                                        </div> -->\n\n                                    </div>\n                                </div>\n\n                                <div *ngIf=\"questionType == 1 || questionType == 2\">\n                                    <h5>Options</h5>\n                                    <hr>\n                                    <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"mcaAns\" name=\"radio_btn\">\n                                        <div *ngFor=\"let opt of optionList;let i=index\">\n                                            <div class=\"form-row\" (mouseover)=\"showDelete(i)\" (mouseleave)=\"hideDelete(i)\">\n                                                <div *ngIf=\"questionType == '1'\" class=\"col-sm-1\">\n\n                                                    <mat-radio-button class=\"example-radio-button\" (click)=\"setMcqAns(i)\" [value]=\"i\" class=\"correct_radio\">\n\n                                                    </mat-radio-button>\n                                                </div>\n                                                <div *ngIf=\"questionType == '2'\" class=\"check_green\">\n                                                    <mat-checkbox class=\"example-margin\" [checked]=\"checkMaqAnsers(i)\" (click)=\"checkboxAns(i)\"></mat-checkbox>\n                                                </div>\n                                                <div class=\"form-group col-md-4\" *ngIf=\"questionType == '1' || questionType == '2'\">\n                                                    <!-- <label for=\"email\">Option</label> -->\n                                                    <!-- <input type=\"hidden\" class=\"form-control\" name=\"tempId\" ngModel=\"{{this.tempOptionImageId}}\"> -->\n                                                    <input type=\"text\" class=\"form-control\" [(ngModel)]=\"optionObj[i].optionText\" [ngModelOptions]=\"{standalone:true}\" id=\"option_field_{{i}}\">\n                                                    <span id=\"close_{{i}}\" class=\"close_icon\" (click)=\"deleteOption(i)\" [hidden]=\"optionList.length == 1\">\n                                                        <i class=\"material-icons\">\n                                                            close\n                                                        </i>\n                                                    </span>\n\n                                                </div>\n\n                                                <div class=\" col-md-2 \" style=\"padding-top: 2.25rem; \" *ngIf=\"questionType == '7'\">\n\n                                                    <i class=\"material-icons\" (click)=\"optionImg(i)\" style=\"cursor:pointer;\">\n                                                        image\n                                                    </i>\n                                                    <input type=\"file\" [hidden]=\"true\" (change)=\"onSelectedOptionImage($event,i)\" id=\"optionImageId{{i}}\">\n\n                                                </div>\n\n\n                                            </div>\n                                            <button class=\"btn btn-link \" (click)=\"incOptionList()\" style=\"margin-left: 18%;\" *ngIf=\"optionList.length == i+1\">\n                                                + Add another option\n                                            </button>\n                                        </div>\n                                    </mat-radio-group>\n                                </div>\n\n\n\n                                <!-- <div class=\"form-row \">\n    <div class=\"form-group col-md-4 \">\n    <label for=\"email \">Option</label>\n    <input type=\"text \" class=\"form-control \" id=\"option \" name=\"optionText \" [(ngModel)]=\"this.optionObj \" placeholder=\" \">\n    </div>\n   \n    <div class=\"col-md-2 \" style=\"padding-top: 2.25rem; \"> <i class=\"material-icons \" (click)=\"optionImg() \" style=\"cursor: pointer; \">\n    image\n    </i>\n    <input type=\"file \" [hidden]=\"true \" (change)=\"onSelectedOptionImage($event) \" id=\"optionImageId \">\n    </div>\n   \n    </div> -->\n                                <!-- <div class=\"form-row \">\n    <div class=\"form-group col-md-4 \">\n    <label for=\"email \">Option</label>\n    <input type=\"text \" class=\"form-control \" id=\"option \" placeholder=\" \">\n    <a href=\"JavaScript:Void(0); \" style=\"float: right \">\n    + Add another option\n    </a>\n    </div>\n    <div class=\"col-md-2 \" style=\"padding-top: 2.25rem; \"> <i class=\"material-icons \" (click)=\"optionImg1() \" style=\"cursor: pointer; \">\n    image\n    </i>\n    <input type=\"file \" [hidden]=\"true \" (change)=\"onSelectedOptionImage($event) \" id=\"optionImageId1 \">\n    </div>\n    </div> -->\n                                <div class=\"form-row\">\n                                    <div class=\"form-group col-md-4 \">\n                                        <div *ngIf=\"questionType == 3 || questionType == 4 || questionType == 5 || questionType == 6\">\n                                            <label for=\"te \">Answer</label>\n                                        </div>\n                                        <div *ngIf=\"questionType == 3 || questionType == 4 || questionType == 5 || questionType == 6\">\n                                            <textarea rows=\"6\" cols=\"80\" name=\"answer\" ngModel></textarea>\n                                        </div>\n                                        <!-- <div *ngIf=\"questionType == 1 ||  questionType == 2\">\n                                            <input type=\"text \" class=\"form-control \" name=\"answer\" ngModel placeholder=\" \">\n                                        </div> -->\n                                    </div>\n                                </div>\n                                <div class=\"col-md-12 pt-5 pl-0\">\n                                    <div style=\"float:left;margin-left: -2rem \">\n                                        <!-- <label>Mandatory</label> -->\n                                        <!-- <label class=\"container \">\n\n                                            <input id=\"check\" type=\"checkbox\" name=\"isMandate\" ngModel class=\"pointer mr-2\">Mandatory\n                                            <span class=\"checkmark \" style=\"top: -25px; right: -35px; \"></span>\n                                        </label> -->\n\n                                    </div>\n                                    <div>\n                                        <section class=\"example-section\">\n                                            <mat-slide-toggle class=\"example-margin\" [color]=\"color\" name=\"globaleShare\" ngModel>\n                                                Contribute to Global Question Catalouge\n                                            </mat-slide-toggle>\n                                        </section>\n                                    </div>\n                                    <div style=\"float: right;\">\n\n                                        <!-- <button type=\"button \" class=\"btn btn-primary \" style=\"background: #fff;color: #3D70B2;margin-right:2rem; border: 1px solid #3D70B2; height: 30px; line-height: 17px; border-radius: 0px; font-weight:\n    600; font-size: 15px; \" routerLink=\"sections \">+ Add Another Question</button>\n                                        <button type=\"button \" class=\"btn btn-primary \" style=\"background: #fff;color: #3D70B2;margin-right:2rem; border: 1px solid #3D70B2; height: 30px; line-height: 17px; border-radius: 0px; font-weight:\n    600; font-size: 15px; \" routerLink=\"sections \">Create New Section</button> -->\n\n                                        <button type=\"submit \" class=\"btn btn-primary add_ques_btn\" [ngClass]=\"{'cursor_not':!myForm.valid}\" [disabled]=\"!myForm.valid || !selectedItemsAll.length\">\n                                            Add Question</button>\n                                    </div>\n\n                                </div>\n                            </div>\n                        </form>\n                        <!-- <div class=\"alert alert-success\" style=\"text-align:center\" *ngIf=\"questionSuccesMessage\">\n                            <span style=\"text-align:center\">{{this.statusMessage}}</span>\n                        </div>\n                        <div class=\"alert alert-danger\" style=\"text-align:center\" *ngIf=\"questionFailMessage\">\n                            <span>{{this.statusMessage}}</span>\n                        </div>\n\n\n\n                        <div class=\"alert alert-success\" style=\"text-align:center\" *ngIf=\"optionImageSuccess\">\n                            <span style=\"text-align:center\">{{this.optionStatusMessage}}</span>\n                        </div>\n                        <div class=\"alert alert-danger\" style=\"text-align:center\" *ngIf=\"optionImageFail\">\n                            <span>{{this.optionStatusMessage}}</span>\n                        </div> -->\n\n                    </div>\n                    <div class=\"tab-pane fade \" id=\"profile \" role=\"tabpanel \" aria-labelledby=\"profile-tab \">...</div>\n\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n<!--  end modal -->\n\n<!-- Modal -->\n<div id=\"globQuesModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n\n                <div class=\"row col-sm-12\">\n                    <h4 class=\"modal-title\" *ngIf=\"oldSection\">Add Section</h4>\n                    <h4 class=\"modal-title\" *ngIf=\"!oldSection\">Create New Section</h4>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n            </div>\n            <div class=\"modal-body animated fadeIn\" *ngIf=\"oldSection\">\n                <div class=\"row pl-0\">\n                    <div class=\"col-sm-4\">\n                        <label class=\"float-right\">Test Instance : </label>\n                    </div>\n                    <div class=\"col-sm-5\">\n                        <div id=\"mul_close\">\n                            <angular2-multiselect [data]=\"dropdownListInstance\" [(ngModel)]=\"selectedItemsInstance\" [settings]=\"dropdownSettingsInstance\" (onSelect)=\"pushSections($event)\" (onDeSelect)=\"removeSections()\" (onDeSelectAll)=\"removeSections()\"></angular2-multiselect>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-2\">\n                        <!-- <span title=\"Add New Section\" class=\"add_new_sec\" (click)=\"toggleOldNewSections()\">\n                                <i class=\"material-icons\">\n                                    add_circle\n                                </i>\n                            </span> -->\n                    </div>\n                </div>\n                <div class=\"row pl-0 mt-4\">\n                    <div class=\"col-sm-2 offset-sm-2\">\n                        <label class=\"float-right\">Section : </label>\n                    </div>\n                    <div class=\"col-sm-5\">\n                        <div [ngClass]=\"{'cursor_not':!dropdownList.length}\" id=\"sec_mul\">\n                            <angular2-multiselect [data]=\"dropdownList\" [(ngModel)]=\"selectedItems\" [settings]=\"dropdownSettings\" (onSelect)=\"addSec()\" (onDeSelect)=\"removeSec()\" (onDeSelectAll)=\"removeSec()\"></angular2-multiselect>\n                        </div>\n                    </div>\n                    <div class=\"col-sm-2\">\n                        <span title=\"Add New Section\" class=\"add_new_sec\" (click)=\"toggleOldNewSections()\" *ngIf=\"selectedItemsInstance.length && selectedItemsInstance[0].isGlobal == '0'\">\n                            <i class=\"material-icons\">\n                                add_circle\n                            </i>\n                        </span>\n                    </div>\n                </div>\n                <div class=\"row p-5\">\n                    <div class=\"col-sm-12 text-center\">\n                        <button class=\"btn btn-primary\" (click)=\"importQuesAns()\" [disabled]=\"!selectedItems.length\">Import</button>\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"modal-body animated fadeIn\" *ngIf=\"!oldSection\">\n                <div class=\"row\">\n                    <div class=\"col-sm-2\">\n                        <div class=\"back_to_sec\">\n                            <button class=\"btn btn-info\" (click)=\"toggleOldNewSections()\">\n                                <i class=\"material-icons\">\n                                    arrow_back\n                                </i>\n                                <span>Back</span>\n                            </button>\n\n                        </div>\n                    </div>\n                    <div class=\"col-sm-10\">\n                        <div class=\"row p-3\">\n                            <div class=\"col-sm-4\">\n                                <label>Test Instance : </label>\n                            </div>\n                            <div class=\"col-sm-7\">\n                                <angular2-multiselect [data]=\"dropdownListInstance\" [(ngModel)]=\"selectedItemsInstance\" [settings]=\"dropdownSettingsInstance\" (onSelect)=\"onInstanceSelect($event)\" (onDeSelectAll)=\"clearCateg()\" (onDeselect)=\"clearCateg()\"></angular2-multiselect>\n                            </div>\n                        </div>\n                        <div class=\"row p-3\">\n                            <div class=\"col-sm-4\">\n                                <label>Select Category : </label>\n                            </div>\n                            <div class=\"col-sm-7\">\n                                <div [ngClass]=\"{'cursor_not':!dropdownListCateg.length}\">\n                                    <angular2-multiselect [data]=\"dropdownListCateg\" [(ngModel)]=\"selectedCateg\" [settings]=\"dropdownCateg\" (onSelect)=\"onCategSelect($event)\" (onDeSelectAll)=\"heirarchy=null\"></angular2-multiselect>\n                                </div>\n\n                            </div>\n                        </div>\n                        <div class=\"row col-sm-12 pl-5 pb-3\">\n                            <label for=\"exampleFormControlInput1\">\n                                <b>{{this.heirarchy}}</b>\n                            </label>\n                        </div>\n                        <div class=\"row p-3\">\n                            <div class=\"col-sm-4\">\n                                <label>Section Name </label>\n                            </div>\n                            <div class=\"col-sm-7\">\n                                <input type=\"text\" class=\"form-control\" name=\"seactionName\" [(ngModel)]=\"secCatName\" placeholder=\"section name\">\n                            </div>\n                        </div>\n                        <div class=\"row p-5\">\n                            <div class=\"col-sm-12 text-center\">\n                                <button class=\"btn btn-primary\" (click)=\"createSection()\" [disabled]=\"!secCatName || !selectedCateg.length\">Create Section</button>\n                            </div>\n\n                        </div>\n                        <div class=\"col-sm-12\">\n                            <div class=\"alert alert-success\" *ngIf=\"this.seactionSuccessMessage\">\n                                {{this.sectionStatusMessage}}\n                            </div>\n                            <div class=\"alert alert-danger\" *ngIf=\"this.seactionFailMessage\">\n                                {{this.sectionStatusMessage}}\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<!-- Modal -->\n<div id=\"addSectionModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <div class=\"row col-sm-12\">\n                    <h4 class=\"modal-title\">Create New Section</h4>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\n                </div>\n\n            </div>\n            <div class=\"modal-body\">\n                <div class=\"row p-3\">\n                    <div class=\"col-sm-4\">\n                        <label>Select Category : </label>\n                    </div>\n                    <div class=\"col-sm-7\">\n                        <angular2-multiselect [data]=\"dropdownListCateg\" [(ngModel)]=\"selectedCateg\" [settings]=\"dropdownCateg\" (onSelect)=\"onCategSelect($event)\"></angular2-multiselect>\n                    </div>\n                </div>\n                <div class=\"row col-sm-12 pl-5 pb-3\">\n                    <label for=\"exampleFormControlInput1\">\n                        <b>{{this.heirarchy}}</b>\n                    </label>\n                </div>\n                <div class=\"row p-3\">\n                    <div class=\"col-sm-4\">\n                        <label>Section Name </label>\n                    </div>\n                    <div class=\"col-sm-7\">\n                        <input type=\"text\" class=\"form-control\" name=\"seactionName\" [(ngModel)]=\"secCatName\" placeholder=\"section name\">\n                    </div>\n                </div>\n                <div class=\"row p-5\">\n                    <div class=\"col-sm-12 text-center\">\n                        <button class=\"btn btn-primary\" (click)=\"createSection()\" [disabled]=\"!secCatName || !selectedCateg.length\">Create Section</button>\n                    </div>\n\n                </div>\n                <div class=\"col-sm-12\">\n                    <div class=\"alert alert-success\" *ngIf=\"this.seactionSuccessMessage\">\n                        {{this.sectionStatusMessage}}\n                    </div>\n                    <div class=\"alert alert-danger\" *ngIf=\"this.seactionFailMessage\">\n                        {{this.sectionStatusMessage}}\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n</div>\n\n<!-- Modal -->\n<button type=\"button\" class=\"btn btn-info btn-lg\" data-toggle=\"modal\" id=\"uploaded_ques\" [hidden]=\"true\" data-target=\"#UploadedQuesModal\">Open Modal</button>\n<div id=\"UploadedQuesModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Bulk Upload Status</h4>\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n            </div>\n\n            <div class=\"modal-body pt-0 pb-0\">\n\n                <div class=\"row pt-4 pb-4\">\n                    <div class=\"col-sm-4\">\n                        <label><b>Total no of questions :</b></label>\n                        <span class=\"pl-3 quesCountSize tot_count\">{{totalQuestionsCount}}</span>\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <label><b>No .of success questions :</b></label>\n                        <span class=\"pl-3 quesCountSize succ_count\">{{questionsSuccessCount}}</span>\n                    </div>\n                    <div class=\"col-sm-4\">\n                        <label><b>No .of already exist questions :</b></label>\n                        <span class=\"pl-3 quesCountSize exist_count\">{{questionsExistCount}}</span>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <table class=\"table text-center\" *ngIf=\"uploadedQues && !uploadedQues['questionResponseList'].length\">\n                        <tr class=\"text-center errorTxt\">\n                            <th colspan=\"3\">No Questions Uploaded</th>\n                        </tr>\n                    </table>\n                    <table class=\"table text-center\" *ngIf=\"uploadedQues && uploadedQues['questionResponseList'].length\">\n                        <thead>\n                            <tr>\n                                <th>Question</th>\n                                <!-- <th>Status</th> -->\n                                <th>Message</th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr *ngFor=\"let ques of uploadedQues['questionResponseList']\">\n                                <td>{{ques.questionName}}</td>\n                                <!-- <td>\n                                            <p *ngIf=\"ques.statusCode == 0\">Failed</p>\n                                            <p *ngIf=\"ques.statusCode == 1\">Uploaded</p>\n                                            <p *ngIf=\"ques.statusCode == 2\">Already Exists !</p>\n                                        </td> -->\n                                <td [ngClass]=\"{'red_col': ques.statusCode == 0, 'green_col':ques.statusCode == 1, 'yellow_col':ques.statusCode == 2}\">{{ques.statusMessage}}</td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<!-- The Modal -->\n<div class=\"modal\" id=\"quesViewModal\">\n    <div class=\"modal-dialog\">\n        <div class=\"modal-content p-4 pb-5\" *ngIf=\"hoverGlobQues\">\n\n            <!-- Modal Header -->\n            <div class=\"modal-header\">\n                <!-- <h4 class=\"modal-title\">Modal Heading</h4> -->\n                <span class=\"ques_type_colr\">Questions Type:</span> &nbsp; &nbsp;\n                <span class=\"\">{{hoverGlobQues.questionType}}</span>\n                <span class=\"ques_type_colr pl-5\">Complexity Mode:</span> &nbsp; &nbsp;\n                <span class=\"\">{{hoverGlobQues.questionComplexityType}}</span>\n                <button type=\"button\" class=\"close boxShadow\" data-dismiss=\"modal\">&times;</button>\n            </div>\n\n            <!-- Modal body -->\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12\">\n                        <h5 class=\"mod_ques_clr\">1. &nbsp; {{hoverGlobQues.qustionText}}</h5>\n                    </div>\n\n                    <div class=\"pl-3 pt-3 col-sm-12\">\n                        <pre class=\"ques_type_colr pl-4\" *ngIf=\"hoverGlobQues.questionCode && hoverGlobQues.questionCode != 'null'\">{{hoverGlobQues.questionCode}}</pre>\n                    </div>\n\n                    <div *ngIf=\"hoverGlobQues.questionTypeId =='1'\" class=\"pl-3 pt-3\">\n                        <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"mcaAns\" name=\"radio_btn\">\n                            <div *ngFor=\"let opt of hoverGlobQues.optionsList;let i=index\">\n\n                                <mat-radio-button class=\"example-radio-button\" [value]=\"i\" class=\"correct_radio\" [disabled]=\"true\">\n                                    <span class=\"white_spac_rad\">{{opt.optionText}}</span>\n                                </mat-radio-button>\n                            </div>\n                        </mat-radio-group>\n                    </div>\n                    <div *ngIf=\"hoverGlobQues.questionTypeId =='2'\" class=\"pl-3 pt-3\">\n                        <mat-checkbox [color]=\"color\" class=\"example-margin view_ques_chkbox\" [checked]=\"this.checkBoxAnswers.includes(i)\" *ngFor=\"let opt of hoverGlobQues.optionsList;let i=index\">\n                            <span class=\"white_spac_rad\">{{opt.optionText}}</span>\n                        </mat-checkbox>\n\n                    </div>\n\n\n\n                    <div *ngIf=\"hoverGlobQues.questionTypeId =='3' || hoverGlobQues.questionTypeId =='4' || hoverGlobQues.questionTypeId =='5' || hoverGlobQues.questionTypeId =='6'\" class=\"pl-3 pt-3\">\n\n                        <p class=\"ques_type_colr\">\n                            <span style=\"color:#000000\"> A.</span>\n                            <span class=\"pl-4\"> {{hoverGlobQues.answer}}</span>\n                        </p>\n                    </div>\n\n                </div>\n            </div>\n\n            <!-- Modal footer -->\n            <!-- <div class=\"modal-footer\">\n                <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n            </div> -->\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/Components/list-questions/list-questions.component.css":
/*!************************************************************************!*\
  !*** ./src/app/Components/list-questions/list-questions.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".blueColor {\n    color: #3D70B2\n}\n\n.que_count {\n    background-color: #41D6C3;\n    padding: 3px 8px;\n    border-radius: 11px;\n    color: #ffffff;\n}\n\n.table_div {\n    background-color: #ffffff;\n}\n\n.paginate_ctrl {\n    position: relative;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n}\n\n.add_ques_Sec i,\n#bulkUploadModal i {\n    position: relative;\n    top: 5px;\n}\n\n.add_ques_Sec .btn-primary {\n    /* background-color: #ffffff;\n    color: #3D70B2;\n    border-color: #3D70B2;\n    width: 200px; */\n    background-color: #ffffff;\n    color: #3D70B2;\n    border-color: #3D70B2;\n    width: 138px;\n    padding: 0px 0px;\n}\n\n.redCol {\n    color: #f44336;\n}\n\n.add_ques_btn {\n    background: #3D70B2;\n    border: 1px solid #3D70B2;\n    height: 30px;\n    line-height: 17px;\n    border-radius: 0px;\n    font-weight: 600;\n    font-size: 15px;\n}\n\n.tbl_hdng {\n    color: #ffffff;\n    background-color: #425db5;\n}\n\n.search_ques::-webkit-input-placeholder {\n    opacity: 0.5\n}\n\n.glob_ques:hover #menu_content {\n    display: block;\n    /* position: absolute;\n    left: 0px; */\n    background-color: #ffffff;\n    box-shadow: 0 1px 5px #959595;\n    margin: 0% 7%;\n    z-index: 9;\n    /* top: 182px; */\n}\n\n#menu_content {\n    display: none;\n}\n\n#edit_ques {\n    display: none;\n}\n\n.ques_name {\n    overflow: hidden;\n    height: 83px;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    line-height: 2;\n    width: 400px;\n}\n\n.maxWidth240 {\n    max-width: 240px;\n}\n\n.maxWidth320 {\n    max-width: 320px;\n}\n\n.red_col {\n    color: #c0392b;\n}\n\n.green_col {\n    color: #2ecc71;\n}\n\n.yellow_col {\n    color: #f1c40f;\n}\n\n#UploadedQuesModal .modal-dialog {\n    max-width: 1000px;\n}\n\n.global_search .input-group-addon {\n    border: 1px solid #ced4da;\n    border-left: none;\n    background-color: #ffffff;\n    padding: 0px 0px;\n}\n\n.alphabets_cat {\n    background-color: #ffffff;\n}\n\n.alpha_letters {\n    color: #2980B9;\n}\n\n.alphabets_cat h5 {\n    display: inline-block;\n    margin: 0px;\n    padding: 20px 0px;\n    cursor: pointer;\n}\n\n.alphabets_cat span {\n    margin: 0px 10px;\n    padding: 0px;\n}\n\n.alpha_all h5 {\n    border: 1px solid #707070;\n    color: #707070 !important;\n    padding: 0px 15px;\n    border-radius: 10px;\n    cursor: pointer;\n}\n\n.categ_ques_tbl thead th {\n    border: none;\n    color: #000000;\n}\n\n.categ_ques_tbl td,\n.categ_ques_tbl th {\n    border: none;\n}\n\n.categ_ques_tbl table {\n    border-collapse: separate;\n    border-spacing: 0 15px;\n}\n\n.categ_ques_tbl tbody tr {\n    background-color: #ffffff;\n    padding-bottom: 20px;\n    cursor: pointer;\n}\n\n.categ_ques_tbl tbody tr:hover {\n    background-color: #7ED6DF !important;\n    box-shadow: 0 1px 5px #959595;\n    color: #ffffff;\n    transition-duration: 0.2s;\n}\n\n.sec_icon {\n    color: #707070;\n}\n\n.sub_cat_icon {\n    color: #2ECC71;\n}\n\n.categ_ques_tbl tbody tr:hover .sec_icon {\n    color: #ffffff;\n}\n\n.categ_ques_tbl tbody tr:hover .sub_cat_icon {\n    color: #ffffff;\n}\n\n.ques_cunt_circle {\n    font-weight: bold;\n    /* background-color: #41D6C3;\n    color: #ffffff;\n    padding: 3px 10px;\n    border-radius: 15px;\n    margin-left: 15px; */\n}\n\n.sel_all_che {\n    padding: 4px 13px;\n}\n\n.sec_tr {\n    background-color: #E2EBF2 !important;\n}\n\n.cat_h4 {\n    color: #2980B9;\n    float: left;\n}\n\n.catpath_arrow {\n    margin: 0px 10px;\n}\n\n.cat_h4 span {\n    font-size: 20px;\n}\n\n.ques_sec_name {\n    color: #1ABC9C;\n}\n\n.ques_sec_hr {\n    border-top: 2px solid #707070;\n    width: 70%;\n}\n\n.import_ques_btn {\n    background-color: #2980B9;\n    border-color: #2980B9;\n    color: #ffffff;\n    padding: 5px 25px;\n    border-radius: 0px;\n}\n\n.ques_type_colr {\n    color: #2980B9;\n}\n\n.mod_ques_clr {\n    color: #000000;\n    word-break: break-all;\n}\n\n#quesViewModal .modal-dialog {\n    max-width: 1000px;\n}\n\n#quesViewModal .close {\n    background-color: #41D6C3;\n    padding: 0px 6px;\n    position: relative;\n    top: 10px;\n    right: 10px;\n    color: #ffffff;\n    border-radius: 17px;\n}\n\n.close_icon {\n    position: absolute;\n    color: #f44336;\n    right: -30px;\n    z-index: 9999;\n    top: 5px;\n    visibility: hidden;\n    transition-delay: 0.2s;\n}\n\n.close_icon i {\n    font-size: 18px;\n    cursor: pointer;\n    font-weight: bold;\n}\n\n.add_new_sec {\n    top: 5px;\n    position: relative;\n    cursor: pointer;\n}\n\n.add_new_sec i {\n    color: #41D6C3;\n}\n\n#addSectionModal .modal-dialog {\n    max-width: 600px;\n}\n\n.back_to_sec button {\n    padding: 0px 10px 5px 0px;\n}\n\n.back_to_sec button i {\n    position: relative;\n    padding: 2px 4px;\n    top: 5px;\n}\n\n#globQuesModal .modal-dialog {\n    max-width: 50%;\n}\n\n.cursor_not {\n    cursor: not-allowed;\n    pointer-events: none;\n}\n\n#bulkUploadModal .modal-dialog {\n    max-width: 50%;\n}\n\n.cursor_not {\n    cursor: not-allowed;\n    pointer-events: none;\n}\n\n#exampleModalCenter .close span {\n    background-color: #41D6C3;\n    color: #fff;\n    padding: 2px 5px 0px 5px;\n    border-radius: 21px;\n}\n\n#exampleModalCenter .close span i {\n    font-size: 20px;\n}\n\n.quesCountSize {\n    font-size: 20px;\n}\n\n.tot_count {\n    color: #fc7b03\n}\n\n.succ_count {\n    color: #20BF6B;\n}\n\n.exist_count {\n    color: #f70800;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9saXN0LXF1ZXN0aW9ucy9saXN0LXF1ZXN0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULG1DQUEyQjtZQUEzQiwyQkFBMkI7QUFDL0I7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjs7QUFFQTtJQUNJOzs7bUJBR2U7SUFDZix5QkFBeUI7SUFDekIsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGNBQWM7SUFDZDtnQkFDWTtJQUNaLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IsYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsY0FBYztJQUVkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakI7Ozs7d0JBSW9CO0FBQ3hCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixRQUFRO0lBQ1Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksUUFBUTtJQUNSLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsUUFBUTtBQUNaOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9saXN0LXF1ZXN0aW9ucy9saXN0LXF1ZXN0aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsdWVDb2xvciB7XG4gICAgY29sb3I6ICMzRDcwQjJcbn1cblxuLnF1ZV9jb3VudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxRDZDMztcbiAgICBwYWRkaW5nOiAzcHggOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDExcHg7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi50YWJsZV9kaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5wYWdpbmF0ZV9jdHJsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cblxuLmFkZF9xdWVzX1NlYyBpLFxuI2J1bGtVcGxvYWRNb2RhbCBpIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA1cHg7XG59XG5cbi5hZGRfcXVlc19TZWMgLmJ0bi1wcmltYXJ5IHtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGNvbG9yOiAjM0Q3MEIyO1xuICAgIGJvcmRlci1jb2xvcjogIzNENzBCMjtcbiAgICB3aWR0aDogMjAwcHg7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBjb2xvcjogIzNENzBCMjtcbiAgICBib3JkZXItY29sb3I6ICMzRDcwQjI7XG4gICAgd2lkdGg6IDEzOHB4O1xuICAgIHBhZGRpbmc6IDBweCAwcHg7XG59XG5cbi5yZWRDb2wge1xuICAgIGNvbG9yOiAjZjQ0MzM2O1xufVxuXG4uYWRkX3F1ZXNfYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiAjM0Q3MEIyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzRDcwQjI7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnRibF9oZG5nIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI1ZGI1O1xufVxuXG4uc2VhcmNoX3F1ZXM6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIG9wYWNpdHk6IDAuNVxufVxuXG4uZ2xvYl9xdWVzOmhvdmVyICNtZW51X2NvbnRlbnQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwcHg7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBib3gtc2hhZG93OiAwIDFweCA1cHggIzk1OTU5NTtcbiAgICBtYXJnaW46IDAlIDclO1xuICAgIHotaW5kZXg6IDk7XG4gICAgLyogdG9wOiAxODJweDsgKi9cbn1cblxuI21lbnVfY29udGVudCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuI2VkaXRfcXVlcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnF1ZXNfbmFtZSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDgzcHg7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgIGxpbmUtaGVpZ2h0OiAyO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgd2lkdGg6IDQwMHB4O1xufVxuXG4ubWF4V2lkdGgyNDAge1xuICAgIG1heC13aWR0aDogMjQwcHg7XG59XG5cbi5tYXhXaWR0aDMyMCB7XG4gICAgbWF4LXdpZHRoOiAzMjBweDtcbn1cblxuLnJlZF9jb2wge1xuICAgIGNvbG9yOiAjYzAzOTJiO1xufVxuXG4uZ3JlZW5fY29sIHtcbiAgICBjb2xvcjogIzJlY2M3MTtcbn1cblxuLnllbGxvd19jb2wge1xuICAgIGNvbG9yOiAjZjFjNDBmO1xufVxuXG4jVXBsb2FkZWRRdWVzTW9kYWwgLm1vZGFsLWRpYWxvZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XG59XG5cbi5nbG9iYWxfc2VhcmNoIC5pbnB1dC1ncm91cC1hZGRvbiB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDBweCAwcHg7XG59XG5cbi5hbHBoYWJldHNfY2F0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xufVxuXG4uYWxwaGFfbGV0dGVycyB7XG4gICAgY29sb3I6ICMyOTgwQjk7XG59XG5cbi5hbHBoYWJldHNfY2F0IGg1IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMjBweCAwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYWxwaGFiZXRzX2NhdCBzcGFuIHtcbiAgICBtYXJnaW46IDBweCAxMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLmFscGhhX2FsbCBoNSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgICBjb2xvcjogIzcwNzA3MCAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDBweCAxNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2F0ZWdfcXVlc190YmwgdGhlYWQgdGgge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuLmNhdGVnX3F1ZXNfdGJsIHRkLFxuLmNhdGVnX3F1ZXNfdGJsIHRoIHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5jYXRlZ19xdWVzX3RibCB0YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBzZXBhcmF0ZTtcbiAgICBib3JkZXItc3BhY2luZzogMCAxNXB4O1xufVxuXG4uY2F0ZWdfcXVlc190YmwgdGJvZHkgdHIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2F0ZWdfcXVlc190YmwgdGJvZHkgdHI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3RUQ2REYgIWltcG9ydGFudDtcbiAgICBib3gtc2hhZG93OiAwIDFweCA1cHggIzk1OTU5NTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xufVxuXG4uc2VjX2ljb24ge1xuICAgIGNvbG9yOiAjNzA3MDcwO1xufVxuXG4uc3ViX2NhdF9pY29uIHtcbiAgICBjb2xvcjogIzJFQ0M3MTtcbn1cblxuLmNhdGVnX3F1ZXNfdGJsIHRib2R5IHRyOmhvdmVyIC5zZWNfaWNvbiB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5jYXRlZ19xdWVzX3RibCB0Ym9keSB0cjpob3ZlciAuc3ViX2NhdF9pY29uIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLnF1ZXNfY3VudF9jaXJjbGUge1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICM0MUQ2QzM7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDsgKi9cbn1cblxuLnNlbF9hbGxfY2hlIHtcbiAgICBwYWRkaW5nOiA0cHggMTNweDtcbn1cblxuLnNlY190ciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UyRUJGMiAhaW1wb3J0YW50O1xufVxuXG4uY2F0X2g0IHtcbiAgICBjb2xvcjogIzI5ODBCOTtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLmNhdHBhdGhfYXJyb3cge1xuICAgIG1hcmdpbjogMHB4IDEwcHg7XG59XG5cbi5jYXRfaDQgc3BhbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucXVlc19zZWNfbmFtZSB7XG4gICAgY29sb3I6ICMxQUJDOUM7XG59XG5cbi5xdWVzX3NlY19ociB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICM3MDcwNzA7XG4gICAgd2lkdGg6IDcwJTtcbn1cblxuLmltcG9ydF9xdWVzX2J0biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBCOTtcbiAgICBib3JkZXItY29sb3I6ICMyOTgwQjk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogNXB4IDI1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG4ucXVlc190eXBlX2NvbHIge1xuICAgIGNvbG9yOiAjMjk4MEI5O1xufVxuXG4ubW9kX3F1ZXNfY2xyIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG5cbiNxdWVzVmlld01vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xufVxuXG4jcXVlc1ZpZXdNb2RhbCAuY2xvc2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MUQ2QzM7XG4gICAgcGFkZGluZzogMHB4IDZweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDE3cHg7XG59XG5cbi5jbG9zZV9pY29uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6ICNmNDQzMzY7XG4gICAgcmlnaHQ6IC0zMHB4O1xuICAgIHotaW5kZXg6IDk5OTk7XG4gICAgdG9wOiA1cHg7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHRyYW5zaXRpb24tZGVsYXk6IDAuMnM7XG59XG5cbi5jbG9zZV9pY29uIGkge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hZGRfbmV3X3NlYyB7XG4gICAgdG9wOiA1cHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFkZF9uZXdfc2VjIGkge1xuICAgIGNvbG9yOiAjNDFENkMzO1xufVxuXG4jYWRkU2VjdGlvbk1vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgIG1heC13aWR0aDogNjAwcHg7XG59XG5cbi5iYWNrX3RvX3NlYyBidXR0b24ge1xuICAgIHBhZGRpbmc6IDBweCAxMHB4IDVweCAwcHg7XG59XG5cbi5iYWNrX3RvX3NlYyBidXR0b24gaSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDJweCA0cHg7XG4gICAgdG9wOiA1cHg7XG59XG5cbiNnbG9iUXVlc01vZGFsIC5tb2RhbC1kaWFsb2cge1xuICAgIG1heC13aWR0aDogNTAlO1xufVxuXG4uY3Vyc29yX25vdCB7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuI2J1bGtVcGxvYWRNb2RhbCAubW9kYWwtZGlhbG9nIHtcbiAgICBtYXgtd2lkdGg6IDUwJTtcbn1cblxuLmN1cnNvcl9ub3Qge1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbiNleGFtcGxlTW9kYWxDZW50ZXIgLmNsb3NlIHNwYW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MUQ2QzM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMnB4IDVweCAwcHggNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIxcHg7XG59XG5cbiNleGFtcGxlTW9kYWxDZW50ZXIgLmNsb3NlIHNwYW4gaSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ucXVlc0NvdW50U2l6ZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4udG90X2NvdW50IHtcbiAgICBjb2xvcjogI2ZjN2IwM1xufVxuXG4uc3VjY19jb3VudCB7XG4gICAgY29sb3I6ICMyMEJGNkI7XG59XG5cbi5leGlzdF9jb3VudCB7XG4gICAgY29sb3I6ICNmNzA4MDA7XG59Il19 */"

/***/ }),

/***/ "./src/app/Components/list-questions/list-questions.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Components/list-questions/list-questions.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListQuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListQuestionsComponent", function() { return ListQuestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Services/AllServices/all-services.service */ "./src/app/Services/AllServices/all-services.service.ts");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
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




var ListQuestionsComponent = /** @class */ (function () {
    function ListQuestionsComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.dropdownListInstance = [];
        this.selectedItemsInstance = [];
        this.dropdownSettingsInstance = {
            singleSelection: true,
            text: "Select Test Instance",
            enableSearchFilter: true,
            classes: "myclass custom-class",
            showCheckbox: false
        };
        this.oldSection = true;
        this.checked = false;
        this.disabled = false;
        this.seactionSuccessMessage = false;
        this.seactionFailMessage = false;
        this.categoryPath = [];
        this.alphaArr = ['All', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        this.newGlobQues = {};
        this.newGlobQuesBack = {};
        this.p_glob_1 = 1;
        this.p_glob_2 = 1;
        this.p_glob_3 = 1;
        this.categoryGlobalPath = [];
        this.selectedSecId = null;
        this.checkBoxAnswers = [];
        this.offset = 0;
        this.limitRecords = 10;
        this.globalSearchKey = null;
        this.questComplexity = null;
        this.questionTypeEdit = null;
        this.questionTxt = null;
        this.impQues = {};
        this.importQuesArr = [];
        this.color = 'primary';
        this.checkboxList = [];
        this.p = 1;
        this.p_one = 1;
        this.p_two = 1;
        this.p_three = 1;
        this.p_four = 1;
        this.filesToUpload = [];
        this.qustionList = [];
        this.filterQuesList = [];
        this.createdQuestion = [];
        this.optionObj = {
            '0': {
                'optionText': null,
                'tempId': 0
            }
        };
        this.optionList = [""];
        this.questionImageSelectedFile = null;
        this.questionOptionImageFile = null;
        this.optionImageSuccess = false;
        this.optionImageFail = false;
        this.questionSuccesMessage = false;
        this.questionFailMessage = false;
        this.dropdownListAll = [];
        this.selectedItemsAll = [];
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {
            singleSelection: true,
            text: "Select Section",
            enableSearchFilter: true,
            classes: "myclass custom-class",
            showCheckbox: false
        };
        this.dropdownCateg = {
            singleSelection: true,
            text: "Select Category",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: "myclass custom-class",
            showCheckbox: false
        };
        this.selectedCateg = [];
        this.dropdownListCateg = [];
        var domain = window.location.hostname;
        this.tenantName = domain.split('.')[0];
    }
    ListQuestionsComponent.prototype.getComplexCity = function () {
        var _this = this;
        this.apiService.getAll("reports/questions/getcomplexity?token=" + localStorage.getItem('token')).subscribe(function (data) {
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
    ListQuestionsComponent.prototype.getQuestionType = function () {
        var _this = this;
        this.apiService.getAll("reports/questions/getquestiontype?token=" + localStorage.getItem('token')).subscribe(function (data) {
            if (data['statusCode'] == 1) {
                // console.log(data)
                _this.questionTypeArr = data['questionType'];
            }
        }, function (error) {
            // console.log(error)
        }, function () { });
    };
    ListQuestionsComponent.prototype.onSelectedQuestionImage = function (event) {
        this.questionImageSelectedFile = event.target.files[0];
        // console.log(this.questionImageSelectedFile)
    };
    ListQuestionsComponent.prototype.onSelectedOptionImage = function (event, ind) {
        var _this = this;
        this.optionImageSuccess = false;
        this.optionImageFail = false;
        this.questionOptionImageFile = event.target.files[0];
        var formData = new FormData();
        formData.append("files", this.questionOptionImageFile);
        formData.append('token', localStorage.getItem('token'));
        // console.log(this.questionOptionImageFile)
        this.apiService.postData("notification/image/option/add", formData).subscribe(function (data) {
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
    ListQuestionsComponent.prototype.addQuestion = function (myForm) {
        var _this = this;
        if (!this.selectedItemsAll.length) {
            this.apiService.errorAlert('Please Select the Section to Add Question');
        }
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
        // if (!optionFilled) {
        //   this.apiService.errorAlert("Please Enter the Options");
        //   this.blockUI.stop();
        //   return false
        // }
        this.selectedSecId = this.selectedItems.length ? this.selectedItems[0].id : null;
        var formData = new FormData();
        formData.append("optionList", JSON.stringify(formListOptions));
        formData.append("sectionId", this.selectedItemsAll.length ? this.selectedItemsAll[0].id : 0);
        formData.append("questionText", data.questionText);
        formData.append("questionImage", this.questionImageSelectedFile);
        formData.append("questionTypeId", data.questionTypeId);
        formData.append("complexityId", data.complexityId);
        formData.append("questionCode", data.questionCode);
        if (data.globaleShare) {
            formData.append("globaleShare", 'yes');
        }
        else {
            formData.append("globaleShare", 'no');
        }
        if (data.questionTypeId == '1' || data.questionTypeId == '2') {
            if (!optionFilled) {
                this.apiService.errorAlert("Please Enter the Options");
                this.blockUI.stop();
                return false;
            }
        }
        if (data.questionTypeId == "1") {
            if (this.mcaAns != null) {
                formData.append("answer", this.mcaAns);
            }
            else {
                this.apiService.errorAlert("Please Select the Answer");
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
                this.apiService.errorAlert("Please Select the Answer");
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
        this.apiService.postData("reports/questions/addquestion", formData).subscribe(function (data) {
            // console.log(data['statusMessage'])
            if (data['statusCode'] == 1) {
                _this.mcaAns = null;
                _this.getQuestions();
                _this.checkboxList = [];
                // get ques by id
                _this.apiService.getAll('reports/questions/getquestionsbyquestionid?token=' + localStorage.getItem('token') + '&questionid=' + data['questionId'])
                    .subscribe(function (res) {
                    _this.blockUI.stop();
                    _this.createdQuestion = res['questionsList'];
                }, function (error) {
                });
                //  end
                // get questions by section
                _this.getQuestionsBySection(_this.selectedItemsAll[0].id);
                myForm.reset();
                delete _this.optionObj;
                _this.selectedItemsAll = [];
                // this.optionList = [""];
                _this.optionList = [];
                _this.optionObj = {
                    '0': {
                        'optionText': null,
                        'tempId': 0
                    }
                };
                _this.questionSuccesMessage = true;
                _this.statusMessage = data['statusMessage'];
                setTimeout(function () {
                    _this.questionSuccesMessage = false;
                    _this.statusMessage = null;
                }, 4000);
                _this.apiService.successAlert(data['statusMessage']);
            }
            else {
                _this.blockUI.stop();
                _this.questionFailMessage = true;
                _this.apiService.errorAlert(data['statusMessage']);
                // this.statusMessage = data['statusMessage']
                setTimeout(function () {
                    _this.questionFailMessage = false;
                    // this.statusMessage = null
                }, 3000);
            }
        }, function (error) {
            // console.log(error)
            _this.blockUI.stop();
        }, function () { });
    };
    ListQuestionsComponent.prototype.onAccordion = function () {
        document.getElementById('txtarea').addEventListener('keyup', function () {
            this.style.overflow = 'hidden';
            this.style.height = '0';
            this.style.height = this.scrollHeight + 'px';
        }, false);
    };
    ListQuestionsComponent.prototype.onCode = function () {
        document.getElementById('txtarea2').addEventListener('keyup', function () {
            this.style.overflow = 'hidden';
            this.style.height = '0';
            this.style.height = this.scrollHeight + 'px';
        }, false);
    };
    ListQuestionsComponent.prototype.questionImg = function () {
        document.getElementById('imageId').click();
    };
    ListQuestionsComponent.prototype.optionImg = function (i) {
        document.getElementById('optionImageId' + i).click();
    };
    ListQuestionsComponent.prototype.incOptionList = function () {
        this.optionList.push("");
        this.optionObj[this.optionList.length - 1] = {
            'optionText': null,
            'tempId': 0
        };
        // console.log(this.optionObj)
    };
    ListQuestionsComponent.prototype.getAllSections = function () {
        var _this = this;
        this.apiService.getAll("reports/questions/getsections?token=" + localStorage.getItem('token')).subscribe(function (data) {
            // console.log(data)
            if (data['statusCode'] == 1) {
                _this.sectionsData = data['sectionsList'];
                for (var i = 0; i < _this.sectionsData.length; i++) {
                    if (_this.sectionsData[i].isOwner) {
                        _this.dropdownListAll.push({
                            id: _this.sectionsData[i].sectionId,
                            itemName: _this.sectionsData[i].sectionName + '( ' + _this.sectionsData[i].sectionCode + ' )'
                        });
                    }
                }
            }
            else {
            }
        }, function (error) {
            // console.log(error)
        }, function () { });
    };
    ListQuestionsComponent.prototype.setType = function (qType) {
        this.mcaAns = null;
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
    ListQuestionsComponent.prototype.ngOnInit = function () {
        this.getQuestions();
        this.getComplexCity();
        this.getQuestionType();
        this.getAllSections();
        this.getAllCategories();
        this.getAllGlobalCategories();
        // this.getCategoryAndSubCategoryList();
        this.getTestInstance();
        var self = this;
        $('#exampleModalCenter').on('hidden.bs.modal', function () {
            self.createdQuestion = [];
        });
        $('#bulkUploadModal').on('hidden.bs.modal', function () {
            self.selectedItemsInstance = [];
            self.selectedItems = [];
            self.selectedCateg = [];
            self.heirarchy = null;
            self.secCatName = null;
            self.oldSection = true;
        });
        $('#globQuesModal').on('hidden.bs.modal', function () {
            self.selectedItemsInstance = [];
            self.selectedItems = [];
            self.selectedCateg = [];
            self.heirarchy = null;
            self.secCatName = null;
            self.oldSection = true;
        });
        $('#UploadedQuesModal').on('hidden.bs.modal', function () {
            $("body").css("overflow", "auto");
            $("#UploadedQuesModal").css("overflow", "hidden");
        });
        $('#UploadedQuesModal').on('show.bs.modal', function () {
            $("body").css("overflow", "hidden");
            $("#UploadedQuesModal").css("overflow", "auto");
        });
    };
    ListQuestionsComponent.prototype.getQuestions = function () {
        var _this = this;
        this.blockUI.start('Please Wait ...');
        this.apiService.getAll('reports/questions/getallquestions?token=' + localStorage.getItem('token'))
            .subscribe(function (res) {
            _this.blockUI.stop();
            _this.qustionList = res['questionsList'];
            _this.filterQuesList = res['questionsList'];
        }, function (error) {
            _this.blockUI.stop();
        });
    };
    ListQuestionsComponent.prototype.uploadFile = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        // console.log(this.filesToUpload)
    };
    ListQuestionsComponent.prototype.getSize = function (bytes, decimals) {
        if (decimals === void 0) { decimals = 2; }
        if (bytes === 0)
            return '0 Bytes';
        var k = 1024;
        var dm = decimals < 0 ? 0 : decimals;
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };
    ListQuestionsComponent.prototype.clickUpload = function () {
        document.getElementById('upload_file_btn').click();
    };
    ListQuestionsComponent.prototype.uploadBulkQues = function () {
        var _this = this;
        this.blockUI.start('Please Wait We Are Uploading ');
        var formData = new FormData();
        var files = this.filesToUpload;
        if (!this.dropdownList.length) {
            this.blockUI.stop();
            this.apiService.errorAlert("Please Select Section");
            return;
        }
        if (this.filesToUpload.length == 0) {
            this.blockUI.stop();
            this.apiService.errorAlert("No file selected!");
            return;
        }
        // console.log(files[0])
        formData.append("files", files[0], files[0]['name']);
        formData.append("token", localStorage.getItem('token'));
        formData.append('sectionid', this.selectedItems.length ? this.selectedItems[0].id : 0);
        if (this.apiService.cfs) {
            var cfsformData = new FormData();
            // cfsformData.append("access-token",this.service.secretKey);
            cfsformData.append("files", files[0]);
            this.apiService.postDataCfs(cfsformData).subscribe(function (res) {
                // console.log(res);
                if (res.status == 200) {
                    formData.append("cfsId", res.body[0].id);
                    formData.append("cfsViewURL", res.body[0].selfLink.view);
                    formData.append("cfsDownloadURL", res.body[0].selfLink.download);
                    _this.apiService.postData('notification/cfs/bulkquestions', formData)
                        .subscribe(function (res) {
                        if (!res['statusCode']) {
                            _this.blockUI.stop();
                            // document.getElementById('uploaded_ques').click();
                            _this.apiService.errorAlert(res['statusMessage']);
                        }
                        else {
                            _this.blockUI.stop();
                            _this.getQuestions();
                            _this.dropdownList = [];
                            // this.dropdownListInstance = [];
                            _this.selectedItemsInstance = [];
                            _this.selectedItems = [];
                            document.getElementById('close_bul_btn').click();
                            _this.uploadedQues = res;
                            _this.filesToUpload = [];
                            _this.questionsSuccessCount = res['questionsSuccessCount'];
                            _this.questionsExistCount = res['questionsExistCount'];
                            _this.totalQuestionsCount = res['totalQuestionsCount'];
                            document.getElementById('uploaded_ques').click();
                            _this.apiService.successAlert(res['statusMessage']);
                        }
                    }, function (error) {
                        _this.blockUI.stop();
                    });
                }
                else {
                    _this.apiService.errorAlert(files[0].name + "Upload Failed");
                }
            }, function (error) {
                // console.log(error);
            }, function () {
            });
        }
        else {
            this.apiService.postData('notification/upload/bulkquestions', formData)
                .subscribe(function (res) {
                if (!res['statusCode']) {
                    _this.blockUI.stop();
                    // document.getElementById('uploaded_ques').click();
                    _this.apiService.errorAlert(res['statusMessage']);
                }
                else {
                    _this.blockUI.stop();
                    _this.getQuestions();
                    _this.dropdownList = [];
                    // this.dropdownListInstance = [];
                    _this.selectedItemsInstance = [];
                    _this.selectedItems = [];
                    document.getElementById('close_bul_btn').click();
                    _this.uploadedQues = res;
                    _this.filesToUpload = [];
                    _this.questionsSuccessCount = res['questionsSuccessCount'];
                    _this.questionsExistCount = res['questionsExistCount'];
                    _this.totalQuestionsCount = res['totalQuestionsCount'];
                    document.getElementById('uploaded_ques').click();
                    _this.apiService.successAlert(res['statusMessage']);
                }
            }, function (error) {
                _this.blockUI.stop();
            });
        }
    };
    ListQuestionsComponent.prototype.checkboxAns = function (i) {
        if (!this.checkboxList.includes(i)) {
            this.checkboxList.push(i);
        }
        else {
            var ind = this.checkboxList.indexOf(i);
            this.checkboxList.splice(ind, 1);
        }
    };
    ListQuestionsComponent.prototype.setMcqAns = function (ind) {
        this.mcaAns = ind;
    };
    ListQuestionsComponent.prototype.searchQuestion = function (searchQues) {
        this.qustionList = this.filterQuesList;
        if (searchQues.trim().length > 0) {
            var filterArr = this.qustionList.filter(function (item) {
                return item.qustionText.includes(searchQues.trim());
            });
            // console.log(filterArr)
            this.qustionList = filterArr;
        }
        else {
            this.getQuestions();
        }
    };
    ListQuestionsComponent.prototype.getNextGlob = function () {
        this.offset += 10;
        this.pickGlobalQUestions();
    };
    ListQuestionsComponent.prototype.getPrevGlob = function () {
        this.offset -= 10;
        this.pickGlobalQUestions();
    };
    ListQuestionsComponent.prototype.pickGlobalQUestions = function () {
        var _this = this;
        this.isQues = true;
        // console.log(this.globalSearchKey)
        if (this.globalSearchKey.length) {
            this.apiService.getAll('reports/questions/searchquestion?searchkey=' + this.globalSearchKey + '&limitRecords=' + this.limitRecords + '&offset=' + this.offset + '&token=' + localStorage.getItem('token'))
                .subscribe(function (res) {
                _this.globalQues = res;
                if (!res['questionsList'].length) {
                    _this.offset = 10;
                }
            }, function (error) {
            });
        }
        else {
            this.offset = 10;
            this.globalQues = null;
        }
    };
    ListQuestionsComponent.prototype.setPos = function (ind, ques) {
        if (ques) {
            var answerArr = ques.questionAnswer.split(',');
            var optLis = [];
            for (var i = 0; i < ques.optionsList.length; i++) {
                if (answerArr.includes(String(ques.optionsList[i].optionId))) {
                    optLis.push({
                        answer: true,
                        optionId: ques.optionsList[i].optionId,
                        optionText: ques.optionsList[i].optionText,
                        optionImageId: ques.optionsList[i].optionImageId,
                        optionImageUrl: ques.optionsList[i].optionImageUrl
                    });
                }
                else {
                    optLis.push({
                        answer: false,
                        optionId: ques.optionsList[i].optionId,
                        optionText: ques.optionsList[i].optionText,
                        optionImageId: ques.optionsList[i].optionImageId,
                        optionImageUrl: ques.optionsList[i].optionImageUrl
                    });
                }
            }
            ques.optionsList = optLis;
        }
        this.hoverGlobQues = ques;
        $('#glob_ques_id' + ind).css('position', 'relative');
        $('#glob_ques_id' + ind + ' #menu_content').css({ 'position': 'absolute', 'left': '0px' });
    };
    ListQuestionsComponent.prototype.editQuestion = function (hoverGlobQues) {
        // document.getElementById('edit_ques').click();
        $('#exampleModalCenter').modal('show');
        this.questionTxt = hoverGlobQues.questionTitle;
        this.questionTypeEdit = hoverGlobQues.questionTypeId;
        this.questionType = hoverGlobQues.questionTypeId;
        this.questComplexity = hoverGlobQues.questionComplexityId;
        this.optionList = hoverGlobQues.optionsList;
        // console.log(this.optionList)
        if (hoverGlobQues.questionTypeId == '1') {
            var ind = this.optionList.findIndex(function (item) {
                return item.optionId == hoverGlobQues.questionAnswer;
            });
            if (ind > -1) {
                this.mcaAns = ind;
            }
        }
        if (hoverGlobQues.questionTypeId == '2') {
            var answerId = hoverGlobQues.questionAnswer.split(',');
            var _loop_1 = function (i) {
                ind = this_1.optionList.findIndex(function (item) {
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
            // console.log("this.checkBoxAnswers", this.checkBoxAnswers)
            // if(ind > -1){
            //   this.mcaAns = ind
            // }
        }
        for (var i = 0; this.optionList.length; i++) {
            this.optionObj[i] = {
                'optionText': this.optionList[i].optionText,
                'tempId': 0
            };
        }
    };
    ListQuestionsComponent.prototype.checkMaqAnsers = function (i) {
        return this.checkBoxAnswers.includes(i);
    };
    ListQuestionsComponent.prototype.getTemplateLink = function () {
        if (this.apiService.cfs) {
            this.templateLink = this.apiService.cfsUrl + this.apiService.questionTemplateUrl;
        }
        else {
            this.templateLink = this.apiService.url + 'notification/template/download?filetype=question&fileId=1&token=' + localStorage.getItem('token');
        }
        //this.templateLink = this.apiService.url + 'notification/template/download?filetype=question&fileId=1&token=' + localStorage.getItem('token')
    };
    ListQuestionsComponent.prototype.importAllQues = function (impAllQues) {
        // // console.log('this.globalQuessssssssssssssssssssssss',this.globalQues)
        if (!impAllQues) {
            var x = __assign({}, this.newGlobQues);
            this.importQuesArr = x['questionsList'].slice();
        }
        else {
            this.importQuesArr = [];
        }
    };
    ListQuestionsComponent.prototype.checkAllImported = function () {
        if (this.importQuesArr.length == this.newGlobQues['questionsList'].length) {
            return true;
        }
        else {
            return false;
        }
    };
    ListQuestionsComponent.prototype.checkImport = function (ques) {
        // // console.log('this.importQuesArrssssssssss',this.importQuesArr)
        var ind = this.importQuesArr.findIndex(function (item) {
            return item.questionId == ques.questionId;
        });
        if (ind > -1) {
            return true;
        }
        else {
            return false;
        }
    };
    ListQuestionsComponent.prototype.stopProp = function (event) {
        event.stopPropagation();
    };
    ListQuestionsComponent.prototype.importQues = function (globalQues, bool, event, i) {
        // if (!bool) {
        //   // var ind = this.importQuesArr.findIndex(x=>x == globalQues);
        //   // if(ind<0){
        //   this.importQuesArr.push(globalQues);
        //   // }else{
        //   //   this.importQuesArr.splice(ind,1);
        //   // }
        // } else {
        //   var ind = this.importQuesArr.findIndex(x => x == globalQues);
        //   if (ind < 0) {
        //     this.importQuesArr.push(globalQues);
        //   } else {
        //     this.importQuesArr.splice(ind, 1);
        //   }
        // }
        if (event.checked) {
            var ind = this.importQuesArr.findIndex(function (x) {
                return x.questionId == globalQues.questionId;
            });
            if (ind < 0) {
                this.importQuesArr.push(globalQues);
            }
            else {
                this.importQuesArr.splice(ind, 1);
                // this.getGlobalQuestionsBySection(globalQues.sectionName);
                if (this.importQuesArr.length == this.newGlobQues['questionsList'].length) {
                    this.impAllQues = true;
                }
                else {
                    this.impAllQues = false;
                }
                // this.getQuestionsBySection(this.categoryGlobalPath[this.categoryPath.length-1].sectionName)
            }
            if (this.importQuesArr.length == this.newGlobQuesBack['questionsList'].length) {
                this.impAllQues = true;
            }
            else {
                this.impAllQues = false;
            }
        }
        else {
            var ind = this.importQuesArr.findIndex(function (x) {
                return x.questionId == globalQues.questionId;
            });
            if (ind < 0) {
                this.importQuesArr.push(globalQues);
            }
            else {
                this.importQuesArr.splice(ind, 1);
                // this.getGlobalQuestionsBySection(globalQues.sectionName)
                if (this.importQuesArr.length == this.newGlobQuesBack['questionsList'].length) {
                    this.impAllQues = true;
                }
                else {
                    this.impAllQues = false;
                }
            }
        }
        //     // console.log(this.importQuesArr)
        //     // console.log("this.globalQues",this.globalQues)
        // // console.log("this.globalQuesBack",this.globalQuesBack)
    };
    ListQuestionsComponent.prototype.importQuesAns = function () {
        var _this = this;
        var questionList = [];
        var _loop_2 = function (i) {
            optionList = this_2.importQuesArr[i].optionsList;
            if (this_2.selectedItems.length) {
                this_2.importQuesArr[i].sectionId = this_2.selectedItems[0].id;
            }
            if (this_2.importQuesArr[i].questionTypeId == '2') {
                arr = [];
                multiIndArr = [];
                this_2.importQuesArr[i].optionsList.filter(function (item) {
                    arr = _this.importQuesArr[i].answer.split(',');
                    if (arr.includes(String(item.optionId))) {
                        multiIndArr.push(item);
                    }
                });
                // console.log("multiIndArr", multiIndArr)
                indArr = [];
                var _loop_3 = function (j) {
                    var indx = this_2.importQuesArr[i].optionsList.findIndex(function (item) { return item == _this.importQuesArr[i].optionsList[j]; });
                    if (indx > -1) {
                        indArr.push(indx);
                    }
                };
                for (var j = 0; j < multiIndArr.length; j++) {
                    _loop_3(j);
                }
                indArr.sort(function (a, b) {
                    return a - b;
                });
                this_2.importQuesArr[i].answer = indArr.join(',');
            }
            else if (this_2.importQuesArr[i].questionTypeId == '1') {
                optInd = this_2.importQuesArr[i].optionsList.findIndex(function (item) { return item.optionId == _this.importQuesArr[i].answer; });
                if (optInd > -1) {
                    this_2.importQuesArr[i].answer = String(optInd);
                }
            }
            else {
                this_2.importQuesArr[i].answer = this_2.importQuesArr[i].answer;
            }
        };
        var this_2 = this, optionList, arr, multiIndArr, indArr, optInd;
        for (var i = 0; i < this.importQuesArr.length; i++) {
            _loop_2(i);
        }
        // console.log("this.importQuesArr", this.importQuesArr)
        var data = {
            "questionsList": this.importQuesArr,
            "token": localStorage.getItem('token')
        };
        this.apiService.postData('reports/questions/multiquestionimport', data)
            .subscribe(function (res) {
            if (res['statusCode'] == "1") {
                _this.apiService.successAlert(res['statusMessage']);
                _this.impQues = {};
                _this.importQuesArr = [];
                _this.questionsSuccessCount = res['questionsSuccessCount'];
                _this.questionsExistCount = res['questionsExistCount'];
                _this.totalQuestionsCount = res['totalQuestionsCount'];
                _this.selectedItems = [];
                $('#globQuesModal').modal('hide');
                _this.getQuestions();
                _this.uploadedQues = res;
                document.getElementById('uploaded_ques').click();
                _this.impAllQues = false;
            }
        }, function (error) {
        });
    };
    ListQuestionsComponent.prototype.onItemSelect = function (item) {
        if (this.selectedSecId && this.selectedSecId != item.id) {
            this.createdQuestion = [];
        }
        // // console.log(item);
        // // console.log(this.selectedItems);
    };
    ListQuestionsComponent.prototype.getAllCategories = function () {
        var _this = this;
        // this.isQues = true;
        this.categoryPath = [];
        this.apiService.getAll('testmanagement/testsetup/listoftestcategorys?token=' + localStorage.getItem('token'))
            .subscribe(function (res) {
            if (res['statusCode'] == '1') {
                _this.allCategory = res;
                _this.allCategBack = __assign({}, _this.allCategory);
            }
        });
    };
    ListQuestionsComponent.prototype.getAllGlobalCategories = function () {
        var _this = this;
        // this.isQues = true;
        this.categoryGlobalPath = [];
        this.apiService.getAll('reports/questions/getglobalcategories?token=' + localStorage.getItem('token'))
            .subscribe(function (res) {
            if (res['statusCode'] == '1') {
                _this.allGlobalCategory = res;
                _this.allGlobalCategBack = __assign({}, _this.allGlobalCategory);
            }
            else {
                _this.allGlobalCategory = res;
                _this.allGlobalCategBack = __assign({}, _this.allGlobalCategory);
            }
        });
    };
    ListQuestionsComponent.prototype.getSubCategories = function (cat) {
        var _this = this;
        this.allCategory = {};
        this.categoryPath = [];
        this.categoryPath.push(cat);
        this.apiService.getAll('testmanagement/testsetup/gettestcatelogdetails?token=' + localStorage.getItem('token') + '&id=' + cat.testCategoryId + '&type=' + cat.type)
            .subscribe(function (res) {
            if (res['statusCode'] == '1') {
                _this.allCategory['listOfTestSubCategory'] = res['children'];
                _this.allCategBack = {};
                _this.allCategBack['listOfTestSubCategory'] = res['children'];
            }
        });
    };
    ListQuestionsComponent.prototype.getGlobalSubCategories = function (cat) {
        var _this = this;
        this.allGlobalCategory = {};
        this.categoryGlobalPath = [];
        this.categoryGlobalPath.push(cat);
        this.apiService.getAll('reports/questions/getglobalsubcatandsectionsbycategory?token=' + localStorage.getItem('token') + '&categoryname=' + cat.categoryName)
            .subscribe(function (res) {
            if (res['statusCode'] == '1') {
                _this.allGlobalCategory['listOfGlobalSubCategory'] = res['children'];
                _this.allGlobalCategBack = {};
                _this.allGlobalCategBack['listOfGlobalSubCategory'] = res['children'];
            }
        });
    };
    ListQuestionsComponent.prototype.getSubCategoriesBy = function (cat) {
        var _this = this;
        this.categoryPath.push(cat);
        this.allCategory = {};
        if (cat.type == '2') {
            this.apiService.getAll('testmanagement/testsetup/gettestcatelogdetails?token=' + localStorage.getItem('token') + '&id=' + cat.id + '&type=' + cat.type)
                .subscribe(function (res) {
                if (res['statusCode'] == '1') {
                    _this.allCategory['listOfTestSubCategory'] = res['children'];
                    _this.allCategBack = __assign({}, _this.allCategory);
                }
            });
        }
        else if (cat.type == '3') {
            this.getQuestionsBySection(cat.id);
        }
    };
    ListQuestionsComponent.prototype.getGlobalSubCategoriesBy = function (cat) {
        var _this = this;
        this.categoryGlobalPath.push(cat);
        this.allGlobalCategory = {};
        if (cat.type == '2') {
            this.apiService.getAll('reports/questions/getglobalsectionsbycatandsubcatnames?token=' + localStorage.getItem('token') + '&categoryname=' + this.categoryGlobalPath[0].categoryName + '&subcategoryname=' + this.categoryGlobalPath[this.categoryGlobalPath.length - 1].subCategoryName)
                .subscribe(function (res) {
                if (res['statusCode'] == '1') {
                    _this.allGlobalCategory['listOfGlobalSubCategory'] = res['children'];
                    _this.allGlobalCategBack = __assign({}, _this.allGlobalCategory);
                }
            });
        }
        else if (cat.type == '3') {
            this.getGlobalQuestionsBySection(cat.sectionName);
        }
    };
    ListQuestionsComponent.prototype.getGlobalQuestionsBySection = function (sec) {
        var _this = this;
        this.blockUI.start('Please Wait We Are Fetching Questions ...');
        // console.log(this.categoryGlobalPath)
        var url;
        if (this.categoryGlobalPath.length > 2) {
            url = 'reports/questions/getglobalquestionsbycatandsubcatandsectionsnames?token=' + localStorage.getItem('token') + '&sectionName=' + this.categoryGlobalPath[this.categoryGlobalPath.length - 1].sectionName + '&subcategoryname=' + this.categoryGlobalPath[this.categoryGlobalPath.length - 2].subCategoryName + '&categoryname=' + this.categoryGlobalPath[0].categoryName + '&hierarchy=' + this.categoryGlobalPath[this.categoryGlobalPath.length - 1].hierarchy;
        }
        else {
            url = 'reports/questions/getglobalquestionsbycatandsubcatandsectionsnames?token=' + localStorage.getItem('token') + '&sectionName=' + this.categoryGlobalPath[this.categoryGlobalPath.length - 1].sectionName + '&subcategoryname=' + this.categoryGlobalPath[0].categoryName + '&categoryname=' + this.categoryGlobalPath[0].categoryName + '&hierarchy=' + this.categoryGlobalPath[this.categoryGlobalPath.length - 1].hierarchy;
        }
        this.apiService.getAll(url)
            .subscribe(function (res) {
            _this.blockUI.stop();
            if (res['statusCode'] == '1') {
                _this.isGlobQues = true;
                _this.newGlobQues = res;
                _this.newGlobQuesBack = __assign({}, res);
                // if(res['questionsList'].length){
                //   // this.categoryGlobalPath.push({
                //   //   sectionName:res['questionsList'][0].sectionName
                //   // })
                // }
                if (_this.importQuesArr.length == _this.newGlobQuesBack['questionsList'].length) {
                    _this.impAllQues = true;
                }
                else {
                    _this.impAllQues = false;
                }
            }
            else {
                _this.apiService.errorAlert(res['statusMessage']);
            }
        }, function (error) {
            _this.blockUI.stop();
        });
    };
    ListQuestionsComponent.prototype.getQuestionsBySection = function (sec) {
        var _this = this;
        this.blockUI.start('Please Wait We Are Fetching Questions ...');
        this.apiService.getAll('reports/questions/getquestionsbysectionid?token=' + localStorage.getItem('token') + '&sectionId=' + sec)
            .subscribe(function (res) {
            _this.blockUI.stop();
            if (res['statusCode'] == '1') {
                _this.isQues = true;
                _this.globalQues = res;
                _this.globalQuesBack = __assign({}, _this.globalQues);
                if (res['questionsList'].length) {
                    // this.categoryPath[0] = {
                    //   id:res['questionsList'][0].sectionId,
                    //   name:res['questionsList'][0].sectionName
                    // }
                }
            }
            else {
                _this.apiService.errorAlert(res['statusMessage']);
                _this.blockUI.stop();
            }
        }, function (error) {
            _this.blockUI.stop();
        });
    };
    ListQuestionsComponent.prototype.getByAlphaGlob = function (alpha) {
        if (alpha == 'All') {
            this.isGlobQues = false;
            this.getAllGlobalCategories();
        }
        else {
            var listCatSubCat;
            if (!this.isGlobQues) {
                if (this.allGlobalCategBack && this.allGlobalCategBack['globalCategoriesList']) {
                    listCatSubCat = this.allGlobalCategBack['globalCategoriesList'].filter(function (item) {
                        return item.categoryName.toLowerCase()[0] == alpha;
                    });
                    this.allGlobalCategory['globalCategoriesList'] = listCatSubCat;
                }
                else if (this.allGlobalCategBack && this.allGlobalCategBack['listOfGlobalSubCategory']) {
                    listCatSubCat = this.allGlobalCategBack['listOfGlobalSubCategory'].filter(function (item) {
                        if (item && item.subCategoryName) {
                            return item.subCategoryName.toLowerCase()[0] == alpha;
                        }
                        else if (item && item.sectionName) {
                            return item.sectionName.toLowerCase()[0] == alpha;
                        }
                    });
                    this.allGlobalCategory['listOfGlobalSubCategory'] = listCatSubCat;
                }
            }
            else {
                if (this.newGlobQuesBack && this.newGlobQuesBack['questionsList']) {
                    listCatSubCat = this.newGlobQuesBack['questionsList'].filter(function (item) {
                        return item.qustionText.toLowerCase()[0] == alpha;
                    });
                    this.newGlobQues['questionsList'] = listCatSubCat;
                }
            }
        }
    };
    ListQuestionsComponent.prototype.getByAlpha = function (alpha) {
        if (alpha == 'All') {
            this.isQues = false;
            this.getAllCategories();
        }
        else {
            var listCatSubCat;
            if (!this.isQues) {
                if (this.allCategBack && this.allCategBack['listOfTestCategory']) {
                    listCatSubCat = this.allCategBack['listOfTestCategory'].filter(function (item) {
                        return item.testCategoryName.toLowerCase()[0] == alpha;
                    });
                    this.allCategory['listOfTestCategory'] = listCatSubCat;
                }
                else if (this.allCategBack && this.allCategBack['listOfTestSubCategory']) {
                    listCatSubCat = this.allCategBack['listOfTestSubCategory'].filter(function (item) {
                        return item.name.toLowerCase()[0] == alpha;
                    });
                    this.allCategory['listOfTestSubCategory'] = listCatSubCat;
                }
            }
            else {
                if (this.globalQuesBack && this.globalQuesBack['questionsList']) {
                    listCatSubCat = this.globalQuesBack['questionsList'].filter(function (item) {
                        return item.qustionText.toLowerCase()[0] == alpha;
                    });
                    this.globalQues['questionsList'] = listCatSubCat;
                }
            }
        }
    };
    ListQuestionsComponent.prototype.gotoPath = function (catPath, i) {
        if (catPath.type == '1') {
            this.isQues = false;
            this.getSubCategories(catPath);
            this.categoryPath.splice(i, this.categoryPath.length - i - 1);
        }
        else if (catPath.type == '2') {
            this.isQues = false;
            this.getSubCategoriesBy(catPath);
            this.categoryPath.splice(i, this.categoryPath.length - i - 1);
        }
        else if (catPath.type == '3') {
            this.getSubCategoriesBy(catPath);
            this.categoryPath.splice(i, this.categoryPath.length - i - 1);
        }
    };
    ListQuestionsComponent.prototype.gotoPathGlobal = function (catPath, i) {
        if (catPath.type == '1') {
            this.isGlobQues = false;
            this.getGlobalSubCategories(catPath);
            this.categoryGlobalPath.splice(i, this.categoryGlobalPath.length - i - 1);
        }
        else if (catPath.type == '2') {
            this.isGlobQues = false;
            this.getGlobalSubCategoriesBy(catPath);
            this.categoryGlobalPath.splice(i, this.categoryGlobalPath.length - i - 1);
        }
        else if (catPath.type == '3') {
            this.getGlobalQuestionsBySection(catPath);
            this.categoryGlobalPath.splice(i, this.categoryGlobalPath.length - i - 1);
        }
    };
    ListQuestionsComponent.prototype.viewQuestion = function (ques) {
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
            var _loop_4 = function (i) {
                ind = this_3.hoverGlobQues['optionsList'].findIndex(function (item) {
                    return item.optionId == answerId[i];
                });
                if (ind > -1) {
                    this_3.checkBoxAnswers.push(ind);
                }
            };
            var this_3 = this, ind;
            for (var i = 0; i < answerId.length; i++) {
                _loop_4(i);
            }
        }
        // console.log("this.checkBoxAnswers",this.checkBoxAnswers)
    };
    ListQuestionsComponent.prototype.onLinkClick = function (event) {
        // // console.log(event)
        // if(event.index == 1){
        //   this.isGlobal = false;
        // }else if (event.index == 2){
        //   this.isGlobal = true;
        // }
        // console.log(event)
        if (!event.checked) {
            this.isGlobal = false;
        }
        else {
            this.isGlobal = true;
            this.getTestInstance();
        }
    };
    ListQuestionsComponent.prototype.getTestInstance = function () {
        var _this = this;
        this.dropdownListInstance = [];
        this.apiService.getAll('reports/questions/listoftestinstance?token=' + localStorage.getItem('token'))
            .subscribe(function (res) {
            if (res['statusCode'] == '1') {
                for (var i = 0; i < res['tsetInstancesList'].length; i++) {
                    _this.dropdownListInstance.push({
                        id: res['tsetInstancesList'][i].testInstanceId,
                        itemName: res['tsetInstancesList'][i].testInstanceName,
                        sections: res['tsetInstancesList'][i].sectionList,
                        isGlobal: res['tsetInstancesList'][i].isGlobalInstance
                    });
                }
            }
        });
    };
    ListQuestionsComponent.prototype.deleteOption = function (i) {
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
    ListQuestionsComponent.prototype.showDelete = function (i) {
        $('#close_' + i).css('visibility', 'visible');
    };
    ListQuestionsComponent.prototype.hideDelete = function (i) {
        $('#close_' + i).css('visibility', 'hidden');
    };
    ListQuestionsComponent.prototype.getCategoryAndSubCategoryList = function () {
        var _this = this;
        this.apiService.getAll("testmanagement/globalcategorylist?token=" + localStorage.getItem('token')).subscribe(function (data) {
            if (data['statusCode'] == 1) {
                for (var i = 0; i < data['globalCategoryList'].length; i++) {
                    _this.dropdownListCateg.push({
                        id: data['globalCategoryList'][i].id,
                        itemName: data['globalCategoryList'][i].name,
                        type: data['globalCategoryList'][i].type
                    });
                }
            }
        }, function (error) {
            // console.log(error)
        }, function () {
        });
    };
    ListQuestionsComponent.prototype.onCategSelect = function () {
        var _this = this;
        this.obj = this.selectedCateg[0];
        // // console.log("Type=" + this.obj.type)
        // // console.log("Id=" + this.obj.id)
        if (this.obj.type != 0 && this.obj.id != 0) {
            this.apiService.getAll("testmanagement/getsubcategorylist?token=" + localStorage.getItem('token') + "&type=" + this.obj.type + "&id=" + this.obj.id).subscribe(function (data) {
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
    // createSection(data) {
    //   this.seactionSuccessMessage = false;
    //   this.seactionFailMessage = false;
    //   // console.log(data)
    //   const formData = new FormData();
    //   if (this.obj.type != 0) {
    //     this.type = this.obj.type;
    //     this.subcategoryId = this.obj.id
    //     if (this.type == 2) {
    //       formData.append("testCategoryId", this.categoryId)
    //       formData.append("testSubCategoryId", this.subcategoryId)
    //     } if (this.type == 1) {
    //       this.subcategoryId = 0;
    //       formData.append("testCategoryId", this.categoryId)
    //       formData.append("testSubCategoryId", this.subcategoryId)
    //     }
    //   }
    //   formData.append("testSectionName", this.secCatName);
    //   formData.append("token", localStorage.getItem('token'))
    //   this.apiService.postData("testmanagement/createsection", formData).subscribe(
    //     (data) => {
    //       if (data['statusCode'] == 1) {
    //         this.seactionSuccessMessage = true;
    //         this.sectionStatusMessage = data['statusMessage'];
    //         this.getAllSections();
    //         $('#addSectionModal').modal('hide');
    //         setTimeout(() => {
    //           this.seactionSuccessMessage = false;
    //         }, 3000)
    //         this.apiService.successAlert(data['statusMessage'])
    //         this.selectedCateg = [];
    //         this.secCatName  = []
    //         this.oldSection = !this.oldSection;
    //       } else {
    //         this.seactionFailMessage = true;
    //         this.sectionStatusMessage = data['statusMessage'];
    //         setTimeout(() => {
    //           this.seactionFailMessage = false;
    //         }, 3000)
    //       }
    //     },
    //     (error) => {
    //       // console.log(error)
    //     },
    //     () => { 
    //     }
    //   );
    // }
    ListQuestionsComponent.prototype.createSection = function (data) {
        var _this = this;
        this.seactionSuccessMessage = false;
        this.seactionFailMessage = false;
        var formData = new FormData();
        formData.append("testSectionName", this.secCatName);
        formData.append("token", localStorage.getItem('token'));
        formData.append("id", this.selectedCateg.length ? this.selectedCateg[0].id : 0);
        formData.append("type", this.selectedCateg.length ? this.selectedCateg[0].type : 0);
        formData.append("testInstanceId", this.selectedItemsInstance.length ? this.selectedItemsInstance[0].id : 0);
        this.apiService.postData("testmanagement/testsetup/createcatalogueinstancesection", formData).subscribe(function (data) {
            if (data['statusCode'] == 1) {
                _this.getTestInstance();
                _this.seactionSuccessMessage = true;
                _this.sectionStatusMessage = data['statusMessage'];
                // this.getAllSections();
                $('#addSectionModal').modal('hide');
                setTimeout(function () {
                    _this.seactionSuccessMessage = false;
                }, 3000);
                _this.apiService.successAlert(data['statusMessage']);
                _this.selectedCateg = [];
                _this.selectedItemsInstance = [];
                _this.secCatName = null;
                _this.oldSection = !_this.oldSection;
            }
            else {
                _this.seactionFailMessage = true;
                _this.sectionStatusMessage = data['statusMessage'];
                setTimeout(function () {
                    _this.seactionFailMessage = false;
                }, 3000);
            }
        }, function (error) {
            // console.log(error)
        }, function () {
        });
    };
    ListQuestionsComponent.prototype.toggleOldNewSections = function () {
        this.oldSection = !this.oldSection;
    };
    ListQuestionsComponent.prototype.pushSections = function (event) {
        this.dropdownList = [];
        if (event.sections) {
            for (var i = 0; i < event.sections.length; i++) {
                this.dropdownList.push({
                    id: event.sections[i].sectionId,
                    itemName: event.sections[i].sectionName
                });
            }
        }
        document.getElementById('mul_close').click();
    };
    ListQuestionsComponent.prototype.removeSections = function () {
        this.dropdownList = [];
        this.selectedItems = [];
        document.getElementById('mul_close').click();
    };
    ListQuestionsComponent.prototype.removeSec = function () {
        this.selectedItems = [];
        document.getElementById('sec_mul').click();
    };
    ListQuestionsComponent.prototype.addSec = function () {
        document.getElementById('sec_mul').click();
    };
    ListQuestionsComponent.prototype.impQuestoSec = function () {
        this.selectedItemsInstance = [];
        this.selectedItems = [];
    };
    ListQuestionsComponent.prototype.onInstanceSelect = function (event) {
        var _this = this;
        this.dropdownListCateg = [];
        this.selectedCateg = [];
        this.apiService.getAll('testmanagement/testsetup/listoftestinstancerootconfigs?token=' + localStorage.getItem('token') + '&testInstanceId=' + event.id)
            .subscribe(function (res) {
            if (res['statusCode'] == 1) {
                for (var i = 0; i < res['testInstanceConfigList'].length; i++) {
                    _this.dropdownListCateg.push({
                        id: res['testInstanceConfigList'][i].id,
                        itemName: res['testInstanceConfigList'][i].name,
                        type: res['testInstanceConfigList'][i].type
                    });
                }
            }
        });
    };
    ListQuestionsComponent.prototype.clearCateg = function () {
        this.selectedCateg = [];
        this.dropdownListCateg = [];
        this.heirarchy = null;
    };
    ListQuestionsComponent.ctorParameters = function () { return [
        { type: _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_2__["AllServicesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    __decorate([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_3__["BlockUI"])(),
        __metadata("design:type", Object)
    ], ListQuestionsComponent.prototype, "blockUI", void 0);
    ListQuestionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-questions',
            template: __webpack_require__(/*! raw-loader!./list-questions.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/list-questions/list-questions.component.html"),
            styles: [__webpack_require__(/*! ./list-questions.component.css */ "./src/app/Components/list-questions/list-questions.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_2__["AllServicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ListQuestionsComponent);
    return ListQuestionsComponent;
}());



/***/ }),

/***/ "./src/app/Modules/list-questions/list-questions-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Modules/list-questions/list-questions-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ListQuestionsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListQuestionsRoutingModule", function() { return ListQuestionsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Pipes_question_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../Pipes/question-filter.pipe */ "./src/app/Pipes/question-filter.pipe.ts");
/* harmony import */ var _Components_list_questions_list_questions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../Components/list-questions/list-questions.component */ "./src/app/Components/list-questions/list-questions.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm5/angular2-multiselect-dropdown.js");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var ngx_smart_popover__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-smart-popover */ "./node_modules/ngx-smart-popover/fesm5/ngx-smart-popover.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [{
        path: "",
        component: _Components_list_questions_list_questions_component__WEBPACK_IMPORTED_MODULE_5__["ListQuestionsComponent"]
    }];
var ListQuestionsRoutingModule = /** @class */ (function () {
    function ListQuestionsRoutingModule() {
    }
    ListQuestionsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_Components_list_questions_list_questions_component__WEBPACK_IMPORTED_MODULE_5__["ListQuestionsComponent"], _Pipes_question_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["QuestionFilterPipe"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"],
                angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["AngularMultiSelectModule"], ng_block_ui__WEBPACK_IMPORTED_MODULE_8__["BlockUIModule"].forRoot(), _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_10__["MatRadioModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggleModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_12__["MatTabsModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], ngx_smart_popover__WEBPACK_IMPORTED_MODULE_14__["PopoverModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ListQuestionsRoutingModule);
    return ListQuestionsRoutingModule;
}());



/***/ }),

/***/ "./src/app/Modules/list-questions/list-questions.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/Modules/list-questions/list-questions.module.ts ***!
  \*****************************************************************/
/*! exports provided: ListQuestionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListQuestionsModule", function() { return ListQuestionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _list_questions_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-questions-routing.module */ "./src/app/Modules/list-questions/list-questions-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ListQuestionsModule = /** @class */ (function () {
    function ListQuestionsModule() {
    }
    ListQuestionsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _list_questions_routing_module__WEBPACK_IMPORTED_MODULE_1__["ListQuestionsRoutingModule"]
            ]
        })
    ], ListQuestionsModule);
    return ListQuestionsModule;
}());



/***/ }),

/***/ "./src/app/Pipes/question-filter.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/Pipes/question-filter.pipe.ts ***!
  \***********************************************/
/*! exports provided: QuestionFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionFilterPipe", function() { return QuestionFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var QuestionFilterPipe = /** @class */ (function () {
    function QuestionFilterPipe() {
    }
    QuestionFilterPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        // console.log(value)
        return null;
    };
    QuestionFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'questionFilter'
        })
    ], QuestionFilterPipe);
    return QuestionFilterPipe;
}());



/***/ })

}]);
//# sourceMappingURL=Modules-list-questions-list-questions-module.js.map