import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datos:string = '';
  formularioContacto = new FormGroup({
    nombre: new FormControl(''),
    mail: new FormControl(''),
    mensaje: new FormControl('')
  });
  submit(){
    this.datos = `Nombre = ${this.formularioContacto.value.nombre}
                  Mail = ${this.formularioContacto.value.mail}
                  Mensaje = ${this.formularioContacto.value.mensaje}`;
  }
}
