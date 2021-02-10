import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AllServicesService {

  public url:string = environment.url;
  public headerDist: any;
  public requestOptions:any;

  constructor(private http: HttpClient) { 
    this.url = environment.url;
    this.headerDist = { 
      "Accept": "application/json"
    }
    this.requestOptions = {
      headers: new HttpHeaders(this.headerDist),
    };

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
        return this.http.post(this.url + url, data)
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

  isUserLogin(){
    if(localStorage.getItem("token")){
      return true;
    }
    else {
      return false
    }
 }
  isUserLogOut(){
    localStorage.clear()
  }
  
}
