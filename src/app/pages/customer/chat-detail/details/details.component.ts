import { Validators } from '@angular/forms';
import { UserService } from './../../../../services/user.service';
import { MatDialog } from '@angular/material/dialog';
import { MockApiService } from 'src/app/services/mock-api.service';
import { FormBuilder } from '@angular/forms';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { ChatUser, ChatMessage } from './../../chat.model';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
	validationform: FormGroup; // bootstrap validation form
	// bread crumb items
	breadCrumbItems: Array<{}>;

	chatData: ChatUser[];
	chatMessagesData: ChatMessage[];

	formData: FormGroup;

	// Form submit
	chatSubmit: boolean;

	username: string;
	usermessage: string;

	// Table data
	rows: any[];
	trans: any[];
	loadingIndicator = true;

	ColumnMode = ColumnMode;

	constructor(
		public formBuilder: FormBuilder,
		public mockService: MockApiService,
		public modal: MatDialog,
		public userService: UserService,
	) {}

	ngOnInit(): void {
		this.breadCrumbItems = [
			{ label: 'Customer' },
			{ label: 'Chat Detail' },
			{ label: 'Detail', active: true },
		];

		this.formData = this.formBuilder.group({
			message: ['', [Validators.required]],
		});
	}

	/**
	 * Returns form
	 */
	get form() {
		return this.formData.controls;
	}

	getUploadData() {
		this.mockService.getUploadData().subscribe((val: any) => {
			this.rows = val;
			this.loadingIndicator = false;
		});
	}

	getTransactionData() {
		this.mockService.getTransactionData().subscribe((val: any) => {
			this.trans = val;
			this.loadingIndicator = false;
		});
	}

	chatUsername(name) {
		this.username = name;
		this.usermessage = 'Hello';
		this.chatMessagesData = [];
		const currentDate = new Date();

		this.chatMessagesData.push({
			name: this.username,
			message: this.usermessage,
			time: currentDate.getHours() + ':' + currentDate.getMinutes(),
		});
	}

	/**
	 * Save the message in chat
	 */
	messageSave() {
		const message = this.formData.get('message').value;
		const currentDate = new Date();
		if (this.formData.valid && message) {
			// Message Push in Chat
			this.chatMessagesData.push({
				align: 'right',
				name: 'Henry Wells',
				message,
				time: currentDate.getHours() + ':' + currentDate.getMinutes(),
			});

			// Set Form Data Reset
			this.formData = this.formBuilder.group({
				message: null,
			});
		}

		this.chatSubmit = true;
	}

	onCreate() {
		console.log('Ahihi');
	}

	localeDate(time) {
		let myDate = new Date(time * 1000);
		return myDate.toLocaleString();
	}
}
