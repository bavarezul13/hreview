import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LocationGuardService } from '../display-locations/location-guard.service.service';
import { LocationsDetailComponent } from '../display-locations/locations-detail.component';
import { DisplayLocationsComponent } from '../display-locations/display-locations.component';
import { DisplayUsersComponent } from '../display-users/display-users.component';
import { ManageFilesComponent } from '../manage-files/manage-files.component';
import { LoginComponent } from '../login-service/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([{ path: 'locations', component: DisplayLocationsComponent },
    { path: 'locations/:id', canActivate:[LocationGuardService], component: LocationsDetailComponent },
  { path: 'users', component: DisplayUsersComponent},
  { path: 'files', component: ManageFilesComponent},
  { path: 'login', component: LoginComponent}], {useHash: true},
)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModuleModule { }
