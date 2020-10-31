import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DebugInfoComponent } from './debug-info/debug-info.component';
import { SixPackInstrumentsComponent } from './six-pack-instruments/six-pack-instruments.component';
import { GaugeComponent } from './gauge/gauge.component';
import { AttitudeComponent } from './instruments/attitude.component';
import { AltimeterComponent } from './instruments/altimeter.component';
import { AirspeedIndicatorComponent } from './instruments/airspeed-indicator.component';
import { TurnIndicatorComponent } from './instruments/turn-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    DebugInfoComponent,
    SixPackInstrumentsComponent,
    GaugeComponent,
    AttitudeComponent,
    AltimeterComponent,
    AirspeedIndicatorComponent,
    TurnIndicatorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
