import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colorselect = "green";
  tamanoFuente = 30;
  cambiarColor(col:string){
    this.colorselect = col;
  }
  agrandar(){
    this.tamanoFuente++;
  }
  achicar(){
    this.tamanoFuente--;
  }
}
