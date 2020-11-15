import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { SettingsComponent } from './page/settings/settings.component';
import { SettingsRoutes } from './settings-routing.module';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [SettingsComponent],
  imports: [SharedModule, SettingsRoutes, NgxMaskModule.forRoot()],
})
export class SettingsModule {}
