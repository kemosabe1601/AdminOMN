import { MockApiService } from "src/app/services/mock-api.service";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-usersearch",
  templateUrl: "./usersearch.component.html",
  styleUrls: ["./usersearch.component.scss"],
})
export class UsersearchComponent implements OnInit {
  rows: any[];
  loadingIndicator = true;

  ColumnMode = ColumnMode;

  constructor(private userService: MockApiService) {}

  ngOnInit(): void {}

  getUploadData() {
    this.userService.getUserData().subscribe((val: any) => {
      this.rows = val;
      this.loadingIndicator = false;
    });
  }
}
