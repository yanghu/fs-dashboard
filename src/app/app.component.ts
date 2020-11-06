import { Component } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'flight-dashboard';

  constructor(private dataService: DataService) {}

  onToggleChange(event: MatSlideToggleChange) {
    if (event.checked) {
      this.dataService.start();
    } else {
      this.dataService.stop();
    }
  }
  get tooltip() {
    return this.dataServiceConnected() ? 'Disconnect' : 'Connect';
  }
  changeState() {
    if (this.dataServiceConnected()) {
      console.log('stop');
      this.dataService.stop();
    } else {
      console.log('start');
      this.dataService.start();
    }
  }

  dataServiceConnected(): boolean {
    return this.dataService.isConnected;
  }
}
