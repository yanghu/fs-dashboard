import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SettingsComponent } from './page/settings/settings.component';
import { SettingsRoutes } from './settings-routing.module';

@NgModule({
  declarations: [SettingsComponent],
  imports: [SharedModule, SettingsRoutes],
})
export class SettingsModule {}
