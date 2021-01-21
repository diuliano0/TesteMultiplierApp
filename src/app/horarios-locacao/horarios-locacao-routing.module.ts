import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HorariosLocacaoPage } from './horarios-locacao.page';

const routes: Routes = [
  {
    path: '',
    component: HorariosLocacaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HorariosLocacaoPageRoutingModule {}
