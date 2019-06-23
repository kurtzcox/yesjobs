import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {clientjobdata} from '../class/company';
import {CompanyService} from '../services/company.service'

@Component({
  selector: 'app-clientdetails',
  templateUrl: './clientdetails.component.html',
  styleUrls: ['./clientdetails.component.scss']
})
export class ClientdetailsComponent implements OnInit {
  id : string;
  myjoblist : clientjobdata[];
  constructor(private route: ActivatedRoute,  private router: Router, private inflow: CompanyService) { }

  datax = {
    "clientid" : this.id
  }


  ngOnInit() {

    this.id = this.route.snapshot.params.id; // any param name after "params"
    console.log(this.id )
    this.datax = {
     
      "clientid": this.id
    }
  

    this.inflow.clientjobdata(this.datax)
    .subscribe(data =>{
 this.myjoblist = data;
    })

  }




}
