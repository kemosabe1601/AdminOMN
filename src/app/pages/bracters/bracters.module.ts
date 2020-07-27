import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BractersRoutingModule } from './bracters-routing.module';
import { BractersComponent } from './bracters.component';

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
import { MatPaginatorModule } from '@angular/material/paginator';
import {
  NgbPaginationModule,
  NgbTypeaheadModule,
  NgbDropdownModule,
  NgbTooltipModule,
  NgbNavModule,
  NgbDatepickerModule,
  NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [BractersComponent],
  imports: [
    CommonModule,
    BractersRoutingModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
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
    NgbAlertModule
  ]
})
export class BractersModule { }
