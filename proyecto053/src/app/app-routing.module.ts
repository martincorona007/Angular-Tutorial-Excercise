import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmericaComponent } from './america/america.component';
import { ChileComponent } from './america/chile/chile.component';
import { ArgentinaComponent } from './america/argentina/argentina.component';
import { UruguayComponent } from './america/uruguay/uruguay.component';
import { EuropaComponent } from './europa/europa.component';
import { EspanaComponent } from './europa/espana/espana.component';
import { FranciaComponent } from './europa/francia/francia.component';
import { ItaliaComponent } from './europa/italia/italia.component';
const routes: Routes = [
  {
    path: 'america',
    component: AmericaComponent,
    children: [
      {
        path: 'chile',
        component: ChileComponent
      },
      {
        path: 'argentina',
        component: ArgentinaComponent
      },
      {
        path: 'uruguay',
        component: UruguayComponent
      }
    ]
  },
  {
    path: 'europa',
    component: EuropaComponent,
    children: [
      {
        path: 'espana',
        component: EspanaComponent
      },
      {
        path: 'francia',
        component: FranciaComponent
      },
      {
        path: 'italia',
        component: ItaliaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
