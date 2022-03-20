import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryPage } from './history.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryPage,
    children: [
      {
        path: 'rekap',
        loadChildren: () => import('./rekap/rekap.module').then(m => m.RekapPageModule)
      },
      {
        path: 'last',
        loadChildren: () => import('./last/last.module').then(m => m.LastPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/history/rekap',
        pathMatch: 'full'
      }
    ]
    
  },
  {
    path: '',
    redirectTo: 'history/rekap',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryPageRoutingModule {}
