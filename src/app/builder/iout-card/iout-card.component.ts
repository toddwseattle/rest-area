import { Component, OnInit, Input } from '@angular/core';
import { Json2TS, HttpCall } from '../../core/httpcall';
import { GoogleTagService } from '../../core/google-tag.service';

@Component({
  selector: 'app-iout-card',
  templateUrl: './iout-card.component.html',
  styleUrls: ['./iout-card.component.css']
})
export class IoutCardComponent implements OnInit {
  @Input() iface: Json2TS;
  @Input() httpcall: HttpCall;
  isCopied = false;
  constructor(private gts: GoogleTagService) { }

  ngOnInit() {
  }

  copyClick() {
    this.gts.EmitEvent({category: 'button_click', label: 'copy interface', value: 1});
  }

}
