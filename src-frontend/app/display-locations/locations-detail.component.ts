import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'locations-detail',
    templateUrl: './locations-detail.component.html',
})

export class LocationsDetailComponent implements OnInit {

    pageTitle : string = "Location id: "

    constructor(private _route: ActivatedRoute) {
        console.log(this._route.snapshot.paramMap.get('id'))
    }

    ngOnInit(): void {
        let id = +this._route.snapshot.paramMap.get('id');
        this.pageTitle += `${id}`;
    }

}