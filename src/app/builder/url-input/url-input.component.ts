import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, FormArray, FormBuilder, Validators, Validator } from '@angular/forms';
import { RestXService } from '../../rest-x.service';
import { IHttpCall } from '../../core/httpcall';
import { GoogleTagService } from '../../core/google-tag.service';

interface MapForm  {
  name: FormControl;
  value: FormControl;
}

@Component({
  selector: 'app-url-input',
  templateUrl: './url-input.component.html',
  styleUrls: ['./url-input.component.css']
})
export class UrlInputComponent implements OnInit {
  urlForm: FormGroup;
  paramForm: MapForm[] = [];
  parmCount = 0;
  headerForm: MapForm[] = [];
  headerCount = 0;
  @Output() urlsubmit: EventEmitter<IHttpCall> = new EventEmitter<IHttpCall>();

  constructor(private fb: FormBuilder, private restx: RestXService, private gts: GoogleTagService) {
    this.initUrlForm();
  }
  public addParams() {
    const pa: FormArray = this.urlForm.controls['params'] as FormArray;
    pa.push(this.createMapFormItem());
    this.parmCount++;
  }

  public addHeaders() {
    const ha: FormArray = this.urlForm.controls['headers'] as FormArray;
    ha.push(this.createMapFormItem());
    this.headerCount++;
  }

  public getControlasArray(a: AbstractControl): FormArray {
    return (a as FormArray);
  }
  private createMapFormItem(): FormGroup {
    return (this.fb.group({
      'name': '',
      'value': ''
    }));
  }

  private initUrlForm() {
    this.urlForm = this.fb.group({
      method: ['get', Validators.required],
      rawUrl: ['', Validators.required],
      params: this.fb.array([]),
      headers: this.fb.array([]),
      contenttype: ['application/json'],
      body: ['{}']
    });

  }
  ngOnInit() {
  }
  makemap(ma: {name: string, value: string}[]): Map<string, string> {
    const m = new Map();
    if (ma && (ma.length > 0)) {
    ma.forEach( v => m.set(v['name'], v['value']) );
    return m;
    } else {
      return m;
    }
  }
  urlSubmit() {
    this.gts.EmitEvent({category: 'form_submit', label: this.urlForm.value.method, value: 1});
    this.gts.EmitEvent({category: 'form_submit', label: this.urlForm.value.rawUrl, value: 1});
    const headers =  this.makemap(this.urlForm.value.headers);
    const params =  this.makemap(this.urlForm.value.params);

    if (this.urlForm.value.body && (this.urlForm.value.method === 'post') && this.urlForm.value.contenttype !== 'none') {
      headers.set('content-type', this.urlForm.value.contenttype);
    }
    this.restx.setRestCall(this.urlForm.value.rawUrl, params, headers, this.urlForm.value.method, this.urlForm.value.body);
    this.urlsubmit.emit(this.restx.restcall);
  }
}
