import { Component, OnInit } from '@angular/core';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
	selector: 'app-termcondition',
	templateUrl: './termcondition.component.html',
	styleUrls: ['./termcondition.component.scss'],
})
export class TermconditionComponent implements OnInit {
	// bread crumb items
	breadCrumbItems: Array<{}>;

	public Editor = ClassicEditor;

	constructor() {}

	ngOnInit() {
		this.breadCrumbItems = [
			{ label: 'Footer' },
			{ label: 'Terms & Conditions', active: true },
		];
	}
}
