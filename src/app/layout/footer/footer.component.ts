import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() displayDebug: boolean = false;
  currentYear = new Date().getUTCFullYear();
  constructor() {}
}
