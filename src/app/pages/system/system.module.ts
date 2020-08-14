import { MatNativeDateModule } from "@angular/material/core";
import { MatInputModule } from "@angular/material/input";
import { MatRadioModule } from "@angular/material/radio";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatIconModule } from "@angular/material/icon";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatTableModule } from "@angular/material/table";
import { DropzoneModule } from "ngx-dropzone-wrapper";
import { ColorPickerModule } from "ngx-color-picker";
import { NgxMaskModule } from "ngx-mask";
import { ArchwizardModule } from "angular-archwizard";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { UiSwitchModule } from "ngx-ui-switch";
import { NgSelectModule } from "@ng-select/ng-select";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import {
  NgbDropdownModule,
  NgbTooltipModule,
  NgbNavModule,
  NgbPaginationModule,
  NgbTypeaheadModule,
  NgbDatepickerModule,
} from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { UIModule } from "./../../shared/ui/ui.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SystemRoutingModule } from "./system-routing.module";
import { SystemComponent } from "./system.component";
import { EmployeeManageComponent } from "./employee-manage/employee-manage.component";

@NgModule({
  declarations: [SystemComponent, EmployeeManageComponent],
  imports: [
    CommonModule,
    SystemRoutingModule,
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
    MatRadioModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
  ],
})
export class SystemModule {}
