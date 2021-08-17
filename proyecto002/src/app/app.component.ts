import { Component } from '@angular/core';

import {art} from './ts-cls-articulos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  art = {
    codigo : null,   
    descripcion : null,
    precio : null
  }
  articulos = [
    {codigo: 1,descripcion: 'papas',precio: 10.55},
    {codigo: 2,descripcion: 'manzanas',precio: 12.10},
    {codigo: 3,descripcion: 'melon',precio: 52.30},
    {codigo: 4,descripcion: 'cebollas',precio: 17},
    {codigo: 5,descripcion: 'calabaza',precio: 20},
  ];
  hayRegistros(){
    return this.articulos.length > 0;
  }
  
  borrar(art){
    for(let x = 0; x < this.articulos.length; x++){
      if(this.articulos[x].codigo == art.codigo){
        this.articulos.splice(x,1);
      }
    }
  }
  agregar(){
    for(let x = 0; x < this.articulos.length; x++){
      if(this.articulos[x].codigo == this.art.codigo){
        alert('ya existe un articulo con dicho codigo');
        return;
      }
    }
    this.articulos.push({codigo:this.art.codigo,descripcion:this.art.descripcion,precio: this.art.precio});
    this.art.codigo = null;
    this.art.descripcion = null;
    this.art.precio =  null;
  }
  seleccionar(art){
    this.art.codigo = art.codigo;
    this.art.descripcion = art.descripcion;
    this.art.precio = art.precio;
  }
  modificar(){
    for(let x = 0; x < this.articulos.length; x++){
      if(this.articulos[x].codigo == this.art.codigo){
        this.articulos[x].descripcion = this.art.descripcion;
        this.articulos[x].precio = this.art.precio;
        return;
        alert('No existe el codigo de ar');
      }
    }
  }
}
