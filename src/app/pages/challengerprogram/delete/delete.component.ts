import { MockApiService } from "src/app/services/mock-api.service";
import { delay } from "rxjs/operators";
import { Observable, Subscription } from "rxjs";
import { Component, OnInit, ViewChild, OnDestroy } from "@angular/core";
import { ColumnMode, DatatableComponent } from "@swimlane/ngx-datatable";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent implements OnInit, OnDestroy {
  closeResult = "";

  // bread crum data
  breadCrumbItems: Array<{}>;

  mockSub: Subscription;

  selectValue: string[];

  // Table data
  rows: any[];
  temp: any[];

  ColumnMode = ColumnMode;

  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(public mockService: MockApiService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.breadCrumbItems = [
      { label: "Challenger Program" },
      { label: "Deleted", active: true },
    ];

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

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  /**
   * fetches the table value
   */
  _fetchData() {
    // this.mockService.getTableData().subscribe((val: any) => {
    //   this.temp = [...val];
    //   this.rows = val;
    // });

    this.mockSub = this.mockService.getDeletedRequestDataFireBase().subscribe((val:any) => {
			this.rows = val.map((e) => {
				return {
					id: e.payload.doc.id,
					...e.payload.doc.data(),
				}
			});
		});
  }

  updateFilter(event) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.temp.filter(function (d) {
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
    const temp = this.temp.filter(function (d) {
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
