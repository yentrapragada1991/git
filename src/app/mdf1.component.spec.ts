import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mdf1Component } from './mdf1.component';

describe('Mdf1Component', () => {
  let component: Mdf1Component;
  let fixture: ComponentFixture<Mdf1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mdf1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mdf1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
