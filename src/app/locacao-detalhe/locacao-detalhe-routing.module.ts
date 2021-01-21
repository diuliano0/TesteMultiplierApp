import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocacaoDetalhePage } from './locacao-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: LocacaoDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocacaoDetalhePageRoutingModule {}
