import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule, NavParams} from '@ionic/angular';

import {LoginPageRoutingModule} from './login-routing.module';

import {LoginPage} from './login.page';
import {UtilService} from '../core/services/util.service';
import {AuthProvider} from '../services/auth/auth';
import {LocadorProvider} from '../services/locador/locador';
import {HttpClient, HttpClientModule, HttpHandler} from '@angular/common/http';
import {DeviceProvider} from '../services/device/device';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        IonicModule,
        LoginPageRoutingModule
    ],
    declarations: [LoginPage],
    providers: [
        NavParams,
        UtilService,
        AuthProvider,
        LocadorProvider,
        DeviceProvider
    ]
})
export class LoginPageModule {
}
