import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { CheckoutRoutingModule } from './checkout-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    CheckoutComponent
  ]
})
export class CheckoutModule { }
