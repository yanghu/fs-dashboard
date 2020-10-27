import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { catchError, map, share, tap, throttle } from 'rxjs/operators';
import { DataService } from '../data.service';
import * as model from '../proto/simdata';
// jQuery
declare var $: any; // not required if installed @types/jquery

@Component({
  selector: 'app-debug-info',
  templateUrl: './debug-info.component.html',
  styleUrls: ['./debug-info.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DebugInfoComponent implements OnInit {
  liveData$ = this.dataService.message$.pipe(
    catchError((error) => {
      throw error;
    }),
    tap({
      // next: x => console.log(x),
      error: (error) => console.log('[Live component] Error:', error),
      complete: () => console.log('[Live component] Connection Closed'),
    }),
    share()
  );

  simData = new model.flight_panel.SimData();

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.liveData$.subscribe((x) => {
      this.update(x);
    });
  }

  update(data) {
    this.simData = data;
  }

  reconnect() {
    this.dataService.connect();
  }
}
