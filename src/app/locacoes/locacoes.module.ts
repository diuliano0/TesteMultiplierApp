import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocacoesPageRoutingModule } from './locacoes-routing.module';

import { LocacoesPage } from './locacoes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocacoesPageRoutingModule
  ],
  declarations: [LocacoesPage]
})
export class LocacoesPageModule {}
