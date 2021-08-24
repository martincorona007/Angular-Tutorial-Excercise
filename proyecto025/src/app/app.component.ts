import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   valor1 : any;
   valor2 : any;
   resultado : any;
   opcion1 = false;
   opcion2 = false;
   opcion3 = false;
   opcion4 = false;
   operar(){
     this.resultado = '';
    if(this.opcion1){
      let ope = this.valor1 + this.valor2;
      this.resultado+=`La suma es ${ope}`;
    }
    if(this.opcion2){
      let ope = this.valor1 - this.valor2;
      this.resultado += `La sub es ${ope}`;
    }
    if(this.opcion3){
      let ope = this.valor1 * this.valor2;
      this.resultado += `La mult es ${ope}`;
    }
    if(this.opcion4){
      let ope = this.valor1 / this.valor2;
      this.resultado += `La divi es ${ope}`;
    }
   }
}
