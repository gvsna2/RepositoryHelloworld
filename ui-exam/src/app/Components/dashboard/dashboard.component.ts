import { Component, OnInit } from '@angular/core';
import { AllServicesService } from "./../../Services/AllServices/all-services.service" ;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public testInstances:object;
  public administeredTests:object;
  public useRoles:object;
  public permissionList:any[]=[];
  public testsArr:object;
  // [{
  //   testName : 'DevOps Engineer 4+ years',
  //   dat : '16, June',
  //   status : 'Active'
  // },{
  //   testName : 'Senior Test Engineer 6+...',
  //   dat : '22, June',
  //   status : 'Completed'
  // },{
  //   testName : 'Business Development...',
  //   dat : '29, June',
  //   status : 'Active'
  // },{
  //   testName  : 'Python Developer 10+...',
  //   dat : '01, July',
  //   status : 'Draft'
  // }];

  public sectionArr:object;
  // =[{
  //   name : 'Multi Threading',
  //   subCat : 'Java Developer'
  // },{
  //   name : 'Exception Handiling',
  //   subCat : 'Java Developer'
  // },{
  //   name : 'Email Marketing',
  //   subCat : 'Business Development'
  // },{
  //   name : 'Payroll System',
  //   subCat : 'Human Resource'
  // }]

  public reportsArr:object;
  // =[{
  //   name: 'Omprakash',
  //   testTitle: 'Python Developer',
  //   score : '80/100'
  // },
  // {
  //   name: 'Sucharitha',
  //   testTitle: 'Junior Test Engineer',
  //   score : '80/100'
  // },
  // {
  //   name: 'Manikanta',
  //   testTitle: 'HR Executive',
  //   score : '80/100'
  // }]
  public listUsers:object;

  constructor(private apiService : AllServicesService) { }

  ngOnInit() {
    
    this.checkRec();
    this.apiService.getAll('testmanagement/testsetup/dashboard?token='+localStorage.getItem('token'))
    .subscribe(res=>{
      
      if(res['statusCode'] == '1'){
        //  console.log(res);
        if(!this.isRecruiter){
          this.testsArr = res['testSetupResponse'];
          this.testInstances = res['testInstanceResponse'];
        }
        
         this.reportsArr = res['candidateResultResponseDTO'];
         this.administeredTests = res['testConfigurationBasicResponseDTO'];
         this.listUsers = res['userResponseDTO'];         

      }else{
        this.apiService.errorAlert(res['statusMessage'])
      
      }
    },error=>{

    })
    


   
   
    
    
    if(!this.isRecruiter){
      // this.getTests();
      // this.getTestInstances();
    }
   
    // this.getSections();
    // this.getReports();
    // this.getAdministeredTest();
    // this.getUsers();
  }

  getPermissions(){
    this.apiService.getAll('auth/menupermissions/getallpermissions?token='+localStorage.getItem('token'))
      .subscribe(res=>{
          this.permissionList = res['permissionList']
      },error=>{

      })
  }

  getTests(){
    this.apiService.getAll('testmanagement/testsetup/listoftestsetups?token='+localStorage.getItem('token'))
      .subscribe(res=>{
        
        if(res['statusCode'] == '1'){
          this.testsArr = res;
        }else{
          this.apiService.errorAlert(res['statusMessage'])
        }
      },error=>{

      })
  }

  getAdministeredTest(){
    this.apiService.getAll('testmanagement/testconfig/totaltests?token='+localStorage.getItem('token'))
    .subscribe(res=>{
        
        if(res['statusCode'] == '1'){
          this.administeredTests = res;
        }else{
          this.apiService.errorAlert(res['statusMessage'])
        }
    },error=>{

    })
  }

  getTestInstances(){
    this.apiService.getAll('testmanagement/testsetup/listoftestinstances?token='+localStorage.getItem('token'))
      .subscribe(res=>{
        if(res['statusCode'] == '1'){
          this.testInstances = res;
        }else{
          this.apiService.errorAlert(res['statusMessage'])
        }
          
      },error=>{

      })
  }

  getSections(){
    this.apiService.getAll('testmanagement/totalsections?token='+localStorage.getItem('token'))
    .subscribe(res=>{

      if(res['statusCode'] == '1'){
        this.sectionArr = res;
      }else{
        this.apiService.errorAlert(res['statusMessage'])
      }
    },error=>{

    })
  }

  getReports(){
    this.apiService.getAll('reports/result/recentresults?token='+localStorage.getItem('token'))
    .subscribe(res=>{
     
      if(res['statusCode'] == '1'){
        this.reportsArr = res;
      }else{
        this.apiService.errorAlert(res['statusMessage'])
      }
    },error=>{

    })
  }

  getUsers(){
    this.apiService.getAll('auth/user?token='+localStorage.getItem('token'))
    .subscribe(res=>{
      
      if(res['statusCode'] == '1'){
        this.listUsers = res;
      }else{
        // this.apiService.errorAlert(res['statusMessage'])
      }
    },error=>{

    })
  }

  isRecruiter=false;
    checkRec(){
      var roleList = JSON.parse(localStorage.getItem('role'));
      if(roleList.name == 'Recruiter'){
        this.isRecruiter=true
      }
     }
  checkPerm(perm) {
    var menuList = JSON.parse(localStorage.getItem('Permissions'));
    if (menuList.includes(perm)){
      return true;
    }else {
      return false;
    } 
  }


}
