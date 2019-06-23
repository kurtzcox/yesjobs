import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  

  constructor(private httpClient : HttpClient) { }

  getusers(x):Observable<any>{
    let params1 = new HttpParams().set('userid',x)
    return this.httpClient.get("http://127.0.0.1:3000/api/v1/test103", {params:params1})
  //return this.httpClient.get("http://127.0.0.1:3000/api/v1/test102/" + x)

   }

   getallusers():Observable<any>{
   // let params1 = new this.HttpParams().set('userid',"1")
   let params1 = new HttpParams().set('userid',"1")
    return this.httpClient.get("http://127.0.0.1:3000/api/v1/test103", {params:params1})
     }
 

     postNewuser(a,b): Observable<any> {
       let datax = {"email":a, "password" : b}
       return this.httpClient.post("http://127.0.0.1:3000/api/v1/a_signup", datax)
     }


}
