import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-attitude',
  templateUrl: './attitude.component.html',
  styleUrls: ['../instruments.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttitudeComponent implements OnInit {
  @Input() bank: number = 30;
  @Input() pitch: number = -10;
  @Input() showBox = false;
  @Input() size = 250;

  constructor() {}

  ngOnInit(): void {}

  get rotationAngle() {
    return this.bank;
  }

  get pitchBallPos() {
    return this.pitch * 0.55;
  }
}
