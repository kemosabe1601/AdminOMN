import { MenuListComponent } from "./menu-list/menu-list.component";
import { MatDialogConfig, MatDialog } from "@angular/material/dialog";
import { UserService } from "./../../../services/user.service";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { AccessService } from "./../../../services/access.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-access",
  templateUrl: "./access.component.html",
  styleUrls: ["./access.component.scss"],
})
export class AccessComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  loadingIndicator = true;

  ColumnMode = ColumnMode;

  dept = [];
  team = [];
  employ = [];
  access = [];

  constructor(
    public accessService: AccessService,
    private userService: UserService,
    private modal: MatDialog
  ) {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "System" },
      { label: "Accessible Manage", active: true },
    ];

    this.getDept();
    this.getTeam();
    this.getEmploy();
    this.getAccessible();
  }

  userModal() {
    this.userService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.modal.open(MenuListComponent, dialogConfig);
  }

  getDept() {
    this.accessService.getDept().subscribe((val: any) => {
      this.dept = val.map((e) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data(),
        };
      });
      this.loadingIndicator = false;
    });
  }
  getTeam() {
    this.accessService.getTeam().subscribe((val: any) => {
      this.team = val.map((e) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data(),
        };
      });
      this.loadingIndicator = false;
    });
  }
  getEmploy() {
    this.accessService.getEmploy().subscribe((val: any) => {
      this.employ = val.map((e) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data(),
        };
      });
      this.loadingIndicator = false;
    });
  }

  getAccessible() {
    this.accessService.getAccessible().subscribe((val: any) => {
      this.access = val.map((e) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data(),
        };
      });
      this.loadingIndicator = false;
    });
  }
}
