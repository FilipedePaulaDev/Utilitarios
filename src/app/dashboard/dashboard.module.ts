import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardRoutingComponent } from './dashboard-routing.component';
import { DadosService } from './dados.service';



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardRoutingComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  providers: [
    DadosService
  ]
})
export class DashboardModule { }
