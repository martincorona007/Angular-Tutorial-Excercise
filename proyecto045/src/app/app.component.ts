import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valor1: number = 0;
  valor2: number = 0;
  operacion: string ="ninguna";
  resultado: number = 0 ;
}
