import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

import { AirspeedIndicatorComponent } from './instruments/airspeed-indicator.component';
import { AltimeterComponent } from './instruments/altimeter.component';
import { AttitudeComponent } from './instruments/attitude.component';
import { HeadingIndicatorComponent } from './instruments/heading-indicator.component';
import { InstrumentsComponent } from './instruments.component';
import { TurnIndicatorComponent } from './instruments/turn-indicator.component';
import { VariometerComponent } from './instruments/variometer.component';
import { InstrumentsRoutes } from './instruments-routing.module';

@NgModule({
  imports: [SharedModule, InstrumentsRoutes],
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
