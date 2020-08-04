import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfitpaymentComponent } from './profitpayment.component';

const routes: Routes = [{ path: '', component: ProfitpaymentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfitpaymentRoutingModule { }
