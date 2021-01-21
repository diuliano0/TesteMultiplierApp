import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  //static host = 'http://qative.ddns.net:4500';

  //static host = 'http://192.168.2.175:4500';

  static host = 'https://api.awardsgame.com';
  //static host = 'http://127.0.0.1:8000';

  static token = 'Z6UTO36NWuPGqTcIb7cdrO9BAGQSAu7AISBe2UEU';

  //static host_social = 'http://qative.ddns.net:4500';
  //static host_social = 'https://api.medbrasil.com.br';
  //static host_social = 'http://127.0.0.1:8000';
  static host_social = 'https://api.awardsgame.com';

  //static host_social = 'http://192.168.2.175:4500';
  static language  = 'pt_BR';
  static client_id = 1;
  static grant_type ='password';

  constructor() { }
}
