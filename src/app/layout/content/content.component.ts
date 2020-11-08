import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  title = 'Flight Dashboard';
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  dataServiceConnected(): boolean {
    return this.dataService.isConnected;
  }

  changeState() {
    if (this.dataServiceConnected()) {
      this.dataService.stop();
    } else {
      this.dataService.start();
    }
  }
}
