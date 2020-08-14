import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowComponent } from './show.component';
import { ShowconfigComponent } from './showconfig/showconfig.component';
import { AddComponent } from './add/add.component';


const routes: Routes = [
  { 
    path: '', 
    component: ShowComponent 
  },
  {
    path: 'show/config',
    component: ShowconfigComponent
  },
  {
    path: 'show/add',
    component: AddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowRoutingModule { }
