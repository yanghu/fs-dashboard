import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { DataService } from '@data/data.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  title = 'Flight Dashboard';
  isFullscreen: boolean = false;
  displayDebug: boolean = false;

  screenWidth: number;
  constructor(private dataService: DataService) {
    // set screenWidth on page load
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      // set screenWidth on screen size change
      this.screenWidth = window.innerWidth;
    };
  }

  @ViewChild('content') divRef: ElementRef;

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

  @HostListener('document:fullscreenchange', ['$event'])
  @HostListener('document:webkitfullscreenchange', ['$event'])
  @HostListener('document:mozfullscreenchange', ['$event'])
  fullscreenmodes(event) {
    this.checkScreenMode();
  }

  checkScreenMode() {
    if (document.fullscreenElement) {
      this.isFullscreen = true;
    } else {
      this.isFullscreen = false;
    }
  }

  // TODO: adjust instruments height to document.body.clientHeight
  // So instruments can take full screen.
  // Also add transition animation for the div.
  toggleFullScreen() {
    if (this.isFullscreen) {
      document.exitFullscreen();
    } else {
      this.divRef.nativeElement.requestFullscreen();
    }
  }

  toggleDebug(event: MatSlideToggleChange) {
    if (event.checked) {
      this.displayDebug = true;
    } else {
      this.displayDebug = false;
    }
  }
}
