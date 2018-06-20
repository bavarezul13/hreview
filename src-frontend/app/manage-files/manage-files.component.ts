import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer} from '@angular/platform-browser';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Component({
selector:'manage-files',
templateUrl: './manage-files.component.html'
})

export class ManageFilesComponent {

    url: string;

    constructor (
        private _http: HttpClient,
        private _sanitizer: DomSanitizer,
        private _cookie: CookieService
      ) {}
      
    uploadFile(event : any) : void {
        console.log(event.srcElement.files[0]);
        let file : File = event.srcElement.files[0];
        let formData: FormData = new FormData();
        formData.append('file', file, file.name);
        this._http.post(`http://localhost:8080/upload`, formData, {withCredentials:true}).subscribe(response => {
            console.log(response);
        },
      error => console.log("error: ", error));
      };

      downloadFile(): void {
          //console.log('this._cookie', this._cookie.get('XSRF-TOKEN'));
          
          this._http.get('http://localhost:8080/download',{responseType:'blob'}).subscribe(response =>{
              this.url = URL.createObjectURL(response);
          }, error => console.log(error))
      }

}