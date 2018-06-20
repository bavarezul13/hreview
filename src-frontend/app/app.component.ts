import { Component } from '@angular/core';
import { LoginService } from './login-service/login-service.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private loginService: LoginService, private http: HttpClient, private router: Router) {
    //this.loginService.authenticate(undefined, undefined);
  }

  logout() {
    this.http.post('logout', {}).subscribe(response => {
        console.log(response);
    }, error => {
      console.log(error);
    }, () => {
      console.log("finally");
      this.loginService.authenticated = false;
      this.router.navigateByUrl('/login');
    });
  }
}
