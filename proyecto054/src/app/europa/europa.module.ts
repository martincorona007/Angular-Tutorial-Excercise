import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EuropaRoutingModule } from './europa-routing.module';
import { EspanaComponent } from './espana/espana.component';
import { FranciaComponent } from './francia/francia.component';
import { ItaliaComponent } from './italia/italia.component';


@NgModule({
  declarations: [
    EspanaComponent,
    FranciaComponent,
    ItaliaComponent
  ],
  imports: [
    CommonModule,
    EuropaRoutingModule
  ]
})
export class EuropaModule { }
