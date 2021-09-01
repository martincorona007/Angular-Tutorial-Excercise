import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tablanro',
  templateUrl: './tablanro.component.html',
  styleUrls: ['./tablanro.component.css']
})
export class TablanroComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  nro: number = 0;
  tabla: string = '';

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.nro = parseInt(parametros.get("nro"));
      this.tabla = '';
      for (let x = 1; x <= 10; x++) {
        let t = x * this.nro;
        this.tabla += t + '-';
      }
    })
    /*this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.nro = parseInt(parametros.get("nro"));
      this.tabla = '';
      for (let x = 1; x <= parseInt(parametros.get("terminos")); x++) {
        let t = x * this.nro;
        this.tabla += t + '-';
      }
    })*/
  }

}