(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/activation/activation.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/activation/activation.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<block-ui>\n\n</block-ui>\n<section class=\"tenant_reg_sec\">\n    <div class=\"tenant_reg_gradient\">\n        <div class=\"p-5\">\n            <img src=\"./../../../assets/images/ncd_finalized_logo.png\" width=\"144px\" height=\"50px\" style=\"margin:0.28rem;padding-top:2px ;padding-bottom:2px ;\" />\n        </div>\n        <div class=\"\">\n            <div class=\"activate_text\">\n                <h3 class=\"animated slideInDown\" *ngIf=\"tenantActivated\">\n                    Your Account Activated Successfully.Please Set Your Password Now!\n                </h3>\n                <h3 class=\"animated slideInDown\" *ngIf=\"allReadyActivated\">\n                    Your Account Already Activated. Please Set Your Password Now!\n                </h3>\n            </div>\n\n            <div class=\"form_tenant_reg\">\n                <h3 class=\" text-center signin_black\">Set Password</h3>\n                <hr class=\"signin_brdr\">\n                <div class=\"animated fadeInLeft\">\n                    <form class=\"mt-4 mb-5 set_pas_frm\" #setPass=\"ngForm\">\n                        <!-- <div class=\"form-group\">\n                                <label for=\"currentpassword\">Current Password</label>\n                                <input type=\"password\" class=\"form-control\" name=\"currentpassword\" id=\"currentpassword\" #currentpassword=\"ngModel\" ngModel\n                                    placeholder=\"Current Password\">\n                            </div> -->\n                        <div class=\"form-group\">\n                            <label for=\"newpassword\">New Password</label>\n                            <input type=\"password\" class=\"form-control\" name=\"newpassword\" #newpassword=\"ngModel\" ngModel placeholder=\"New Password\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"newpassword\">Confirm Password</label>\n                            <input type=\"password\" class=\"form-control\" name=\"confirmpassword\" #confirmpassword=\"ngModel\" ngModel placeholder=\"Confirm Password\">\n                        </div>\n                        <div class=\"form-group\">\n                            <button class=\"btn btn-primary form-control\" (click)=\"setPassword(setPass)\">Confirm</button>\n                        </div>\n                    </form>\n                </div>\n\n                <!-- <h4 class=\"animated slideInUp\">India's one and only leading corporate online test platform.</h4> -->\n            </div>\n\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/administer-test/administer-test.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/administer-test/administer-test.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<block-ui>\n\n</block-ui>\n<div class=\"reports_sec pt-4 pb-4 pl-4 pr-4\">\n    <div *ngIf=\"localInstance\">\n        <div class=\"row\">\n            <div class=\"col-sm-8 report_txt\">\n                <h4 class=\"p-0\">\n                    <p>List of Test Instances</p>\n                </h4>\n                \n            </div>\n\n            <div class=\"col-sm-4 text-right\">\n                <span *ngIf=\"!isRecruiter\">{{tenantName | titlecase}}</span>\n                <span *ngIf=\"isRecruiter\">My Instances</span>\n\n                <mat-slide-toggle class=\"example-margin pl-3 pr-3\" [checked]=\"!localInstance\" [color]=\"color\" (change)=\"toggleInstance($event)\">\n                </mat-slide-toggle>\n                <span *ngIf=\"!isRecruiter\">Global</span>\n                <span *ngIf=\"isRecruiter\">Global Instances</span>\n            </div>\n            <div class=\"col-sm-12\">\n                <hr class=\"m-0\">\n                \n            </div>\n        </div>\n        <div class=\"row\" style=\"margin:0.5rem;background: white;border-radius: 5px;\">\n                 \n            <tag-input style=\"width: 100%\" [(ngModel)]=\"selectedTags\"\n           [onlyFromAutocomplete]=\"true\"\n           [secondaryPlaceholder]=\"'Search Using Tags'\"\n           (onAdd)=\"itemAdded($event);\"\n           (onRemove)=\"itemRemoved($event);\"\n           #input\n           >\n\n           <ng-template  item-template let-item=\"item\" let-index=\"index\" >\n            <span>\n               {{ item.display }}\n            </span>\n            <span *ngIf=\"item.removable\" (click)=\"input.removeItem(item, index)\" class=\"ng2-tag__remove-button\">\n                x\n            </span>\n           \n        </ng-template>\n    <tag-input-dropdown \n    [autocompleteItems]=\"localTagList\"\n    [keepOpen]=\"false\"\n    [showDropdownIfEmpty]=\"true\"\n    [dynamicUpdate]=\"false\" >\n\n    \n    </tag-input-dropdown>\n</tag-input>  \n                               \n            <!-- <input type=\"text\" placeholder=\"Please Search Tags\" class=\"form-control\" [matAutocomplete]=\"auto1\" [(ngModel)]=\"searchTag1\"\n              [ngModelOptions]=\"{standalone: true}\">\n        <mat-autocomplete #auto1=\"matAutocomplete\" (optionSelected)='getInstancesByTags($event.option.value)'>\n            <mat-option *ngFor=\"let option of localTagList\" [value]=\"option.instanceModelTagName\">\n                {{option.instanceModelTagName}}\n            </mat-option>\n        </mat-autocomplete> -->\n        </div>\n        <div class=\" filter_tbl boxShadow  ml-1 mr-1\" *ngIf=\"testSetups && testSetups['listOfTestInstances'] && testSetups['listOfTestInstances'].length\">\n            \n            <table class=\"table mb-0\" *ngIf=\"selectedTags.length==0\" style=\"text-align: center;\">\n                <tr style=\"color: #ffffff;background-color: #425db5;\" class=\"cursor_initial\">\n                    <th>S.No</th>\n                    <th></th>\n                    <th style=\"text-align: left;\">Instance Title</th>\n                    <th>Tags</th>\n                    <th *ngIf=\"!isRecruiter\" >Test Owner</th>\n\n                    <th>Question Count</th>\n                    <th>Rating</th>\n                    <th></th>\n                    \n                <!-- <ngx-loading   id=\"1\" [show]=\"true\"  [config]=\"{ backdropBorderRadius: '3px',fullScreenBackdrop:false }\"></ngx-loading>     -->\n\n                    \n                    \n                </tr>\n\n                <tr *ngFor=\"let test of testSetups['listOfTestInstances'] | paginate: { itemsPerPage: 10, currentPage: p_local_1,id: local_page_1,totalItems: localInstanceCount};let i=index\" \n                (click)=\"stopProp($event);showInstance(test)\">\n\n                \n                    \n                \n                    <td style=\"text-align: right\">\n                        <span *ngIf=\"localPageNo==1\" class=\" pr-3\">{{(i+1)}}.</span>\n                        <span *ngIf=\"localPageNo!=1\" class=\" pr-3\">{{(i+1)+((localPageNo-1)*10) }}.</span>\n\n                    </td>\n                    <td style=\"text-align: center\">\n                        <span class=\"upward_arrow\" *ngIf=\"test.isGlobalInstance == '1'\" [popoverOnHover]=\"true\" [popover]=\"exported\">\n                            <i class=\"material-icons\">\n                                arrow_upward\n                            </i>\n                        </span>\n                        <span class=\"downward_arrow\" *ngIf=\"test.isGlobalInstance == '2'\"  [popoverOnHover]=\"true\" [popover]=\"imported\">\n                            <i class=\"material-icons\">\n                                arrow_downward\n                            </i>\n                        </span>\n                        <popover-content #exported \n                            title=\"\"\n                            placement=\"right\"\n                            [animation]=\"true\" \n                                style=\"box-shadow: 10px 10px 5px #aaaaaa;\">\n                            <span style=\"color: #646363;\">Exported Instance</span>  \n                            \n                            </popover-content>\n                            <popover-content #imported \n                            title=\"\"\n                            placement=\"right\"\n                            [animation]=\"true\" \n                                style=\"box-shadow: 10px 10px 5px #aaaaaa;\">\n                            <span style=\"color: #646363;\">Imported Instance</span>  \n                            \n                            </popover-content>\n                    </td>\n                    <td  style=\"text-align: left;width: 22%;\">\n\n                        {{test.instanceTitle}}\n                    </td>\n           \n                            <td *ngIf=\"test.processing\" style=\"text-align: left\" class=\"col-12\" colspan=\"4\">\n                                    <span style=\"color: #28a745;\n                                    font-size: small;\n                                    font-weight: 900;\n                                    letter-spacing: 2px;\">\n                                    Exporting\n                                    <span class=\"saving\" style=\"letter-spacing: 5px;\n                                    color: #001454;\n                                    font-size: 17px;\n                                    font-size: x-large;\">.<span>.</span><span>.</span><span>.</span></span>\n                                </span>\n                                    \n                                    <ngx-loading   id=\"1\" [show]=\"true\"  [config]=\"{ primaryColour: '#425db5',secondaryColour:'#2ECC71 ',tertiaryColour:'rgba(255,0,0,0.3)',backdropBackgroundColour:'#90909000', backdropBorderRadius: '3px'}\" ></ngx-loading>    \n                                 \n                    \n                    </td>\n                    <td *ngIf=\"!test.processing\" style=\"text-align:center\" >\n                        <span *ngIf=\"test.instanceModelTags && test.instanceModelTags !='null'\">\n                            <!-- {{test.instanceModelTags.split(',').length}}  -->\n                            <p *ngIf=\"test.instanceModelTags.split(',').length<=2\">  <span  class=\"badge badge-success\" style=\"margin:2px\" *ngFor=\"let tag of test.instanceModelTags.split(',') | slice:0:2;\">\n                                <span *ngIf=\"tag.length>11\">{{tag | slice:0:10}}..</span>\n                                <span *ngIf=\"tag.length<=11\" >{{tag}}</span>\n                                \n                                \n                            </span>  </p>\n                            <p *ngIf=\"test.instanceModelTags.split(',').length>2\" title={{test.instanceModelTags}} ><span class=\"badge badge-success\" style=\"margin:2px\" *ngFor=\"let tag of test.instanceModelTags.split(',') | slice:0:2;\" >\n                                    <span *ngIf=\"tag.length>11\" title={{tag}}>{{tag | slice:0:10}}..</span>\n                                    <span *ngIf=\"tag.length<=11\" >{{tag}}</span>\n                            </span>..</p>  \n                        </span>\n                        \n                    </td>\n                    <td *ngIf=\"!isRecruiter && !test.processing\">{{test.testOwner}}</td>\n\n                    <td *ngIf=\"!test.processing\" >{{test.instanceQuestionCount }}</td>\n                    <td *ngIf=\"!test.processing\"><star-rating [starType]=\"'svg'\"   [getHalfStarVisible]=\"getHalfStarVisible\" [showHalfStars]=\"true\" [readOnly]=\"true\" [rating]=\"test.avgOverallRating\"></star-rating> <span title=\"No. of Ratings \" class=\"badge badge-success\" style=\"position: absolute;margin-top: -21px;margin-left: 60px;font-size: 11px;border-radius: 1.25rem;background-color: #ffe10ab8;color: #7708da;\"> {{test.ratingCount}}</span></td>\n                    <td *ngIf=\"!test.processing\" class=\"text-center\">\n                         \n                        <!-- <span class=\"test_inst_tag\">\n                            <span (click)=\"stopProp($event)\" [ngClass]=\"{'not_allowed': !test.instanceModelTags || test.instanceModelTags == 'null'}\">\n                                <i class=\"material-icons\">\n                                    local_offer\n                                </i>\n                            </span>\n                            <span class=\"boxShadow\" [ngClass]=\"{'tags_view_tbl': test.instanceModelTags && test.instanceModelTags != 'null'}\" *ngIf=\"test.instanceModelTags && test.instanceModelTags !='null'\">\n                                <span *ngFor=\"let test of test.instanceModelTags.split(',')\">\n                                    <span *ngIf=\"test != 'null'\">{{test}}</span>\n                                </span>\n                            </span>\n                        </span> -->\n\n                        <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\" (click)=\"stopProp($event)\"\n                            class=\"vert_Btn\">\n                            <span class=\"\">\n                                <i class=\"material-icons\">\n                                    more_vert\n                                </i>\n                            </span>\n                        </button>\n                        <mat-menu #menu=\"matMenu\" class=\"instance-menu\">\n                            <button mat-menu-item (click)=\"exportInstance(test)\" [disabled]=\"test.isGlobalInstance != '0' || test.isOwner != '1'\">\n                                <span>Export</span>\n                            </button>\n                            \n                            <button mat-menu-item (click)=\"goToLink(test.encryptedInstanceId)\" >\n                               <span>Share</span> \n                            </button>\n                            <button mat-menu-item [disabled]=\"test.instanceQuestionCount == '0'\" [routerLink]=\"['/test-config/',test.instanceId,'create']\">\n                                <span>Administer</span>\n                            </button>\n                        </mat-menu>\n\n                    </td>\n                </tr>\n            </table>\n            <table class=\"table mb-0\" *ngIf=\"selectedTags.length!=0\" style=\"text-align: center;\">\n                <tr style=\"color: #ffffff;background-color: #425db5;\" class=\"cursor_initial\">\n                    <th>S.No</th>\n                    <th></th>\n                    <th style=\"text-align: left;\">Instance Title</th>\n                    <th>Tags</th>\n                    <th *ngIf=\"!isRecruiter\" >Test Owner</th>\n\n                    <th>Question Count</th>\n                    <th>Rating</th>\n                    <th></th>\n                    \n                <!-- <ngx-loading   id=\"1\" [show]=\"true\"  [config]=\"{ backdropBorderRadius: '3px',fullScreenBackdrop:false }\"></ngx-loading>     -->\n\n                    \n                    \n                </tr>\n\n                <tr *ngFor=\"let test of testSetups['listOfTestInstances']  | search:'instanceModelTags':query;let i=index\" \n                (click)=\"stopProp($event);showInstance(test)\">\n\n                \n                    \n                \n                    <td style=\"text-align: right\">\n                        <span *ngIf=\"localPageNo==1\" class=\" pr-3\">{{(i+1)}}.</span>\n                        <span *ngIf=\"localPageNo!=1\" class=\" pr-3\">{{(i+1)+((localPageNo-1)*10) }}.</span>\n\n                    </td>\n                    <td style=\"text-align: center\">\n                        <span class=\"upward_arrow\" *ngIf=\"test.isGlobalInstance == '1'\" [popoverOnHover]=\"true\" [popover]=\"exported\">\n                            <i class=\"material-icons\">\n                                arrow_upward\n                            </i>\n                        </span>\n                        <span class=\"downward_arrow\" *ngIf=\"test.isGlobalInstance == '2'\"  [popoverOnHover]=\"true\" [popover]=\"imported\">\n                            <i class=\"material-icons\">\n                                arrow_downward\n                            </i>\n                        </span>\n                        <popover-content #exported \n                            title=\"\"\n                            placement=\"right\"\n                            [animation]=\"true\" \n                                style=\"box-shadow: 10px 10px 5px #aaaaaa;\">\n                            <span style=\"color: #646363;\">Exported Instance</span>  \n                            \n                            </popover-content>\n                            <popover-content #imported \n                            title=\"\"\n                            placement=\"right\"\n                            [animation]=\"true\" \n                                style=\"box-shadow: 10px 10px 5px #aaaaaa;\">\n                            <span style=\"color: #646363;\">Imported Instance</span>  \n                            \n                            </popover-content>\n                    </td>\n                    <td  style=\"text-align: left;width: 22%;\">\n\n                        {{test.instanceTitle}}\n                    </td>\n           \n                            <td *ngIf=\"test.processing\" style=\"text-align: left\" class=\"col-12\" colspan=\"4\">\n                                    <span style=\"color: #28a745;\n                                    font-size: small;\n                                    font-weight: 900;\n                                    letter-spacing: 2px;\">\n                                    Exporting\n                                    <span class=\"saving\" style=\"letter-spacing: 5px;\n                                    color: #001454;\n                                    font-size: 17px;\n                                    font-size: x-large;\">.<span>.</span><span>.</span><span>.</span></span>\n                                </span>\n                                    \n                                    <ngx-loading   id=\"1\" [show]=\"true\"  [config]=\"{ primaryColour: '#425db5',secondaryColour:'#2ECC71 ',tertiaryColour:'rgba(255,0,0,0.3)',backdropBackgroundColour:'#90909000', backdropBorderRadius: '3px'}\" ></ngx-loading>    \n                                 \n                    \n                    </td>\n                    <td *ngIf=\"!test.processing\" style=\"text-align:center\" >\n                        <span *ngIf=\"test.instanceModelTags && test.instanceModelTags !='null'\">\n                            <!-- {{test.instanceModelTags.split(',').length}}  -->\n                            <p *ngIf=\"test.instanceModelTags.split(',').length<=2\">  <span  class=\"badge badge-success\" style=\"margin:2px\" *ngFor=\"let tag of test.instanceModelTags.split(',') | slice:0:2;\">\n                                <span *ngIf=\"tag.length>11\">{{tag | slice:0:10}}..</span>\n                                <span *ngIf=\"tag.length<=11\" >{{tag}}</span>\n                                \n                                \n                            </span>  </p>\n                            <p *ngIf=\"test.instanceModelTags.split(',').length>2\" title={{test.instanceModelTags}} ><span class=\"badge badge-success\" style=\"margin:2px\" *ngFor=\"let tag of test.instanceModelTags.split(',') | slice:0:2;\" >\n                                    <span *ngIf=\"tag.length>11\" title={{tag}}>{{tag | slice:0:10}}..</span>\n                                    <span *ngIf=\"tag.length<=11\" >{{tag}}</span>\n                            </span>..</p>  \n                        </span>\n                        \n                    </td>\n                    <td *ngIf=\"!isRecruiter && !test.processing\">{{test.testOwner}}</td>\n\n                    <td *ngIf=\"!test.processing\" >{{test.instanceQuestionCount }}</td>\n                    <td *ngIf=\"!test.processing\"><star-rating [starType]=\"'svg'\"   [getHalfStarVisible]=\"getHalfStarVisible\" [showHalfStars]=\"true\" [readOnly]=\"true\" [rating]=\"test.avgOverallRating\"></star-rating> <span title=\"No. of Ratings \" class=\"badge badge-success\" style=\"position: absolute;margin-top: -21px;margin-left: 60px;font-size: 11px;border-radius: 1.25rem;background-color: #ffe10ab8;color: #7708da;\"> {{test.ratingCount}}</span></td>\n                    <td *ngIf=\"!test.processing\" class=\"text-center\">\n\n                        <!-- <span class=\"test_inst_tag\">\n                            <span (click)=\"stopProp($event)\" [ngClass]=\"{'not_allowed': !test.instanceModelTags || test.instanceModelTags == 'null'}\">\n                                <i class=\"material-icons\">\n                                    local_offer\n                                </i>\n                            </span>\n                            <span class=\"boxShadow\" [ngClass]=\"{'tags_view_tbl': test.instanceModelTags && test.instanceModelTags != 'null'}\" *ngIf=\"test.instanceModelTags && test.instanceModelTags !='null'\">\n                                <span *ngFor=\"let test of test.instanceModelTags.split(',')\">\n                                    <span *ngIf=\"test != 'null'\">{{test}}</span>\n                                </span>\n                            </span>\n                        </span> -->\n\n                        <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\" (click)=\"stopProp($event)\"\n                            class=\"vert_Btn\">\n                            <span class=\"\">\n                                <i class=\"material-icons\">\n                                    more_vert\n                                </i>\n                            </span>\n                        </button>\n                        <mat-menu #menu=\"matMenu\" class=\"instance-menu\">\n                            <button mat-menu-item (click)=\"exportInstance(test)\" [disabled]=\"test.isGlobalInstance != '0' || test.isOwner != '1'\">\n                                <span>Export</span>\n                            </button>\n                            <button mat-menu-item [disabled]=\"test.instanceQuestionCount == '0'\" [routerLink]=\"['/test-config/',test.instanceId,'create']\">\n                                <span>Administer</span>\n                            </button>\n                        </mat-menu>\n\n                    </td>\n                </tr>\n            </table>\n            <div *ngIf=\"selectedTags.length==0\" class=\"ques_sec_div col-sm-12 text-center\" style=\"padding: 1rem;\">\n                <pagination-controls (pageChange)=\"p_local_1 = $event;onLocalPageChange($event)\" previousLabel=\"<\" nextLabel=\">\" [id]=\"local_page_1\"></pagination-controls>\n            <!-- <jw-pagination [items]=\"items\" (changePage)=\"onChangePage($event)\"></jw-pagination> -->\n        </div>\n        </div>\n        <div class=\"row filter_tbl boxShadow\" *ngIf=\"testSetups && testSetups['listOfTestInstances'] && !testSetups['listOfTestInstances'].length\">\n            <table class=\"table mb-0\">\n                <tr style=\"color: #ffffff;background-color: #425db5;\" class=\"cursor_initial\">\n                    <th>S.No</th>\n                    <th>Instance Title</th>\n                    <th>Test Owner</th>\n\n                    <th>Test Count</th>\n                    <th>Rating</th>\n                </tr>\n                <tr class=\"text-center no_filter_tr\">\n                    <td class=\"errorTxt\" colspan=\"4\">{{testSetups.statusMessage}}</td>\n                </tr>\n            </table>\n        </div>\n    </div>\n    <div *ngIf=\"!localInstance\">\n        <div class=\"row\">\n            <div class=\"col-sm-9 report_txt\">\n                <h4 class=\"p-0\">\n                    <p>List of Test Instances</p>\n                </h4>\n            </div>\n            <div class=\"col-sm-3 text-right\">\n                <span>{{tenantName | titlecase}}</span>\n                <mat-slide-toggle class=\"example-margin pl-3 pr-3\" [checked]=\"!localInstance\" [color]=\"color\" (change)=\"toggleInstance($event)\">\n                </mat-slide-toggle>\n                <span>Global</span>\n            </div>\n            <div class=\"col-sm-12\">\n                <hr class=\"m-0\">\n            </div>\n        </div>\n        <div class=\"row pt-4\">\n            <div class=\"col-sm-12\">\n                <form class=\"example-form\">\n                       \n                    <input type=\"text\" placeholder=\"Please Search Tags\" class=\"form-control\" [matAutocomplete]=\"auto\" [(ngModel)]=\"searchTag\"\n                        (input)=\"searchTags(searchTag)\" [ngModelOptions]=\"{standalone: true}\">\n                    <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)='getInstancesByTags($event.option.value)'>\n                        <mat-option *ngFor=\"let option of tagList\" [value]=\"option.instanceModelTagName\">\n                            {{option.instanceModelTagName}}\n                        </mat-option>\n                    </mat-autocomplete>\n                </form>\n            </div>\n        </div>\n        <!-- <div class=\"boxShadow text-center not_fung_inst errorTxt\" *ngIf=\"!globalTestSetup\">\n            Test Instances Not Found. Please Select the tags ...\n        </div> -->\n        <div class=\"row filter_tbl boxShadow mt-4 ml-1 mr-1\" *ngIf=\"globalTestSetup && globalTestSetup['listOfGlobalTestInstances']\">\n            <table class=\"table mb-0 text-center\">\n                   \n                <tr  style=\"color: #ffffff;background-color: #425db5;\" class=\"cursor_initial\">\n                    \n                    <th  >S.No</th>\n                    <th style=\"text-align:left\" >Instance Title</th>\n                    <th style=\"text-align:left\"> Tags</th>\n                    \n                    <th>Rating</th>\n                    <th>Question Count</th>\n                    <!-- <th>Test Count</th> -->\n                    <th></th>\n                    \n                </tr>\n                <tbody>\n                    <tr class='loading' *ngFor=\"let test of globalTestSetup['listOfGlobalTestInstances'] | paginate: { itemsPerPage: 10, currentPage: p_glob_1,id: glob_page_1,totalItems: globalInstanceCount};let i=index\">\n                            \n                      \n                        <td  >\n                            <span *ngIf=\"pageNo==1\" class=\" pr-3\">{{(i+1)}}.</span>\n                            <span *ngIf=\"pageNo!=1\" class=\" pr-3\">{{(i+1)+((pageNo-1)*10) }}.</span>\n                        </td>\n                        <td style=\"text-align:left;width: 25%;\" >{{test.instanceTitle}}\n                           \n                        </td>\n                        <td *ngIf=\"test.processing\" style=\"text-align: left\" class=\"col-12\" colspan=\"4\">\n                            <span style=\"color: #28a745;\n                            font-size: small;\n                            font-weight: 900;\n                            letter-spacing: 2px;\">\n                            Importing\n                            <span class=\"saving\" style=\"letter-spacing: 5px;\n                            color: #001454;\n                            font-size: 17px;\n                            font-size: x-large;\">.<span>.</span><span>.</span><span>.</span></span>\n                        </span>\n                            \n                            <ngx-loading   id=\"1\" [show]=\"true\"  [config]=\"{ primaryColour: '#425db5',secondaryColour:'#2ECC71 ',tertiaryColour:'rgba(255,0,0,0.3)',backdropBackgroundColour:'#90909000', backdropBorderRadius: '3px'}\" ></ngx-loading>    \n                        \n                        </td>\n                        <td *ngIf=\"!test.processing\" style=\"text-align:left\" >\n                            <p *ngIf=\"test.instanceTag.split(',').length<=2\">  <span  class=\"badge badge-success\" style=\"margin:2px\" *ngFor=\"let tag of test.instanceTag.split(',') | slice:0:2;\">{{tag}}</span>  </p>\n                            <p *ngIf=\"test.instanceTag.split(',').length>2\" title={{test.instanceTag}} ><span class=\"badge badge-success\" style=\"margin:2px\" *ngFor=\"let tag of test.instanceTag.split(',') | slice:0:2;\" >{{tag}}</span>..</p>  \n                            <!-- <span class=\"test_inst_tag\">\n                                <span (click)=\"stopProp($event)\" [ngClass]=\"{'not_allowed': !test.instanceTag || test.instanceTag == 'null'}\">\n                                   \n                               \n                                    \n                                </span>\n                                <span class=\"tags_view_tbl boxShadow\" [ngClass]=\"{'tags_view_tbl': test.instanceTag && test.instanceTag != 'null'}\" *ngIf=\"test.instanceTag && test.instanceTag !='null'\">\n                                    <span *ngFor=\"let tag of test.instanceTag.split(',')\">{{tag}}</span>\n                                </span>\n                            </span> -->\n\n\n\n                            <!-- <span class=\"test_inst_view\" (click)=\"stopProp($event);showInstance(test)\">\n                                <i class=\"material-icons\">\n                                    remove_red_eye\n                                </i>\n                            </span> -->\n                            \n                        </td>\n                        <td *ngIf=\"!test.processing\" ><star-rating [starType]=\"'svg'\"   [getHalfStarVisible]=\"getHalfStarVisible\" [showHalfStars]=\"true\" [readOnly]=\"true\" [rating]=\"test.avgOverallRating\"></star-rating>\n                        \n                        \n                        </td>\n                        <td *ngIf=\"!test.processing\">{{test.totalQuestionCount}}\n\n                            \n                        \n                            \n\n                        </td>\n                        <td *ngIf=\"!test.processing\">\n                            <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\" (click)=\"stopProp($event)\"\n                                class=\"vert_Btn\">\n                                <span class=\"\">\n                                    <i class=\"material-icons\">\n                                        more_vert\n                                    </i>\n                                </span>\n                            </button>\n                            <mat-menu #menu=\"matMenu\" class=\"instance-menu\">\n                                <button mat-menu-item (click)=\"importInstance(test)\">\n                                    <span>Import</span>\n                                </button>\n                                <button mat-menu-item (click)=\"stopProp($event);showGlobInstance(test)\">\n                                    <span>View</span>\n                                </button>\n                            </mat-menu>\n                        </td>\n                        \n                        <!-- <td>{{test.administeredTestCount }}</td> -->\n                         \n                    \n                    </tr>\n                    <tr class=\"no_filter_tr\" *ngIf=\"globalTestSetup['listOfGlobalTestInstances'] && !globalTestSetup['listOfGlobalTestInstances'].length\">\n                        <td colspan=\"4\" class=\"errorTxt\">\n                            Test Instances Not Found\n                        </td>\n\n                    </tr>\n                </tbody>\n\n            </table>\n\n            <div *ngIf=globPageFlag class=\"ques_sec_div col-sm-12 text-center\" style=\"padding: 1rem;\">\n                    <pagination-controls (pageChange)=\"p_glob_1 = $event;onPageChange($event)\" previousLabel=\"<\" nextLabel=\">\" [id]=\"glob_page_1\"></pagination-controls>\n                <!-- <jw-pagination [items]=\"items\" (changePage)=\"onChangePage($event)\"></jw-pagination> -->\n            </div>\n        </div>\n        <!-- <div class=\"row filter_tbl boxShadow\" *ngIf=\"globalTestSetup && globalTestSetup['listOfGlobalTestInstances'] && !globalTestSetup['listOfGlobalTestInstances'].length\">\n            <table class=\"table mb-0\">\n                <tr style=\"color: #ffffff;background-color: #425db5;\">\n                    <th>S.No</th>\n                    <th>Instance Title</th>\n                    <th>Test Owner</th>\n\n                    <th>Test Count</th>\n                </tr>\n                <tr class=\"text-center\">\n                    <td class=\"errorTxt\">{{testSetups.statusMessage}}</td>\n                </tr>\n            </table>\n        </div> -->\n    </div>\n</div>\n\n\n<!-- Modal -->\n<div id=\"instanceViewModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header b-0\">\n                <!-- <h4 class=\"modal-title\">Modal Header</h4> -->\n                <button type=\"button\" class=\"close boxShadow\" data-dismiss=\"modal\">&times;</button>\n            </div>\n            <div class=\"modal-body p-5\" *ngIf=\"instanceView && instanceView['testInstanceDetails']\">\n                <div class=\"row\" *ngIf=\"testInstance\" style=\"float: right;\" >\n                        \n                        <!-- <star-rating testInstance [starType]=\"'svg'\"   [getHalfStarVisible]=\"getHalfStarVisible\" [showHalfStars]=\"true\"  (hoverRatingChange)=\"ratingChanged($event)\" [rating]=\"0\"></star-rating> -->\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-sm-8\">\n                        <p class=\"row\">\n                            <span class=\"inst_title col-sm-4\">Instance Title : </span>\n                            <span class=\"col-sm-6\">{{instanceView['testInstanceDetails'].instanceTitle}}</span>\n                        </p>\n                        <p class=\"row\">\n                            <span class=\"inst_title col-sm-4\">Test Master : </span>\n                            <span class=\"col-sm-6\">{{instanceView['testInstanceDetails'].testSetupTitle}}</span>\n                        </p>\n                        <p class=\"row\">\n                            <span class=\"inst_title col-sm-4\">Test Count : </span>\n                            <span class=\"col-sm-6\">{{instanceView['testInstanceDetails'].administeredTestCount}}</span>\n                        </p>\n                        <p class=\"row\">\n                            <span class=\"inst_title col-sm-4\">Test Owner : </span>\n                            <span class=\"col-sm-6\">{{instanceView['testInstanceDetails'].testOwner}}</span>\n                        </p>\n                        <p class=\"row\">\n                            <span class=\"inst_title col-sm-4\">Overall Test Rating : </span>\n                            <span class=\"col-sm-2\"><star-rating   [starType]=\"'svg'\"   [getHalfStarVisible]=\"getHalfStarVisible\"   [showHalfStars]=\"true\" [readOnly]=\"true\" [rating]=\"testInstance.avgOverallRating\">\n                                 \n                            </star-rating></span>\n                        </p>\n                        <p class=\"row\">\n                            <span class=\"inst_title col-sm-4\">Question Quality Rating : </span>\n                        \n                        <span class=\"col-sm-2\">\n                            <star-rating   [starType]=\"'svg'\"   [getHalfStarVisible]=\"getHalfStarVisible\"   [showHalfStars]=\"true\" [readOnly]=\"true\"  [rating]=\"testInstance.avgQuestionQualityRating\"></star-rating>\n                        </span>\n                        </p>\n\n                    </div>\n                    <div class=\"col-sm-3\">\n                        <!-- <button class=\"btn btn-default edit_inst_btn float-right\">\n                            <span>\n                                <i class=\"material-icons\">\n                                    edit\n                                </i>\n                            </span>\n                            Edit\n                        </button> -->\n                    </div>\n                </div>\n                <div class=\"row\" *ngIf=\"instanceView['testInstanceDetails'].instanceModelTags && instanceView['testInstanceDetails'].instanceModelTags !='null'\">\n                    <div class=\"col-sm-11\">\n                        <p>\n                            <span class=\"inst_title\">Tags : </span>\n                        </p>\n                        <div class=\"tags_view\">\n                            <span *ngFor=\"let tag of instanceView['testInstanceDetails'].instanceModelTags.split(',')\">{{tag}}</span>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"row\">\n                    <p class=\"col-sm-12 m-0 mt-5\">\n                        <span class=\"inst_title\">Sections : </span>\n                    </p>\n                </div>\n                <div class=\"row pt-5 sec-container pl-4\" *ngIf=\"instanceView && instanceView['testInstanceDetails'] && instanceView['testInstanceDetails']['listOfInstanceSections'] && instanceView['testInstanceDetails']['listOfInstanceSections'].length\">\n\n                    <div class=\"card col-md-4\" style=\"border-bottom:3px solid #425db5\" *ngFor=\"let i=index;let section of instanceView['testInstanceDetails']['listOfInstanceSections']\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">{{section.instanceConfigName}}</h5>\n                            <h6 class=\"card-subtitle mb-2 text-muted\">No. of Questions: {{section.numberOfQuestions}}</h6>\n                            <p class=\"card-text\">Section Code:\n                                <span style=\"color:green\">{{section.sectionCode}}</span>\n                            </p>\n\n                            <!-- <p class=\"card-text\">Last modified: {{section.modifiedOn =='null' ? \" \" : section.modifiedOn | date }}</p> -->\n                            <p class=\"card-text mb-3\" style=\"cursor: pointer\" title={{section.instanceHeirarchy}} *ngIf=\"section.instanceHeirarchy && section.instanceHeirarchy.length>=40\">{{section.instanceHeirarchy | slice:0:40}}..</p>\n                            <p class=\"card-text mb-3\" *ngIf=\"section.instanceHeirarchy && section.instanceHeirarchy.length<40\">{{section.instanceHeirarchy }}</p>\n                            <hr>\n\n                            <!-- <a href=\"#\" class=\"card-link\" style=\"float: right;\" (click)=\"onSection($event,section.instanceConfigId);\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">+ Add New Question</a> -->\n\n                        </div>\n\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<!-- Modal -->\n<div id=\"instanceGlobalViewModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header b-0\">\n                <!-- <h4 class=\"modal-title\">Modal Header</h4> -->\n                <button type=\"button\" class=\"close boxShadow\" data-dismiss=\"modal\">&times;</button>\n            </div>\n            <div class=\"modal-body p-5\" *ngIf=\"instanceGlobalView\">\n                <div class=\"row\">\n                    <div class=\"col-sm-8\">\n                        <p class=\"row\">\n                            <span class=\"inst_title col-sm-2\">Instance Title : </span>\n                            <span class=\"col-sm-6\">{{instanceGlobalView.instanceTitle}}</span>\n                        </p>\n                        <p class=\"row\">\n                            <span class=\"inst_title col-sm-2\">Alias Name : </span>\n                            <span class=\"col-sm-6\">{{instanceGlobalView.instanceAliasTitle}}</span>\n                        </p>\n\n                    </div>\n                    <div class=\"col-sm-3\">\n                        <!-- <button class=\"btn btn-default edit_inst_btn float-right\">\n                            <span>\n                                <i class=\"material-icons\">\n                                    edit\n                                </i>\n                            </span>\n                            Edit\n                        </button> -->\n                    </div>\n                </div>\n                <div class=\"row\" *ngIf=\"instanceGlobalView.instanceTag && instanceGlobalView.instanceTag !='null'\">\n                    <div class=\"col-sm-11\">\n                        <p>\n                            <span class=\"inst_title\">Tags : </span>\n                        </p>\n                        <div class=\"tags_view\">\n                            <span *ngFor=\"let tag of instanceGlobalView.instanceTag.split(',')\">{{tag}}</span>\n                        </div>\n                    </div>\n\n                </div>\n                <div class=\"row\">\n                    <p class=\"col-sm-12 m-0 mt-5\">\n                        <span class=\"inst_title\">Sections : </span>\n                    </p>\n                </div>\n                <div class=\"row pt-5 sec-container pl-4\" *ngIf=\"instanceGlobalView && instanceGlobalView['sectionList'] && instanceGlobalView['sectionList'].length\">\n\n                    <div class=\"card col-md-4\" style=\"border-bottom:3px solid #41D6C3\" *ngFor=\"let i=index;let section of instanceGlobalView['sectionList']\">\n                        <div class=\"card-body\" *ngIf=\"section.fullHeirarchy\">\n                            <h5 class=\"card-title\">{{section.sectionName}}</h5>\n                            <h6 class=\"card-subtitle mb-2 text-muted\">No. of Questions: {{section.eachSectionQuestionCount}}</h6>\n                            <p class=\"card-text\">Section Code:\n                                <span style=\"color:green\">{{section.sectionCode}}</span>\n                            </p>\n\n                            <!-- <p class=\"card-text\">Last modified: {{section.modifiedOn =='null' ? \" \" : section.modifiedOn | date }}</p> -->\n                            <p class=\"card-text mb-3\" style=\"cursor: pointer\" title={{section.fullHeirarchy}} *ngIf=\"section.fullHeirarchy.length>=40\">{{section.fullHeirarchy | slice:0:40}}..</p>\n                            <p class=\"card-text mb-3\" *ngIf=\"section.fullHeirarchy.length<40\">{{section.fullHeirarchy }}</p>\n                            <hr>\n\n                            <!-- <a href=\"#\" class=\"card-link\" style=\"float: right;\" (click)=\"onSection($event,section.instanceConfigId);\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">+ Add New Question</a> -->\n\n                        </div>\n\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<!-- Modal -->\n\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-lg\" role=\"document\">\n        <div class=\"modal-content\">\n\n            <div class=\"modal-body\">\n                <!-- <app-add-question [sectionId]=\"sectionId\"></app-add-question> -->\n\n            </div>\n\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/candidate-result/candidate-result.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/candidate-result/candidate-result.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<block-ui>\n\n</block-ui>\n\n<div id=\"content\">\n\n\n    <nav class=\"navbar navbar-expand-sm bg-dark navbar-dark header_nav pt-0 pb-0\">\n        <!-- Brand/logo -->\n        <!-- <a class=\"navbar-brand\" href=\"\">NO CHEATING DUDE</a> -->\n        <!-- <img src=\"./../../../assets/images/NCD-logo-small.png\" width=\"131px\" height=\"50px\" style=\"margin: 0.28rem;\" /> -->\n        <img src=\"./../../../assets/images/ncd_finalized_logo.png\" width=\"144px\" height=\"50px\" style=\"margin:0.28rem;padding-top:2px ;padding-bottom:2px ;\" />\n        <div class=\"col-10\" style=\"text-align:end\">\n            <button id=\"dowloadBtn\" class=\"btn-info\" #dowloadBtn (click)=\"download()\"> Download</button>\n\n        </div>\n\n        <!-- Links -->\n        <!-- <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item user_icon dropdown\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">{{getUsername()}}</a>\n            <div class=\"dropdown-menu\">\n                <a class=\"dropdown-item pointer\">\n                    <span class=\"\">Role &nbsp; : </span> <b>{{getRoleName()}}</b>\n                </a>\n                <a class=\"dropdown-item pointer\" [routerLink]=\"['/settings']\">\n                    <span class=\"\">Profile</span>\n                </a>\n                <a class=\"dropdown-item pointer\" [routerLink]=\"['/set-password']\">\n                    <span class=\"\">Change Password</span>\n                </a>\n                <a class=\"dropdown-item pointer\" (click)=\"logout()\">\n                    <i class=\"material-icons\">\n            power_settings_new\n          </i>\n                    <span class=\"\">Logout</span>\n                </a>\n            </div>\n        </li>\n        <li class=\"nav-item user_icon\">\n            <img src=\"./../../../assets/images/boy.png\" class=\"boxShadow\">\n        </li>\n    </ul> -->\n    </nav>\n\n\n    <div class=\"row m-0 report_result\">\n        <!-- <div class=\"col-sm-12 p-0\">\n        <hr>\n    </div> -->\n        <div class=\"col-sm-12 pl-5 pr-5 pt-4 pb-4\">\n            <p class=\"abt_txt\">\n                <b>About</b>\n            </p>\n            <p>\n                Make the best of an online evaluation and assessment portal with hassle-free authorisation and authentication mechanisms.\n            </p>\n            <p>\n                Seamless & robust candidate authorisation and authentication mechanisms with constant candidate photo and video capture. Tab change lock that enables recruiters ensure fair play while candidates take online exams, multiple examination patterns & methods,\n                global community based export, import and bulk upload of questions and many more features that follow.\n            </p>\n        </div>\n\n\n    </div>\n\n    <div class=\"row m-0 report_result p-5 boxShadow\" *ngIf=\"candidate\">\n        <div class=\"col-sm-2 text-center\">\n            <span class=\"person_img\">\n            <i class=\"material-icons boxShadow\">\n                person\n            </i>\n        </span>\n        </div>\n        <div class=\"col-sm-6\">\n            <div class=\"d-flex\">\n                <div class=\"flex-fill\">\n                    <h4>\n                        <b>{{candidate.candidateName}}</b>\n                    </h4>\n                    <hr>\n                </div>\n                <div class=\"flex-fill text-center\">\n                    <span class=\"ml-3 mr-3 check_icon\" *ngIf=\"candidate.testStatus == 'Qualified'\">\n                    <i class=\"material-icons\">\n                        check\n                    </i>\n                </span>\n                    <span class=\"ml-3 mr-3 cancel_icon\" *ngIf=\"candidate.testStatus == 'Not Qualified'\">\n                    <i class=\"material-icons\">\n                        close\n                    </i>\n                </span>\n                    <span *ngIf=\"candidate.testStatus == 'Qualified'\">{{candidate.testStatus}}</span>\n                    <span class=\"errorTxt\" *ngIf=\"candidate.testStatus == 'Not Qualified' \">{{candidate.testStatus}}</span>\n                </div>\n            </div>\n            <div class=\"test_details\">\n                <div class=\"d-flex\">\n                    <div class=\"\">\n                        <p>Test Title</p>\n                    </div>\n                    <div class=\"pl-5 ml-1\">\n                        <b>{{candidate.testTitle}}</b>\n                    </div>\n                </div>\n                <div class=\"d-flex\">\n                    <div class=\"\">\n                        <p>Test Duration</p>\n                    </div>\n                    <div class=\"pl-3 ml-1\">\n                        <b>{{candidate.testDuration}}</b>\n                    </div>\n                </div>\n                <div class=\"d-flex\">\n                    <div class=\"\">\n                        <p>Written on</p>\n                    </div>\n                    <div class=\"pl-4 ml-3\">\n                        <b>{{candidate.writtenOn | date:'mediumDate'}}</b>\n                    </div>\n                </div>\n                <div class=\"d-flex\">\n                    <div class=\"\">\n                        <p>Percentage</p>\n                    </div>\n                    <div class=\"pl-5 ml-4\">\n                        <b>{{candidate.testPercentage}} %</b>\n                    </div>\n                </div>\n                <!-- <div class=\"mail_Score col-sm-12\">\n                <button class=\"btn pb-2\" (click)=\"mailResult()\">Mail This\n                    <i class=\"material-icons pull-right pl-5\">\n                        email\n                    </i>\n                </button>\n                <button class=\"btn pb-2 review_btn  ml-4\" data-toggle=\"modal\" data-target=\"#reviewModal\" (click)=\"getCandidateQUestions(candidate)\">Review</button>\n\n            </div> -->\n\n            </div>\n        </div>\n        <div class=\"col-sm-4\">\n            <div class=\"row score_board p-4\">\n                <div class=\"col-sm-6\">\n                    <h4>Sections</h4>\n                    <hr>\n                </div>\n                <div class=\"col-sm-6\">\n                    <h4>Percentage</h4>\n                    <hr>\n                </div>\n                <div class=\"col-sm-12\" *ngFor=\"let sec of sectionList['sections']\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <p>{{sec.sectionName}}</p>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            =\n                            <span class=\"score_left\">{{sec.sectionwisePercentage}} %</span>\n                        </div>\n                    </div>\n                </div>\n                <hr class=\"col-sm-12 mt-0\">\n                <div class=\"col-sm-12\">\n                    <div class=\"row\">\n                        <div class=\"col-sm-6\">\n                            <p>Overall Test Percentage</p>\n                        </div>\n                        <div class=\"col-sm-6\">\n                            =\n                            <span class=\"score_left\">{{sectionList.total}} %</span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- <div class=\"row pt-5 col-sm-12\">\n            <div class=\"col-sm-8 mail_Score\">\n                <input class=\"form-control\" placeholder=\"Link to View Result\" [(ngModel)]=\"candidate.candidateResultViewURL\" disabled>\n            </div>\n            <div class=\"col-sm-4 mail_Score\">\n                <button class=\"btn pb-2\" (click)=\"shareResult(candidate)\">Copy Link to Share Result </button>\n            </div>\n        </div> -->\n\n        <!-- <div class=\"col-sm-12\" *ngIf=\"userPics && userPics['candidatePictureList'].length\">\n            <h4>ScreenShots</h4>\n            <div class=\"row pt-5 pb-5\">\n                <div class=\"col-sm-2\" *ngFor=\"let pic of userPics['candidatePictureList']\">\n                    <img [src]=\"pic.imgSrc\" class=\"exam_pic pointer\" alt=\"candidate-exam-pics\">\n                </div>\n            </div>\n        </div> -->\n    </div>\n\n    <div *ngIf=\"!candidReview\" class=\"well errorTxt text-center\">\n        No Test Review Questions Available.\n    </div>\n    <div class=\"report_result p-5\">\n        <div class=\"row m-0 \">\n            <h4 class=\"rev_txt col-sm-12\">\n                <b>Test Review</b>\n            </h4>\n            <hr class=\"col-sm-12 m-0\">\n        </div>\n        <div class=\"row m-0\" *ngFor=\"let ques of candidReview;let i=index\">\n            <div class=\"col-sm-12\" *ngIf=\"ques.questionTypeId == '3' || ques.questionTypeId == '4' || ques.questionTypeId == '5' || ques.questionTypeId == '6'\">\n                <div class=\"pt-3 pb-3\">\n                    <span class=\"report_txt\">\n                    <b>{{i+1}}.</b>\n                </span>\n                    <span class=\"report_txt pl-4\"> {{ques.qustionText}}</span>\n                    <span *ngIf=\"ques.answerStatus=='Correct'\" [ngClass]=\"{'correct_tick':ques.answerStatus=='Correct','review_tick':true}\">\n                    <i class=\"material-icons\">\n                        done\n                    </i>\n                </span>\n                    <span *ngIf=\"ques.answerStatus=='InCorrect'\" [ngClass]=\"{'wrong_tick':ques.answerStatus=='InCorrect','review_tick':true}\">\n                    <i class=\"material-icons\">\n                        clear\n                    </i>\n                </span>\n\n                </div>\n                <div class=\"pt-3 pb-3 col-sm-12\">\n                    <pre *ngIf=\" ques && ques.questionCode && ques.questionCode != 'null'\">{{ques.questionCode}}</pre>\n                </div>\n                <div>\n                    <div class=\"col-sm-12\" *ngIf=\"ques.questionTypeId == '3'\">\n                        <span class=\"pl-4 ml-2\">\n                        <b>A .</b>\n                    </span>\n                        <textarea [ngModel]=\"ques.candidateAnswer\" cols='50' rows=\"5\" [ngClass]=\"{'fill_ans': ques.answerStatus == 'Correct','fill_in form-control ml-4':true}\" disabled></textarea>\n                        <span *ngIf=\"ques.answerStatus == 'Correct'\" [ngClass]=\"{'correct_ans_txt':ques.answerStatus == 'Correct'}\">Correct Answer !</span>\n                    </div>\n                    <div class=\"col-sm-12\" *ngIf=\"ques.questionTypeId != '3'\">\n                        <textarea [ngModel]=\"ques.candidateAnswer\" class=\"text_area_ans\" cols=\"50\" rows=\"5\" disabled></textarea>\n                        <span *ngIf=\" ques.questionTypeId != '3' && ques.answerStatus == 'Correct'\" [ngClass]=\"{'correct_ans_txt':ques.answerStatus == 'Correct'}\">Correct Answer !</span>\n                    </div>\n                </div>\n                <div class=\"col-sm-12\">\n\n                    <!-- <p class=\"p-4 ml-4\">\n                    <span *ngIf=\"ques.questionTypeId == '3' && ques.candidateAnswer != ques.actualAnswer\" [ngClass]=\"{'fill_ans': ques.candidateAnswer != ques.actualAnswer}\">\n                        {{ques.actualAnswer}}\n                    </span>\n                    <span *ngIf=\"ques.candidateAnswer!=ques.actualAnswer\" [ngClass]=\"{'correct_ans_txt':ques.candidateAnswer!=ques.actualAnswer}\">Correct Answer !</span>\n                </p>\n                <textarea *ngIf=\"ques.questionTypeId != '3' && ques.candidateAnswer!=ques.actualAnswer\" [ngModel]=\"ques.actualAnswer\" class=\"text_area_ans\"\n                    cols=\"50\" rows=\"5\" disabled></textarea>\n                <span *ngIf=\" ques.questionTypeId != '3' && ques.candidateAnswer!=ques.actualAnswer\" [ngClass]=\"{'correct_ans_txt':ques.candidateAnswer!=ques.actualAnswer}\">Correct Answer !</span> -->\n                    <div class=\"p-4 ml-4 row\">\n                        <div *ngIf=\"ques.questionTypeId == '3' && ques.answerStatus == 'InCorrect'\" [ngClass]=\"{'fill_ans': ques.answerStatus == 'InCorrect','col-sm-8 m-0':true}\">\n                            {{ques.actualAnswer}}\n                        </div>\n                        <div *ngIf=\"ques.questionTypeId == '3' && ques.answerStatus == 'InCorrect'\" [ngClass]=\"{'correct_ans_txt':ques.answerStatus == 'InCorrect','col-sm-4 m-0':true}\">Correct Answer !</div>\n                    </div>\n                    <textarea *ngIf=\"ques.questionTypeId != '3' && ques.answerStatus == 'InCorrect'\" [ngModel]=\"ques.actualAnswer\" class=\"text_area_ans\" cols=\"50\" rows=\"5\" disabled></textarea>\n                    <span *ngIf=\" ques.questionTypeId != '3' && ques.answerStatus == 'InCorrect'\" [ngClass]=\"{'correct_ans_txt':ques.answerStatus == 'InCorrect'}\">Correct Answer !</span>\n\n                </div>\n            </div>\n            <div *ngIf=\"ques.questionTypeId == '1'\" class=\"col-sm-12\">\n                <div class=\"pt-3 pb-3\">\n                    <span class=\"report_txt\">\n                    <b>{{i+1}}.</b>\n                </span>\n                    <span class=\"report_txt pl-4\">{{ques.qustionText}}</span>\n                    <span *ngIf=\"ques.answerStatus=='Correct'\" [ngClass]=\"{'correct_tick':ques.answerStatus=='Correct','review_tick':true}\">\n                    <i class=\"material-icons\">\n                        done\n                    </i>\n                </span>\n                    <span *ngIf=\"ques.answerStatus=='InCorrect'\" [ngClass]=\"{'wrong_tick':ques.answerStatus=='InCorrect','review_tick':true}\">\n                    <i class=\"material-icons\">\n                        clear\n                    </i>\n                </span>\n\n                </div>\n                <div class=\"pt-3 pb-3 col-sm-12\">\n                    <pre *ngIf=\"ques.questionCode && ques.questionCode != 'null'\">{{ques.questionCode}}</pre>\n                </div>\n\n                <div class=\"col-sm-12\">\n\n                    <mat-radio-group [(ngModel)]=\"ques.candidateAnswer\" disabled=\"true\">\n                        <mat-radio-button [ngClass]=\"{'correct_radio': ques.candidateAnswer==ques.actualAnswer,'wrong_radio':ques.candidateAnswer!=ques.actualAnswer}\" [value]=\"option.optionText\" *ngFor=\"let option of ques.optionsList\">\n                            <span [ngClass]=\"{'correct_ans':option.optionText==ques.actualAnswer}\">{{option.optionText}}</span>\n                            <span *ngIf=\"option.optionText==ques.actualAnswer\" [ngClass]=\"{'correct_ans_txt':option.optionText==ques.actualAnswer}\">Correct Answer !</span>\n                        </mat-radio-button>\n                    </mat-radio-group>\n                </div>\n                <!-- <div class=\"col-sm-12\">\n                            <button class=\"btn btn-success\">Answer &nbsp; : &nbsp;\n                                <b class=\"actul_ans_bg\">{{ques.actualAnswer}}</b>\n                            </button>\n                        </div> -->\n            </div>\n            <div *ngIf=\"ques.questionTypeId == '2'\" class=\"col-sm-12\">\n                <div class=\"pt-3 pb-3\">\n                    <span class=\"report_txt\">\n                    <b>{{i+1}}.</b>\n                </span>\n                    <span class=\"report_txt pl-4\">{{ques.qustionText}}</span>\n                    <span *ngIf=\"ques.answerStatus=='Correct'\" [ngClass]=\"{'correct_tick':ques.answerStatus=='Correct','review_tick':true}\">\n                    <i class=\"material-icons\">\n                        done\n                    </i>\n                </span>\n                    <span *ngIf=\"ques.answerStatus=='InCorrect'\" [ngClass]=\"{'wrong_tick':ques.answerStatus=='InCorrect','review_tick':true}\">\n                    <i class=\"material-icons\">\n                        clear\n                    </i>\n                </span>\n\n                </div>\n                <div class=\"pt-3 pb-3 col-sm-12\">\n                    <pre *ngIf=\"ques.questionCode && ques.questionCode != 'null'\">{{ques.questionCode}}</pre>\n                </div>\n\n                <div class=\"col-sm-12\">\n\n                    <div class=\"check_green\" *ngFor=\"let opt of ques.optionsList\">\n                        <mat-checkbox [ngClass]=\"{'check_ans' : ques.candidateAnswer.split(',').includes(opt.optionText)}\" [checked]=\"ques.candidateAnswer.split(',').includes(opt.optionText)\" [disabled]=\"true\">\n                            <!-- {{opt.optionText}} -->\n                            <span [ngClass]=\"{'correct_ans':ques.actualAnswer.split(',').includes(opt.optionText)}\">{{opt.optionText}}</span>\n                            <span *ngIf=\"ques.actualAnswer.split(',').includes(opt.optionText)\" [ngClass]=\"{'correct_ans_txt':ques.actualAnswer.split(',').includes(opt.optionText)}\">Correct Answer !</span>\n                        </mat-checkbox>\n                    </div>\n                    <!-- <mat-radio-group [(ngModel)]=\"ques.candidateAnswer\" disabled=\"true\">\n                                    <mat-radio-button [ngClass]=\"{'correct_radio': ques.candidateAnswer==ques.actualAnswer,'wrong_radio':ques.candidateAnswer!=ques.actualAnswer}\" [value]=\"option.optionText\" *ngFor=\"let option of ques.optionsList\">\n                                        {{option.optionText}}\n                                    </mat-radio-button>\n                                </mat-radio-group>                                 -->\n\n                </div>\n                <!-- <div class=\"col-sm-12 mt-4\">\n                            <button class=\"btn btn-success\">Answer &nbsp; : &nbsp;\n                                <b class=\"actul_ans_bg\">{{ques.actualAnswer}}</b>\n                            </button>\n                        </div> -->\n            </div>\n        </div>\n\n\n\n\n    </div>\n    <div class=\"report_result \">\n        <!-- -------------- ScreenShots Start  ------------------ -->\n        <div style=\"padding-left: 3rem;\">\n            <div *ngIf=\"!apiService.cfs\" class=\"col-sm-12\">\n                <div class=\"col-sm-12\" *ngIf=\"userPics && userPics['candidatePictureList'].length\">\n                    <h4>ScreenShots</h4>\n                    <div class=\"row pt-5 pb-5 col-sm-12\">\n                        <div class=\"col-sm-2\" *ngFor=\"let pic of userPics['candidatePictureList']\">\n                            <img [src]=\"pic.imgSrc\" class=\"exam_pic pointer\" alt=\"candidate-exam-pics\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"apiService.cfs\" class=\"col-sm-12\">\n                <div class=\"col-sm-12\" *ngIf=\"userPics && userPics['candidatePictureList'].length\">\n                    <h4>ScreenShots</h4>\n                    <div class=\"row pt-5 pb-5 col-sm-12\">\n                        <div class=\"col-sm-2\" *ngFor=\"let pic of userPics['candidatePictureList'];index as i\">\n                            <img  (load)=\"onImageLoad($event,i)\" crossorigin=\"anonymous\" [src]=\"pic.cfsViewURL\" id={{pic.pictureFileName}} class=\"exam_pic pointer\" alt=\"candidate-exam-pics\">\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- -------------- ScreenShots End  ------------------ -->\n\n        <!-- -------------- Suspicious Activities Start  ------------------ -->\n\n        <div class=\"col-sm-12\" style=\" padding-top: 10px;padding-right: 100px;padding-bottom: 78px;padding-left: 100px;\">\n\n            <h5>User Suspicious Activities</h5>\n\n            <div class=\"row filter_tbl \" *ngIf=\"activities && activities['candidateSuspiciousActivityList'].length\">\n\n                <table class=\"table mb-0\">\n                    <thead style=\"background-color: #425db5;\">\n                        <tr class=\"cursor_initial\">\n                            <th>S.NO</th>\n                            <th>Activity</th>\n                            <th>Out Time</th>\n                            <th>In Time</th>\n                            <th>Duration<span style=\"font-size:x-small\">(In Secs)</span></th>\n\n\n\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr style=\"background-color:  #ffffff;color:black;\" *ngFor=\"let activity of activities['candidateSuspiciousActivityList']; index as i\">\n                            <td>{{i+1}}</td>\n                            <td>{{activity.activityTypeName}}</td>\n                            <td> {{activity.activityOUT | date:'medium' }}</td>\n                            <td> {{activity.activityIn | date:'medium' }}</td>\n                            <td> {{activity.timeDuration }}</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <div class=\"row filter_tbl  \" *ngIf=\"activities && !activities['candidateSuspiciousActivityList'].length\">\n\n                <table class=\"table mb-0\">\n                    <thead style=\"background-color: #425db5;\">\n                        <tr class=\"cursor_initial\">\n                            <th>S.NO</th>\n                            <th>Activity</th>\n                            <th>Out Time</th>\n                            <th>In Time</th>\n                            <th>Duration</th>\n\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr style=\"background-color:  #ffffff;color:red;\">\n                            <td></td>\n                            <td></td>\n                            <td style=\"text-align:center;\">No Suspicious Activity Found</td>\n                            <td> </td>\n                            <td></td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n        </div>\n        <!-- -------------- Suspicious Activities End  ------------------ -->\n\n\n    </div>\n    <div class=\"row m-0 report_result\">\n        <div class=\"col-sm-4 pl-5\">\n            <img src=\"./../../../assets/images/ncd_finalized_logo.png\" width=\"144px\" height=\"50px\" style=\"margin:0.28rem;padding-top:2px ;padding-bottom:2px ;\" />\n\n        </div>\n        <div class=\"col-sm-4 text-center ncd_link\">\n            <a href=\"https://www.nocheatingdude.com\" target=\"_blank\">www.nocheatingdude.com</a>\n        </div>\n        <div class=\"col-sm-4 text-center\">\n            <h4>\n                Stay In Touch\n            </h4>\n            <div>\n                <a target=\"_blank\" href=\"https://www.facebook.com/nocheatingdude/\"> <img class=\"soc_icon\" alt=\"social icons\" src=\"./../../../assets/images/facebook.png\"></a>\n                <a target=\"_blank\" href=\"https://twitter.com/DudeCheating\"><img class=\"soc_icon\" alt=\"social icons\" src=\"./../../../assets/images/twitter.png\"></a>\n                <a target=\"_blank\" href=\" https://www.linkedin.com/company/no-cheating-dude/\"><img class=\"soc_icon\" alt=\"social icons\" src=\"./../../../assets/images/linkedin.png\"></a>\n            </div>\n        </div>\n\n        <div class=\"col-sm-12 p-0\">\n            <hr>\n        </div>\n\n        <div class=\"text-center col-sm-12\">\n            <p>Powered by NoCheatingDude</p>\n            <p>\n                Copyrights &copy; 2019 Nexii Automation People.All rights reserved.\n            </p>\n        </div>\n\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/configure-tests/configure-tests.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/configure-tests/configure-tests.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<block-ui>\n\n</block-ui>\n<div class=\"reports_sec pt-4 pb-4 pl-4 pr-4\">\n    <div class=\"row\">\n        <div class=\"col-sm-12 report_txt\">\n            <h4>\n                <p>List of Test Masters</p>\n            </h4>\n            <hr class=\"m-0\">\n        </div>\n    </div>\n    <div class=\"row filter_tbl boxShadow mt-4 ml-1 mr-1\" *ngIf=\"testSetups && testSetups['listOfTestSetups'].length\">\n        <table class=\"table mb-0\">\n            <tr style=\"color: #ffffff;background-color: #425db5;\" class=\"cursor_initial\">\n                <th>S.No</th>\n                <th>Title</th>\n                <th>Category</th>\n                <th>Owner</th>\n                <th>Created On</th>\n                <th></th>\n            </tr>\n            <tr *ngFor=\"let test of testSetups['listOfTestSetups'];let i=index\" [routerLink]=\"['/test-setup/sections',test.testSetupId]\">\n                <td>\n                    <span class=\" pr-3\">{{i+1}}.</span>\n                </td>\n                <td>{{test.testSetupTitle}}</td>\n                <td>{{test.testCategoryName}}</td>\n                <td>{{test.testOwner}}</td>\n                <td>{{test.createdOn | date :'short' }}</td>\n                <td>\n\n                    <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\" (click)=\"stopProp($event)\"\n                        class=\"vert_Btn\">\n                        <span class=\"\">\n                            <i class=\"material-icons\">\n                                more_vert\n                            </i>\n                        </span>\n                    </button>\n                    <mat-menu #menu=\"matMenu\" class=\"instance-menu\">\n                        <button mat-menu-item (click)=\"showMaster(test)\">\n                            <span>View</span>\n                        </button>\n                        <button [disabled]=\"test.isOwner != '1'\" mat-menu-item (click)=\"stopProp($event);\" [routerLink]=\"['/test-setup/edit',test.testSetupId]\">\n                            <span>Edit</span>\n                        </button>\n                    </mat-menu>\n                </td>\n            </tr>\n        </table>\n    </div>\n    <div class=\"row filter_tbl boxShadow\" *ngIf=\"testSetups && !testSetups['listOfTestSetups'].length\">\n        <table class=\"table mb-0\">\n            <tr style=\"color: #ffffff;background-color: #425db5;\" class=\"cursor_initial\">\n                <th>S.No</th>\n                <th>Title</th>\n                <th>Category</th>\n\n                <th>Created On</th>\n            </tr>\n            <tr class=\"text-center no_filter_tr\">\n                <td class=\"errorTxt\" colspan=\"4\">{{testSetups.statusMessage}}</td>\n            </tr>\n        </table>\n    </div>\n</div>\n\n<!-- Modal -->\n<div id=\"masterViewModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n            <div class=\"modal-header b-0\">\n                <!-- <h4 class=\"modal-title\">Modal Header</h4> -->\n                <button type=\"button\" class=\"close boxShadow\" data-dismiss=\"modal\">&times;</button>\n            </div>\n            <div class=\"modal-body p-5\" *ngIf=\"masterView\">\n                <div class=\"row\">\n                    <div class=\"col-sm-8\">\n                        <p class=\"row\">\n                            <span class=\"inst_title col-sm-3\">Test Master Title </span>\n                            <span class=\"col-sm-9\">: {{masterView.testSetupTitle}}</span>\n                        </p>\n                        <p class=\"row\">\n                            <span class=\"inst_title col-sm-3\">Category</span>\n                            <span class=\"col-sm-9\">  : {{masterView.testCategoryName}}</span>\n                        </p>\n\n                    </div>\n                    <div class=\"col-sm-3\">\n                    </div>\n                </div>\n               \n                <div class=\"row\">\n                    <p class=\"col-sm-12 m-0 mt-4\">\n                        <span class=\"inst_title\">Sections : </span>\n                    </p>\n                </div>\n                <div class=\"row pt-4 sec-container pl-4\" *ngIf=\"masterView && masterView['sectionsList'] &&  masterView['sectionsList'].length\">\n\n                    <div class=\"card col-md-4 p-0 m-3\" style=\"border-bottom:3px solid #41D6C3\" *ngFor=\"let i=index;let section of  masterView['sectionsList']\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">{{section.sectionName}}</h5>\n                            <h6 class=\"card-subtitle mb-2 text-muted\">No. of Questions: {{section.totalNoOfQuestions}}</h6>\n                            <p class=\"card-text\">Section Code:\n                                <span style=\"color:green\">{{section.sectionCode}}</span>\n                            </p>\n\n                            <!-- <p class=\"card-text\">Last modified: {{section.modifiedOn =='null' ? \" \" : section.modifiedOn | date }}</p> -->\n                            <p class=\"card-text mb-3\" style=\"cursor: pointer\" title={{section.hierarchy}} *ngIf=\"section.hierarchy && section.hierarchy.length>=40\">{{section.hierarchy | slice:0:40}}..</p>\n                            <p class=\"card-text mb-3\" *ngIf=\"section.hierarchy && section.hierarchy.length<40\">{{section.hierarchy }}</p>\n                            <hr>\n\n                            <!-- <a href=\"#\" class=\"card-link\" style=\"float: right;\" (click)=\"onSection($event,section.instanceConfigId);\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">+ Add New Question</a> -->\n\n                        </div>\n\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/contribute/contribute.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/contribute/contribute.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<block-ui>\n\n</block-ui>\n<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark header_nav pt-0 pb-0\">\n    <!-- Brand/logo -->\n    <!-- <a class=\"navbar-brand\" href=\"\">NO CHEATING DUDE</a> -->\n    <!-- <img src=\"./../../../assets/images/NCD-logo-small.png\" width=\"131px\" height=\"50px\" style=\"margin: 0.28rem;\" /> -->\n    <img src=\"./../../../assets/images/ncd_finalized_logo.png\" width=\"144px\" height=\"50px\" style=\"margin:0.28rem;padding-top:2px ;padding-bottom:2px ;\" />\n    \n\n    <!-- Links -->\n    <!-- <ul class=\"navbar-nav ml-auto\">\n    <li class=\"nav-item user_icon dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">{{getUsername()}}</a>\n        <div class=\"dropdown-menu\">\n            <a class=\"dropdown-item pointer\">\n                <span class=\"\">Role &nbsp; : </span> <b>{{getRoleName()}}</b>\n            </a>\n            <a class=\"dropdown-item pointer\" [routerLink]=\"['/settings']\">\n                <span class=\"\">Profile</span>\n            </a>\n            <a class=\"dropdown-item pointer\" [routerLink]=\"['/set-password']\">\n                <span class=\"\">Change Password</span>\n            </a>\n            <a class=\"dropdown-item pointer\" (click)=\"logout()\">\n                <i class=\"material-icons\">\n        power_settings_new\n      </i>\n                <span class=\"\">Logout</span>\n            </a>\n        </div>\n    </li>\n    <li class=\"nav-item user_icon\">\n        <img src=\"./../../../assets/images/boy.png\" class=\"boxShadow\">\n    </li>\n</ul> -->\n</nav>\n<div class=\"row\" style=\"margin:10px;margin-bottom:0px \">\n    <div class=\"col-12\" style=\"    padding: 2rem;\n    padding-bottom: 0rem;\">\n            <h5>About</h5>\n            <p> \n            \n                Make the best of an online evaluation and assessment portal with hassle-free authorisation and authentication mechanisms.\n                \n                Seamless & robust candidate authorisation and authentication mechanisms with constant candidate photo and video capture. Tab change lock that enables recruiters ensure fair play while candidates take online exams, multiple examination patterns & methods, global community based export, import and bulk upload of questions and many more features that follow. </p>\n    </div>\n\n</div>\n<div class=\"row m-2\">\n<div class=\"col-8\">\n    <div class=\"row\">\n        <div class=\"col-12\">\n                <h5 style=\"padding:0rem;padding-left: 1rem;color: #707070;\">\n                        <p>Contributor Details</p>\n                    </h5>\n        </div>\n           \n\n        <form class=\"example-form\" style=\"padding: 2rem;\">\n\n                                 \n  <table class=\"example-full-width\" cellspacing=\"0\"><tr>\n        <td>\n\n                <mat-form-field class=\"example-full-width\">\n                        <mat-label>Name</mat-label>\n                        <input matInput (input)=\"name=$event.target.value\" placeholder=\"Ex. Ram\">\n                      </mat-form-field>\n                \n        </td>\n        <td>\n                <mat-form-field class=\"example-full-width\">\n                        <mat-label>Email</mat-label>\n                        <input matInput [formControl]=\"emailFormControl\" (input)=\"email=$event.target.value\" placeholder=\"Ex. ram@example.com\">\n                        <mat-error *ngIf=\"emailFormControl.hasError('email') && !emailFormControl.hasError('required')\">\n                          Please enter a valid email address\n                        </mat-error>\n                        \n                </mat-form-field>\n\n        </td>\n        <td><mat-form-field class=\"example-full-width\">\n          <mat-label>Phone</mat-label>\n          <input matInput [formControl]=\"phoneValidate\" type=\"number\"  (input)=\"phone=$event.target.value\" placeholder=\"Ex. 9090909090\">\n          <mat-error *ngIf=\"phoneValidate.errors \">\n            Please Enter Valid Mobile Number\n          </mat-error>\n        </mat-form-field></td>\n      </tr></table>\n    \n            \n          </form>\n           \n                        \n    </div>\n\n     \n</div>\n\n<div class=\"col-4\" style=\"display:grid\">\n        <div class=\"profile\" style=\"text-align: center;padding-top: 1rem;\n        padding-left: 5rem;\">\n                    \n                <span >\n                    <img src=\"./../../../assets/images/profile.png\" />\n                    \n                   \n                </span>\n                \n                <label  class=\"fileContainer\">\n                    <span  >Update</span>\n                    \n                    <input   type=\"file\" (change)=onFileSelected($event)/>\n                </label>\n                \n            </div>\n            <span style=\"text-align: center;\">Photo</span>\n</div>\n</div>\n   <div class=\"sections\">\n       <div class=\"row\" style=\"padding:0rem 2rem;padding-top:0rem\" >\n           <div class=\"col-sm-12 report_txt\">\n               <h5 style=\"padding:0rem;padding-top: 1rem;color: #707070;\">\n                   <p>Topics to Contribute</p>\n               </h5>\n                \n           </div>\n       </div>\n        \n      \n      <div class=\"row\" style=\"padding-left: 1rem;\">\n\n       <div class=\"card col-md-3\" style=\"border-bottom:3px solid #41D6C3\" *ngFor=\"let i=index;let section of sectionsData \">\n        <div class=\"card-body\" >\n            <label class=\"container\">\n                         \n                          </label>\n            <h5 class=\"card-title\">{{section.instanceConfigName}}</h5>\n            <!-- <h6 class=\"card-subtitle mb-2 text-muted\">No. of Questions: {{section.totalNoOfQuestions}}</h6> -->\n            <p class=\"card-text\">Section Code: <span style=\"color:green\">{{section.sectionCode}}</span></p>\n\n            <p class=\"card-text\">Last modified: {{section.modifiedOn =='null' ? \" \" : section.modifiedOn | date }}</p>\n            <!-- <p class=\"card-text\" style=\"cursor: pointer\" title={{section.hierarchy}} *ngIf=\"section.hierarchy.length>=40\">{{section.hierarchy =='null' ? \" \" : section.hierarchy }}..</p> -->\n            <p class=\"card-text\" >{{section.hierarchy =='null' ? \" \" : section.hierarchy  }}</p>\n            <hr>\n\n            <!-- <a href=\"#\" class=\"card-link\" style=\"float: right;\" (click)=\"onSection($event,section.sectionId);getTemplateLink()\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">+ Add New Question</a> -->\n            <button class=\"btn btn-link\" style=\"float: right;\" (click)=\"onSection($event,section.instanceConfigId);getTemplateLink();sectionId=section.instanceConfigId\" \n            >+ Add Questions</button>\n\n\n            \n\n        </div>\n\n    </div>\n    </div>\n        \n   \n     \n   \n       \n   \n   \n   \n   \n   </div>\n   \n\n   <div id=\"UploadedQuesModal\" class=\"modal fade\" role=\"dialog\">\n        <div class=\"modal-dialog\">\n    \n            <!-- Modal content-->\n            <div class=\"modal-content\">\n                <div class=\"modal-header\">\n                    <h4 class=\"modal-title\">Bulk Upload Status</h4>\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                </div>\n    \n                <div class=\"modal-body pt-0 pb-0\">\n    \n                    <div class=\"row pt-4 pb-4\">\n                        <div class=\"col-sm-4\">\n                            <label><b>Total no of questions :</b></label>\n                            <span class=\"pl-3 quesCountSize tot_count\">{{totalQuestionsCount}}</span>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <label><b>No .of success questions :</b></label>\n                            <span class=\"pl-3 quesCountSize succ_count\">{{questionsSuccessCount}}</span>\n                        </div>\n                        <div class=\"col-sm-4\">\n                            <label><b>No .of already exist questions :</b></label>\n                            <span class=\"pl-3 quesCountSize exist_count\">{{questionsExistCount}}</span>\n                        </div>\n                    </div>\n    \n                    <div class=\"row\">\n                        <table class=\"table text-center\" *ngIf=\"uploadedQues && !uploadedQues['questionResponseList'].length\">\n                            <tr class=\"text-center errorTxt\">\n                                <th colspan=\"3\">No Questions Uploaded</th>\n                            </tr>\n                        </table>\n                        <table class=\"table text-center\" *ngIf=\"uploadedQues && uploadedQues['questionResponseList'].length\">\n                            <thead>\n                                <tr>\n                                    <th>Question</th>\n                                    <!-- <th>Status</th> -->\n                                    <th>Message</th>\n                                </tr>\n                            </thead>\n                            <tbody>\n                                <tr *ngFor=\"let ques of uploadedQues['questionResponseList']\">\n                                    <td>{{ques.questionName}}</td>\n                                    <!-- <td>\n                                                <p *ngIf=\"ques.statusCode == 0\">Failed</p>\n                                                <p *ngIf=\"ques.statusCode == 1\">Uploaded</p>\n                                                <p *ngIf=\"ques.statusCode == 2\">Already Exists !</p>\n                                            </td> -->\n                                    <td [ngClass]=\"{'red_col': ques.statusCode == 0, 'green_col':ques.statusCode == 1, 'yellow_col':ques.statusCode == 2}\">{{ques.statusMessage}}</td>\n                                </tr>\n                            </tbody>\n                        </table>\n                    </div>\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                </div>\n            </div>\n    \n        </div>\n    </div>\n\n    <!-- Modal -->\n   \n    <div class=\"modal fade\" id=\"exampleModalCenter\" role=\"dialog\">\n        <div class=\"modal-dialog modal-lg\" role=\"document\">\n            <div class=\"modal-content\">\n\n                <div class=\"modal-body\">\n\n                        <div class=\"row\">\n                                <div class=\"col-sm-8 text-center\">\n                                    <!-- <h4 class=\"blueColor\">Add Questions</h4> -->\n                                </div>\n                                <div class=\"col-sm-4\">\n                                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\">\n                                        <span class=\"boxShadow\">\n                                            <i class=\"material-icons\">\n                                                clear\n                                            </i>\n                                        </span>\n            \n                                    </button>\n                                </div>\n                                <!-- <div class=\"col-sm-12\">\n                                    <hr>\n                                </div> -->\n                            </div>\n\n                    <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n                        <li class=\"nav-item col\" (click)=\"toggleBulk('1')\">\n                            <a [ngClass]=\"{'nav-link':true,'active':!bulkUpload}\" style=\"text-align: center;\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">Add Questions</a>\n                        </li>\n                        <li class=\"nav-item col\" (click)=\"toggleBulk('2')\">\n                            <a [ngClass]=\"{'nav-link':true,'active':bulkUpload}\" id=\"profile-tab\" style=\"text-align: center;\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">Bulk Upload</a>\n                        </li>\n\n                    </ul>\n\n                    <div class=\"tab-content\" id=\"myTabContent\" *ngIf=\"!bulkUpload\">\n\n                        <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n\n                            <!-- <div class=\"p-4 text-center\">\n                            <h4 class=\"blueColor\">Add Questions</h4>\n                            <hr>\n                        </div>\n         -->\n                            <!-- Created Question -->\n                            <div class=\"createdQuestion.length\">\n                                <div *ngFor=\"let ques of createdQuestion\">\n                                    <div class=\"pl-4 pr-4\">\n                                        <h4 class=\"blueColor\">Q. {{ques.qustionText}}</h4>\n                                        <div *ngIf=\"ques.questionTypeId == '1' || ques.questionTypeId == '2'\">\n                                            <p *ngFor=\"let opt of ques['optionsList'];let i=index\">\n                                                <b>{{i+1}}. </b>\n                                                <span class=\"pl-4\">{{opt.optionText}}</span>\n                                            </p>\n                                        </div>\n                                    </div>\n                                    <div *ngIf=\"ques.questionTypeId == '3' || ques.questionTypeId == '4' || ques.questionTypeId == '5' || ques.questionTypeId == '6'\">\n                                        <!-- <textarea rows=\"6\" cols=\"40\" name=\"answer\" [(ngModel)]=\"ques.answer\"></textarea> -->\n                                        <p>\n                                            {{ques.answer}}\n                                        </p>\n                                    </div>\n                                    <hr>\n                                </div>\n                            </div>\n                            <!-- End Created QUestion -->\n\n\n                            <!-- <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n                            <li class=\"nav-item col\">\n                                <a class=\"nav-link active\" style=\"text-align: center;\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\"\n                                    aria-selected=\"true\">Add Questions</a>\n                            </li>\n                            <li class=\"nav-item col\">\n                                <a class=\"nav-link\" id=\"profile-tab\" style=\"text-align: center;\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\"\n                                    aria-selected=\"false\">Bulk Upload</a>\n                            </li>\n        \n                        </ul> -->\n\n                            <div class=\"tab-content\" id=\"myTabContent\">\n\n                                <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n\n                                    <form #myForm=\"ngForm\" (ngSubmit)=\"addQuestion(myForm)\">\n\n\n                                        <div style=\"padding: 2rem 3rem;\n            text-align: left;\n            font-size: 14px;\">\n                                            <div class=\"form-row\">\n                                                <div class=\"form-group col-md-6\">\n                                                    <div class=\"form-row\">\n\n                                                        <div class=\"col-md-10\">\n                                                                \n\n                                                            <label for=\"firstName\">Question Title  <sup class=\"errorTxt\">*</sup></label>\n                                                            <!-- <input type=\"hidden\" name=\"sectionId\" #sectionId=\"ngModel\" ngModel/> -->\n                                                            <input type=\"text\" class=\"form-control\" id=\"questionTitle\" name=\"questionText\" ngModel placeholder=\"\" required>\n                                                        </div>\n\n                                                        <div class=\"col-md-2\" style=\"padding-top: 2rem;\">\n                                                            <!-- <i class=\"material-icons\" (click)=\"questionImg()\" style=\"cursor: pointer;\">\n                                                            image\n                                                        </i> -->\n                                                            <!-- <input type=\"file\" [hidden]=\"true\" (change)=\"onSelectedQuestionImage($event)\" id=\"imageId\"> -->\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <div class=\"form-group col-md-3\">\n                                                        <popover-content #questionTypePop \n                                                        title=\"\"\n                                                        placement=\"right\"\n                                                        [animation]=\"true\" \n                                                         style=\"box-shadow: 10px 10px 5px #aaaaaa;\">\n                                                        <span style=\"color: #646363;\"> Define the type of question.Eg.Multiple choice, descriptive,True/False etc</span>  \n                                                        \n                                                        </popover-content>\n                                                    <label for=\"lastName\">Question type <span><i style=\"    font-size: 13px;color: #969696;top: 2px;\"  [popoverOnHover]=\"true\" [popover]=\"questionTypePop\" class=\"material-icons\">info</i></span> <sup class=\"errorTxt\">*</sup></label>\n\n                                                    <select class=\"form-control\" id=\"questionType\" name=\"questionTypeId\" #questionTypeId=ngModel ngModel (change)=\"setType(questionTypeId.value)\" required>\n                                                    <option value=\"\"> Select Type</option>\n                                                    <option value=\"{{questionType.questionTypeId}}\" *ngFor=\"let questionType of questionTypeArr\">{{questionType.questionType}}</option>\n                                                </select>\n                                                </div>\n                                                <div class=\"form-group col-md-3\">\n                                                        <popover-content #complexity \n                                                        title=\"\"\n                                                        placement=\"right\"\n                                                        [animation]=\"true\" \n                                                         style=\"box-shadow: 10px 10px 5px #aaaaaa;\">\n                                                        <span style=\"color: #646363;\"> Identify the level of difficulty of the question. Easy/Basic, medium, Advanced etc </span>  \n                                                        \n                                                        </popover-content>\n                                                    <label for=\"lastName\">Complexity <span><i style=\"    font-size: 13px;color: #969696;top: 2px;\"  [popoverOnHover]=\"true\" [popover]=\"complexity\" class=\"material-icons\">info</i></span> <sup class=\"errorTxt\">*</sup></label>\n                                                    <select class=\"form-control\" id=\"complexity\" name=\"complexityId\" ngModel required>\n                                                    <option value=\"\">Select </option>\n                                                    <option value=\"{{complex.complexityId}}\" *ngFor=\"let complex of complexityArr\">{{complex.complexity}} </option>\n                                                </select>\n                                                </div>\n                                            </div>\n                                            <div class=\"form-row\">\n                                                <div class=\"form-group col-md-6\">\n                                                    <p>\n                                                            <popover-content #additionalData \n                                                            title=\"\"\n                                                            placement=\"right\"\n                                                            [animation]=\"true\" \n                                                             style=\"box-shadow: 10px 10px 5px #aaaaaa;\">\n                                                            <span style=\"color: #646363;\"> Use this to add specific instructions on the questions.Eg.Answer one of two.</span>  \n                                                            \n                                                            </popover-content>\n                                                        <a (click)=\"onAccordion()\" style=\"float: right;margin-right: 4rem;\" data-toggle=\"collapse\" href=\"#collapseExample\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseExample\">\n                                                        + Additional data <span><i style=\"    font-size: 13px;color: #969696;top: 2px;\"  [popoverOnHover]=\"true\" [popover]=\"additionalData\" class=\"material-icons\">info</i></span>\n                                                    </a>\n\n                                                    </p>\n                                                </div>\n                                            </div>\n                                            <div class=\"collapse\" id=\"collapseExample\">\n                                                <div style=\"border: 1px solid #c2c1e1;border-radius: 5px;\">\n                                                    <ul class=\"nav nav-tabs\" id=\"myTab2\" role=\"tablist\">\n                                                        <!-- <li class=\"nav-item col\">\n                                                        <a (click)=\"onAccordion()\" class=\"nav-link active\" style=\"text-align: center;\" id=\"text-tab\" data-toggle=\"tab\" href=\"#text\"\n                                                            role=\"tab\" aria-controls=\"text\" aria-selected=\"true\">Text</a>\n                                                    </li> -->\n                                                        <li class=\"nav-item col\">\n                                                            <a (click)=\"onCode()\" class=\"nav-link\" id=\"code-tab\" style=\"text-align: center;\" data-toggle=\"tab\" href=\"#code\" role=\"tab\" aria-controls=\"code\" aria-selected=\"false\">Text/Code</a>\n                                                        </li>\n\n                                                    </ul>\n                                                    <div class=\"tab-content\">\n                                                        <div class=\"tab-pane active\" id=\"text\" role=\"tabpanel\" aria-labelledby=\"text-tab\" style=\"padding:1rem\">\n\n                                                            <textarea id=\"txtarea\" class=\"form-control \" style=\"border:none\" spellcheck=\"false\" placeholder=\"Add description..\"></textarea>\n\n\n\n                                                        </div>\n                                                        <div class=\"tab-pane fade\" id=\"code\" role=\"tabpanel\" aria-labelledby=\"code-tab\" style=\"padding:1rem\">\n                                                            <textarea id=\"txtarea2\" class=\"form-control \" name=\"questionCode\" ngModel style=\"border:none\" spellcheck=\"false\" placeholder=\"Add Code..\"></textarea>\n\n                                                        </div>\n                                                    </div>\n\n                                                </div>\n                                            </div>\n\n                                            <div *ngIf=\"questionType == 1 || questionType == 2\">\n                                                <div *ngIf=\"optionList.length\">\n                                                <h5>Options</h5>\n                                                <hr>\n                                                </div>\n                                               \n                                                <mat-radio-group class=\"example-radio-group\">\n                                                <div *ngFor=\"let opt of optionList;let i=index\">\n                                                <div class=\"form-row pt-4\" (mouseover)=\"showDelete(i)\" (mouseleave)=\"hideDelete(i)\">\n                                                <div *ngIf=\"questionType == '1'\" class=\"col-sm-1\">\n                                               \n                                                <mat-radio-button class=\"example-radio-button\" (click)=\"setMcqAns(i)\" [value]=\"i\" class=\"correct_radio\">\n                                               \n                                                </mat-radio-button>\n                                                </div>\n                                                <div *ngIf=\"questionType == '2'\" class=\"check_green\">\n                                                <mat-checkbox class=\"example-margin\" (click)=\"checkboxAns(i)\"></mat-checkbox>\n                                                </div>\n                                                <div class=\"form-group col-md-4\">\n                                                <!-- <label for=\"email\">Option</label> -->\n                                                <!-- <input type=\"hidden\" class=\"form-control\" name=\"tempId\" ngModel=\"{{this.tempOptionImageId}}\"> -->\n                                                <input type=\"text\" class=\"form-control\" [(ngModel)]=\"optionObj[i].optionText\" [ngModelOptions]=\"{standalone:true}\">\n                                                <span id=\"close_{{i}}\" class=\"close_icon\" (click)=\"deleteOption(i)\" [hidden]=\"optionList.length == 1\">\n                                                <i class=\"material-icons\">\n                                                close\n                                                </i>\n                                                </span>\n                                               \n                                                </div>\n                                               \n                                                <div class=\" col-md-2 \" style=\"padding-top: 2.25rem; \">\n                                               \n                                                <i class=\"material-icons\" (click)=\"optionImg(i)\" style=\"cursor:pointer;\" *ngIf=\"questionType == '7'\">\n                                                image\n                                                </i>\n                                                <input type=\"file\" [hidden]=\"true \" (change)=\"onSelectedOptionImage($event,i)\" id=\"optionImageId{{i}}\">\n                                               \n                                                </div>\n                                               \n                                               \n                                                </div>\n                                                <button class=\"btn btn-link \" (click)=\"incOptionList()\" style=\"margin-left: 18%;\" *ngIf=\"optionList.length == i+1\">\n                                                + Add another option\n                                                </button>\n                                                </div>\n                                                </mat-radio-group>\n                                                </div>\n                                               \n                                               \n                                               \n                                                \n                                                <div class=\"form-row\">\n                                                <div class=\"form-group col-md-4 \">\n                                                <div *ngIf=\"questionType == 3 || questionType == 4 || questionType == 5 || questionType == 6\">\n                                                <label for=\"te \">Answer</label>\n                                                </div>\n                                                <div *ngIf=\"questionType == 3 || questionType == 4 || questionType == 5 || questionType == 6\">\n                                                <textarea rows=\"6\" cols=\"40\" name=\"answer\" ngModel></textarea>\n                                                </div>\n                                                <!-- <div *ngIf=\"questionType == 1 || questionType == 2\">\n                                                <input type=\"text \" class=\"form-control \" name=\"answer\" ngModel placeholder=\" \">\n                                                </div> -->\n                                                </div>\n                                                </div>\n\n\n\n                                            <!-- <div class=\"form-row \">\n            <div class=\"form-group col-md-4 \">\n            <label for=\"email \">Option</label>\n            <input type=\"text \" class=\"form-control \" id=\"option \" name=\"optionText \" [(ngModel)]=\"this.optionObj \" placeholder=\" \">\n            </div>\n           \n            <div class=\"col-md-2 \" style=\"padding-top: 2.25rem; \"> <i class=\"material-icons \" (click)=\"optionImg() \" style=\"cursor: pointer; \">\n            image\n            </i>\n            <input type=\"file \" [hidden]=\"true \" (change)=\"onSelectedOptionImage($event) \" id=\"optionImageId \">\n            </div>\n           \n            </div> -->\n                                            <!-- <div class=\"form-row \">\n            <div class=\"form-group col-md-4 \">\n            <label for=\"email \">Option</label>\n            <input type=\"text \" class=\"form-control \" id=\"option \" placeholder=\" \">\n            <a href=\"JavaScript:Void(0); \" style=\"float: right \">\n            + Add another option\n            </a>\n            </div>\n            <div class=\"col-md-2 \" style=\"padding-top: 2.25rem; \"> <i class=\"material-icons \" (click)=\"optionImg1() \" style=\"cursor: pointer; \">\n            image\n            </i>\n            <input type=\"file \" [hidden]=\"true \" (change)=\"onSelectedOptionImage($event) \" id=\"optionImageId1 \">\n            </div>\n            </div> -->\n                                             \n                                            <div class=\"col-md-12 pt-5 pl-0\">\n                                                <div style=\"float:left;margin-left: -2rem \">\n                                                    <!-- <label>Mandatory</label> -->\n                                                    <!-- <label class=\"container-mand\">\n                                                            <popover-content #manditoryPop \n                                                            title=\"\"\n                                                            placement=\"right\"\n                                                            [animation]=\"true\" \n                                                             style=\"box-shadow: 10px 10px 5px #aaaaaa;\">\n                                                            <span style=\"color: #646363;\"> Specify questions must be answered before progressing to the next question.</span>  \n                                                            \n                                                            </popover-content>\n                                                    <input id=\"check\" class=\"mt-2 mr-2\" type=\"checkbox\" name=\"isMandate\" ngModel>Mandatory<span><i style=\"    font-size: 13px;color: #969696;top: 2px;\"  [popoverOnHover]=\"true\" [popover]=\"manditoryPop\" class=\"material-icons\">info</i></span> \n                                                  \n                                                </label>-->\n\n                                                </div>\n                                                <div class=\"float-left mt-1 ml-4\">\n                                                    <section class=\"example-section\">\n                                                            <popover-content #globalPop \n                                                            title=\"\"\n                                                            placement=\"right\"\n                                                            [animation]=\"true\" \n                                                             style=\"box-shadow: 10px 10px 5px #aaaaaa;\">\n                                                            <span style=\"color: #646363;\"> Here you get the option to contribute your question to the global catalogue and help enrich the community.</span>  \n                                                            \n                                                            </popover-content>\n                                                        <mat-slide-toggle class=\"example-margin\" [color]=\"color\" [checked]=\"true\" data-toggle=\"toggle\" name=\"globaleShare\" ngModel>\n                                                            Contribute to Global Question Catalouge <span><i style=\"    font-size: 13px;color: #969696;top: 2px;\"  [popoverOnHover]=\"true\" [popover]=\"globalPop\" class=\"material-icons\">info</i></span>\n                                                        </mat-slide-toggle>\n                                                    </section>\n                                                </div>\n                                                <div style=\"float: right; \">\n\n                                                    <!-- <button type=\"button \" class=\"btn btn-primary \" style=\"background: #fff;color: #3D70B2;margin-right:2rem; border: 1px solid #3D70B2; height: 30px; line-height: 17px; border-radius: 0px; font-weight:\n            600; font-size: 15px; \" routerLink=\"sections \">+ Add Another Question</button>\n                                                <button type=\"button \" class=\"btn btn-primary \" style=\"background: #fff;color: #3D70B2;margin-right:2rem; border: 1px solid #3D70B2; height: 30px; line-height: 17px; border-radius: 0px; font-weight:\n            600; font-size: 15px; \" routerLink=\"sections \">Create New Section</button> -->\n\n                                                    <button type=\"submit \" class=\"btn btn-primary add_ques_btn\" [disabled]=\"!myForm.valid\" [ngClass]=\"{'cursor_not':!myForm.valid}\">\n                                                    Add Question</button>\n                                                </div>\n\n                                            </div>\n                                        </div>\n                                    </form>\n                                    <!-- <div class=\"alert alert-success\" style=\"text-align:center\" *ngIf=\"questionSuccesMessage\">\n                                        <span style=\"text-align:center\">{{this.statusMessage}}</span>\n                                    </div>\n                                    <div class=\"alert alert-danger\" style=\"text-align:center\" *ngIf=\"questionFailMessage\">\n                                        <span>{{this.statusMessage}}</span>\n                                    </div> -->\n\n\n\n                                    <div class=\"alert alert-success\" style=\"text-align:center\" *ngIf=\"optionImageSuccess\">\n                                        <span style=\"text-align:center\">{{this.optionStatusMessage}}</span>\n                                    </div>\n                                    <div class=\"alert alert-danger\" style=\"text-align:center\" *ngIf=\"optionImageFail\">\n                                        <span>{{this.optionStatusMessage}}</span>\n                                    </div>\n\n                                </div>\n                                <div class=\"tab-pane fade \" id=\"profile \" role=\"tabpanel \" aria-labelledby=\"profile-tab \">...</div>\n\n                            </div>\n\n\n                        </div>\n                        <div class=\"tab-pane fade \" id=\"profile \" role=\"tabpanel \" aria-labelledby=\"profile-tab \">...</div>\n\n                    </div>\n                    <div *ngIf=\"bulkUpload\">\n                        <div class=\"text-center\">\n                            <div class=\"pt-4\">\n                                <button class=\"btn btn-primary\" (click)=\"clickUpload()\">\n                                        <i class=\"material-icons\">\n                                            vertical_align_top\n                                        </i>\n                                        Choose File\n                                    </button>\n                                <small *ngIf=\"filesToUpload.length\" class=\"pl-5 blueColor\">{{filesToUpload[0].name}}</small>\n                                <small *ngIf=\"filesToUpload.length\" class=\"pl-3 redCol\">{{getSize(filesToUpload[0].size)}}</small>\n                                <input id=\"upload_file_btn\" [hidden]=\"true\" type=\"file\" (change)=\"uploadFile($event)\">\n                            </div>\n                            <div class=\"mt-5 mb-5\">\n                                <button class=\"btn btn-success\" (click)=\"uploadBulkQues()\">\n                                        Upload\n                                    </button>\n                            </div>\n                            <div class=\"mt-4 mb-4\">\n                                <button class=\"btn btn-link float-left\">\n                                        <a [href]=\"templateLink\" download> Download Template for Questions Bulk Upload </a>\n                                    </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n\n        \n    </div>\n    <div class=\"row m-2 report_result\">\n        <div class=\"col-sm-4 pl-5\">\n            <img src=\"./../../../assets/images/ncd_finalized_logo.png\" width=\"144px\" height=\"50px\" style=\"margin:0.28rem;padding-top:2px ;padding-bottom:2px ;\" />\n\n        </div>\n        <div class=\"col-sm-4 text-center ncd_link\">\n            <a href=\"https://www.nocheatingdude.com\" target=\"_blank\">www.nocheatingdude.com</a>\n        </div>\n        <div class=\"col-sm-4 text-center\">\n            <h4>\n                Stay In Touch\n            </h4>\n            <div style=\"padding: 1rem;\">\n                <a target=\"_blank\" href=\"https://www.facebook.com/nocheatingdude/\"> <img class=\"soc_icon\" alt=\"social icons\" src=\"./../../../assets/images/facebook.png\"></a>\n                <a target=\"_blank\" href=\"https://twitter.com/DudeCheating\"><img class=\"soc_icon\" alt=\"social icons\" src=\"./../../../assets/images/twitter.png\"></a>\n                <a target=\"_blank\" href=\" https://www.linkedin.com/company/no-cheating-dude/\"><img class=\"soc_icon\" alt=\"social icons\" src=\"./../../../assets/images/linkedin.png\"></a>\n            </div>\n        </div>\n\n        <div class=\"col-sm-12 p-0\">\n            <hr>\n        </div>\n\n        <div class=\"text-center col-sm-12\">\n            <p>Powered by NoCheatingDude</p>\n            <p>\n                Copyrights &copy; 2019 Nexii Automation People.All rights reserved.\n            </p>\n        </div>\n\n    </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/custom-toast/custom-toast.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/custom-toast/custom-toast.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" [style.display]=\"state.value === 'inactive' ? 'none' : ''\">\n    <div class=\"col-9\">\n      <div *ngIf=\"title\" [class]=\"options.titleClass\" [attr.aria-label]=\"title\">\n        {{ title }}\n      </div>\n      <div *ngIf=\"message && options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n        [class]=\"options.messageClass\" [innerHTML]=\"message\">\n      </div>\n      <div *ngIf=\"message && !options.enableHtml\" role=\"alert\" aria-live=\"polite\"\n        [class]=\"options.messageClass\" [attr.aria-label]=\"message\">\n        {{ message }}\n      </div>\n    </div>\n    <div class=\"col-3 text-right\">\n      \n        <div class=\"flexbox\">\n          <div>\n            <div class=\"bt-spinner\"></div>\n          </div>\n        \n        </div>\n       \n      \n      <a *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"btn btn-pink btn-sm\">\n        close\n      </a>\n    </div>\n  </div>\n  <div *ngIf=\"options.progressBar\">\n    <div class=\"toast-progress\" [style.width]=\"width + '%'\"></div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/downloads/downloads.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/downloads/downloads.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-sm-12 mt-4\">\n        <h4 class=\"p-0\">\n            <p>Downloads</p>\n        </h4>\n    </div>\n    <div class=\"col-sm-12\">\n        <hr class=\"m-0\">\n    </div>\n    <div class=\"row mt-4 col-sm-12\">\n        <div class=\"col-sm-6\">\n            <div class=\"d-flex boxShadow flex_bck\">\n                <div class=\"pt-4 pl-2 pr-2\">\n                    <span class=\"pointer boxShadow down_icon\" title=\"Download Bulk Upload Template\" \n                        (click)=\"downloadUploadTemp()\">\n                        <a [href]=\"templateLink\" download>\n                            <i class=\"material-icons\">\n                                cloud_download\n                            </i>\n                            <span>Download</span>\n                        </a>\n                        \n                    </span>\n                </div>\n                <div class=\"pt-4 flex-fill text-center\">\n                    <h6>Questions Bulk Upload Template</h6>\n                </div>\n            </div>\n        </div>\n        <div class=\"col-sm-6\">\n            <div class=\"d-flex boxShadow flex_bck\">\n                <div class=\"pt-4 pl-2 pr-2\">\n                    <span class=\"pointer boxShadow down_icon\"  title=\"Download Add Participate Template\">\n                        <a [href]=\"templateLinkPar\" download>\n                            <i class=\"material-icons\">\n                                cloud_download\n                            </i>\n                            <span>Download</span>\n                        </a>\n                        \n                    </span>\n                </div>\n                <div class=\"pt-4 flex-fill text-center\">\n                    <h6>Participants Bulk Upload Template</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/forgot-password/forgot-password.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/forgot-password/forgot-password.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<block-ui>\n\n</block-ui>\n<section class=\"tenant_reg_sec\">\n    <div class=\"tenant_reg_gradient\">\n        <div class=\"p-5\">\n            <img src=\"./../../../assets/images/ncd_finalized_logo.png\" width=\"144px\" height=\"50px\" style=\"margin:0.28rem;padding-top:2px ;padding-bottom:2px ;\" />\n        </div>\n        <div class=\"\">\n\n            <div class=\"form_tenant_reg\">\n                <h3 class=\" text-center signin_black\">Set Password</h3>\n                <hr class=\"signin_brdr\">\n                <div class=\"animated fadeInLeft\">\n                    <form class=\"mt-4 mb-5 set_pas_frm\" #setPass=\"ngForm\">\n                        <!-- <div class=\"form-group\">\n                                <label for=\"currentpassword\">Current Password</label>\n                                <input type=\"password\" class=\"form-control\" name=\"currentpassword\" id=\"currentpassword\" #currentpassword=\"ngModel\" ngModel\n                                    placeholder=\"Current Password\">\n                            </div> -->\n                        <div class=\"form-group\">\n                            <label for=\"password\">New Password</label>\n                            <input type=\"password\" class=\"form-control\" name=\"password\" #password=\"ngModel\" ngModel placeholder=\"New Password\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"confirmpassword\">Confirm Password</label>\n                            <input type=\"password\" class=\"form-control\" name=\"confirmpassword\" #confirmpassword=\"ngModel\" ngModel placeholder=\"Confirm Password\">\n                        </div>\n                        <div class=\"form-group\">\n                            <button class=\"btn btn-primary form-control\" (click)=\"setPassword(setPass)\">Confirm</button>\n                        </div>\n                    </form>\n                </div>\n\n                <!-- <h4 class=\"animated slideInUp\">India's one and only leading corporate online test platform.</h4> -->\n            </div>\n\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark header_nav pt-0 pb-0\">\n    <!-- Brand/logo -->\n    <!-- <a class=\"navbar-brand\" href=\"\">NO CHEATING DUDE</a> -->\n    <!-- <img src=\"./../../../assets/images/NCD-logo-small.png\" width=\"131px\" height=\"50px\" style=\"margin: 0.28rem;\" /> -->\n    <img src=\"./../../../assets/images/ncd_finalized_logo.png\" width=\"180px\" height=\"55px\" style=\"margin:0.28rem;padding-top:2px ;padding-bottom:2px ;\" />\n\n    <!-- Links -->\n    <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item user_icon dropdown\">\n            <a class=\"nav-link dropdown-toggle\" href=\"#\" data-toggle=\"dropdown\">{{getUsername()}}</a>\n            <div class=\"dropdown-menu\">\n                <a class=\"dropdown-item\">\n                    <span class=\"\">Role &nbsp; : </span> <b>{{getRoleName()}}</b>\n                </a>\n                <a class=\"dropdown-item pointer\" [routerLink]=\"['/settings']\">\n                    <span class=\"\">Profile</span>\n                </a>\n                <a class=\"dropdown-item pointer\" [routerLink]=\"['/set-password']\">\n                    <span class=\"\">Change Password</span>\n                </a>\n                <a class=\"dropdown-item pointer\" (click)=\"logout()\">\n                    <i class=\"material-icons\">\n            power_settings_new\n          </i>\n                    <span class=\"\">Logout</span>\n                </a>\n            </div>\n        </li>\n        <li class=\"nav-item user_icon\">\n\n            <img src=\"{{getUserImage()}} \" class=\"boxShadow \" style=\"padding:0px;\">\n        </li>\n        <!-- <li class=\"nav-item \">\n        <a class=\"nav-link \" href=\"# \">Link 3</a>\n      </li>  -->\n    </ul>\n</nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/manage-tests/manage-tests.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/manage-tests/manage-tests.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pt-4 pb-5 pl-4 pr-4 manage_test_tabs\">\n        <div class=\"row\">\n                <div class=\"col-sm-12 report_txt\">\n                    <h4>\n                        <p>List of Tests</p>\n                    </h4>\n                    <hr class=\"m-0\">\n                </div>\n            </div>\n            <div class=\"row m-0\">\n                    <input style=\"margin: 1rem;\" type=\"text\" placeholder=\"Search \" class=\"form-control\" [(ngModel)]=\"query\">\n                <table class=\"table   boxShadow   white_bg\" style=\"text-align:center;    margin: 0rem 1.1rem;\" >\n                    <tr class=\"tbl_hdng\">\n                        <th>S.No</th>\n                        <th>Test Title</th>\n                        <th>Complexity</th>\n                        <th>Test Duration</th>\n                        <th>Total Questions</th>\n                        <th>Pass ( % )</th>\n                        <th></th>\n                    </tr>\n                    <tbody *ngIf=\"activeTest.length\"  >\n                        <tr *ngFor=\"let test of activeTest | search:'testTitle':query;let i=index\"  >\n                            <td>{{i+1}}.</td>\n                            <td style=\"width: 35%;\">\n                                {{test.testTitle}}\n                            </td>\n                            \n                            <td>\n                                {{test.testComplexity}}\n                            </td>\n\n                            <td>\n                                {{test.testDuration}}\n                            </td>\n\n                            <td>\n                                {{test.testTotalQuestions}}\n                            </td>\n                            <td>\n                                {{test.passPercentage}}\n                            </td>\n                            <td>\n                                    <button type=\"button\"  [routerLink]=\"['/test-config',test.testConfigId,'done']\" class=\"btn btn-success\" style=\"\n                                    height: 30px;line-height: 17px;border-radius: 0px;width: 110px;font-weight: 600;font-size: 15px;\">Reuse</button>\n                            </td>\n                        </tr>\n                    </tbody>\n                    <tr *ngIf=\"!activeTest.length\" class=\"text-center errorTxt\">\n                        <td colspan=\"6\">No Tests Available</td>\n                    </tr>\n                </table>\n            </div>\n</div>\n\n\n<div class=\"pt-5 pb-5 pl-4 pr-4\">\n    <!-- <div class=\"row\">\n        <h4>Draft Tests</h4>\n        <table class=\"table m-4 boxShadow mt-4 mb-4 white_bg draft_table\">\n            <tbody *ngIf=\"draftTest.length\">\n                <tr>\n                    <th>Test Title</th>\n                    <th>Created On</th>\n                    <th>Question</th>\n                    <th>Pass ( % )</th>\n                    <th>Action</th>\n                </tr>\n                <tr *ngFor=\"let test of draftTest;let i=index\" [routerLink]=\"['/test-config',test.testConfigId,'edit']\" >\n                    <td>\n                        {{i+1}}. {{test.testTitle}}\n                    </td>\n                    <td *ngIf=\"test.createdOn !='null'\">\n                        {{test.createdOn}}\n                    </td>\n                    <td *ngIf=\"test.createdOn =='null'\">\n                        -\n                    </td>\n                    <td>\n                        {{test.testTotalQuestions}}\n                    </td>\n                    <td>\n                        {{test.passPercentage}}\n                    </td>\n                    <td>\n                        <span [matMenuTriggerFor]=\"menu\" class=\"pointer\">\n                            <i class=\"material-icons\">\n                                more_vert\n                            </i>\n                        </span>\n                        <mat-menu #menu=\"matMenu\">\n                            <button mat-menu-item (click)=\"deleteTestConfig(test)\">\n                                <span>Delete</span>\n                            </button>\n                        </mat-menu>\n                    </td>\n                </tr>\n            </tbody>\n            <tr class=\"text-center errorTxt\" *ngIf=\"!draftTest.length\">\n                <td>No Tests Available</td>\n            </tr>\n        </table>\n    </div> -->\n\n    <!-- <div class=\"row\">\n        <h4>Active Tests</h4>\n        <table class=\"table m-4 boxShadow mt-4 mb-4 white_bg\">\n            <tr>\n                <th>Test Title</th>\n                <th>Created On</th>\n                <th>Question</th>\n                <th>Pass ( % )</th>\n            </tr>\n            <tbody *ngIf=\"activeTest.length\">\n                <tr *ngFor=\"let test of activeTest;let i=index\" [routerLink]=\"['/test-config',test.testConfigId,'done']\" >\n\n                    <td>\n                        {{i+1}}. {{test.testTitle}}\n                    </td>\n                    <td *ngIf=\"test.createdOn !='null'\">\n                        {{test.createdOn}}\n                    </td>\n                    <td *ngIf=\"test.createdOn =='null'\">\n                        -\n                    </td>\n                    <td>\n                        {{test.testTotalQuestions}}\n                    </td>\n                    <td>\n                        {{test.passPercentage}}\n                    </td>\n                </tr>\n            </tbody>\n            <tr *ngIf=\"!activeTest.length\" class=\"text-center errorTxt\">\n                <td>No Tests Available</td>\n            </tr>\n        </table>\n    </div> -->\n\n    <!-- <div class=\"row\">\n        <h4>Completed Tests</h4>\n        <table class=\"table m-4 boxShadow mt-4 mb-4 white_bg\">\n            <thead>\n                <th>Test Title</th>\n                <th>Created On</th>\n                <th>Question</th>\n                <th>Pass ( % )</th>\n            </thead>\n            <tbody *ngIf=\"completedTest.length\">\n                <tr *ngFor=\"let test of completedTest;let i=index\">\n                    <td>\n                        {{i+1}}. {{test.testTitle}}\n                    </td>\n                    <td>{{test.createdOn | date:'mediumDate'}}</td>\n                    <td>{{test.testTotalQuestions}}</td>\n                    <td>{{test.passPercentage}}</td>\n                </tr>\n            </tbody>\n            <tr *ngIf=\"!completedTest.length\" class=\"text-center errorTxt\">\n                <td>No Tests Available</td>\n            </tr>\n        </table>\n    </div> -->\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/Components/sidenav/sidenav.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/Components/sidenav/sidenav.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidenav_Sec pt-4 pb-4 pr-4\">\n    <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item pointer\" *ngIf=\"checkPerm('Dash Board')\" [routerLinkActive]=\"['route_active']\" [routerLink]=\"['/dashboard']\">\n            <i class=\"material-icons\">\n                credit_card\n            </i> Dashboard\n        </li>\n\n        <!-- <li class=\"list-group-item list_expansion pt-0 pb-0\" *ngIf=\"checkPerm('UserManagement')\">\n            <mat-accordion>\n                <mat-expansion-panel>\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            Users\n                        </mat-panel-title>\n                    </mat-expansion-panel-header>\n                    <p>Create Test</p>\n                    <p>Manage Tests</p>\n                </mat-expansion-panel>\n            </mat-accordion>\n        </li> -->\n        <!-- <li class=\"list-group-item list_expansion pt-0 pb-0\" *ngIf=\"checkPerm('ListOfQuestions')\">\n            <mat-accordion>\n                <mat-expansion-panel>\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            Question\n                        </mat-panel-title>\n                    </mat-expansion-panel-header>\n                    <p>Create Test</p>\n                    <p>Manage Tests</p>\n                </mat-expansion-panel>\n            </mat-accordion>\n        </li> -->\n        <mat-accordion>\n            <li class=\"list-group-item list_expansion pt-0 pb-0 pointer test_li\" *ngIf=\"checkPerm('TestManagement')\">\n\n                <mat-expansion-panel>\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            <i class=\"material-icons\">\n                                insert_drive_file\n                            </i> Tests\n                        </mat-panel-title>\n                    </mat-expansion-panel-header>\n                    <p *ngIf=\"!isRecruiter\" routerLinkActive #taskSetup=\"routerLinkActive\" [ngClass]=\"{'test_li_active': taskSetup.isActive && !taskSection.isActive && !testInstance.isActive}\"\n                        class=\"pointer\" [routerLink]=\"['/test-setup' ]\">Create Test Master</p>\n                    <p *ngIf=\"!isRecruiter\" routerLinkActive #configureTest=\"routerLinkActive\" [ngClass]=\"{'test_li_active': configureTest.isActive || taskSection.isActive || testInstance.isActive}\"\n                        class=\"pointer\" [routerLink]=\"['/configure-tests']\">Create Test Instance</p>\n                    <p routerLinkActive #administerTest=\"routerLinkActive\" [ngClass]=\"{'test_li_active': administerTest.isActive || administerTestCreate.isActive}\"\n                        [routerLink]=\"['/administer-tests']\">Administer Test</p>\n                    <p routerLinkActive #administeredTest=\"routerLinkActive\" [ngClass]=\"{'test_li_active': administeredTest.isActive }\" class=\"pointer\"\n                        [routerLink]=\"['/manage-tests']\">Administered Tests</p>\n                    <span style=\"display: none\" routerLinkActive #taskSection=\"routerLinkActive\" class=\"pointer\" [routerLink]=\"['/test-setup/sections/']\">Administered Test</span>\n                    <span style=\"display: none\" routerLinkActive #administerTestCreate=\"routerLinkActive\" class=\"pointer\" [routerLink]=\"['/test-config/']\">Administered Test</span>\n                    <span style=\"display: none\" routerLinkActive #testInstance=\"routerLinkActive\" class=\"pointer\" [routerLink]=\"['/test-setup/instance/']\"></span>\n\n                </mat-expansion-panel>\n\n            </li>\n            <li class=\"list-group-item pointer\" *ngIf=\"checkPerm('EvaluateManagement')\" [routerLinkActive]=\"['route_active']\" [routerLink]=\"['/evaluate-tests']\">\n                <i class=\"material-icons\">\n                    assignment_turned_in\n                </i> Evaluate\n            </li>\n            <li class=\"list-group-item pointer\" *ngIf=\"checkPerm('TestManagement')\" [routerLinkActive]=\"['route_active']\" [routerLink]=\"['/reports']\">\n                <i class=\"material-icons\">\n                    bar_chart\n                </i>Test Reports</li>\n            <li class=\"list-group-item list_expansion pt-0 pb-0 pointer test_li\" *ngIf=\"checkPerm('TestManagement') && !isRecruiter\">\n                <mat-expansion-panel>\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            <span class=\"ques_bg\">?</span> Catalogue\n                        </mat-panel-title>\n                    </mat-expansion-panel-header>\n                    <p [routerLinkActive]=\"['test_li_active']\" class=\"pointer\" [routerLink]=\"['/sections']\">Sections</p>\n                    <p [routerLinkActive]=\"['test_li_active']\" class=\"pointer\" [routerLink]=\"['/list-questions']\">Questions Catalogue</p>\n                </mat-expansion-panel>\n\n            </li>\n            <li class=\"list-group-item pointer\" *ngIf=\"checkPerm('Content Verification')\" [routerLinkActive]=\"['route_active']\" [routerLink]=\"['/content-verification']\">\n                <i class=\"material-icons\">\n                    verified_user\n                </i>Verification</li>\n            <li class=\"list-group-item pointer\" *ngIf=\"checkPerm('UserManagement')\" [routerLinkActive]=\"['route_active']\" [routerLink]=\"['/list-users']\">\n                <i class=\"material-icons\">\n                    group_add\n                </i>Users</li>\n            <!-- <li class=\"list-group-item pointer pl-5 pt-2 pb-2\" *ngIf=\"checkPerm('ListOfQuestions')\" [routerLinkActive]=\"['route_active']\"\n            [routerLink]=\"['/list-questions']\">Question</li> -->\n\n\n            <!-- <li class=\"list-group-item\">Calendar</li> -->\n            <li class=\"list-group-item pointer\" [routerLinkActive]=\"['route_active']\" [routerLink]=\"['/settings']\">\n                <i class=\"material-icons\">\n                    account_circle\n                </i>Profile</li>\n            <li class=\"list-group-item pointer\" *ngIf=\"checkPerm('TestManagement') && !isRecruiter\" [routerLinkActive]=\"['route_active']\" [routerLink]=\"['/downloads']\">\n                <i class=\"material-icons\">\n                    cloud_download\n                </i>\n                Downloads\n            </li>\n\n            <!-- <li class=\"list-group-item list_expansion pt-0 pb-0 pointer perm_li\" *ngIf=\"isSuperUser()\">\n                <mat-expansion-panel>\n                    <mat-expansion-panel-header>\n                        <mat-panel-title>\n                            <i class=\"material-icons\">\n                                work\n                            </i>Activities\n                        </mat-panel-title>\n                    </mat-expansion-panel-header>\n                    <p>\n                        <mat-checkbox class=\"example-margin\" [checked]=\"disableAdmin()\" [color]=\"color\" [disabled]=\"disableAdmin()\">\n                            Admin\n                        </mat-checkbox>\n                    </p>\n                    <p>\n                        <mat-checkbox class=\"example-margin\" [(ngModel)]=\"rolesPermArr[0]\" [color]=\"color\" (click)=\"updateRoles('3',rolesPermArr[0])\" [checked]=\"disableTestManager()\">\n                            Test Manager\n                        </mat-checkbox>\n                    </p>\n                    <p>\n                        <mat-checkbox class=\"example-margin\" [(ngModel)]=\"rolesPermArr[1]\" [color]=\"color\" (click)=\"updateRoles('4',rolesPermArr[1])\" [checked]=\"disableEvaluator()\">\n                            Evaluator\n                        </mat-checkbox>\n                    </p>\n\n                </mat-expansion-panel>\n\n            </li> -->\n\n        </mat-accordion>\n    </ul>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-sm-12 p-0\" *ngIf=\"authService.isLogin()\">\n      <app-header></app-header>\n      \n    </div>\n  </div>  \n  <div class=\"row\" [ngClass]=\"{'tot_bg':authService.isSetPass(),'set_pass_grad':!authService.isSetPass()}\">\n    <div class=\"col-sm-2 p-0\" *ngIf=\"authService.isLogin() && authService.isSetPass()\">\n        <app-sidenav></app-sidenav>\n    </div>\n  <div [ngClass]=\"{'col-sm-10':authService.isLogin() && authService.isSetPass(),'col-sm-12':authService.isLogin() && !authService.isSetPass(),'col-sm-12 p-0':!authService.isLogin()}\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Modules/candidate-login/candidate-login.module": [
		"./src/app/Modules/candidate-login/candidate-login.module.ts",
		"default~Modules-candidate-login-candidate-login-module~Modules-candidate-registraion-candidate-regis~47072d10",
		"Modules-candidate-login-candidate-login-module"
	],
	"./Modules/candidate-registraion/candidate-registraion.module": [
		"./src/app/Modules/candidate-registraion/candidate-registraion.module.ts",
		"default~Modules-candidate-login-candidate-login-module~Modules-candidate-registraion-candidate-regis~47072d10",
		"Modules-candidate-registraion-candidate-registraion-module"
	],
	"./Modules/content-verification/content-verification.module": [
		"./src/app/Modules/content-verification/content-verification.module.ts",
		"Modules-content-verification-content-verification-module"
	],
	"./Modules/dashboard/dashboard.module": [
		"./src/app/Modules/dashboard/dashboard.module.ts",
		"Modules-dashboard-dashboard-module"
	],
	"./Modules/evaluate-candidate/evaluate-candidate.module": [
		"./src/app/Modules/evaluate-candidate/evaluate-candidate.module.ts",
		"Modules-evaluate-candidate-evaluate-candidate-module"
	],
	"./Modules/exam/exam.module": [
		"./src/app/Modules/exam/exam.module.ts",
		"default~Modules-exam-exam-module~Modules-test-config-test-config-module~Modules-test-setup-test-setu~36f7b676",
		"default~Modules-exam-exam-module~Modules-test-config-test-config-module",
		"Modules-exam-exam-module"
	],
	"./Modules/list-questions/list-questions.module": [
		"./src/app/Modules/list-questions/list-questions.module.ts",
		"Modules-list-questions-list-questions-module"
	],
	"./Modules/list-users/list-users.module": [
		"./src/app/Modules/list-users/list-users.module.ts",
		"Modules-list-users-list-users-module"
	],
	"./Modules/reports/reports.module": [
		"./src/app/Modules/reports/reports.module.ts",
		"Modules-reports-reports-module"
	],
	"./Modules/sections/sections.module": [
		"./src/app/Modules/sections/sections.module.ts",
		"default~Modules-sections-sections-module~Modules-test-setup-test-setup-module"
	],
	"./Modules/set-password/set-password.module": [
		"./src/app/Modules/set-password/set-password.module.ts",
		"Modules-set-password-set-password-module"
	],
	"./Modules/settings/settings.module": [
		"./src/app/Modules/settings/settings.module.ts",
		"Modules-settings-settings-module"
	],
	"./Modules/tenant-reg/tenant-reg.module": [
		"./src/app/Modules/tenant-reg/tenant-reg.module.ts",
		"Modules-tenant-reg-tenant-reg-module"
	],
	"./Modules/terms-condition/terms-condition.module": [
		"./src/app/Modules/terms-condition/terms-condition.module.ts",
		"Modules-terms-condition-terms-condition-module"
	],
	"./Modules/test-config/test-config.module": [
		"./src/app/Modules/test-config/test-config.module.ts",
		"default~Modules-exam-exam-module~Modules-test-config-test-config-module~Modules-test-setup-test-setu~36f7b676",
		"default~Modules-exam-exam-module~Modules-test-config-test-config-module",
		"Modules-test-config-test-config-module"
	],
	"./Modules/test-setup/test-setup.module": [
		"./src/app/Modules/test-setup/test-setup.module.ts",
		"default~Modules-exam-exam-module~Modules-test-config-test-config-module~Modules-test-setup-test-setu~36f7b676",
		"default~Modules-sections-sections-module~Modules-test-setup-test-setup-module",
		"Modules-test-setup-test-setup-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/Components/activation/activation.component.css":
/*!****************************************************************!*\
  !*** ./src/app/Components/activation/activation.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tenant_reg_sec{\n    /* height:100vh;\n    background-image: url('./../../../assets/images/office_building.jpg');\n    background-size: cover; */\n}\n.tenant_reg_gradient{\n    /* background-color: #12BCFF; */\n    /* background-color: #d63732; */\n    background-color: #2ECC71;\n    /* background-image: linear-gradient(0.40turn,rgba(61, 112, 178, 0.89), rgba(65, 214, 195, 0.89),rgba(85, 150, 230, 0.89)); */\n    height: 100vh;\n}\n.coc_title{\n    color: #ffffff;\n    font-weight: 700;\n}\n.form_tenant_reg h3{\n    /* color:#ffffff; */\n    font-weight: 700;\n}\n.form_tenant_reg h4{\n    color:#ffffff;\n}\n.form_tenant_reg{\n    position: absolute;\n    /* text-align:center; */\n    top: 30%;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n}\n.form_tenant_reg .form-control{\n    /* width:46%; */\n    margin:0 auto;\n    padding:24px 20px;\n    /* border:none; */\n    box-shadow: none;\n}\n.form_tenant_reg .btn-primary{\n    padding: 0px;\n    height: 46px;\n    /* background-color:#41D6C3;\n    border-color: #41D6C3; */\n    background-color: #d63732;\n    border-color: #d63732;\n}\n.form_tenant_reg .form-group{\n    /* margin-bottom:2rem; */\n}\n.form_tenant_reg .d-flex{\n    width:46%;\n    margin:0 auto;\n    color:#fff;\n}\n.active_tab::after{\n    width: 0;\n    height: 0;\n    border-left: 15px solid transparent;\n    border-right: 15px solid transparent;\n    border-bottom: 20px solid #ffffff;\n    content: \"\";\n    position: absolute;\n    left: 8px;\n    top: 44px;\n}\n.active_tab{\n    position: relative;\n    font-weight: 600;\n}\n/* new ui */\n.form_tenant_reg h3{\n    /* color:#ffffff; */\n    font-weight: 700;\n}\n.form_tenant_reg h4{\n    color:#ffffff;\n}\n.form_tenant_reg{\n    position: absolute;\n    /* text-align:center; */\n    top: 60%;\n    left: 50%;\n    -webkit-transform: translate(-50%,-50%);\n            transform: translate(-50%,-50%);\n}\n.form_tenant_reg .form-control{\n    /* width:46%; */\n    margin:0 auto;\n    padding:24px 20px;\n    border-color:#4B4B4B;\n    /* border:none; */\n    box-shadow: none;\n}\n.form_tenant_reg .btn-primary{\n    padding: 0px;\n    height: 46px;\n    /* background-color:#41D6C3;\n    border-color: #41D6C3; */\n    /* background-color:#12BCFF;\n    border-color:#12BCFF; */\n    /* background-color: #d63732;\n    border-color: #d63732; */\n    background-color: #2ECC71;\n    border-color: #2ECC71;\n}\n.form_tenant_reg .form-group{\n    /* margin-bottom:2rem; */\n}\n.form_tenant_reg .d-flex{\n    width:46%;\n    margin:0 auto;\n    color:#fff;\n}\n/*  new ui */\n.form_tenant_reg form{\n    width: 50%;\n    margin: 0 auto;\n}\n.form_tenant_reg{\n    background-color: #ffffff;\n    width: 700px;\n    color: #4b4b4b;\n    padding: 29px 0px;\n    box-shadow: 0 7px 16px #959595;\n}\n.form_tenant_reg label{\n    font-weight:600;\n}\n.signin_brdr{\n    /* border-top: 2px solid #d63732; */\n    border-top: 2px solid #2ECC71;\n    width: 50%;\n    margin: 6px auto;\n}\n.activate_text{\n    position: absolute;\n    width: 100%;\n    text-align: center;\n    top: 20%;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9hY3RpdmF0aW9uL2FjdGl2YXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJOzs2QkFFeUI7QUFDN0I7QUFDQTtJQUNJLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IseUJBQXlCO0lBQ3pCLDZIQUE2SDtJQUM3SCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUixTQUFTO0lBQ1QsbUNBQTJCO1lBQTNCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWjs0QkFDd0I7SUFDeEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLFVBQVU7QUFDZDtBQUNBO0lBQ0ksUUFBUTtJQUNSLFNBQVM7SUFDVCxtQ0FBbUM7SUFDbkMsb0NBQW9DO0lBQ3BDLGlDQUFpQztJQUNqQyxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxTQUFTO0FBQ2I7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFFQSxXQUFXO0FBQ1g7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUixTQUFTO0lBQ1QsdUNBQStCO1lBQS9CLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1o7NEJBQ3dCO0lBQ3hCOzJCQUN1QjtJQUN2Qjs0QkFDd0I7SUFDeEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxTQUFTO0lBQ1QsYUFBYTtJQUNiLFVBQVU7QUFDZDtBQUVBLFlBQVk7QUFDWjtJQUNJLFVBQVU7SUFDVixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9hY3RpdmF0aW9uL2FjdGl2YXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZW5hbnRfcmVnX3NlY3tcbiAgICAvKiBoZWlnaHQ6MTAwdmg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvb2ZmaWNlX2J1aWxkaW5nLmpwZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7ICovXG59XG4udGVuYW50X3JlZ19ncmFkaWVudHtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMTJCQ0ZGOyAqL1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNkNjM3MzI7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJFQ0M3MTtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMC40MHR1cm4scmdiYSg2MSwgMTEyLCAxNzgsIDAuODkpLCByZ2JhKDY1LCAyMTQsIDE5NSwgMC44OSkscmdiYSg4NSwgMTUwLCAyMzAsIDAuODkpKTsgKi9cbiAgICBoZWlnaHQ6IDEwMHZoO1xufVxuLmNvY190aXRsZXtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuLmZvcm1fdGVuYW50X3JlZyBoM3tcbiAgICAvKiBjb2xvcjojZmZmZmZmOyAqL1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uZm9ybV90ZW5hbnRfcmVnIGg0e1xuICAgIGNvbG9yOiNmZmZmZmY7XG59XG4uZm9ybV90ZW5hbnRfcmVne1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvKiB0ZXh0LWFsaWduOmNlbnRlcjsgKi9cbiAgICB0b3A6IDMwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuLmZvcm1fdGVuYW50X3JlZyAuZm9ybS1jb250cm9se1xuICAgIC8qIHdpZHRoOjQ2JTsgKi9cbiAgICBtYXJnaW46MCBhdXRvO1xuICAgIHBhZGRpbmc6MjRweCAyMHB4O1xuICAgIC8qIGJvcmRlcjpub25lOyAqL1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uZm9ybV90ZW5hbnRfcmVnIC5idG4tcHJpbWFyeXtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgaGVpZ2h0OiA0NnB4O1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IzQxRDZDMztcbiAgICBib3JkZXItY29sb3I6ICM0MUQ2QzM7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2MzczMjtcbiAgICBib3JkZXItY29sb3I6ICNkNjM3MzI7XG59XG4uZm9ybV90ZW5hbnRfcmVnIC5mb3JtLWdyb3Vwe1xuICAgIC8qIG1hcmdpbi1ib3R0b206MnJlbTsgKi9cbn1cbi5mb3JtX3RlbmFudF9yZWcgLmQtZmxleHtcbiAgICB3aWR0aDo0NiU7XG4gICAgbWFyZ2luOjAgYXV0bztcbiAgICBjb2xvcjojZmZmO1xufVxuLmFjdGl2ZV90YWI6OmFmdGVye1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItbGVmdDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmlnaHQ6IDE1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMjBweCBzb2xpZCAjZmZmZmZmO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDhweDtcbiAgICB0b3A6IDQ0cHg7XG59XG4uYWN0aXZlX3RhYntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLyogbmV3IHVpICovXG4uZm9ybV90ZW5hbnRfcmVnIGgze1xuICAgIC8qIGNvbG9yOiNmZmZmZmY7ICovXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5mb3JtX3RlbmFudF9yZWcgaDR7XG4gICAgY29sb3I6I2ZmZmZmZjtcbn1cbi5mb3JtX3RlbmFudF9yZWd7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8qIHRleHQtYWxpZ246Y2VudGVyOyAqL1xuICAgIHRvcDogNjAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xufVxuLmZvcm1fdGVuYW50X3JlZyAuZm9ybS1jb250cm9se1xuICAgIC8qIHdpZHRoOjQ2JTsgKi9cbiAgICBtYXJnaW46MCBhdXRvO1xuICAgIHBhZGRpbmc6MjRweCAyMHB4O1xuICAgIGJvcmRlci1jb2xvcjojNEI0QjRCO1xuICAgIC8qIGJvcmRlcjpub25lOyAqL1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG59XG4uZm9ybV90ZW5hbnRfcmVnIC5idG4tcHJpbWFyeXtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgaGVpZ2h0OiA0NnB4O1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IzQxRDZDMztcbiAgICBib3JkZXItY29sb3I6ICM0MUQ2QzM7ICovXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjojMTJCQ0ZGO1xuICAgIGJvcmRlci1jb2xvcjojMTJCQ0ZGOyAqL1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNkNjM3MzI7XG4gICAgYm9yZGVyLWNvbG9yOiAjZDYzNzMyOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRUNDNzE7XG4gICAgYm9yZGVyLWNvbG9yOiAjMkVDQzcxO1xufVxuLmZvcm1fdGVuYW50X3JlZyAuZm9ybS1ncm91cHtcbiAgICAvKiBtYXJnaW4tYm90dG9tOjJyZW07ICovXG59XG4uZm9ybV90ZW5hbnRfcmVnIC5kLWZsZXh7XG4gICAgd2lkdGg6NDYlO1xuICAgIG1hcmdpbjowIGF1dG87XG4gICAgY29sb3I6I2ZmZjtcbn1cblxuLyogIG5ldyB1aSAqL1xuLmZvcm1fdGVuYW50X3JlZyBmb3Jte1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG4uZm9ybV90ZW5hbnRfcmVne1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgd2lkdGg6IDcwMHB4O1xuICAgIGNvbG9yOiAjNGI0YjRiO1xuICAgIHBhZGRpbmc6IDI5cHggMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgN3B4IDE2cHggIzk1OTU5NTtcbn1cbi5mb3JtX3RlbmFudF9yZWcgbGFiZWx7XG4gICAgZm9udC13ZWlnaHQ6NjAwO1xufVxuLnNpZ25pbl9icmRye1xuICAgIC8qIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZDYzNzMyOyAqL1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMkVDQzcxO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luOiA2cHggYXV0bztcbn1cbi5hY3RpdmF0ZV90ZXh0e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdG9wOiAyMCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Components/activation/activation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Components/activation/activation.component.ts ***!
  \***************************************************************/
/*! exports provided: ActivationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivationComponent", function() { return ActivationComponent; });
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




var ActivationComponent = /** @class */ (function () {
    function ActivationComponent(router, activeRoute, apiService) {
        var _this = this;
        this.router = router;
        this.activeRoute = activeRoute;
        this.apiService = apiService;
        this.activeRoute.params.subscribe(function (params) {
            _this.tassdsdxwergtyuoIasddE = params['tassdsdxwergtyuoIasddE'];
            _this.encryptId = params['encryptId'];
        });
    }
    ActivationComponent.prototype.ngOnInit = function () {
        this.activateTenant();
    };
    ActivationComponent.prototype.activateTenant = function () {
        var _this = this;
        this.blockUI.start('Please Wait! We Are Activating Your Account');
        this.apiService.getAll('auth/tenant/activation?tassdsdxwergtyuoIasddE=' + encodeURIComponent(this.encryptId))
            .subscribe(function (res) {
            if (res['statusCode'] == 1) {
                _this.tenantActivated = true;
                _this.tenantUrl = res['loginurl'];
                _this.userDet = {
                    email: res['email'],
                    password: res['password']
                };
                _this.blockUI.stop();
                _this.apiService.successAlert(res['message']);
            }
            else if (res['statusCode'] == 4) {
                _this.allReadyActivated = true;
                _this.tenantUrl = res['loginurl'];
                _this.userDet = {
                    email: res['email'],
                    password: res['password']
                };
                _this.blockUI.stop();
                _this.apiService.successAlert(res['message']);
                if (res['defaulPasswordChangeStatus'] == 1) {
                    var companyDomainName = window.location.host.split('.')[0];
                    _this.blockUI.start('Please Wait ...');
                    var queryString = Object.keys(_this.userDet).map(function (key) { return key + '=' + _this.userDet[key]; }).join('&');
                    _this.apiService.postData("auth/authentication/userloginwithencryption?" + queryString + '&domain=' + companyDomainName, {})
                        .subscribe(function (ress) {
                        if (ress['statusCode'] == '1') {
                            if (ress['token']) {
                                localStorage.setItem("token", ress['token']);
                                var User = {
                                    userId: ress['userId'],
                                    userName: ress['userName']
                                };
                                localStorage.setItem("user", JSON.stringify(User));
                                localStorage.setItem("userId", ress['userId']);
                                localStorage.setItem("isSuper", ress['isSuperUser']);
                                localStorage.setItem('Permissions', JSON.stringify(ress['menuList']));
                                localStorage.setItem('isRoleSelected', ress['isRoleSeleted']);
                                localStorage.setItem('role', JSON.stringify({ 'id': ress['roleId'], 'name': ress['roleName'] }));
                                localStorage.setItem('userImage', ress['userImage']);
                                if (ress['isSuperUser'] && !ress['isAgreedTermsAndConditions']) {
                                    _this.router.navigate(['/terms-conditions']);
                                    _this.blockUI.stop();
                                }
                                else if (ress['isSuperUser'] == '1' && !ress['isRoleSeleted']) {
                                    _this.router.navigate(['/list-users'])
                                        .then(function () {
                                        _this.apiService.successAlert("You are Successfully logged in");
                                        _this.blockUI.stop();
                                    });
                                }
                                else if (ress['isSuperUser'] == '1' && ress['isRoleSeleted']) {
                                    _this.router.navigate(['/dashboard'])
                                        .then(function () {
                                        _this.apiService.successAlert("You are Successfully logged in");
                                        _this.blockUI.stop();
                                    });
                                }
                                else if (ress['roleId'] == '4') {
                                    _this.router.navigate(['/evaluate-tests'])
                                        .then(function () {
                                        _this.apiService.successAlert("You are Successfully logged in");
                                        _this.blockUI.stop();
                                    });
                                }
                                else {
                                    _this.router.navigate(['/dashboard'])
                                        .then(function () {
                                        _this.apiService.successAlert("You are Successfully logged in");
                                        _this.blockUI.stop();
                                    });
                                }
                            }
                            else {
                                _this.apiService.errorAlert(ress['message']);
                            }
                        }
                        else {
                            _this.blockUI.stop();
                            _this.apiService.errorAlert(ress['message']);
                        }
                    });
                }
            }
            else {
                _this.apiService.errorAlert(res['message']);
                _this.blockUI.stop();
            }
        }, function (error) {
            _this.blockUI.stop();
        });
    };
    ActivationComponent.prototype.setPassword = function (setPass) {
        var _this = this;
        // var companyDomainName =this.userDet.email.substring(this.userDet.email.indexOf('@')+1,this.userDet.email.lastIndexOf('.'));
        var companyDomainName = window.location.host.split('.')[0];
        this.blockUI.start('Please Wait ...');
        var queryString = Object.keys(this.userDet).map(function (key) { return key + '=' + _this.userDet[key]; }).join('&');
        var loginpath, changepasswordpath;
        if (this.allReadyActivated) {
            loginpath = "userloginwithencryption";
            changepasswordpath = "changepasswordwithencryption";
        }
        else {
            loginpath = "userloginwithencryption";
            changepasswordpath = "changepasswordwithencryption";
        }
        this.apiService.postData("auth/authentication/" + loginpath + "?" + queryString + '&domain=' + companyDomainName, {})
            .subscribe(function (res) {
            // this.blockUI.stop();
            if (res['statusCode'] == 1) {
                var data = setPass.value;
                data['currentpassword'] = _this.userDet.password;
                data['jwtToken'] = res['token'];
                var queryString = Object.keys(data).map(function (key) { return key + '=' + data[key]; }).join('&');
                if (data['newpassword'] == data['confirmpassword']) {
                    _this.blockUI.start('Please Wait we are Changing password...');
                    _this.apiService.postData('auth/authentication/' + changepasswordpath + '?' + queryString, {})
                        .subscribe(function (dat) {
                        // this.blockUI.stop();
                        if (res['statusCode'] == '1') {
                            setPass.reset();
                            if (res['token']) {
                                localStorage.setItem("token", res['token']);
                                var User = {
                                    userId: res['userId'],
                                    userName: res['userName']
                                };
                                localStorage.setItem("user", JSON.stringify(User));
                                localStorage.setItem("userId", res['userId']);
                                localStorage.setItem("isSuper", res['isSuperUser']);
                                localStorage.setItem('Permissions', JSON.stringify(res['menuList']));
                                localStorage.setItem('isRoleSelected', res['isRoleSeleted']);
                                localStorage.setItem('role', JSON.stringify({ 'id': res['roleId'], 'name': res['roleName'] }));
                                localStorage.setItem('userImage', res['userImage']);
                                if (!dat['defaulPasswordChangeStatus']) {
                                    _this.router.navigate(['/set-password']);
                                    _this.blockUI.stop();
                                }
                                else if (res['isSuperUser'] && !res['isAgreedTermsAndConditions']) {
                                    _this.router.navigate(['/terms-conditions']);
                                    _this.blockUI.stop();
                                }
                                else if (res['isSuperUser'] == '1' && !res['isRoleSeleted']) {
                                    _this.router.navigate(['/list-users'])
                                        .then(function () {
                                        _this.apiService.successAlert("You are Successfully logged in");
                                        _this.blockUI.stop();
                                    });
                                }
                                else if (res['isSuperUser'] == '1' && res['isRoleSeleted']) {
                                    _this.router.navigate(['/dashboard'])
                                        .then(function () {
                                        _this.apiService.successAlert("You are Successfully logged in");
                                        _this.blockUI.stop();
                                    });
                                }
                                else if (res['roleId'] == '4') {
                                    _this.router.navigate(['/evaluate-tests'])
                                        .then(function () {
                                        _this.apiService.successAlert("You are Successfully logged in");
                                        _this.blockUI.stop();
                                    });
                                }
                                else {
                                    _this.router.navigate(['/dashboard'])
                                        .then(function () {
                                        _this.apiService.successAlert("You are Successfully logged in");
                                        _this.blockUI.stop();
                                    });
                                }
                            }
                            else {
                                _this.apiService.errorAlert(res['message']);
                            }
                        }
                        else {
                            _this.blockUI.stop();
                            _this.apiService.errorAlert(res['message']);
                        }
                    }, function (error) {
                        _this.blockUI.stop();
                        _this.apiService.errorAlert(error['message']);
                    });
                }
                else {
                    _this.blockUI.stop();
                    _this.apiService.errorAlert('Password do not match');
                }
            }
        }, function (error) {
            _this.blockUI.stop();
        });
    };
    ActivationComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_2__["AllServicesService"] }
    ]; };
    __decorate([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_3__["BlockUI"])(),
        __metadata("design:type", Object)
    ], ActivationComponent.prototype, "blockUI", void 0);
    ActivationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-activation',
            template: __webpack_require__(/*! raw-loader!./activation.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/activation/activation.component.html"),
            styles: [__webpack_require__(/*! ./activation.component.css */ "./src/app/Components/activation/activation.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_2__["AllServicesService"]])
    ], ActivationComponent);
    return ActivationComponent;
}());



/***/ }),

/***/ "./src/app/Components/administer-test/administer-test.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/Components/administer-test/administer-test.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter_tbl{\n    background-color:#ffffff;\n}\n.filter_tbl tr:hover{\n    background-color: #E7F8EF;\n    color: #4B4B4B;\n    box-shadow: 0 1px 5px #959595;\n    cursor: pointer;\n    transition-delay: 0.3s;\n}\n.no_filter_tr:hover,.no_filter_tr{\n    background-color: inherit !important;\n    cursor: inherit !important;\n}\nhr{\n    border-top: 1px solid #707070;\n    margin-top: 0px;\n}\n.test_inst_tag i,.test_inst_view i{\n    color: #4B4B4B;\n    position: relative;\n    top: 2px;\n    margin: 0px 15px 0px 0px;\n}\n.test_tag{\n    margin: 0px 15px 0px 0px;\n}\n.test_inst_tag i,.test_tag i{\n    color: #3D70B2;\n}\n/* view instance */\n#instanceViewModal .modal-dialog,#instanceGlobalViewModal .modal-dialog{\n    max-width: 95%;\n}\n#instanceViewModal .close,#instanceGlobalViewModal .close{\n    background-color: #41D6C3;\n    padding: 5px 10px;\n    margin: 0px 0px 0px auto;\n    border-radius: 20px;\n    color: #000000;\n    text-shadow: none;\n}\n.inst_title{\n    color: #2C2C2C;\n    font-weight: bold;\n}\n.tags_view{\n    border:1px solid #707070;\n    padding:15px;\n}\n.tags_view_tbl{\n    padding:15px;\n    display:none;\n}\n.tags_view_tbl p{\n    background-color: #C4FFE0;\n    padding: 5px 11px;\n    margin: 0px 10px;\n}\n.test_inst_tag{\n    position: relative;\n}\n.test_inst_tag:hover .tags_view_tbl{\n    display: block;\n    position: absolute;\n    right: 50px;\n    background-color: #4B4B4B;\n    white-space: nowrap;\n}\n.tags_view_tbl span{\n    background-color: #C4FFE0;\n    padding: 5px 11px;\n    margin: 0px 10px;\n    color:#000000;\n}\n.tags_view span{\n    background-color: #C4FFE0;\n    padding: 5px 11px;\n    margin: 3px 10px;\n    display: inline-block;\n}\ntag-input-form input{\n    height: 28px;\n}\n.edit_inst_btn{\n    border: 1px solid #707070;\n}\n.edit_inst_btn i{\n    position: relative;\n    top: 5px;\n}\n.loading {\n   \n    position: relative;\n    margin: 0 15px 15px 0;\n    padding: 15px;\n    border: 1px #ccc solid;\n    border-radius: 4px;\n  }\n.card {\n    padding: 0rem;\n    padding-top: 15px !important;\n    border: none;\n    margin-left: 20px;\n    box-shadow: 0px 1px 6px 2px #cec9c9;\n}\nhr {\n    margin: 0rem -1.2rem;\n    border-top: 2px solid rgba(4, 2, 2, 0.31);\n}\n.card-body {\n    padding-bottom: 0rem;\n}\n.card-link {\n    padding: 0.5rem;\n    color: #3D70B2;\n    text-decoration: none;\n    background-color: transparent;\n    font-size: 12px;\n}\n.card-body {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.card-title {\n    font-size: 18px;\n    font-weight: 700;\n    color: #2C2C2C;\n    padding-bottom: 0.4rem;\n    margin-top: -1.5rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: 250px;\n}\n.card-subtitle {\n    font-size: 14px;\n    color: #707070!important;\n    padding-bottom: 0.4rem;\n}\n.card-text {\n    font-size: 12px;\n    opacity: 0.7;\n    color: #707070!important;\n    margin: 2px 0px;\n    \n}\n.col-md-4 {\n    flex: 0 0 27.333333%;\n    max-width: 33.333333%;\n    margin-bottom: 1rem;\n}\nh4{\n    padding: 1rem;\n    color: #3D70B2;\n    font-size: 24px;\n    font-weight: 300;\n}\nhr{\n    border-top: 1px solid #707070;\n    margin-top: 0px;\n}\n.modal-lg{\n    max-width: 1000px;\n}\n/* The container */\n.container {\n    display: block;\n    position: relative;\n    padding-left: 35px;\n    padding-top: 10px;\n    margin-bottom: 12px;\n    cursor: pointer;\n    font-size: 12px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}\n/* Hide the browser's default checkbox */\n.container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n}\n.container-mand input {\n    /* position: absolute;\n    cursor: pointer;\n    left: 15px;\n    top: 12px; */\n}\n/* Create a custom checkbox */\n.checkmark {\n    position: absolute;\n    top: 0;\n    right: 0;\n    height: 20px;\n    width: 20px;\n    margin-top: -3px;\n    background-color: #fff;\n    border: 1px solid black;\n}\n/* On mouse-over, add a grey background color */\n.container:hover input~.checkmark {\n    background-color: #fff;\n    border: 1px solid black;\n}\n/* When the checkbox is checked, add a blue background */\n.container input:checked~.checkmark {\n    background-color: #fff;\n    border: 1px solid black;\n}\n/* Create the checkmark/indicator (hidden when not checked) */\n.checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n}\n/* Show the checkmark when checked */\n.container input:checked~.checkmark:after {\n    display: block;\n}\n/* Style the checkmark/indicator */\n.container .checkmark:after {\n    left: 6px;\n    top: 0px;\n    width: 7px;\n    height: 15px;\n    border: solid #000;\n    border-width: 0 2px 2px 0;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n}\n#ad {\n    display: -ms-flexbox;\n    -ms-flex-pack: center;\n    -ms-flex-align: center;\n    /* Firefox */\n    display: -moz-box;\n    -moz-box-pack: center;\n    -moz-box-align: center;\n    /* Safari, Opera, and Chrome */\n    display: -webkit-box;\n    -webkit-box-pack: center;\n    -webkit-box-align: center;\n}\n.add_anoth_option{\n    background: inherit;\n    line-height: inherit;\n    color: #007ad9;\n    border-radius: inherit;\n    box-shadow: inherit;\n}\n.close_icon{\n    position: absolute;\n    color: #f44336;\n    right: -30px;\n    z-index: 9999;\n    top: 5px;\n    transition-delay: 0.2s;\n    visibility: hidden;\n}\n.close_icon i{\n    font-size:18px;\n    cursor: pointer;\n    font-weight:bold;\n}\n.sec-container{\n    background-color: #fbfbfb;\n    width: 91%;\n    margin: 20px 5px;\n    border: 1px solid #707070;\n}\n/* end */\n.vert_Btn{\n    position: relative;\n    top: 1px;\n    height:30px;\n}\n.not_fung_inst{\n    background-color: #ffffff;\n    margin: 35px 0px;\n    padding: 20px 0px;\n    font-size: 20px;\n}\n.not_allowed{\n    cursor: not-allowed;\n    opacity: 0.5;\n}\n.upward_arrow i{\n    color:#40BF37;\n}\n.downward_arrow i{\n    color:#FA7070;\n}\n.downward_arrow,.upward_arrow{\n    position: relative;\n    top: 6px;\n}\n@-webkit-keyframes blink {\n    /**\n     * At the start of the animation the dot\n     * has an opacity of .2\n     */\n    0% {\n      opacity: .2;\n    }\n    /**\n     * At 20% the dot is fully visible and\n     * then fades out slowly\n     */\n    20% {\n      opacity: 1;\n    }\n    /**\n     * Until it reaches an opacity of .2 and\n     * the animation can start again\n     */\n    100% {\n      opacity: .2;\n    }\n}\n@keyframes blink {\n    /**\n     * At the start of the animation the dot\n     * has an opacity of .2\n     */\n    0% {\n      opacity: .2;\n    }\n    /**\n     * At 20% the dot is fully visible and\n     * then fades out slowly\n     */\n    20% {\n      opacity: 1;\n    }\n    /**\n     * Until it reaches an opacity of .2 and\n     * the animation can start again\n     */\n    100% {\n      opacity: .2;\n    }\n}\n.saving span {\n    /**\n     * Use the blink animation, which is defined above\n     */\n    -webkit-animation-name: blink;\n            animation-name: blink;\n    /**\n     * The animation should take 1.4 seconds\n     */\n    -webkit-animation-duration: 1.4s;\n            animation-duration: 1.4s;\n    /**\n     * It will repeat itself forever\n     */\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    /**\n     * This makes sure that the starting style (opacity: .2)\n     * of the animation is applied before the animation starts.\n     * Otherwise we would see a short flash or would have\n     * to set the default styling of the dots to the same\n     * as the animation. Same applies for the ending styles.\n     */\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both;\n}\n.saving span:nth-child(2) {\n    /**\n     * Starts the animation of the third dot\n     * with a delay of .2s, otherwise all dots\n     * would animate at the same time\n     */\n    -webkit-animation-delay: .2s;\n            animation-delay: .2s;\n}\n.saving span:nth-child(3) {\n    /**\n     * Starts the animation of the third dot\n     * with a delay of .4s, otherwise all dots\n     * would animate at the same time\n     */\n    -webkit-animation-delay: .4s;\n            animation-delay: .4s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9hZG1pbmlzdGVyLXRlc3QvYWRtaW5pc3Rlci10ZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7QUFJQTtJQUNJLG9DQUFvQztJQUNwQywwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUVBLGtCQUFrQjtBQUNsQjtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx3QkFBd0I7SUFDeEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtBQUNaO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjtBQUNGO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1DQUFtQztBQUN2QztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHlDQUF5QztBQUM3QztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksaURBQWlEO0FBQ3JEO0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixlQUFlOztBQUVuQjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUVBLGtCQUFrQjtBQUVsQjtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7QUFHQSx3Q0FBd0M7QUFFeEM7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGVBQWU7SUFDZixTQUFTO0lBQ1QsUUFBUTtBQUNaO0FBRUE7SUFDSTs7O2dCQUdZO0FBQ2hCO0FBR0EsNkJBQTZCO0FBRTdCO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjtBQUdBLCtDQUErQztBQUUvQztJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7QUFHQSx3REFBd0Q7QUFFeEQ7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCO0FBR0EsNkRBQTZEO0FBRTdEO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCO0FBR0Esb0NBQW9DO0FBRXBDO0lBQ0ksY0FBYztBQUNsQjtBQUdBLGtDQUFrQztBQUVsQztJQUNJLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLGdDQUFnQztJQUVoQyx3QkFBd0I7QUFDNUI7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsb0JBQW9CO0lBQ3BCLHdCQUF3QjtJQUN4Qix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsWUFBWTtJQUNaLGFBQWE7SUFDYixRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFHQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3QjtBQUNBLFFBQVE7QUFDUjtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjtBQUdBO0lBQ0k7OztNQUdFO0lBQ0Y7TUFDRSxXQUFXO0lBQ2I7SUFDQTs7O01BR0U7SUFDRjtNQUNFLFVBQVU7SUFDWjtJQUNBOzs7TUFHRTtJQUNGO01BQ0UsV0FBVztJQUNiO0FBQ0o7QUF0QkE7SUFDSTs7O01BR0U7SUFDRjtNQUNFLFdBQVc7SUFDYjtJQUNBOzs7TUFHRTtJQUNGO01BQ0UsVUFBVTtJQUNaO0lBQ0E7OztNQUdFO0lBQ0Y7TUFDRSxXQUFXO0lBQ2I7QUFDSjtBQUVBO0lBQ0k7O01BRUU7SUFDRiw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCOztNQUVFO0lBQ0YsZ0NBQXdCO1lBQXhCLHdCQUF3QjtJQUN4Qjs7TUFFRTtJQUNGLDJDQUFtQztZQUFuQyxtQ0FBbUM7SUFDbkM7Ozs7OztNQU1FO0lBQ0YsaUNBQXlCO1lBQXpCLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0k7Ozs7TUFJRTtJQUNGLDRCQUFvQjtZQUFwQixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJOzs7O01BSUU7SUFDRiw0QkFBb0I7WUFBcEIsb0JBQW9CO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9hZG1pbmlzdGVyLXRlc3QvYWRtaW5pc3Rlci10ZXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmlsdGVyX3RibHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XG59XG4uZmlsdGVyX3RibCB0cjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTdGOEVGO1xuICAgIGNvbG9yOiAjNEI0QjRCO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCAjOTU5NTk1O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjNzO1xufVxuXG4gXG4gXG4ubm9fZmlsdGVyX3RyOmhvdmVyLC5ub19maWx0ZXJfdHJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgIGN1cnNvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xufVxuaHJ7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3MDcwNzA7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xufVxuLnRlc3RfaW5zdF90YWcgaSwudGVzdF9pbnN0X3ZpZXcgaXtcbiAgICBjb2xvcjogIzRCNEI0QjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAycHg7XG4gICAgbWFyZ2luOiAwcHggMTVweCAwcHggMHB4O1xufVxuLnRlc3RfdGFne1xuICAgIG1hcmdpbjogMHB4IDE1cHggMHB4IDBweDtcbn1cbi50ZXN0X2luc3RfdGFnIGksLnRlc3RfdGFnIGl7XG4gICAgY29sb3I6ICMzRDcwQjI7XG59XG5cbi8qIHZpZXcgaW5zdGFuY2UgKi9cbiNpbnN0YW5jZVZpZXdNb2RhbCAubW9kYWwtZGlhbG9nLCNpbnN0YW5jZUdsb2JhbFZpZXdNb2RhbCAubW9kYWwtZGlhbG9ne1xuICAgIG1heC13aWR0aDogOTUlO1xufVxuI2luc3RhbmNlVmlld01vZGFsIC5jbG9zZSwjaW5zdGFuY2VHbG9iYWxWaWV3TW9kYWwgLmNsb3Nle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MUQ2QzM7XG4gICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgbWFyZ2luOiAwcHggMHB4IDBweCBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XG59XG4uaW5zdF90aXRsZXtcbiAgICBjb2xvcjogIzJDMkMyQztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cbi50YWdzX3ZpZXd7XG4gICAgYm9yZGVyOjFweCBzb2xpZCAjNzA3MDcwO1xuICAgIHBhZGRpbmc6MTVweDtcbn1cbi50YWdzX3ZpZXdfdGJse1xuICAgIHBhZGRpbmc6MTVweDtcbiAgICBkaXNwbGF5Om5vbmU7XG59XG4udGFnc192aWV3X3RibCBwe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDNEZGRTA7XG4gICAgcGFkZGluZzogNXB4IDExcHg7XG4gICAgbWFyZ2luOiAwcHggMTBweDtcbn1cbi50ZXN0X2luc3RfdGFne1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi50ZXN0X2luc3RfdGFnOmhvdmVyIC50YWdzX3ZpZXdfdGJse1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEI0QjRCO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4udGFnc192aWV3X3RibCBzcGFue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDNEZGRTA7XG4gICAgcGFkZGluZzogNXB4IDExcHg7XG4gICAgbWFyZ2luOiAwcHggMTBweDtcbiAgICBjb2xvcjojMDAwMDAwO1xufVxuLnRhZ3NfdmlldyBzcGFue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNDNEZGRTA7XG4gICAgcGFkZGluZzogNXB4IDExcHg7XG4gICAgbWFyZ2luOiAzcHggMTBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbnRhZy1pbnB1dC1mb3JtIGlucHV0e1xuICAgIGhlaWdodDogMjhweDtcbn1cbi5lZGl0X2luc3RfYnRue1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG59XG4uZWRpdF9pbnN0X2J0biBpe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDVweDtcbn1cbi5sb2FkaW5nIHtcbiAgIFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgMTVweCAxNXB4IDA7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBib3JkZXI6IDFweCAjY2NjIHNvbGlkO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuLmNhcmQge1xuICAgIHBhZGRpbmc6IDByZW07XG4gICAgcGFkZGluZy10b3A6IDE1cHggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IDFweCA2cHggMnB4ICNjZWM5Yzk7XG59XG5cbmhyIHtcbiAgICBtYXJnaW46IDByZW0gLTEuMnJlbTtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgcmdiYSg0LCAyLCAyLCAwLjMxKTtcbn1cblxuLmNhcmQtYm9keSB7XG4gICAgcGFkZGluZy1ib3R0b206IDByZW07XG59XG5cbi5jYXJkLWxpbmsge1xuICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICBjb2xvcjogIzNENzBCMjtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBjb2xvcjogIzJDMkMyQztcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xuICAgIG1hcmdpbi10b3A6IC0xLjVyZW07XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdpZHRoOiAyNTBweDtcbn1cblxuLmNhcmQtc3VidGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzcwNzA3MCFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcbn1cblxuLmNhcmQtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG9wYWNpdHk6IDAuNztcbiAgICBjb2xvcjogIzcwNzA3MCFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAycHggMHB4O1xuICAgIFxufVxuXG4uY29sLW1kLTQge1xuICAgIGZsZXg6IDAgMCAyNy4zMzMzMzMlO1xuICAgIG1heC13aWR0aDogMzMuMzMzMzMzJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG5oNHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGNvbG9yOiAjM0Q3MEIyO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuaHJ7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3MDcwNzA7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xufVxuXG4ubW9kYWwtbGd7XG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XG59XG5cbi8qIFRoZSBjb250YWluZXIgKi9cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctbGVmdDogMzVweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuXG4vKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xuXG4uY29udGFpbmVyIGlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiAwO1xufVxuXG4uY29udGFpbmVyLW1hbmQgaW5wdXQge1xuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbGVmdDogMTVweDtcbiAgICB0b3A6IDEycHg7ICovXG59XG5cblxuLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXG5cbi5jaGVja21hcmsge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cblxuLmNvbnRhaW5lcjpob3ZlciBpbnB1dH4uY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG5cbi8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xuXG4uY29udGFpbmVyIGlucHV0OmNoZWNrZWR+LmNoZWNrbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuXG4vKiBDcmVhdGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xuXG4uY2hlY2ttYXJrOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi8qIFNob3cgdGhlIGNoZWNrbWFyayB3aGVuIGNoZWNrZWQgKi9cblxuLmNvbnRhaW5lciBpbnB1dDpjaGVja2Vkfi5jaGVja21hcms6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cbi8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXG5cbi5jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XG4gICAgbGVmdDogNnB4O1xuICAgIHRvcDogMHB4O1xuICAgIHdpZHRoOiA3cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIGJvcmRlcjogc29saWQgIzAwMDtcbiAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4jYWQge1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIC8qIEZpcmVmb3ggKi9cbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAvKiBTYWZhcmksIE9wZXJhLCBhbmQgQ2hyb21lICovXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG59XG4uYWRkX2Fub3RoX29wdGlvbntcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIGNvbG9yOiAjMDA3YWQ5O1xuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgYm94LXNoYWRvdzogaW5oZXJpdDtcbn1cbi5jbG9zZV9pY29ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogI2Y0NDMzNjtcbiAgICByaWdodDogLTMwcHg7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICB0b3A6IDVweDtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5jbG9zZV9pY29uIGl7XG4gICAgZm9udC1zaXplOjE4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG59XG4gXG5cbi5zZWMtY29udGFpbmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmYmZiZmI7XG4gICAgd2lkdGg6IDkxJTtcbiAgICBtYXJnaW46IDIwcHggNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG59XG4vKiBlbmQgKi9cbi52ZXJ0X0J0bntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxcHg7XG4gICAgaGVpZ2h0OjMwcHg7XG59XG4ubm90X2Z1bmdfaW5zdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIG1hcmdpbjogMzVweCAwcHg7XG4gICAgcGFkZGluZzogMjBweCAwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuLm5vdF9hbGxvd2Vke1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgb3BhY2l0eTogMC41O1xufVxuLnVwd2FyZF9hcnJvdyBpe1xuICAgIGNvbG9yOiM0MEJGMzc7XG59XG4uZG93bndhcmRfYXJyb3cgaXtcbiAgICBjb2xvcjojRkE3MDcwO1xufVxuLmRvd253YXJkX2Fycm93LC51cHdhcmRfYXJyb3d7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNnB4O1xufVxuXG5cbkBrZXlmcmFtZXMgYmxpbmsge1xuICAgIC8qKlxuICAgICAqIEF0IHRoZSBzdGFydCBvZiB0aGUgYW5pbWF0aW9uIHRoZSBkb3RcbiAgICAgKiBoYXMgYW4gb3BhY2l0eSBvZiAuMlxuICAgICAqL1xuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IC4yO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBBdCAyMCUgdGhlIGRvdCBpcyBmdWxseSB2aXNpYmxlIGFuZFxuICAgICAqIHRoZW4gZmFkZXMgb3V0IHNsb3dseVxuICAgICAqL1xuICAgIDIwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVbnRpbCBpdCByZWFjaGVzIGFuIG9wYWNpdHkgb2YgLjIgYW5kXG4gICAgICogdGhlIGFuaW1hdGlvbiBjYW4gc3RhcnQgYWdhaW5cbiAgICAgKi9cbiAgICAxMDAlIHtcbiAgICAgIG9wYWNpdHk6IC4yO1xuICAgIH1cbn1cblxuLnNhdmluZyBzcGFuIHtcbiAgICAvKipcbiAgICAgKiBVc2UgdGhlIGJsaW5rIGFuaW1hdGlvbiwgd2hpY2ggaXMgZGVmaW5lZCBhYm92ZVxuICAgICAqL1xuICAgIGFuaW1hdGlvbi1uYW1lOiBibGluaztcbiAgICAvKipcbiAgICAgKiBUaGUgYW5pbWF0aW9uIHNob3VsZCB0YWtlIDEuNCBzZWNvbmRzXG4gICAgICovXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxLjRzO1xuICAgIC8qKlxuICAgICAqIEl0IHdpbGwgcmVwZWF0IGl0c2VsZiBmb3JldmVyXG4gICAgICovXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgLyoqXG4gICAgICogVGhpcyBtYWtlcyBzdXJlIHRoYXQgdGhlIHN0YXJ0aW5nIHN0eWxlIChvcGFjaXR5OiAuMilcbiAgICAgKiBvZiB0aGUgYW5pbWF0aW9uIGlzIGFwcGxpZWQgYmVmb3JlIHRoZSBhbmltYXRpb24gc3RhcnRzLlxuICAgICAqIE90aGVyd2lzZSB3ZSB3b3VsZCBzZWUgYSBzaG9ydCBmbGFzaCBvciB3b3VsZCBoYXZlXG4gICAgICogdG8gc2V0IHRoZSBkZWZhdWx0IHN0eWxpbmcgb2YgdGhlIGRvdHMgdG8gdGhlIHNhbWVcbiAgICAgKiBhcyB0aGUgYW5pbWF0aW9uLiBTYW1lIGFwcGxpZXMgZm9yIHRoZSBlbmRpbmcgc3R5bGVzLlxuICAgICAqL1xuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XG59XG5cbi5zYXZpbmcgc3BhbjpudGgtY2hpbGQoMikge1xuICAgIC8qKlxuICAgICAqIFN0YXJ0cyB0aGUgYW5pbWF0aW9uIG9mIHRoZSB0aGlyZCBkb3RcbiAgICAgKiB3aXRoIGEgZGVsYXkgb2YgLjJzLCBvdGhlcndpc2UgYWxsIGRvdHNcbiAgICAgKiB3b3VsZCBhbmltYXRlIGF0IHRoZSBzYW1lIHRpbWVcbiAgICAgKi9cbiAgICBhbmltYXRpb24tZGVsYXk6IC4ycztcbn1cblxuLnNhdmluZyBzcGFuOm50aC1jaGlsZCgzKSB7XG4gICAgLyoqXG4gICAgICogU3RhcnRzIHRoZSBhbmltYXRpb24gb2YgdGhlIHRoaXJkIGRvdFxuICAgICAqIHdpdGggYSBkZWxheSBvZiAuNHMsIG90aGVyd2lzZSBhbGwgZG90c1xuICAgICAqIHdvdWxkIGFuaW1hdGUgYXQgdGhlIHNhbWUgdGltZVxuICAgICAqL1xuICAgIGFuaW1hdGlvbi1kZWxheTogLjRzO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Components/administer-test/administer-test.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Components/administer-test/administer-test.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdministerTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministerTestComponent", function() { return AdministerTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Services/AllServices/all-services.service */ "./src/app/Services/AllServices/all-services.service.ts");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/fesm5/ngx-loading.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdministerTestComponent = /** @class */ (function () {
    function AdministerTestComponent(apiService, toastr) {
        this.apiService = apiService;
        this.toastr = toastr;
        this.items = [];
        this.color = 'primary';
        this.localInstance = true;
        this.tagList = [];
        this.localTagList = [];
        this.sectionsData = [];
        this.createdQuestion = [];
        this.testSetups = {
            'listOfTestSetups': []
        };
        this.ngxLoadingAnimationTypes = ngx_loading__WEBPACK_IMPORTED_MODULE_3__["ngxLoadingAnimationTypes"];
        this.isRecruiter = false;
        this.localPageNo = 1;
        this.pageNo = 1;
        this.globalInstanceCount = 0;
        this.localInstanceCount = 0;
        this.selectedTags = [];
        this.query = '';
        this.globPageFlag = false;
        var domain = window.location.hostname;
        this.tenantName = domain.split('.')[0];
    }
    AdministerTestComponent.prototype.handleKeyDown = function (event) {
        // console.log(event.code);
        if (event.code == "Enter") {
            //  this.addNode(tree,node,sub,2):temp=0
        }
    };
    AdministerTestComponent.prototype.hideInput = function () {
    };
    AdministerTestComponent.prototype.checkRec = function () {
        var roleList = JSON.parse(localStorage.getItem('role'));
        if (roleList.name == 'Recruiter') {
            // console.log(window.location.hostname.split('.')[0]);
            if (window.location.hostname.split('.')[0] == 'recruiter') {
                this.isRecruiter = true;
            }
            else {
                this.isRecruiter = false;
            }
        }
    };
    AdministerTestComponent.prototype.goToLink = function (instanceId) {
        console.log(instanceId);
        console.log(window.location.href.split('#')[0]);
        var tempurl = window.location.href.split('#')[0] + '#/contribute/' + instanceId;
        var url = 'https://www.linkedin.com/shareArticle?mini=true&url=' + tempurl + '&title=NoCheatingdude&summary=My%20favorite%20developer%20program&source=NoCheatingdude';
        window.open(encodeURIComponent(url), "", "width=500,height=500");
    };
    AdministerTestComponent.prototype.onLocalPageChange = function (event) {
        this.localPageNo = event;
        this.getTestSetups(this.localPageNo - 1, '');
    };
    AdministerTestComponent.prototype.onPageChange = function (event) {
        var _this = this;
        this.pageNo = event;
        // console.log(event);
        this.blockUI.start('Please Wait We Are Fetching Global Test Instances ...');
        this.apiService.getAll('testmanagement/testinstance/globaltestinstance?token=' + localStorage.getItem('token') + '&instanceOffset=' + (this.pageNo - 1) + '&tagKeyword=')
            .subscribe(function (res) {
            if (res['statusCode'] == '1') {
                _this.globalTestSetup = res;
                _this.globPageFlag = true;
            }
            _this.blockUI.stop();
        }, function (error) {
            _this.blockUI.stop();
        }, function () {
            _this.globalTestSetup["listOfGlobalTestInstances"].forEach(function (element) {
                element.processing = false;
            });
        });
    };
    AdministerTestComponent.prototype.ngOnInit = function () {
        this.loading = true;
        this.getLocalTags();
        this.checkRec();
        this.getTestSetups(0, '');
        // this.getAllSections();
        $('.modal').on('show.bs.modal', function () {
            $("body").css('overflow', 'hidden');
            $('.modal').css('overflow', 'auto');
        });
        $('#instanceViewModal').on("hidden.bs.modal", function () {
            $("body").css('overflow', 'auto');
            $('.modal').css('overflow', 'hidden');
        });
    };
    AdministerTestComponent.prototype.getTestSetups = function (offset, tag) {
        var _this = this;
        this.blockUI.start("Please Wait ...");
        // this.testSetups = {"statusCode":1,"statusMessage":"List of TestInstances.","listOfTestInstances":[{"instanceId":1,"instanceTitle":"Data Science Python","instanceAliasTitle":null,"testId":0,"finishStatus":0,"deleteStatus":0,"createdBy":0,"updatedBy":0,"deletedBy":0,"createdOn":null,"updatedOn":null,"deletedOn":null,"testOwner":"Mahesh Chandolu","testSetupTitle":"Data Science","administeredTestCount":2}]};
        this.apiService.getAll('testmanagement/testsetup/listoftestinstances?token=' + localStorage.getItem('token') + '&instanceOffset=' + offset + '&tagKeyword=' + tag)
            .subscribe(function (res) {
            _this.blockUI.stop();
            if (res["statusCode"] == 1) {
                _this.testSetups = res;
                _this.localInstanceCount = res['localInstanceCount'];
            }
        }, function (error) {
            _this.blockUI.stop();
        }, function () {
            _this.blockUI.stop();
            $('tag-input-form input').css('height', "28px");
            _this.testSetups["listOfTestInstances"].forEach(function (element) {
                element.processing = false;
            });
        });
    };
    AdministerTestComponent.prototype.stopProp = function (event) {
        event.stopPropagation();
    };
    AdministerTestComponent.prototype.showInstance = function (test) {
        var _this = this;
        this.testInstance = test;
        this.apiService.getAll('testmanagement/testsetup/gettestinstancedetails?token=' + localStorage.getItem('token') + '&instanceId=' + test.instanceId)
            .subscribe(function (res) {
            _this.instanceView = res;
            $('#instanceViewModal').modal('show');
        }, function (error) {
        });
    };
    AdministerTestComponent.prototype.showGlobInstance = function (test) {
        // console.log(test.instanceId);
        var _this = this;
        this.apiService.getAll("testmanagement/testinstance/globaltestinstancebyinstanceid?token=" + localStorage.getItem('token') + "&instanceId=" + test.instanceId).subscribe(function (data) {
            if (data['statusCode'] == 1) {
                // console.log(data);
                _this.instanceGlobalView = data['instanceDetails'];
                $('#instanceGlobalViewModal').modal('show');
            }
            else {
                _this.apiService.errorAlert(data['statusMessage']);
            }
        }, function (error) {
            // console.log(error)
            _this.blockUI.stop();
        }, function () {
            _this.blockUI.stop();
        });
    };
    AdministerTestComponent.prototype.getAllSections = function () {
        var _this = this;
        this.blockUI.start('Please Wait ...');
        this.apiService.getAll("reports/questions/getsections?token=" + localStorage.getItem('token')).subscribe(function (data) {
            // console.log(data)
            if (data['statusCode'] == 1) {
                _this.sectionsData = data['sectionsList'];
            }
            else {
                // this.apiService.errorAlert(data['statusMessage'])
            }
        }, function (error) {
            // console.log(error)
            _this.blockUI.stop();
        }, function () {
            _this.blockUI.stop();
        });
    };
    AdministerTestComponent.prototype.onSection = function (event, sectionId) {
        if (this.sectionId != sectionId) {
            if (this.createdQuestion.length) {
                this.createdQuestion = [];
            }
        }
        this.sectionId = sectionId;
    };
    AdministerTestComponent.prototype.toggleInstance = function (event) {
        var _this = this;
        // console.log(this.localInstance) 
        this.localInstance = !this.localInstance;
        if (!this.localInstance) {
            this.pageNo = 1;
            this.p_glob_1 = 1;
            this.getAllTags();
            this.blockUI.start('Please Wait We Are Fetching Global Test Instances ...');
            this.apiService.getAll('testmanagement/testinstance/globaltestinstance?token=' + localStorage.getItem('token') + '&instanceOffset=' + 0 + '&tagKeyword=')
                .subscribe(function (res) {
                if (res['statusCode'] == '1') {
                    _this.globalInstanceCount = res['globalInstanceCount'];
                    _this.globalTestSetup = res;
                    _this.globPageFlag = true;
                }
                _this.blockUI.stop();
            }, function (error) {
                _this.blockUI.stop();
            }, function () {
                _this.globalTestSetup["listOfGlobalTestInstances"].forEach(function (element) {
                    element.processing = false;
                });
            });
        }
        else {
            this.getTestSetups(0, '');
        }
    };
    AdministerTestComponent.prototype.itemAdded = function (event) {
        var _this = this;
        this.query = '';
        console.log(this.selectedTags);
        // var tags=''
        // this.selectedTags.forEach(
        //   (element)=>{
        // tags=element.display;
        //   }
        // );
        setTimeout(function () {
            $('tag-input-form input').css('height', "34px");
        }, 500);
        if (this.selectedTags.length == 1) {
            this.getTestSetups(0, event.instanceModelTagName);
        }
        else {
            this.query = event.instanceModelTagName;
            console.log(event);
        }
        this.selectedTags.forEach(function (element) {
            if (_this.selectedTags.length > 1) {
                _this.selectedTags[0].removable = false;
            }
            else {
                _this.selectedTags[0].removable = true;
            }
        });
    };
    AdministerTestComponent.prototype.itemRemoved = function ($event) {
        var _this = this;
        if (this.selectedTags.length == 0) {
            console.log(this.selectedTags.length);
            this.getTestSetups(0, '');
        }
        else {
            this.query = this.selectedTags[this.selectedTags.length - 1].instanceModelTagName;
        }
        this.selectedTags.forEach(function (element) {
            if (_this.selectedTags.length > 1) {
                _this.selectedTags[0].removable = false;
            }
            else {
                _this.selectedTags[0].removable = true;
            }
        });
    };
    AdministerTestComponent.prototype.getLocalTags = function () {
        var _this = this;
        this.query = '';
        this.localTagList = [];
        this.apiService.getAll('testmanagement/testsetup/listoflocalinstancetags?token=' + localStorage.getItem('token') + '&tagkeyword=')
            .subscribe(function (res) {
            if (res['statusCode'] == '1') {
                _this.localTagList = res['instanceTags'];
                _this.localTagList.forEach(function (element) {
                    element.display = element.instanceModelTagName;
                    element.value = element.instanceModelTagId;
                    element.removable = true;
                });
            }
        }, function (error) {
        }, function () {
            console.log(_this.localTagList);
        });
    };
    AdministerTestComponent.prototype.getAllTags = function () {
        var _this = this;
        this.tagList = [{ "instanceModelTagId": 1, "instanceModelTagName": "aws" },
            { "instanceModelTagId": 2, "instanceModelTagName": "jenkins" }
        ];
        this.apiService.getAll('testmanagement/testinstance/listofglobalinstancetags?token=' + localStorage.getItem('token'))
            .subscribe(function (res) {
            if (res['statusCode'] == '1') {
                _this.tagList = res['instanceTags'];
            }
        });
    };
    AdministerTestComponent.prototype.ratingChanged = function (event) {
        // console.log(event);
        // POST /testinstance/addtestinstancerating
        var formData = new FormData();
        formData.append("token", localStorage.getItem('token'));
        formData.append("testinstacneid", this.testInstance.instanceId);
        formData.append("rating", parseInt(event.rating));
        formData.append("comment", "");
        this.apiService.postData('testmanagement/testinstance/addtestinstancerating', formData).subscribe(function (data) {
            // console.log(data);
        }, function (error) {
            // console.log(error);
        }, function () {
        });
    };
    AdministerTestComponent.prototype.exportInstance = function (test) {
        var _this = this;
        test.processing = true;
        var toast = this.toastr.show(test.instanceTitle, 'Exporting...', {
            timeOut: 0,
            extendedTimeOut: 0,
            positionClass: 'toast-bottom-right',
            tapToDismiss: false
        });
        // this.blockUI.start('Please Wait We Are Exporting Your Test Instance')
        // this.apiService.successAlert('Test Instances Exported Successfully..')
        this.apiService.postData('testmanagement/testinstance/export?token=' + localStorage.getItem('token') + '&testInstanceId=' + test.instanceId, {})
            .subscribe(function (res) {
            if (res['statusCode'] == '1') {
                _this.apiService.successAlert(res['statusMessage']);
                test.isGlobalInstance = 1;
                // this.blockUI.stop();
                // this.getTestSetups();
                // getting updated global instances
                // this.blockUI.start('Please Wait We Are Fetching Global Test Instances ...')
                // this.apiService.getAll('testmanagement/testinstance/globaltestinstance?token='+localStorage.getItem('token')+'&instanceOffset='+0+'&tagKeyword=')
                // .subscribe(res=>{
                //     if(res['statusCode'] == '1'){
                //       this.globalTestSetup = res;
                //     }
                //     // this.blockUI.stop();
                // },error=>{
                //   // this.blockUI.stop();
                // })
            }
            else {
                // this.blockUI.stop();
                _this.apiService.errorAlert(res['statusMessage']);
            }
        }, function (error) {
            _this.toastr.clear(toast.toastId);
            test.processing = false;
            // this.blockUI.stop();
        }, function () {
            _this.toastr.clear(toast.toastId);
            test.processing = false;
        });
    };
    AdministerTestComponent.prototype.searchTags = function (searchTag) {
        var _this = this;
        if (searchTag.trim().length) {
            this.apiService.getAll('testmanagement/testinstance/listofglobalinstancetagsbykeyword?token=' + localStorage.getItem('token') + '&tagkeyword=' + searchTag.trim())
                .subscribe(function (res) {
                if (res['statusCode'] == '1') {
                    _this.tagList = res['instanceTags'];
                }
            });
        }
        else {
            this.globalTestSetup = null;
            this.getAllTags();
            this.blockUI.start('Please Wait We Are Fetching Global Test Instances ...');
            this.apiService.getAll('testmanagement/testinstance/globaltestinstance?token=' + localStorage.getItem('token') + '&instanceOffset=' + 0 + '&tagKeyword=')
                .subscribe(function (res) {
                if (res['statusCode'] == '1') {
                    _this.globalTestSetup = res;
                    _this.globPageFlag = true;
                }
                else {
                    // this.globalTestSetup = res;
                }
                _this.blockUI.stop();
            }, function (error) {
                _this.blockUI.stop();
            }, function () {
                _this.globalTestSetup["listOfGlobalTestInstances"].forEach(function (element) {
                    element.processing = false;
                });
            });
        }
    };
    AdministerTestComponent.prototype.getInstancesByTags = function (opt) {
        var _this = this;
        this.apiService.getAll('testmanagement/testinstance/globaltestinstance?token=' + localStorage.getItem('token') + '&instanceOffset=' + 0 + '&tagKeyword=' + opt)
            .subscribe(function (res) {
            if (res['statusCode'] == '1') {
                _this.globalTestSetup = res;
                _this.globPageFlag = false;
            }
            else {
                // this.globalTestSetup = res;
            }
        }, function (error) {
            // console.log(error);
        }, function () {
            _this.globalTestSetup["listOfGlobalTestInstances"].forEach(function (element) {
                element.processing = false;
            });
        });
    };
    AdministerTestComponent.prototype.importInstance = function (test) {
        var _this = this;
        test.processing = true;
        var toast = this.toastr.show(test.instanceTitle, 'Importing...', {
            timeOut: 0,
            extendedTimeOut: 0,
            positionClass: 'toast-bottom-right',
            tapToDismiss: false
        });
        //this.blockUIList.start('Loading...');
        // this.blockUI.start('Please Wait We Are Importing Global instance ...')
        this.apiService.postData('testmanagement/testinstanceimport/import?token=' + localStorage.getItem('token') + '&globalTestInstanceId=' + test.instanceId, {})
            .subscribe(function (res) {
            _this.blockUI.stop();
            if (res['statusCode'] == '1') {
                _this.apiService.successAlert(res['statusMessage']);
                // this.getTestSetups();
                _this.blockUIList.stop();
            }
            else {
                _this.apiService.errorAlert(res['statusMessage']);
                // this.blockUIList.stop();
            }
        }, function (error) {
            // this.blockUIList.stop();
            _this.toastr.clear(toast.toastId);
        }, function () {
            _this.toastr.clear(toast.toastId);
            test.processing = false;
        });
    };
    AdministerTestComponent.ctorParameters = function () { return [
        { type: _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
    ]; };
    __decorate([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUI"])('contact-list'),
        __metadata("design:type", Object)
    ], AdministerTestComponent.prototype, "blockUIList", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('auto', { static: true }),
        __metadata("design:type", Object)
    ], AdministerTestComponent.prototype, "auto", void 0);
    __decorate([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUI"])(),
        __metadata("design:type", Object)
    ], AdministerTestComponent.prototype, "blockUI", void 0);
    AdministerTestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-administer-test',
            template: __webpack_require__(/*! raw-loader!./administer-test.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/administer-test/administer-test.component.html"),
            styles: [__webpack_require__(/*! ./administer-test.component.css */ "./src/app/Components/administer-test/administer-test.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], AdministerTestComponent);
    return AdministerTestComponent;
}());



/***/ }),

/***/ "./src/app/Components/administer-test/search.pipe.ts":
/*!***********************************************************!*\
  !*** ./src/app/Components/administer-test/search.pipe.ts ***!
  \***********************************************************/
/*! exports provided: SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (value, keys, term) {
        if (!term)
            return value;
        return (value || []).filter(function (item) { return keys.split(',').some(function (key) { return item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key]); }); });
    };
    SearchPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());



/***/ }),

/***/ "./src/app/Components/candidate-result/candidate-result.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/Components/candidate-result/candidate-result.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".report_txt{\n    color: #000000;\n    font-size: 18px;\n    font-weight: bold;\n    word-break: break-all;\n}\n.filters_sec input{\n    display: inline-block;\n    width: auto;\n}\n.filters_sec .form-control{\n    border-radius:0px;\n}\n.filters_sec select{\n    /* -webkit-appearance: none; */\n    /* -webkit-appearance: button-bevel; */\n    -webkit-appearance: media-sliderthumb;\n}\n.filter_Serch_btn{\n    background-color: #41D6C3;\n    color: #ffffff;\n    padding: 2px 5px;\n    border-radius: 0px;\n    margin: 0px 15px;\n}\n.filter_Serch_btn i{\n    position: relative;\n    top:4px;\n}\n.select_arrow{\n    position: absolute;\n    right: 5px;\n    top: 5px;\n    cursor:pointer;\n}\n.filter_tbl{\n    background-color:#ffffff;\n}\n.filter_tbl tr:hover{\n    background-color: #5596E6;\n    color: #ffffff;\n    box-shadow: 0 1px 5px #959595;\n    cursor: pointer;\n}\n.report_result{\n    background-color:#ffffff;\n}\n.close_btn{\n    background-color: #41D6C3;\n    color: #ffffff;\n    padding: 0px 5px;\n    border-radius: 50%;\n}\n.close_btn i{\n    position: relative;\n    right: 0px;\n    top: 3px;\n}\n.person_img i{\n    background-color: #ffffff;\n    color: #41D6C3;\n    padding: 5px 5px;\n    border-radius: 50%;\n    font-size: 50px;\n}\n.check_icon i{\n    background-color: #44DA39;\n    color: #ffffff;\n    border-radius: 50%;\n    font-size: 20px;\n    padding: 3px;\n    position: relative;\n    top: 5px;\n}\n.check_icon span{\n    color:#44DA39;\n}\n.cancel_icon i{\n    background-color: #d63732;\n    color: #ffffff;\n    border-radius: 50%;\n    font-size: 20px;\n    padding: 3px;\n    position: relative;\n    top: 5px;\n}\n.cancel_icon span{\n    color: #d63732;\n}\n.mail_Score button{\n    border: 1px solid #41D6C3;\n    color: #41D6C3;\n}\n.mail_Score i{\n    position: relative;\n    top: 5px;\n}\n.score_board{\n    border:1px solid #707070;\n}\n.score_left{\n    padding: 0px 30px;\n    color: #707070;\n    font-weight: bolder;\n}\n.review_btn{\n    padding: 13px 30px\n}\n#reviewModal .modal-dialog{\n    max-width: 1000px;\n}\n.text_area{\n    background-color: #707070;\n    color: #ffffff;\n}\n.text_area_ans{\n    border-color: #d1f6f3;\n    background-color: #d1f6f3;\n    padding: 10px 30px;\n    margin-left: 75px;\n    cursor: not-allowed;\n}\n.actul_ans_bg{\n    color: #707070;\n    background-color: #ffffff;\n    padding: 3px 10px;\n    border-radius: 6px;\n}\n.exam_pic{\n    width: 100px;\n    margin-top: 1.25rem;\n}\n.exam_pic:hover{\n    -webkit-transform:scale(2);\n            transform:scale(2);\n    /* position: absolute; */\n    z-index: 99;\n}\n.correct_tick{\n    background-color: #40BF37;\n    color: #ffffff;\n    padding: 2px 3px;\n    border-radius: 50%;\n}\n.review_tick{\n    /* margin: 0px 10px; */\n    margin: 0px 50px;\n}\n.review_tick i{\n    position: relative;\n    top: 3px;\n    font-size: 18px;\n}\n.wrong_tick{\n    background-color: #F31320;\n    color: #ffffff;\n    padding: 2px 3px;\n    border-radius: 50%;\n}\n.test_title{\n    position: relative;\n    margin-right: 20px;\n}\n.qualified_title{\n    position: relative;\n    margin-right: 20px;\n}\n.notify_results{\n    position: relative;\n    margin-right: 20px;\n}\n.correct_ans_txt{\n    color: #40BF37;\n    font-size: 14px;\n    margin-left: 15px;\n}\n.rev_txt{\n    color:#3D70B2;\n}\n.fill_in{\n    padding: 10px 40px;\n    border-left: none;\n    border-left: none;\n    border-right: none;\n    width: auto;\n    display: inline-block;\n    border-top: none;\n    border-radius: 0px;\n}\n.fill_ans{\n    background-color: rgba(65, 214, 195, 0.2);\n    padding: 10px 40px; \n    margin-left: 27px;\n}\ninput:not([type]):disabled{\n    background-color: #ffffff;\n    cursor: not-allowed;\n}\n/* header */\n.header_nav{\n    /* background-color: #1CBC90 !important; */\n    /* background-image: linear-gradient(0.40turn,rgba(61, 112, 178, 0.89), rgba(65, 214, 195, 0.89),rgba(85, 150, 230, 0.89)); */\n    color: #ffffff;\n    /* background-color: #12BCFF !important; */\n    /* background-color: #D63031 !important; */\n    background-color: #2ECC71 !important;\n}\n.header_nav .navbar-brand{\n    font-size:34px;\n}\n.user_icon img{\n    width: 30px;\n    background-color: #ffffff;\n    padding: 4px;\n    border-radius: 20px;\n    margin-top: 5px;\n}\n.header_nav .nav-link{\n    color:#ffffff !important;\n}\n.header_nav .dropdown-menu{\n    /* background-color: #E8F0FB; */\n    color: #ffffff;\n    /* background-color: #19bbfc; */\n    /* background-color: #D63031; */\n    background-color: #2ECC71;\n    /* background-image: linear-gradient(0.28turn,rgba(48, 93, 151, 0.89), rgba(85, 150, 230, 0.89)); */\n}\n.header_nav i{\n    position: relative;\n    top:5px;\n}\n.dropdown-item:hover{\n    color:#707070 !important;\n}\n.dropdown-item{\n    color:#ffffff;\n}\n/*  end header */\n.abt_txt{\n    color:#000000;\n}\n.soc_icon{\n    width: 42px;\n    height: 42px;\n    margin: 0px 6px;\n    cursor: pointer;\n}\n.ncd_link a{\n    position: relative;\n    top: 45px;\n    color:#707070;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9jYW5kaWRhdGUtcmVzdWx0L2NhbmRpZGF0ZS1yZXN1bHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSw4QkFBOEI7SUFDOUIsc0NBQXNDO0lBQ3RDLHFDQUFxQztBQUN6QztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87QUFDWDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0lBQ1IsY0FBYztBQUNsQjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixRQUFRO0FBQ1o7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixRQUFRO0FBQ1o7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFFBQVE7QUFDWjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0FBQ1o7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJO0FBQ0o7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksMEJBQWtCO1lBQWxCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsV0FBVztBQUNmO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsZUFBZTtBQUNuQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0kseUNBQXlDO0lBQ3pDLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7QUFFQSxXQUFXO0FBQ1g7SUFDSSwwQ0FBMEM7SUFDMUMsNkhBQTZIO0lBQzdILGNBQWM7SUFDZCwwQ0FBMEM7SUFDMUMsMENBQTBDO0lBQzFDLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QixtR0FBbUc7QUFDdkc7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0FBQ1g7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUdBLGdCQUFnQjtBQUNoQjtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvY2FuZGlkYXRlLXJlc3VsdC9jYW5kaWRhdGUtcmVzdWx0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVwb3J0X3R4dHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgd29yZC1icmVhazogYnJlYWstYWxsO1xufVxuLmZpbHRlcnNfc2VjIGlucHV0e1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB3aWR0aDogYXV0bztcbn1cbi5maWx0ZXJzX3NlYyAuZm9ybS1jb250cm9se1xuICAgIGJvcmRlci1yYWRpdXM6MHB4O1xufVxuLmZpbHRlcnNfc2VjIHNlbGVjdHtcbiAgICAvKiAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7ICovXG4gICAgLyogLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b24tYmV2ZWw7ICovXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBtZWRpYS1zbGlkZXJ0aHVtYjtcbn1cbi5maWx0ZXJfU2VyY2hfYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MUQ2QzM7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMnB4IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgbWFyZ2luOiAwcHggMTVweDtcbn1cbi5maWx0ZXJfU2VyY2hfYnRuIGl7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDo0cHg7XG59XG4uc2VsZWN0X2Fycm93e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNXB4O1xuICAgIHRvcDogNXB4O1xuICAgIGN1cnNvcjpwb2ludGVyO1xufVxuLmZpbHRlcl90Ymx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xufVxuLmZpbHRlcl90YmwgdHI6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1OTZFNjtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBib3gtc2hhZG93OiAwIDFweCA1cHggIzk1OTU5NTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4ucmVwb3J0X3Jlc3VsdHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XG59XG4uY2xvc2VfYnRue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MUQ2QzM7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMHB4IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4uY2xvc2VfYnRuIGl7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHJpZ2h0OiAwcHg7XG4gICAgdG9wOiAzcHg7XG59XG4ucGVyc29uX2ltZyBpe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgY29sb3I6ICM0MUQ2QzM7XG4gICAgcGFkZGluZzogNXB4IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZm9udC1zaXplOiA1MHB4O1xufVxuLmNoZWNrX2ljb24gaXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDREQTM5O1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDVweDtcbn1cbi5jaGVja19pY29uIHNwYW57XG4gICAgY29sb3I6IzQ0REEzOTtcbn1cbi5jYW5jZWxfaWNvbiBpe1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNjM3MzI7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiAzcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNXB4O1xufVxuLmNhbmNlbF9pY29uIHNwYW57XG4gICAgY29sb3I6ICNkNjM3MzI7XG59XG4ubWFpbF9TY29yZSBidXR0b257XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQxRDZDMztcbiAgICBjb2xvcjogIzQxRDZDMztcbn1cbi5tYWlsX1Njb3JlIGl7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNXB4O1xufVxuLnNjb3JlX2JvYXJke1xuICAgIGJvcmRlcjoxcHggc29saWQgIzcwNzA3MDtcbn1cbi5zY29yZV9sZWZ0e1xuICAgIHBhZGRpbmc6IDBweCAzMHB4O1xuICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG4ucmV2aWV3X2J0bntcbiAgICBwYWRkaW5nOiAxM3B4IDMwcHhcbn1cbiNyZXZpZXdNb2RhbCAubW9kYWwtZGlhbG9ne1xuICAgIG1heC13aWR0aDogMTAwMHB4O1xufVxuLnRleHRfYXJlYXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuLnRleHRfYXJlYV9hbnN7XG4gICAgYm9yZGVyLWNvbG9yOiAjZDFmNmYzO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWY2ZjM7XG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG4uYWN0dWxfYW5zX2Jne1xuICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xufVxuLmV4YW1fcGlje1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xufVxuLmV4YW1fcGljOmhvdmVye1xuICAgIHRyYW5zZm9ybTpzY2FsZSgyKTtcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7ICovXG4gICAgei1pbmRleDogOTk7XG59XG4uY29ycmVjdF90aWNre1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MEJGMzc7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMnB4IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ucmV2aWV3X3RpY2t7XG4gICAgLyogbWFyZ2luOiAwcHggMTBweDsgKi9cbiAgICBtYXJnaW46IDBweCA1MHB4O1xufVxuLnJldmlld190aWNrIGl7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogM3B4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cbi53cm9uZ190aWNre1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMzEzMjA7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMnB4IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4udGVzdF90aXRsZXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLnF1YWxpZmllZF90aXRsZXtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuLm5vdGlmeV9yZXN1bHRze1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG4uY29ycmVjdF9hbnNfdHh0e1xuICAgIGNvbG9yOiAjNDBCRjM3O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbn1cbi5yZXZfdHh0e1xuICAgIGNvbG9yOiMzRDcwQjI7XG59XG4uZmlsbF9pbntcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cbi5maWxsX2Fuc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY1LCAyMTQsIDE5NSwgMC4yKTtcbiAgICBwYWRkaW5nOiAxMHB4IDQwcHg7IFxuICAgIG1hcmdpbi1sZWZ0OiAyN3B4O1xufVxuaW5wdXQ6bm90KFt0eXBlXSk6ZGlzYWJsZWR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4vKiBoZWFkZXIgKi9cbi5oZWFkZXJfbmF2e1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMxQ0JDOTAgIWltcG9ydGFudDsgKi9cbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMC40MHR1cm4scmdiYSg2MSwgMTEyLCAxNzgsIDAuODkpLCByZ2JhKDY1LCAyMTQsIDE5NSwgMC44OSkscmdiYSg4NSwgMTUwLCAyMzAsIDAuODkpKTsgKi9cbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMTJCQ0ZGICFpbXBvcnRhbnQ7ICovXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI0Q2MzAzMSAhaW1wb3J0YW50OyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRUNDNzEgIWltcG9ydGFudDtcbn1cbi5oZWFkZXJfbmF2IC5uYXZiYXItYnJhbmR7XG4gICAgZm9udC1zaXplOjM0cHg7XG59XG4udXNlcl9pY29uIGltZ3tcbiAgICB3aWR0aDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cbi5oZWFkZXJfbmF2IC5uYXYtbGlua3tcbiAgICBjb2xvcjojZmZmZmZmICFpbXBvcnRhbnQ7XG59XG4uaGVhZGVyX25hdiAuZHJvcGRvd24tbWVudXtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjRThGMEZCOyAqL1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMxOWJiZmM7ICovXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI0Q2MzAzMTsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkVDQzcxO1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwLjI4dHVybixyZ2JhKDQ4LCA5MywgMTUxLCAwLjg5KSwgcmdiYSg4NSwgMTUwLCAyMzAsIDAuODkpKTsgKi9cbn1cbi5oZWFkZXJfbmF2IGl7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDo1cHg7XG59XG4uZHJvcGRvd24taXRlbTpob3ZlcntcbiAgICBjb2xvcjojNzA3MDcwICFpbXBvcnRhbnQ7XG59XG4uZHJvcGRvd24taXRlbXtcbiAgICBjb2xvcjojZmZmZmZmO1xufVxuXG4gXG4vKiAgZW5kIGhlYWRlciAqL1xuLmFidF90eHR7XG4gICAgY29sb3I6IzAwMDAwMDtcbn1cbi5zb2NfaWNvbntcbiAgICB3aWR0aDogNDJweDtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgbWFyZ2luOiAwcHggNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uY2RfbGluayBhe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDQ1cHg7XG4gICAgY29sb3I6IzcwNzA3MDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Components/candidate-result/candidate-result.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/Components/candidate-result/candidate-result.component.ts ***!
  \***************************************************************************/
/*! exports provided: CandidateResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateResultComponent", function() { return CandidateResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Services/AllServices/all-services.service */ "./src/app/Services/AllServices/all-services.service.ts");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas.js");
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CandidateResultComponent = /** @class */ (function () {
    function CandidateResultComponent(router, activeRoute, apiService) {
        var _this = this;
        this.router = router;
        this.activeRoute = activeRoute;
        this.apiService = apiService;
        this.candidReview = [];
        this.sectionList = {
            total: null,
            sections: []
        };
        this.activeRoute.params.subscribe(function (params) {
            _this.uniqueCode = params['uniqueCode'];
            // console.log(this.uniqueCode)
        });
        var domain = window.location.hostname;
        if (domain.split('.').length > 1) {
            this.domainName = domain.split('.')[0];
        }
        else {
            this.domainName = 'gmail';
        }
    }
    CandidateResultComponent.prototype.ngAfterViewInit = function () {
    };
    CandidateResultComponent.prototype.download = function () {
        var _this = this;
        $("#dowloadBtn").hide();
        html2canvas__WEBPACK_IMPORTED_MODULE_5___default()(document.querySelector("#content")).then(function (canvas) {
            var w = window.innerWidth;
            var h = window.innerHeight;
            var width = window.innerWidth;
            var height = $("#content").height();
            var pdf = new jspdf__WEBPACK_IMPORTED_MODULE_4__("p", "px", [width - 350, height]);
            //var pdf = new jsPDF('p', 'pt', [canvas.width, canvas.height]);
            var imgData = canvas.toDataURL("image/jpeg", 1.0);
            pdf.addImage(imgData, 'JPEG', 0, 0);
            pdf.save(_this.candidate.candidateName + "_" + _this.uniqueCode + '.pdf');
            $("#dowloadBtn").show();
        });
    };
    CandidateResultComponent.prototype.getCandidPicsFromCfs = function (uniqueCode) {
        var _this = this;
        this.blockUI.start('Loading User Pics!');
        // console.log("getCandidPics :::::::::"+uniqueCode)
        // console.log("domain :::::::::"+this.domainName)
        this.apiService.getAll('testmanagement/cfs/getcandidatepicturesforcustomer/?uniquecode=' + this.uniqueCode + '&domain=' + this.domainName)
            .subscribe(function (res) {
            _this.userPics = res;
            // for(let i=0;i<this.userPics['candidatePictureList'].length;i++){
            //   this.userPics['candidatePictureList'][i].imgSrc = this.getBase64Image(this.userPics['candidatePictureList'][i].cfsViewURL);
            // }
            //  // console.log('this.userPics',this.userPics)
        }, function (error) {
            _this.blockUI.stop();
        }, function () {
            _this.blockUI.stop();
        });
    };
    CandidateResultComponent.prototype.onImageLoad = function (event, i) {
        this.userPics['candidatePictureList'][i].cfsViewURL = this.getBase64Image(document.getElementById(this.userPics['candidatePictureList'][i].pictureFileName));
    };
    CandidateResultComponent.prototype.getBase64Image = function (img) {
        var canvas = document.createElement("canvas");
        canvas.width = 6.5 * img.width;
        canvas.height = 6.5 * img.height;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        return dataURL;
    };
    //var base64 = getBase64Image(document.getElementById("imageid"));
    CandidateResultComponent.prototype.getCandidPics = function (uniqueCode) {
        var _this = this;
        this.blockUI.start('Please Wait!');
        this.apiService.getAll('testmanagement/cfs/getcandidatepicturesforcustomer/?uniquecode=' + uniqueCode + '&domain=' + this.domainName)
            .subscribe(function (res) {
            _this.userPics = res;
            for (var i = 0; i < _this.userPics['candidatePictureList'].length; i++) {
                _this.userPics['candidatePictureList'][i].imgSrc = _this.apiService.url + 'testmanagement' + _this.userPics['candidatePictureList'][i].baseViewURL + '?candidateExamPictureId=' + _this.userPics['candidatePictureList'][i].candidateExamPictureId + '&token=' + localStorage.getItem('token');
            }
            // console.log('this.userPics',this.userPics)
        }, function (error) {
            _this.blockUI.stop();
        }, function () {
            _this.blockUI.stop();
        });
    };
    CandidateResultComponent.prototype.getSuspiciosActivity = function (uniqueCode) {
        var _this = this;
        this.blockUI.start('Loading Suspicious Activities!');
        // console.log("unicode "+uniqueCode)
        // console.log("domain "+this.domainName)
        this.apiService.getAll('reports/result/suspiciousactivitylistforcustomer?uniquecode=' + uniqueCode + '&domain=' + this.domainName)
            .subscribe(function (res) {
            _this.activities = res;
        }, function (error) {
            _this.blockUI.stop();
        }, function () {
            _this.blockUI.stop();
        });
    };
    CandidateResultComponent.prototype.ngAfterViewChecked = function () {
        setTimeout(function () {
        }, 1000);
    };
    CandidateResultComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blockUI.start('Loading ..');
        this.apiService.getAll('reports/result/candidateresults?uniqueCode=' + this.uniqueCode + '&domainName=' + this.domainName)
            .subscribe(function (res) {
            _this.candidReview = res['listOfTestReviewQuestions'];
            _this.candidate = res['candidateResult'];
            if (_this.candidate) {
                _this.sectionList = {
                    total: _this.candidate.testPercentage,
                    sections: _this.candidate.sectionwiseResult
                };
            }
        }, function (error) {
            _this.blockUI.stop();
        }, function () {
            _this.blockUI.stop();
        });
        // this.getCandidPics(this.uniqueCode)
        this.getCandidPicsFromCfs(this.uniqueCode);
        this.getSuspiciosActivity(this.uniqueCode);
    };
    CandidateResultComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_2__["AllServicesService"] }
    ]; };
    __decorate([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_3__["BlockUI"])(),
        __metadata("design:type", Object)
    ], CandidateResultComponent.prototype, "blockUI", void 0);
    CandidateResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-candidate-result',
            template: __webpack_require__(/*! raw-loader!./candidate-result.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/candidate-result/candidate-result.component.html"),
            styles: [__webpack_require__(/*! ./candidate-result.component.css */ "./src/app/Components/candidate-result/candidate-result.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_2__["AllServicesService"]])
    ], CandidateResultComponent);
    return CandidateResultComponent;
}());



/***/ }),

/***/ "./src/app/Components/configure-tests/configure-tests.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/Components/configure-tests/configure-tests.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".filter_tbl{\n    background-color:#ffffff;\n}\n.filter_tbl tr:hover{\n    background-color: #E7F8EF;\n    color: #4B4B4B;\n    box-shadow: 0 1px 5px #959595;\n    cursor: pointer;\n    transition-delay: 0.3s;\n}\nhr{\n    border-top: 1px solid #707070;\n    margin-top: 0px;\n}\n#masterViewModal .modal-dialog{\n    max-width: 95%;\n}\n#masterViewModal .close{\n    background-color: #41D6C3;\n    padding: 5px 10px;\n    margin: 0px 0px 0px auto;\n    border-radius: 20px;\n    color: #000000;\n    text-shadow: none;\n}\n.inst_title{\n    color: #2C2C2C;\n    font-weight: bold;\n}\n.card {\n    padding: 0rem;\n    padding-top: 15px !important;\n    border: none;\n    margin-left: 20px;\n    box-shadow: 0px 1px 6px 2px #cec9c9;\n}\nhr {\n    margin: 0rem -1.2rem;\n    border-top: 2px solid rgba(4, 2, 2, 0.31);\n}\n.card-body {\n    padding-bottom: 0rem;\n}\n.card-link {\n    padding: 0.5rem;\n    color: #3D70B2;\n    text-decoration: none;\n    background-color: transparent;\n    font-size: 12px;\n}\n.card-body {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}\n.card-title {\n    font-size: 18px;\n    font-weight: 700;\n    color: #2C2C2C;\n    padding-bottom: 0.4rem;\n    margin-top: -1.5rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: 250px;\n}\n.card-subtitle {\n    font-size: 14px;\n    color: #707070!important;\n    padding-bottom: 0.4rem;\n}\n.card-text {\n    font-size: 12px;\n    opacity: 0.7;\n    color: #707070!important;\n    margin: 2px 0px;\n    \n}\n.col-md-4 {\n    flex: 0 0 27.333333%;\n    max-width: 33.333333%;\n    margin-bottom: 1rem;\n}\nh4{\n     \n    color: #3D70B2;\n    font-size: 24px;\n    font-weight: 300;\n}\nhr{\n    border-top: 1px solid #707070;\n    margin-top: 0px;\n}\n.sec-container{\n    background-color: #fbfbfb;\n    width: 91%;\n    margin: 20px 5px;\n    border: 1px solid #707070;\n}\n.no_filter_tr{\n    background-color: inherit !important;\n    cursor: inherit !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9jb25maWd1cmUtdGVzdHMvY29uZmlndXJlLXRlc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsNkJBQTZCO0lBQzdCLGVBQWU7SUFDZixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25CO0FBS0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtBQUNyQjtBQUdBO0lBQ0ksYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1DQUFtQztBQUN2QztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHlDQUF5QztBQUM3QztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksaURBQWlEO0FBQ3JEO0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixlQUFlOztBQUVuQjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7QUFFQTs7SUFFSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLDBCQUEwQjtBQUM5QiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvY29uZmlndXJlLXRlc3RzL2NvbmZpZ3VyZS10ZXN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlcl90Ymx7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmO1xufVxuLmZpbHRlcl90YmwgdHI6aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U3RjhFRjtcbiAgICBjb2xvcjogIzRCNEI0QjtcbiAgICBib3gtc2hhZG93OiAwIDFweCA1cHggIzk1OTU5NTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbi1kZWxheTogMC4zcztcbn1cbmhye1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNzA3MDcwO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbn1cblxuXG5cblxuI21hc3RlclZpZXdNb2RhbCAubW9kYWwtZGlhbG9ne1xuICAgIG1heC13aWR0aDogOTUlO1xufVxuI21hc3RlclZpZXdNb2RhbCAuY2xvc2V7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQxRDZDMztcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICBtYXJnaW46IDBweCAwcHggMHB4IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcbn1cbi5pbnN0X3RpdGxle1xuICAgIGNvbG9yOiAjMkMyQzJDO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5cbi5jYXJkIHtcbiAgICBwYWRkaW5nOiAwcmVtO1xuICAgIHBhZGRpbmctdG9wOiAxNXB4ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAxcHggNnB4IDJweCAjY2VjOWM5O1xufVxuXG5ociB7XG4gICAgbWFyZ2luOiAwcmVtIC0xLjJyZW07XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHJnYmEoNCwgMiwgMiwgMC4zMSk7XG59XG5cbi5jYXJkLWJvZHkge1xuICAgIHBhZGRpbmctYm90dG9tOiAwcmVtO1xufVxuXG4uY2FyZC1saW5rIHtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgY29sb3I6ICMzRDcwQjI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmNhcmQtYm9keSB7XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xufVxuXG4uY2FyZC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgY29sb3I6ICMyQzJDMkM7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNHJlbTtcbiAgICBtYXJnaW4tdG9wOiAtMS41cmVtO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aWR0aDogMjUwcHg7XG59XG5cbi5jYXJkLXN1YnRpdGxlIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICM3MDcwNzAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XG59XG5cbi5jYXJkLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgY29sb3I6ICM3MDcwNzAhaW1wb3J0YW50O1xuICAgIG1hcmdpbjogMnB4IDBweDtcbiAgICBcbn1cblxuLmNvbC1tZC00IHtcbiAgICBmbGV4OiAwIDAgMjcuMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDMzLjMzMzMzMyU7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuaDR7XG4gICAgIFxuICAgIGNvbG9yOiAjM0Q3MEIyO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuaHJ7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3MDcwNzA7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xufVxuLnNlYy1jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiZmJmYjtcbiAgICB3aWR0aDogOTElO1xuICAgIG1hcmdpbjogMjBweCA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbn1cbi5ub19maWx0ZXJfdHJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xuICAgIGN1cnNvcjogaW5oZXJpdCAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Components/configure-tests/configure-tests.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Components/configure-tests/configure-tests.component.ts ***!
  \*************************************************************************/
/*! exports provided: ConfigureTestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigureTestsComponent", function() { return ConfigureTestsComponent; });
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



var ConfigureTestsComponent = /** @class */ (function () {
    function ConfigureTestsComponent(apiService) {
        this.apiService = apiService;
        this.testSetups = {
            'listOfTestSetups': []
        };
    }
    ConfigureTestsComponent.prototype.ngOnInit = function () {
        this.getTestSetups();
    };
    ConfigureTestsComponent.prototype.getTestSetups = function () {
        var _this = this;
        this.blockUI.start("Please Wait ...");
        this.apiService.getAll('testmanagement/testsetup/listoftestsetups?token=' + localStorage.getItem('token'))
            .subscribe(function (res) {
            _this.blockUI.stop();
            _this.testSetups = res;
        }, function (error) {
        });
    };
    ConfigureTestsComponent.prototype.stopProp = function (event) {
        event.stopPropagation();
    };
    ConfigureTestsComponent.prototype.showMaster = function (test) {
        var _this = this;
        this.apiService.getAll('testmanagement/testsetup/listofsectionsbytestsetupid?token=' + localStorage.getItem('token') + '&testSetupId=' + test.testSetupId)
            .subscribe(function (res) {
            if (res['statusCode'] == '1') {
                _this.masterView = res;
                $('#masterViewModal').modal('show');
            }
            else {
                _this.apiService.errorAlert(res['statusMessage']);
            }
        });
    };
    ConfigureTestsComponent.ctorParameters = function () { return [
        { type: _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"] }
    ]; };
    __decorate([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUI"])(),
        __metadata("design:type", Object)
    ], ConfigureTestsComponent.prototype, "blockUI", void 0);
    ConfigureTestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-configure-tests',
            template: __webpack_require__(/*! raw-loader!./configure-tests.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/configure-tests/configure-tests.component.html"),
            styles: [__webpack_require__(/*! ./configure-tests.component.css */ "./src/app/Components/configure-tests/configure-tests.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"]])
    ], ConfigureTestsComponent);
    return ConfigureTestsComponent;
}());



/***/ }),

/***/ "./src/app/Components/contribute/contribute.component.css":
/*!****************************************************************!*\
  !*** ./src/app/Components/contribute/contribute.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field{\n    width: 20vw;\n    margin: 0.5rem;\n}  \n.modal-lg{\n    max-width: 1000px;\n}  \n.card {\n    padding: 0rem;\n    border: none;\n    margin-left: 2rem;\n    box-shadow: 0px 1px 6px 2px #cec9c9;\n}  \nhr {\n    margin: 0rem -1.2rem;\n    border-top: 2px solid rgba(4, 2, 2, 0.31);\n}  \n.card-body {\n    padding-bottom: 0rem;\n}  \n.card-link {\n    padding: 0.5rem;\n    color: #3D70B2;\n    text-decoration: none;\n    background-color: transparent;\n    font-size: 12px;\n}  \n.card-body {\n    font-family: Roboto, \"Helvetica Neue\", sans-serif;\n}  \n.card-title {\n    font-size: 18px;\n    font-weight: 700;\n    color: #2C2C2C;\n    padding-bottom: 0.4rem;\n    margin-top: -1.5rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: 250px;\n}  \n.card-subtitle {\n    font-size: 14px;\n    color: #707070!important;\n    padding-bottom: 0.4rem;\n}  \n.card-text {\n    font-size: 12px;\n    opacity: 0.7;\n    color: #707070!important;\n    margin: 2px 0px;\n    \n}  \n.col-md-4 {\n    flex: 0 0 27.333333%;\n    max-width: 33.333333%;\n    margin-bottom: 1rem;\n}  \nh4{\n    padding: 1rem;\n    color: #3D70B2;\n    font-size: 24px;\n    font-weight: 300;\n}  \nhr{\n    border-top: 1px solid #707070;\n    margin-top: 0px;\n}  \n/* The container */  \n.container {\n    display: block;\n    position: relative;\n    padding-left: 35px;\n    padding-top: 10px;\n    margin-bottom: 12px;\n    /* cursor: pointer; */\n    font-size: 12px;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n}  \n/* Hide the browser's default checkbox */  \n.container input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n}  \n.container-mand input {\n    /* position: absolute;\n    cursor: pointer;\n    left: 15px;\n    top: 12px; */\n}  \n/* Create a custom checkbox */  \n.checkmark {\n    position: absolute;\n    top: 0;\n    right: 0;\n    height: 20px;\n    width: 20px;\n    margin-top: -3px;\n    background-color: #fff;\n    border: 1px solid black;\n}  \n/* On mouse-over, add a grey background color */  \n.container:hover input~.checkmark {\n    background-color: #fff;\n    border: 1px solid black;\n}  \n/* When the checkbox is checked, add a blue background */  \n.container input:checked~.checkmark {\n    background-color: #fff;\n    border: 1px solid black;\n}  \n/* Create the checkmark/indicator (hidden when not checked) */  \n.checkmark:after {\n    content: \"\";\n    position: absolute;\n    display: none;\n}  \n/* Show the checkmark when checked */  \n.container input:checked~.checkmark:after {\n    display: block;\n}  \n/* Style the checkmark/indicator */  \n.container .checkmark:after {\n    left: 6px;\n    top: 0px;\n    width: 7px;\n    height: 15px;\n    border: solid #000;\n    border-width: 0 2px 2px 0;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n}  \n#ad {\n    display: -ms-flexbox;\n    -ms-flex-pack: center;\n    -ms-flex-align: center;\n    /* Firefox */\n    display: -moz-box;\n    -moz-box-pack: center;\n    -moz-box-align: center;\n    /* Safari, Opera, and Chrome */\n    display: -webkit-box;\n    -webkit-box-pack: center;\n    -webkit-box-align: center;\n}  \n.add_anoth_option{\n    background: inherit;\n    line-height: inherit;\n    color: #007ad9;\n    border-radius: inherit;\n    box-shadow: inherit;\n}  \n.close_icon{\n    position: absolute;\n    color: #f44336;\n    right: -30px;\n    z-index: 9999;\n    top: 5px;\n    transition-delay: 0.2s;\n    visibility: hidden;\n}  \n.close_icon i{\n    font-size:18px;\n    cursor: pointer;\n    font-weight:bold;\n}  \n#exampleModalCenter .close span{\n    background-color: #41D6C3;\n    color: #fff;\n    padding: 2px 5px 0px 5px;\n    border-radius: 21px;\n}  \n#exampleModalCenter .close span i{\n    font-size:20px;\n}  \n#UploadedQuesModal .modal-dialog{\n    max-width: 1000px;\n}  \n.quesCountSize{\n    font-size:20px;\n}  \n.tot_count{\n    color:#fc7b03\n}  \n.succ_count{\n    color:#20BF6B;\n}  \n.exist_count{\n    color:#f70800;\n}  \n.red_col{\n    color:#c0392b;\n}  \n.green_col{\n    color:#2ecc71;\n}  \n.yellow_col{\n    color:#f1c40f;\n}  \n/* header */  \n.header_nav{\n    /* background-color: #1CBC90 !important; */\n    /* background-image: linear-gradient(0.40turn,rgba(61, 112, 178, 0.89), rgba(65, 214, 195, 0.89),rgba(85, 150, 230, 0.89)); */\n    color: #ffffff;\n    /* background-color: #12BCFF !important; */\n    /* background-color: #D63031 !important; */\n    background-color: #2ECC71 !important;\n}  \n.header_nav .navbar-brand{\n    font-size:34px;\n}  \n.user_icon img{\n    width: 30px;\n    background-color: #ffffff;\n    padding: 4px;\n    border-radius: 20px;\n    margin-top: 5px;\n}  \n.header_nav .nav-link{\n    color:#ffffff !important;\n}  \n.header_nav .dropdown-menu{\n    /* background-color: #E8F0FB; */\n    color: #ffffff;\n    /* background-color: #19bbfc; */\n    /* background-color: #D63031; */\n    background-color: #2ECC71;\n    /* background-image: linear-gradient(0.28turn,rgba(48, 93, 151, 0.89), rgba(85, 150, 230, 0.89)); */\n}  \n.header_nav i{\n    position: relative;\n    top:5px;\n}  \n.dropdown-item:hover{\n    color:#707070 !important;\n}  \n.dropdown-item{\n    color:#ffffff;\n}  \n.report_result{\n    background-color:#ffffff;\n}  \n.abt_txt{\n    color:#000000;\n}  \n.soc_icon{\n    width: 42px;\n    height: 42px;\n    margin: 0px 6px;\n    cursor: pointer;\n}  \n.ncd_link a{\n    position: relative;\n    top: 45px;\n    color:#707070;\n}  \n.fileContainer {\n    overflow: hidden;\n    position: relative;\n    \n  \n}  \n.fileContainer [type=file] {\n    cursor: inherit;\n    display: block;\n    font-size: 9px;\n    filter: alpha(opacity=0);\n    min-height: 100%;\n    min-width: 100%;\n    opacity: 0;\n    position: absolute;\n    right: 0;\n    text-align: right;\n    top: 0;\n}  \n.profile img{\n    width: 130px;\n    height: 130px;\n    border-radius: 50%;\n    position: absolute;\n    border: 2px solid wheat;\n}  \n.fileContainer {\n   \n    background: rgba(119, 107, 223, 0.35);\n    padding: 2.9rem;\n    width: 126px;\n    height: 126px;\n    border-radius: 78%;\n    color: white;\n    font-weight: 900;\n    /* border-radius: 2.5em; */\n    /* float: left; */\n    /* padding: 1.5em; */\n}  \n.sections{\n     margin-top:-1rem;\n     margin-bottom: 3rem;\n }  \n.profile{\n    padding-right: 5rem;\n}  \n.fileContainer [type=file] {\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9jb250cmlidXRlL2NvbnRyaWJ1dGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLG1DQUFtQztBQUN2QztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHlDQUF5QztBQUM3QztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjtBQUVBO0lBQ0ksaURBQWlEO0FBQ3JEO0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFFQTtJQUNJLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsc0JBQXNCO0FBQzFCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixlQUFlOztBQUVuQjtBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLGVBQWU7QUFDbkI7QUFFQSxrQkFBa0I7QUFFbEI7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsaUJBQWlCO0FBQ3JCO0FBR0Esd0NBQXdDO0FBRXhDO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixlQUFlO0lBQ2YsU0FBUztJQUNULFFBQVE7QUFDWjtBQUVBO0lBQ0k7OztnQkFHWTtBQUNoQjtBQUdBLDZCQUE2QjtBQUU3QjtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7QUFHQSwrQ0FBK0M7QUFFL0M7SUFDSSxzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCO0FBR0Esd0RBQXdEO0FBRXhEO0lBQ0ksc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjtBQUdBLDZEQUE2RDtBQUU3RDtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjtBQUdBLG9DQUFvQztBQUVwQztJQUNJLGNBQWM7QUFDbEI7QUFHQSxrQ0FBa0M7QUFFbEM7SUFDSSxTQUFTO0lBQ1QsUUFBUTtJQUNSLFVBQVU7SUFDVixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixnQ0FBZ0M7SUFFaEMsd0JBQXdCO0FBQzVCO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLG9CQUFvQjtJQUNwQix3QkFBd0I7SUFDeEIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFlBQVk7SUFDWixhQUFhO0lBQ2IsUUFBUTtJQUNSLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUdBLFdBQVc7QUFDWDtJQUNJLDBDQUEwQztJQUMxQyw2SEFBNkg7SUFDN0gsY0FBYztJQUNkLDBDQUEwQztJQUMxQywwQ0FBMEM7SUFDMUMsb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsY0FBYztJQUNkLCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IseUJBQXlCO0lBQ3pCLG1HQUFtRztBQUN2RztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87QUFDWDtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBR0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFFQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsYUFBYTtBQUNqQjtBQUdBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjs7O0FBR3RCO0FBRUE7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixpQkFBaUI7SUFDakIsTUFBTTtBQUNWO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCO0FBQ0E7O0lBRUkscUNBQXFDO0lBQ3JDLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLDBCQUEwQjtJQUMxQixpQkFBaUI7SUFDakIsb0JBQW9CO0FBQ3hCO0FBQ0M7S0FDSSxnQkFBZ0I7S0FDaEIsbUJBQW1CO0NBQ3ZCO0FBQ0Q7SUFDSSxtQkFBbUI7QUFDdkI7QUFLQTtJQUNJLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2NvbnRyaWJ1dGUvY29udHJpYnV0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGR7XG4gICAgd2lkdGg6IDIwdnc7XG4gICAgbWFyZ2luOiAwLjVyZW07XG59ICBcbi5tb2RhbC1sZ3tcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbn1cbi5jYXJkIHtcbiAgICBwYWRkaW5nOiAwcmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcbiAgICBib3gtc2hhZG93OiAwcHggMXB4IDZweCAycHggI2NlYzljOTtcbn1cblxuaHIge1xuICAgIG1hcmdpbjogMHJlbSAtMS4ycmVtO1xuICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCByZ2JhKDQsIDIsIDIsIDAuMzEpO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMHJlbTtcbn1cblxuLmNhcmQtbGluayB7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGNvbG9yOiAjM0Q3MEIyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5jYXJkLWJvZHkge1xuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNhcmQtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiAjMkMyQzJDO1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XG4gICAgbWFyZ2luLXRvcDogLTEuNXJlbTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2lkdGg6IDI1MHB4O1xufVxuXG4uY2FyZC1zdWJ0aXRsZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjNzA3MDcwIWltcG9ydGFudDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC40cmVtO1xufVxuXG4uY2FyZC10ZXh0IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGNvbG9yOiAjNzA3MDcwIWltcG9ydGFudDtcbiAgICBtYXJnaW46IDJweCAwcHg7XG4gICAgXG59XG5cbi5jb2wtbWQtNCB7XG4gICAgZmxleDogMCAwIDI3LjMzMzMzMyU7XG4gICAgbWF4LXdpZHRoOiAzMy4zMzMzMzMlO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbmg0e1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgY29sb3I6ICMzRDcwQjI7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5ocntcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzcwNzA3MDtcbiAgICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi8qIFRoZSBjb250YWluZXIgKi9cblxuLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctbGVmdDogMzVweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgIC8qIGN1cnNvcjogcG9pbnRlcjsgKi9cbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuXG4vKiBIaWRlIHRoZSBicm93c2VyJ3MgZGVmYXVsdCBjaGVja2JveCAqL1xuXG4uY29udGFpbmVyIGlucHV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgb3BhY2l0eTogMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHdpZHRoOiAwO1xufVxuXG4uY29udGFpbmVyLW1hbmQgaW5wdXQge1xuICAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbGVmdDogMTVweDtcbiAgICB0b3A6IDEycHg7ICovXG59XG5cblxuLyogQ3JlYXRlIGEgY3VzdG9tIGNoZWNrYm94ICovXG5cbi5jaGVja21hcmsge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IC0zcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuXG4vKiBPbiBtb3VzZS1vdmVyLCBhZGQgYSBncmV5IGJhY2tncm91bmQgY29sb3IgKi9cblxuLmNvbnRhaW5lcjpob3ZlciBpbnB1dH4uY2hlY2ttYXJrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuXG5cbi8qIFdoZW4gdGhlIGNoZWNrYm94IGlzIGNoZWNrZWQsIGFkZCBhIGJsdWUgYmFja2dyb3VuZCAqL1xuXG4uY29udGFpbmVyIGlucHV0OmNoZWNrZWR+LmNoZWNrbWFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxuXG4vKiBDcmVhdGUgdGhlIGNoZWNrbWFyay9pbmRpY2F0b3IgKGhpZGRlbiB3aGVuIG5vdCBjaGVja2VkKSAqL1xuXG4uY2hlY2ttYXJrOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi8qIFNob3cgdGhlIGNoZWNrbWFyayB3aGVuIGNoZWNrZWQgKi9cblxuLmNvbnRhaW5lciBpbnB1dDpjaGVja2Vkfi5jaGVja21hcms6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG5cbi8qIFN0eWxlIHRoZSBjaGVja21hcmsvaW5kaWNhdG9yICovXG5cbi5jb250YWluZXIgLmNoZWNrbWFyazphZnRlciB7XG4gICAgbGVmdDogNnB4O1xuICAgIHRvcDogMHB4O1xuICAgIHdpZHRoOiA3cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIGJvcmRlcjogc29saWQgIzAwMDtcbiAgICBib3JkZXItd2lkdGg6IDAgMnB4IDJweCAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xufVxuXG4jYWQge1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xuICAgIC8qIEZpcmVmb3ggKi9cbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAtbW96LWJveC1wYWNrOiBjZW50ZXI7XG4gICAgLW1vei1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAvKiBTYWZhcmksIE9wZXJhLCBhbmQgQ2hyb21lICovXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XG59XG4uYWRkX2Fub3RoX29wdGlvbntcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIGNvbG9yOiAjMDA3YWQ5O1xuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgYm94LXNoYWRvdzogaW5oZXJpdDtcbn1cbi5jbG9zZV9pY29ue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogI2Y0NDMzNjtcbiAgICByaWdodDogLTMwcHg7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICB0b3A6IDVweDtcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjJzO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cbi5jbG9zZV9pY29uIGl7XG4gICAgZm9udC1zaXplOjE4cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XG59XG4jZXhhbXBsZU1vZGFsQ2VudGVyIC5jbG9zZSBzcGFue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MUQ2QzM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMnB4IDVweCAwcHggNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDIxcHg7XG59XG4jZXhhbXBsZU1vZGFsQ2VudGVyIC5jbG9zZSBzcGFuIGl7XG4gICAgZm9udC1zaXplOjIwcHg7XG59XG4jVXBsb2FkZWRRdWVzTW9kYWwgLm1vZGFsLWRpYWxvZ3tcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcbn1cbi5xdWVzQ291bnRTaXple1xuICAgIGZvbnQtc2l6ZToyMHB4O1xufVxuLnRvdF9jb3VudHtcbiAgICBjb2xvcjojZmM3YjAzXG59XG4uc3VjY19jb3VudHtcbiAgICBjb2xvcjojMjBCRjZCO1xufVxuLmV4aXN0X2NvdW50e1xuICAgIGNvbG9yOiNmNzA4MDA7XG59XG4ucmVkX2NvbHtcbiAgICBjb2xvcjojYzAzOTJiO1xufVxuLmdyZWVuX2NvbHtcbiAgICBjb2xvcjojMmVjYzcxO1xufVxuLnllbGxvd19jb2x7XG4gICAgY29sb3I6I2YxYzQwZjtcbn1cblxuXG4vKiBoZWFkZXIgKi9cbi5oZWFkZXJfbmF2e1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMxQ0JDOTAgIWltcG9ydGFudDsgKi9cbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMC40MHR1cm4scmdiYSg2MSwgMTEyLCAxNzgsIDAuODkpLCByZ2JhKDY1LCAyMTQsIDE5NSwgMC44OSkscmdiYSg4NSwgMTUwLCAyMzAsIDAuODkpKTsgKi9cbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMTJCQ0ZGICFpbXBvcnRhbnQ7ICovXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI0Q2MzAzMSAhaW1wb3J0YW50OyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRUNDNzEgIWltcG9ydGFudDtcbn1cbi5oZWFkZXJfbmF2IC5uYXZiYXItYnJhbmR7XG4gICAgZm9udC1zaXplOjM0cHg7XG59XG4udXNlcl9pY29uIGltZ3tcbiAgICB3aWR0aDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbn1cbi5oZWFkZXJfbmF2IC5uYXYtbGlua3tcbiAgICBjb2xvcjojZmZmZmZmICFpbXBvcnRhbnQ7XG59XG4uaGVhZGVyX25hdiAuZHJvcGRvd24tbWVudXtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjRThGMEZCOyAqL1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICMxOWJiZmM7ICovXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI0Q2MzAzMTsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkVDQzcxO1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwLjI4dHVybixyZ2JhKDQ4LCA5MywgMTUxLCAwLjg5KSwgcmdiYSg4NSwgMTUwLCAyMzAsIDAuODkpKTsgKi9cbn1cbi5oZWFkZXJfbmF2IGl7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDo1cHg7XG59XG4uZHJvcGRvd24taXRlbTpob3ZlcntcbiAgICBjb2xvcjojNzA3MDcwICFpbXBvcnRhbnQ7XG59XG4uZHJvcGRvd24taXRlbXtcbiAgICBjb2xvcjojZmZmZmZmO1xufVxuXG5cbi5yZXBvcnRfcmVzdWx0e1xuICAgIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcbn1cblxuLmFidF90eHR7XG4gICAgY29sb3I6IzAwMDAwMDtcbn1cbi5zb2NfaWNvbntcbiAgICB3aWR0aDogNDJweDtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgbWFyZ2luOiAwcHggNnB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5uY2RfbGluayBhe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDQ1cHg7XG4gICAgY29sb3I6IzcwNzA3MDtcbn1cblxuXG4uZmlsZUNvbnRhaW5lciB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgXG4gIFxufVxuXG4uZmlsZUNvbnRhaW5lciBbdHlwZT1maWxlXSB7XG4gICAgY3Vyc29yOiBpbmhlcml0O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogOXB4O1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT0wKTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMDtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB0b3A6IDA7XG59XG4ucHJvZmlsZSBpbWd7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGhlaWdodDogMTMwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGVhdDtcbn1cbi5maWxlQ29udGFpbmVyIHtcbiAgIFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTE5LCAxMDcsIDIyMywgMC4zNSk7XG4gICAgcGFkZGluZzogMi45cmVtO1xuICAgIHdpZHRoOiAxMjZweDtcbiAgICBoZWlnaHQ6IDEyNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDc4JTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAvKiBib3JkZXItcmFkaXVzOiAyLjVlbTsgKi9cbiAgICAvKiBmbG9hdDogbGVmdDsgKi9cbiAgICAvKiBwYWRkaW5nOiAxLjVlbTsgKi9cbn1cbiAuc2VjdGlvbnN7XG4gICAgIG1hcmdpbi10b3A6LTFyZW07XG4gICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gfVxuLnByb2ZpbGV7XG4gICAgcGFkZGluZy1yaWdodDogNXJlbTtcbn1cblxuXG5cblxuLmZpbGVDb250YWluZXIgW3R5cGU9ZmlsZV0ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Components/contribute/contribute.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Components/contribute/contribute.component.ts ***!
  \***************************************************************/
/*! exports provided: ContributeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContributeComponent", function() { return ContributeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/AllServices/all-services.service */ "./src/app/Services/AllServices/all-services.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContributeComponent = /** @class */ (function () {
    function ContributeComponent(service, route, activeRoute) {
        var _this = this;
        this.service = service;
        this.route = route;
        this.activeRoute = activeRoute;
        this.emailFormControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email,
        ]);
        this.phoneValidate = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].max(9999999999)
        ]);
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
        this.name = '';
        this.email = '';
        this.phone = '';
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
        this.contributerImageId = 0;
        this.questionSuccesMessage = false;
        this.questionFailMessage = false;
        this.seactionSuccessMessage = false;
        this.seactionFailMessage = false;
        this.selectFile = null;
        this.activeRoute.params.subscribe(function (params) {
            _this.routeId = params['instanceId'];
        });
    }
    ContributeComponent.prototype.onDeSelectAll = function (event) {
        this.heirarchy = undefined;
    };
    ContributeComponent.prototype.onItemSelect = function (event) {
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
    ContributeComponent.prototype.onClosed = function (event) {
        // console.log(event);
    };
    ContributeComponent.prototype.onOpened = function (event) {
        // console.log(event);
    };
    // items=[{value: '0', display: 'Angular'}, {value: '1', display: 'React'}];
    ContributeComponent.prototype.onInputBlur = function (event) {
        if (event != "") {
            this.itemsAsObjects.push({ instanceModelTagId: "0", instanceModelTagName: event });
        }
    };
    ContributeComponent.prototype.onItemAdded = function (event) {
        // this.itemsAsObjects.forEach(element => {
        //   element.id=0;
        // });
        // this.itemsAsObjects.push({instanceModelTagId: "0",instanceModelTagName: event})
        // console.log(this.itemsAsObjects);
        // console.log(event);
    };
    ContributeComponent.prototype.getAllSections = function () {
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
    ContributeComponent.prototype.getAllSectionsByTestId = function () {
        var _this = this;
        this.service.getAll("testmanagement/contribution/instance?encryptedInstanceId=" + this.routeId).subscribe(function (data) {
            if (data['statusCode'] == 1) {
                // console.log(data)
                _this.testSetupData = data['testInstanceDetails'];
                _this.sectionsData = _this.testSetupData['listOfInstanceSections'];
                console.log(_this.testSetupData.instanceTitle);
                // this.testSetup = data['testSetupTitle']
                // console.log(this.sectionsData )
            }
            else {
            }
        }, function (error) {
            // console.log(error)
        }, function () { });
    };
    ContributeComponent.prototype.getComplexCity = function () {
        var _this = this;
        this.service.getAll("reports/questions/getcontributioncomplexity?encryptedInstanceId=" + this.routeId).subscribe(function (data) {
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
    ContributeComponent.prototype.getQuestionType = function () {
        var _this = this;
        this.service.getAll("reports/questions/getcontributionquestiontype?encryptedInstanceId=" + this.routeId).subscribe(function (data) {
            if (data['statusCode'] == 1) {
                // console.log(data)
                _this.questionTypeArr = data['questionType'];
            }
        }, function (error) {
            // console.log(error)
        }, function () { });
    };
    ContributeComponent.prototype.getCategoryAndSubCategoryList = function () {
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
                if (_this.flag) {
                    _this.categoryAndSubCategoryArr = data['globalCategoryList'];
                }
                else {
                    _this.categoryAndSubCategoryArr = data['testMasterConfigList'];
                    // for(let i=0;i<data['testMasterConfigList'].length;i++){
                    //   this.testSectionList.push({
                    //     id: data['testMasterConfigList'][i].id,
                    //     itemName: data['testMasterConfigList'][i].name,
                    //     type:data['testMasterConfigList'][i].type
                    //   })
                    // }
                }
                // console.log(data)
            }
        }, function (error) {
            // console.log(error)
        }, function () {
        });
    };
    ContributeComponent.prototype.onSeletedCatAndSub = function (arr) {
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
    ContributeComponent.prototype.ngOnInit = function () {
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
        // this.getCategoryAndSubCategoryList();
        if (this.routeId) {
            this.flag = false;
            this.getAllSectionsByTestId();
            $('.ng2-tag-input__text-input').focusout(function () {
                // console.log("its working...........");
            });
        }
        else {
            // this.getAllSections();
            // this.getTestMasters();
        }
    };
    ContributeComponent.prototype.ValidateEmail = function (inputText) {
    };
    ContributeComponent.prototype.onSection = function (event, sectionId) {
        var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        ;
        if (this.emailFormControl.errors) {
            this.service.errorAlert("Please Enter Valid Email");
        }
        else if (this.phoneValidate.errors) {
            this.service.errorAlert("Please Enter Valid Phone");
        }
        else {
            $("#exampleModalCenter").modal('show');
            this.sectionId = sectionId;
        }
    };
    ContributeComponent.prototype.onSelectedQuestionImage = function (event) {
        this.questionImageSelectedFile = event.target.files[0];
        // console.log(this.questionImageSelectedFile)
    };
    ContributeComponent.prototype.onSelectedOptionImage = function (event, ind) {
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
    ContributeComponent.prototype.addQuestion = function (myForm) {
        var _this = this;
        console.log(this.sectionId);
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
        formData.append("encryptedInstanceId", "" + this.routeId);
        formData.append("optionList", JSON.stringify(formListOptions));
        formData.append("instanceConfigId", this.sectionId);
        formData.append("questionText", data.questionText);
        formData.append("questionImage", this.questionImageSelectedFile);
        formData.append("questionTypeId", data.questionTypeId);
        formData.append("complexityId", data.complexityId);
        formData.append("questionCode", questionCode);
        formData.append("contributerName", this.name);
        formData.append("contributerMail", this.email);
        formData.append("contributerMobile", this.phone);
        formData.append("contributerUserDpId", "" + this.contributerImageId);
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
        // formData.append("token", localStorage.getItem('token'))
        if (data.isMandate) {
            formData.append("isMandate", "1");
        }
        else {
            formData.append("isMandate", "0");
        }
        //formData.append("")
        // console.log(data)
        this.service.postData("testmanagement/contribution/addquestion", formData).subscribe(function (data) {
            // console.log(data['statusMessage'])
            if (data['statusCode'] == 1) {
                $('#exampleModalCenter').modal('hide');
                _this.mcaAns = null;
                // this.ngOnInit();
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
                // if(this.routeId){
                //   this.updateSections();
                // }
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
            _this.blockUI.stop();
            // $('#exampleModalCenter').modal('toggle');
            // this.ngOnInit();
        });
    };
    ContributeComponent.prototype.createTestInstance = function () {
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
    ContributeComponent.prototype.selectSection = function (index) {
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
    ContributeComponent.prototype.onAccordion = function () {
        document.getElementById('txtarea').addEventListener('keyup', function () {
            this.style.overflow = 'hidden';
            this.style.height = '0';
            this.style.height = this.scrollHeight + 'px';
        }, false);
    };
    ContributeComponent.prototype.onCode = function () {
        document.getElementById('txtarea2').addEventListener('keyup', function () {
            // console.log("hi");
            this.style.overflow = 'hidden';
            this.style.height = '0';
            this.style.height = this.scrollHeight + 'px';
        }, false);
    };
    ContributeComponent.prototype.questionImg = function () {
        document.getElementById('imageId').click();
    };
    ContributeComponent.prototype.optionImg = function (i) {
        document.getElementById('optionImageId' + i).click();
    };
    ContributeComponent.prototype.incOptionList = function () {
        this.optionList.push("");
        this.optionObj[this.optionList.length - 1] = {
            'optionText': null,
            'tempId': 0
        };
        // console.log(this.optionObj)
    };
    ContributeComponent.prototype.setType = function (qType) {
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
    ContributeComponent.prototype.checkboxAns = function (i) {
        if (!this.checkboxList.includes(i)) {
            this.checkboxList.push(i);
        }
        else {
            var ind = this.checkboxList.indexOf(i);
            this.checkboxList.splice(ind, 1);
        }
    };
    ContributeComponent.prototype.setMcqAns = function (ind) {
        this.mcaAns = ind;
    };
    ContributeComponent.prototype.addSectionByTestInsatanceId = function (data) {
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
    ContributeComponent.prototype.addSection = function (data) {
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
    ContributeComponent.prototype.toggleBulk = function (tab) {
        if (tab == '1') {
            this.bulkUpload = false;
        }
        else if (tab == '2') {
            this.bulkUpload = true;
        }
    };
    ContributeComponent.prototype.clickUpload = function () {
        document.getElementById('upload_file_btn').click();
    };
    ContributeComponent.prototype.uploadFile = function (fileInput) {
        this.filesToUpload = fileInput.target.files;
        // console.log(this.filesToUpload)
    };
    ContributeComponent.prototype.onFileSelected = function (event) {
        var _this = this;
        // console.log(event)
        this.selectFile = event.target.files[0];
        var formData = new FormData();
        formData.append("token", localStorage.getItem('token'));
        formData.append('files', this.selectFile);
        if (this.service.cfs) {
            var cfsformData = new FormData();
            // cfsformData.append("access-token",this.service.secretKey);
            cfsformData.append("files", this.selectFile);
            this.service.postDataCfs(cfsformData).subscribe(function (res) {
                // console.log(res);
                if (res.status == 200) {
                    formData.append("cfsId", res.body[0].id);
                    formData.append("cfsViewURL", res.body[0].selfLink.view);
                    formData.append("cfsDownloadURL", res.body[0].selfLink.download);
                    formData.append("encryptedInstanceId", '' + _this.routeId);
                    formData.append("contributerMail", '' + _this.email);
                    _this.service.postData("notification/cfs/contributerimage", formData)
                        .subscribe(function (res) {
                        if (res['statusCode'] == 1) {
                            // this.getUserDetailesById();
                            // console.log(res['statusMessage'])
                            //  localStorage.setItem('userImage',res['imageViewurl']);
                            _this.contributerImageId = res['contributerUserDpId'];
                            // console.log(res['imageViewurl'])
                            _this.service.successAlert(res['statusMessage']);
                        }
                        else {
                            // console.log(res['statusMessage'])
                            _this.service.errorAlert(res['statusMessage']);
                        }
                    }, function (error) {
                        // console.log(error)
                    }, function () {
                    });
                }
                else {
                    _this.service.errorAlert(_this.selectFile.name + "Upload Failed");
                }
            }, function (error) {
                // console.log(error);
            }, function () {
            });
        }
        else {
            formData.append('files', this.selectFile);
            this.service.postData("notification/image/user/profilepic", formData)
                .subscribe(function (res) {
                if (res['statusCode'] == 1) {
                    // this.getUserDetailesById();
                    // console.log(res['statusMessage'])
                    _this.service.successAlert(res['statusMessage']);
                }
                else {
                    // console.log(res['statusMessage'])
                    _this.service.errorAlert(res['statusMessage']);
                }
            }, function (error) {
                // console.log(error)
            }, function () {
            });
        }
    };
    ContributeComponent.prototype.uploadBulkQues = function () {
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
                    formData.append("instanceConfigId", _this.sectionId);
                    formData.append("encryptedInstanceId", _this.routeId);
                    formData.append("contributerMail", _this.email);
                    formData.append("contributionSource", 'Linkedin');
                    formData.append("contributerName", _this.name);
                    formData.append("contributerMobile", _this.phone);
                    formData.append("contributerUserDpId", "" + _this.contributerImageId);
                    _this.service.postData('notification/cfs/contributionbulkquestions', formData)
                        .subscribe(function (res) {
                        if (!res['statusCode']) {
                            _this.blockUI.stop();
                            _this.service.errorAlert(res['statusMessage']);
                        }
                        else {
                            $('#exampleModalCenter').modal('toggle');
                            _this.blockUI.stop();
                            _this.filesToUpload = [];
                            // this.ngOnInit();
                            _this.uploadedQues = res;
                            _this.filesToUpload = [];
                            _this.questionsSuccessCount = res['questionsSuccessCount'];
                            _this.questionsExistCount = res['questionsExistCount'];
                            _this.totalQuestionsCount = res['totalQuestionsCount'];
                            $('#UploadedQuesModal').modal('show');
                            if (_this.routeId) {
                                // this.updateSections();
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
    ContributeComponent.prototype.getSize = function (bytes, decimals) {
        if (decimals === void 0) { decimals = 2; }
        if (bytes === 0)
            return '0 Bytes';
        var k = 1024;
        var dm = decimals < 0 ? 0 : decimals;
        var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
        var i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    };
    ContributeComponent.prototype.getTemplateLink = function () {
        if (this.service.cfs) {
            this.templateLink = this.service.cfsUrl + this.service.questionTemplateUrl;
        }
        else {
            this.templateLink = this.service.url + 'notification/template/download?filetype=question&fileId=1&token=' + localStorage.getItem('token');
        }
    };
    ContributeComponent.prototype.deleteOption = function (i) {
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
    ContributeComponent.prototype.showDelete = function (i) {
        $('#close_' + i).css('visibility', 'visible');
    };
    ContributeComponent.prototype.hideDelete = function (i) {
        $('#close_' + i).css('visibility', 'hidden');
    };
    ContributeComponent.prototype.onMasterSelect = function (event) {
        var _this = this;
        this.service.getAll('reports/questions/getsectionsbymaterid?token=' + localStorage.getItem('token') + '&masterId=' + event.id)
            .subscribe(function (res) {
            _this.sectionsData = res['sectionsList'];
        }, function (error) {
        });
    };
    ContributeComponent.prototype.onRemoveAll = function () {
        // alert("hi")
        // var esc = $.Event("keydown", { keyCode: 27 });
        // $("body").trigger(esc);
        // // $.event.trigger({ type : 'keypress', which : 27 });
        document.getElementById('mul_close').click();
        // this.getAllSections();
        this.sectionsData = [];
    };
    ContributeComponent.prototype.clickDiv = function () {
        document.getElementById('mul_close').click();
    };
    ContributeComponent.prototype.getTestMasters = function () {
        var _this = this;
        this.dropdownListMaster = [];
        this.service.getAll('testmanagement/contribution/instance?encryptedInstanceId=' + this.routeId)
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
    ContributeComponent.prototype.updateSections = function () {
        var _this = this;
        this.service.postData("testmanagement/testsetup/instancetempsections?token=" + localStorage.getItem('token'), this.sectionsData).subscribe(function (data) {
            _this.sectionsData = data['sectionsList'];
        }, function (error) {
        }, function () {
        });
    };
    ContributeComponent.ctorParameters = function () { return [
        { type: _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    __decorate([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_3__["BlockUI"])(),
        __metadata("design:type", Object)
    ], ContributeComponent.prototype, "blockUI", void 0);
    ContributeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contribute',
            template: __webpack_require__(/*! raw-loader!./contribute.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/contribute/contribute.component.html"),
            styles: [__webpack_require__(/*! ./contribute.component.css */ "./src/app/Components/contribute/contribute.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ContributeComponent);
    return ContributeComponent;
}());



/***/ }),

/***/ "./src/app/Components/custom-toast/custom-toast.component.css":
/*!********************************************************************!*\
  !*** ./src/app/Components/custom-toast/custom-toast.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n    background-color: #2ECC71;\n    position: relative;\n    overflow: hidden;\n    margin: 0 0 6px;\n    padding: 10px 10px 10px 10px;\n    width: 300px;\n    border-radius: 3px 3px 3px 3px;\n    color: #FFFFFF;\n    pointer-events: all;\n    cursor: pointer;\n  }\n.btn-pink {\n    -webkit-backface-visibility: hidden;\n    -webkit-transform: translateZ(0);\n  }\n.flexbox {\n    display: flex;\n    flex-wrap: wrap;\n    margin-top: 0.5rem;\n}\n.flexbox > div {\n    \n    -webkit-box-flex: 0;\n    \n    border: 1px solid rgba(255, 255, 255, 0.1);\n    box-sizing: border-box;\n    margin: 0;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: hidden;\n}\n/* NO BORDER SPINNER */\n.nb-spinner {\n  width: 75px;\n  height: 75px;\n    margin: 0;\n    background: transparent;\n    border-top: 4px solid #009688;\n    border-right: 4px solid transparent;\n    border-radius: 50%;\n    -webkit-animation: 1s spin linear infinite;\n    animation: 1s spin linear infinite;\n }\n/* BORDER TOP SPINNER */\n.bt-spinner {\n    width: 30px;\n    height: 30px;\n    border-radius: 50%;\n    background-color: transparent;\n    border: 4px solid #222;\n    border-top-color: #009688;\n    -webkit-animation: 1s spin linear infinite;\n    animation: 1s spin linear infinite;\n  }\n/* DOUBLE BORDER SPINNER */\n.db-spinner {\n    width: 75px;\n    height: 75px;\n    border-radius: 50%;\n    background-color: transparent;\n    border: 4px solid #222;\n    border-top-color: #009688;\n    border-bottom-color: #009688;\n    -webkit-animation: 1s spin linear infinite;\n    animation: 1s spin linear infinite;\n  }\n/* DOUBLE SPINNER */\n.double-spinner {\n    position: relative;\n  }\n.dbl-spinner {\n    position: absolute;\n    width: 75px;\n    height: 75px;\n    border-radius: 50%;\n    background-color: transparent;\n    border: 4px solid transparent;\n    border-top: 4px solid #222;\n    border-left: 4px solid #222;\n    -webkit-animation: 2s spin linear infinite;\n    animation: 2s spin linear infinite;\n  }\n.dbl-spinner--2 {\n    border: 4px solid transparent;\n    border-right: 4px solid #009688;\n    border-bottom: 4px solid #009688;\n    -webkit-animation: 1s spin linear infinite;\n    animation: 1s spin linear infinite;\n  }\n/* Shrinking spinner */\n/* .sh-spinner {\n    position: relative;\n    height: 100px;\n    width: 100px;\n  }\n  .sh-spinner div {\n    position: absolute;\n    width: 75px;\n    height: 75px;\n    border-radius: 50%;\n    background-color: transparent;\n    border: 4px solid transparent;\n    border-top: 4px solid #009688;\n    -webkit-animation: 1.6s spin cubic-bezier(0.43, 1.12, 0.87, 0.84) infinite;\n    animation: 1.6s spin cubic-bezier(0.43, 1.12, 0.87, 0.84) infinite;\n    margin: 4px;\n  }\n  .sh-spinner div:nth-child(1) {\n    animation-delay: -0.4s;\n  }\n  .sh-spinner div:nth-child(2) {\n    animation-delay: -0.3s;\n  }\n  .sh-spinner div:nth-child(3) {\n    animation-delay: -0.15s;\n  } */\n/* TRIPLE SPINNER */\n.triple-spinner {\n    display: block;\n    position: relative;\n    width: 125px;\n    height: 125px;\n    border-radius: 50%;\n    border: 4px solid transparent;\n    border-top: 4px solid #FF5722;\n    -webkit-animation: spin 2s linear infinite;\n    animation: spin 2s linear infinite;\n  }\n.triple-spinner::before,\n  .triple-spinner::after {\n    content: \"\";\n    position: absolute;\n    border-radius: 50%;\n    border: 4px solid transparent;\n  }\n.triple-spinner::before {\n    top: 5px;\n    left: 5px;\n    right: 5px;\n    bottom: 5px;\n    border-top-color: #FF9800;\n    -webkit-animation: spin 3s linear infinite;\n    animation: spin 3.5s linear infinite;\n  }\n.triple-spinner::after {\n    top: 15px;\n    left: 15px;\n    right: 15px;\n    bottom: 15px;\n    border-top-color: #FFC107;\n    -webkit-animation: spin 1.5s linear infinite;\n    animation: spin 1.75s linear infinite;\n  }\n/* REVERSE SPINNER */\n.reverse-spinner {\n    position: relative;\n    height: 100px;\n    width: 100px;\n    border: 4px solid transparent;\n    border-top-color: #1976d2;\n    border-left-color: #1976d2;\n    border-radius: 50%;\n    -webkit-animation: spin 1.5s linear infinite;\n    animation: spin 1.5s linear infinite;\n  }\n.reverse-spinner::before {\n    position: absolute;\n    top: 15px;\n    left: 15px;\n    right: 15px;\n    bottom: 15px;\n    content: \"\";\n    border: 4px solid transparent;\n    border-top-color: #03a9f4;\n    border-left-color: #03a9f4;\n    border-radius: 50%;\n    -webkit-animation: spinBack 1s linear infinite;\n    animation: spinBack 1s linear infinite;\n  }\n/* HM SPINNER */\n.hm-spinner{\n    height: 115px;\n    width: 115px;\n    border: 5px solid transparent;\n    border-top-color: #9C27B0;\n    border-bottom-color: #9C27B0;\n    border-radius: 50%;\n    position: relative;\n    -webkit-animation: spin 3s linear infinite;\n            animation: spin 3s linear infinite;\n  }\n.hm-spinner::before{\n    content: \"\";\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    bottom: 20px;\n    left: 20px;\n    border: 5px solid transparent;\n    border-top-color: #BA68C8;\n    border-bottom-color: #BA68C8;\n    border-radius: 50%;\n    -webkit-animation: spin 1.5s linear infinite;\n    animation: spin 1.5s linear infinite;\n  \n  }\n/* CM SPINNER */\n.cm-spinner {\n    height: 150px;\n    width: 150px;\n    border: 3px solid transparent;\n    border-radius: 50%;\n    border-top: 4px solid #f15e41;\n    -webkit-animation: spin 4s linear infinite;\n    animation: spin 4s linear infinite;\n    position: relative;\n  }\n.cm-spinner::before,\n  .cm-spinner::after {\n    content: \"\";\n    position: absolute;\n    top: 6px;\n    bottom: 6px;\n    left: 6px;\n    right: 6px;\n    border-radius: 50%;\n    border: 4px solid transparent;\n  }\n.cm-spinner::before {\n    border-top-color: #bad375;\n    -webkit-animation: 3s spin linear infinite;\n    animation: 3s spin linear infinite;\n  }\n.cm-spinner::after {\n    border-top-color: #26a9e0;\n    -webkit-animation: spin 1.5s linear infinite;\n    animation: spin 1.5s linear infinite;\n  }\n.spinner-7 {\n    width: 60px;\n    height: 60px;\n    margin: 0;\n    background: transparent;\n    border-top: 4px solid #fff;\n    border-right: 4px solid transparent;\n    border-radius: 50%;\n    -webkit-animation: 1s spin linear infinite;\n    animation: 1s spinBorder linear infinite;\n  }\n/* 3 DOT LOADER */\n.dot-loader {\n    height: 20px;\n    width: 20px;\n    border-radius: 50%;\n    background-color: #f44336;\n    position: relative;\n    -webkit-animation: 1.2s grow ease-in-out infinite;\n    animation: 1.2s grow ease-in-out infinite;\n  }\n.dot-loader--2 {\n    -webkit-animation: 1.2s grow ease-in-out infinite 0.15555s;\n    animation: 1.2s grow ease-in-out infinite 0.15555s;\n    margin: 0 20px;\n  }\n.dot-loader--3 {\n    -webkit-animation: 1.2s grow ease-in-out infinite 0.3s;\n    animation: 1.2s grow ease-in-out infinite 0.3s;\n  }\n/* CIRCLE DOT LOADER */\n.circle-loader {\n    position: relative;\n    width: auto;\n    height: auto;\n  }\n.circle-loader div {\n    height: 10px;\n    width: 10px;\n    background-color: #f44336;\n    border-radius: 50%;\n    position: absolute;\n    -webkit-animation: 0.8s opaque ease-in-out infinite both;\n    animation: 0.8s opaque ease-in-out infinite both;\n  }\n.circle-loader > div:nth-child(1) {\n    top: -25px;\n    left: 0;\n  }\n.circle-loader > div:nth-child(2) {\n    top: -17px;\n    left: 17px;\n    -webkit-animation-delay: 0.1s;\n    animation-delay: 0.1s;\n  }\n.circle-loader > div:nth-child(3) {\n    top: 0;\n    left: 25px;\n    -webkit-animation-delay: 0.2s;\n    animation-delay: 0.2s;\n  }\n.circle-loader > div:nth-child(4) {\n    top: 17px;\n    left: 17px;\n    -webkit-animation-delay: 0.3s;\n    animation-delay: 0.3s;\n  }\n.circle-loader > div:nth-child(5) {\n    top: 25px;\n    left: 0;\n    -webkit-animation-delay: 0.4s;\n    animation-delay: 0.4s;\n  }\n.circle-loader > div:nth-child(6) {\n    top: 17px;\n    left: -17px;\n    -webkit-animation-delay: 0.5s;\n    animation-delay: 0.5s;\n  }\n.circle-loader > div:nth-child(7) {\n    top: 0;\n    left: -25px;\n    -webkit-animation-delay: 0.6s;\n    animation-delay: 0.6s;\n  }\n.circle-loader > div:nth-child(8) {\n    top: -17px;\n    left: -17px;\n    -webkit-animation-delay: 0.7s;\n    animation-delay: 0.7s;\n  }\n/* MULTI SPINNER */\n.multi-spinner-container {\n    width: 150px;\n    height: 150px;\n    position: relative;\n    margin: 30px auto;\n    overflow: hidden;\n  }\n.multi-spinner {\n    position: absolute;\n    width: calc(100% - 9.9px);\n    height: calc(100% - 9.9px);\n    border: 5px solid transparent;\n    border-top-color: #ff5722;\n    border-radius: 50%;\n    -webkit-animation: spin 5s cubic-bezier(0.17, 0.49, 0.96, 0.76) infinite;\n    animation: spin 5s cubic-bezier(0.17, 0.49, 0.96, 0.76) infinite;\n  }\n/* MESH LOADER */\n.mesh-loader {\n    overflow: hidden;\n    height: inherit;\n    width: inherit;\n  }\n.mesh-loader .circle {\n    width: 30px;\n    height: 30px;\n    position: absolute;\n    background: #f44336;\n    border-radius: 50%;\n    margin: -15px;\n    -webkit-animation: mesh 3s ease-in-out infinite -1.5s;\n    animation: mesh 3s ease-in-out infinite -1.5s;\n  }\n.mesh-loader > div .circle:last-child {\n    -webkit-animation-delay: 0s;\n    animation-delay: 0s;\n  }\n.mesh-loader > div {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n  }\n.mesh-loader > div:last-child {\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n  }\n/* TRIFORCE LOADER */\n.triforce-container {\n    width: 100px;\n    height: 100px;\n    position: relative;\n    margin: 120px auto;\n  }\n.triforce,\n  .triforce::before,\n  .triforce::after {\n    width: 0;\n    height: 0;\n    border-left: 25px solid transparent;\n    border-right: 25px solid transparent;\n    border-bottom: 50px solid #ceb502;\n    position: relative;\n    -webkit-animation: 3s triforce linear infinite 2s both;\n    animation: 3s triforce linear infinite 2s both;\n    top: 50px;\n  }\n.triforce::before,\n  .triforce::after {\n    content: \"\";\n    position: absolute;\n  }\n.triforce::before {\n    left: 25px;\n    top: 0;\n    -webkit-animation-delay: 1s;\n    animation-delay: 1s;\n  }\n.triforce::after {\n    top: -50px;\n    -webkit-animation-delay: 0s;\n    animation-delay: 0s;\n  }\n/* HEART LOADER */\n.heart-loader {\n    background-color: #f44336;\n    width: 50px;\n    height: 50px;\n    position: relative;\n    -webkite-transform: rotate(45deg);\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg);\n    -webkit-animation: pulsate 1s infinite;\n    animation: pulsate 1s infinite;\n  }\n.heart-loader::before,\n  .heart-loader::after {\n    display: inline-block;\n    content: \"\";\n    width: 50px;\n    height: 50px;\n    background-color: #f44336;\n    position: absolute;\n    border-radius: 50%;\n  }\n.heart-loader::before {\n    top: 0px;\n    left: -25px;\n  }\n.heart-loader::after {\n    top: -25px;\n    left: -0px;\n  }\n/* PACMAN */\n/* .pacman{\n    height: 75px;\n    width: 75px;\n    background-color: gold;\n    border-radius: 50%;\n    margin: -37px 0 0 0;\n    position: relative;\n    display: block;\n    overflow: hidden;\n  }\n  \n  .pacman::before{\n  } */\n/* SPINNER 13 */\n.ml-loader {\n    position: relative;\n    width: 70px;\n    height: 70px;\n  }\n.ml-loader div {\n    -webkit-transform-origin: 32px 32px;\n    transform-origin: 32px 32px;\n    -webkit-animation: 1.2s opaque ease-in-out infinite both;\n    animation: 1.2s opaque ease-in-out infinite both;\n  }\n.ml-loader div::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 30px;\n    width: 5px;\n    height: 18px;\n    border-radius: 10px;\n    background-color: #f44336;\n  }\n.ml-loader div:nth-child(1) {\n    -webkit-transform: rotate(0);\n    transform: rotate(0);\n  }\n.ml-loader div:nth-child(2) {\n    -webkit-transform: rotate(30deg);\n    transform: rotate(30deg);\n    -webkit-animation-delay: 0.1s;\n    animation-delay: 0.1s;\n  }\n.ml-loader div:nth-child(3) {\n    -webkit-transform: rotate(60deg);\n    transform: rotate(60deg);\n    -webkit-animation-delay: 0.2s;\n    animation-delay: 0.2s;\n  }\n.ml-loader div:nth-child(4) {\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n    -webkit-animation-delay: 0.3s;\n    animation-delay: 0.3s;\n  }\n.ml-loader div:nth-child(5) {\n    -webkit-transform: rotate(120deg);\n    transform: rotate(120deg);\n    -webkit-animation-delay: 0.4s;\n    animation-delay: 0.4s;\n  }\n.ml-loader div:nth-child(6) {\n    -webkit-transform: rotate(150deg);\n    transform: rotate(150deg);\n    -webkit-animation-delay: 0.5s;\n    animation-delay: 0.5s;\n  }\n.ml-loader div:nth-child(7) {\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n    -webkit-animation-delay: 0.6s;\n    animation-delay: 0.6s;\n  }\n.ml-loader div:nth-child(8) {\n    -webkit-transform: rotate(210deg);\n    transform: rotate(210deg);\n    -webkit-animation-delay: 0.7s;\n    animation-delay: 0.7s;\n  }\n.ml-loader div:nth-child(9) {\n    -webkit-transform: rotate(240deg);\n    transform: rotate(240deg);\n    -webkit-animation-delay: 0.8s;\n    animation-delay: 0.8s;\n  }\n.ml-loader div:nth-child(10) {\n    -webkit-transform: rotate(270deg);\n    transform: rotate(270deg);\n    -webkit-animation-delay: 0.9s;\n    animation-delay: 0.9s;\n  }\n.ml-loader div:nth-child(11) {\n    -webkit-transform: rotate(300deg);\n    transform: rotate(300deg);\n    -webkit-animation-delay: 1s;\n    animation-delay: 1s;\n  }\n.ml-loader div:nth-child(12) {\n    -webkit-transform: rotate(330deg);\n    transform: rotate(330deg);\n    -webkit-animation-delay: 1.1s;\n    animation-delay: 1.1s;\n  }\n.ml-loader div:nth-child(13) {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n    -webkit-animation-delay: 1.2s;\n    animation-delay: 1.2s;\n  }\n@-webkit-keyframes rotate {\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n@keyframes rotate {\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n@keyframes spin {\n    -webkit-from {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    -webkit-to {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n@-webkit-keyframes spin {\n    from {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    to {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n@keyframes spin {\n    from {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    to {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n@-webkit-keyframes spinBack {\n    from {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    to {\n      -webkit-transform: rotate(-720deg);\n      transform: rotate(-720deg);\n    }\n  }\n@keyframes spinBack {\n    from {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    to {\n      -webkit-transform: rotate(-720deg);\n      transform: rotate(-720deg);\n    }\n  }\n@-webkit-keyframes spinBorder {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n      border-width: 15px;\n    }\n    50% {\n      -webkit-transform: rotate(180deg);\n      transform: rotate(180deg);\n      border-width: 3px;\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n      border-width: 15px;\n    }\n  }\n@keyframes spinBorder {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n      border-width: 15px;\n    }\n    50% {\n      -webkit-transform: rotate(180deg);\n      transform: rotate(180deg);\n      border-width: 3px;\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n      border-width: 15px;\n    }\n  }\n@-webkit-keyframes grow {\n    0%, 40%, 100% {\n      -webkit-transform: scale(0);\n              transform: scale(0);\n    }\n    40% {\n      -webkit-transform: scale(1);\n              transform: scale(1);\n    }\n  }\n@keyframes grow {\n    0%, 40%, 100% {\n      -webkit-transform: scale(0);\n              transform: scale(0);\n    }\n    40% {\n      -webkit-transform: scale(1);\n              transform: scale(1);\n    }\n  }\n@-webkit-keyframes triforce {\n    0% {\n      border-bottom-color: rgb(206, 181, 2);\n    }\n    40% {\n      border-bottom-color: rgba(206, 181, 2, 0);\n    }\n    80% {\n      border-bottom-color: rgb(206, 181, 2);\n    }\n    100% {\n      border-bottom-color: rgb(206, 181, 2);\n    }\n  }\n@keyframes triforce {\n    0% {\n      border-bottom-color: rgb(206, 181, 2);\n    }\n    40% {\n      border-bottom-color: rgba(206, 181, 2, 0);\n    }\n    80% {\n      border-bottom-color: rgb(206, 181, 2);\n    }\n    100% {\n      border-bottom-color: rgb(206, 181, 2);\n    }\n  }\n@-webkit-keyframes pulsate {\n    0% {\n      -webkit-transform: rotate(45deg) scale(0.8);\n      transform: rotate(45deg) scale(0.8);\n      transform: rotate(45deg) scale(0.8);\n    }\n    5% {\n      -webkit-transform: rotate(45deg) scale(0.9);\n      transform: rotate(45deg) scale(0.9);\n    }\n    10% {\n      -webkit-transform: rotate(45deg) scale(0.8);\n      transform: rotate(45deg) scale(0.8);\n    }\n    15% {\n      -webkit-transform: rotate(45deg) scale(1);\n      transform: rotate(45deg) scale(1);\n    }\n    50% {\n      -webkit-transform: rotate(45deg) scale(0.8);\n      transform: rotate(45deg) scale(0.8);\n    }\n    100% {\n      -webkit-transform: rotate(45deg) scale(0.8);\n      transform: rotate(45deg) scale(0.8);\n    }\n  }\n@keyframes pulsate {\n    0% {\n      -webkit-transform: rotate(45deg) scale(0.8);\n      transform: rotate(45deg) scale(0.8);\n      transform: rotate(45deg) scale(0.8);\n    }\n    5% {\n      -webkit-transform: rotate(45deg) scale(0.9);\n      transform: rotate(45deg) scale(0.9);\n    }\n    10% {\n      -webkit-transform: rotate(45deg) scale(0.8);\n      transform: rotate(45deg) scale(0.8);\n    }\n    15% {\n      -webkit-transform: rotate(45deg) scale(1);\n      transform: rotate(45deg) scale(1);\n    }\n    50% {\n      -webkit-transform: rotate(45deg) scale(0.8);\n      transform: rotate(45deg) scale(0.8);\n    }\n    100% {\n      -webkit-transform: rotate(45deg) scale(0.8);\n      transform: rotate(45deg) scale(0.8);\n    }\n  }\n@-webkit-keyframes opaque {\n    0% {\n      opacity: 0.1;\n    }\n    40% {\n      opacity: 1;\n    }\n    80% {\n      opacity: 0.1;\n    }\n    100% {\n      opacity: 0.1;\n    }\n  }\n@keyframes opaque {\n    0% {\n      opacity: 0.1;\n    }\n    40% {\n      opacity: 1;\n    }\n    80% {\n      opacity: 0.1;\n    }\n    100% {\n      opacity: 0.1;\n    }\n  }\n@-webkit-keyframes mesh {\n    0% {\n      -webkit-transform-origin: 50% -100%;\n      transform-origin: 50% -100%;\n      -webkit-transform: rotate(0);\n      transform: rotate(0);\n    }\n    50% {\n      -webkit-transform-origin: 50% -100%;\n      transform-origin: 50% -100%;\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n    50.1% {\n      -webkit-transform-origin: 50% 200%;\n      transform-origin: 50% 200%;\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform-origin: 50% 200%;\n      transform-origin: 50% 200%;\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n@keyframes mesh {\n    0% {\n      -webkit-transform-origin: 50% -100%;\n      transform-origin: 50% -100%;\n      -webkit-transform: rotate(0);\n      transform: rotate(0);\n    }\n    50% {\n      -webkit-transform-origin: 50% -100%;\n      transform-origin: 50% -100%;\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n    50.1% {\n      -webkit-transform-origin: 50% 200%;\n      transform-origin: 50% 200%;\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform-origin: 50% 200%;\n      transform-origin: 50% 200%;\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n@media only screen and (max-width: 968px) {\n    .flexbox > div {\n      flex: 0 0 33.3333333%;\n    }\n  }\n@media only screen and (max-width: 768px) {\n    .flexbox > div {\n      flex: 0 0 50%;\n    }\n  }\n@media only screen and (max-width: 568px) {\n    .flexbox > div {\n      flex: 0 0 100%;\n    }\n  }\na{\n    color: #009688;\n    display: block;\n    text-align: center;\n    font-size: 26px;\n    text-decoration: none;\n    cursor: pointer;\n    margin: 2rem auto;\n  }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9jdXN0b20tdG9hc3QvY3VzdG9tLXRvYXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCO0FBQ0Y7SUFDSSxtQ0FBbUM7SUFDbkMsZ0NBQWdDO0VBQ2xDO0FBRUY7SUFHSSxhQUFhO0lBRWIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUdBOztJQUVJLG1CQUFtQjs7SUFFbkIsMENBQTBDO0lBRTFDLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1Qsa0JBQWtCO0lBR2xCLGFBQWE7SUFHYix1QkFBdUI7SUFHdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUVFLHNCQUFzQjtBQUN4QjtFQUNFLFdBQVc7RUFDWCxZQUFZO0lBQ1YsU0FBUztJQUNULHVCQUF1QjtJQUN2Qiw2QkFBNkI7SUFDN0IsbUNBQW1DO0lBQ25DLGtCQUFrQjtJQUNsQiwwQ0FBMEM7SUFDMUMsa0NBQWtDO0NBQ3JDO0FBRUMsdUJBQXVCO0FBQ3ZCO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsMENBQTBDO0lBQzFDLGtDQUFrQztFQUNwQztBQUVBLDBCQUEwQjtBQUMxQjtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QiwwQ0FBMEM7SUFDMUMsa0NBQWtDO0VBQ3BDO0FBRUEsbUJBQW1CO0FBQ25CO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLDBDQUEwQztJQUMxQyxrQ0FBa0M7RUFDcEM7QUFFQTtJQUNFLDZCQUE2QjtJQUM3QiwrQkFBK0I7SUFDL0IsZ0NBQWdDO0lBQ2hDLDBDQUEwQztJQUMxQyxrQ0FBa0M7RUFDcEM7QUFFQSxzQkFBc0I7QUFDdEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0F5Qkc7QUFFSCxtQkFBbUI7QUFDbkI7SUFDRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3Qiw2QkFBNkI7SUFDN0IsMENBQTBDO0lBQzFDLGtDQUFrQztFQUNwQztBQUVBOztJQUVFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLDZCQUE2QjtFQUMvQjtBQUNBO0lBQ0UsUUFBUTtJQUNSLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLHlCQUF5QjtJQUN6QiwwQ0FBMEM7SUFDMUMsb0NBQW9DO0VBQ3RDO0FBQ0E7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLDRDQUE0QztJQUM1QyxxQ0FBcUM7RUFDdkM7QUFFQSxvQkFBb0I7QUFFcEI7SUFDRSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IseUJBQXlCO0lBQ3pCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsNENBQTRDO0lBQzVDLG9DQUFvQztFQUN0QztBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLDhDQUE4QztJQUM5QyxzQ0FBc0M7RUFDeEM7QUFFQSxlQUFlO0FBQ2Y7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsMENBQTBDO1lBQ2xDLGtDQUFrQztFQUM1QztBQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLDRDQUE0QztJQUM1QyxvQ0FBb0M7O0VBRXRDO0FBRUEsZUFBZTtBQUNmO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QiwwQ0FBMEM7SUFDMUMsa0NBQWtDO0lBQ2xDLGtCQUFrQjtFQUNwQjtBQUVBOztJQUVFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFdBQVc7SUFDWCxTQUFTO0lBQ1QsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiw2QkFBNkI7RUFDL0I7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QiwwQ0FBMEM7SUFDMUMsa0NBQWtDO0VBQ3BDO0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsNENBQTRDO0lBQzVDLG9DQUFvQztFQUN0QztBQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLDBCQUEwQjtJQUMxQixtQ0FBbUM7SUFDbkMsa0JBQWtCO0lBQ2xCLDBDQUEwQztJQUMxQyx3Q0FBd0M7RUFDMUM7QUFFQSxpQkFBaUI7QUFFakI7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGlEQUFpRDtJQUNqRCx5Q0FBeUM7RUFDM0M7QUFFQTtJQUNFLDBEQUEwRDtJQUMxRCxrREFBa0Q7SUFDbEQsY0FBYztFQUNoQjtBQUNBO0lBQ0Usc0RBQXNEO0lBQ3RELDhDQUE4QztFQUNoRDtBQUVBLHNCQUFzQjtBQUV0QjtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBRUE7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHdEQUF3RDtJQUN4RCxnREFBZ0Q7RUFDbEQ7QUFFQTtJQUNFLFVBQVU7SUFDVixPQUFPO0VBQ1Q7QUFDQTtJQUNFLFVBQVU7SUFDVixVQUFVO0lBQ1YsNkJBQTZCO0lBQzdCLHFCQUFxQjtFQUN2QjtBQUNBO0lBQ0UsTUFBTTtJQUNOLFVBQVU7SUFDViw2QkFBNkI7SUFDN0IscUJBQXFCO0VBQ3ZCO0FBQ0E7SUFDRSxTQUFTO0lBQ1QsVUFBVTtJQUNWLDZCQUE2QjtJQUM3QixxQkFBcUI7RUFDdkI7QUFDQTtJQUNFLFNBQVM7SUFDVCxPQUFPO0lBQ1AsNkJBQTZCO0lBQzdCLHFCQUFxQjtFQUN2QjtBQUNBO0lBQ0UsU0FBUztJQUNULFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IscUJBQXFCO0VBQ3ZCO0FBQ0E7SUFDRSxNQUFNO0lBQ04sV0FBVztJQUNYLDZCQUE2QjtJQUM3QixxQkFBcUI7RUFDdkI7QUFDQTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsNkJBQTZCO0lBQzdCLHFCQUFxQjtFQUN2QjtBQUVBLGtCQUFrQjtBQUVsQjtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7RUFDbEI7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3Qix5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHdFQUF3RTtJQUN4RSxnRUFBZ0U7RUFDbEU7QUFFQSxnQkFBZ0I7QUFFaEI7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGNBQWM7RUFDaEI7QUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFEQUFxRDtJQUNyRCw2Q0FBNkM7RUFDL0M7QUFFQTtJQUNFLDJCQUEyQjtJQUMzQixtQkFBbUI7RUFDckI7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztFQUNYO0FBRUE7SUFDRSxnQ0FBZ0M7SUFFaEMsd0JBQXdCO0VBQzFCO0FBRUEsb0JBQW9CO0FBQ3BCO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCO0FBQ0E7OztJQUdFLFFBQVE7SUFDUixTQUFTO0lBQ1QsbUNBQW1DO0lBQ25DLG9DQUFvQztJQUNwQyxpQ0FBaUM7SUFDakMsa0JBQWtCO0lBQ2xCLHNEQUFzRDtJQUN0RCw4Q0FBOEM7SUFDOUMsU0FBUztFQUNYO0FBRUE7O0lBRUUsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsVUFBVTtJQUNWLE1BQU07SUFDTiwyQkFBMkI7SUFDM0IsbUJBQW1CO0VBQ3JCO0FBRUE7SUFDRSxVQUFVO0lBQ1YsMkJBQTJCO0lBQzNCLG1CQUFtQjtFQUNyQjtBQUVBLGlCQUFpQjtBQUVqQjtJQUNFLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsZ0NBQWdDO0lBRWhDLHdCQUF3QjtJQUN4QixzQ0FBc0M7SUFDdEMsOEJBQThCO0VBQ2hDO0FBRUE7O0lBRUUscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsa0JBQWtCO0VBQ3BCO0FBRUE7SUFDRSxRQUFRO0lBQ1IsV0FBVztFQUNiO0FBQ0E7SUFDRSxVQUFVO0lBQ1YsVUFBVTtFQUNaO0FBRUEsV0FBVztBQUVYOzs7Ozs7Ozs7Ozs7S0FZRztBQUVILGVBQWU7QUFFZjtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBRUE7SUFDRSxtQ0FBbUM7SUFFbkMsMkJBQTJCO0lBQzNCLHdEQUF3RDtJQUN4RCxnREFBZ0Q7RUFDbEQ7QUFFQTtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixVQUFVO0lBQ1YsVUFBVTtJQUNWLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0VBQzNCO0FBRUE7SUFDRSw0QkFBNEI7SUFFNUIsb0JBQW9CO0VBQ3RCO0FBQ0E7SUFDRSxnQ0FBZ0M7SUFFaEMsd0JBQXdCO0lBQ3hCLDZCQUE2QjtJQUM3QixxQkFBcUI7RUFDdkI7QUFDQTtJQUNFLGdDQUFnQztJQUVoQyx3QkFBd0I7SUFDeEIsNkJBQTZCO0lBQzdCLHFCQUFxQjtFQUN2QjtBQUNBO0lBQ0UsZ0NBQWdDO0lBRWhDLHdCQUF3QjtJQUN4Qiw2QkFBNkI7SUFDN0IscUJBQXFCO0VBQ3ZCO0FBQ0E7SUFDRSxpQ0FBaUM7SUFFakMseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixxQkFBcUI7RUFDdkI7QUFDQTtJQUNFLGlDQUFpQztJQUVqQyx5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLHFCQUFxQjtFQUN2QjtBQUNBO0lBQ0UsaUNBQWlDO0lBRWpDLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IscUJBQXFCO0VBQ3ZCO0FBQ0E7SUFDRSxpQ0FBaUM7SUFFakMseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixxQkFBcUI7RUFDdkI7QUFDQTtJQUNFLGlDQUFpQztJQUVqQyx5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLHFCQUFxQjtFQUN2QjtBQUNBO0lBQ0UsaUNBQWlDO0lBRWpDLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IscUJBQXFCO0VBQ3ZCO0FBQ0E7SUFDRSxpQ0FBaUM7SUFFakMseUJBQXlCO0lBQ3pCLDJCQUEyQjtJQUMzQixtQkFBbUI7RUFDckI7QUFDQTtJQUNFLGlDQUFpQztJQUVqQyx5QkFBeUI7SUFDekIsNkJBQTZCO0lBQzdCLHFCQUFxQjtFQUN2QjtBQUNBO0lBQ0UsaUNBQWlDO0lBRWpDLHlCQUF5QjtJQUN6Qiw2QkFBNkI7SUFDN0IscUJBQXFCO0VBQ3ZCO0FBQ0E7SUFDRTtNQUNFLGlDQUFpQztNQUNqQyx5QkFBeUI7SUFDM0I7RUFDRjtBQUNBO0lBQ0U7TUFDRSxpQ0FBaUM7TUFDakMseUJBQXlCO0lBQzNCO0VBQ0Y7QUFFQTtJQUNFO01BQ0UsK0JBQStCO01BRS9CLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UsaUNBQWlDO01BRWpDLHlCQUF5QjtJQUMzQjtFQUNGO0FBRUE7SUFDRTtNQUNFLCtCQUErQjtNQUMvQix1QkFBdUI7SUFDekI7SUFDQTtNQUNFLGlDQUFpQztNQUNqQyx5QkFBeUI7SUFDM0I7RUFDRjtBQUVBO0lBQ0U7TUFDRSwrQkFBK0I7TUFDL0IsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSxpQ0FBaUM7TUFDakMseUJBQXlCO0lBQzNCO0VBQ0Y7QUFFQTtJQUNFO01BQ0UsK0JBQStCO01BQy9CLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0Usa0NBQWtDO01BQ2xDLDBCQUEwQjtJQUM1QjtFQUNGO0FBRUE7SUFDRTtNQUNFLCtCQUErQjtNQUMvQix1QkFBdUI7SUFDekI7SUFDQTtNQUNFLGtDQUFrQztNQUNsQywwQkFBMEI7SUFDNUI7RUFDRjtBQUVBO0lBQ0U7TUFDRSwrQkFBK0I7TUFDL0IsdUJBQXVCO01BQ3ZCLGtCQUFrQjtJQUNwQjtJQUNBO01BQ0UsaUNBQWlDO01BQ2pDLHlCQUF5QjtNQUN6QixpQkFBaUI7SUFDbkI7SUFDQTtNQUNFLGlDQUFpQztNQUNqQyx5QkFBeUI7TUFDekIsa0JBQWtCO0lBQ3BCO0VBQ0Y7QUFFQTtJQUNFO01BQ0UsK0JBQStCO01BQy9CLHVCQUF1QjtNQUN2QixrQkFBa0I7SUFDcEI7SUFDQTtNQUNFLGlDQUFpQztNQUNqQyx5QkFBeUI7TUFDekIsaUJBQWlCO0lBQ25CO0lBQ0E7TUFDRSxpQ0FBaUM7TUFDakMseUJBQXlCO01BQ3pCLGtCQUFrQjtJQUNwQjtFQUNGO0FBRUE7SUFDRTtNQUNFLDJCQUEyQjtjQUNuQixtQkFBbUI7SUFDN0I7SUFDQTtNQUNFLDJCQUEyQjtjQUNuQixtQkFBbUI7SUFDN0I7RUFDRjtBQUNBO0lBQ0U7TUFDRSwyQkFBMkI7Y0FDbkIsbUJBQW1CO0lBQzdCO0lBQ0E7TUFDRSwyQkFBMkI7Y0FDbkIsbUJBQW1CO0lBQzdCO0VBQ0Y7QUFFQTtJQUNFO01BQ0UscUNBQXFDO0lBQ3ZDO0lBQ0E7TUFDRSx5Q0FBeUM7SUFDM0M7SUFDQTtNQUNFLHFDQUFxQztJQUN2QztJQUNBO01BQ0UscUNBQXFDO0lBQ3ZDO0VBQ0Y7QUFFQTtJQUNFO01BQ0UscUNBQXFDO0lBQ3ZDO0lBQ0E7TUFDRSx5Q0FBeUM7SUFDM0M7SUFDQTtNQUNFLHFDQUFxQztJQUN2QztJQUNBO01BQ0UscUNBQXFDO0lBQ3ZDO0VBQ0Y7QUFFQTtJQUNFO01BQ0UsMkNBQTJDO01BQzNDLG1DQUFtQztNQUNuQyxtQ0FBbUM7SUFDckM7SUFDQTtNQUNFLDJDQUEyQztNQUMzQyxtQ0FBbUM7SUFDckM7SUFDQTtNQUNFLDJDQUEyQztNQUMzQyxtQ0FBbUM7SUFDckM7SUFDQTtNQUNFLHlDQUF5QztNQUN6QyxpQ0FBaUM7SUFDbkM7SUFDQTtNQUNFLDJDQUEyQztNQUMzQyxtQ0FBbUM7SUFDckM7SUFDQTtNQUNFLDJDQUEyQztNQUMzQyxtQ0FBbUM7SUFDckM7RUFDRjtBQUVBO0lBQ0U7TUFDRSwyQ0FBMkM7TUFDM0MsbUNBQW1DO01BQ25DLG1DQUFtQztJQUNyQztJQUNBO01BQ0UsMkNBQTJDO01BQzNDLG1DQUFtQztJQUNyQztJQUNBO01BQ0UsMkNBQTJDO01BQzNDLG1DQUFtQztJQUNyQztJQUNBO01BQ0UseUNBQXlDO01BQ3pDLGlDQUFpQztJQUNuQztJQUNBO01BQ0UsMkNBQTJDO01BQzNDLG1DQUFtQztJQUNyQztJQUNBO01BQ0UsMkNBQTJDO01BQzNDLG1DQUFtQztJQUNyQztFQUNGO0FBRUE7SUFDRTtNQUNFLFlBQVk7SUFDZDtJQUNBO01BQ0UsVUFBVTtJQUNaO0lBQ0E7TUFDRSxZQUFZO0lBQ2Q7SUFDQTtNQUNFLFlBQVk7SUFDZDtFQUNGO0FBRUE7SUFDRTtNQUNFLFlBQVk7SUFDZDtJQUNBO01BQ0UsVUFBVTtJQUNaO0lBQ0E7TUFDRSxZQUFZO0lBQ2Q7SUFDQTtNQUNFLFlBQVk7SUFDZDtFQUNGO0FBRUE7SUFDRTtNQUNFLG1DQUFtQztNQUNuQywyQkFBMkI7TUFDM0IsNEJBQTRCO01BQzVCLG9CQUFvQjtJQUN0QjtJQUNBO01BQ0UsbUNBQW1DO01BQ25DLDJCQUEyQjtNQUMzQixpQ0FBaUM7TUFDakMseUJBQXlCO0lBQzNCO0lBQ0E7TUFDRSxrQ0FBa0M7TUFDbEMsMEJBQTBCO01BQzFCLCtCQUErQjtNQUMvQix1QkFBdUI7SUFDekI7SUFDQTtNQUNFLGtDQUFrQztNQUNsQywwQkFBMEI7TUFDMUIsaUNBQWlDO01BQ2pDLHlCQUF5QjtJQUMzQjtFQUNGO0FBRUE7SUFDRTtNQUNFLG1DQUFtQztNQUNuQywyQkFBMkI7TUFDM0IsNEJBQTRCO01BQzVCLG9CQUFvQjtJQUN0QjtJQUNBO01BQ0UsbUNBQW1DO01BQ25DLDJCQUEyQjtNQUMzQixpQ0FBaUM7TUFDakMseUJBQXlCO0lBQzNCO0lBQ0E7TUFDRSxrQ0FBa0M7TUFDbEMsMEJBQTBCO01BQzFCLCtCQUErQjtNQUMvQix1QkFBdUI7SUFDekI7SUFDQTtNQUNFLGtDQUFrQztNQUNsQywwQkFBMEI7TUFDMUIsaUNBQWlDO01BQ2pDLHlCQUF5QjtJQUMzQjtFQUNGO0FBRUE7SUFDRTtNQUdFLHFCQUFxQjtJQUN2QjtFQUNGO0FBRUE7SUFDRTtNQUdFLGFBQWE7SUFDZjtFQUNGO0FBRUE7SUFDRTtNQUdFLGNBQWM7SUFDaEI7RUFDRjtBQUdBO0lBQ0UsY0FBYztJQUNkLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsaUJBQWlCO0VBQ25CIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9jdXN0b20tdG9hc3QvY3VzdG9tLXRvYXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJFQ0M3MTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDAgMCA2cHg7XG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggMTBweDtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4IDNweCAzcHggM3B4O1xuICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4uYnRuLXBpbmsge1xuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICB9XG5cbi5mbGV4Ym94IHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC1tcy1mbGV4LXdyYXA6IHdyYXA7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbn1cbiAgXG5cbi5mbGV4Ym94ID4gZGl2IHtcbiAgICBcbiAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgIFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKTtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW46IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuICBcbiAgLyogTk8gQk9SREVSIFNQSU5ORVIgKi9cbi5uYi1zcGlubmVyIHtcbiAgd2lkdGg6IDc1cHg7XG4gIGhlaWdodDogNzVweDtcbiAgICBtYXJnaW46IDA7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMwMDk2ODg7XG4gICAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiAxcyBzcGluIGxpbmVhciBpbmZpbml0ZTtcbiAgICBhbmltYXRpb246IDFzIHNwaW4gbGluZWFyIGluZmluaXRlO1xuIH1cbiAgXG4gIC8qIEJPUkRFUiBUT1AgU1BJTk5FUiAqL1xuICAuYnQtc3Bpbm5lciB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjMjIyO1xuICAgIGJvcmRlci10b3AtY29sb3I6ICMwMDk2ODg7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IDFzIHNwaW4gbGluZWFyIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogMXMgc3BpbiBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC8qIERPVUJMRSBCT1JERVIgU1BJTk5FUiAqL1xuICAuZGItc3Bpbm5lciB7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjMjIyO1xuICAgIGJvcmRlci10b3AtY29sb3I6ICMwMDk2ODg7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzAwOTY4ODtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogMXMgc3BpbiBsaW5lYXIgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uOiAxcyBzcGluIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBcbiAgLyogRE9VQkxFIFNQSU5ORVIgKi9cbiAgLmRvdWJsZS1zcGlubmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgXG4gIC5kYmwtc3Bpbm5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA3NXB4O1xuICAgIGhlaWdodDogNzVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMyMjI7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMjIyO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiAycyBzcGluIGxpbmVhciBpbmZpbml0ZTtcbiAgICBhbmltYXRpb246IDJzIHNwaW4gbGluZWFyIGluZmluaXRlO1xuICB9XG4gIFxuICAuZGJsLXNwaW5uZXItLTIge1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogNHB4IHNvbGlkICMwMDk2ODg7XG4gICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkICMwMDk2ODg7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IDFzIHNwaW4gbGluZWFyIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogMXMgc3BpbiBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC8qIFNocmlua2luZyBzcGlubmVyICovXG4gIC8qIC5zaC1zcGlubmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gIH1cbiAgLnNoLXNwaW5uZXIgZGl2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDc1cHg7XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgIzAwOTY4ODtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogMS42cyBzcGluIGN1YmljLWJlemllcigwLjQzLCAxLjEyLCAwLjg3LCAwLjg0KSBpbmZpbml0ZTtcbiAgICBhbmltYXRpb246IDEuNnMgc3BpbiBjdWJpYy1iZXppZXIoMC40MywgMS4xMiwgMC44NywgMC44NCkgaW5maW5pdGU7XG4gICAgbWFyZ2luOiA0cHg7XG4gIH1cbiAgLnNoLXNwaW5uZXIgZGl2Om50aC1jaGlsZCgxKSB7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAtMC40cztcbiAgfVxuICAuc2gtc3Bpbm5lciBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjNzO1xuICB9XG4gIC5zaC1zcGlubmVyIGRpdjpudGgtY2hpbGQoMykge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuMTVzO1xuICB9ICovXG4gIFxuICAvKiBUUklQTEUgU1BJTk5FUiAqL1xuICAudHJpcGxlLXNwaW5uZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTI1cHg7XG4gICAgaGVpZ2h0OiAxMjVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICNGRjU3MjI7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC50cmlwbGUtc3Bpbm5lcjo6YmVmb3JlLFxuICAudHJpcGxlLXNwaW5uZXI6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIH1cbiAgLnRyaXBsZS1zcGlubmVyOjpiZWZvcmUge1xuICAgIHRvcDogNXB4O1xuICAgIGxlZnQ6IDVweDtcbiAgICByaWdodDogNXB4O1xuICAgIGJvdHRvbTogNXB4O1xuICAgIGJvcmRlci10b3AtY29sb3I6ICNGRjk4MDA7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gM3MgbGluZWFyIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogc3BpbiAzLjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICAudHJpcGxlLXNwaW5uZXI6OmFmdGVyIHtcbiAgICB0b3A6IDE1cHg7XG4gICAgbGVmdDogMTVweDtcbiAgICByaWdodDogMTVweDtcbiAgICBib3R0b206IDE1cHg7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI0ZGQzEwNztcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAxLjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBhbmltYXRpb246IHNwaW4gMS43NXMgbGluZWFyIGluZmluaXRlO1xuICB9XG4gIFxuICAvKiBSRVZFUlNFIFNQSU5ORVIgKi9cbiAgXG4gIC5yZXZlcnNlLXNwaW5uZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjMTk3NmQyO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMTk3NmQyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAxLjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBhbmltYXRpb246IHNwaW4gMS41cyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC5yZXZlcnNlLXNwaW5uZXI6OmJlZm9yZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTVweDtcbiAgICBsZWZ0OiAxNXB4O1xuICAgIHJpZ2h0OiAxNXB4O1xuICAgIGJvdHRvbTogMTVweDtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIGJvcmRlcjogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci10b3AtY29sb3I6ICMwM2E5ZjQ7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICMwM2E5ZjQ7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluQmFjayAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uOiBzcGluQmFjayAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC8qIEhNIFNQSU5ORVIgKi9cbiAgLmhtLXNwaW5uZXJ7XG4gICAgaGVpZ2h0OiAxMTVweDtcbiAgICB3aWR0aDogMTE1cHg7XG4gICAgYm9yZGVyOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogIzlDMjdCMDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjOUMyN0IwO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gM3MgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBzcGluIDNzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBcbiAgLmhtLXNwaW5uZXI6OmJlZm9yZXtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDIwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIGxlZnQ6IDIwcHg7XG4gICAgYm9yZGVyOiA1cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI0JBNjhDODtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAjQkE2OEM4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiAxLjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBhbmltYXRpb246IHNwaW4gMS41cyBsaW5lYXIgaW5maW5pdGU7XG4gIFxuICB9XG4gIFxuICAvKiBDTSBTUElOTkVSICovXG4gIC5jbS1zcGlubmVyIHtcbiAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICNmMTVlNDE7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW4gNHMgbGluZWFyIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogc3BpbiA0cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG4gIFxuICAuY20tc3Bpbm5lcjo6YmVmb3JlLFxuICAuY20tc3Bpbm5lcjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNnB4O1xuICAgIGJvdHRvbTogNnB4O1xuICAgIGxlZnQ6IDZweDtcbiAgICByaWdodDogNnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgfVxuICBcbiAgLmNtLXNwaW5uZXI6OmJlZm9yZSB7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogI2JhZDM3NTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogM3Mgc3BpbiBsaW5lYXIgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uOiAzcyBzcGluIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBcbiAgLmNtLXNwaW5uZXI6OmFmdGVyIHtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjMjZhOWUwO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDEuNXMgbGluZWFyIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogc3BpbiAxLjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuICBcbiAgLnNwaW5uZXItNyB7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wOiA0cHggc29saWQgI2ZmZjtcbiAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IDFzIHNwaW4gbGluZWFyIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbjogMXMgc3BpbkJvcmRlciBsaW5lYXIgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC8qIDMgRE9UIExPQURFUiAqL1xuICBcbiAgLmRvdC1sb2FkZXIge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IDEuMnMgZ3JvdyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgICBhbmltYXRpb246IDEuMnMgZ3JvdyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgfVxuICBcbiAgLmRvdC1sb2FkZXItLTIge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiAxLjJzIGdyb3cgZWFzZS1pbi1vdXQgaW5maW5pdGUgMC4xNTU1NXM7XG4gICAgYW5pbWF0aW9uOiAxLjJzIGdyb3cgZWFzZS1pbi1vdXQgaW5maW5pdGUgMC4xNTU1NXM7XG4gICAgbWFyZ2luOiAwIDIwcHg7XG4gIH1cbiAgLmRvdC1sb2FkZXItLTMge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiAxLjJzIGdyb3cgZWFzZS1pbi1vdXQgaW5maW5pdGUgMC4zcztcbiAgICBhbmltYXRpb246IDEuMnMgZ3JvdyBlYXNlLWluLW91dCBpbmZpbml0ZSAwLjNzO1xuICB9XG4gIFxuICAvKiBDSVJDTEUgRE9UIExPQURFUiAqL1xuICBcbiAgLmNpcmNsZS1sb2FkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbiAgXG4gIC5jaXJjbGUtbG9hZGVyIGRpdiB7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogMC44cyBvcGFxdWUgZWFzZS1pbi1vdXQgaW5maW5pdGUgYm90aDtcbiAgICBhbmltYXRpb246IDAuOHMgb3BhcXVlIGVhc2UtaW4tb3V0IGluZmluaXRlIGJvdGg7XG4gIH1cbiAgXG4gIC5jaXJjbGUtbG9hZGVyID4gZGl2Om50aC1jaGlsZCgxKSB7XG4gICAgdG9wOiAtMjVweDtcbiAgICBsZWZ0OiAwO1xuICB9XG4gIC5jaXJjbGUtbG9hZGVyID4gZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgdG9wOiAtMTdweDtcbiAgICBsZWZ0OiAxN3B4O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4xcztcbiAgfVxuICAuY2lyY2xlLWxvYWRlciA+IGRpdjpudGgtY2hpbGQoMykge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAyNXB4O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4ycztcbiAgfVxuICAuY2lyY2xlLWxvYWRlciA+IGRpdjpudGgtY2hpbGQoNCkge1xuICAgIHRvcDogMTdweDtcbiAgICBsZWZ0OiAxN3B4O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC4zcztcbiAgfVxuICAuY2lyY2xlLWxvYWRlciA+IGRpdjpudGgtY2hpbGQoNSkge1xuICAgIHRvcDogMjVweDtcbiAgICBsZWZ0OiAwO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcbiAgfVxuICAuY2lyY2xlLWxvYWRlciA+IGRpdjpudGgtY2hpbGQoNikge1xuICAgIHRvcDogMTdweDtcbiAgICBsZWZ0OiAtMTdweDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC41cztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XG4gIH1cbiAgLmNpcmNsZS1sb2FkZXIgPiBkaXY6bnRoLWNoaWxkKDcpIHtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTI1cHg7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xuICB9XG4gIC5jaXJjbGUtbG9hZGVyID4gZGl2Om50aC1jaGlsZCg4KSB7XG4gICAgdG9wOiAtMTdweDtcbiAgICBsZWZ0OiAtMTdweDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC43cztcbiAgICBhbmltYXRpb24tZGVsYXk6IDAuN3M7XG4gIH1cbiAgXG4gIC8qIE1VTFRJIFNQSU5ORVIgKi9cbiAgXG4gIC5tdWx0aS1zcGlubmVyLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMzBweCBhdXRvO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIC5tdWx0aS1zcGlubmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDkuOXB4KTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDkuOXB4KTtcbiAgICBib3JkZXI6IDVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjZmY1NzIyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbiA1cyBjdWJpYy1iZXppZXIoMC4xNywgMC40OSwgMC45NiwgMC43NikgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uOiBzcGluIDVzIGN1YmljLWJlemllcigwLjE3LCAwLjQ5LCAwLjk2LCAwLjc2KSBpbmZpbml0ZTtcbiAgfVxuICBcbiAgLyogTUVTSCBMT0FERVIgKi9cbiAgXG4gIC5tZXNoLWxvYWRlciB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgd2lkdGg6IGluaGVyaXQ7XG4gIH1cbiAgLm1lc2gtbG9hZGVyIC5jaXJjbGUge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYmFja2dyb3VuZDogI2Y0NDMzNjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luOiAtMTVweDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogbWVzaCAzcyBlYXNlLWluLW91dCBpbmZpbml0ZSAtMS41cztcbiAgICBhbmltYXRpb246IG1lc2ggM3MgZWFzZS1pbi1vdXQgaW5maW5pdGUgLTEuNXM7XG4gIH1cbiAgXG4gIC5tZXNoLWxvYWRlciA+IGRpdiAuY2lyY2xlOmxhc3QtY2hpbGQge1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xuICB9XG4gIFxuICAubWVzaC1sb2FkZXIgPiBkaXYge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gIH1cbiAgXG4gIC5tZXNoLWxvYWRlciA+IGRpdjpsYXN0LWNoaWxkIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgfVxuICBcbiAgLyogVFJJRk9SQ0UgTE9BREVSICovXG4gIC50cmlmb3JjZS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDEyMHB4IGF1dG87XG4gIH1cbiAgLnRyaWZvcmNlLFxuICAudHJpZm9yY2U6OmJlZm9yZSxcbiAgLnRyaWZvcmNlOjphZnRlciB7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1sZWZ0OiAyNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogMjVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiA1MHB4IHNvbGlkICNjZWI1MDI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uOiAzcyB0cmlmb3JjZSBsaW5lYXIgaW5maW5pdGUgMnMgYm90aDtcbiAgICBhbmltYXRpb246IDNzIHRyaWZvcmNlIGxpbmVhciBpbmZpbml0ZSAycyBib3RoO1xuICAgIHRvcDogNTBweDtcbiAgfVxuICBcbiAgLnRyaWZvcmNlOjpiZWZvcmUsXG4gIC50cmlmb3JjZTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG4gIFxuICAudHJpZm9yY2U6OmJlZm9yZSB7XG4gICAgbGVmdDogMjVweDtcbiAgICB0b3A6IDA7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDFzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMXM7XG4gIH1cbiAgXG4gIC50cmlmb3JjZTo6YWZ0ZXIge1xuICAgIHRvcDogLTUwcHg7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMHM7XG4gIH1cbiAgXG4gIC8qIEhFQVJUIExPQURFUiAqL1xuICBcbiAgLmhlYXJ0LWxvYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NDMzNjtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC13ZWJraXRlLXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcHVsc2F0ZSAxcyBpbmZpbml0ZTtcbiAgICBhbmltYXRpb246IHB1bHNhdGUgMXMgaW5maW5pdGU7XG4gIH1cbiAgXG4gIC5oZWFydC1sb2FkZXI6OmJlZm9yZSxcbiAgLmhlYXJ0LWxvYWRlcjo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIH1cbiAgXG4gIC5oZWFydC1sb2FkZXI6OmJlZm9yZSB7XG4gICAgdG9wOiAwcHg7XG4gICAgbGVmdDogLTI1cHg7XG4gIH1cbiAgLmhlYXJ0LWxvYWRlcjo6YWZ0ZXIge1xuICAgIHRvcDogLTI1cHg7XG4gICAgbGVmdDogLTBweDtcbiAgfVxuICBcbiAgLyogUEFDTUFOICovXG4gIFxuICAvKiAucGFjbWFue1xuICAgIGhlaWdodDogNzVweDtcbiAgICB3aWR0aDogNzVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBnb2xkO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBtYXJnaW46IC0zN3B4IDAgMCAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICB9XG4gIFxuICAucGFjbWFuOjpiZWZvcmV7XG4gIH0gKi9cbiAgXG4gIC8qIFNQSU5ORVIgMTMgKi9cbiAgXG4gIC5tbC1sb2FkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gIH1cbiAgXG4gIC5tbC1sb2FkZXIgZGl2IHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDMycHggMzJweDtcbiAgICAtbXMtdHJhbnNmb3JtLW9yaWdpbjogMzJweCAzMnB4O1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDMycHggMzJweDtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogMS4ycyBvcGFxdWUgZWFzZS1pbi1vdXQgaW5maW5pdGUgYm90aDtcbiAgICBhbmltYXRpb246IDEuMnMgb3BhcXVlIGVhc2UtaW4tb3V0IGluZmluaXRlIGJvdGg7XG4gIH1cbiAgXG4gIC5tbC1sb2FkZXIgZGl2OjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDMwcHg7XG4gICAgd2lkdGg6IDVweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ0MzM2O1xuICB9XG4gIFxuICAubWwtbG9hZGVyIGRpdjpudGgtY2hpbGQoMSkge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xuICB9XG4gIC5tbC1sb2FkZXIgZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMGRlZyk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjFzO1xuICB9XG4gIC5tbC1sb2FkZXIgZGl2Om50aC1jaGlsZCgzKSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDYwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg2MGRlZyk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuMnM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjJzO1xuICB9XG4gIC5tbC1sb2FkZXIgZGl2Om50aC1jaGlsZCg0KSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuM3M7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjNzO1xuICB9XG4gIC5tbC1sb2FkZXIgZGl2Om50aC1jaGlsZCg1KSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxMjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjRzO1xuICB9XG4gIC5tbC1sb2FkZXIgZGl2Om50aC1jaGlsZCg2KSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxNTBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE1MGRlZyk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjVzO1xuICB9XG4gIC5tbC1sb2FkZXIgZGl2Om50aC1jaGlsZCg3KSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjZzO1xuICB9XG4gIC5tbC1sb2FkZXIgZGl2Om50aC1jaGlsZCg4KSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyMTBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDIxMGRlZyk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuN3M7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjdzO1xuICB9XG4gIC5tbC1sb2FkZXIgZGl2Om50aC1jaGlsZCg5KSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyNDBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDI0MGRlZyk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuOHM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xuICB9XG4gIC5tbC1sb2FkZXIgZGl2Om50aC1jaGlsZCgxMCkge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjlzO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMC45cztcbiAgfVxuICAubWwtbG9hZGVyIGRpdjpudGgtY2hpbGQoMTEpIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMwMGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMwMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxcztcbiAgfVxuICAubWwtbG9hZGVyIGRpdjpudGgtY2hpbGQoMTIpIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDMzMGRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDMzMGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzMwZGVnKTtcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMS4xcztcbiAgICBhbmltYXRpb24tZGVsYXk6IDEuMXM7XG4gIH1cbiAgLm1sLWxvYWRlciBkaXY6bnRoLWNoaWxkKDEzKSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDEuMnM7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAxLjJzO1xuICB9XG4gIEAtd2Via2l0LWtleWZyYW1lcyByb3RhdGUge1xuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cbiAgQGtleWZyYW1lcyByb3RhdGUge1xuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgc3BpbiB7XG4gICAgLXdlYmtpdC1mcm9tIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgLXdlYmtpdC10byB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9XG4gIFxuICBALXdlYmtpdC1rZXlmcmFtZXMgc3BpbiB7XG4gICAgZnJvbSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgIGZyb20ge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHNwaW5CYWNrIHtcbiAgICBmcm9tIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgdG8ge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNzIwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC03MjBkZWcpO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzcGluQmFjayB7XG4gICAgZnJvbSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTcyMGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNzIwZGVnKTtcbiAgICB9XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBzcGluQm9yZGVyIHtcbiAgICAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICBib3JkZXItd2lkdGg6IDE1cHg7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIGJvcmRlci13aWR0aDogMTVweDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgc3BpbkJvcmRlciB7XG4gICAgMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgYm9yZGVyLXdpZHRoOiAxNXB4O1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgIGJvcmRlci13aWR0aDogM3B4O1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICBib3JkZXItd2lkdGg6IDE1cHg7XG4gICAgfVxuICB9XG4gIFxuICBALXdlYmtpdC1rZXlmcmFtZXMgZ3JvdyB7XG4gICAgMCUsIDQwJSwgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgZ3JvdyB7XG4gICAgMCUsIDQwJSwgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgfVxuICB9XG4gIFxuICBALXdlYmtpdC1rZXlmcmFtZXMgdHJpZm9yY2Uge1xuICAgIDAlIHtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYigyMDYsIDE4MSwgMik7XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDIwNiwgMTgxLCAyLCAwKTtcbiAgICB9XG4gICAgODAlIHtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYigyMDYsIDE4MSwgMik7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiKDIwNiwgMTgxLCAyKTtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgdHJpZm9yY2Uge1xuICAgIDAlIHtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYigyMDYsIDE4MSwgMik7XG4gICAgfVxuICAgIDQwJSB7XG4gICAgICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDIwNiwgMTgxLCAyLCAwKTtcbiAgICB9XG4gICAgODAlIHtcbiAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYigyMDYsIDE4MSwgMik7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiKDIwNiwgMTgxLCAyKTtcbiAgICB9XG4gIH1cbiAgXG4gIEAtd2Via2l0LWtleWZyYW1lcyBwdWxzYXRlIHtcbiAgICAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjgpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlKDAuOCk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUoMC44KTtcbiAgICB9XG4gICAgNSUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUoMC45KTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjkpO1xuICAgIH1cbiAgICAxMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUoMC44KTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjgpO1xuICAgIH1cbiAgICAxNSUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUoMSk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUoMSk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjgpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlKDAuOCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUoMC44KTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjgpO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBwdWxzYXRlIHtcbiAgICAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjgpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlKDAuOCk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUoMC44KTtcbiAgICB9XG4gICAgNSUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUoMC45KTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjkpO1xuICAgIH1cbiAgICAxMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUoMC44KTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjgpO1xuICAgIH1cbiAgICAxNSUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUoMSk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUoMSk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjgpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHNjYWxlKDAuOCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgc2NhbGUoMC44KTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSBzY2FsZSgwLjgpO1xuICAgIH1cbiAgfVxuICBcbiAgQC13ZWJraXQta2V5ZnJhbWVzIG9wYXF1ZSB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMC4xO1xuICAgIH1cbiAgICA0MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgODAlIHtcbiAgICAgIG9wYWNpdHk6IDAuMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAwLjE7XG4gICAgfVxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIG9wYXF1ZSB7XG4gICAgMCUge1xuICAgICAgb3BhY2l0eTogMC4xO1xuICAgIH1cbiAgICA0MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gICAgODAlIHtcbiAgICAgIG9wYWNpdHk6IDAuMTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICBvcGFjaXR5OiAwLjE7XG4gICAgfVxuICB9XG4gIFxuICBALXdlYmtpdC1rZXlmcmFtZXMgbWVzaCB7XG4gICAgMCUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgLTEwMCU7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgLTEwMCU7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAtMTAwJTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAtMTAwJTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICAgIDUwLjElIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDIwMCU7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMjAwJTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAyMDAlO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDIwMCU7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuICBcbiAgQGtleWZyYW1lcyBtZXNoIHtcbiAgICAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSAtMTAwJTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAtMTAwJTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbiAgICB9XG4gICAgNTAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIC0xMDAlO1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIC0xMDAlO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG4gICAgNTAuMSUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMjAwJTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAyMDAlO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgIH1cbiAgICAxMDAlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDIwMCU7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMjAwJTtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxuICB9XG4gIFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2OHB4KSB7XG4gICAgLmZsZXhib3ggPiBkaXYge1xuICAgICAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgICAgIC1tcy1mbGV4OiAwIDAgMzMuMzMzMzMzMyU7XG4gICAgICBmbGV4OiAwIDAgMzMuMzMzMzMzMyU7XG4gICAgfVxuICB9XG4gIFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLmZsZXhib3ggPiBkaXYge1xuICAgICAgLXdlYmtpdC1ib3gtZmxleDogMDtcbiAgICAgIC1tcy1mbGV4OiAwIDAgNTAlO1xuICAgICAgZmxleDogMCAwIDUwJTtcbiAgICB9XG4gIH1cbiAgXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTY4cHgpIHtcbiAgICAuZmxleGJveCA+IGRpdiB7XG4gICAgICAtd2Via2l0LWJveC1mbGV4OiAwO1xuICAgICAgLW1zLWZsZXg6IDAgMCAxMDAlO1xuICAgICAgZmxleDogMCAwIDEwMCU7XG4gICAgfVxuICB9XG4gIFxuICBcbiAgYXtcbiAgICBjb2xvcjogIzAwOTY4ODtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNnB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luOiAycmVtIGF1dG87XG4gIH1cblxuIl19 */"

/***/ }),

/***/ "./src/app/Components/custom-toast/custom-toast.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Components/custom-toast/custom-toast.component.ts ***!
  \*******************************************************************/
/*! exports provided: PinkToast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinkToast", function() { return PinkToast; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PinkToast = /** @class */ (function (_super) {
    __extends(PinkToast, _super);
    // constructor is only necessary when not using AoT
    function PinkToast(toastrService, toastPackage) {
        var _this = _super.call(this, toastrService, toastPackage) || this;
        _this.toastrService = toastrService;
        _this.toastPackage = toastPackage;
        // used for demo purposes
        _this.undoString = 'undo';
        return _this;
    }
    PinkToast.prototype.action = function (event) {
        event.stopPropagation();
        this.undoString = 'undid';
        this.toastPackage.triggerAction();
        return false;
    };
    PinkToast.ctorParameters = function () { return [
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
        { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastPackage"] }
    ]; };
    PinkToast = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[app-custom-toast]',
            template: __webpack_require__(/*! raw-loader!./custom-toast.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/custom-toast/custom-toast.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('flyInOut', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        opacity: 0,
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
                            opacity: 0,
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'skewX(20deg)',
                            opacity: 1,
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'skewX(-5deg)',
                            opacity: 1,
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'none',
                            opacity: 1,
                        }),
                    ]))),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => removed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('400ms ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            opacity: 1,
                        }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                            transform: 'translate3d(100%, 0, 0) skewX(30deg)',
                            opacity: 0,
                        }),
                    ]))),
                ]),
            ],
            preserveWhitespaces: false,
            styles: [__webpack_require__(/*! ./custom-toast.component.css */ "./src/app/Components/custom-toast/custom-toast.component.css")]
        }),
        __metadata("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastPackage"]])
    ], PinkToast);
    return PinkToast;
}(ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["Toast"]));



/***/ }),

/***/ "./src/app/Components/downloads/downloads.component.css":
/*!**************************************************************!*\
  !*** ./src/app/Components/downloads/downloads.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".down_icon{\n    background-color: #59cd72;\n    padding: 12px 11px 0px 14px;\n    border-radius: 19px;\n}\n.down_icon i{\n  color:#ffffff;\n}\n.down_icon a span{\n    color: #ffffff;\n    font-weight: bold;\n    padding: 0px 10px;\n    position: relative;\n    top: -5px;\n}\n.down_icon a{\n    text-decoration: none;\n}\n.flex_bck{\n    background-color: #ffffff;\n    padding: 0px 0px 20px 15px;\n    border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9kb3dubG9hZHMvZG93bmxvYWRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsMkJBQTJCO0lBQzNCLG1CQUFtQjtBQUN2QjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsU0FBUztBQUNiO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwwQkFBMEI7SUFDMUIsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9kb3dubG9hZHMvZG93bmxvYWRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG93bl9pY29ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1OWNkNzI7XG4gICAgcGFkZGluZzogMTJweCAxMXB4IDBweCAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE5cHg7XG59XG4uZG93bl9pY29uIGl7XG4gIGNvbG9yOiNmZmZmZmY7XG59XG4uZG93bl9pY29uIGEgc3BhbntcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAtNXB4O1xufVxuLmRvd25faWNvbiBhe1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmZsZXhfYmNre1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgcGFkZGluZzogMHB4IDBweCAyMHB4IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Components/downloads/downloads.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Components/downloads/downloads.component.ts ***!
  \*************************************************************/
/*! exports provided: DownloadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DownloadsComponent", function() { return DownloadsComponent; });
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


var DownloadsComponent = /** @class */ (function () {
    function DownloadsComponent(apiService) {
        this.apiService = apiService;
    }
    DownloadsComponent.prototype.ngOnInit = function () {
        this.getTemplateLink();
        this.getParticipant();
    };
    DownloadsComponent.prototype.getTemplateLink = function () {
        if (this.apiService.cfs) {
            this.templateLink = this.apiService.cfsUrl + this.apiService.questionTemplateUrl;
        }
        else {
            this.templateLink = this.apiService.url + 'notification/template/download?filetype=question&fileId=1&token=' + localStorage.getItem('token');
        }
    };
    DownloadsComponent.prototype.getParticipant = function () {
        if (this.apiService.cfs) {
            this.templateLinkPar = this.apiService.cfsUrl + this.apiService.participantTemplateUrl;
        }
        else {
            this.templateLinkPar = this.apiService.url + 'notification/template/download?filetype=participant&fileId=2&token=' + localStorage.getItem('token');
        }
    };
    DownloadsComponent.ctorParameters = function () { return [
        { type: _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"] }
    ]; };
    DownloadsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-downloads',
            template: __webpack_require__(/*! raw-loader!./downloads.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/downloads/downloads.component.html"),
            styles: [__webpack_require__(/*! ./downloads.component.css */ "./src/app/Components/downloads/downloads.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"]])
    ], DownloadsComponent);
    return DownloadsComponent;
}());



/***/ }),

/***/ "./src/app/Components/forgot-password/forgot-password.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/Components/forgot-password/forgot-password.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tenant_reg_sec{\n    /* height:100vh;\n    background-image: url('./../../../assets/images/office_building.jpg');\n    background-size: cover; */\n}\n.tenant_reg_gradient{\n    /* background-color: #12BCFF; */\n    background-color: #2ECC71;\n    /* background-image: linear-gradient(0.40turn,rgba(61, 112, 178, 0.89), rgba(65, 214, 195, 0.89),rgba(85, 150, 230, 0.89)); */\n    height: 100vh;\n}\n.coc_title{\n    color: #ffffff;\n    font-weight: 700;\n}\n.form_tenant_reg h3{\n    /* color:#ffffff; */\n    font-weight: 700;\n}\n.form_tenant_reg h4{\n    color:#ffffff;\n}\n.form_tenant_reg{\n    position: absolute;\n    /* text-align:center; */\n    top: 30%;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n}\n.form_tenant_reg .form-control{\n    /* width:46%; */\n    margin:0 auto;\n    padding:24px 20px;\n    /* border:none; */\n    box-shadow: none;\n}\n.form_tenant_reg .btn-primary{\n    padding: 0px;\n    height: 46px;\n    background-color:#41D6C3;\n    border-color: #41D6C3;\n}\n.form_tenant_reg .form-group{\n    /* margin-bottom:2rem; */\n}\n.form_tenant_reg .d-flex{\n    width:46%;\n    margin:0 auto;\n    color:#fff;\n}\n.active_tab::after{\n    width: 0;\n    height: 0;\n    border-left: 15px solid transparent;\n    border-right: 15px solid transparent;\n    border-bottom: 20px solid #ffffff;\n    content: \"\";\n    position: absolute;\n    left: 8px;\n    top: 44px;\n}\n.active_tab{\n    position: relative;\n    font-weight: 600;\n}\n/* new ui */\n.form_tenant_reg h3{\n    /* color:#ffffff; */\n    font-weight: 700;\n}\n.form_tenant_reg h4{\n    color:#ffffff;\n}\n.form_tenant_reg{\n    position: absolute;\n    /* text-align:center; */\n    top: 60%;\n    left: 50%;\n    -webkit-transform: translate(-50%,-50%);\n            transform: translate(-50%,-50%);\n}\n.form_tenant_reg .form-control{\n    /* width:46%; */\n    margin:0 auto;\n    padding:24px 20px;\n    border-color:#4B4B4B;\n    /* border:none; */\n    box-shadow: none;\n}\n.form_tenant_reg .btn-primary{\n    padding: 0px;\n    height: 46px;\n    /* background-color:#41D6C3;\n    border-color: #41D6C3; */\n    /* background-color:#12BCFF;\n    border-color:#12BCFF; */\n    background-color: #2ECC71;\n    border-color: #2ECC71;\n}\n.form_tenant_reg .form-group{\n    /* margin-bottom:2rem; */\n}\n.form_tenant_reg .d-flex{\n    width:46%;\n    margin:0 auto;\n    color:#fff;\n}\n/*  new ui */\n.form_tenant_reg form{\n    width: 50%;\n    margin: 0 auto;\n}\n.form_tenant_reg{\n    background-color: #ffffff;\n    width: 700px;\n    color: #4b4b4b;\n    padding: 29px 0px;\n}\n.form_tenant_reg label{\n    font-weight:600;\n}\n.signin_brdr{\n    /* border-top: 2px solid #12BCFF; */\n    border-top: 2px solid #2ECC71;\n    width: 50%;\n    margin: 6px auto;\n}\n.activate_text{\n    position: absolute;\n    width: 100%;\n    text-align: center;\n    top: 20%;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%);\n    color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTs7NkJBRXlCO0FBQzdCO0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IseUJBQXlCO0lBQ3pCLDZIQUE2SDtJQUM3SCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLFFBQVE7SUFDUixTQUFTO0lBQ1QsbUNBQTJCO1lBQTNCLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLFNBQVM7SUFDVCxhQUFhO0lBQ2IsVUFBVTtBQUNkO0FBQ0E7SUFDSSxRQUFRO0lBQ1IsU0FBUztJQUNULG1DQUFtQztJQUNuQyxvQ0FBb0M7SUFDcEMsaUNBQWlDO0lBQ2pDLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFNBQVM7QUFDYjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUVBLFdBQVc7QUFDWDtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsUUFBUTtJQUNSLFNBQVM7SUFDVCx1Q0FBK0I7WUFBL0IsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWjs0QkFDd0I7SUFDeEI7MkJBQ3VCO0lBQ3ZCLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYixVQUFVO0FBQ2Q7QUFFQSxZQUFZO0FBQ1o7SUFDSSxVQUFVO0lBQ1YsY0FBYztBQUNsQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMsNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsbUNBQTJCO1lBQTNCLDJCQUEyQjtJQUMzQixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9mb3Jnb3QtcGFzc3dvcmQvZm9yZ290LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVuYW50X3JlZ19zZWN7XG4gICAgLyogaGVpZ2h0OjEwMHZoO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL29mZmljZV9idWlsZGluZy5qcGcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyOyAqL1xufVxuLnRlbmFudF9yZWdfZ3JhZGllbnR7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzEyQkNGRjsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkVDQzcxO1xuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgwLjQwdHVybixyZ2JhKDYxLCAxMTIsIDE3OCwgMC44OSksIHJnYmEoNjUsIDIxNCwgMTk1LCAwLjg5KSxyZ2JhKDg1LCAxNTAsIDIzMCwgMC44OSkpOyAqL1xuICAgIGhlaWdodDogMTAwdmg7XG59XG4uY29jX3RpdGxle1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4uZm9ybV90ZW5hbnRfcmVnIGgze1xuICAgIC8qIGNvbG9yOiNmZmZmZmY7ICovXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5mb3JtX3RlbmFudF9yZWcgaDR7XG4gICAgY29sb3I6I2ZmZmZmZjtcbn1cbi5mb3JtX3RlbmFudF9yZWd7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8qIHRleHQtYWxpZ246Y2VudGVyOyAqL1xuICAgIHRvcDogMzAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG59XG4uZm9ybV90ZW5hbnRfcmVnIC5mb3JtLWNvbnRyb2x7XG4gICAgLyogd2lkdGg6NDYlOyAqL1xuICAgIG1hcmdpbjowIGF1dG87XG4gICAgcGFkZGluZzoyNHB4IDIwcHg7XG4gICAgLyogYm9yZGVyOm5vbmU7ICovXG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5mb3JtX3RlbmFudF9yZWcgLmJ0bi1wcmltYXJ5e1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDFENkMzO1xuICAgIGJvcmRlci1jb2xvcjogIzQxRDZDMztcbn1cbi5mb3JtX3RlbmFudF9yZWcgLmZvcm0tZ3JvdXB7XG4gICAgLyogbWFyZ2luLWJvdHRvbToycmVtOyAqL1xufVxuLmZvcm1fdGVuYW50X3JlZyAuZC1mbGV4e1xuICAgIHdpZHRoOjQ2JTtcbiAgICBtYXJnaW46MCBhdXRvO1xuICAgIGNvbG9yOiNmZmY7XG59XG4uYWN0aXZlX3RhYjo6YWZ0ZXJ7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1sZWZ0OiAxNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1yaWdodDogMTVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkICNmZmZmZmY7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogOHB4O1xuICAgIHRvcDogNDRweDtcbn1cbi5hY3RpdmVfdGFie1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4vKiBuZXcgdWkgKi9cbi5mb3JtX3RlbmFudF9yZWcgaDN7XG4gICAgLyogY29sb3I6I2ZmZmZmZjsgKi9cbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuLmZvcm1fdGVuYW50X3JlZyBoNHtcbiAgICBjb2xvcjojZmZmZmZmO1xufVxuLmZvcm1fdGVuYW50X3JlZ3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgLyogdGV4dC1hbGlnbjpjZW50ZXI7ICovXG4gICAgdG9wOiA2MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XG59XG4uZm9ybV90ZW5hbnRfcmVnIC5mb3JtLWNvbnRyb2x7XG4gICAgLyogd2lkdGg6NDYlOyAqL1xuICAgIG1hcmdpbjowIGF1dG87XG4gICAgcGFkZGluZzoyNHB4IDIwcHg7XG4gICAgYm9yZGVyLWNvbG9yOiM0QjRCNEI7XG4gICAgLyogYm9yZGVyOm5vbmU7ICovXG4gICAgYm94LXNoYWRvdzogbm9uZTtcbn1cbi5mb3JtX3RlbmFudF9yZWcgLmJ0bi1wcmltYXJ5e1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjojNDFENkMzO1xuICAgIGJvcmRlci1jb2xvcjogIzQxRDZDMzsgKi9cbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiMxMkJDRkY7XG4gICAgYm9yZGVyLWNvbG9yOiMxMkJDRkY7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJFQ0M3MTtcbiAgICBib3JkZXItY29sb3I6ICMyRUNDNzE7XG59XG4uZm9ybV90ZW5hbnRfcmVnIC5mb3JtLWdyb3Vwe1xuICAgIC8qIG1hcmdpbi1ib3R0b206MnJlbTsgKi9cbn1cbi5mb3JtX3RlbmFudF9yZWcgLmQtZmxleHtcbiAgICB3aWR0aDo0NiU7XG4gICAgbWFyZ2luOjAgYXV0bztcbiAgICBjb2xvcjojZmZmO1xufVxuXG4vKiAgbmV3IHVpICovXG4uZm9ybV90ZW5hbnRfcmVnIGZvcm17XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cbi5mb3JtX3RlbmFudF9yZWd7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICB3aWR0aDogNzAwcHg7XG4gICAgY29sb3I6ICM0YjRiNGI7XG4gICAgcGFkZGluZzogMjlweCAwcHg7XG59XG4uZm9ybV90ZW5hbnRfcmVnIGxhYmVse1xuICAgIGZvbnQtd2VpZ2h0OjYwMDtcbn1cbi5zaWduaW5fYnJkcntcbiAgICAvKiBib3JkZXItdG9wOiAycHggc29saWQgIzEyQkNGRjsgKi9cbiAgICBib3JkZXItdG9wOiAycHggc29saWQgIzJFQ0M3MTtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbjogNnB4IGF1dG87XG59XG4uYWN0aXZhdGVfdGV4dHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRvcDogMjAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59Il19 */"

/***/ }),

/***/ "./src/app/Components/forgot-password/forgot-password.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Components/forgot-password/forgot-password.component.ts ***!
  \*************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
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




var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(router, activeRoute, apiService) {
        var _this = this;
        this.router = router;
        this.activeRoute = activeRoute;
        this.apiService = apiService;
        this.activeRoute.params.subscribe(function (params) {
            _this.tdfeaSkUfdRYrgtAyuoIasddE = params['encrypToken'];
        });
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent.prototype.setPassword = function (setPass) {
        var _this = this;
        this.blockUI.start('Please Wait We Are Changing the Password');
        if (setPass.value.password == setPass.value.confirmpassword) {
            this.apiService.getAll('auth/authentication/resetpassword?tdfeaSkUfdRYrgtAyuoIasddE=' + encodeURIComponent(this.tdfeaSkUfdRYrgtAyuoIasddE) + '&password=' + setPass.value.password + '&confirmpassword=' + setPass.value.confirmpassword)
                .subscribe(function (res) {
                _this.blockUI.stop();
                if (res['statusCode'] == 1) {
                    setPass.reset();
                    _this.apiService.successAlert(res['statusMessage']);
                    _this.router.navigate(['/tenant-login']);
                }
                else if (res['statusCode'] == 0) {
                    _this.apiService.errorAlert(res['statusMessage']);
                }
            }, function (erro) {
                _this.blockUI.stop();
            });
        }
        else {
            this.blockUI.stop();
            this.apiService.errorAlert('Password and Confirm Password Should be Same');
        }
    };
    ForgotPasswordComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_2__["AllServicesService"] }
    ]; };
    __decorate([
        Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_3__["BlockUI"])(),
        __metadata("design:type", Object)
    ], ForgotPasswordComponent.prototype, "blockUI", void 0);
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/Components/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_2__["AllServicesService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/Components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/Components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header_nav{\n    /* background-color: #1CBC90 !important; */\n    /* background-image: linear-gradient(0.40turn,rgba(61, 112, 178, 0.89), rgba(65, 214, 195, 0.89),rgba(85, 150, 230, 0.89)); */\n    color: #ffffff;\n    /* background-color: #12BCFF !important; */\n    /* background-color: #D63031 !important; */\n    background-color: #2ECC71 !important;\n}\n.header_nav .navbar-brand{\n    font-size:34px;\n}\n.user_icon img{\n    width: 30px;\n    background-color: #ffffff;\n    padding: 4px;\n    border-radius: 20px;\n    margin-top: 5px;\n}\n.header_nav .nav-link{\n    color:#ffffff !important;\n}\n.header_nav .dropdown-menu{\n    /* background-color: #E8F0FB; */\n    color: #ffffff;\n    /* background-color: #19bbfc; */\n    /* background-color: #D63031; */\n    background-color: #2ECC71;\n    /* background-image: linear-gradient(0.28turn,rgba(48, 93, 151, 0.89), rgba(85, 150, 230, 0.89)); */\n}\n.header_nav i{\n    position: relative;\n    top:5px;\n}\n.dropdown-item:hover{\n    color:#707070 !important;\n}\n.dropdown-item{\n    color:#ffffff;\n}\n.header_nav .dropdown-menu{\n    left: -50px;\n}\n \n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQ0FBMEM7SUFDMUMsNkhBQTZIO0lBQzdILGNBQWM7SUFDZCwwQ0FBMEM7SUFDMUMsMENBQTBDO0lBQzFDLG9DQUFvQztBQUN4QztBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLGNBQWM7SUFDZCwrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QixtR0FBbUc7QUFDdkc7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0FBQ1g7QUFDQTtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyX25hdntcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMUNCQzkwICFpbXBvcnRhbnQ7ICovXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDAuNDB0dXJuLHJnYmEoNjEsIDExMiwgMTc4LCAwLjg5KSwgcmdiYSg2NSwgMjE0LCAxOTUsIDAuODkpLHJnYmEoODUsIDE1MCwgMjMwLCAwLjg5KSk7ICovXG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzEyQkNGRiAhaW1wb3J0YW50OyAqL1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNENjMwMzEgIWltcG9ydGFudDsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkVDQzcxICFpbXBvcnRhbnQ7XG59XG4uaGVhZGVyX25hdiAubmF2YmFyLWJyYW5ke1xuICAgIGZvbnQtc2l6ZTozNHB4O1xufVxuLnVzZXJfaWNvbiBpbWd7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG4uaGVhZGVyX25hdiAubmF2LWxpbmt7XG4gICAgY29sb3I6I2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuLmhlYWRlcl9uYXYgLmRyb3Bkb3duLW1lbnV7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI0U4RjBGQjsgKi9cbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMTliYmZjOyAqL1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNENjMwMzE7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJFQ0M3MTtcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoMC4yOHR1cm4scmdiYSg0OCwgOTMsIDE1MSwgMC44OSksIHJnYmEoODUsIDE1MCwgMjMwLCAwLjg5KSk7ICovXG59XG4uaGVhZGVyX25hdiBpe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6NXB4O1xufVxuLmRyb3Bkb3duLWl0ZW06aG92ZXJ7XG4gICAgY29sb3I6IzcwNzA3MCAhaW1wb3J0YW50O1xufVxuLmRyb3Bkb3duLWl0ZW17XG4gICAgY29sb3I6I2ZmZmZmZjtcbn1cbi5oZWFkZXJfbmF2IC5kcm9wZG93bi1tZW51e1xuICAgIGxlZnQ6IC01MHB4O1xufVxuIFxuIl19 */"

/***/ }),

/***/ "./src/app/Components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Services/AllServices/all-services.service */ "./src/app/Services/AllServices/all-services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, apiService) {
        this.router = router;
        this.apiService = apiService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.getUserImage();
    };
    HeaderComponent.prototype.logout = function () {
        this.apiService.postData('auth/authentication/userlogout?token=' + localStorage.getItem('token'), {})
            .subscribe(function (res) {
        });
        this.router.navigate(['/tenant-login']);
        localStorage.clear();
    };
    HeaderComponent.prototype.getUsername = function () {
        return JSON.parse(localStorage.getItem('user')).userName;
    };
    HeaderComponent.prototype.getRoleName = function () {
        var role = JSON.parse(localStorage.getItem('role'));
        return role.name;
    };
    HeaderComponent.prototype.getUserImage = function () {
        this.userImage = localStorage.getItem('userImage');
        if (this.userImage != 'null') {
            return this.userImage;
        }
        else {
            return './../../../assets/images/boy.png';
        }
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_2__["AllServicesService"] }
    ]; };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/Components/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_2__["AllServicesService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/Components/manage-tests/manage-tests.component.css":
/*!********************************************************************!*\
  !*** ./src/app/Components/manage-tests/manage-tests.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "hr{\n    border-top: 1px solid #707070;\n    margin-top: 0px;\n}\n\n.draftCount{\n    background-color: #5596E6;\n    padding: 2px 7px;\n    border-radius: 50%;\n    color: #ffffff;\n}\n\n.activeCount{\n    background-color: #40BF37;\n    padding: 2px 7px;\n    border-radius: 50%;\n    color: #ffffff;\n}\n\n.compltdCount{\n    background-color: #FA7070;\n    padding: 2px 7px;\n    border-radius: 50%;\n    color: #ffffff;\n}\n\n.tbl_hdng{\n    color: #ffffff;\n    background-color: #425db5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9tYW5hZ2UtdGVzdHMvbWFuYWdlLXRlc3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCOztBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL21hbmFnZS10ZXN0cy9tYW5hZ2UtdGVzdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImhye1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNzA3MDcwO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbn1cblxuLmRyYWZ0Q291bnR7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU1OTZFNjtcbiAgICBwYWRkaW5nOiAycHggN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5hY3RpdmVDb3VudHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDBCRjM3O1xuICAgIHBhZGRpbmc6IDJweCA3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuLmNvbXBsdGRDb3VudHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkE3MDcwO1xuICAgIHBhZGRpbmc6IDJweCA3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufSAgIFxuLnRibF9oZG5ne1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MjVkYjU7XG59Il19 */"

/***/ }),

/***/ "./src/app/Components/manage-tests/manage-tests.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Components/manage-tests/manage-tests.component.ts ***!
  \*******************************************************************/
/*! exports provided: ManageTestsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageTestsComponent", function() { return ManageTestsComponent; });
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


var ManageTestsComponent = /** @class */ (function () {
    // [{
    //   testName : "Python Developer - 7+ years of experience",
    //   date : "4, July",
    //   questions : "60 Questions",
    //   marks : "Marks: 60",
    //   pass :25
    // },
    // {
    //   testName : "Senior Java Developer - 8+ years",
    //   date : "4, July",
    //   questions : "60 Questions",
    //   marks : "Marks: 60",
    //   pass :25
    // }]
    function ManageTestsComponent(apiService) {
        this.apiService = apiService;
        this.draftTest = [];
        // [{
        //   testName : "Python Developer - 7+ years of experience",
        //   date : "04, July",
        //   questions : "60 Questions",
        //   marks : "Marks: 60",
        //   pass :25
        // },
        // {
        //   testName : "Senior Java Developer - 8+ years",
        //   date : "04, July",
        //   questions : "60 Questions",
        //   marks : "Marks: 60",
        //   pass :25
        // }];
        this.activeTest = [];
        // [{
        //   testName : "DevOps Engineer - 10+ years of experience",
        //   date : "02, July",
        //   questions : "60 Questions",
        //   marks : "Marks: 60",
        //   pass :25
        // },
        // {
        //   testName : "Senior Business Development Manager",
        //   date : "04, July",
        //   questions : "60 Questions",
        //   marks : "Marks: 60",
        //   pass :25
        // },
        // {
        //   testName : "AWS Engineer - 5+ Years of experience",
        //   date : "06, July",
        //   questions : "60 Questions",
        //   marks : "Marks: 60",
        //   pass :25
        // },
        // {
        //   testName : "Digital Marketing Manger",
        //   date : "10, July",
        //   questions : "60 Questions",
        //   marks : "Marks: 60",
        //   pass :25
        // },
        // {
        //   testName : "DevOps Engineer - 10+ years of experience",
        //   date : "4, July",
        //   questions : "60 Questions",
        //   marks : "Marks: 60",
        //   pass :25
        // }]
        this.completedTest = [];
    }
    ManageTestsComponent.prototype.ngOnInit = function () {
        this.getTests();
    };
    ManageTestsComponent.prototype.getTests = function () {
        var _this = this;
        this.apiService.getAll('testmanagement/testconfig/totaltestsbystatus?token=' + localStorage.getItem('token'))
            .subscribe(function (res) {
            _this.tests = res['testDetailsByStatus'];
            _this.draftTest = _this.tests['listOfDraftTests'] ? _this.tests['listOfDraftTests'] : [];
            _this.activeTest = _this.tests['listOfActiveTests'] ? _this.tests['listOfActiveTests'] : [];
            _this.completedTest = _this.tests['listOfCompletedTests'] ? _this.tests['listOfCompletedTests'] : [];
        }, function (error) {
        });
    };
    ManageTestsComponent.prototype.deleteTestConfig = function (test) {
        var _this = this;
        this.apiService.postData('testmanagement/testconfig/deletetestconfig?testConfigId=' + test.testConfigId + '&token=' + localStorage.getItem('token'), {})
            .subscribe(function (res) {
            if (res['statusCode'] == 1) {
                _this.getTests();
                _this.apiService.successAlert(res['statusMessage']);
            }
            else {
                _this.apiService.errorAlert(res['statusMessage']);
            }
        }, function (error) {
        });
    };
    ManageTestsComponent.ctorParameters = function () { return [
        { type: _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"] }
    ]; };
    ManageTestsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-manage-tests',
            template: __webpack_require__(/*! raw-loader!./manage-tests.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/manage-tests/manage-tests.component.html"),
            styles: [__webpack_require__(/*! ./manage-tests.component.css */ "./src/app/Components/manage-tests/manage-tests.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"]])
    ], ManageTestsComponent);
    return ManageTestsComponent;
}());



/***/ }),

/***/ "./src/app/Components/sidenav/sidenav.component.css":
/*!**********************************************************!*\
  !*** ./src/app/Components/sidenav/sidenav.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav_Sec .list-group-item{\n    border:none;\n    /* margin: .75rem 0rem !important;\n    padding: 0px 20px !important; */\n    padding: 4px 15px;\n    margin:8px 0px;\n    background-color: #F6F6F6;\n}\n.list_expansion{\n    padding:0px 20px;\n}\n.sidenav_Sec ul li{\n    outline:0;\n}\n.sidenav_Sec ul li span{\n    cursor:pointer;\n}\n.route_active{\n    background-color: #d9e4f1 !important;\n    border-top-right-radius: 20px;\n    border-bottom-right-radius: 20px;\n}\n.sidenav_Sec i{\n    position: relative;\n    top: 5px;\n    padding: 0px 8px;\n}\n.test_li{\n    padding: 0px !important;\n}\n.ques_bg{\n    background-color: #767673;\n    color: #ffffff;\n    font-weight: bold;\n    padding: 0px 7px;\n    border-radius: 50%;\n    margin: 0px 8px;\n}\n.perm_li i{\n    top:0px !important;\n    color:#707070;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9zaWRlbmF2L3NpZGVuYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWDttQ0FDK0I7SUFDL0IsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsNkJBQTZCO0lBQzdCLGdDQUFnQztBQUNwQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL0NvbXBvbmVudHMvc2lkZW5hdi9zaWRlbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdl9TZWMgLmxpc3QtZ3JvdXAtaXRlbXtcbiAgICBib3JkZXI6bm9uZTtcbiAgICAvKiBtYXJnaW46IC43NXJlbSAwcmVtICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMHB4IDIwcHggIWltcG9ydGFudDsgKi9cbiAgICBwYWRkaW5nOiA0cHggMTVweDtcbiAgICBtYXJnaW46OHB4IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGNkY2O1xufVxuLmxpc3RfZXhwYW5zaW9ue1xuICAgIHBhZGRpbmc6MHB4IDIwcHg7XG59XG4uc2lkZW5hdl9TZWMgdWwgbGl7XG4gICAgb3V0bGluZTowO1xufVxuLnNpZGVuYXZfU2VjIHVsIGxpIHNwYW57XG4gICAgY3Vyc29yOnBvaW50ZXI7XG59XG4ucm91dGVfYWN0aXZle1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWU0ZjEgIWltcG9ydGFudDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbn1cbi5zaWRlbmF2X1NlYyBpe1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDVweDtcbiAgICBwYWRkaW5nOiAwcHggOHB4O1xufVxuLnRlc3RfbGl7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG4ucXVlc19iZ3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzY3NjczO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDBweCA3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIG1hcmdpbjogMHB4IDhweDtcbn1cbi5wZXJtX2xpIGl7XG4gICAgdG9wOjBweCAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiM3MDcwNzA7XG59Il19 */"

/***/ }),

/***/ "./src/app/Components/sidenav/sidenav.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Components/sidenav/sidenav.component.ts ***!
  \*********************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
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


var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(apiService) {
        this.apiService = apiService;
        this.testPerm = this.disableTestManager();
        this.evalPerm = this.disableEvaluator();
        this.rolesPermArr = [this.testPerm, this.evalPerm];
        this.color = 'primary';
        this.isRecruiter = false;
    }
    SidenavComponent.prototype.ngOnInit = function () {
        this.getRoles();
        this.checkRec();
    };
    SidenavComponent.prototype.disableAdmin = function () {
        var adminRole = JSON.parse(localStorage.getItem('Permissions'));
        return true;
    };
    SidenavComponent.prototype.disableTestManager = function () {
        var adminRole = JSON.parse(localStorage.getItem('Permissions'));
        if (adminRole.includes('TestManagement')) {
            return true;
        }
        else {
            return false;
        }
    };
    SidenavComponent.prototype.disableEvaluator = function () {
        var adminRole = JSON.parse(localStorage.getItem('Permissions'));
        if (adminRole.includes('EvaluateManagement')) {
            return true;
        }
        else {
            return false;
        }
    };
    SidenavComponent.prototype.isSuperUser = function () {
        var superUser = localStorage.getItem('isSuper');
        if (superUser == "1")
            return true;
    };
    SidenavComponent.prototype.checkRec = function () {
        var roleList = JSON.parse(localStorage.getItem('role'));
        if (roleList.name == 'Recruiter') {
            this.isRecruiter = true;
        }
    };
    SidenavComponent.prototype.checkPerm = function (perm) {
        var menuList = JSON.parse(localStorage.getItem('Permissions'));
        if (menuList.includes(perm)) {
            return true;
        }
        else {
            return false;
        }
    };
    SidenavComponent.prototype.getRoles = function () {
        var _this = this;
        this.apiService.getAll('auth/role?token=' + localStorage.getItem('token'))
            .subscribe(function (res) {
            _this.listRoles = res;
        }, function (error) {
        });
    };
    SidenavComponent.prototype.updateRoles = function (roleId, addPermBool) {
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
    SidenavComponent.prototype.getUpdatedPermissions = function () {
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
    SidenavComponent.ctorParameters = function () { return [
        { type: _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"] }
    ]; };
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! raw-loader!./sidenav.component.html */ "./node_modules/raw-loader/index.js!./src/app/Components/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.css */ "./src/app/Components/sidenav/sidenav.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_1__["AllServicesService"]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/Services/AllServices/all-services.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/Services/AllServices/all-services.service.ts ***!
  \**************************************************************/
/*! exports provided: AllServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllServicesService", function() { return AllServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// material

var AllServicesService = /** @class */ (function () {
    function AllServicesService(http, _snackBar) {
        this.http = http;
        this._snackBar = _snackBar;
        // test or prod or dev..
        this.env = "prod";
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url;
        this.cfs = true;
        if (this.env == "test") {
            _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url = "http://" + window.location.hostname + ":9880/api/";
            this.cfsUrl = "http://14.98.167.101:6060";
            this.cvBankUrl = "http://14.98.167.101:3039/cvbank";
            this.secretKey = "b4cbbca01fe911ea887f60d819d32822";
            this.cvBankKey = "9DBL7HJKEOb5L8roR2KcBxq2SqvcQ8XHTBAlU5nuFpf2ZMahz-nqpug0X4InyhFKJCW7410K0APzEZUOu4KIsKwim9NN5cRV1MROlQE-Qtp24Gb0atYir_PAqaf7LqdvoH8NBGtlA9sKXsRORqMLbEzR6gv7mtd7u6QSgsUQSqluImx50Zp3q25QERi-fAP7i_l-EsSn";
            this.participantTemplateUrl = "/api/fs/v1.0/access/file/ncd-test/2020-03-19/Thu193202012321917196.xlsx?action=download";
            this.questionTemplateUrl = "/api/fs/v1.0/access/file/ncd-test/2020-03-19/Thu193202012321918813.xlsx?action=download";
        }
        else if (this.env == "prod") {
            _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url = "https://" + window.location.hostname + ":9880/api/";
            this.cfsUrl = "https://fileresource.nocheatingdude.com:5050";
            this.secretKey = "90ab1182312211ea9176e2c535dadfbc";
            this.cvBankUrl = "https://cvbank.nocheatingdude.com:4049";
            this.cvBankKey = "6xMdAovWzzC5NMvvp28D6tDhtqO-scBVNdxvgfynu3wPyMcLLbrsvS8KnNShlEmhvnP5gCLPJlwPHXFabvg0iNYe6GawfVghvKRp0yY45h0Lv3K58N5YoCNbIcXla3ymE30jhFtBws-J2Bq0AFMiGT3qcNz5I3S2glNJmcMXtGJhQZMvbTQNuZBC6FT747c38JYbKbcO";
            this.participantTemplateUrl = "/api/fs/v1.0/access/file/ncd_prod/2020-03-19/Thu1932020114853385476.xlsx?action=download";
            this.questionTemplateUrl = "/api/fs/v1.0/access/file/ncd_prod/2020-03-19/Thu1932020114853385476.xlsx?action=download";
        }
        else {
            this.cfsUrl = "https://fileresource.nocheatingdude.com:5050";
            this.secretKey = "90ab1182312211ea9176e2c535dadfbc";
            // this.cvBankUrl="http://192.168.20.93:3039/cvbank";
            // this.secretKey="b4cbbca01fe911ea887f60d819d32822";
            // this.cvBankKey="9DBL7HJKEOb5L8roR2KcBxq2SqvcQ8XHTBAlU5nuFpf2ZMahz-nqpug0X4InyhFKJCW7410K0APzEZUOu4KIsKwim9NN5cRV1MROlQE-Qtp24Gb0atYir_PAqaf7LqdvoH8NBGtlA9sKXsRORqMLbEzR6gv7mtd7u6QSgsUQSqluImx50Zp3q25QERi-fAP7i_l-EsSn";
            this.cvBankUrl = "http://14.98.167.101:3039/cvbank";
            // this.secretKey="b4cbbca01fe911ea887f60d819d32822";
            this.cvBankKey = "9DBL7HJKEOb5L8roR2KcBxq2SqvcQ8XHTBAlU5nuFpf2ZMahz-nqpug0X4InyhFKJCW7410K0APzEZUOu4KIsKwim9NN5cRV1MROlQE-Qtp24Gb0atYir_PAqaf7LqdvoH8NBGtlA9sKXsRORqMLbEzR6gv7mtd7u6QSgsUQSqluImx50Zp3q25QERi-fAP7i_l-EsSn";
            this.participantTemplateUrl = "/api/fs/v1.0/access/file/ncd-test/2020-03-19/Thu193202012321917196.xlsx?action=download";
            this.questionTemplateUrl = "/api/fs/v1.0/access/file/ncd-test/2020-03-19/Thu193202012321918813.xlsx?action=download";
        }
        // test
        // environment.url="http://"+window.location.hostname+":9880/api/";
        //prod
        // environment.url="https://"+window.location.hostname+":9880/api/";
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url;
        this.headerDist = {
            "Accept": "application/json"
        };
        this.requestOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"](this.headerDist),
        };
    }
    AllServicesService.prototype.getAllCfs = function (url) {
        try {
            return this.http.get(this.cfsUrl + url, this.requestOptions);
        }
        catch (e) {
            // console.log(e, 'CFS get method')
        }
    };
    AllServicesService.prototype.postDataCfs = function (data) {
        try {
            return this.http.post(this.cfsUrl + "/api/fs/v1.0/upload/", data, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    "Accept": "application/json",
                    "access-token": this.secretKey
                }),
                observe: 'response'
            });
        }
        catch (e) {
            // console.log(e, 'CFS post method')
        }
    };
    AllServicesService.prototype.getAllCVBank = function () {
        try {
            return this.http.get(this.cvBankUrl + "/v1/app/", this.requestOptions);
        }
        catch (e) {
            // console.log(e, 'CFS get method')
        }
    };
    AllServicesService.prototype.postDataCVBank = function (data) {
        // console.log(data);
        try {
            return this.http.post(this.cvBankUrl + "/v1/upload/file/", data, {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                    "Accept": "application/json",
                    "access-token": this.cvBankKey
                }),
                observe: 'response'
            });
        }
        catch (e) {
            // console.log(e, 'CV Bank post method')
        }
    };
    AllServicesService.prototype.getAll = function (url) {
        try {
            return this.http.get(this.url + url, this.requestOptions);
        }
        catch (e) {
            // console.log(e, 'get method')
        }
    };
    AllServicesService.prototype.postData = function (url, data) {
        try {
            return this.http.post(this.url + url, data, this.requestOptions);
        }
        catch (e) {
            // console.log(e, 'post method')
        }
    };
    AllServicesService.prototype.updateData = function (url, data) {
        try {
            return this.http.put(this.url + url, data, this.requestOptions);
        }
        catch (e) {
            // console.log(e, 'get method')
        }
    };
    AllServicesService.prototype.deleteData = function (url) {
        try {
            return this.http.delete(this.url + url, this.requestOptions);
        }
        catch (e) {
            // console.log(e)
        }
    };
    AllServicesService.prototype.successAlert = function (data) {
        this._snackBar.open(data, 'ok', {
            duration: 4000,
            panelClass: ['success-snackbar']
        });
    };
    AllServicesService.prototype.errorAlert = function (data) {
        this._snackBar.open(data, 'ok', {
            duration: 4000,
            panelClass: ['error-snackbar']
        });
    };
    AllServicesService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
    ]; };
    AllServicesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], AllServicesService);
    return AllServicesService;
}());



/***/ }),

/***/ "./src/app/Services/Auth-service/auth-service.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/Services/Auth-service/auth-service.service.ts ***!
  \***************************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.isLogin = function () {
        if (localStorage.getItem("token")) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.isSetPass = function () {
        var ifSetPass = location.hash.includes('set-password');
        if (ifSetPass) {
            return false;
        }
        else {
            return true;
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/Services/Authentication-gaurd/authentication-gaurd.service.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/Services/Authentication-gaurd/authentication-gaurd.service.ts ***!
  \*******************************************************************************/
/*! exports provided: AuthenticationGaurdService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGaurdService", function() { return AuthenticationGaurdService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_Auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Services/Auth-service/auth-service.service */ "./src/app/Services/Auth-service/auth-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthenticationGaurdService = /** @class */ (function () {
    function AuthenticationGaurdService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthenticationGaurdService.prototype.canActivate = function (state) {
        var menuList = JSON.parse(localStorage.getItem('Permissions'));
        var roleList = JSON.parse(localStorage.getItem('role'));
        if (this.authService.isLogin()) {
            // console.log(roleList.name);
            if (state['routeConfig'].path == '' && menuList.includes('Dash Board')) {
                return true;
            }
            else if (state['routeConfig'].path == 'dashboard' && menuList.includes('Dash Board')) {
                return true;
            }
            else if (state['routeConfig'].path == 'reports' && menuList.includes('Reports')) {
                return true;
            }
            else if (state['routeConfig'].path == 'list-questions' && menuList.includes('ListOfQuestions')) {
                return true;
            }
            else if (state['routeConfig'].path == 'manage-tests' && menuList.includes('TestManagement')) {
                return true;
            }
            else if (state['routeConfig'].path == 'configure-tests' && menuList.includes('TestManagement')) {
                return true;
            }
            else if (state['routeConfig'].path == 'test-setup' && menuList.includes('TestManagement')) {
                return true;
            }
            else if (state['routeConfig'].path == 'test-config' && menuList.includes('TestManagement')) {
                return true;
            }
            else if (state['routeConfig'].path == 'sections' && menuList.includes('TestManagement')) {
                return true;
            }
            else if (state['routeConfig'].path == 'list-users' && menuList.includes('UserManagement')) {
                return true;
            }
            else if (state['routeConfig'].path == 'evaluate-tests' && menuList.includes('EvaluateManagement')) {
                return true;
            }
            else if (state['routeConfig'].path == 'administer-tests' && menuList.includes('TestManagement')) {
                return true;
            }
            else if (state['routeConfig'].path == 'content-verification' && menuList.includes('Content Verification')) {
                return true;
            }
            else if (state['routeConfig'].path == 'settings') {
                return true;
            }
            else if (state['routeConfig'].path == 'set-password') {
                return true;
            }
            else if (menuList.length == '1' && menuList.includes('EvaluateManagement')) {
                this.router.navigate(['/evaluate-tests']);
            }
            else if (menuList.length == '1' && menuList.includes('Content Verification')) {
                this.router.navigate(['/content-verification']);
            }
            else {
                this.router.navigate(['/list-users']);
            }
        }
        else {
            this.router.navigate(['/tenant-login']);
            return false;
        }
    };
    AuthenticationGaurdService.ctorParameters = function () { return [
        { type: _Services_Auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AuthenticationGaurdService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_Services_Auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthenticationGaurdService);
    return AuthenticationGaurdService;
}());



/***/ }),

/***/ "./src/app/Services/Loggin-Out/logging-out.service.ts":
/*!************************************************************!*\
  !*** ./src/app/Services/Loggin-Out/logging-out.service.ts ***!
  \************************************************************/
/*! exports provided: LoggingOutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggingOutService", function() { return LoggingOutService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_Auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Services/Auth-service/auth-service.service */ "./src/app/Services/Auth-service/auth-service.service.ts");
/* harmony import */ var _Components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../Components/header/header.component */ "./src/app/Components/header/header.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoggingOutService = /** @class */ (function () {
    function LoggingOutService(authService, router, header) {
        this.authService = authService;
        this.router = router;
        this.header = header;
    }
    LoggingOutService.prototype.canActivate = function () {
        if (this.authService.isLogin()) {
            // this.header.logout();
            localStorage.clear();
            return true;
        }
        else {
            return true;
        }
    };
    LoggingOutService.ctorParameters = function () { return [
        { type: _Services_Auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _Components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"] }
    ]; };
    LoggingOutService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_Services_Auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _Components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]])
    ], LoggingOutService);
    return LoggingOutService;
}());



/***/ }),

/***/ "./src/app/Services/LoginAuth/login-auth.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/Services/LoginAuth/login-auth.service.ts ***!
  \**********************************************************/
/*! exports provided: LoginAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginAuthService", function() { return LoginAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Services_Auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../Services/Auth-service/auth-service.service */ "./src/app/Services/Auth-service/auth-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginAuthService = /** @class */ (function () {
    function LoginAuthService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginAuthService.prototype.canActivate = function () {
        if (this.authService.isLogin()) {
            this.router.navigate(['/dashboard']);
            return false;
        }
        else {
            return true;
        }
    };
    LoginAuthService.ctorParameters = function () { return [
        { type: _Services_Auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    LoginAuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_Services_Auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginAuthService);
    return LoginAuthService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _Components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/header/header.component */ "./src/app/Components/header/header.component.ts");
/* harmony import */ var _Components_manage_tests_manage_tests_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/manage-tests/manage-tests.component */ "./src/app/Components/manage-tests/manage-tests.component.ts");
/* harmony import */ var _Components_configure_tests_configure_tests_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/configure-tests/configure-tests.component */ "./src/app/Components/configure-tests/configure-tests.component.ts");
/* harmony import */ var _Components_administer_test_administer_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/administer-test/administer-test.component */ "./src/app/Components/administer-test/administer-test.component.ts");
/* harmony import */ var _Components_activation_activation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/activation/activation.component */ "./src/app/Components/activation/activation.component.ts");
/* harmony import */ var _Components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/forgot-password/forgot-password.component */ "./src/app/Components/forgot-password/forgot-password.component.ts");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/fesm5/ngx-loading.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/fesm5/ngx-chips.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular2-multiselect-dropdown */ "./node_modules/angular2-multiselect-dropdown/fesm5/angular2-multiselect-dropdown.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _Services_Authentication_gaurd_authentication_gaurd_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Services/Authentication-gaurd/authentication-gaurd.service */ "./src/app/Services/Authentication-gaurd/authentication-gaurd.service.ts");
/* harmony import */ var _Services_LoginAuth_login_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Services/LoginAuth/login-auth.service */ "./src/app/Services/LoginAuth/login-auth.service.ts");
/* harmony import */ var _Services_Loggin_Out_logging_out_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Services/Loggin-Out/logging-out.service */ "./src/app/Services/Loggin-Out/logging-out.service.ts");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-block-ui */ "./node_modules/ng-block-ui/fesm5/ng-block-ui.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var jw_angular_social_buttons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! jw-angular-social-buttons */ "./node_modules/jw-angular-social-buttons/lib/jw-angular-social-buttons.module.js");
/* harmony import */ var jw_angular_social_buttons__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(jw_angular_social_buttons__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _Components_candidate_result_candidate_result_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./Components/candidate-result/candidate-result.component */ "./src/app/Components/candidate-result/candidate-result.component.ts");
/* harmony import */ var ngx_smart_popover__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-smart-popover */ "./node_modules/ngx-smart-popover/fesm5/ngx-smart-popover.js");
/* harmony import */ var _Components_downloads_downloads_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./Components/downloads/downloads.component */ "./src/app/Components/downloads/downloads.component.ts");
/* harmony import */ var _Components_contribute_contribute_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Components/contribute/contribute.component */ "./src/app/Components/contribute/contribute.component.ts");
/* harmony import */ var angular_star_rating__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! angular-star-rating */ "./node_modules/angular-star-rating/esm5/angular-star-rating.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// services



//block ui











var routes = [{
        path: "candidate-login",
        loadChildren: "./Modules/candidate-login/candidate-login.module#CandidateLoginModule",
        canActivate: [_Services_LoginAuth_login_auth_service__WEBPACK_IMPORTED_MODULE_17__["LoginAuthService"]]
    },
    {
        path: "candidate/results/:uniqueCode",
        component: _Components_candidate_result_candidate_result_component__WEBPACK_IMPORTED_MODULE_24__["CandidateResultComponent"],
        canActivate: [_Services_Loggin_Out_logging_out_service__WEBPACK_IMPORTED_MODULE_18__["LoggingOutService"]]
    },
    {
        path: "contribute/:instanceId",
        component: _Components_contribute_contribute_component__WEBPACK_IMPORTED_MODULE_27__["ContributeComponent"],
        canActivate: [_Services_Loggin_Out_logging_out_service__WEBPACK_IMPORTED_MODULE_18__["LoggingOutService"]]
    },
    {
        path: "terms-conditions",
        loadChildren: "./Modules/terms-condition/terms-condition.module#TermsConditionModule"
    },
    {
        path: "tenant-registration",
        loadChildren: "./Modules/tenant-reg/tenant-reg.module#TenantRegModule",
        canActivate: [_Services_LoginAuth_login_auth_service__WEBPACK_IMPORTED_MODULE_17__["LoginAuthService"]]
    },
    {
        path: "activation/:tassdsdxwergtyuoIasddE/:encryptId",
        component: _Components_activation_activation_component__WEBPACK_IMPORTED_MODULE_8__["ActivationComponent"],
        canActivate: [_Services_LoginAuth_login_auth_service__WEBPACK_IMPORTED_MODULE_17__["LoginAuthService"]]
    }, {
        path: "tenant-login",
        loadChildren: "./Modules/tenant-reg/tenant-reg.module#TenantRegModule",
        canActivate: [_Services_LoginAuth_login_auth_service__WEBPACK_IMPORTED_MODULE_17__["LoginAuthService"]]
    },
    {
        path: "",
        loadChildren: "./Modules/dashboard/dashboard.module#DashboardModule",
        canActivate: [_Services_Authentication_gaurd_authentication_gaurd_service__WEBPACK_IMPORTED_MODULE_16__["AuthenticationGaurdService"]]
    },
    {
        path: "content-verification",
        loadChildren: "./Modules/content-verification/content-verification.module#ContentVerificationModule",
        canActivate: [_Services_Authentication_gaurd_authentication_gaurd_service__WEBPACK_IMPORTED_MODULE_16__["AuthenticationGaurdService"]]
    },
    {
        path: "dashboard",
        loadChildren: "./Modules/dashboard/dashboard.module#DashboardModule",
        canActivate: [_Services_Authentication_gaurd_authentication_gaurd_service__WEBPACK_IMPORTED_MODULE_16__["AuthenticationGaurdService"]]
    },
    {
        path: "set-password",
        loadChildren: "./Modules/set-password/set-password.module#SetPasswordModule",
        canActivate: [_Services_Authentication_gaurd_authentication_gaurd_service__WEBPACK_IMPORTED_MODULE_16__["AuthenticationGaurdService"]]
    },
    {
        path: "set-password/tdfeaSkUfdRYrgtAyuoIasddE/:encrypToken",
        component: _Components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_9__["ForgotPasswordComponent"],
        canActivate: [_Services_LoginAuth_login_auth_service__WEBPACK_IMPORTED_MODULE_17__["LoginAuthService"]]
    },
    {
        path: "manage-tests",
        component: _Components_manage_tests_manage_tests_component__WEBPACK_IMPORTED_MODULE_5__["ManageTestsComponent"],
        canActivate: [_Services_Authentication_gaurd_authentication_gaurd_service__WEBPACK_IMPORTED_MODULE_16__["AuthenticationGaurdService"]]
    },
    {
        path: "configure-tests",
        component: _Components_configure_tests_configure_tests_component__WEBPACK_IMPORTED_MODULE_6__["ConfigureTestsComponent"],
        canActivate: [_Services_Authentication_gaurd_authentication_gaurd_service__WEBPACK_IMPORTED_MODULE_16__["AuthenticationGaurdService"]]
    },
    {
        path: "administer-tests",
        component: _Components_administer_test_administer_test_component__WEBPACK_IMPORTED_MODULE_7__["AdministerTestComponent"],
        canActivate: [_Services_Authentication_gaurd_authentication_gaurd_service__WEBPACK_IMPORTED_MODULE_16__["AuthenticationGaurdService"]]
    },
    {
        path: "list-users",
        loadChildren: "./Modules/list-users/list-users.module#ListUsersModule",
        canActivate: [_Services_Authentication_gaurd_authentication_gaurd_service__WEBPACK_IMPORTED_MODULE_16__["AuthenticationGaurdService"]]
    },
    {
        path: "list-questions",
        loadChildren: "./Modules/list-questions/list-questions.module#ListQuestionsModule",
        canActivate: [_Services_Authentication_gaurd_authentication_gaurd_service__WEBPACK_IMPORTED_MODULE_16__["AuthenticationGaurdService"]]
    },
    {
        path: "evaluate-tests",
        loadChildren: "./Modules/evaluate-candidate/evaluate-candidate.module#EvaluateCandidateModule",
        canActivate: [_Services_Authentication_gaurd_authentication_gaurd_service__WEBPACK_IMPORTED_MODULE_16__["AuthenticationGaurdService"]]
    },
    {
        path: "reports",
        loadChildren: "./Modules/reports/reports.module#ReportsModule",
        canActivate: [_Services_Authentication_gaurd_authentication_gaurd_service__WEBPACK_IMPORTED_MODULE_16__["AuthenticationGaurdService"]]
    },
    // {
    //   path:"candidate-registration",
    //   loadChildren: "./Modules/candidate-registraion/candidate-registraion.module#CandidateRegistraionModule"
    // },
    {
        path: "candidate",
        loadChildren: "./Modules/candidate-registraion/candidate-registraion.module#CandidateRegistraionModule",
        canActivate: [_Services_Loggin_Out_logging_out_service__WEBPACK_IMPORTED_MODULE_18__["LoggingOutService"]]
    }, {
        path: "settings",
        loadChildren: "./Modules/settings/settings.module#SettingsModule",
        canActivate: [_Services_Authentication_gaurd_authentication_gaurd_service__WEBPACK_IMPORTED_MODULE_16__["AuthenticationGaurdService"]]
    },
    {
        path: "sections",
        loadChildren: "./Modules/sections/sections.module#SectionsModule",
        canActivate: [_Services_Authentication_gaurd_authentication_gaurd_service__WEBPACK_IMPORTED_MODULE_16__["AuthenticationGaurdService"]]
    },
    {
        path: "test-setup",
        loadChildren: "./Modules/test-setup/test-setup.module#TestSetupModule",
        canActivate: [_Services_Authentication_gaurd_authentication_gaurd_service__WEBPACK_IMPORTED_MODULE_16__["AuthenticationGaurdService"]]
    },
    {
        path: "exam",
        loadChildren: "./Modules/exam/exam.module#ExamModule",
        canActivate: [_Services_Loggin_Out_logging_out_service__WEBPACK_IMPORTED_MODULE_18__["LoggingOutService"]]
    },
    {
        path: "test-config",
        loadChildren: "./Modules/test-config/test-config.module#TestConfigModule",
        canActivate: [_Services_Authentication_gaurd_authentication_gaurd_service__WEBPACK_IMPORTED_MODULE_16__["AuthenticationGaurdService"]]
    },
    {
        path: "downloads",
        component: _Components_downloads_downloads_component__WEBPACK_IMPORTED_MODULE_26__["DownloadsComponent"]
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_Components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _Components_downloads_downloads_component__WEBPACK_IMPORTED_MODULE_26__["DownloadsComponent"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                ng_block_ui__WEBPACK_IMPORTED_MODULE_19__["BlockUIModule"].forRoot(), _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_11__["TagInputModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"], angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__["AngularMultiSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocompleteModule"],
                ngx_smart_popover__WEBPACK_IMPORTED_MODULE_25__["PopoverModule"], jw_angular_social_buttons__WEBPACK_IMPORTED_MODULE_23__["JwSocialButtonsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], angular_star_rating__WEBPACK_IMPORTED_MODULE_28__["StarRatingModule"].forRoot(), ngx_loading__WEBPACK_IMPORTED_MODULE_10__["NgxLoadingModule"].forRoot({})],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], angular_star_rating__WEBPACK_IMPORTED_MODULE_28__["StarRatingModule"], _Components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_10__["NgxLoadingModule"], jw_angular_social_buttons__WEBPACK_IMPORTED_MODULE_23__["JwSocialButtonsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_20__["MatMenuModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_11__["TagInputModule"], ng_block_ui__WEBPACK_IMPORTED_MODULE_19__["BlockUIModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_21__["MatRadioModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"], angular2_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_13__["AngularMultiSelectModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_22__["MatAutocompleteModule"], ngx_smart_popover__WEBPACK_IMPORTED_MODULE_25__["PopoverModule"]],
            providers: [_Components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tot_bg{\n    background-color: #F6F6F6;\n    height:100%;\n    \n}\n\n.set_pass_grad{\n    /* background-image: linear-gradient(0.40turn,rgba(61, 112, 178, 0.89), rgba(65, 214, 195, 0.89),rgba(85, 150, 230, 0.89)); */\n    height: 100vh;\n    /* background-color:#12BCFF; */\n    /* background-color: #D63031; */\n    background-color: #2ECC71;\n}\n \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVzs7QUFFZjs7QUFFQTtJQUNJLDZIQUE2SDtJQUM3SCxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLCtCQUErQjtJQUMvQix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b3RfYmd7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Y2RjZGNjtcbiAgICBoZWlnaHQ6MTAwJTtcbiAgICBcbn1cblxuLnNldF9wYXNzX2dyYWR7XG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KDAuNDB0dXJuLHJnYmEoNjEsIDExMiwgMTc4LCAwLjg5KSwgcmdiYSg2NSwgMjE0LCAxOTUsIDAuODkpLHJnYmEoODUsIDE1MCwgMjMwLCAwLjg5KSk7ICovXG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiMxMkJDRkY7ICovXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI0Q2MzAzMTsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkVDQzcxO1xufVxuICJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Services_Auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Services/Auth-service/auth-service.service */ "./src/app/Services/Auth-service/auth-service.service.ts");
/* harmony import */ var _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services/AllServices/all-services.service */ "./src/app/Services/AllServices/all-services.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// services


var AppComponent = /** @class */ (function () {
    function AppComponent(authService, apiService) {
        this.authService = authService;
        this.apiService = apiService;
        this.title = 'app';
        var url = window.location.hostname.split('.');
        this.checkDomain(url[0]);
    }
    AppComponent.prototype.checkDomain = function (domain) {
        if (domain != 'register') {
            this.apiService.getAll('auth/tenant/domaincheck?domian=' + domain)
                .subscribe(function (res) {
                if (res['statusCode'] != '1') {
                    // location.href="https://register.nocheatingdude.com"
                }
            });
        }
    };
    AppComponent.ctorParameters = function () { return [
        { type: _Services_Auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
        { type: _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_2__["AllServicesService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_Services_Auth_service_auth_service_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _Services_AllServices_all_services_service__WEBPACK_IMPORTED_MODULE_2__["AllServicesService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/sidenav/sidenav.component */ "./src/app/Components/sidenav/sidenav.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _Components_manage_tests_manage_tests_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Components/manage-tests/manage-tests.component */ "./src/app/Components/manage-tests/manage-tests.component.ts");
/* harmony import */ var _Components_configure_tests_configure_tests_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Components/configure-tests/configure-tests.component */ "./src/app/Components/configure-tests/configure-tests.component.ts");
/* harmony import */ var _Components_administer_test_administer_test_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Components/administer-test/administer-test.component */ "./src/app/Components/administer-test/administer-test.component.ts");
/* harmony import */ var _Components_activation_activation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Components/activation/activation.component */ "./src/app/Components/activation/activation.component.ts");
/* harmony import */ var _Components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Components/forgot-password/forgot-password.component */ "./src/app/Components/forgot-password/forgot-password.component.ts");
/* harmony import */ var _Components_candidate_result_candidate_result_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Components/candidate-result/candidate-result.component */ "./src/app/Components/candidate-result/candidate-result.component.ts");
/* harmony import */ var _Components_administer_test_search_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Components/administer-test/search.pipe */ "./src/app/Components/administer-test/search.pipe.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _Components_custom_toast_custom_toast_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Components/custom-toast/custom-toast.component */ "./src/app/Components/custom-toast/custom-toast.component.ts");
/* harmony import */ var _Components_contribute_contribute_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Components/contribute/contribute.component */ "./src/app/Components/contribute/contribute.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// angular material


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _Components_sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_5__["SidenavComponent"],
                _Components_manage_tests_manage_tests_component__WEBPACK_IMPORTED_MODULE_13__["ManageTestsComponent"],
                _Components_configure_tests_configure_tests_component__WEBPACK_IMPORTED_MODULE_14__["ConfigureTestsComponent"],
                _Components_administer_test_administer_test_component__WEBPACK_IMPORTED_MODULE_15__["AdministerTestComponent"],
                _Components_activation_activation_component__WEBPACK_IMPORTED_MODULE_16__["ActivationComponent"],
                _Components_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_17__["ForgotPasswordComponent"],
                _Components_candidate_result_candidate_result_component__WEBPACK_IMPORTED_MODULE_18__["CandidateResultComponent"],
                _Components_administer_test_search_pipe__WEBPACK_IMPORTED_MODULE_19__["SearchPipe"], _Components_custom_toast_custom_toast_component__WEBPACK_IMPORTED_MODULE_21__["PinkToast"], _Components_contribute_contribute_component__WEBPACK_IMPORTED_MODULE_22__["ContributeComponent"],
            ],
            entryComponents: [_Components_custom_toast_custom_toast_component__WEBPACK_IMPORTED_MODULE_21__["PinkToast"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_6__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBarModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_20__["ToastrModule"].forRoot({ toastComponent: _Components_custom_toast_custom_toast_component__WEBPACK_IMPORTED_MODULE_21__["PinkToast"] })
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    url: 'http://14.98.167.99:9880/api/'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nexiilabs/Downloads/current/ccn-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map