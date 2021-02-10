import { Component, OnInit } from '@angular/core';
import { AllServicesService } from "./../../Services/AllServices/all-services.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  testPerm: boolean = this.disableTestManager();
  evalPerm: boolean = this.disableEvaluator();

  rolesPermArr: any[] = [this.testPerm, this.evalPerm];
  public color: any = 'primary';
  public useRoles: object;
  isEdit: boolean;

  constructor(private apiService: AllServicesService, private route: Router) { }

  public userData: any[] = [];
  public userId;

  getRoles() {
    // this.blockUI.start('Please Wait ...');
    this.apiService.getAll('auth/role?token=' + localStorage.getItem('token'))
      .subscribe(res => {
        // this.blockUI.stop();
        // this.listRoles = res;
        this.useRoles = res;
      }, error => {
        // this.blockUI.stop();
      })
  }

  getUserDetailesById() {
    this.apiService.getAll("auth/user/getuserbyid?userId=" + localStorage.getItem('userId') + "&token=" + localStorage.getItem('token')).subscribe(
      (data) => {

        if (data["statusCode"] == 1) {
          // console.log(data)
          this.userData = data["userById"]
          this.userId = this.userData[0].userId;
          if (this.userData[0].department == 'null') {
            this.userData[0].department = '';
          }
          if (this.userData[0].designation == 'null') {
            this.userData[0].designation = '';
          }
          // console.log(this.userId)

        } else {
          // console.log(data['statusMessage'])
        }
      },
      (error) => {
        // console.log(error)
      },
      () => { }
    );
  }
  selectFile = null;
  onFileSelected(event) {
    // console.log(event)
    this.selectFile = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append("token", localStorage.getItem('token'))
    formData.append('files', this.selectFile);

    if(this.apiService.cfs){
      
      var cfsformData: any = new FormData();
     // cfsformData.append("access-token",this.service.secretKey);
      cfsformData.append("files",this.selectFile);
      this.apiService.postDataCfs(cfsformData).subscribe(
        res=>{
          // console.log(res);
          if(res.status==200){
            formData.append("cfsId",res.body[0].id);
            formData.append("cfsViewURL",res.body[0].selfLink.view);
            formData.append("cfsDownloadURL",res.body[0].selfLink.download);
            this.apiService.postData("notification/cfs/user/profilepic",formData)
           .subscribe(
      (res)=>{
        if(res['statusCode'] ==1){
          this.getUserDetailesById();
          // console.log(res['statusMessage'])
         localStorage.setItem('userImage',res['imageViewurl']);
       // console.log(res['imageViewurl'])
          this.apiService.successAlert(res['statusMessage'])
        }else{
          // console.log(res['statusMessage'])
          this.apiService.errorAlert(res['statusMessage'])
        }
      },(error)=>{
        // console.log(error)
      },()=>{

      }
    );


          }else{
            this.apiService.errorAlert(this.selectFile.name+"Upload Failed");
          }

        },
        error=>{
          // console.log(error);
        },
        ()=>{

        }
      );


      

    }else{
      formData.append('files', this.selectFile);
      this.apiService.postData("notification/image/user/profilepic",formData)
    .subscribe(
      (res)=>{
        if(res['statusCode'] ==1){
          this.getUserDetailesById();
          // console.log(res['statusMessage'])
          this.apiService.successAlert(res['statusMessage'])
        }else{
          // console.log(res['statusMessage'])
          this.apiService.errorAlert(res['statusMessage'])
        }
      },(error)=>{
        // console.log(error)
      },()=>{

      }
    );


    }

    
    }

  editUser(data) {
    // console.log(this.selectFile)

    const formData: FormData = new FormData();
    formData.append("userId", data.userId);
    formData.append("userFirstName", data.userFirstName);
    formData.append("userLastName", data.userLastName);
    formData.append("userEmail", data.userEmail);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("roleId", data.roleId);
    formData.append("token", localStorage.getItem('token'))
    formData.append('designation', data.designation);
    formData.append('department', data.department);
   // formData.append('userdpUpload', this.selectFile);

    var userInfo = data;

    this.apiService.postData("auth/user/updateuser", formData).subscribe(
      (data) => {
        // console.log(data)
        if (data['statusCode'] == 1) {
          this.getUserDetailesById();
          this.isEdit = false;
          // console.log(data['statusMessage'])
          var user = JSON.parse(localStorage.getItem('user'))
          
          user.userName = userInfo['userFirstName'] + ' ' + userInfo['userLastName']
          localStorage.setItem('user', JSON.stringify(user))

          this.route.navigate(['settings']).then(
            () => {
              this.apiService.successAlert(data['statusMessage'])

            }
          );

        } else {
          // console.log(data['statusMessage'])
          this.route.navigate(['settings']).then(
            () => {
              this.apiService.errorAlert(data['statusMessage'])
            }
          );
        }
      },
      (error) => {
        // console.log(error)
      },
      () => { }
    );
  }

  ngOnInit() {
    this.getUserDetailesById();
    this.getRoles();
  }

  editUserDet() {
    this.isEdit = true;
  }
  cancelEdit() {
    this.isEdit = false;
  }

  disableTestManager() {
    var adminRole: any[] = JSON.parse(localStorage.getItem('Permissions'));
    if (adminRole.includes('TestManagement')) {
      return true;
    } else {
      return false;
    }
  }
  disableEvaluator() {
    var adminRole: any[] = JSON.parse(localStorage.getItem('Permissions'));
    if (adminRole.includes('EvaluateManagement')) {
      return true;
    } else {
      return false
    }
  }

  updateRoles(roleId, addPermBool) {
    var role = JSON.parse(localStorage.getItem('role'))
    if (!addPermBool) {
      var bool = confirm("Do you want to add permission");
      if (bool) {
        var roleIds = [];

        if (roleId == '4') {
          if (this.rolesPermArr[0]) {
            roleIds.push(3)
          }
          roleIds.push(4)

        } else if (roleId == '3') {
          roleIds.push(3)
          if (this.rolesPermArr[1]) {
            roleIds.push(4)
          }
        }

        //  if(this.rolesPermArr[0] == true){
        //   roleIds.push(3)
        //  }
        //  if(this.rolesPermArr[1] == true){
        //   roleIds.push(4)
        //  }

        this.apiService.postData('auth/authentication/roleupdateforadmin?token=' + localStorage.getItem('token') + '&roleId=' + role.id + '&roleIds=' + roleIds.join(','), {})
          .subscribe(res => {
            if (res['statusCode'] == '1') {
              this.getUpdatedPermissions()
              this.apiService.successAlert(res['statusMeaasge'])
            } else {
              this.apiService.errorAlert(res['statusMeaasge'])
            }
          })
      } else {
        return false;
      }
    } else {

      var roleIds = [];
      if (roleId == '4') {
        if (this.rolesPermArr[0]) {
          roleIds.push(3)
        }
      } else if (roleId == '3') {
        if (this.rolesPermArr[1]) {
          roleIds.push(4)
        }
      }

      // if(this.rolesPermArr[0] = true){
      //  roleIds.push(3)
      // }
      // if(this.rolesPermArr[1] = true){
      //  roleIds.push(4)
      // }
      this.apiService.postData('auth/authentication/roleupdateforadmin?token=' + localStorage.getItem('token') + '&roleId=' + role.id + '&roleIds=' + roleIds.join(','), {})
        .subscribe(res => {
          if (res['statusCode'] == '1') {
            this.getUpdatedPermissions()
            this.apiService.successAlert(res['statusMeaasge'])
          } else {
            this.apiService.errorAlert(res['statusMeaasge'])
          }
        })
    }

  }

  getUpdatedPermissions() {
    var user = JSON.parse(localStorage.getItem('user'))
    // console.log(user)
    this.apiService.getAll('auth/user/getpermissionsbyrole?token=' + localStorage.getItem('token') + '&userId=' + user.userId)
      .subscribe(res => {
        if (res["statusCode"] == '1') {
          var permissions: any[] = res['permissionsbyrole'];
          var permList = [];
          permissions.forEach(item => {
            permList.push(item['menuName'])
          })
          localStorage.setItem('Permissions', JSON.stringify(permList))
        }

      }, error => {

      })
  }

  isSuperUser() {
    var superUser = localStorage.getItem('isSuper')
    if(superUser == "1")
      return true;
  }

}
