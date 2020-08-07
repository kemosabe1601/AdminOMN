import { UserService } from "./../../../../services/user.service";
import { MockApiService } from "./../../../../services/mock-api.service";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { Component, OnInit } from "@angular/core";

import { FormGroup, FormBuilder } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  validationform: FormGroup; // bootstrap validation form
  // bread crumb items
  breadCrumbItems: Array<{}>;

  // Table data
  rows: any[];
  trans: any[];
  loadingIndicator = true;

  ColumnMode = ColumnMode;

  constructor(
    public formBuilder: FormBuilder,
    public mockService: MockApiService,
    public modal: MatDialog,
    public userService: UserService
  ) {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Customer" },
      { label: "Chat Detail" },
      { label: "Register", active: true },
    ];
  }

  getUploadData() {
    this.mockService.getUploadData().subscribe((val: any) => {
      this.rows = val;
      this.loadingIndicator = false;
    });
  }

  getTransactionData() {
    this.mockService.getTransactionData().subscribe((val: any) => {
      this.trans = val;
      this.loadingIndicator = false;
    });
  }

  onCreate() {
    console.log("Ahihi");
  }

  localeDate(time) {
    let myDate = new Date(time * 1000);
    return myDate.toLocaleString();
  }
}
