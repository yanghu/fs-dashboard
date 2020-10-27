import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DebugInfoComponent } from './debug-info/debug-info.component';
import { SixPackInstrumentsComponent } from './six-pack-instruments/six-pack-instruments.component';
import { GaugeComponent } from './gauge/gauge.component';

@NgModule({
  declarations: [
    AppComponent,
    DebugInfoComponent,
    SixPackInstrumentsComponent,
    GaugeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
