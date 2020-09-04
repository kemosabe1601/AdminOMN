import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadprogramComponent } from './uploadprogram.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailComponent } from './detail/detail.component';
import { DeletedetailComponent } from './deletedetail/deletedetail.component';
import { DeleteprogramComponent } from './deleteprogram/deleteprogram.component';
import { DeleteprogramdetailComponent } from './deleteprogramdetail/deleteprogramdetail.component';

const routes: Routes = [
  { 
    path: 'uploadprogram/list', 
    component: UploadprogramComponent 
  },
  {
    path: 'list/detail',
    component: DetailComponent
  },
  {
    path: 'deleted/list',
    component: DeleteComponent
  },
  {
    path: 'deleted/list/detail',
    component: DeletedetailComponent
  }, 
  {
    path: 'deleted/program',
    component: DeleteprogramComponent
  }, 
  {
    path: 'deleted/program/detail',
    component: DeleteprogramdetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadprogramRoutingModule { }
