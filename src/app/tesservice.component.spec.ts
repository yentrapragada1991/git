import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesserviceComponent } from './tesservice.component';

describe('TesserviceComponent', () => {
  let component: TesserviceComponent;
  let fixture: ComponentFixture<TesserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
