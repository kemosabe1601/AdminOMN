import { HttpClientModule } from "@angular/common/http";
import { DropzoneModule } from "ngx-dropzone-wrapper";
import { DROPZONE_CONFIG } from "ngx-dropzone-wrapper";
import { DropzoneConfigInterface } from "ngx-dropzone-wrapper";
import { ColorPickerModule } from "ngx-color-picker";
import { NgxMaskModule } from "ngx-mask";
import { ArchwizardModule } from "angular-archwizard";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { UiSwitchModule } from "ngx-ui-switch";
import { MatIconModule } from "@angular/material/icon";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatTableModule } from "@angular/material/table";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";
import { UIModule } from "./../../shared/ui/ui.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ChallengerRoutingModule } from "./challenger-routing.module";
import { ChallengerComponent } from "./challenger.component";
import { DetailComponent } from "./detail/detail.component";
import { DeletedComponent } from "./deleted/deleted.component";

import {
  NgbPaginationModule,
  NgbTypeaheadModule,
  NgbDropdownModule,
  NgbTooltipModule,
  NgbNavModule,
  NgbDatepickerModule,
  NgbAlertModule,
  NgbModalModule,
} from "@ng-bootstrap/ng-bootstrap";

import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { DeletedetailComponent } from './deletedetail/deletedetail.component';
import { DeleteprogramComponent } from './deleteprogram/deleteprogram.component';
import { DeleteprogramdetailComponent } from './deleteprogramdetail/deleteprogramdetail.component';

const config: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: "https://httpbin.org/post",
  maxFilesize: 100
};

@NgModule({
  declarations: [ChallengerComponent, DetailComponent, DeletedComponent, DeletedetailComponent, DeleteprogramComponent, DeleteprogramdetailComponent],
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
    NgbModalModule,
    HttpClientModule,
    NgxDatatableModule,
    MatProgressBarModule,
    NgbAlertModule,
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: config,
    },
  ],
})
export class ChallengerModule {}
