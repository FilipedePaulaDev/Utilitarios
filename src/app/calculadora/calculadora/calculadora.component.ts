import { Component, OnInit } from '@angular/core';

import { CalculadoraService } from '../services';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  private numero1: string;
  private numero2: string;
  private resultado: number;
  private operacao: string;

  constructor(private calculadoraService: CalculadoraService) { }

  ngOnInit(): void {
    this.limpar();
  }

  /**
   * Inicializa e reseta todos os valores e operação.
   * 
   * @return void
   */
  limpar(): void {
    this.numero1 = '0'
    this.numero2 = null;
    this.resultado = null;
    this.operacao = null;
  }

  /**
   * Adiciona valores aos números 1 e 2 seguindo
   *  uma lógica simples, se há operação o número
   *  1 já foi preenchido
   * 
   * @param numero string
   * @return void
   */
  adicionaNumero(numero: string): void {
    if (this.operacao === null) {
      this.numero1 = this.concatenaNumero(this.numero1, numero);
    } else {
      this.numero2 = this.concatenaNumero(this.numero2, numero);
    }
  }

  /**
   * Concatena os números digitados e trata os
   * valores decimais
   * 
   * @param numAtual string
   * @param numConcat string
   * @return string
   */
  concatenaNumero(numAtual: string, numConcat: string): string {
    // Caso o valor seja '0', limpa o campo para digitar os valores
    if (numAtual === '0' || numAtual === null) {
      numAtual = '';
    }

    // Tratamento do decimal
    if (numConcat === '.' && numAtual === '') {
      return '0.';
    }

    //Caso digite mais de um ponto
    if (numConcat === '.' && numAtual.indexOf('.') > -1) {
      return numAtual;
    }

    return numAtual + numConcat;
  }

  /**
   * Seleciona um operador, caso já exista um operador
   * e o numero2 seja diferente de null executa a operação
   * 
   * @param operacao string
   * @return void
   */
  defineOperacao(operacao: string): void {
    // Apenas define a operação caso não exista uma
    if (this.operacao === null) {
      this.operacao = operacao;
      return;
    }

    // Caso já exista uma operação e numero2 diferente de null
    if (this.numero2 !== null) {
      this.resultado = this.calculadoraService.calculaOperacao(
        parseFloat(this.numero1),
        parseFloat(this.numero2),
        this.operacao
      );
      this.operacao = operacao;
      this.numero1 = this.resultado.toString();
      this.numero2 = null;
      this.resultado = null;
    }
  }

  /**
   * Efetua o cálculo de uma operação.
   * 
   * @return void
   */
  calcula(): void {
    if (this.numero2 === null) {
      return;
    }

    this.resultado = this.calculadoraService.calculaOperacao(
      parseFloat(this.numero1),
      parseFloat(this.numero2),
      this.operacao
    );
  }

  /**
   * Retorna o valor a ser exibido na tela da calculadora.
   * 
   * @return string
   */
  get display(): string {
    if (this.resultado !== null) {
      return `${this.numero1} ${this.operacao} ${this.numero2} = ${this.resultado.toString()}`;
    }
    if (this.numero2 !== null) {
      return `${this.numero1} ${this.operacao} ${this.numero2}`;
    }
    if (this.operacao !== null) {
      return `${this.numero1} ${this.operacao}`;
    }
    return this.numero1;
  }

}
