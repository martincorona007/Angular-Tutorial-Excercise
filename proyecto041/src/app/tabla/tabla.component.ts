import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'boot-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  @Input()
  titulos: string[] = [];
  @Input() filas: any;
  objectKeys =Object.keys;
  constructor() { }

  ngOnInit(): void {
  }

}
