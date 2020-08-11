import { MatIconModule } from '@angular/material/icon';
import { UsersearchComponent } from './usersearch/usersearch.component';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { UIModule } from './../../shared/ui/ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { TemplatemessageComponent } from '../message/templatemessage/templatemessage.component';

@NgModule({
	declarations: [CustomerComponent, UsersearchComponent, TemplatemessageComponent],
	imports: [
		CommonModule,
		CustomerRoutingModule,
		UIModule,
		PerfectScrollbarModule,
		NgbNavModule,
		FormsModule,
		ReactiveFormsModule,
		NgxDatatableModule,
		MatProgressBarModule,
		MatDialogModule,
		MatIconModule,
		MatButtonModule,
	],
	entryComponents: [UsersearchComponent],
})
export class CustomerModule {}
