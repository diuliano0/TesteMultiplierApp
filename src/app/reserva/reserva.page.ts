import {Component, OnInit} from '@angular/core';
import {UtilService} from '../core/services/util.service';
import {Router} from '@angular/router';
import swal from 'sweetalert';

@Component({
    selector: 'app-reserva',
    templateUrl: './reserva.page.html',
    styleUrls: ['./reserva.page.scss'],
})
export class ReservaPage implements OnInit {

    constructor(public util: UtilService,
                private router: Router) {
    }

    ngOnInit() {
    }

    reservar() {
        this.sweetAlertInit();
    }


    sweetAlertInit() {
        swal({
            title: 'Confirmar Reserva?',
            text: 'Tudo certo? podemos confirmar seu pedido de reserva?',
            buttons: [ 'Revisar', 'Confirmar'],
        })
            .then((willDelete) => {
                if (willDelete) {
                    this.goToMinhasReservas();
                } else {
                    //this.goToHomePage();
                }
            });
    }

    goToMinhasReservas(){
        this.router.navigate(['/minhas-reservas'], {replaceUrl: true});
    }
}
