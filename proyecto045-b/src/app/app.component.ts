import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  forma = {
    'clase1 clase2': true
  }
  fijar(){
    this.forma['clase1 clase2']=true;
  }
  eliminar(){
    this.forma['clase1 clase2']=false;
  }
}
