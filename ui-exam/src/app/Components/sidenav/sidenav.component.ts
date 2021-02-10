import { Component, OnInit } from '@angular/core';
import { AllServicesService } from "./../../Services/AllServices/all-services.service" ;
import { Router } from '@angular/router';

declare var $;
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  testPerm:boolean = this.disableTestManager();
  evalPerm:boolean = this.disableEvaluator(); 

  rolesPermArr:any[]=[this.testPerm,this.evalPerm];

  listRoles:object; 
  color:any = 'primary'
  TestAccordian:boolean;
  constructor(private apiService : AllServicesService) { }

  ngOnInit() {
    this.getRoles();
    this.checkRec();
  }

  disableAdmin(){
    var adminRole:any[] = JSON.parse(localStorage.getItem('Permissions'));
    return true;
  }

  disableTestManager(){
    var adminRole:any[] = JSON.parse(localStorage.getItem('Permissions'));
    if(adminRole.includes('TestManagement')){
      return true;
    }else{
      return false;
    }
  }
  disableEvaluator(){
    var adminRole:any[] = JSON.parse(localStorage.getItem('Permissions'));
    if(adminRole.includes('EvaluateManagement')){
      return true;
    }else{
      return false
    }
  }

  isSuperUser(){
    var superUser = localStorage.getItem('isSuper')
    if(superUser == "1")
      return true;
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

  getRoles(){
    this.apiService.getAll('auth/role?token='+localStorage.getItem('token'))
    .subscribe(res=>{
      this.listRoles = res;
    },error=>{

    })
  }

  updateRoles(roleId,addPermBool){
    var role = JSON.parse(localStorage.getItem('role'))
    if(!addPermBool){
     var bool =  confirm("Do you want to add permission");
     if(bool){
       var roleIds = [];

       if(roleId == '4'){
        if(this.rolesPermArr[0]){
          roleIds.push(3)
         }
         roleIds.push(4)
         
      }else if(roleId == '3'){
        roleIds.push(3)
        if(this.rolesPermArr[1]){
          roleIds.push(4)
         }
      }

      //  if(this.rolesPermArr[0] == true){
      //   roleIds.push(3)
      //  }
      //  if(this.rolesPermArr[1] == true){
      //   roleIds.push(4)
      //  }

      this.apiService.postData('auth/authentication/roleupdateforadmin?token='+localStorage.getItem('token')+'&roleId='+role.id+'&roleIds='+roleIds.join(','),{})
      .subscribe(res=>{
        if(res['statusCode'] == '1'){
          this.getUpdatedPermissions()
          this.apiService.successAlert(res['statusMeaasge'])
        }else{
          this.apiService.errorAlert(res['statusMeaasge'])
        }
      })
     }else{
       return false;
     }
    }else{

      var roleIds = [];
      if(roleId == '4'){
        if(this.rolesPermArr[0]){
          roleIds.push(3)
         }
      }else if(roleId == '3'){
        if(this.rolesPermArr[1]){
          roleIds.push(4)
         }
      }
      
      // if(this.rolesPermArr[0] = true){
      //  roleIds.push(3)
      // }
      // if(this.rolesPermArr[1] = true){
      //  roleIds.push(4)
      // }
      this.apiService.postData('auth/authentication/roleupdateforadmin?token='+localStorage.getItem('token')+'&roleId='+role.id+'&roleIds='+roleIds.join(','),{})
      .subscribe(res=>{
        if(res['statusCode'] == '1'){
          this.getUpdatedPermissions()
          this.apiService.successAlert(res['statusMeaasge'])
        }else{
          this.apiService.errorAlert(res['statusMeaasge'])
        }
      })
    }
   
  }
  getUpdatedPermissions(){
    var user = JSON.parse(localStorage.getItem('user'))
    // console.log(user)
    this.apiService.getAll('auth/user/getpermissionsbyrole?token='+localStorage.getItem('token')+'&userId='+user.userId)
      .subscribe(res=>{
        if(res["statusCode"] == '1'){
          var permissions:any[] = res['permissionsbyrole'];
          var permList = [];
          permissions.forEach(item=>{
            permList.push(item['menuName'])
          })
          localStorage.setItem('Permissions',JSON.stringify(permList))
        }
         
      },error=>{

      })
  }



}
