import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  columnas: string[] = ['codigo', 'descripcion','precio'];
  datos: Articulo [] = [];
  dataSource : any;
  @ViewChild (MatSort, {static: true}) sort: MatSort | any;
  ngOnInit(){
    for(let x = 1; x <=10 ; x++)
      this.datos.push(new Articulo(x,`articulo ${x}`,Math.trunc(Math.random()*1000)));
      this.dataSource = new MatTableDataSource<Articulo>(this.datos);
      this.dataSource.sort = this.sort;
  }
}
export class Articulo{
  constructor(public codigo: number, public descripcion: string, public precio: number){}
}
