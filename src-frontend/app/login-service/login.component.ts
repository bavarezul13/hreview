import { Component } from "@angular/core";
import { LoginService } from "./login-service.component";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {

    credentials = {username: '', password: ''};

    constructor(private loginService: LoginService, private http: HttpClient, private router: Router) {}

    login() : void {
        console.log(this.credentials)
        this.loginService.authenticate(this.credentials, () => {
            this.router.navigateByUrl('/');
        });
    }
}