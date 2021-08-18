//modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//modules
import { ElementosModule } from './elementos/elementos.module';
//Components
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, ElementosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
