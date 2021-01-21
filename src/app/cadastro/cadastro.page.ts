import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {CpfValidator} from '../validators/cpf-validator';
import {LocadorProvider} from '../services/locador/locador';
import {UtilService} from '../core/services/util.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-cadastro',
    templateUrl: './cadastro.page.html',
    styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

    cadastroForm;
    emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$';

    constructor(
        public formBuilder: FormBuilder,
        public locadorProvider: LocadorProvider,
        public util: UtilService,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.formValidation();
    }

    formValidation() {
        this.cadastroForm = this.formBuilder.group({
            nome: [null, Validators.compose([Validators.minLength(6), Validators.required])],
            username: [null, Validators.compose([Validators.minLength(3), Validators.maxLength(255), Validators.required])],
            cpf_cnpj: [null, Validators.compose([Validators.minLength(6), CpfValidator.isValid, Validators.required])],
            email: [null, Validators.compose([Validators.pattern(this.emailPattern), Validators.required])],
            email_confirmation: [null, Validators.compose([Validators.pattern(this.emailPattern), Validators.required])],
            password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
            password_confirmation: [null, Validators.compose([Validators.minLength(6), Validators.maxLength(255), Validators.required])],
            telefone: [null, Validators.compose([Validators.minLength(6), Validators.maxLength(255), Validators.required])],
        });
    }

    cadastrar(value) {
        if (value.email != value.email_confirmation) {
            this.util.createAlerta('Informativo!', 'Os e-mail\'s não estão iguais', 'ok');
            return;
        }
        this.cadastroForm.controls['username'].setValue(this.cadastroForm.controls['email'].value);
        value = this.cadastroForm.value;
        if (!this.cadastroForm.invalid) {
            const load = this.util.createLoading('Cadastrando...');

            const telefone = value.telefone.split(')');
            telefone[0] = telefone[0].replace('(', '');
            const pessoa = {
                nome: value.nome,
                email: value.email,
                cpf_cnpj: value.cpf_cnpj,
                telefones: [{
                    ddd: telefone[0],
                    numero: telefone[1],
                    tipo_telefone: 1,
                }]
            };

            const user = {
                nome: value.nome,
                username: value.username,
                email: value.email,
                password: value.password,
                password_confirmation: value.password,
                status: 1,
            };


            this.locadorProvider.create({
                pessoa: pessoa,
                user: user,
                status: 1
            }).subscribe(res => {
                load.then((x) => {
                    x.dismiss();
                });
                this.util.createAlerta('Sucesso!', 'Conta criada com sucesso', 'ok');
                this.voltar();
            }, error1 => {
                this.util.createAlerta('info!', 'Erro ao cadastrar! tente novamente mais tarde.', 'ok');
                load.then((x) => {
                    x.dismiss();
                });
            });
        }
    }

    voltar(){
        this.router.navigate(['/login']);
    }

}
