import { Component, OnInit } from "@angular/core";
import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: "app-video-detail",
  templateUrl: "./video-detail.component.html",
  styleUrls: ["./video-detail.component.scss"],
})
export class VideoDetailComponent implements OnInit {
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
