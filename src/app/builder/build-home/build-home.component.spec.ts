import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildHomeComponent } from './build-home.component';

describe('BuildHomeComponent', () => {
  let component: BuildHomeComponent;
  let fixture: ComponentFixture<BuildHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
