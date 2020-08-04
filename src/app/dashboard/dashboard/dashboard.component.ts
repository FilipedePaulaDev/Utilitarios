import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { DadosService } from '../dados.service';

declare var google: any;

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  private dados: any;
  

  constructor(private dadosService: DadosService) { }

  ngOnInit(): void {
    this.dadosService.obterDados().subscribe(
      dados => {
        this.dados = dados;
        this.init();
      }
    );
  }

  /**
   * Método para integração e uso da API charts do google.
   * 
   * @return void
   */
  init(): void {
    if ( typeof(google) !== undefined){
      google.charts.load('current', {'packages':['corechart']});
      setTimeout(() => {
        google.charts.setOnLoadCallback(this.exibirGraficos());
      }, 800);
    }
  }

  /**
   * Chama todos os métodos de chartDraw.
   * 
   * @return void
   */
  exibirGraficos(): void {
    this.exibirPie();
    this.exibirPie3d();
    this.exibirDonut();
    this.exibirBar();
    this.exibirLine();
    this.exibirColumn();
  }

  /**
   * Exibe o chart tipo pie.
   * 
   * @return void
   */
  exibirPie(): void {
    const el = document.getElementById('pie_chart');
    const chart = new google.visualization.PieChart(el);
    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  /**
   * Exibe o chart tipo pie 3D.
   * 
   * @return void
   */
  exibirPie3d(): void {
    const el = document.getElementById('3d_pie_chart');
    const chart = new google.visualization.PieChart(el);
    const opcoes = this.obterOpcoes();

    opcoes['is3D'] = true;
    chart.draw(this.obterDataTable(), opcoes);
  }

  /**
   * Exibe o chart tipo donut.
   * 
   * @return void
   */
  exibirDonut(): void {
    const el = document.getElementById('donut_chart');
    const chart = new google.visualization.PieChart(el);
    const opcoes = this.obterOpcoes();

    opcoes['pieHole'] = 0.4;
    chart.draw(this.obterDataTable(), opcoes);
  }

  /**
   * Exibe o chart tipo Bar.
   * 
   * @return void
   */
  exibirBar(): void {
    const el = document.getElementById('bar_chart');
    const chart = new google.visualization.BarChart(el);
    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  /**
   * Exibe o chart tipo Line.
   * 
   * @return void
   */
  exibirLine(): void {
    const el = document.getElementById('line_chart');
    const chart = new google.visualization.LineChart(el);
    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  /**
   * Exibe o chart tipo Column.
   * 
   * @return void
   */
  exibirColumn(): void {
    const el = document.getElementById('column_chart');
    const chart = new google.visualization.ColumnChart(el);
    chart.draw(this.obterDataTable(), this.obterOpcoes());
  }

  obterDataTable(): any {
    const data = new google.visualization.DataTable();

    data.addColumn('string', 'Mês');
    data.addColumn('number', 'Quantidade');

    data.addRows(this.dados);
    return data;
  }

  obterOpcoes(): any {
    return {
      title: 'algo algo',
      width: 400,
      height: 300
    }
  }
}
