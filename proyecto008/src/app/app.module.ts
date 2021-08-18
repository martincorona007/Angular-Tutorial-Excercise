import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListadoarticulosComponent } from './listadoarticulos/listadoarticulos.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoarticulosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
