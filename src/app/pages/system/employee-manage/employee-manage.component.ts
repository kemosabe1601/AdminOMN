import { UserService } from './../../../services/user.service';
import { MockApiService } from './../../../services/mock-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-employee-manage',
	templateUrl: './employee-manage.component.html',
	styleUrls: ['./employee-manage.component.scss'],
})
export class EmployeeManageComponent implements OnInit {
	// bread crumb items
	breadCrumbItems: Array<{}>;

	constructor(
		public mockService: MockApiService,
		public userService: UserService,
	) {}

	ngOnInit(): void {
		this.breadCrumbItems = [
			{ label: 'System' },
			{ label: 'Message Manage', active: true },
		];
	}
}
