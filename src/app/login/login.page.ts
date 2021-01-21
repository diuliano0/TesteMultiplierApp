import {Component, OnInit} from '@angular/core';
import {AuthProvider} from '../services/auth/auth';
import {Router} from '@angular/router';
import {MenuController, ModalController, NavParams} from '@ionic/angular';
import {UtilService} from '../core/services/util.service';
import {LocadorProvider} from '../services/locador/locador';
import {FormBuilder, Validators} from '@angular/forms';
import {DeviceProvider} from '../services/device/device';
import {HomePage} from '../home/home.page';
import {UniqueDeviceID} from '@ionic-native/unique-device-id/ngx';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    signInForm;

    constructor(
        public menuCtrl: MenuController,
        public fb: FormBuilder,
        public navParams: NavParams,
        public modalCtrl: ModalController,
        public util: UtilService,
        public auth: AuthProvider,
        public deviceProvider: DeviceProvider,
        private uniqueDeviceID: UniqueDeviceID,
        public locadorService: LocadorProvider,
        private router: Router
    ) {
        this.menuCtrl.enable(false);
        if (AuthProvider.autenticado()) {
            this.router.navigate(['/home']);
        }
    }

    ngOnInit() {
        this.formValidation();
    }

    formValidation() {
        this.signInForm = this.fb.group({
            //'nome_conta': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)])],
            'username': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(64)])],
            'password': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(32)])]
        });
    }

  doLogin(value) {
    if (!this.signInForm.invalid) {
      this.fazerLogin(value);
      return;
      if (AuthProvider.contemUUID()) {
        this.fazerLogin(value);
      } else {
        this.uniqueDeviceID.get()
            .then((uuid: any) => {
              console.log(uuid);
              AuthProvider.setDeviceUUID(uuid);
              this.fazerLogin(value);
            })
            .catch((error: any) => {
              console.log(error.toString());
            });
      }
    }
  }

  fazerLogin(value) {
    let load = this.util.createLoading('Logando...');
    value.username = value.username.toLowerCase();
    this.auth.getAccessToken(value).subscribe(res => {
      this.deviceProvider.register({
        uuid: 'vaefefvaefv',//AuthProvider.getDeviceUUID(),
        token_register: 'vaefefvaefv',//AuthProvider.getFCMToken()
      }).subscribe(registro => {
        this.locadorService.perfil({
          include: 'pessoa.telefone,anexo,pessoa.endereco,usuario'
        }).subscribe(res => {
          AuthProvider.setUser(res);
          load.then((x) => {
            x.dismiss();
          });
          this.router.navigate(['/home']);
        }, error2 => {
          this.util.toastAlert('O usuario não é um Locador');
          load.then((x) => {
            x.dismiss();
          });
          AuthProvider.deslogar();
        });
      }, error1 => {
        this.util.toastAlert('O dispositivo não pode ser registrado');
        console.log(error1);
        load.then((x) => {
          x.dismiss();
        });
        AuthProvider.deslogar();
      });
    }, error2 => {
      this.util.toastAlert('Usuario e/ou senha inválidos');
      load.then((x) => {
        x.dismiss();
      });
    });
  }

  async openHomePage() {
    const modal = await this.modalCtrl.create({
      component: HomePage
    });
    return await modal.present();
  }


  goToCadastro(){
      this.router.navigate(['/cadastro']);
  }

  goToRecuperarSenha(){
      this.router.navigate(['/recuperar-senha']);
  }

}
