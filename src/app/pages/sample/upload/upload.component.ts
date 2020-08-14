import { OwlOptions } from "ngx-owl-carousel-o";
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

  timelineCarousel: OwlOptions = {
    items: 1,
    loop: false,
    margin: 0,
    nav: true,
    navText: [
      "<i class='mdi mdi-chevron-left'></i>",
      "<i class='mdi mdi-chevron-right'></i>",
    ],
    dots: false,
    responsive: {
      680: {
        items: 3,
      },
    },
  };

  public Editor = ClassicEditor;

  constructor() {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "System" },
      { label: "Message Manage", active: true },
    ];
  }
}
