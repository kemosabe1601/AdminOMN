import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
	// bread crumb items
	breadCrumbItems: Array<{}>;
	constructor() {}

	ngOnInit(): void {
		this.breadCrumbItems = [
			{ label: 'Customer' },
			{ label: 'Problem' },
			{ label: 'Detail', active: true },
		];
	}
}
