import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DebugInfoComponent } from './debug-info/debug-info.component';
import { SixPackInstrumentsComponent } from './six-pack-instruments/six-pack-instruments.component';
import { GaugeComponent } from './gauge/gauge.component';
import { AttitudeComponent } from './instruments/attitude.component';
import { AltimeterComponent } from './instruments/altimeter.component';
import { AirspeedIndicatorComponent } from './instruments/airspeed-indicator.component';
import { TurnIndicatorComponent } from './instruments/turn-indicator.component';
import { HeadingIndicatorComponent } from './instruments/heading-indicator.component';
import { VariometerComponent } from './instruments/variometer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    HeadingIndicatorComponent,
    VariometerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatListModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
