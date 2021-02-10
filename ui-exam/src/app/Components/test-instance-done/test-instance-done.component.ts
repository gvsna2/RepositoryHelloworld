import { Component, OnInit } from '@angular/core';
import {AllServicesService} from '../../Services/AllServices/all-services.service';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-test-instance-done',
  templateUrl: './test-instance-done.component.html',
  styleUrls: ['./test-instance-done.component.css']
})
export class TestInstanceDoneComponent implements OnInit {

 
  routeId=0;
  constructor(private service : AllServicesService,private route : Router,private activeRoute: ActivatedRoute) { 

    this.activeRoute.params.subscribe(params=>{
      this.routeId = params['id'];
    })
  }
  testSetup;
  ngOnInit() {
    // console.log(this.routeId);
    
    
    this.service.getAll("testmanagement/testsetup/getadministeredtestaliasnamebyinstanceid?token="+localStorage.getItem('token')+"&instanceId="+this.routeId).subscribe(
      (data)=>{
        // console.log(data)
      if(data['statusCode'] == 1){
        
        this.testSetup=data['instanceTitle']
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
