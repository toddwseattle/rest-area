import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, FormArray, FormBuilder, Validators, Validator } from '@angular/forms';
import { RestXService } from '../../rest-x.service';
import { IHttpCall } from '../../core/httpcall';

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

  constructor(private fb: FormBuilder, private restx: RestXService) {
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
      rawUrl: ['', Validators.required],
      params: this.fb.array([]),
      headers: this.fb.array([])
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
    this.restx.setRestCall(this.urlForm.value.rawUrl, this.makemap(this.urlForm.value.params), this.makemap(this.urlForm.value.headers));
    this.urlsubmit.emit(this.restx.restcall);
  }
}
