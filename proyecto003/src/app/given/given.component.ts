import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-given',
  templateUrl: './given.component.html',
  styleUrls: ['./given.component.css']
})
export class GivenComponent implements OnInit {
  value!: number;
  constructor() { }

  ngOnInit(): void {
    this.value = Math.trunc(Math.random()*6)+1;
  }

}
