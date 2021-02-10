// Import Libraries
import { Component } from '@angular/core';
import { Location } from '@angular/common';

// Import Services

// START - USED SERVICES

// END - USED SERVICES

/**
 * Register Component
 */
@Component({
    selector: 'app-register',
    templateUrl : './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    constructor(
        private location: Location
        ) {

    }
}
