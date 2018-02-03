import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IOptionsComponent } from './i-options.component';

describe('IOptionsComponent', () => {
  let component: IOptionsComponent;
  let fixture: ComponentFixture<IOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
