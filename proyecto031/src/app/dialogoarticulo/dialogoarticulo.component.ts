import { Component, OnInit, Inject } from '@angular/core';
import { Articulo } from '../articulo';
import {MatDialog,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialogoarticulo',
  templateUrl: './dialogoarticulo.component.html',
  styleUrls: ['./dialogoarticulo.component.css']
})
export class DialogoarticuloComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<DialogoarticuloComponent>, @Inject(MAT_DIALOG_DATA) public data: Articulo) { }

  ngOnInit(): void {
  }
  cancelar(){
    this.dialogRef.close();
  }

}
