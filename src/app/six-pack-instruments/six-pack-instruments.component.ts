import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { catchError, map, pluck, share, startWith, tap } from 'rxjs/operators';
import { DataService } from '../data.service';
import { INSTRUMENTS } from '../gauge/gauge';
import { Beacon } from '../instruments/instrument';
import { flight_panel } from '../proto/simdata';

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
    // throttle((val) => interval(40)),
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

  beacons: Beacon[] = [
    { course: 60, show: true, error: 0 },
    { course: 100, show: true, error: 0 },
  ];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.message$.subscribe((data) => {
      this.beacons[0].course = data.navData.hsi_1.course;
      this.beacons[0].error = data.avionics.cdi_1.radialError;
      this.beacons[1].course = data.navData.hsi_2.course;
      this.beacons[1].error = data.avionics.cdi_2.radialError;
    });
  }

  toggleCourseVisibility(idx: number) {
    this.beacons[idx].show = !this.beacons[idx].show;
  }
}
