import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './category.component';
import { CategoryconfigComponent } from './categoryconfig/categoryconfig.component';



const routes: Routes = [
  { 
    path: '', 
    component: CategoryComponent 
  },
  {
    path: 'category/config',
    component: CategoryconfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
