import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirspeedIndicatorComponent } from './airspeed-indicator.component';

describe('AirspeedIndicatorComponent', () => {
  let component: AirspeedIndicatorComponent;
  let fixture: ComponentFixture<AirspeedIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirspeedIndicatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirspeedIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
