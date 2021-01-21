import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CataoCadastroPageRoutingModule } from './catao-cadastro-routing.module';

import { CataoCadastroPage } from './catao-cadastro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CataoCadastroPageRoutingModule
  ],
  declarations: [CataoCadastroPage]
})
export class CataoCadastroPageModule {}
