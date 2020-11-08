import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadingIndicatorComponent } from './heading-indicator.component';

describe('HeadingIndicatorComponent', () => {
  let component: HeadingIndicatorComponent;
  let fixture: ComponentFixture<HeadingIndicatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeadingIndicatorComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show beacon1 if exist', () => {
    component.beacons = [{ course: 45, show: true, error: 0 }];
    fixture.detectChanges();
    expect(fixture);
  });
});
