import { UserService } from './../../../services/user.service';
import { MockApiService } from './../../../services/mock-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-membership',
	templateUrl: './membership.component.html',
	styleUrls: ['./membership.component.scss'],
})
export class MembershipComponent implements OnInit {
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
