import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { UIModule } from './../../../shared/ui/ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatDetailRoutingModule } from './chat-detail-routing.module';
import { ChatDetailComponent } from './chat-detail.component';
import {
	NgbDropdownModule,
	NgbTooltipModule,
	NgbNavModule,
	NgbPaginationModule,
	NgbTypeaheadModule,
	NgbDatepickerModule,
} from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { NgSelectModule } from '@ng-select/ng-select';
import { UiSwitchModule } from 'ngx-ui-switch';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ArchwizardModule } from 'angular-archwizard';
import { NgxMaskModule } from 'ngx-mask';
import { ColorPickerModule } from 'ngx-color-picker';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DetailsComponent } from './details/details.component';

@NgModule({
	declarations: [ChatDetailComponent, RegisterComponent, DetailsComponent],
	imports: [
		CommonModule,
		ChatDetailRoutingModule,
		UIModule,
		NgxDatatableModule,
		FormsModule,
		ReactiveFormsModule,
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
		MatProgressBarModule,
	],
})
export class ChatDetailModule {}
