import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { catchError, map, pluck, share, startWith, tap } from 'rxjs/operators';
import { DataService } from '@data/data.service';
import { Beacon } from '@data/schema/beacon';

@Component({
  selector: 'app-instruments',
  templateUrl: './instruments.component.html',
  styleUrls: ['./instruments.scss'],
})
export class InstrumentsComponent implements OnInit {
  @ViewChild('instruments') container;

  maxWidth: number = 3000;
  // Data observable. Only pluck the "instruments" field.
  readonly data$ = this.dataService.message$.pipe(
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

  constructor(
    private dataService: DataService,
    private ref: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.dataService.message$.subscribe((data) => {
      this.beacons[0].course = data.navData.hsi_1.course;
      this.beacons[0].error = data.avionics.cdi_1.radialError;
      this.beacons[1].course = data.navData.hsi_2.course;
      this.beacons[1].error = data.avionics.cdi_2.radialError;
    });
  }

  // If this is executed in ngAfterViewInit, would see
  // ExpressionChangedAfterItHasBeenCheckedError
  ngAfterViewInit(): void {
    this.maxWidth = this.container.nativeElement.offsetHeight * 1.5;
    this.ref.detectChanges();
  }

  toggleCourseVisibility(idx: number) {
    this.beacons[idx].show = !this.beacons[idx].show;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.maxWidth = this.container.nativeElement.offsetHeight * 1.5;
  }
}
