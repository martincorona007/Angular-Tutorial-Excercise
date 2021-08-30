import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmericaComponent } from './america/america.component';
import { ChileComponent } from './america/chile/chile.component';
import { ArgentinaComponent } from './america/argentina/argentina.component';
import { UruguayComponent } from './america/uruguay/uruguay.component';
import { EuropaComponent } from './europa/europa.component';
import { EspanaComponent } from './europa/espana/espana.component';
import { FranciaComponent } from './europa/francia/francia.component';
import { ItaliaComponent } from './europa/italia/italia.component';

@NgModule({
  declarations: [
    AppComponent,
    AmericaComponent,
    ChileComponent,
    ArgentinaComponent,
    UruguayComponent,
    EuropaComponent,
    EspanaComponent,
    FranciaComponent,
    ItaliaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
