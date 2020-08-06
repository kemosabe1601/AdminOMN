import { UserService } from "./../../services/user.service";
import { UsersearchComponent } from "./usersearch/usersearch.component";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { MockApiService } from "./../../services/mock-api.service";
import { Subscription } from "rxjs";
import { ColumnMode } from "@swimlane/ngx-datatable";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { ChatUser, ChatMessage } from "./chat.model";

import { chatData, chatMessagesData } from "./data";

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.scss"],
})
export class CustomerComponent implements OnInit {
  // bread crumb items
  breadCrumbItems: Array<{}>;

  chatData: ChatUser[];
  chatMessagesData: ChatMessage[];

  formData: FormGroup;

  // Form submit
  chatSubmit: boolean;

  username: string;
  usermessage: string;

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

  ngOnInit() {
    this.breadCrumbItems = [
      { label: "Customer" },
      { label: "Live Chat", active: true },
    ];

    this.formData = this.formBuilder.group({
      message: ["", [Validators.required]],
    });

    this._fetchData();
    this.getUploadData();
    this.getTransactionData();
  }

  /**
   * Returns form
   */
  get form() {
    return this.formData.controls;
  }

  private _fetchData() {
    this.chatData = chatData;
    this.chatMessagesData = chatMessagesData;
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

  chatUsername(name) {
    this.username = name;
    this.usermessage = "Hello";
    this.chatMessagesData = [];
    const currentDate = new Date();

    this.chatMessagesData.push({
      name: this.username,
      message: this.usermessage,
      time: currentDate.getHours() + ":" + currentDate.getMinutes(),
    });
  }

  /**
   * Save the message in chat
   */
  messageSave() {
    const message = this.formData.get("message").value;
    const currentDate = new Date();
    if (this.formData.valid && message) {
      // Message Push in Chat
      this.chatMessagesData.push({
        align: "right",
        name: "Henry Wells",
        message,
        time: currentDate.getHours() + ":" + currentDate.getMinutes(),
      });

      // Set Form Data Reset
      this.formData = this.formBuilder.group({
        message: null,
      });
    }

    this.chatSubmit = true;
  }

  onCreate() {
    this.userService.initializeFormGroup(); 
    const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.modal.open(UsersearchComponent, dialogConfig);
  }

  localeDate(time) {
    let myDate = new Date(time * 1000);
    return myDate.toLocaleString();
  }
}
