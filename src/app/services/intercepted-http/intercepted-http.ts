import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthProvider} from '../auth/auth';
import {Observable, throwError} from 'rxjs';
import {UtilService} from '../../core/services/util.service';
import {catchError, map, tap} from 'rxjs/operators';

const DEFAULT_HEADER_AUTHORIZATION = 'Authorization';
const DEFAULT_HEADER_PREFIX_BEARER = 'Bearer';
const DEFAULT_HEADER_JSON_APPLICATION = 'application/json';

@Injectable()
export class InterceptedHttpProvider implements HttpInterceptor {

    constructor(public util: UtilService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req.clone({
            headers: req.headers,
            setHeaders: {
                'Accept': DEFAULT_HEADER_JSON_APPLICATION
            }
        });
        req = req.clone({
            headers: req.headers,
            setHeaders: {
            'Referer':  'http://localhost/',
            }
        });

        if (!req.headers.has(DEFAULT_HEADER_AUTHORIZATION)) {
            let autenticado = AuthProvider.autenticado();
            if (autenticado) {
                authReq = req.clone({
                    headers: req.headers,
                    setHeaders: {
                        'Authorization': DEFAULT_HEADER_PREFIX_BEARER + ' ' + AuthProvider.getAccessTokenString(),
                    }
                });
            }
        }
        if (!req.headers.has('Content-Type')) {
            req = req.clone({
                headers: req.headers,
                setHeaders: {
                    'content-type': 'application/json'
                }
            });
        }
        return next.handle(authReq).pipe(
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                }
                return event;
            }),
            catchError((err: HttpErrorResponse) => {
                let error = err.error;
                let text = "";
                switch (err.status) {
                    case 422:
                        for (const i in error.errors) {
                            for (const c in error.errors[i]) {
                                text += `<b>${i}:</b> ${error.errors[i][c]}<br>`;
                            }
                        }
                        this.util.createAlerta('Informativo!', text, 'ok');
                        break;
                }
                return throwError(error);
            }));
    }

}
