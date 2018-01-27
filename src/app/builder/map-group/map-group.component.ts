import { Component, Input, OnInit } from '@angular/core';
import { FormArray, AbstractControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-map-group',
  templateUrl: './map-group.component.html',
  styleUrls: ['./map-group.component.css']
})
export class MapGroupComponent implements OnInit {

  @Input() mapGroupFormArray: FormGroup[];
  constructor() { }

  ngOnInit() {
  }

  remove(p: number) {
    this.mapGroupFormArray.splice(p, 1);
  }

}
