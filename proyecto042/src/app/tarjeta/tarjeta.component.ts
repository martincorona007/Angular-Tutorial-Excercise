import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'boot-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {
  @Input() datos :any ;
  @Output() presionopcion = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  presion(): void {
    this.presionopcion.emit();
  }

}
