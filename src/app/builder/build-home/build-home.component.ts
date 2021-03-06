import { Component, OnInit, OnDestroy } from "@angular/core";
import { HttpErrorResponse, HttpResponse } from "@angular/common/http";
import { Form } from "@angular/forms/src/directives/form_interface";
import { IHttpCall, Json2TS, HttpCall } from "../../core/httpcall";
import { Observable, Subscription } from "rxjs";
import { RestXService } from "../../rest-x.service";
import { tap } from "rxjs/operators";
import { OptionResults } from "../i-options/i-options.component";

@Component({
  selector: "app-build-home",
  templateUrl: "./build-home.component.html",
  styleUrls: ["./build-home.component.css"]
})
export class BuildHomeComponent implements OnInit, OnDestroy {
  $results: Observable<HttpResponse<any>> = null;
  rsub: Subscription;
  results: any;
  fullResponse: HttpResponse<any> = null;
  error: HttpErrorResponse;
  tsInterface: Json2TS = null;
  httpCall: HttpCall = null;

  constructor(private rest: RestXService) {}

  getcall(c: IHttpCall) {
    this.results = null;
    this.error = null;
    this.tsInterface = null;
    if (c.type === "get") {
      this.$results = this.rest
        .getRest(c.rawURL, c.params, c.headers)
        .pipe(tap(data => console.log(data)));
    } else if (c.type === "post") {
      this.$results = this.rest
        .postRest(c.rawURL, c.params, c.headers, c.body)
        .pipe(tap(data => console.log(data)));
    }
    this.rsub = this.$results.subscribe(
      (r: HttpResponse<any>) => {
        this.results = r.body;
        this.fullResponse = r;
        this.httpCall = new HttpCall(c);
      },
      (err: HttpErrorResponse) => {
        this.error = err;
        console.log(`error on results subscribe ${err}`);
      }
    );

    /*   this.results.subscribe( result => {
      console.log(result);
  }); */
  }
  genInterface(o: OptionResults, raw: any) {
    this.tsInterface = new Json2TS(o.iPrefix + o.iName, o.iPrefix, raw);
    console.log(this.tsInterface.output());
  }

  ngOnInit() {}

  ngOnDestroy() {
    if (this.rsub) {
      this.rsub.unsubscribe();
    }
  }
}
