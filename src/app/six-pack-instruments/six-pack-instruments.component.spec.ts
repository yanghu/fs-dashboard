import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixPackInstrumentsComponent } from './six-pack-instruments.component';

describe('SixPackInstrumentsComponent', () => {
  let component: SixPackInstrumentsComponent;
  let fixture: ComponentFixture<SixPackInstrumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixPackInstrumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixPackInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
