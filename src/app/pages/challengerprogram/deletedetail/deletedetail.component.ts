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
    this.breadCrumbItems = [{ label: 'Deleted Request' }, { label: 'Detail', active: true }];
  }

  toggleEdit() {
    document.getElementById("currentStatus").removeAttribute("readonly");
    document.getElementById("inputId").removeAttribute("readonly");
    document.getElementById("titleName").removeAttribute("readonly");
    document.getElementById("subtitle").removeAttribute("readonly");
    document.getElementById("summary").removeAttribute("readonly");
    document.getElementById("category").removeAttribute("readonly");
    document.getElementById("participant").removeAttribute("readonly");
    document.getElementById("type").removeAttribute("readonly");
    document.getElementById("content").removeAttribute("readonly");
    document.getElementById("musicInfo").removeAttribute("readonly");
  }
}
