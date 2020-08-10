import { Component, OnInit } from '@angular/core';

import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
	selector: 'app-video-manage',
	templateUrl: './video-manage.component.html',
	styleUrls: ['./video-manage.component.scss'],
})
export class VideoManageComponent implements OnInit {
	// bread crumb items
	breadCrumbItems: Array<{}>;

	public Editor = ClassicEditor;

	constructor() {}

	ngOnInit() {
		this.breadCrumbItems = [
			{ label: 'Footer' },
			{ label: 'Video Manage', active: true },
		];
	}
}
