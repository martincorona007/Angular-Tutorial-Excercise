import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  columnas: string[] = ['codigo','descripcion','precio','borrar'];
  datos: Articulo[] = [new Articulo(1, 'papas', 55),
  new Articulo(2, 'manzanas', 53),
  new Articulo(3, 'naranjas', 25),
  ];
articuloselect: Articulo = new Articulo(0,"",0);
@ViewChild(MatTable) tabla1: MatTable<Articulo> | any;

borrarFila(cod: number){
  if(confirm("Realmente quiere borrarlo?")){
    this.datos.splice(cod,1);
    this.tabla1.renderRows();
  }
}
agregar(){
  this.datos.push(new Articulo(this.articuloselect.codigo,this.articuloselect.descripcion,this.articuloselect.precio));
  this.tabla1.renderRows();
  this.articuloselect = new Articulo(0,"",0);
}
}

export class Articulo{
  constructor(public codigo: number,public descripcion:string,public precio: number){

  }
}
