import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChallengerComponent } from './challenger.component';
import { DetailComponent } from './detail/detail.component';
import { DeletedComponent } from './deleted/deleted.component';



const routes: Routes = [
  { 
    path: '', 
    component: ChallengerComponent 
  },
  {
    path: 'challengers/detail',
    component: DetailComponent
  },
  {
    path: 'challengers/deleted',
    component: DeletedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengerRoutingModule { }
