import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {RecuperarSenhaPageRoutingModule} from './recuperar-senha-routing.module';

import {RecuperarSenhaPage} from './recuperar-senha.page';
import {UsuarioProvider} from '../services/usuario/usuario';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        IonicModule,
        RecuperarSenhaPageRoutingModule
    ],
    declarations: [RecuperarSenhaPage],
    providers: [
        UsuarioProvider
    ]
})
export class RecuperarSenhaPageModule {
}
