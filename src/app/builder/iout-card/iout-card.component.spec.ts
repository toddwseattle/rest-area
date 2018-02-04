import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IoutCardComponent } from './iout-card.component';

describe('IoutCardComponent', () => {
  let component: IoutCardComponent;
  let fixture: ComponentFixture<IoutCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IoutCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IoutCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
