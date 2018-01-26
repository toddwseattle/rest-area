import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, FormArray, FormBuilder, Validators, Validator } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {
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
  urlSubmit() {
  }
}
