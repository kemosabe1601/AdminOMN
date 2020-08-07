import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProblemComponent } from './problem.component';

const routes: Routes = [{ path: '', component: ProblemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProblemRoutingModule { }
