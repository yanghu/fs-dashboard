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

  constructor() {}

  ngOnInit(): void {}

  get tooltip() {
    return this.isConnected ? 'Disconnect' : 'Connect';
  }
}
