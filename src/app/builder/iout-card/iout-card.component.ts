import { Component, OnInit, Input } from '@angular/core';
import { Json2TS } from '../../core/httpcall';

@Component({
  selector: 'app-iout-card',
  templateUrl: './iout-card.component.html',
  styleUrls: ['./iout-card.component.css']
})
export class IoutCardComponent implements OnInit {
  @Input() iface: Json2TS;
  constructor() { }

  ngOnInit() {
  }

}
