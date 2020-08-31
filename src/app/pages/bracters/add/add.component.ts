import { Component, OnInit, ViewChild, EventEmitter, Output, Input, ViewChildren, ContentChildren, QueryList, forwardRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragHandle } from '@angular/cdk/drag-drop';
import { MatTable } from '@angular/material/table';
import { NgbDate, NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { MustMatch } from './validation.mustmatch';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DecimalPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { AdvancedService } from './advanced.service';
import { Table } from './advanced.model';
import { AdvancedSortableDirective, SortEvent } from './advanced-sortable.directive';
import { tableData } from './data';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
  providers: [AdvancedService, DecimalPipe]
})
export class AddComponent implements OnInit {
  validationform: FormGroup; // bootstrap validation form
  tooltipvalidationform: FormGroup; // bootstrap tooltip validation form
  typeValidationForm: FormGroup; // type validation form
  rangeValidationForm: FormGroup; // range validation form

  // Table data
  tableData: Table[];
  tables$: Observable<Table[]>;
  total$: Observable<number>;

  isShow = false

  @ViewChildren(AdvancedSortableDirective) headers: QueryList<AdvancedSortableDirective>;

  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker'
  ];

  // bread crumb items
  breadCrumbItems: Array<{}>;
  constructor(private calendar: NgbCalendar, public formBuilder: FormBuilder, public advancedService: AdvancedService) { 
    this.tables$ = advancedService.tables$;
    this.total$ = advancedService.total$;
  }


  // Form submition
  submit: boolean;
  formsubmit: boolean;
  typesubmit: boolean;
  rangesubmit: boolean;

  // Component colorpicker
  componentcolor: string;
  rgbcolor: string;
  color: string;
  presetcolor: string;
  inlinecolor: string;

  hoveredDate: NgbDate;
  fromNGDate: NgbDate;
  toNGDate: NgbDate;

  hidden: boolean;
  selected: any;

  model: NgbDateStruct;
  date: { year: number, month: number };
  // Select2 Dropdown
  selectValue: string[];

  displayedColumns: string[] = ['programName', 'playedMinutes', 'viewCount', 'category', 'action'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  programData = new MatTableDataSource<Program>(Movie_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  @Input() fromDate: Date;
  @Input() toDate: Date;
  @Output() dateRangeSelected: EventEmitter<{}> = new EventEmitter();

  @ViewChild('dp', { static: true }) datePicker: any;


  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Bracters' }, { label: 'Create New', active: true }];
    // MatPaginator
    this.dataSource.paginator = this.paginator;
    // Component color value of color picker
    this.componentcolor = '#3bafda';
    this.presetcolor = '#2889e9';
    this.rgbcolor = 'rgba(0, 194, 255, 0.78)';
    this.inlinecolor = '#400e12';
    this.color = '#8FFF00';

    // Select dropdown value
    // tslint:disable-next-line: max-line-length
    this.selectValue = ['Alaska', 'Hawaii', 'California', 'Nevada', 'Oregon', 'Washington', 'Arizona', 'Colorado', 'Idaho', 'Montana', 'Nebraska', 'New Mexico', 'North Dakota', 'Utah', 'Wyoming', 'Alabama', 'Arkansas', 'Illinois', 'Iowa'];

    this.selected = '';
    this.hidden = true;

    /**
     * Bootstrap validation form data
     */
    this.validationform = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      city: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      state: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      zip: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    });

    /**
     * Bootstrap tooltip validation form data
     */
    this.tooltipvalidationform = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      userName: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      city: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      state: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
    });


    /**
     * Type validation form
     */
    this.typeValidationForm = this.formBuilder.group({
      text: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      url: ['', [Validators.required, Validators.pattern('https?://.+')]],
      digits: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      number: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      alphanum: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]+')]],
      textarea: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpwd: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmpwd'),
    });


    /**
     * Range validation form
     */
    this.rangeValidationForm = this.formBuilder.group({
      minlength: ['', [Validators.required, Validators.minLength(6)]],
      maxlength: ['', [Validators.required, Validators.maxLength(6)]],
      rangelength: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      minvalue: ['', [Validators.required, Validators.min(6)]],
      maxvalue: ['', [Validators.required, Validators.max(6)]],
      rangevalue: ['', [Validators.required, Validators.min(6), Validators.max(100)]],
      regularexp: ['', [Validators.required, Validators.pattern('#[A-Fa-f0-9]{6}')]],
    });
    this.submit = false;
    this.formsubmit = false;
    this.typesubmit = false;
    this.rangesubmit = false;
  }

  /**
   * fetches the table value
   */
  _fetchData() {
    this.tableData = tableData;
  }

  addCategory() {
    this.isShow = !this.isShow;
  }

  /**
   * Sort table data
   * @param param0 sort the column
   *
   */
  onSort({ column, direction }: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });
    this.advancedService.sortColumn = column;
    this.advancedService.sortDirection = direction;
  }

  /**
   * on date selected
   * @param date date object
   */
  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromNGDate = date;
      this.fromDate = new Date(date.year, date.month - 1, date.day);
      this.selected = '';
    } else if (this.fromDate && !this.toDate && date.after(this.fromNGDate)) {
      this.toNGDate = date;
      this.toDate = new Date(date.year, date.month - 1, date.day);
      this.hidden = true;
      this.selected = this.fromDate.toLocaleDateString() + '-' + this.toDate.toLocaleDateString();

      this.dateRangeSelected.emit({ fromDate: this.fromDate, toDate: this.toDate });

      this.fromDate = null;
      this.toDate = null;
      this.fromNGDate = null;
      this.toNGDate = null;

    } else {
      this.fromNGDate = date;
      this.fromDate = new Date(date.year, date.month - 1, date.day);
      this.selected = '';
    }
  }
  /**
   * Is hovered over date
   * @param date date obj
   */
  isHovered(date: NgbDate) {
    return this.fromNGDate && !this.toNGDate && this.hoveredDate && date.after(this.fromNGDate) && date.before(this.hoveredDate);
  }

  /**
   * @param date date obj
   */
  isInside(date: NgbDate) {
    return date.after(this.fromNGDate) && date.before(this.toNGDate);
  }

  /**
   * @param date date obj
   */
  isRange(date: NgbDate) {
    return date.equals(this.fromNGDate) || date.equals(this.toNGDate) || this.isInside(date) || this.isHovered(date);
  }

  /**
   * Select the today
   */
  selectToday() {
    this.model = this.calendar.getToday();
  }

  /**
   * Returns form
   */
  get form() {
    return this.validationform.controls;
  }

  /**
   * Bootsrap validation form submit method
   */
  validSubmit() {
    this.submit = true;
  }

  /**
   * returns tooltip validation form
   */
  get formData() {
    return this.tooltipvalidationform.controls;
  }

  /**
   * Bootstrap tooltip form validation submit method
   */
  formSubmit() {
    this.formsubmit = true;
  }

  /**
   * Returns the type validation form
   */
  get type() {
    return this.typeValidationForm.controls;
  }

  /**
   * Type validation form submit data
   */
  typeSubmit() {
    this.typesubmit = true;
  }

  /**
   * Returns the range validation form
   */
  get range() {
    return this.rangeValidationForm.controls;
  }

  /**
   * range validation submit data
   */
  rangeSubmit() {
    this.rangesubmit = true;
  }
}

