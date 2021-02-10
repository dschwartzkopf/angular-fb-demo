// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services

// START - USED SERVICES

// END - USED SERVICES

/**
 * Checkout Component
 */
@Component({
    selector: 'app-checkout',
    templateUrl : './checkout.component.html',
    styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

    constructor(
        private location: Location
        ) {

    }
}
