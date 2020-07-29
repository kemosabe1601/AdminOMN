import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChallengerComponent } from './challenger.component';

const routes: Routes = [{ path: '', component: ChallengerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChallengerRoutingModule { }
