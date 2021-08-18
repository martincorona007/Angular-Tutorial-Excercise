//module
import { Component,ViewChild } from '@angular/core';
//component
import { SelectornumericoComponent } from './selectornumerico/selectornumerico.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('selector1') selector1: SelectornumericoComponent = new SelectornumericoComponent;
  @ViewChild('selector2') selector2: SelectornumericoComponent = new SelectornumericoComponent;
  
  fijarSelector1(valor:number){
    this.selector1.fijar(valor);
  }
  fijarSelector2(valor:number){
    this.selector2.fijar(valor);
  }
}
