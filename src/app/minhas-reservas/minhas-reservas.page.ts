import {Component, OnInit} from '@angular/core';
import swal from 'sweetalert';

@Component({
    selector: 'app-minhas-reservas',
    templateUrl: './minhas-reservas.page.html',
    styleUrls: ['./minhas-reservas.page.scss'],
})
export class MinhasReservasPage implements OnInit {

    item = {
        expanded: false
    };

    constructor() {
    }

    ngOnInit() {
    }

    changeClass(ev) {
        this.item.expanded = !this.item.expanded;
        if (ev.innerHTML == 'keyboard_arrow_down') {
            ev.innerHTML = 'expand_less';
            ev.style.background = '#002BD9';
            return;
        }
        ev.innerHTML = 'keyboard_arrow_down';
        ev.style.background = '#FB9B00';
    }

    cancelarReserva(){
      swal({
        title: 'Cancelar reserva?',
        text: 'Tem certeza que podemos cancelar? Lembrando que as taxas administrativas são retidas mesmo com o cancelamento.',
        buttons: [ 'Agora não', 'confirmar'],
      })
          .then((willDelete) => {
            if (willDelete) {
              //this.goToMinhasReservas();
            } else {
              //this.goToHomePage();
            }
          });
    }
}
