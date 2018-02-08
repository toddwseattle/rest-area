import { Injectable } from '@angular/core';
import { HttpHeaders, HttpRequest, HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { IHttpCall } from './core/httpcall';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';


@Injectable()
export class RestXService {
  public restcall: IHttpCall;
  constructor(private http: HttpClient) { }

  setRestCall(rawUrl: string, params: Map<string, string>, headers: Map<string, string>, type?: string, body?: string) {
    this.restcall = {rawURL: rawUrl, params: params, headers: headers, type: type, body: body};
  }

  getRest(url: string, params: Map<string, string>, headers: Map<string, string>): Observable<HttpResponse<any>>  {
    let h = new HttpHeaders();
    let p = new HttpParams();

    const options = { observe: 'response'};
    if (headers) {headers.forEach( (v, k) => {h = h.append(k, v); }); }
    if (params) {params.forEach( (v, k) => {p = p.append(k, v); } ); }
    return this.http.get(url, {headers: h, params: p, observe: 'response'});
  }
  postRest(url: string, params: Map<string, string>, headers: Map<string, string>, body: any): Observable<HttpResponse<any>> {
    let h = new HttpHeaders();
    let p = new HttpParams();
    if (!headers.get('content-type')) {
      headers.set('content-type', 'application/json');
      body = JSON.parse(body);
    }
    const options = { observe: 'response'};
    if (headers) {headers.forEach( (v, k) => {h = h.append(k, v); }); }
    if (params) {params.forEach( (v, k) => {p = p.append(k, v); } ); }
    const req = new HttpRequest('POST', url, body, {headers: h, params: p});
    return this.http.request(req) as Observable<HttpResponse<any>>;
  }

}
