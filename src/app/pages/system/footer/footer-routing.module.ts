import { VideoManageComponent } from "./video-manage/video-manage.component";
import { PrivacyComponent } from "./privacy/privacy.component";
import { TermconditionComponent } from "./termcondition/termcondition.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "terms&conditions",
  },
  {
    path: "terms&conditions",
    component: TermconditionComponent,
  },
  {
    path: "privacy",
    component: PrivacyComponent,
  },
  {
    path: "video-manage",
    component: VideoManageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FooterRoutingModule {}
