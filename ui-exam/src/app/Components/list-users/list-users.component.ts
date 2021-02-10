import { Component, OnInit } from '@angular/core';

import { AllServicesService } from "./../../Services/AllServices/all-services.service" ;
import { BlockUI, NgBlockUI } from 'ng-block-ui';


import $ from "jquery";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  public userId:Number;
  public userDetailes:any[]=[];

  @BlockUI() blockUI: NgBlockUI;
  public selectedRoles:any[]=[];
  public color:any = 'primary';
  public useRoles:object;
  public usersList: any[] = [];

  public listUsers:object;
  public listRoles:object;

  constructor(private apiService : AllServicesService) {
    this.blockUI.stop();
   }

  ngOnInit() {
    this.getUsers();
    this.getRoles();

    var superUser = localStorage.getItem('isSuper')
    var roleSelect = localStorage.getItem('isRoleSelected');

    if(superUser == '1' && roleSelect =='false'){
      
      document.getElementById('perm_modal').click();
      // this.getPermissions();
    }
   
    
  }

  openModal(i){
    if((i+1)%4 == 0 || (i+1)%3 == 0){
      // console.log(window.innerWidth)
      $('.hover_panel'+i).css("left", "-300px");
    }
    $('.hover_panel'+i).show();
  }
  closeModal(i){
    $('.hover_panel'+i).hide();
  }

  getUsers(){
    this.apiService.getAll('auth/user?token='+localStorage.getItem('token'))
    .subscribe(res=>{
      this.listUsers = res;
    },error=>{

    })
  }
  getRoles(){
    // this.blockUI.start('Please Wait ...');
    this.apiService.getAll('auth/role?token='+localStorage.getItem('token'))
    .subscribe(res=>{
      // this.blockUI.stop();
      this.listRoles = res;
      this.useRoles = res;
    },error=>{
      // this.blockUI.stop();
    })
  }

  createUser(newUser:NgForm){
    this.blockUI.start('Please Wait ...');
    var user = newUser.value;
    var querySring = Object.keys(user).map(key=>key + '=' + user[key]).join('&');
    this.apiService.postData('auth/user/createuser?'+querySring+'&token='+localStorage.getItem('token')+'&managerId='+JSON.parse(localStorage.getItem('user')).userId,{})
    .subscribe(res=>{
        if(res['statusCode'] == 1){
          this.blockUI.stop()
        document.getElementById('closeUser').click();
        newUser.reset();
        this.getUsers();
        this.apiService.successAlert(res['statusMessage'])
      }else{
        this.blockUI.stop()
        this.apiService.errorAlert(res['statusMessage'])
        this.blockUI.stop()
      }
    },error=>{
      this.blockUI.stop()
    })
  }

  selectRole(roleId){
    if(roleId){
      var ind = this.selectedRoles.indexOf(roleId);
      if(ind < 0){
        this.selectedRoles.push(roleId)
      }else{
        this.selectedRoles.splice(ind,1)
      }
    }
  }

  updateRoles(){
    this.selectedRoles.sort((a,b)=>{
      return a-b;
    })
    // console.log(this.selectedRoles)
    var role = JSON.parse(localStorage.getItem('role'))
    if(!this.selectedRoles.length){
      this.apiService.errorAlert('Please Select Atleast One Role')
      return false;
    }
    this.apiService.postData('auth/authentication/roleupdateforadmin?token='+localStorage.getItem('token')+'&roleId='+role.id+'&roleIds='+this.selectedRoles.join(','),{})
      .subscribe(res=>{
        if(res['statusCode'] == '1'){
          document.getElementById('close_perm_modal').click()
          this.selectedRoles = [];
          this.apiService.successAlert(res['statusMeaasge'])
          this.getUpdatedPermissions();
        }else{
          this.selectedRoles = []
          this.apiService.errorAlert(res['statusMeaasge'])
        }
      })
  }

  getUpdatedPermissions(){
    var user = JSON.parse(localStorage.getItem('user'))
    this.apiService.getAll('auth/user/getpermissionsbyrole?token='+localStorage.getItem('token')+'&userId='+user.userId)
      .subscribe(res=>{
        if(res["statusCode"] == '1'){
          var permissions:any[] = res['permissionsbyrole'];
          var permList = [];
          permissions.forEach(item=>{
            permList.push(item['menuName'])
          })
          localStorage.setItem('Permissions',JSON.stringify(permList))
          localStorage.setItem('isRoleSelected','true')
        }
 
      },error=>{

      })
  }

  getUserDetailesById(userId){
    // console.log(userId)
    this.apiService.getAll("auth/user/getuserbyid?userId="+userId+"&token="+localStorage.getItem('token')+"")
    .subscribe(
      (data)=>{
        if(data['statusCode'] == 1){
          // console.log(data)
          this.userDetailes=data['userById'];
          // console.log(this.userDetailes);
        }
      },(error)=>{
        // console.log(error);
      },()=>{

      }
    );
  }

  editUser(newUser:NgForm){
    var user = newUser.value;
    var queryString = Object.keys(user).map(key=>key + '=' + user[key]).join('&');
    // console.log(user.userId)
    this.apiService.postData('auth/user/updateuser?'+queryString+'&token='+localStorage.getItem('token'),{})
    .subscribe(
      (data)=>{
        if(data['statusCode'] == 1){
          newUser.reset();
          this.apiService.successAlert(data['statusMessage'])
          this.ngOnInit();
        }else{
          this.apiService.errorAlert(data['statusMessage'])
        }
      },(error)=>{
        // console.log(error);
      },()=>{
        this.getUserDetailesById(user.userId);
      }
    );
  }


  deleteUser(userId){
    this.userId=userId;
    // console.log(userId)
  }
  confirmDeleteUser(){
    this.apiService.postData("auth/user/deleteuser?userId="+this.userId+"&token="+localStorage.getItem('token')+"",{})
    .subscribe(
      (res)=>{
        if(res['statusCode'] == 1){
          // console.log(res)
          this.apiService.successAlert(res['statusMessage']);
          // window.location.reload();
          document.getElementById('delete_modal').click();
          this.getUsers();
        }else{
          this.apiService.errorAlert(res['statusMessage']);
        }
      },(error)=>{
        // console.log(error);
      },()=>{
        this.getUsers();
      }
    );
  }

  preventDef(event){
    event.preventDefault();
  }


}
