import { NgModule } from '@angular/core';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    MatButtonToggleModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    ReactiveFormsModule,
  ],
  exports: [
    MatButtonToggleModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatTooltipModule,
    ReactiveFormsModule,
  ],
})
export class MaterialModule {}
