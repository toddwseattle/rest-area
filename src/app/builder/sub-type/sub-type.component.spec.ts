import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTypeComponent } from './sub-type.component';

describe('SubTypeComponent', () => {
  let component: SubTypeComponent;
  let fixture: ComponentFixture<SubTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
