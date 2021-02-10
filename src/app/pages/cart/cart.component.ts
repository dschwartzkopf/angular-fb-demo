// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services

// START - USED SERVICES

// END - USED SERVICES

/**
 * Cart Component
 */
@Component({
    selector: 'app-cart',
    templateUrl : './cart.component.html',
    styleUrls: ['./cart.component.css']
})
export class CartComponent {

    constructor(
        private location: Location
        ) {

    }
}
