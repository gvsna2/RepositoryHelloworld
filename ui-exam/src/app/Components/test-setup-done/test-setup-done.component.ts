import { Component, OnInit } from '@angular/core';
import {AllServicesService} from '../../Services/AllServices/all-services.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-setup-done',
  templateUrl: './test-setup-done.component.html',
  styleUrls: ['./test-setup-done.component.css']
})
export class TestSetupDoneComponent implements OnInit {

  routeId=0;
  constructor(private service : AllServicesService,private route : Router,private activeRoute: ActivatedRoute) { 

    this.activeRoute.params.subscribe(params=>{
      this.routeId = params['id'];
    })
  }
  testSetup;
  ngOnInit() {
    // console.log(this.routeId);
    
    
    this.service.getAll("testmanagement/testsetup/testsetupdetailsbytestsetupid?token="+localStorage.getItem('token')+"&testSetupId="+this.routeId).subscribe(
      (data)=>{
        // console.log(data)
      if(data['statusCode'] == 1){
        
        this.testSetup=data['testSetupDetails'].testSetupTitle;
      }else{

      }
      },
      (error)=>{
        // console.log(error)
      },
      ()=>{}
    );
  }

}
