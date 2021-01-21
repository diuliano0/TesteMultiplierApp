import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinhasReservasPageRoutingModule } from './minhas-reservas-routing.module';

import { MinhasReservasPage } from './minhas-reservas.page';
import {ComponentModule} from '../components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinhasReservasPageRoutingModule,
    ComponentModule
  ],
  declarations: [MinhasReservasPage]
})
export class MinhasReservasPageModule {}
