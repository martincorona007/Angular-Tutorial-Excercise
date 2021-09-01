import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resultado: any;
  formularioContacto = new FormGroup({
    nombre: new FormControl('',[Validators.required,Validators.minLength(10)]),
    mail: new FormControl('',[Validators.required,Validators.email]),
    mensaje: new FormControl('',[Validators.required,Validators.maxLength(500)])
  });
  submit(){
    if(this.formularioContacto.valid)
      this.resultado = "todos los datos son validos"
    else
      this.resultado = "Hay datos invalidos en el formulario"
  }
}
