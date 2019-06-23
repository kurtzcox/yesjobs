import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import {Dashboard, Usermonth, Compdata, jobpost } from '../class/dashboard'
import {LoginService } from '../services/login.service'



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public mycompdata : Compdata[];
   session = localStorage.getItem("session");
 public  letmydata : Usermonth[];
 public  myset1 : any = [];
   letcount:Dashboard[];
   letusercount : number;
   letcompcount : number;
   letjobcount : number;
   letbillcount : number;
  letmytopjob: jobpost[];
   modelA :any = [];

  constructor(private router: Router, private inflow:LoginService) { }
  startAnimationForLineChart(chart){
      let seq: any, delays: any, durations: any;
      seq = 0;
      delays = 80;
      durations = 500;

      chart.on('draw', function(data) {
        if(data.type === 'line' || data.type === 'area') {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if(data.type === 'point') {
              seq++;
              data.element.animate({
                opacity: {
                  begin: seq * delays,
                  dur: durations,
                  from: 0,
                  to: 1,
                  easing: 'ease'
                }
              });
          }
      });

      seq = 0;
  };
  startAnimationForBarChart(chart){
      let seq2: any, delays2: any, durations2: any;

      seq2 = 0;
      delays2 = 80;
      durations2 = 500;
      chart.on('draw', function(data) {
        if(data.type === 'bar'){
            seq2++;
            data.element.animate({
              opacity: {
                begin: seq2 * delays2,
                dur: durations2,
                from: 0,
                to: 1,
                easing: 'ease'
              }
            });
        }
      });

      seq2 = 0;
  };
  ngOnInit() {
      /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */

      

      if(parseInt(this.session) != 1){
        this.router.navigate(['/login']);
      }else{
        console.log("ok")
      }

      this.inflow.top5comp()
      .subscribe(data =>{
        this.mycompdata = data;
        console.log("Data" + this.mycompdata)
      })

      this.inflow.dashcount()
      .subscribe(
        data=>{
          this.letcount = data;
         
          this.letusercount = this.letcount[0].usercount
          this.letjobcount = this.letcount[0].jobcount
          this.letcompcount = this.letcount[0].compcount
          this.letbillcount = this.letcount[0].billcount
          //console.log(this.letjobcount)
        }
      )



        this.inflow.dashcountuser()
        .subscribe
        (
          data =>{
            this.letmydata = data        
            const dataDailySalesChart: any = {
        
              labels: this.letmydata[0].month,
              series: [
                this.letmydata[0].count
              ]
          };
    
         const optionsDailySalesChart: any = {
              lineSmooth: Chartist.Interpolation.cardinal({
                  tension: 0
              }),
              low: 0,
              high:  this.letmydata[0].high, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
              chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
          }
    
          var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
    
          this.startAnimationForLineChart(dailySalesChart);

            }
          
        )
        

      /* ----------==========     Completed Tasks Chart initialization    ==========---------- */

      this.inflow.dashcountuser()
      .subscribe
      (
        data =>{
          this.letmydata = data 
      const dataCompletedTasksChart: any = {
        labels: this.letmydata[0].month,
        series: [
          this.letmydata[0].count
        ]
      };

     const optionsCompletedTasksChart: any = {
          lineSmooth: Chartist.Interpolation.cardinal({
              tension: 0
          }),
          low: 0,
          high: this.letmydata[0].high, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
      }

      var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);

      // start animation for the Completed Tasks Chart - Line Chart
      this.startAnimationForLineChart(completedTasksChart);

    })

      /* ----------==========     Emails Subscription Chart initialization    ==========---------- */
/* ----------==========     Emails Subscription Chart initialization    ==========---------- */

const datawebsiteViewsChart: any  = {
  labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  series: [
    [542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]

  ]
};
const optionswebsiteViewsChart: any = {
    axisX: {
        showGrid: false
    },
    low: 0,
    high: 1000,
    chartPadding: { top: 0, right: 5, bottom: 0, left: 0}
};
var responsiveOptions: any[] = [
  ['screen and (max-width: 640px)', {
    seriesBarDistance: 5,
    axisX: {
      labelInterpolationFnc: function (value) {
        return value[0];
      }
    }
  }]
];
var websiteViewsChart = new Chartist.Bar('#websiteViewsChart', datawebsiteViewsChart, optionswebsiteViewsChart, responsiveOptions);

//start animation for the Emails Subscription Chart
this.startAnimationForBarChart(websiteViewsChart);


this.inflow.top5job()
.subscribe(data => {
this.letmytopjob = data
console.log(this.letmytopjob)
})



  }

}
