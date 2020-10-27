import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import {
  catchError,
  map,
  pluck,
  publish,
  share,
  tap,
  throttle,
} from 'rxjs/operators';
import { DataService } from '../data.service';
import { createGauge, Gauge, INSTRUMENTS } from '../gauge/gauge';

declare var $: any; // not required if installed @types/jquery

@Component({
  selector: 'app-six-pack-instruments',
  templateUrl: './six-pack-instruments.component.html',
  styleUrls: ['./six-pack-instruments.component.css'],
})
export class SixPackInstrumentsComponent implements OnInit {
  // Data observable. Only pluck the "instruments" field.
  data$ = this.dataService.message$.pipe(
    // Add throttle. Limit to 20FPS seems to be a good balance.
    // When fps is too high, on older iPad frames would drop.
    throttle((val) => interval(100)),
    catchError((error) => {
      throw error;
    }),
    tap({
      error: (error) => console.log('[SixPack] Error:', error),
      complete: () => console.log('[SixPack] Connection Closed'),
    }),
    pluck('instruments'),
    share()
  );

  get instruments() {
    return INSTRUMENTS;
  }

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
}
