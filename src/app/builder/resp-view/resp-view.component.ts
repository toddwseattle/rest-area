import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resp-view',
  templateUrl: './resp-view.component.html',
  styleUrls: ['./resp-view.component.css']
})
export class RespViewComponent implements OnInit {
  @Input() jsonresp; // json response to show in the view
  arrayresults: any[] = [];
  expanditems: boolean[] = [];
  objresults: any = null;
  constructor() { }

  ngOnInit() {
    if (Array.isArray(this.jsonresp)) {
      this.jsonresp.forEach( x => {
        this.arrayresults.push(x);
        this.expanditems.push(false);
      });

    } else {
      this.objresults = this.jsonresp;
    }
  }

  toggleExpand(row: number) {
    this.expanditems[row] = !this.expanditems[row];
  }

}
