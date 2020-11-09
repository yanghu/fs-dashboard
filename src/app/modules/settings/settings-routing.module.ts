import { RouterModule, Routes } from '@angular/router';
import { SettingsComponent } from './page/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsComponent,
  },
];

export const SettingsRoutes = RouterModule.forChild(routes);
