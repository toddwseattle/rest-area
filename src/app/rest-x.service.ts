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

    const options = { observe: 'response'};
    if (headers) {headers.forEach( (v, k) => {h = h.append(k, v); }); }
    if (params) {params.forEach( (v, k) => {p = p.append(k, v); } ); }
    // refactor refactor there has got to be a better way to do this; but I can't figure out
    // how to create a generic structure to pass the the HttpClient
    if (p && (p.keys().length > 0) && (h && (h.keys().length > 0)))  {
      return this.http.get(url, {headers: h, params: p, observe: 'response'});
    } else if (!(p && (p.keys().length > 0)) && (h && (h.keys().length > 0))) { // no p but h
      return this.http.get(url, {headers: h, observe: 'response'});
    } else if (p && (p.keys().length > 0) && !(h && (h.keys().length > 0))) { // no h but p
      return this.http.get(url, {params: p, observe: 'response'});
    } else  {// no h and no p; just an url
      return this.http.get(url);
    }
  }

}
