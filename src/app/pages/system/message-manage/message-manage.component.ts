import { ColumnMode } from '@swimlane/ngx-datatable';
import { UserService } from './../../../services/user.service';
import { MockApiService } from './../../../services/mock-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-message-manage',
	templateUrl: './message-manage.component.html',
	styleUrls: ['./message-manage.component.scss'],
})
export class MessageManageComponent implements OnInit {
	// bread crumb items
	breadCrumbItems: Array<{}>;

	// Table data
	rows: any[];
	trans: any[];
	loadingIndicator = true;

	ColumnMode = ColumnMode;

	constructor(
		public mockService: MockApiService,
		public userService: UserService,
	) {}

	ngOnInit(): void {
		this.breadCrumbItems = [
			{ label: 'System' },
			{ label: 'Message Manage', active: true },
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
