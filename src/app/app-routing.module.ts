import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from './layout/content/content.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/instruments',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ContentComponent,
    children: [
      {
        // TODO: move dashboard routing into dashboard module.
        path: 'dashboard/instruments',
        loadChildren: () =>
          import('@modules/instruments/instruments.module').then(
            (m) => m.InstrumentsModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('@modules/settings/settings.module').then(
            (m) => m.SettingsModule
          ),
      },

      {
        path: '404',
        loadChildren: () =>
          import('./modules/not-found/not-found.module').then(
            (m) => m.NotFoundModule
          ),
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
