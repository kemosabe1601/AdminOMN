import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BractersComponent } from './bracters.component';
import { BractersconfigComponent } from './bractersconfig/bractersconfig.component';


const routes: Routes = [
  { 
    path: '', 
    component: BractersComponent 
  },
  {
    path: 'bracters/config',
    component: BractersconfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BractersRoutingModule { }
