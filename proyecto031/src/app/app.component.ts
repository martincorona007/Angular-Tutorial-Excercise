import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Articulo } from './articulo';
import { DialogoarticuloComponent } from './dialogoarticulo/dialogoarticulo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  columnas: string[] =['codigo','descripcion','precio','borrar'];
  datos: Articulo[] = [new Articulo(1,'papas',55),
  new Articulo(2,'manzanas',53),
  new Articulo(3,'naranjas',25),  
]
  ds = new MatTableDataSource<Articulo>(this.datos);
  @ViewChild(MatTable) tabla1: MatTable<Articulo> | any;
  constructor(public dialog: MatDialog){}
  abrirDialogo(){
    const dialogo1 = this.dialog.open(DialogoarticuloComponent,{
      data: new Articulo(0,'',0)
    });
    dialogo1.afterClosed().subscribe(art=> {
      if(art != undefined)
        this.agregar(art);
    });
    
  }
  borrarFila(cod: number){
    if(confirm("Realment quiere borrarlo?")){
      this.datos.splice(cod,1);
      this.tabla1.renderRows();
    }
  }
  agregar(art: Articulo){
    this.datos.push(new Articulo(art.codigo,art.descripcion,art.precio));
    this.tabla1.renderRows();
  }
}

