import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HorariosLocacaoPageRoutingModule } from './horarios-locacao-routing.module';

import { HorariosLocacaoPage } from './horarios-locacao.page';
import {NgCalendarModule} from 'ionic2-calendar';
import {CalModalPageModule} from '../cal-modal/cal-modal.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HorariosLocacaoPageRoutingModule,
    NgCalendarModule,
    CalModalPageModule
  ],
  declarations: [HorariosLocacaoPage]
})
export class HorariosLocacaoPageModule {}
