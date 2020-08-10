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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SampleRoutingModule {}
