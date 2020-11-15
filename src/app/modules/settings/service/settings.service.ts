import { Injectable } from '@angular/core';
import { defaultSettings, Settings } from '@data/schema/settings';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private settings: Settings;

  constructor() {
    this.settings = this.loadSettings();
    if (!this.settings) {
      this.settings = defaultSettings;
    }
  }

  saveSettings(settings): void {
    this.settings = settings;
    localStorage.setItem('ip', settings.dataBackend.ip);
    localStorage.setItem('port', settings.dataBackend.port);
    localStorage.setItem('useFakeBackend', settings.useFakeBackend);
    localStorage.setItem('fsSettingsValid', 'true');
    console.log('saved');
  }

  private loadSettings(): Settings {
    if (localStorage.getItem('fsSettingsValid') == 'true') {
      return {
        useFakeBackend: localStorage.getItem('useFakeBackend') == 'true',
        dataBackend: {
          ip: localStorage.getItem('ip'),
          port: localStorage.getItem('port'),
        },
      };
    }
  }

  public getSettings(): Settings {
    return this.settings;
  }

  get dataBackend(): string {
    const be = this.settings.dataBackend;
    return `ws://${be.ip}:${be.port}`;
  }

  get useFakeBackend(): boolean {
    return this.settings.useFakeBackend;
  }
}
