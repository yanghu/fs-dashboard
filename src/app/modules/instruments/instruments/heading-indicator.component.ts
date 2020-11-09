import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Beacon } from '@data/schema/beacon';

@Component({
  selector: 'app-heading-indicator',
  templateUrl: './heading-indicator.component.html',
  styleUrls: ['../instruments.scss'],
})
export class HeadingIndicatorComponent implements OnInit {
  @Input() heading: number = 0;
  @Input() beacons: Beacon[];
  @Input() showBox: false;
  @Input() size = 250;

  @Output() toggleCourse = new EventEmitter<number>();

  // Translation limit for radial error on beacons.
  private MAX_TRANS_X: number = 20;
  constructor() {}

  ngOnInit(): void {}

  get headingText() {
    return this.heading.toFixed(0) + '	°';
  }

  beaconCourse(idx: number): number {
    return this.beacons?.[idx].course || 90;
  }

  crsError(idx: number) {
    let error = this.beacons?.[idx].error || 0;
    return `translateX(${(error / 100) * this.MAX_TRANS_X}%)`;
  }

  showBeacon(idx: number) {
    return this.beacons?.[idx].show;
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
    return this.beacons?.[idx].show ? colors[idx][0] : colors[idx][1];
  }
}
