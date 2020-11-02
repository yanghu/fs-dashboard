import { Component, Input, OnInit } from '@angular/core';
import { rotationStr } from './instrument';

@Component({
  selector: 'app-variometer',
  templateUrl: './variometer.component.html',
  styleUrls: ['./instrument.css'],
})
export class VariometerComponent implements OnInit {
  @Input() speed = 10;
  @Input() showBox = false;

  constructor() {}

  ngOnInit(): void {}

  handAngle(speed: number): number {
    let deg = Math.sign(speed) * Math.min(Math.abs(speed), 20) * 8.2;
    if (speed > 20 || speed < -20) deg += speed % 2;
    return deg;
  }

  get handRotationStr() {
    return rotationStr(this.handAngle(this.speed));
  }
}
