import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-altimeter',
  templateUrl: './altimeter.component.html',
  styleUrls: ['./instrument.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AltimeterComponent implements OnInit {
  @Input() showBox = false;
  @Input() pressure = 29.92;
  @Input() altitude = 7777;

  constructor() {}

  ngOnInit(): void {}

  static rotationStr(deg: number): string {
    return `rotate(${deg}deg)`;
  }

  handAngle(unit: number): string {
    let deg = (this.altitude / (unit * 10)) * 360;
    return `rotate(${deg}deg)`;
  }

  get pressureRotationInhg(): string {
    let inhgDeg = (this.pressure - 26.9) * 60;
    return AltimeterComponent.rotationStr(inhgDeg);
  }

  get pressureRotationMbar(): string {
    let barDeg = (925 - 33.8639 * this.pressure) * 1.8;
    return AltimeterComponent.rotationStr(barDeg);
  }
  get hand10kRotation(): string {
    return AltimeterComponent.rotationStr((this.altitude / (10000 * 10)) * 360);
  }

  get hand1kRotation(): string {
    return AltimeterComponent.rotationStr((this.altitude / (1000 * 10)) * 360);
  }

  get hand100Rotation(): string {
    return AltimeterComponent.rotationStr((this.altitude / (100 * 10)) * 360);
  }
}
