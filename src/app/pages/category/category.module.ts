import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import { CategoryconfigComponent } from './categoryconfig/categoryconfig.component';

import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { UIModule } from '../../shared/ui/ui.module';
import { UiSwitchModule } from 'ngx-ui-switch';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ArchwizardModule } from 'angular-archwizard';
import { NgxMaskModule } from 'ngx-mask';
import { ColorPickerModule } from 'ngx-color-picker';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import {
	NgbPaginationModule,
	NgbTypeaheadModule,
	NgbDropdownModule,
	NgbTooltipModule,
	NgbNavModule,
	NgbDatepickerModule,
} from '@ng-bootstrap/ng-bootstrap';
import { AddComponent } from './add/add.component';

@NgModule({
	declarations: [CategoryComponent, CategoryconfigComponent, AddComponent],
	imports: [
		CommonModule,
		CategoryRoutingModule,
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
		NgxDatatableModule,
		MatProgressBarModule,
	],
})
export class CategoryModule {}
