import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DebugInfoComponent } from '@data/component/debug-info/debug-info.component';
import { HeaderComponent } from '@layout/header/header.component';
import { ContentComponent } from '@layout/content/content.component';
import { SharedModule } from '@shared/shared.module';
import { NavbarComponent } from '@layout/navbar/navbar.component';
import { FooterComponent } from '@layout/footer/footer.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DebugInfoComponent,
    HeaderComponent,
    ContentComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    // angular
    BrowserModule,
    BrowserAnimationsModule,
    // Shared
    SharedModule,
    // App
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
