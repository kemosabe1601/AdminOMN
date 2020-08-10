import { Component, OnInit } from '@angular/core';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
	selector: 'app-privacy',
	templateUrl: './privacy.component.html',
	styleUrls: ['./privacy.component.scss'],
})
export class PrivacyComponent implements OnInit {
	// bread crumb items
	breadCrumbItems: Array<{}>;

	public Editor = ClassicEditor;

	constructor() {}

	ngOnInit() {
		this.breadCrumbItems = [
			{ label: 'Footer' },
			{ label: 'Privacy Policy', active: true },
		];
	}
}
