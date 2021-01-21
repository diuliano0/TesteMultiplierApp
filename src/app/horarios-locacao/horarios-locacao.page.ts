import {Component, Inject, LOCALE_ID, OnInit, ViewChild} from '@angular/core';
import {CalendarComponent} from 'ionic2-calendar';
import {AlertController, ModalController} from '@ionic/angular';
import {CalModalPage} from '../cal-modal/cal-modal.page';
import {formatDate} from '@angular/common';

@Component({
    selector: 'app-horarios-locacao',
    templateUrl: './horarios-locacao.page.html',
    styleUrls: ['./horarios-locacao.page.scss'],
})
export class HorariosLocacaoPage implements OnInit {
    eventSource = [];
    viewTitle: string;
    horarioSelect: any;
    calendar = {
        mode: 'month',
        currentDate: new Date(),
    };

    selectedDate: Date;

    @ViewChild(CalendarComponent) myCal: CalendarComponent;

    constructor(
        private alertCtrl: AlertController,
        @Inject(LOCALE_ID) private locale: string,
        private modalCtrl: ModalController
    ) {
    }

    ngOnInit() {
        this.createRandomEvents();
    }

    // Change current month/week/day
    next() {
        this.myCal.slideNext();
    }

    back() {
        this.myCal.slidePrev();
    }

    // Selected date reange and hence title changed
    onViewTitleChanged(title) {
        this.viewTitle = title;
    }

    // Calendar event was clicked
    async onEventSelected(event) {
        // Use Angular date pipe for conversion
        const start = formatDate(event.startTime, 'medium', this.locale);
        const end = formatDate(event.endTime, 'medium', this.locale);

        const alert = await this.alertCtrl.create({
            header: event.title,
            subHeader: event.desc,
            message: 'Inicio: ' + start + '<br><br>Fim: ' + end,
            buttons: ['OK'],
        });
        alert.present();
    }

    createRandomEvents() {
        const events = [];
        for (let i = 0; i < 50; i += 1) {
            const date = new Date();
            const eventType = Math.floor(Math.random() * 2);
            const startDay = Math.floor(Math.random() * 90) - 45;
            let endDay = Math.floor(Math.random() * 2) + startDay;
            let startTime;
            let endTime;
            if (eventType === 0) {
                startTime = new Date(
                    Date.UTC(
                        date.getUTCFullYear(),
                        date.getUTCMonth(),
                        date.getUTCDate() + startDay
                    )
                );
                if (endDay === startDay) {
                    endDay += 1;
                }
                endTime = new Date(
                    Date.UTC(
                        date.getUTCFullYear(),
                        date.getUTCMonth(),
                        date.getUTCDate() + endDay
                    )
                );
                events.push({
                    title: 'All Day - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: true,
                });
            } else {
                const startMinute = Math.floor(Math.random() * 24 * 60);
                const endMinute = Math.floor(Math.random() * 180) + startMinute;
                startTime = new Date(
                    date.getFullYear(),
                    date.getMonth(),
                    date.getDate() + startDay,
                    0,
                    date.getMinutes() + startMinute
                );
                endTime = new Date(
                    date.getFullYear(),
                    date.getMonth(),
                    date.getDate() + endDay,
                    0,
                    date.getMinutes() + endMinute
                );
                events.push({
                    title: 'Event - ' + i,
                    startTime: startTime,
                    endTime: endTime,
                    allDay: false,
                });
            }
        }
        this.eventSource = events;
    }

    removeEvents() {
        this.eventSource = [];
    }

    async openCalModal() {
        const modal = await this.modalCtrl.create({
            component: CalModalPage,
            cssClass: 'cal-modal',
            backdropDismiss: false
        });

        await modal.present();

        modal.onDidDismiss().then((result) => {
            if (result.data && result.data.event) {
                const event = result.data.event;
                if (event.allDay) {
                    const start = event.startTime;
                    event.startTime = new Date(
                        Date.UTC(
                            start.getUTCFullYear(),
                            start.getUTCMonth(),
                            start.getUTCDate()
                        )
                    );
                    event.endTime = new Date(
                        Date.UTC(
                            start.getUTCFullYear(),
                            start.getUTCMonth(),
                            start.getUTCDate() + 1
                        )
                    );
                }
                this.eventSource.push(result.data.event);
                this.myCal.loadEvents();
            }
        });
    }

    onCurrentDateChanged($event) {

    }

    selectHorario(horario) {
        this.horarioSelect = horario.detail.value;
    }

}
