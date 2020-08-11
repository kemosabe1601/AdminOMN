import { VideoDetailComponent } from "./main-video/video-detail/video-detail.component";
import { MainVideoComponent } from "./main-video/main-video.component";
import { DetailComponent } from "./self-production/detail/detail.component";
import { SelfProductionComponent } from "./self-production/self-production.component";
import { ProductionSPComponent } from "./production-sp/production-sp.component";
import { UploadComponent } from "./upload/upload.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SampleComponent } from "./sample.component";

const routes: Routes = [
  { path: "", component: SampleComponent },
  {
    path: "upload",
    component: UploadComponent,
  },
  {
    path: "production-support",
    component: ProductionSPComponent,
  },
  {
    path: "self-production",
    component: SelfProductionComponent,
  },
  {
    path: "self-production/detail",
    component: DetailComponent,
  },
  {
    path: "main-video",
    component: MainVideoComponent,
  },
  {
    path: "main-video/detail",
    component: VideoDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SampleRoutingModule {}
