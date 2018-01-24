import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators, Validator } from '@angular/forms';
import { AbstractControl } from '@angular/forms/src/model';

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
    pa.push(this.creatParmItem());
    this.parmCount++;
  }

  public getFormControlasArray(a: AbstractControl): FormArray {
    return (a as FormArray);
  }
  private creatParmItem(): FormGroup {
    return (this.fb.group({
      'param': 'name',
      'value': 'value'
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
