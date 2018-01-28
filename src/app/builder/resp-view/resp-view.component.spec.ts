import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespViewComponent } from './resp-view.component';

describe('RespViewComponent', () => {
  let component: RespViewComponent;
  let fixture: ComponentFixture<RespViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
