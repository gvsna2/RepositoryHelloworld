import { Component, OnInit } from '@angular/core';
import { AllServicesService } from "./../../Services/AllServices/all-services.service";

@Component({
  selector: 'app-downloads',
  templateUrl: './downloads.component.html',
  styleUrls: ['./downloads.component.css']
})
export class DownloadsComponent implements OnInit {
  
  templateLink: any;
  templateLinkPar: any;

  constructor(private apiService: AllServicesService) { }

  ngOnInit() {
    this.getTemplateLink();
    this.getParticipant();
  }

  getTemplateLink() {
    if(this.apiService.cfs){
      this.templateLink = this.apiService.cfsUrl + this.apiService.questionTemplateUrl;
     }else{
      this.templateLink = this.apiService.url + 'notification/template/download?filetype=question&fileId=1&token=' + localStorage.getItem('token')
     }
  }
  getParticipant() {
    if(this.apiService.cfs){
      this.templateLinkPar = this.apiService.cfsUrl + this.apiService.participantTemplateUrl;
  
     }else{
      this.templateLinkPar = this.apiService.url + 'notification/template/download?filetype=participant&fileId=2&token=' + localStorage.getItem('token')
     }
  }

}
