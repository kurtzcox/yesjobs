import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpParams, HttpHeaders} from '@angular/common/http'
import 'rxjs/add/observable/of';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
url: string = 'http://127.0.0.1:3000/api/v1/'

list: any = [
  {"sort" : "Highest Job Post", "value" : 1 },
  {"sort" : "Lowest Job Post", "value" : 2 },
  {"sort" : "Highest Vacancies", "value" : 3 },
  {"sort" : "Lowest Vacancies", "value" : 4 },
  {"sort" : "Highest Open Position", "value" : 5 },
  {"sort" : "Lowest Open Position", "value" : 6 },
  {"sort" : "Newest Company", "value" : 9 },
  {"sort" : "Oldest Company", "value" : 10 }
]

listrow : any =  [
{"list": 5, "value": 5},
{"list": 10, "value": 10},
{"list": 20, "value": 20},
{"list": 50, "value": 50},
{"list": 100, "value": 100}
] 






headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');

  constructor(private httpClient :HttpClient ) { }


  companydata(data): Observable<any> {
   
    return this.httpClient.post(this.url+ 'companylist' , data, {headers: this.headers})
  }


  sortlist(): Observable<any[]> {
    return Observable.of(this.list);
    
  }

  rowlist(): Observable<any[]> {
    return Observable.of(this.listrow);
    
  }


  paginationurl(data): Observable<any> {
   
    return this.httpClient.post(this.url+ 'pagination' , data,  {headers: this.headers})
  }


  
  companyname(): Observable<any> {
   
    return this.httpClient.get<any[]>(this.url+ 'companynames')
  }

  clientdetails(data): Observable<any> {
    return this.httpClient.post(this.url + 'clientlist' , data, {headers: this.headers})
  }

  clientjobdata(data): Observable<any>{
    return this.httpClient.post(this.url + 'clientjobdata', data, {headers: this.headers})
  }

  candidatelist(data): Observable<any> {
    return this.httpClient.post(this.url, data, {headers: this.headers})
  }

}
