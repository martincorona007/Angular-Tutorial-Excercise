import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArgentinaComponent } from './argentina/argentina.component';
import { ChileComponent } from './chile/chile.component';
import { UruguayComponent } from './uruguay/uruguay.component';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmericaRoutingModule { }
