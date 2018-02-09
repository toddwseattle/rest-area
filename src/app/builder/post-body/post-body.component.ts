import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-body',
  templateUrl: './post-body.component.html',
  styleUrls: ['./post-body.component.css']
})
export class PostBodyComponent implements OnInit {
  @Input() parent: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}
