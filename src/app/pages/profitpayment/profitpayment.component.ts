import { delay } from 'rxjs/operators';
import { MockApiService } from './../../services/mock-api.service';
import { Observable, Subscription } from 'rxjs';
import { Table } from './advanced.model';
import { DecimalPipe } from '@angular/common';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ColumnMode, DatatableComponent } from '@swimlane/ngx-datatable';

interface PageInfo {
	offset: number;
	pageSize: number;
	limit: number;
	count: number;
}

@Component({
  selector: 'app-profitpayment',
  templateUrl: './profitpayment.component.html',
  styleUrls: ['./profitpayment.component.scss'],
  providers: [DecimalPipe],
})
export class ProfitpaymentComponent implements OnInit, OnDestroy {
  breadCrumbItems: Array<{}>;

	mockSub: Subscription;

	selectValue: string[];

	// Table data
	rows: any[];
	temp: any[];

	ColumnMode = ColumnMode;

	@ViewChild(DatatableComponent) table: DatatableComponent;

	constructor(public mockService: MockApiService) {}

	ngOnInit(): void {
		this.breadCrumbItems = [
			{ label: 'Challengers' },
			{ label: 'List', active: true },
		];

		this.selectValue = [
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday',
			'Sunday',
		];

		this._fetchData();
	}

	/**
	 * fetches the table value
	 */
	_fetchData() {
		this.mockService.getTableData().subscribe((val:any) => {
			this.temp = [...val];
			this.rows = val;
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
