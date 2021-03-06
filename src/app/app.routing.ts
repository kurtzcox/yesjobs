import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component'
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SignupComponent } from './signup/signup.component';
import {TestingComponent} from './testing/testing.component';

const routes: Routes =[
 {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },

   {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'signup',
    component: SignupComponent
  },

  {
    path: 'test',
    component: TestingComponent
  },

  {
    path: 'test/:id',
    component: TestingComponent
  },

 {
    path: 'dashboard',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
