import { Component, OnInit, Input } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-header-view',
  templateUrl: './header-view.component.html',
  styleUrls: ['./header-view.component.css']
})
export class HeaderViewComponent implements OnInit {

  @Input() headers: HttpHeaders;

  constructor() { }

  ngOnInit() {
  }

}
