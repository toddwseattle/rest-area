import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { IHttpCall, HttpCall, _2Pascal } from '../../core/httpcall';
export interface OptionResults {
  iPrefix: string;
  iName: string;
}

@Component({
  selector: 'app-i-options',
  templateUrl: './i-options.component.html',
  styleUrls: ['./i-options.component.css']
})
export class IOptionsComponent implements OnInit {
  @Input() httpCall: HttpCall;
  @Output() Ioptions:  EventEmitter<OptionResults> = new EventEmitter<OptionResults>();

  interfaceOptions: FormGroup;
  constructor(private fb: FormBuilder) {
  }
  genPrefix() {
    if (this.httpCall) {
      const hostsplit = this.httpCall.host.split('.');
      return ( (hostsplit.length > 1) ? _2Pascal(hostsplit.slice(0, hostsplit.length - 1).join('_'))
                                      : _2Pascal(hostsplit[0]));
    } else {
      return 'i';
    }
  }

  genIntName(): string {
    let name = '';
    if (this.httpCall && (this.httpCall.pathFragments.length > 0)) {
      this.httpCall.pathFragments.forEach(v => name += _2Pascal(v));
    } else {
      name = 'Result';
    }
    return name;
  }
  setOptions() {
    this.Ioptions.emit({iPrefix: this.interfaceOptions.value.prefix,
                        iName: this.interfaceOptions.value.mainInt});
  }
  ngOnInit() {
    this.interfaceOptions = this.fb.group({
      prefix: [this.genPrefix()],
      mainInt: [this.genIntName(), Validators.required]
    });
  }

}
