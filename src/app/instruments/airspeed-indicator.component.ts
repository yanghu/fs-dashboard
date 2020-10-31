import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { rotationStr } from './instrument';

@Component({
  selector: 'app-airspeed-indicator',
  templateUrl: './airspeed-indicator.component.html',
  styleUrls: ['./instrument.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AirspeedIndicatorComponent implements OnInit {
  @Input() speed = 200;
  @Input() showBox = false;

  constructor() {}

  ngOnInit(): void {}

  handAngle(): number {
    var deg = 0;
    if (this.speed >= 0 && this.speed < 40) deg = this.speed * 0.9;
    if (this.speed >= 40 && this.speed <= 160) deg = this.speed * 1.8 - 36;
    if (this.speed > 70 && this.speed <= 160) deg = this.speed * 2 - 50;
    if (this.speed > 160) deg = this.speed + 110;
    if (this.speed > 200) deg = 311 + (this.speed % 2);
    return deg;
  }

  get trueSpeedRotationStr() {
    return rotationStr(30);
  }

  get handRotationStr() {
    return rotationStr(this.handAngle());
  }
}
