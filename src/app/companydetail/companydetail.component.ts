import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {CompanyService} from '../services/company.service';
export interface clientdetails {
  clientid: number;
  clientname: string;
  jobposted: number;
  vacancy : number;
  active: number;
  shortlisted : number;
  offered : number;
  rejected: number;
  applied: number
}



@Component({
  selector: 'app-companydetail',
  templateUrl: './companydetail.component.html',
  styleUrls: ['./companydetail.component.scss']
})
export class CompanydetailComponent implements OnInit {
id:string;
myclientdata :clientdetails[];
datax = {
  "compid" : 2458
} 
  constructor(private route: ActivatedRoute, private inflow: CompanyService, private router: Router) { }

  ngOnInit() {
     this.id = this.route.snapshot.params.id; // any param name after "params"
      console.log(this.id )
   

  this.inflow.clientdetails(this.datax)
  .subscribe(data=>{
    this.myclientdata = data;
    console.log(this.myclientdata)
  })
  
    
  }

myclient(x){
  this.router.navigate(['/clientdetails/'+ x]);
}

}
