import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { UIModule } from "./../../shared/ui/ui.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CustomerRoutingModule } from "./customer-routing.module";
import { CustomerComponent } from "./customer.component";
import { NgbNavModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    UIModule,
    PerfectScrollbarModule,
    NgbNavModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
  ],
})
export class CustomerModule {}
