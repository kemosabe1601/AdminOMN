import { Component, OnInit, ViewChild, EventEmitter, Output, Input, ContentChildren, QueryList, forwardRef } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDragHandle } from '@angular/cdk/drag-drop';
import { MatTable } from '@angular/material/table';
import { NgbDate, NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { MustMatch } from './validation.mustmatch';
@Component({
  selector: 'app-categoryconfig',
  templateUrl: './categoryconfig.component.html',
  styleUrls: ['./categoryconfig.component.scss']
})
export class CategoryconfigComponent implements OnInit {
  validationform: FormGroup; // bootstrap validation form
  tooltipvalidationform: FormGroup; // bootstrap tooltip validation form
  typeValidationForm: FormGroup; // type validation form
  rangeValidationForm: FormGroup; // range validation form

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
  constructor(private calendar: NgbCalendar, public formBuilder: FormBuilder) { }

  // name: string;
  // position: number;
  // weight: number;
  // symbol: string;

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

  @Input() fromDate: Date;
  @Input() toDate: Date;
  @Output() dateRangeSelected: EventEmitter<{}> = new EventEmitter();

  @ViewChild('dp', { static: true }) datePicker: any;

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  ngOnInit() {
    this.breadCrumbItems = [{ label: 'Category' }, { label: 'Config', active: true }];
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

  @ViewChild('table') table: MatTable<PeriodicElement>;
  displayedColumns: string[] = ['position', 'name', 'programcount', 'createddate', 'remove'];
  dataSource = ELEMENT_DATA;
  
  dropTable(event: CdkDragDrop<PeriodicElement[]>) {
    const prevIndex = this.dataSource.findIndex((d) => d === event.item.data);
    moveItemInArray(this.dataSource, prevIndex, event.currentIndex);
    this.table.renderRows();
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  programcount: number;
  createddate: string;
  remove: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Action', programcount: 10, createddate: '2020-03-01', remove: ''},
  {position: 2, name: 'Drama', programcount: 12, createddate: '2020-03-01', remove: ''},
  {position: 3, name: 'Thriller', programcount: 15, createddate: '2020-03-01', remove: ''},
  {position: 4, name: 'Horror', programcount: 17, createddate: '2020-03-01', remove: ''},
  {position: 5, name: 'Boron', programcount: 20, createddate: '2020-03-01', remove: ''},
  {position: 6, name: 'Carbon', programcount: 5, createddate: '2020-03-01', remove: ''},
  {position: 7, name: 'Nitrogen', programcount: 10, createddate: '2020-03-01', remove: ''},
  {position: 8, name: 'Oxygen', programcount: 16, createddate: '2020-03-01', remove: ''},
  {position: 9, name: 'Fluorine', programcount: 17, createddate: '2020-03-01', remove: ''},
  {position: 10, name: 'Neon', programcount: 18, createddate: '2020-03-01', remove: ''},
];

