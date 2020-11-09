import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { RotateDirective } from './directive/rotate.directive';

@NgModule({
  declarations: [RotateDirective],
  imports: [CommonModule],
  exports: [CommonModule, MaterialModule, RouterModule, RotateDirective],
})
export class SharedModule {}
