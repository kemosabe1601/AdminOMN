import { MockApiService } from './../../services/mock-api.service';
import { SortEvent } from './advanced-sortable.directive';
import { AdvancedSortableDirective } from './advanced-sortable.directive';
import { Observable } from 'rxjs';
import { Table } from './advanced.model';
import { DecimalPipe } from '@angular/common';
import { AdvancedService } from './advanced.service';
import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { tableData } from './data';

@Component({
	selector: 'app-challenger',
	templateUrl: './challenger.component.html',
	styleUrls: ['./challenger.component.scss'],
	providers: [AdvancedService, DecimalPipe],
})
export class ChallengerComponent implements OnInit {
	// bread crum data
	breadCrumbItems: Array<{}>;

	// Table data
	tableData: Table[];
	tables$: Observable<Table[]>;
	total$: Observable<number>;

	selectValue: string[];
	hidden: boolean;
	selected: any;

	@ViewChildren(AdvancedSortableDirective) headers: QueryList<
		AdvancedSortableDirective
	>;

	constructor(
		public advancedService: AdvancedService,
		public mockService: MockApiService,
	) {
		this.tables$ = advancedService.tables$;
		this.total$ = advancedService.total$;
	}

	ngOnInit(): void {
		this.breadCrumbItems = [
			{ label: 'Challengers' },
			{ label: 'List', active: true },
		];

		this._fetchData();

		// Select dropdown value
		// tslint:disable-next-line: max-line-length
		this.selectValue = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];

		this.selected = '';
		this.hidden = true;
	}

	/**
	 * fetches the table value
	 */
	_fetchData() {
		// this.tableData = tableData;
		this.mockService.getTableData().subscribe((val) => console.log(val));
	}

	/**
	 * Sort table data
	 * @param param0 sort the column
	 *
	 */
	onSort({ column, direction }: SortEvent) {
		// resetting other headers
		this.headers.forEach((header) => {
			if (header.sortable !== column) {
				header.direction = '';
			}
		});
		this.advancedService.sortColumn = column;
		this.advancedService.sortDirection = direction;
	}
}
