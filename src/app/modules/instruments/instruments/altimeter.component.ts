import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-altimeter',
  templateUrl: './altimeter.component.html',
  styleUrls: ['../instruments.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AltimeterComponent implements OnInit {
  @Input() showBox = false;
  @Input() pressure = 29.92;
  @Input() altitude = 7777;
  @Input() size = 250;

  get sizeStyle() {
    return;
  }
  constructor() {}

  ngOnInit(): void {}

  handAngle(unit: number): number {
    return (this.altitude / (unit * 10)) * 360;
  }

  get pressureRotationInhg(): number {
    // 0.01 per deg.
    return (31.6 - this.pressure) * 100;
  }
}
