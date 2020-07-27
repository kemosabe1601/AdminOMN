import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BractersComponent } from './bracters.component';

const routes: Routes = [{ path: '', component: BractersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BractersRoutingModule { }
