import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { DisplayUsersService } from './display-users/display-users.service';
import { DisplayLocationsComponent } from './display-locations/display-locations.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { HttpClientModule } from '@angular/common/http';
import { LocationGuardService } from './display-locations/location-guard.service.service';
import { LocationsDetailComponent } from './display-locations/locations-detail.component';
import { StarRating } from './shared/star-rating.component';
import { AppRoutingModuleModule } from './app-routing-module/app-routing-module.module';
import { ManageFilesComponent } from './manage-files/manage-files.component';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { LoginService } from './login-service/login-service.component';
import { LoginComponent } from './login-service/login.component';

@NgModule({
  declarations: [
    AppComponent, 
    DisplayUsersComponent, 
    DisplayLocationsComponent, 
    ConvertToSpacesPipe,
    LocationsDetailComponent,
    StarRating,
    ManageFilesComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModuleModule
  ],
  providers: [DisplayUsersService, LocationGuardService, CookieService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
