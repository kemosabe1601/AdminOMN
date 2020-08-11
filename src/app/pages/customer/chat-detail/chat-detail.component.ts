import { MockApiService } from './../../../services/mock-api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-chat-detail',
	templateUrl: './chat-detail.component.html',
	styleUrls: ['./chat-detail.component.scss'],
})
export class ChatDetailComponent implements OnInit {
	// bread crumb items
	breadCrumbItems: Array<{}>;

	// Table data
	rows: any[];
	trans: any[];
	loadingIndicator = true;

	ColumnMode = ColumnMode;

	constructor(
		public formBuilder: FormBuilder,
		public mockService: MockApiService,
	) {}

	ngOnInit(): void {
		this.breadCrumbItems = [
			{ label: 'Customer' },
			{ label: 'Chat Detail', active: true },
		];

		this._fetchData();
	}

	private _fetchData() {
		this.mockService.getTableData().subscribe((val: any) => {
			this.rows = val;
			this.loadingIndicator = false;
		});
	}

	localeDate(time) {
		let myDate = new Date(time * 1000);
		return myDate.toLocaleString();
	}
}
