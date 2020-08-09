import { UsersearchComponent } from './../customer/usersearch/usersearch.component';
import { TemplatemessageComponent } from './templatemessage/templatemessage.component';
import { MatDialogConfig } from '@angular/material/dialog';
import { UserService } from './../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { MockApiService } from './../../services/mock-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-message',
	templateUrl: './message.component.html',
	styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
	// bread crumb items
	breadCrumbItems: Array<{}>;

	hidden: boolean = true;
	checked: boolean = false;
	marked = true;

	constructor(
		public mockService: MockApiService,
		public modal: MatDialog,
		public userService: UserService,
	) {}

	ngOnInit(): void {
		this.breadCrumbItems = [
			{ label: 'Message' },
			{ label: 'Message Write', active: true },
		];
	}

	isChecked(checked: boolean, hidden: boolean) {
		this.checked = checked;
		this.hidden = hidden;
	}

	toggleVisibility(value) {
		this.marked = value;
	}

	userModal() {
		this.userService.initializeFormGroup();
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = true;
		dialogConfig.autoFocus = true;
		dialogConfig.width = '50%';
		this.modal.open(UsersearchComponent, dialogConfig);
	}

	templateModal() {
		this.userService.initializeFormGroup();
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = true;
		dialogConfig.autoFocus = true;
		dialogConfig.width = '50%';
		this.modal.open(TemplatemessageComponent, dialogConfig);
	}
}
