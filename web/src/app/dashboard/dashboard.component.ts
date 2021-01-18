import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  arr = [];
  constructor() { }

  ngOnInit(): void {
    for(let i = 0; i < 1000; i++) {
      this.arr.push(i);
    }
  }

}
