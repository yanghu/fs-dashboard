import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirspeedIndicatorComponent } from './instruments/airspeed-indicator.component';
import { AltimeterComponent } from './instruments/altimeter.component';
import { AttitudeComponent } from './instruments/attitude.component';
import { HeadingIndicatorComponent } from './instruments/heading-indicator.component';
import { InstrumentsComponent } from './instruments.component';
import { TurnIndicatorComponent } from './instruments/turn-indicator.component';
import { VariometerComponent } from './instruments/variometer.component';
import { RotateDirective } from './rotate.directive';

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
    RotateDirective,
  ],
  exports: [InstrumentsComponent],
})
export class InstrumentsModule {}
