import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
columnas: string [] = ['codigo', 'descripcion','precio'];
  datos: Articulo[] = [new Articulo(1,'papas',55),
    new Articulo(2,'manzanas', 53),
    new Articulo(3,'naranjas',25),
  ];
  dataSource : any;
  ngOnInit(){
    this.dataSource = new MatTableDataSource(this.datos);
  }
  filtrar(event: Event){
    const filtro = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filtro.trim().toLowerCase();
  }
}
export class Articulo{
  constructor(public codigo: number,public descripcion: string,public precio: number){}
}
