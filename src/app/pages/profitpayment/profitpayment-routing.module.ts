import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfitpaymentComponent } from './profitpayment.component';
import { CompleteComponent } from './complete/complete.component';
import { DeletedComponent } from './deleted/deleted.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
	{
		path: 'list',
		component: ProfitpaymentComponent,
	},
	{
		path: 'list/detail',
		component: DetailComponent,
	},
	{
		path: 'complete',
		component: CompleteComponent,
	},
	{
		path: 'deleted',
		component: DeletedComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProfitpaymentRoutingModule {}
