import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AllServicesService } from '../../Service/AllServices/all-services.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service:AllServicesService,private router:Router,private toastr:ToastrService) { }

  ngOnInit(): void {
  }

  statusMessage;
  statusSuccess:boolean=false;
  statusFail:boolean=false;
   invalidLogin = false
   login(data){
    const formdata: FormData = new FormData();
   
    formdata.append("email", data.email)
    formdata.append("password", data.password)
    console.log("formdata :"+formdata)
    this.service.postData("/dashboard/login",formdata).subscribe(
      (data)=>{
        if(data['statusCode'] == 1){
          this.statusSuccess = true;
          this.statusMessage = data["statusMessage"];
          localStorage.setItem("token", data['token']);
          console.log("Login Success");
          
          this.statusMessage = data['statusMessage'];
          
           this.router.navigate(['/dashboard']).then
           (()=>{
            this.toastr.success(data['statusMessage'])
            });
         
        }else{
          this.toastr.error(data['statusMessage']);
          console.log(data['statusMessage'])
        }
      },
      (error)=>{},
      ()=>{}
    );
     console.log(data)
   }
}
