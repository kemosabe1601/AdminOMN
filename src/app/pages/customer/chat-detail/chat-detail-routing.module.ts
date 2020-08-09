import { DetailsComponent } from './details/details.component';
import { RegisterComponent } from './register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatDetailComponent } from './chat-detail.component';

const routes: Routes = [
	{ path: '', component: ChatDetailComponent },
	{
		path: 'register',
		component: RegisterComponent,
	},
	{
		path: 'details',
		component: DetailsComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ChatDetailRoutingModule {}
