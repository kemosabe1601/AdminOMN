import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UserService } from './../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import {
	NgbNavModule,
	NgbDropdownModule,
	NgbModalModule,
	NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';

import { UIModule } from '../shared/ui/ui.module';

import { PagesRoutingModule } from './pages-routing.module';

import { DashboardsModule } from './dashboards/dashboards.module';

import { CategoryModule } from './category/category.module';

import { ShowModule } from './show/show.module';

import { BractersModule } from './bracters/bracters.module';

import { ChallengerModule } from './challenger/challenger.module';

import { ChallengerprogramModule } from './challengerprogram/challengerprogram.module';

import { UploadprogramModule } from './uploadprogram/uploadprogram.module';

import { OriginalsModule } from './originals/originals.module';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
	suppressScrollX: true,
	wheelSpeed: 0.3,
};

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		FormsModule,
		NgbDropdownModule,
		NgbModalModule,
		PagesRoutingModule,
		ReactiveFormsModule,
		DashboardsModule,
		CategoryModule,
		ShowModule,
		BractersModule,
		ChallengerModule,
		ChallengerprogramModule,
		UploadprogramModule,
		OriginalsModule,
		UIModule,
		NgbNavModule,
		NgbTooltipModule,
		PerfectScrollbarModule,
		HttpClientModule,
		NgxDatatableModule,
	],
	providers: [
		{
			provide: PERFECT_SCROLLBAR_CONFIG,
			useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
		},
		UserService,
	],
})
export class PagesModule {}
