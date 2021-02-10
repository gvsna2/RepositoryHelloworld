import { Component, OnInit } from '@angular/core';
import{ AllServicesService } from '../../Service/AllServices/all-services.service';
import {Router} from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public status:any;
  public dbName:any;
  public userList:any[];
   totalRecords:any;
   page:number=1; 

   public selCard:any;
 
constructor(private service : AllServicesService,private router : Router) {

  
 }
public tenantActiveCount:any;
public tenantRegistredCount:any;
public recruitertActiveCount:any;
public recruiterRegistredCount:any;
public recruiterDbName:any;
public masterDbName:any;

  getTenantUserCount(){
    this.service.getAll("/dashboard/getuserscount").subscribe(
      (res)=>{
        if(res['statusCode'] == 1){
          console.log(res)
          this.tenantActiveCount=res['activeCount'];
          this.tenantRegistredCount=res['registredCount'];
          this.masterDbName=res['dbName'];
         // console.log(res)
        }else{
          this.tenantActiveCount=res['activeCount'];
          this.recruiterRegistredCount=res['registredCount'];
        }
      },
      (error)=>{
        console.log(error);
      },
      ()=>{}
    );
  }

 

  getRecruiterUserCount(){
    this.service.getAll("/dashboard/getuserscountforrecruiters").subscribe(
      (res)=>{
        if(res['statusCode'] == 1){
         // console.log(res)
          this.recruitertActiveCount=res['activeCount'];
          this.recruiterRegistredCount=res['registredCount'];
          this.recruiterDbName=res['dbName'];
        }else{
          this.recruitertActiveCount=res['activeCount'];
          this.recruiterRegistredCount=res['registredCount'];
        }
      },
      (error)=>{
        console.log(error);
      },
      ()=>{}
    );
  }


  
  public statusMessage: String;
  public succesMessage: boolean = false;
  public failMessage: boolean = false;
getUserDetailes(status:String,dbName:String){
  
  this.failMessage=false;
  this.succesMessage=false;
  this.service.getAll("/dashboard/getallusersdetailes?status='"+status+"'&dbName='"+dbName+"'")
  .subscribe(
    (res)=>{
      if(res['statusCode'] == 1){
        this.succesMessage=true;
        console.log(res['statusMessage']);
        this.userList=res['userDetailes'];
        this.totalRecords=this.userList.length;
      console.log(this.userList)
      }else{
        this.failMessage=true;
        this.statusMessage=res['statusMessage'];
       // console.log(this.userList)
        console.log(res['statusMessage']);
      }
    },(error)=>{
      console.log(error);
    },()=>{

    }
  );
}

public userData:{};
public userName:String;
public testMasterCount:number;
public testInstanceCount:Number;
public testAdminSterCount:Number;
public isFirstTimelogin:String;
public typeOfUser:String;
public email:String;
public lastLogin:String;
public userDbName:String;
public loginActivityMessage:String;
public isTestCreatedOrNot:String;
public domain:String;
public number:String;
public companyWebSiteName:String;
public company:String;
public country:String;
getUserDetailesById(userId:number,tenatdbName:String,domainName:String
  ,phoneNumber:String ,companyWebSite:String,companyName:String,country:String){
    if(tenatdbName == null){
      tenatdbName='ccn_master_db';
      console.log(tenatdbName)
    }
console.log(userId+" "+tenatdbName)
console.log("tenatdbName : "+tenatdbName)
this.service.getAll("/dashboard/getuserdetailesbyid?id="+userId+"&dbName="+tenatdbName)
.subscribe(
  (res)=>{
    if(res['statusCode'] == 1){
     console.log(res)
     this.testMasterCount=res['testMasterCount'];
     this.testInstanceCount=res['testInstanceCount'];
     this.testAdminSterCount=res['testadministeredCount'];
     this.typeOfUser=res['typeOfUser'];
     this.userName=res['userName'];
     this.email=res['userEmail'];
     this.userDbName=res['dbName'];
     this.lastLogin=res['lastLogin'];
     this.loginActivityMessage=res['loginActivityMessage']
     this.isFirstTimelogin=res['firstTimeLogin']
     this.isTestCreatedOrNot=res['testCreatedOrNot'];
     this.domain=domainName;
     this.number=phoneNumber;
     this.companyWebSiteName=companyWebSite;
     this.company=companyName;
     this.country=country;
    }else{
      console.log(res)
    }
  },(error)=>{
    console.log(error);
  },()=>{

  }
);
}

  onSelect(dbName,status,activeCard){
    this.selCard = activeCard
    console.log(  dbName +" "+status);
  
    this.getUserDetailes(status,dbName);
  }
  logOut(){
    this.service.isUserLogOut();
    console.log("log out")
    this.router.navigate(['/login'])
  }

 
  ngOnInit(){

    this.getTenantUserCount();
    this.getRecruiterUserCount();   
    let  elements = document.getElementsByClassName("child");
  }
 

}
