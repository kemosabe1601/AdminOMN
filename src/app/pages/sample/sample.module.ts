import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatNativeDateModule } from "@angular/material/core";
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
import { ProductionSPComponent } from "./production-sp/production-sp.component";
import { SelfProductionComponent } from "./self-production/self-production.component";
import { DetailComponent } from "./self-production/detail/detail.component";
import { MatSelectModule } from "@angular/material/select";
import { MainVideoComponent } from "./main-video/main-video.component";
import { VideoDetailComponent } from "./main-video/video-detail/video-detail.component";

const config: DropzoneConfigInterface = {
  // Change this to your upload POST address:
  url: "https://httpbin.org/post",
  maxFilesize: 100,
};

@NgModule({
  declarations: [
    SampleComponent,
    UploadComponent,
    ProductionSPComponent,
    SelfProductionComponent,
    DetailComponent,
    MainVideoComponent,
    VideoDetailComponent,
  ],
  imports: [
    CommonModule,
    SampleRoutingModule,
    UIModule,
    UiSwitchModule,
    NgxDatatableModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatRadioModule,
    DropzoneModule,
    CKEditorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatCheckboxModule,
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: config,
    },
  ],
})
export class SampleModule {}