export interface PeriodicElement {
  programName: string;
  playedMinutes: number;
  viewCount: number;
  category: string;
  action: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  {programName: 'The Old Guard', playedMinutes: 756, viewCount: 1.0079, category: 'action', action:''},
  {programName: 'The Karate Kid', playedMinutes: 756, viewCount: 4.0026, category: 'action', action:''},
  {programName: 'Da 5 Bloods', playedMinutes: 756, viewCount: 6.941, category: 'action', action:''},
  {programName: 'Frida', playedMinutes: 756, viewCount: 9.0122, category: 'thriller', action:''},
  {programName: 'Airplane!', playedMinutes: 7102, viewCount: 10.811, category: 'triller', action:''},
  {programName: 'Million Dollar Baby', playedMinutes: 1520, viewCount: 12.0107, category: 'drama', action:''},
  {programName: 'Schindler’s List', playedMinutes: 1334, viewCount: 14.0067, category: 'drama', action:''},
  {programName: 'Lady Bird', playedMinutes: 600, viewCount: 15.9994, category: 'fiction', action:''},
  {programName: 'E.T.: The Extra-Terrestrial', playedMinutes: 777, viewCount: 18.9984, category: 'fiction', action:''},
  {programName: 'The Silence of the Lambs', playedMinutes: 662, viewCount: 20.1797, category: 'action', action:''},
  {programName: 'Cloudy With a Chance of Meatballs', playedMinutes: 1500, viewCount: 22.9897, category: 'action', action:''},
  {programName: 'Uncut Gems', playedMinutes: 1080, viewCount: 24.305, category: 'action', action:''},
  {programName: 'No Direction Home: Bob Dylan', playedMinutes: 1300, viewCount: 26.9815, category: 'action', action:''},
  {programName: 'Back to the Future', playedMinutes: 720, viewCount: 28.0855, category: 'drama', action:''},
  {programName: 'Willy Wonka and the Chocolate Factory', playedMinutes: 1480, viewCount: 30.9738, category: 'drama', action:''},
  {programName: 'Crip Camp: A Disability Revolution', playedMinutes: 4800, viewCount: 32.065, category: 'drama', action:''},
  {programName: 'Inglourious Basterds', playedMinutes: 1100, viewCount: 35.453, category: 'drama', action:''},
  {programName: 'The Social Network', playedMinutes: 8462, viewCount: 39.948, category: 'horror', action:''},
  {programName: 'The Death and Life of Marsha P. Johnson', playedMinutes: 963, viewCount: 39.0983, category: 'horror', action:''},
  {programName: 'Scott Pilgrim vs. the World', playedMinutes: 741, viewCount: 40.078, category: 'horror', action:''},
];

export interface Program {
  programName: string;
  playedMinutes: number;
  viewCount: number;
  category: string;
  action: string;

}

const Movie_DATA: Program[] = [
  {programName: 'Uncut Gems', playedMinutes: 1080, viewCount: 24.305, category: 'action', action:''},
  {programName: 'No Direction Home: Bob Dylan', playedMinutes: 1300, viewCount: 26.9815, category: 'action', action:''},
  {programName: 'Back to the Future', playedMinutes: 720, viewCount: 28.0855, category: 'drama', action:''},
  {programName: 'Willy Wonka and the Chocolate Factory', playedMinutes: 1480, viewCount: 30.9738, category: 'drama', action:''},
  {programName: 'Crip Camp: A Disability Revolution', playedMinutes: 4800, viewCount: 32.065, category: 'drama', action:''},
  {programName: 'Inglourious Basterds', playedMinutes: 1100, viewCount: 35.453, category: 'drama', action:''},
  {programName: 'The Social Network', playedMinutes: 8462, viewCount: 39.948, category: 'horror', action:''},
  {programName: 'The Death and Life of Marsha P. Johnson', playedMinutes: 963, viewCount: 39.0983, category: 'horror', action:''},
  {programName: 'Scott Pilgrim vs. the World', playedMinutes: 741, viewCount: 40.078, category: 'horror', action:''},
];
