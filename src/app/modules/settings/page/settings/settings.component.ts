import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SettingsService } from '@modules/settings/service/settings.service';
import { Subject } from 'rxjs';
import { debounceTime, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  // The form group, which binds to the form
  form = this.fb.group({
    useFakeBackend: [true],
    dataBackend: this.fb.group({
      ip: ['192.168.1.130'],
      port: ['8080'],
    }),
  });
  private unsubscribe = new Subject<void>();

  constructor(
    private settingsService: SettingsService,
    private fb: FormBuilder
  ) {
    this.form.valueChanges
      .pipe(debounceTime(500), takeUntil(this.unsubscribe))
      .subscribe((form) => {
        console.log(form);
        if (this.form.dirty && this.form.valid) {
          this.settingsService.saveSettings(form);
        }
      });
  }

  ngOnInit(): void {
    this.form.setValue(this.settingsService.getSettings());
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
  }
}
