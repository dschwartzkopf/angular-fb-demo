import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Plans &amp; PricingComponent } from './plans &amp; pricing.component';
import { Plans &amp; PricingRoutingModule } from './plans &amp; pricing-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    Plans &amp; PricingRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    Plans &amp; PricingComponent
  ]
})
export class Plans &amp; PricingModule { }
