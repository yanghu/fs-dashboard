import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirspeedIndicatorComponent } from './airspeed-indicator.component';
import { AltimeterComponent } from './altimeter.component';
import { AttitudeComponent } from './attitude.component';
import { HeadingIndicatorComponent } from './heading-indicator.component';
import { InstrumentsComponent } from './instruments.component';
import { TurnIndicatorComponent } from './turn-indicator.component';
import { VariometerComponent } from './variometer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    InstrumentsComponent,
    AirspeedIndicatorComponent,
    AltimeterComponent,
    AttitudeComponent,
    HeadingIndicatorComponent,
    TurnIndicatorComponent,
    VariometerComponent,
  ],
  exports: [InstrumentsComponent],
})
export class InstrumentsModule {}
