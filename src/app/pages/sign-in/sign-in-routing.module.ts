import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sign-InComponent } from './sign-in.component';

const routes: Routes = [
  {
    path: '',
    component: Sign-InComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Sign-InRoutingModule { }
