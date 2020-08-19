import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChallengerComponent } from './challenger.component';
import { DetailComponent } from './detail/detail.component';
import { DeletedComponent } from './deleted/deleted.component';
import { DeletedetailComponent } from './deletedetail/deletedetail.component';
import { DeleteprogramComponent } from './deleteprogram/deleteprogram.component';
import { DeleteprogramdetailComponent } from './deleteprogramdetail/deleteprogramdetail.component';



const routes: Routes = [
  { 
    path: 'challengers/list', 
    component: ChallengerComponent 
  },
  {
    path: 'challengers/list/detail',
    component: DetailComponent
  },
  {
    path: 'challengers/deleted/list',
    component: DeletedComponent
  },
  {
    path: 'challengers/deleted/list/detail',
    component: DeletedetailComponent
  },
  {
    path: 'challengers/deleted/program',
    component: DeleteprogramComponent
  },
  {
    path: 'challengers/deleted/program/detail',
    component: DeleteprogramdetailComponent
  },
  { path: 'challengers/program', loadChildren: () => import('./program/program.module').then(m => m.ProgramModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengerRoutingModule { }
