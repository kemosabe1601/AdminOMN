import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RegisterRoutingModule } from "./register-routing.module";
import { RegisterComponent } from "./register.component";
import { UIModule } from "src/app/shared/ui/ui.module";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  NgbDropdownModule,
  NgbTooltipModule,
  NgbNavModule,
  NgbPaginationModule,
  NgbTypeaheadModule,
  NgbDatepickerModule,
} from "@ng-bootstrap/ng-bootstrap";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { NgSelectModule } from "@ng-select/ng-select";
import { UiSwitchModule } from "ngx-ui-switch";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { ArchwizardModule } from "angular-archwizard";
import { NgxMaskModule } from "ngx-mask";
import { ColorPickerModule } from "ngx-color-picker";
import { DropzoneModule } from "ngx-dropzone-wrapper";
import { MatTableModule } from "@angular/material/table";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatIconModule } from "@angular/material/icon";
import { MatProgressBarModule } from "@angular/material/progress-bar";

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
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
export class RegisterModule {}
