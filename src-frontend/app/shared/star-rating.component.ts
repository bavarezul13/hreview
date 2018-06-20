import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'star-rating',
    templateUrl: './star-rating.component.html',
    styles: [`.crop {overflow: hidden;}`,'div {cursor: pointer}']
})

export class StarRating implements OnChanges{
    
    @Input() rating: number;
    starWidth : number;
    @Output() ratingClicked : EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 86/5;
    }

    onClick() : void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }
}