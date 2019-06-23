import { Component, OnInit } from '@angular/core';
import {SignupService} from '../services/signup.service';
import { Signup, newsignup } from '../class/signup'
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  dataforuser : newsignup[];

  constructor(private inflow: SignupService, private router: Router) { }
   notify: string = "";
   
  ngOnInit() {
  }

  public localVar:any;
  showNotification(from, align, data, colorcode){
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


  btn(a, b, c){
    var z = window.btoa(b)

    if (b == c){
      console.log("ok")
     
    this.inflow.postNewuser(a,z)
    .subscribe (
      data => {
        this.dataforuser = data; 
        const x = "user id is created. " + '\n' + this.dataforuser[0].userid;
        //const dx = "user id is created. " + '\n'  + x
        this.showNotification('bottom','center', x, 0)
        this.router.navigate(['/login']);
      }
    )





//this.showNotification('bottom','center', r)

    }else{
      this.notify = "Password doesn't match";
      console.log("Password doesn't match")
      this.showNotification('bottom','center', this.notify, 1)
    }

  }
 

}
