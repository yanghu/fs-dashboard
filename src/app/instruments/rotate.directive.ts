import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

// fd stands for flight dashboard
@Directive({ selector: '[fdRotate]' })
export class RotateDirective {
  @Input('fdRotate') angle: number = 99;

  @HostBinding('style.transform') transform: string;

  constructor() {}

  ngOnChanges() {
    this.transform = this.rotateString();
  }

  private rotateString() {
    return `rotate(${this.angle}deg)`;
  }
}
