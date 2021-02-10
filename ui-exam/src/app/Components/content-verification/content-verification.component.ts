import { Component, OnInit } from '@angular/core';
import { AllServicesService } from "./../../Services/AllServices/all-services.service";
declare var $;
 

@Component({
  selector: 'app-content-verification',
  templateUrl: './content-verification.component.html',
  styleUrls: ['./content-verification.component.css']
})
export class ContentVerificationComponent implements OnInit {

  constructor(private apiService : AllServicesService) { }

  questionsList=[]
  questionFlag=false;
  currentSection;
  getQuestions(section,offset){
    this.questionsList=[];
    this.currentSection=section;
    this.apiService.getAll('reports/questioncontribution/listofquestioncontribution?token='+localStorage.getItem('token')+'&contributionQuestionsOffset='+offset+'&sectionId='+section.sectionId+'&contributerId='+section.contributerId+'&instanceId='+section.instanceId)
    .subscribe(res=>{
        console.log(res); 
        if(res['statusCode']==1){
          // this.links=res['contributionRequestDTOList'];
          this.questionsList=res['questionContribution'];
          this.questionFlag=true;
          // this.quetionCount=res['']
        }
    },error=>{

    }),
    ()=>{

    }

  }


  localPageNo=1;
  quetionCount=0;
  onLocalPageChange(event){
    this.localPageNo=event;
    this.getQuestions(this.currentSection,this.localPageNo-1)
   }

  hoverGlobQues;
  mcaAns;
  checkBoxAnswers=[];
  viewQuestion(ques){
    this.hoverGlobQues = ques;

    if (this.hoverGlobQues['questionTypeId'] == '1') {
      var ind = this.hoverGlobQues['optionsList'].findIndex((item) => {
        return item.optionId == this.hoverGlobQues['answer'];
      })
      if (ind > -1) {
        this.mcaAns = ind
      }
    }

    if (this.hoverGlobQues['questionTypeId']== '2') {
      var answerId = this.hoverGlobQues['answer'].split(',');

      for (let i = 0; i < answerId.length; i++) {
        var ind = this.hoverGlobQues['optionsList'].findIndex((item) => {
          return item.optionId == answerId[i];
        })
        if (ind > -1) {
          this.checkBoxAnswers.push(ind);
        }
      }


    }

    // console.log("this.checkBoxAnswers",this.checkBoxAnswers)

  }

  validateQuestion(status){
    this.hoverGlobQues.questionVerificationStatus=status;
     var temp=[];
     temp.push(this.hoverGlobQues)
    this.apiService.postData("reports/questioncontribution/contributionquestionsadding?token="+localStorage.getItem('token'),{
      contributionQuestionRequestList:temp,
      token:localStorage.getItem('token')

    }).subscribe(
      res=>{

        if(res['statusCode']==1){
          this.getQuestions(this.currentSection,0);
          $('#quesViewModal').modal('hide');
        }
      },
      error=>{
        console.log(error);
      },
      ()=>{

      }
    );
  }
  sectionList=[];

  getDetails(id,index){
    this.questionFlag=false;
    this.questionsList=[];
  this.sectionList=[]
    this.apiService.getAll('reports/questioncontribution/listofcontributiondetailesbyrequestid?token='+localStorage.getItem('token')+'&contributionRequestId='+id)
    .subscribe(res=>{
        console.log(res); 
        if(res['statusCode']==1){
          // this.links=res['contributionRequestDTOList'];
          this.sectionList=res['contributionRequestDetailesList'];
        }
    },error=>{

    }),
    ()=>{
/*
    Carousel
*/
if(this.sectionList.length>4){
  $('#car'+index).on('slide.bs.carousel', function (e) {
    /*
        CC 2.0 License Iatek LLC 2018 - Attribution required
    */
    var $e = $(e.relatedTarget);
    var idx = $e.index();
    var itemsPerSlide = 4;
    var totalItems = $('.carousel-item').length;
  
    if (idx >= totalItems-(itemsPerSlide-1)) {
        var it = itemsPerSlide - (totalItems - idx);
        for (var i=0; i<it; i++) {
            // append slides to end
            if (e.direction=="left") {
                $('.carousel-item').eq(i).appendTo('.carousel-inner');
            }
            else {
                $('.carousel-item').eq(0).appendTo('.carousel-inner');
            }
        }
    }
  });
}

    }
  }
  links=[];
  getContributorLinks(){
    this.apiService.getAll('reports/questioncontribution/listofcontributionrequests?token='+localStorage.getItem('token'))
    .subscribe(res=>{
        console.log(res); 
        if(res['statusCode']==1){
          this.links=res['contributionRequestDTOList'];
        }
    },error=>{

    }),
    ()=>{

    }
  }
  ngOnInit() {
this.getContributorLinks();
  }

}
