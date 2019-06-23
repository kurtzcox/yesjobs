import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {candidatelist} from '../class/company';
import {CompanyService} from '../services/company.service'

@Component({
  selector: 'app-singlejob',
  templateUrl: './singlejob.component.html',
  styleUrls: ['./singlejob.component.scss']
})
export class SinglejobComponent implements OnInit {
mycandidatelist : candidatelist[];
id :string;
  constructor(private route: ActivatedRoute,  private router: Router, private inflow: CompanyService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id; // any param name after "params"
    console.log(this.id )
  }

}
