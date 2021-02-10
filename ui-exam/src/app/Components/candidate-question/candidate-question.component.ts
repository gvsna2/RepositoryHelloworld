import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { AllServicesService } from "./../../Services/AllServices/all-services.service"

import 'codemirror/mode/python/python';
import 'codemirror/keymap/sublime.js';

import { BlockUI, NgBlockUI } from 'ng-block-ui';

@Component({
  selector: 'app-candidate-question',
  templateUrl: './candidate-question.component.html',
  styleUrls: ['./candidate-question.component.css']
})
export class CandidateQuestionComponent implements OnInit,OnDestroy {

  @BlockUI() blockUI: NgBlockUI;

  public testId:any;
  public testInstanceId:any;
  public questionData:object;
  // [{
  //   question : "How you can convert a number to a string?",
  //   answer : "In order to convert a number into a string, use the inbuilt function str(). If you want a octal or hexadecimal representation, use the inbuilt function oct() or hex().",
  //   correctAns : "In order to convert a number into a string, use the inbuilt function str(). If you want a octal or hexadecimal representation, use the inbuilt function oct() or hex().",
  //   type : "text"
  // },
  // {
  //   question : "What is the difference between Xrange and range?",
  //   answer : "Xrange returns the xrange object while range returns the list, and uses the same memory and no matter what the range size is.",
  //   correctAns : "Xrange returns the xrange object while range returns the list, and uses the same memory and no matter what the range size is.",
  //   type : "text"
  // },
  // {
  //   question : "How can you randomize the items of a list in place in Python?",
  //   answer : "from random import shuffle x = [ 'Keep', 'The', 'Blue', 'Flag', 'Flying', 'High'] shuffle(x) print(x)",
  //   correctAns : "from random import shuffle x = [ 'Keep', 'The', 'Blue', 'Flag', 'Flying', 'High'] shuffle(x) print(x)",
  //   type : "text"
  // },
  // {
  //   question : "How to add values to a python array?",
  //   answer : "a=arr.array('d', [1.1 , 2.1 ,3.1] ) a.append(3.4) print(a) a.extend([4.5,6.3,6.8]) print(a) a.insert(2,3.8) print(a)",
  //   correctAns : "a=arr.array('d', [1.1 , 2.1 ,3.1] ) a.append(3.4) print(a) a.extend([4.5,6.3,6.8]) print(a) a.insert(2,3.8) print(a)",
  //   type : "text"
  // }]

  config:any;
  content:any;

  constructor(private router:Router,private activeRoute: ActivatedRoute,private apiService : AllServicesService) {
    
    this.activeRoute.params.subscribe(params=>{
      this.testInstanceId = params['testInstanceId'];
    })

    this.testId = localStorage.getItem("testId")

    this.getQuestions();

    this.config = { lineNumbers: true,
      lineWrapping: true,
      autofocus: false,
      theme: 'rubyblue',
      keyMap:'sublime',
      fullScreen:true,
      mode: 'python',
      matchBrackets: true,
      foldGutter: true,
      extraKeys: {
        "Ctrl-Q": function (cm) {
          // console.log(cm); //CodeMirror$1 {options: {…}, doc: Doc, display: Display, state: {…}, curOp: {…}, …}
          cm.foldCode(cm.getCursor()); //here is an EXCEPTION: cm.foldCode is not a function
        }
      },
      readOnly: true,
      gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"]
     };
    this.content = `# ... some code`
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    localStorage.removeItem("testId")
  }

  gotoUsers(){
    this.router.navigate(['/evaluate-tests/candidate'])
  }

  getQuestions(){
    this.apiService.getAll('testmanagement/testcandidate/candidatequestions?token='+localStorage.getItem('token')+'&testInstanceId='+this.testInstanceId)
    .subscribe(res=>{
      this.questionData = res;
    },error=>{

    })
  }

  evaluateAns(num,ques){
    var ans= Number(num);
    this.blockUI.start('Please Wait, We Are Updating the Status')
    this.apiService.postData('testmanagement/testcandidate/questionevaluation?token='+localStorage.getItem('token')+'&testInstanceQuestionId='+ques.testInstanceQuestionId+'&answerStatus='+ans,{})
      .subscribe(res=>{
        this.blockUI.stop();
          this.getQuestions();
          this.apiService.successAlert('Question Evaluated Scccessfully')
      },error=>{
        this.blockUI.stop();
      })
  }

  gotoCandidates(){
    this.router.navigate(['/evaluate-tests/candidate',this.testId]);
  }

}
