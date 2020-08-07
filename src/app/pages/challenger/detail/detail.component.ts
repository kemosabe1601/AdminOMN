import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  breadCrumbItems: Array<{}>;
  
  constructor() { }

  ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Challengers' }, { label: 'Detail', active: true }];
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
