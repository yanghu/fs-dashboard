import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navItems = [
    { link: '/dashboard/instruments', title: 'Instruments' },
    { link: '/settings', title: 'Settings' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
