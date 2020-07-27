import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowRoutingModule } from './show-routing.module';
import { ShowComponent } from './show.component';
import { ShowconfigComponent } from './showconfig/showconfig.component';


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
  declarations: [ShowComponent, ShowconfigComponent],
  imports: [
    CommonModule,
    ShowRoutingModule,
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
export class ShowModule { }
