import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {UtilService} from '../core/services/util.service';
import {UsuarioProvider} from '../services/usuario/usuario';

@Component({
  selector: 'app-recuperar-senha',
  templateUrl: './recuperar-senha.page.html',
  styleUrls: ['./recuperar-senha.page.scss'],
})
export class RecuperarSenhaPage implements OnInit {

  recuperarForm;

  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

  constructor(private router: Router,
              public usuario: UsuarioProvider,
              public util: UtilService,
              public fb: FormBuilder) { }

  ngOnInit() {
    this.formValidation();
  }

  recuperar(value){
    if (!this.recuperarForm.invalid) {
      const load = this.util.createLoading('Enviando');
      this.usuario.recuperarSenha(value).subscribe(res => {
        load.then((x) => {
          x.dismiss();
        });
        this.util.createAlerta('Informativo!', 'Você receberá um email com os dados para alterar a senha', 'ok');
        this.voltar();
      }, error => {
        this.util.createAlerta('Informativo!', 'E-mail não encontrado!', 'ok');
        load.then((x) => {
          x.dismiss();
        });
      });
    }
  }

  formValidation() {
    this.recuperarForm = this.fb.group({
      email: [null, Validators.compose([Validators.pattern(this.emailPattern), Validators.required])]
    });
  }

  voltar(){
    this.router.navigate(['/login']);
  }

}
