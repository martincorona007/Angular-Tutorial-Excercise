import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercadeComponent } from './acercade/acercade.component';
import { JuegodadosComponent } from './juegodados/juegodados.component';

const routes: Routes = [
  {
    path: 'juegodados', component : JuegodadosComponent
  },
  {
    path: 'acercade',component: AcercadeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
