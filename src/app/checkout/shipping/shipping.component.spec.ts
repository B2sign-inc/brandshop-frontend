import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { shippingComponent } from './shipping.component';

describe('shippingComponent', () => {
  let component: shippingComponent;
  let fixture: ComponentFixture<shippingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ shippingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(shippingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
