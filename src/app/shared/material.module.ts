import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [
    MatButtonModule,
    MatExpansionModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  exports: [
    MatButtonModule,
    MatExpansionModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
})
export class MaterialModule {}
