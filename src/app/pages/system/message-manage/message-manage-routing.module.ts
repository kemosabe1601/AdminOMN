import { DetailComponent } from './detail/detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MessageManageComponent } from './message-manage.component';

const routes: Routes = [
	{ path: '', component: MessageManageComponent },
	{
		path: 'detail',
		component: DetailComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class MessageManageRoutingModule {}
