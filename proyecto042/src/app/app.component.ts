import { Component } from '@angular/core';
import { UsuarioService } from './usuario.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  usuario : any;
  constructor(private usuairoService: UsuarioService){}
  ngOnInit(){
    this.recuperarPersona();
  }
  recuperarPersona(){
    this.usuairoService.retornar().subscribe(result => this.usuario = result);
  }
  presion(){
    this.recuperarPersona();
  }
}
