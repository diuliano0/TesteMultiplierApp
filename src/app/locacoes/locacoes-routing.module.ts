import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocacoesPage } from './locacoes.page';

const routes: Routes = [
  {
    path: '',
    component: LocacoesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocacoesPageRoutingModule {}
