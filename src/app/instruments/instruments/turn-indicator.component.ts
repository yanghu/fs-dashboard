import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-turn-indicator',
  templateUrl: './turn-indicator.component.html',
  styleUrls: ['../instruments.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TurnIndicatorComponent implements OnInit {
  constructor() {}
  @Input() turnDegree: number = 10;
  // Slip is
  @Input() slip: number = 1;
  @Input() showBox: boolean = false;

  ngOnInit(): void {}

  static ballMoveCurve(x: number): number {
    return -0.08 * (x * x);
  }

  get ballMoveStr(): string {
    // percent
    const limit = 16;
    let moveX = this.slip * limit;
    let moveY = TurnIndicatorComponent.ballMoveCurve(this.slip) * limit;
    return `translate(${moveX}%,${moveY}%)`;
  }
}
