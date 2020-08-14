import { MockApiService } from "./../../../services/mock-api.service";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";
import { DecimalPipe } from "@angular/common";
import { Observable, Subscription } from "rxjs";
import { Table } from "./advanced.model";
import { Component, OnInit, OnDestroy, ViewChild } from "@angular/core";

@Component({
  selector: "app-default",
  templateUrl: "./default.component.html",
  styleUrls: ["./default.component.scss"],
  providers: [DecimalPipe],
})
export class DefaultComponent implements OnInit, OnDestroy {
  // bread crum data
  breadCrumbItems: Array<{}>;

  mockSub: Subscription;

  // Table data
  rows = [];
  temp: any[];
  loading: Boolean = true;

  selectValue: string[];
  ColumnMode = ColumnMode;

  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(public mockService: MockApiService) {}

  ngOnInit() {
    this.breadCrumbItems = [{ label: "Home" }, { label: "List", active: true }];
    this.selectValue = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    this._fetchData();
  }

  /**
   * fetches the table value
   */
  _fetchData() {
    // this.mockSub = this.mockService.getTableData().subscribe((val:any) => {
    // 	this.temp = [...val];
    // 	this.rows = val;
    // });

    this.mockSub = this.mockService
      .getHomeDataFireBase()
      .subscribe((val: any) => {
        this.rows = val.map((e) => {
          return {
            id: e.payload.doc.id,
            ...e.payload.doc.data(),
          };
        });
        this.loading = false;
      });
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter((d) => {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  setFilter(event) {
    const val = event;
    // filter our data
    const temp = this.temp.filter((d) => {
      return d.days.indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.rows = temp;
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  localeDate(time) {
    let myDate = new Date(time * 1000);
    return myDate.toLocaleString();
  }

  ngOnDestroy() {
    if (this.mockSub) {
      this.mockSub.unsubscribe();
    }
  }
}
