import { Component, OnInit  } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import {LoginService} from '../services/login.service';
import { logindata } from '../class/signup'
declare var $: any;

//import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myvar:boolean = true;
  letdatax : logindata[];
  constructor(private inflow: LoginService, private router: Router) {
   }
    
 

   public localVar:any;
   showNotification1(from, align, data, colorcode){
     const type = ['success', 'danger'];
     const color = Math.floor((Math.random() * 4) + 1);
     $.notify({
         icon: "notifications",
         message:  data
 
     },{
         type: type[colorcode],
         timer: 2000,
         placement: {
             from: from,
             align: align
         },
         template: '<div data-notify="container" class="col-xl-4 col-lg-4 col-11 col-sm-4 col-md-4 alert alert-{0} alert-with-icon" role="alert">' +
           '<button mat-button  type="button" aria-hidden="true" class="close mat-button" data-notify="dismiss">  <i class="material-icons">close</i></button>' +
           '<i class="material-icons" data-notify="icon">notifications</i> ' +
           '<span data-notify="title">{1}</span> ' +
           '<span data-notify="message">{2}</span>' +
           '<div class="progress" data-notify="progressbar">' +
             '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
           '</div>' +
           '<a href="{3}" target="{4}" data-notify="url"></a>' +
         '</div>'
     });
 }
 


















   btnclk(x,y){
    this.myvar = false;
     console.log(y)
    
    this.inflow.loginuser(x,y)
    .subscribe(
      data =>
      {
        this.letdatax = data;
        console.log('datax' + this.letdatax[0].code)

       switch (parseInt(this.letdatax[0].code)){
        case 1 :{
          this.myvar = true;
          localStorage.setItem("session", "1");
          this.router.navigate(['/dashboard']);

          break; 
        }

        case 2:{
          this.myvar = true;
          let x = "Password incorrect"
          this.showNotification1('bottom','center', x , 1)
           break; 
        }
        case 3:{
          this.myvar = true;
          let y = "Email Incorrect"
          this.showNotification1('bottom','center', y , 1)
          break; 
        }

      }
      }
    )
  
   
  
  }



  ngOnInit() {

   

  }






signup(){
  this.router.navigateByUrl('/signup');
}

}

