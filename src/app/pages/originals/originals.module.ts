import { HttpClientModule } from '@angular/common/http';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxMaskModule } from 'ngx-mask';
import { ArchwizardModule } from 'angular-archwizard';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { UiSwitchModule } from 'ngx-ui-switch';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UIModule } from '../../shared/ui/ui.module';
import {
	NgbPaginationModule,
	NgbTypeaheadModule,
	NgbDropdownModule,
	NgbTooltipModule,
	NgbNavModule,
	NgbDatepickerModule,
	NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';

import { OriginalsRoutingModule } from './originals-routing.module';
import { OriginalsComponent } from './originals.component';
import { AddComponent } from './add/add.component';

const config: DropzoneConfigInterface = {
	// Change this to your upload POST address:
	url: 'https://httpbin.org/post',
	maxFilesize: 100,
};

@NgModule({
  declarations: [OriginalsComponent, AddComponent],
  imports: [
    CommonModule,
    OriginalsRoutingModule,
    UIModule,
		CommonModule,
		NgSelectModule,
		FormsModule,
		ReactiveFormsModule,
		MatTableModule,
		DragDropModule,
		MatIconModule,
		UiSwitchModule,
		PerfectScrollbarModule,
		CKEditorModule,
		ArchwizardModule,
		NgxMaskModule,
		ColorPickerModule,
		DropzoneModule,
		NgbPaginationModule,
		NgbTypeaheadModule,
		NgbDropdownModule,
		NgbTooltipModule,
		NgbNavModule,
		NgbDatepickerModule,
		HttpClientModule,
		NgxDatatableModule,
		MatProgressBarModule,
		NgbAlertModule
  ],
  providers: [
		{
			provide: DROPZONE_CONFIG,
			useValue: config
		}
	]
})
export class OriginalsModule { }
