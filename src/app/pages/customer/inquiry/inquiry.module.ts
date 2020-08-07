import { ColorPickerModule } from "ngx-color-picker";
import { NgxMaskModule } from "ngx-mask";
import { ArchwizardModule } from "angular-archwizard";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { UiSwitchModule } from "ngx-ui-switch";
import { NgSelectModule } from "@ng-select/ng-select";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import {
  NgbNavModule,
  NgbPaginationModule,
  NgbTypeaheadModule,
  NgbDatepickerModule,
} from "@ng-bootstrap/ng-bootstrap";
import {
  NgbDropdownModule,
  NgbTooltipModule,
} from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { UIModule } from "./../../../shared/ui/ui.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InquiryRoutingModule } from "./inquiry-routing.module";
import { InquiryComponent } from "./inquiry.component";
import { DropzoneModule } from "ngx-dropzone-wrapper";
import { MatTableModule } from "@angular/material/table";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule } from "@angular/material/progress-bar";

@NgModule({
  declarations: [InquiryComponent],
  imports: [
    CommonModule,
    InquiryRoutingModule,
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
export class InquiryModule {}
