import { VideoManageComponent } from './video-manage/video-manage.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermconditionComponent } from './termcondition/termcondition.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FooterComponent } from './footer.component';

const routes: Routes = [
	{ path: '', component: FooterComponent },
	{
		path: 'terms&conditions',
		component: TermconditionComponent,
	},
	{
		path: 'privacy',
		component: PrivacyComponent,
	},
	{
		path: 'video-manage',
		component: VideoManageComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class FooterRoutingModule {}
