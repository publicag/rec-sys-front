import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class TmdbHttpInterceptor implements HttpInterceptor {
    intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const isTmdbUrl = httpRequest.url.startsWith(environment.tmdbUrl);

        if (isTmdbUrl) {
            const API_KEY = '**';
            let params = new HttpParams()
                .set('api_key', API_KEY)
                .set('include_image_language', "en");
                
            httpRequest = httpRequest.clone({
                params: params
            });
        }

        return next.handle(httpRequest);
    }
}