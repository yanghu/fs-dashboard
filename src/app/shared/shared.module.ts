import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { RotateDirective } from './directive/rotate.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [RotateDirective],
  imports: [CommonModule, FormsModule],
  exports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    RotateDirective,
    FormsModule,
  ],
})
export class SharedModule {}
