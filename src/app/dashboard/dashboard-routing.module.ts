import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard';
import { DashboardRoutingComponent } from './dashboard-routing.component';

export const DashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardRoutingComponent,
    children: [
      {
        path: '',
        component: DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(DashboardRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardRoutingModule {}