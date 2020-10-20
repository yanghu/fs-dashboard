import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { DataService } from '../data.service';
import { SimData } from '../proto/simdata';

@Component({
  selector: 'app-debug-info',
  templateUrl: './debug-info.component.html',
  styleUrls: ['./debug-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DebugInfoComponent implements OnInit {

  liveData$ = this.dataService.message$.pipe(
    catchError(error => {throw error}),
    tap({
      error: error => console.log('[Live component] Error:', error),
      complete: () => console.log('[Live component] Connection Closed')
    })
  );
  simData = new SimData();
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataService.connect();
    this.simData.callSign = "ASXGS";
  }

}
