import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadComponent } from './upload.component';
import { DeletedComponent } from './deleted/deleted.component';
import { DetailComponent } from './detail/detail.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  { 
    path: 'list', 
    component: UploadComponent 
  },
  { 
    path: 'status', 
    component: StatusComponent 
  },
  {
    path: 'list/detail',
    component: DetailComponent
  },
  {
    path: 'deleted',
    component: DeletedComponent
  }, 
  { 
    path: 'program', 
    loadChildren: () => import('./program/program.module').then(m => m.ProgramModule) 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadRoutingModule { }
