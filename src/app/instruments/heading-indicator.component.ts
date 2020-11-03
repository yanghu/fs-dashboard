import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { rotationStr, Beacon } from './instrument';

@Component({
  selector: 'app-heading-indicator',
  templateUrl: './heading-indicator.component.html',
  styleUrls: ['./instrument.less'],
})
export class HeadingIndicatorComponent implements OnInit {
  @Input() heading: number = 0;
  @Input() beacons: Beacon[];
  @Input() showBox: false;

  @Output() toggleCourse = new EventEmitter<number>();

  // Translation limit for radial error on beacons.
  private MAX_TRANS_X: number = 20;
  constructor() {}

  ngOnInit(): void {}

  get headingRotationStr() {
    return rotationStr(-this.heading);
  }

  get headingText() {
    return this.heading.toFixed(0) + '	°';
  }
  beaconRotationStr(idx: number) {
    let beacon = this.beacons.length > idx ? this.beacons[idx] : { course: 90 };
    return rotationStr(beacon.course);
  }

  crsError(idx: number) {
    let beacon = this.beacons.length > idx ? this.beacons[idx] : { error: 0 };
    return `translateX(${(beacon.error / 100) * this.MAX_TRANS_X}%)`;
  }

  showBeacon(idx: number) {
    let beacon =
      this.beacons.length > idx ? this.beacons[idx] : { show: false };
    return beacon.show;
  }

  crsToggle(idx: number) {
    this.toggleCourse.emit(idx);
    console.log(0);
  }

  fillColor(idx: number) {
    let colors = [
      ['yellow', '#CCFFCC'],
      ['green', 'red'],
    ];
    let show = this.beacons.length > idx ? this.beacons[idx].show : false;
    return show ? colors[idx][0] : colors[idx][1];
  }
}
