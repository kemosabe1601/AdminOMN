import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryComponent } from './category.component';
import { CategoryconfigComponent } from './categoryconfig/categoryconfig.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
	{
		path: '',
		component: CategoryComponent,
	},
	{
		path: 'category/config',
		component: CategoryconfigComponent,
	},
	{
		path: 'category/add',
		component: AddComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class CategoryRoutingModule {}
