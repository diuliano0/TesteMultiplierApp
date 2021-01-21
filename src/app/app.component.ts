import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'mail'
    },
    {
      title: 'Perfil',
      url: '/perfil',
      icon: 'paper-plane'
    },
    {
      title: 'Notificações',
      url: '/notificacoes',
      icon: 'heart'
    },
    {
      title: 'Cartões',
      url: '/cartoes',
      icon: 'archive'
    },
    {
      title: 'Minhas Reservas',
      url: '/minhas-reservas',
      icon: 'home_repair_service'
    },
    {
      title: 'Ajuda',
      url: '/folder/Spam',
      icon: 'warning'
    },
    {
      title: 'Sair',
      url: '/folder/Spam',
      icon: 'warning'
    }
  ];
  //public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  /*errorRequestEvents() {
    this.events.subscribe("unauthorized:requestError",
        () => {
          this.appCtrl.getActiveNav().popToRoot().then(res => {
            this.appCtrl.getRootNav().setRoot('SignInPage');
            this.util.criarAlert("Sessão expirada", "Por favor realize o login novamente.", "OK");
          });
        });

    this.events.subscribe("timeout:requestError",
        () => {
          this.appCtrl.getActiveNav().popToRoot().then(res => {
            this.appCtrl.getRootNav().setRoot('SignInPage');
            this.util.criarAlert("Erro ao conectar", "Por favor verifique a sua conexão com a internet.", "OK");
          });
        });
  }*/

}
