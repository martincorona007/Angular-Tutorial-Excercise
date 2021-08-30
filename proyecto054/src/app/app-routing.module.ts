import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmericaComponent } from './america/america.component';
import { EuropaComponent } from './europa/europa.component';
const routes: Routes = [
  {
    path: 'america',
    component: AmericaComponent,
    loadChildren: () => import('./america/america.module').then(m => m.AmericaModule)
  },
  {
    path: 'europa',
    component: EuropaComponent,
    loadChildren: () => import('./europa/europa.module').then(m => m.EuropaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
