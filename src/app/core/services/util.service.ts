import {Injectable} from '@angular/core';
import {ActionSheetController, AlertController, LoadingController, ToastController} from '@ionic/angular';
import {DatePipe} from '@angular/common';
import {ConfigService} from './config.service';

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    constructor(public alerta: AlertController,
                public actionSheetCtrl: ActionSheetController,
                public toastController: ToastController,
                public loadingCtrl: LoadingController) {
    }

    static convertDateHourForIos(date) {
        if (UtilService.isNullOrUndefined(date)) {
            return date;
        }
        if (date instanceof Date) {
            return date;
        }
        let arr = date.split(/[- :]/);
        date = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]);
        return date;
    }

    static transformDate(data, format) {
        let datePipe = new DatePipe(ConfigService.language);
        return datePipe.transform(data, format);
    }

    /**
     * Converte o dia da semana de numério para string
     * */
    static converterDiaSemana(dia) {
        let diaString = ['DOMINGO', 'SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO'];
        return diaString[dia];
    }

    /**
     item deve ser passado no formato SEGUNDA,TERÇA
     * */
    static checkDiaSemanaBloqueado(item: string, dia: number): boolean {
        let auxDia = item.replace(/([\{\}])/, '').split(',');
        if (UtilService.isArray(auxDia)) {
            let checkDias = auxDia.filter((v) => {
                return (v.indexOf(UtilService.converterDiaSemana(dia)) > -1);
            });
            if (checkDias.length > 0) {
                return true;
            }
            ;
        } else {
            if (item == UtilService.converterDiaSemana(dia)) {
                return true;
            }
        }
        return false;
    }

    static isArray(obj): boolean {
        return Array.isArray(obj);
    }

    static removeAcento(text): string {
        text = text.toLowerCase();
        text = text.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
        text = text.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
        text = text.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
        text = text.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
        text = text.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
        text = text.replace(new RegExp('[Ç]', 'gi'), 'c');
        return text;
    }

    static dateFrom(string): any {
        return new Date(string);
    }

    static dateFromConvert(string): any {
        let partes = string.split('/');
        return new Date(partes[2], partes[1] - 1, partes[0]);
    }

    static dateDiff(a, b) {
        let diff = UtilService.dateFrom(a.replace(' ', 'T')) - UtilService.dateFrom(b.replace(' ', 'T'));
        return Math.round(diff / 864e5) + 1;
    }

    static addMinutes(date, minutes) {
        return new Date(date.getTime() + (minutes * 60000));
    }

    static addDay(date, days) {
        return new Date(date.getTime() + (days * 86400000));
    }

    static isNullOrUndefined(value) {
        return (value === null || value === undefined);
    }

    async createLoading(content = 'Carregando...', duracao = null, cssClass = null) {
        const config: any = {
            cssClass: '{cssClass}',
            message: content
        };
        if (!UtilService.isNullOrUndefined(duracao)) {
            config.duracao = duracao;
        }
        const load = await this.loadingCtrl.create(config);
        load.present();
        return load;
    }

    async createAlerta(titulo, subTitle, buttons: any = 'ok') {
        const config: any = {
            cssClass: '{cssClass}',
            header: titulo,
            message: subTitle,
            buttons: [buttons]
        };
        const load = await this.alerta.create(config);
        load.present();
        return load;
    }

    async toastAlert(message, duracao = 2000){
        const toast = await this.toastController.create({
            message: message,
            duration: duracao
        });
        toast.present();
    }

    async criarActionSheet(title, buttons) {
        let actionSheet = await this.actionSheetCtrl.create({
            header: title,
            cssClass: 'action-sheets-basic-page',
            buttons: buttons
        });
        actionSheet.present();
        return actionSheet ;
    }



}
