import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DefaultComponent } from "./dashboards/default/default.component";

const routes: Routes = [
  { path: "", redirectTo: "home" },
  { path: "home", component: DefaultComponent },
  {
    path: "category",
    loadChildren: () =>
      import("./category/category.module").then((m) => m.CategoryModule),
  },
  {
    path: "show",
    loadChildren: () => import("./show/show.module").then((m) => m.ShowModule),
  },
  {
    path: "bracters",
    loadChildren: () =>
      import("./bracters/bracters.module").then((m) => m.BractersModule),
  },
  {
    path: "challengers",
    loadChildren: () =>
      import("./challenger/challenger.module").then((m) => m.ChallengerModule),
  },
  {
    path: "upload",
    loadChildren: () =>
      import("./upload/upload.module").then((m) => m.UploadModule),
  },
  {
    path: "profitpayment",
    loadChildren: () =>
      import("./profitpayment/profitpayment.module").then(
        (m) => m.ProfitpaymentModule
      ),
  },
  {
    path: "customer",
    loadChildren: () =>
      import("./customer/customer.module").then((m) => m.CustomerModule),
  },
  {
    path: "message",
    loadChildren: () =>
      import("./message/message.module").then((m) => m.MessageModule),
  },
  {
    path: "system",
    loadChildren: () =>
      import("./system/system.module").then((m) => m.SystemModule),
  },
  {
    path: "sample",
    loadChildren: () =>
      import("./sample/sample.module").then((m) => m.SampleModule),
  },
  {
    path: "challengerprogram",
    loadChildren: () =>
      import("./challengerprogram/challengerprogram.module").then(
        (m) => m.ChallengerprogramModule
      ),
  },
  {
    path: "uploadprogram",
    loadChildren: () =>
      import("./uploadprogram/uploadprogram.module").then(
        (m) => m.UploadprogramModule
      ),
  },
  { path: 'original', loadChildren: () => import('./originals/originals.module').then(m => m.OriginalsModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
