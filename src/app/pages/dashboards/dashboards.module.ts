import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgModule } from '@angular/core';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';

import { DashboardsRoutingModule } from './dashboards-routing.module';
import { UIModule } from '../../shared/ui/ui.module';

import { UiSwitchModule } from 'ngx-ui-switch';
import {
	NgbPaginationModule,
	NgbTypeaheadModule,
	NgbDropdownModule,
	NgbTooltipModule,
	NgbNavModule,
	NgbDatepickerModule,
} from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';

import { DefaultComponent } from './default/default.component';
import { HomeconfigComponent } from './homeconfig/homeconfig.component';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ArchwizardModule } from 'angular-archwizard';
import { NgxMaskModule } from 'ngx-mask';
import { ColorPickerModule } from 'ngx-color-picker';
import { DropzoneModule } from 'ngx-dropzone-wrapper';

@NgModule({
	declarations: [DefaultComponent, HomeconfigComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		DashboardsRoutingModule,
		UIModule,
		NgbDropdownModule,
		NgbTooltipModule,
		NgbNavModule,
		PerfectScrollbarModule,
		NgbPaginationModule,
		NgbTypeaheadModule,
		NgSelectModule,
		NgbDatepickerModule,
		UiSwitchModule,
		CKEditorModule,
		ArchwizardModule,
		NgxMaskModule,
		ColorPickerModule,
		DropzoneModule,
		MatTableModule,
		DragDropModule,
		MatIconModule,
		NgxDatatableModule,
		MatProgressBarModule,
	],
	providers: [],
})
export class DashboardsModule {}
