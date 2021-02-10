// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services

// START - USED SERVICES

// END - USED SERVICES

/**
 * Sign-In Component
 */
@Component({
    selector: 'app-sign-in',
    templateUrl : './sign-in.component.html',
    styleUrls: ['./sign-in.component.css']
})
export class Sign-InComponent {

    constructor(
        private location: Location
        ) {

    }
}
