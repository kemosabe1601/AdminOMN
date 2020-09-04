import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deletedetail',
  templateUrl: './deletedetail.component.html',
  styleUrls: ['./deletedetail.component.scss']
})
export class DeletedetailComponent implements OnInit {
  breadCrumbItems: Array<{}>;

  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Deleted Upload Program Request' }, { label: 'Detail', active: true }];
  }

}
