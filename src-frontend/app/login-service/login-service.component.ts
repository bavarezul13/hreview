import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class LoginService {

    authenticated: boolean = false;

    constructor(private httpClient: HttpClient) {}

    authenticate(credentials, callback): void {
        const headers = new HttpHeaders(credentials ? {
            authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password),
            'X-Requested-With': 'XMLHttpRequest'
        } : {});
        console.log("username=", credentials.username);
        console.log("password=", credentials.password);
        this.httpClient.get(`http://localhost:8080/current`, {headers: headers}).subscribe(response => {
            if (response['name']) {
                this.authenticated = true;
            } else {
                this.authenticated = false;
            }
        })
    }
}
