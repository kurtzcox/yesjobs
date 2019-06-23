import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {CompanydetailComponent } from './companydetail/companydetail.component'
import {
  AgmCoreModule
} from '@agm/core';
import {SignupService} from './services/signup.service';
import {LoginService} from './services/login.service';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { TestingComponent } from './testing/testing.component';
import { CompanyComponent } from './company/company.component';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,

    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AutocompleteLibModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })

  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    SignupComponent,
    TestingComponent
   
   
    
    

  ],
   entryComponents: [
        LoginComponent
    ],
  providers: [SignupService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
