import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Form } from '@angular/forms/src/directives/form_interface';
import { IHttpCall } from '../../core/httpcall';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { RestXService } from '../../rest-x.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-build-home',
  templateUrl: './build-home.component.html',
  styleUrls: ['./build-home.component.css']
})
export class BuildHomeComponent implements OnInit, OnDestroy {

  results: Observable<any> = null;
  rsub: Subscription;
  results_o: any;
  error: HttpErrorResponse;

  constructor(private rest: RestXService) { }

  getcall(c: IHttpCall) {
    this.results = this.rest.getRest(c.rawURL, c.params, c.headers).pipe(
      tap( data => console.log(data) ));
      this.rsub = this.results.subscribe(
        r => this.results_o = r,
        (err: HttpErrorResponse) => this.error = err
      );

  /*   this.results.subscribe( result => {
      console.log(result);
  }); */
}

  ngOnInit() {
  }

  ngOnDestroy() {
     this.rsub.unsubscribe();
  }

}
