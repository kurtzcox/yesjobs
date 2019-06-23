import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private httpClient : HttpClient) { }

  loginuser(a,b): Observable<any> {
    let datax = {"email":a, "password" : b}
    return this.httpClient.post("http://127.0.0.1:3000/api/v1/a_login", datax)
  }


  dashcount(): Observable<any> {
    return this.httpClient.get('http://127.0.0.1:3000/api/v1/ad_sec1')
  }


  dashcountuser(): Observable<any> {
   return this.httpClient.get('http://www.mocky.io/v2/5cf5db0f320000e6018ccebf')
 
  }

  top5comp(): Observable<any> {
    return this.httpClient.get('http://www.mocky.io/v2/5cf5ebbd320000250e8ccf01' , {responseType: 'json'})
  
   }

   top5job(): Observable<any> {
    return this.httpClient.get('http://www.mocky.io/v2/5cf6b961320000ec8c8cd48c' , {responseType: 'json'})
  
   }

 }
