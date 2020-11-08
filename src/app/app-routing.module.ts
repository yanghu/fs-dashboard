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
        path: 'dashboard/instruments',
        loadChildren: () =>
          import('./instruments/instruments.module').then(
            (m) => m.InstrumentsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
