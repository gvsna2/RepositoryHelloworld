import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AllServicesService } from "./../../Services/AllServices/all-services.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 
  constructor(private router:Router,private apiService : AllServicesService) { }
 
  userImage:any;

 

  ngOnInit() {
    this.getUserImage();
  }

  logout(){
    this.apiService.postData('auth/authentication/userlogout?token='+localStorage.getItem('token'),{})
    .subscribe(res=>{

    })
    this.router.navigate(['/tenant-login']);
    localStorage.clear();
  }

  getUsername(){
    return JSON.parse(localStorage.getItem('user')).userName;
  }

  getRoleName(){
    var role = JSON.parse(localStorage.getItem('role'))
    return role.name
  }
  getUserImage(){
   
    this.userImage = localStorage.getItem('userImage')
    if(this.userImage != 'null' ){
      
      return this.userImage;
    }else{
       
     return './../../../assets/images/boy.png'; 
    }
    
  }

}
