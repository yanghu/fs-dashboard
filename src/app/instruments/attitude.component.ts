import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { interval } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-attitude',
  templateUrl: './attitude.component.html',
  styleUrls: ['./instrument.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttitudeComponent implements OnInit {
  @Input()
  bank = 30;
  @Input()
  pitch = -10;

  @Input()
  showBox = false;

  private increment = 0;
  constructor() {}

  ngOnInit(): void {}

  get rotationAngle() {
    return this.bank;
  }

  get pitchBallPos() {
    return this.pitch * 0.55;
  }
}
