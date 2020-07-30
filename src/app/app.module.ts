import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { environment } from '../environments/environment';

import {
	NgbNavModule,
	NgbAccordionModule,
	NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';

import { LayoutsModule } from './layouts/layouts.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initFirebaseBackend } from './authUtils';

import { ErrorInterceptor } from './core/helpers/error.interceptor';
import { JwtInterceptor } from './core/helpers/jwt.interceptor';
import { FakeBackendInterceptor } from './core/helpers/fake-backend';
import { Page404Component } from './extrapages/page404/page404.component';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

if (environment.defaultauth === 'firebase') {
	initFirebaseBackend(environment.firebaseConfig);
} else {
	// tslint:disable-next-line: no-unused-expression
	FakeBackendInterceptor;
}

@NgModule({
	declarations: [AppComponent, Page404Component],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		HttpClientModule,
		LayoutsModule,
		AppRoutingModule,
		NgbAccordionModule,
		NgbNavModule,
		NgbTooltipModule,
		NgxDatatableModule,
	],
	bootstrap: [AppComponent],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
		{
			provide: HTTP_INTERCEPTORS,
			useClass: FakeBackendInterceptor,
			multi: true,
		},
	],
})
export class AppModule {}
