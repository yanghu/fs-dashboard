import { Injectable } from '@angular/core';
import { defaultSettings, Settings } from '@data/schema/settings';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  private settings: Settings;
  private kSettingsKey = 'settings';

  constructor() {
    this.settings = this.loadSettings();
    if (!this.settings) {
      this.settings = defaultSettings;
    }
  }

  saveSettings(settings): void {
    this.settings = settings;
    localStorage.setItem(this.kSettingsKey, JSON.stringify(settings));
    console.log('saved');
  }

  private loadSettings(): Settings {
    var value = localStorage.getItem(this.kSettingsKey);
    return value && JSON.parse(value);
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
