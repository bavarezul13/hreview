import { Component } from '@angular/core';
import { ILocation } from './location';
import { Router } from '@angular/router';

@Component({
    selector: 'display-locations',
    templateUrl: './display-locations.component.html',
    styleUrls: ['./display-locations.component.css']
})
export class DisplayLocationsComponent {

    showImages : boolean = true;
    filteredLocations: ILocation[];
    pageTitle: string = 'Locations list: ';

    constructor(private _router : Router) {
        this.filteredLocations = this.locations;
        this.listFilter = 'Paris';
    }
    
    _listFilter : string;
    get listFilter() : string {
        return this._listFilter;
    }
    set listFilter(listFilter:string) {
        this._listFilter = listFilter;
        this.filteredLocations = this._listFilter ? this.performFilter(this._listFilter) : this.locations;
    }

    performFilter(filterBy : string) :ILocation[] {
        return this.locations.filter((location : ILocation) =>
        location.name.indexOf(filterBy) !== -1);
    }

    locations: ILocation[] = [{
        "locationId":1,
        "locationCode": "lo-1par",
        "name": "Paris",
        "starRating":3.2,
        "distance": 1450,
        "imageUrl": "https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2050/SITours/eiffel-tower-dinner-and-seine-river-cruise-in-paris-459739.jpg"
    },
    {
        "locationId":2,
        "locationCode": "lo-2mac",
        "name":"Machu Pichu",
        "starRating":4.9,
        "distance": 11200,
        "imageUrl" : "https://www.nationalgeographic.com/content/dam/science/photos/000/247/24713.jpg"
    }]

    toggleShowImages() : void {
        this.showImages = !this.showImages;
    }

    goToHomePage() :void {
        console.log("navigating from code");
        this._router.navigate(['/']);
    }

    onRatingClicked(message: string) {
        this.pageTitle += message;
    }
}
