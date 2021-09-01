import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'boot-menudebarra',
  templateUrl: './menudebarra.component.html',
  styleUrls: ['./menudebarra.component.css']
})
export class MenudebarraComponent implements OnInit {
  @Input() opciones: string[] | any;
  @Input() colorfondo: string[] | any;
  @Output() presionopcion = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  presion(i: number): void{
    this.presionopcion.emit(i);
  }

}
