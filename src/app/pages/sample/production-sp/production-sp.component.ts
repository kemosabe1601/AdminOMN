import { Component, OnInit } from "@angular/core";

import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: "app-production-sp",
  templateUrl: "./production-sp.component.html",
  styleUrls: ["./production-sp.component.scss"],
})
export class ProductionSPComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  public Editor = ClassicEditor;

  constructor() {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "System" },
      { label: "Message Manage", active: true },
    ];
  }
}
