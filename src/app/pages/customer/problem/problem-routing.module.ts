import { DetailComponent } from './detail/detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProblemComponent } from './problem.component';

const routes: Routes = [
	{ path: '', component: ProblemComponent },
	{
		path: 'detail',
		component: DetailComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ProblemRoutingModule {}
