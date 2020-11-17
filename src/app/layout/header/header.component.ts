import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() toggleMenu = new EventEmitter();
  @Output() toggleConnection = new EventEmitter();
  @Input() title: string;
  @Input() isConnected: boolean;

  navItems = [
    { icon: 'home', label: 'Home', link: '/' },
    { icon: 'dashboard', label: 'Dashboard', link: '/dashboard' },
    { icon: 'settings', label: 'Settings', link: '/settings' },
  ];

  constructor() {}

  ngOnInit(): void {}

  get tooltip() {
    return this.isConnected ? 'Disconnect' : 'Connect';
  }
}
