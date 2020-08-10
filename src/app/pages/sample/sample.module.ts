import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { DropzoneModule } from "ngx-dropzone-wrapper";
import { DROPZONE_CONFIG } from "ngx-dropzone-wrapper";
import { DropzoneConfigInterface } from "ngx-dropzone-wrapper";
import { MatRadioModule } from "@angular/material/radio";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { UiSwitchModule } from "ngx-ui-switch";
import { UIModule } from "./../../shared/ui/ui.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SampleRoutingModule } from "./sample-routing.module";
import { SampleComponent } from "./sample.component";
import { UploadComponent } from "./upload/upload.component";
import { ProductionSPComponent } from './production-sp/production-sp.component';

const config: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: "https://httpbin.org/post",
  maxFilesize: 100,
};

@NgModule({
  declarations: [SampleComponent, UploadComponent, ProductionSPComponent],
  imports: [
    CommonModule,
    SampleRoutingModule,
    UIModule,
    UiSwitchModule,
    MatInputModule,
    MatFormFieldModule,
    NgxDatatableModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatDatepickerModule,
    MatRadioModule,
    DropzoneModule,
    CKEditorModule,
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: config,
    },
  ],
})
export class SampleModule {}
