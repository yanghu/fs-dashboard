import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariometerComponent } from './variometer.component';

describe('VariometerComponent', () => {
  let component: VariometerComponent;
  let fixture: ComponentFixture<VariometerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariometerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariometerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
