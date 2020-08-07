import { DetailComponent } from "./../../upload/detail/detail.component";
import { RegisterComponent } from "./register/register.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ChatDetailComponent } from "./chat-detail.component";

const routes: Routes = [
  { path: "", component: ChatDetailComponent },
  {
    path: "register",
    // component: RegisterComponent,
    loadChildren: () =>
      import("./register/register.module").then((m) => m.RegisterModule),
  },
  {
    path: "details",
    loadChildren: () =>
      import("./details/details.module").then((m) => m.DetailsModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatDetailRoutingModule {}
