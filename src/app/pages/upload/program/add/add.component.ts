import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  constructor() {}

  breadCrumbItems: Array<{}>;
  
  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Upload Program' }, { label: 'Add', active: true }];
  }

}
