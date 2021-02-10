import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sign-InComponent } from './sign-in.component';
import { Sign-InRoutingModule } from './sign-in-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    Sign-InRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    Sign-InComponent
  ]
})
export class Sign-InModule { }
