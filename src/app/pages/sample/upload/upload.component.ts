import { Component, OnInit } from "@angular/core";

import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"],
})
export class UploadComponent implements OnInit {
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
