import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Output() toggleDebug: EventEmitter<
    MatSlideToggleChange
  > = new EventEmitter();
  navItems = [
    { link: '/dashboard/instruments', title: 'Instruments' },
    { link: '/settings', title: 'Settings' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
