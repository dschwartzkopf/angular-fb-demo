import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Plans &amp; PricingComponent } from './plans &amp; pricing.component';

const routes: Routes = [
  {
    path: '',
    component: Plans &amp; PricingComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Plans &amp; PricingRoutingModule { }
