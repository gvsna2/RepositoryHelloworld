import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { environment } from './../../../environments/environment'

// material
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AllServicesService {
  // test or prod or dev..
  public env="dev";
  public url:string = environment.url;
  // public url:string = "http://"+window.location.hostname+":9880/api/";
  public headerDist: any;
  public requestOptions:any;

  public cfs:boolean=true;
  //test
  public    cfsUrl;
  public cvBankUrl;
  public secretKey;
  public cvBankKey;

  //local 
  //public cfsUrl="http://192.168.20.37:5050";
  // public cfsUrl="https://fileresource.nocheatingdude.com:5050";
 
  //prod
  // public cfsUrl="https://fileresource.nocheatingdude.com:5050";
  // public secretKey="90ab1182312211ea9176e2c535dadfbc";
  // public cvBankUrl="https://cvbank.nocheatingdude.com:4049";
  // public cvBankKey= "6xMdAovWzzC5NMvvp28D6tDhtqO-scBVNdxvgfynu3wPyMcLLbrsvS8KnNShlEmhvnP5gCLPJlwPHXFabvg0iNYe6GawfVghvKRp0yY45h0Lv3K58N5YoCNbIcXla3ymE30jhFtBws-J2Bq0AFMiGT3qcNz5I3S2glNJmcMXtGJhQZMvbTQNuZBC6FT747c38JYbKbcO";

  

  //ncd_146/6060
 // public secretKey="eda487cc27b011ea9176e2c535dadfbc";
  //ncd_prod
  // public secretKey="90ab1182312211ea9176e2c535dadfbc";
  public participantTemplateUrl;
  public questionTemplateUrl;
 


  constructor(private http: HttpClient,private _snackBar: MatSnackBar) {
    
    if(this.env == "test"){
      environment.url="http://"+window.location.hostname+":9880/api/";
      this.cfsUrl="http://14.98.167.101:6060";
      this.cvBankUrl="http://14.98.167.101:3039/cvbank";
      this.secretKey="b4cbbca01fe911ea887f60d819d32822";
      this.cvBankKey="9DBL7HJKEOb5L8roR2KcBxq2SqvcQ8XHTBAlU5nuFpf2ZMahz-nqpug0X4InyhFKJCW7410K0APzEZUOu4KIsKwim9NN5cRV1MROlQE-Qtp24Gb0atYir_PAqaf7LqdvoH8NBGtlA9sKXsRORqMLbEzR6gv7mtd7u6QSgsUQSqluImx50Zp3q25QERi-fAP7i_l-EsSn";
      this.participantTemplateUrl ="/api/fs/v1.0/access/file/ncd-test/2020-03-19/Thu193202012321917196.xlsx?action=download";
      this.questionTemplateUrl="/api/fs/v1.0/access/file/ncd-test/2020-03-19/Thu193202012321918813.xlsx?action=download";
    }
    else if(this.env == "prod"){
      environment.url="https://"+window.location.hostname+":9880/api/";
      this.cfsUrl="https://fileresource.nocheatingdude.com:5050";
      this.secretKey="90ab1182312211ea9176e2c535dadfbc";
      this.cvBankUrl="https://cvbank.nocheatingdude.com:4049";
      this.cvBankKey= "6xMdAovWzzC5NMvvp28D6tDhtqO-scBVNdxvgfynu3wPyMcLLbrsvS8KnNShlEmhvnP5gCLPJlwPHXFabvg0iNYe6GawfVghvKRp0yY45h0Lv3K58N5YoCNbIcXla3ymE30jhFtBws-J2Bq0AFMiGT3qcNz5I3S2glNJmcMXtGJhQZMvbTQNuZBC6FT747c38JYbKbcO";
      this.participantTemplateUrl ="/api/fs/v1.0/access/file/ncd_prod/2020-03-19/Thu1932020114853385476.xlsx?action=download";
      this.questionTemplateUrl="/api/fs/v1.0/access/file/ncd_prod/2020-03-19/Thu1932020114853385476.xlsx?action=download";
    
    }else{

      this.cfsUrl="https://fileresource.nocheatingdude.com:5050";
      this.secretKey="90ab1182312211ea9176e2c535dadfbc";
      // this.cvBankUrl="http://192.168.20.93:3039/cvbank";
      // this.secretKey="b4cbbca01fe911ea887f60d819d32822";
      // this.cvBankKey="9DBL7HJKEOb5L8roR2KcBxq2SqvcQ8XHTBAlU5nuFpf2ZMahz-nqpug0X4InyhFKJCW7410K0APzEZUOu4KIsKwim9NN5cRV1MROlQE-Qtp24Gb0atYir_PAqaf7LqdvoH8NBGtlA9sKXsRORqMLbEzR6gv7mtd7u6QSgsUQSqluImx50Zp3q25QERi-fAP7i_l-EsSn";
      this.cvBankUrl="http://14.98.167.101:3039/cvbank";
      // this.secretKey="b4cbbca01fe911ea887f60d819d32822";
      this.cvBankKey="9DBL7HJKEOb5L8roR2KcBxq2SqvcQ8XHTBAlU5nuFpf2ZMahz-nqpug0X4InyhFKJCW7410K0APzEZUOu4KIsKwim9NN5cRV1MROlQE-Qtp24Gb0atYir_PAqaf7LqdvoH8NBGtlA9sKXsRORqMLbEzR6gv7mtd7u6QSgsUQSqluImx50Zp3q25QERi-fAP7i_l-EsSn";
     
      this.participantTemplateUrl ="/api/fs/v1.0/access/file/ncd-test/2020-03-19/Thu193202012321917196.xlsx?action=download";
      this.questionTemplateUrl="/api/fs/v1.0/access/file/ncd-test/2020-03-19/Thu193202012321918813.xlsx?action=download";
    }
    // test
    // environment.url="http://"+window.location.hostname+":9880/api/";
    //prod
    // environment.url="https://"+window.location.hostname+":9880/api/";


    this.url = environment.url;
    this.headerDist = { 
      "Accept": "application/json"
    }
    this.requestOptions = {
      headers: new HttpHeaders(this.headerDist),
    };



  }



  

  getAllCfs(url) {
    try {
      return this.http.get(this.cfsUrl+ url,this.requestOptions)
    }
    catch (e) {
      // console.log(e, 'CFS get method')
    }
  }

  
    postDataCfs(data) {
      try {
          return this.http.post(this.cfsUrl + "/api/fs/v1.0/upload/", data,{
                  headers: new HttpHeaders({ 
                          "Accept": "application/json",
                          "access-token": this.secretKey
                         }),
                  observe: 'response'
          },)
        }
      catch (e) {
        // console.log(e, 'CFS post method')
      }
    }

     
    getAllCVBank() {
      try {
        return this.http.get(this.cvBankUrl+ "/v1/app/",this.requestOptions)
      }
      catch (e) {
        // console.log(e, 'CFS get method')
      }
    }
    postDataCVBank(data) {
      // console.log(data);
      try {
          return this.http.post(this.cvBankUrl + "/v1/upload/file/",data, {
                  headers: new HttpHeaders({ 
                          "Accept": "application/json",
                          "access-token": this.cvBankKey
                         }),
                  observe: 'response'
          })
        }
      catch (e) {
        // console.log(e, 'CV Bank post method')
      }
    }

getAll(url) {
  try {
    return this.http.get(this.url+ url,this.requestOptions)
  }
  catch (e) {
    // console.log(e, 'get method')
  }
}
  postData(url,data) {
    try {
        return this.http.post(this.url + url, data,this.requestOptions)
      }
    catch (e) {
      // console.log(e, 'post method')
    }
  }
  updateData(url, data) {
    try {
      return this.http.put(this.url + url, data, this.requestOptions)
    }
    catch (e) {
      // console.log(e, 'get method')
    }
  }
  
  deleteData(url) {
    try {
      return this.http.delete(this.url + url,this.requestOptions)
    }
    catch (e) {
      // console.log(e)
    }
  }

  successAlert(data){
    this._snackBar.open(data,'ok',{
      duration:4000,
      panelClass: ['success-snackbar']
    })
  }

  errorAlert(data){
    this._snackBar.open(data,'ok',{
      duration:4000,
      panelClass: ['error-snackbar']
    })
  }

}
