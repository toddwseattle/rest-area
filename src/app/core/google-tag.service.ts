import { Injectable } from '@angular/core';
declare var gtag: any;
export interface GoogleTagEvent {
  category: string;
  label: string;
  value: number;
}
@Injectable()
export class GoogleTagService {

  constructor() {
    gtag('event', 'loaded', {
      'event_category': 'diagnostic',
      'event_label': 'GoogleTagsService',
      'value': '1'
    });
   }
   public EmitEvent(gte: GoogleTagEvent) {
    gtag('event', {
      'event_category': gte.category,
      'event_label': gte.label,
      'value': gte.value
    });
    console.log('Event Emitted %s %s', gte.category, gte.label);
  }
}
