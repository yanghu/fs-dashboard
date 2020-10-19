import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { DataService } from '../data.service';

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

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataService.connect();
  }

}
