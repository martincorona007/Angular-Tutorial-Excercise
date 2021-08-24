import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  slider1 = 0;
  slider2 = 0;
  slider3 = 0;
  suma = 0;

  cambiar(){
    this.suma = this.slider1 + this.slider2 + this.slider3;
  }
}
