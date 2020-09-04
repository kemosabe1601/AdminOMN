import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChallengerprogramComponent } from './challengerprogram.component';
import { DetailComponent } from './detail/detail.component';
import { DeleteComponent } from './delete/delete.component';
import { DeletedetailComponent } from './deletedetail/deletedetail.component';
import { DeleteprogramComponent } from './deleteprogram/deleteprogram.component';
import { DeleteprogramdetailComponent } from './deleteprogramdetail/deleteprogramdetail.component';


const routes: Routes = [
  { 
    path: 'challengerprogram/list', 
    component: ChallengerprogramComponent 
  },
  {
    path: 'challengerprogram/list/detail',
    component: DetailComponent
  },
  {
    path: 'challengerprogram/deleted/list',
    component: DeleteComponent
  },
  {
    path: 'challengerprogram/deleted/list/detail',
    component: DeletedetailComponent
  },
  {
    path: 'challengerprogram/deleted/program',
    component: DeleteprogramComponent
  },
  {
    path: 'challengerprogram/deleted/program/detail',
    component: DeleteprogramdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengerprogramRoutingModule { }
