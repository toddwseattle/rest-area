import { Component, Input, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms/src/model';

@Component({
  selector: 'app-map-group',
  templateUrl: './map-group.component.html',
  styleUrls: ['./map-group.component.css']
})
export class MapGroupComponent implements OnInit {

  @Input() mapGroupFormArray;
  constructor() { }

  ngOnInit() {
  }

}
