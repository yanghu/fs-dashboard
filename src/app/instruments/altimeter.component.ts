import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-altimeter',
  templateUrl: './altimeter.component.html',
  styleUrls: ['./instrument.less'],
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
    // 0.01 per deg.
    let inhgDeg = (31.6 - this.pressure) * 100;
    return AltimeterComponent.rotationStr(inhgDeg);
  }
}
