import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class MockApiService {
	constructor(public http: HttpClient) {}

	getBaseUrl() {
		return 'http://113.172.60.152:3000/';
	}

	getTableData() {
		const header = new HttpHeaders({
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET,HEAD,OPTIONS,POST,PUT',
			'Access-Control-Allow-Headers':
				'Origin, X-Requested-With, Content-Type, Accept, Authorization',
		});
		return this.http.get(this.getBaseUrl() + 'products', {
			headers: header,
		});
	}
}