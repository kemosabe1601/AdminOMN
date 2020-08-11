import { ColumnMode, SelectionType } from "@swimlane/ngx-datatable";
import { MatDialogRef } from "@angular/material/dialog";
import { Component, OnInit } from "@angular/core";
import { AccessService } from "src/app/services/access.service";

@Component({
  selector: "app-menu-list",
  templateUrl: "./menu-list.component.html",
  styleUrls: ["./menu-list.component.scss"],
})
export class MenuListComponent implements OnInit {
  access: any[];
  selected = [];

  loading = true;

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;
  constructor(
    public dialogRef: MatDialogRef<MenuListComponent>,
    public accessService: AccessService
  ) {}

  ngOnInit(): void {
    this.getAccess;
  }

  getAccess() {
    this.accessService.getAccessible().subscribe((val: any) => {
      this.access = val.map((e) => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data(),
        };
      });
      this.loading = false;
    });
  }

  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
    console.log("Activate Event", event);
  }

  displayCheck(row) {
    return row.name !== "Ethel Price";
  }

  close() {
    this.dialogRef.close();
  }
}
