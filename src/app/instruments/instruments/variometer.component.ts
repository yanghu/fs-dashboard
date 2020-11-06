import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-variometer',
  templateUrl: './variometer.component.html',
  styleUrls: ['../instruments.scss'],
})
export class VariometerComponent implements OnInit {
  @Input() speed = 10;
  @Input() showBox = false;

  constructor() {}

  ngOnInit(): void {}

  get handAngle(): number {
    let deg = Math.sign(this.speed) * Math.min(Math.abs(this.speed), 20) * 8.2;
    if (this.speed > 20 || this.speed < -20) deg += this.speed % 2;
    return deg;
  }
}
