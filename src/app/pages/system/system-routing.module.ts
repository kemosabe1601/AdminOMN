import { EmployeeManageComponent } from './employee-manage/employee-manage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SystemComponent } from './system.component';

const routes: Routes = [
	{ path: '', component: SystemComponent },
	{
		path: 'message',
		loadChildren: () =>
			import('./message-manage/message-manage.module').then(
				(m) => m.MessageManageModule,
			),
	},
	{
		path: 'membership',
		loadChildren: () =>
			import('./membership/membership.module').then((m) => m.MembershipModule),
	},
	{
		path: 'employee',
		component: EmployeeManageComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SystemRoutingModule {}
