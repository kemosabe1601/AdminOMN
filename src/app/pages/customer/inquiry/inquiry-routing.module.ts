import { DetailComponent } from './detail/detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InquiryComponent } from './inquiry.component';

const routes: Routes = [
	{ path: '', component: InquiryComponent },
	{
		path: 'detail',
		component: DetailComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class InquiryRoutingModule {}
