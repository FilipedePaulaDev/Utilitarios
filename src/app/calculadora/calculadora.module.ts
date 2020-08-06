import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculadoraComponent } from './calculadora';
import { CalculadoraRoutingModule } from './calculadora-routing.module';
import { CalculadoraRoutingComponent } from './calculadora-routing.component';
import { CalculadoraService } from './services/calculadora.service';



@NgModule({
  declarations: 
  [
    CalculadoraComponent,
    CalculadoraRoutingComponent
  ],
  imports: [
    CommonModule,
    CalculadoraRoutingModule
  ],
  providers: [
    CalculadoraService
  ]
})
export class CalculadoraModule { }
