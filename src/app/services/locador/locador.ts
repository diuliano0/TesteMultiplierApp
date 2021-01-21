
import { Injectable } from '@angular/core';
import {ConfigProvider} from '../base/config';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

/*
  Generated class for the TrabalhadorProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocadorProvider {

  public ressourceUrl: any = ConfigProvider.host + '/api/v1/front/locacao/locador';

  constructor(public http: HttpClient) {

  }

  perfil(params: any = {}, headers: HttpHeaders = null): Observable<any> {
    return this.http.get(this.ressourceUrl + '/perfil', {
      params: params,
      headers: headers
    }).pipe(
        map((response: any) => {
          return response;
        })
    );
  }

  create(data, params: any = {}, headers: HttpHeaders = null) {
    return this.http.post(this.ressourceUrl, data, {
      params: params,
      headers: headers
    }).pipe(
        map((response: any) => {
          return response;
        })
    );
  }

    enviarSabEmail(data, params: any = {}, headers: HttpHeaders = null) {
    return this.http.post(this.ressourceUrl + '/enviarSabEmail', data, {
      params: params,
      headers: headers
    }).pipe(
        map((response: any) => {
          return response;
        })
    );
  }

  update(data, params: any = {}, headers: HttpHeaders = null) {
    return this.http.put(this.ressourceUrl, data, {
      params: params,
      headers: headers
    }).pipe(
        map((response: any) => {
          return response;
        })
    );
  }

  mudarImagem(data, params: any = {}, headers: HttpHeaders = null) {
    return this.http.post(this.ressourceUrl + '/mudar-imagem', data, {
      params: params,
      headers: headers
    }).pipe(
        map((response: any) => {
          return response;
        })
    );
  }
}
