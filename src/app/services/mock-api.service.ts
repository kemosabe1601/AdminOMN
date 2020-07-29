import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class MockApiService {
	constructor(public http: HttpClient) {}

	getBaseUrl() {
		return 'https://5f1f971cfba6d400169d40ed.mockapi.io';
	}

	getTableData() {
		const header = new HttpHeaders({
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
			'Access-Control-Allow-Headers':
				'Origin, X-Requested-With, Content-Type, Accept, Authorization',
		});
		return this.http.get(this.getBaseUrl() + '/api/v1/admin/tableData', {
			headers: header,
		});
	}
}
