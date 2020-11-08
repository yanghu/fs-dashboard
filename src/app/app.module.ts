import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DebugInfoComponent } from './debug-info/debug-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InstrumentsModule } from './instruments/instruments.module';
import { HeaderComponent } from './layout/header/header.component';
import { ContentComponent } from './layout/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    DebugInfoComponent,
    HeaderComponent,
    ContentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatExpansionModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    InstrumentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
