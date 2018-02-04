import { Component, OnInit, Input } from '@angular/core';
import { Json2TS } from '../../core/httpcall';

@Component({
  selector: 'app-sub-type',
  templateUrl: './sub-type.component.html',
  styleUrls: ['./sub-type.component.css']
})
export class SubTypeComponent implements OnInit {
  @Input() subs: Json2TS[];
  constructor() { }

  ngOnInit() {
  }

}
