import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OriginalsComponent } from './originals.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  { 
    path: 'omnoriginal', 
    component: OriginalsComponent 
  },
  {
    path: 'omnoriginal/add',
    component: AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OriginalsRoutingModule { }
