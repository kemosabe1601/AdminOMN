import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxMaskModule } from 'ngx-mask';
import { ArchwizardModule } from 'angular-archwizard';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { UiSwitchModule } from 'ngx-ui-switch';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { UIModule } from './../../shared/ui/ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengerRoutingModule } from './challenger-routing.module';
import { ChallengerComponent } from './challenger.component';
import {
	NgbPaginationModule,
	NgbTypeaheadModule,
	NgbDropdownModule,
	NgbTooltipModule,
	NgbNavModule,
	NgbDatepickerModule,
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
	declarations: [ChallengerComponent],
	imports: [
		CommonModule,
		ChallengerRoutingModule,
		NgSelectModule,
		FormsModule,
		ReactiveFormsModule,
		MatTableModule,
		DragDropModule,
		MatIconModule,
		UIModule,
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
	],
})
export class ChallengerModule {}
