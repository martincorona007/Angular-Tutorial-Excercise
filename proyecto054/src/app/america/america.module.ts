import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmericaRoutingModule } from './america-routing.module';
import { ChileComponent } from './chile/chile.component';
import { ArgentinaComponent } from './argentina/argentina.component';
import { UruguayComponent } from './uruguay/uruguay.component';


@NgModule({
  declarations: [
    ChileComponent,
    ArgentinaComponent,
    UruguayComponent
  ],
  imports: [
    CommonModule,
    AmericaRoutingModule
  ]
})
export class AmericaModule { }
