import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  title = 'Currency Formats';
  value: number = 5678.9;

  constructor() { }

  ngOnInit() {
  }

}
