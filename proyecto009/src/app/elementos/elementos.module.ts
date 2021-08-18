import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadoComponent } from './dado/dado.component';



@NgModule({
  declarations: [
    DadoComponent
  ],
  exports: [DadoComponent],
  imports: [
    CommonModule
  ]
})
export class ElementosModule { }
