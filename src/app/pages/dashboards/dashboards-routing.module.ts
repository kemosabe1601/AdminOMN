import { CategoryModule } from './../category/category.module';
import { HomeconfigComponent } from './homeconfig/homeconfig.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './default/default.component';

const routes: Routes = [
	{
		path: 'home',
		component: DefaultComponent,
	},
	{
		path: 'home/config',
		component: HomeconfigComponent,
	},
	{
		path: 'category',
		component: CategoryModule,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DashboardsRoutingModule {}
