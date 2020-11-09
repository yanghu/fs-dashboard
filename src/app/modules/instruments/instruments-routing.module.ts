import { RouterModule, Routes } from '@angular/router';
import { InstrumentsComponent } from './instruments.component';

const routes: Routes = [
  {
    path: '',
    component: InstrumentsComponent,
  },
];

export const InstrumentsRoutes = RouterModule.forChild(routes);
