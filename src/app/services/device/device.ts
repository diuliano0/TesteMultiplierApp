import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ConfigProvider} from "../base/config";
import {map} from "rxjs/operators";
import {AuthProvider} from "../auth/auth";
import {Observable} from "rxjs";

/*
  Generated class for the DeviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DeviceProvider {

  public ressourceUrl: any = ConfigProvider.host + '/api/v1/front/core/device';

  constructor(public http: HttpClient) {}

  register(data, params: any = {}, headers: HttpHeaders = null): Observable<any> {
    return this.http.post(this.ressourceUrl+'/registrar', data, {
      params: params,
      headers: headers
    }).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  desregister(params: any = {}, headers: HttpHeaders = null): Observable<any> {
    return this.http.get(this.ressourceUrl+'/desregistrar/'+AuthProvider.getDeviceUUID(), {
      params: params,
      headers: headers
    }).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

}
