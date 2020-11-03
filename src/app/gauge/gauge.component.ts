import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Observable, Observer } from 'rxjs';
import * as model from '../proto/simdata';
import { Gauge } from './gauge';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GaugeComponent implements OnInit {
  @Input() gauge: Gauge;
  @Input() data: Observable<model.flight_panel.Instrument>;
  name: string;

  observer: Observer<model.flight_panel.Instrument>;

  // The gauge object.
  _gauge: any;

  constructor() {}

  ngOnInit(): void {
    this.observer = {
      next: (x) => this.gauge.updater(this._gauge)(x),
      error: (err) => console.error(`${this.name} data error: ` + err),
      complete: () => {},
    };
    this.name = this.gauge.name.toLowerCase();
    this.data.subscribe(this.observer);
  }

  ngAfterViewInit() {
    this._gauge = this.gauge.creator();
    console.log(this._gauge);
  }
}
