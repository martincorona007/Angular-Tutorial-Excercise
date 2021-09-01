import { Component } from '@angular/core';
import { Validators,FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resultado: string = '';
  constructor(private fb: FormBuilder){}
  formularioContacto = this.fb.group({
    nombre: ['',[Validators.required,Validators.minLength]],
    mail: ['',[Validators.required,Validators.email]],
    mensaje: ['',[Validators.required,Validators.maxLength]]
  });
  submit(){
    if(this.formularioContacto.valid)
      this.resultado = "Todos los datos son validos";
    else  
      this.resultado = "Hay datos invalidos en el formulario"
  }
}
