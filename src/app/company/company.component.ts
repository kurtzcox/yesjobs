import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Company, sorting1, pagination, listrow, companyname} from '../class/company';
import {CompanyService} from '../services/company.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  myControl = new FormControl();
letpage : pagination[];
letcomdata : Company[];
mylist : sorting1[];
mglist : string = 'Select One'
mylistrow :  listrow[];
steps = 1;
public roller : boolean = true;
public tblr : boolean = true;
myord = 1;
myrow = 50;
myoffset = 0;
datam = 1;
rowsdata = {
  "rows" : this.myrow
}
keyword = 'name';
mycomapny :companyname [] ;


 datax = {
  "odr": this.myord,
  "rowcount": this.myrow,
  "offset": this.myoffset
}
  constructor(private route : ActivatedRoute, private router : Router, private inflow: CompanyService ) { }








 
  selectEvent(item) {
    // do something with selected item
     console.log(item)
  }

  onChangeSearch(search: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
    //console.log(search)
  }

  onFocused(e) {
    // do something
   // console.log(e)
  }

















  ngOnInit() {

  
    this.inflow.rowlist()
    .subscribe(data=>{
this.mylistrow = data



    })
   
    this.inflow.companyname()
    .subscribe(data=>{
     this.mycomapny = data
     console.log(this.mycomapny)
  


    this.inflow.sortlist()
    .subscribe(data=> {
      this.roller = false;
      this.tblr = true;
      this.mylist = data 
      console.log(this.mylist)
      // 
      this.roller = true;
      this.tblr = false;

      this.inflow.paginationurl(this.rowsdata)
      .subscribe(data => {
        this.letpage = data
        console.log(this.letpage)

        this.inflow.companydata(this.datax)
        .subscribe(data =>{
          this.letcomdata = data
          this.roller = false;
          this.tblr = false;




        })


      })
  
  
  
    })
    })


  }
  idx:string;
mylick(x){
  this.idx = x
  this.router.navigate(['/companydetails/' + this.idx]);
}

filterForeCasts(x){
  this.myord = x
  this.datax = {


    
    "odr":this.myord ,
    "rowcount": this.myrow,
    "offset": this.myoffset
  }
  this.inflow.companydata(this.datax)
  .subscribe(data =>{
    this.letcomdata = data
   
  })
 
}



pagegina(x, y){
  this.roller = true;
     
  this.myoffset  = x;
  this.steps = y;
  this.datax = {

    
    "odr": this.myord,
    "rowcount": this.myrow,
    "offset": this.myoffset
  }
  this.inflow.companydata(this.datax)
  .subscribe(data =>{
    this.letcomdata = data
    this.roller = false;
   
  })
 

}


listrow2x(x){
  this.myrow = x;
  this.rowsdata = {
    "rows" : x
  }



this.datax = {

    
  "odr": this.myord,
  "rowcount": x,
  "offset": this.myoffset
}


this.inflow.paginationurl(this.rowsdata)
.subscribe(data => {
  this.letpage = data
  console.log(this.letpage)

  this.inflow.companydata(this.datax)
  .subscribe(data =>{
    this.letcomdata = data
    this.roller = false;
    this.tblr = false;
  })


})
   

}


mycompdetail(x){
  this.router.navigate(['/companydetails/'+ x]);
}


}
