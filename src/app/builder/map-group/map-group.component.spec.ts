import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapGroupComponent } from './map-group.component';

describe('MapGroupComponent', () => {
  let component: MapGroupComponent;
  let fixture: ComponentFixture<MapGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
