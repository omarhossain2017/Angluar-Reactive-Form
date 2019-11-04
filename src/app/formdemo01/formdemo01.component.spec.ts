import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formdemo01Component } from './formdemo01.component';

describe('Formdemo01Component', () => {
  let component: Formdemo01Component;
  let fixture: ComponentFixture<Formdemo01Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formdemo01Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formdemo01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
