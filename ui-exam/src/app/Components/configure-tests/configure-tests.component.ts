import { Component, OnInit } from '@angular/core';
import { AllServicesService } from "./../../Services/AllServices/all-services.service";
import { BlockUI, NgBlockUI } from 'ng-block-ui';
declare var $;

@Component({
  selector: 'app-configure-tests',
  templateUrl: './configure-tests.component.html',
  styleUrls: ['./configure-tests.component.css']
})
export class ConfigureTestsComponent implements OnInit {

  masterView:object;

  @BlockUI() blockUI: NgBlockUI;

  public testSetups:object={
    'listOfTestSetups':[]
  }

  constructor(private apiService : AllServicesService) { }

  ngOnInit() {
    this.getTestSetups();
  }

  getTestSetups(){
    this.blockUI.start("Please Wait ...")
    this.apiService.getAll('testmanagement/testsetup/listoftestsetups?token='+localStorage.getItem('token'))
      .subscribe(res=>{
          this.blockUI.stop();
          this.testSetups = res;
      },error=>{

      })
  }
  stopProp(event) {
    event.stopPropagation();
  }
  showMaster(test){
    this.apiService.getAll('testmanagement/testsetup/listofsectionsbytestsetupid?token='+localStorage.getItem('token')+'&testSetupId='+test.testSetupId)
      .subscribe(res=>{
        if(res['statusCode'] == '1'){
          this.masterView = res;
             $('#masterViewModal').modal('show');
        }else{
          this.apiService.errorAlert(res['statusMessage'])
        }
      })
  }

}
