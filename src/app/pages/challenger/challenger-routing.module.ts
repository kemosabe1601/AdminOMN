import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChallengerComponent } from './challenger.component';
import { DetailComponent } from './detail/detail.component';
import { DeletedComponent } from './deleted/deleted.component';



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
    path: 'challengers/deleted',
    component: DeletedComponent
  },
  { path: 'challengers/program', loadChildren: () => import('./program/program.module').then(m => m.ProgramModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengerRoutingModule { }
