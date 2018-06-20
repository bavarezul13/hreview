import { DisplayUsersService } from './display-users.service';
import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-display-users-page',
  template: `
  <div>
    <button (click)="getTestProfile()">Load profile</button>
  </div>
  <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">email</th>
      <th scope="col">username</th>
    </tr>
  </thead>
  <tbody>
    <tr *ngFor='let user of users'>
      <td>{{user.email}}</td>
      <td>{{user.name}}</td>
    </tr>
  </tbody>
</table>
  `
})
export class DisplayUsersComponent {
  users : Array<User> = new Array();
  constructor(private displayUserService: DisplayUsersService) {}

  private getTestProfile = function() {
	  this.displayUserService.getTestProfile().subscribe(response => {
      console.log("response: ", response)
      this.users = response;
  },
error => console.log("error: ", error));
}

}
