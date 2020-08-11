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
	{
		path: 'footer',
		loadChildren: () =>
			import('./footer/footer.module').then((m) => m.FooterModule),
	},
	{
		path: 'access',
		loadChildren: () =>
			import('./access/access.module').then((m) => m.AccessModule),
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class SystemRoutingModule {}
