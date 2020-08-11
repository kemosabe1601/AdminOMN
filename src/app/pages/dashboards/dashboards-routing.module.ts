import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from './default/default.component';
import { CategoryModule } from './../category/category.module';
import { HomeconfigComponent } from './homeconfig/homeconfig.component';
import { AddComponent } from './add/add.component';

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
		path: 'home/add',
		component: AddComponent,
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
