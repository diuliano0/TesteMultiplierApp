import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocacaoDetalhePageRoutingModule } from './locacao-detalhe-routing.module';

import { LocacaoDetalhePage } from './locacao-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocacaoDetalhePageRoutingModule
  ],
  declarations: [LocacaoDetalhePage]
})
export class LocacaoDetalhePageModule {}
