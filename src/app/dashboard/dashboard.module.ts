import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardRoutingComponent } from './dashboard-routing.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardRoutingComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
