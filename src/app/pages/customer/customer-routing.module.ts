import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CustomerComponent } from "./customer.component";

const routes: Routes = [
  { path: "", component: CustomerComponent },
  {
    path: "chat-detail",
    loadChildren: () =>
      import("./chat-detail/chat-detail.module").then(
        (m) => m.ChatDetailModule
      ),
  },
  {
    path: "inquiry",
    loadChildren: () =>
      import("./inquiry/inquiry.module").then((m) => m.InquiryModule),
  },
  {
    path: "problems",
    loadChildren: () =>
      import("./problem/problem.module").then((m) => m.ProblemModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
