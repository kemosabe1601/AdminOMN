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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
