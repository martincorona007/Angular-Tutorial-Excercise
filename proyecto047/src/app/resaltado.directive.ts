import { Directive,ElementRef,Input,OnInit,SimpleChanges,OnChanges } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {
  @Input('appResultado') colorResaltado: any;
  @Input('tamano') tam: any;
  constructor(private elemento: ElementRef) { }
  ngOnInit(): void{
    this.actualizar();
  }
  ngOnChanges(changes: SimpleChanges){
    this.actualizar();
  }
  actualizar(){
    if(this.colorResaltado != null)
      this.elemento.nativeElement.style.backgroundColor = this.colorResaltado;
    else
      this.elemento.nativeElement.style.backgroundColor = 'yellow';
    if(this.tam > 0){
      console.log(this.elemento.nativeElement);
      this.elemento.nativeElement.style.fontSize = this.tam + 'px';
    }
  }
}
