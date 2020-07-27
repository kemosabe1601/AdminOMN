import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowComponent } from './show.component';
import { ShowconfigComponent } from './showconfig/showconfig.component';


const routes: Routes = [
  { 
    path: '', 
    component: ShowComponent 
  },
  {
    path: 'show/config',
    component: ShowconfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowRoutingModule { }
