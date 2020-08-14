import { MatIconModule } from "@angular/material/icon";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { UiSwitchModule } from "ngx-ui-switch";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { UIModule } from "./../../../shared/ui/ui.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FooterRoutingModule } from "./footer-routing.module";
import { TermconditionComponent } from "./termcondition/termcondition.component";
import { PrivacyComponent } from "./privacy/privacy.component";
import { VideoManageComponent } from "./video-manage/video-manage.component";

@NgModule({
  declarations: [
    TermconditionComponent,
    PrivacyComponent,
    VideoManageComponent,
  ],
  imports: [
    CommonModule,
    FooterRoutingModule,
    UIModule,
    FormsModule,
    ReactiveFormsModule,
    UiSwitchModule,
    CKEditorModule,
    MatIconModule,
  ],
})
export class FooterModule {}
