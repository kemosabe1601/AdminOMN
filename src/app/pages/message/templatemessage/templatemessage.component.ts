import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-templatemessage',
	templateUrl: './templatemessage.component.html',
	styleUrls: ['./templatemessage.component.scss'],
})
export class TemplatemessageComponent implements OnInit {
	constructor(public dialogRef: MatDialogRef<TemplatemessageComponent>) {}

	ngOnInit(): void {}

	close() {
		this.dialogRef.close();
	}
}
