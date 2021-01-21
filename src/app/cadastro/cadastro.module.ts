import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {CadastroPageRoutingModule} from './cadastro-routing.module';

import {CadastroPage} from './cadastro.page';
import {BrMaskerModule} from 'br-mask';
import {LocadorProvider} from '../services/locador/locador';
import {UtilService} from '../core/services/util.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        BrMaskerModule,
        CadastroPageRoutingModule
    ],
    declarations: [CadastroPage],
    providers: [
        LocadorProvider,
        UtilService
    ]
})
export class CadastroPageModule {
}
