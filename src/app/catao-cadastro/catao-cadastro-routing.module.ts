import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CataoCadastroPage } from './catao-cadastro.page';

const routes: Routes = [
  {
    path: '',
    component: CataoCadastroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CataoCadastroPageRoutingModule {}
