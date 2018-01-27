import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { IHttpCall } from './core/httpcall';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

@Injectable()
export class RestXService {
  public restcall: IHttpCall;
  constructor(private http: HttpClient) { }

  setRestCall(rawUrl: string, params: Map<string, string>, headers: Map<string, string>) {
    this.restcall = {rawURL: rawUrl, params: params, headers: headers};
  }

  getRest(url: string, params: Map<string, string>, headers: Map<string, string>): Observable<any>  {
    let h = new HttpHeaders();
    let p = new HttpParams();
    if (headers) {headers.forEach( (v, k) => {h = h.append(v, k); }); }
    if (params) {params.forEach( (v, k) => {p = p.append(v, k); } ); }

    return this.http.get(url, {  observe: 'response'}); // headers: h, params: p ,
  }

}
