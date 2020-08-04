import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  readonly dados = [
    ['Janeiro', 33],
    ['Fevereiro', 88],
    ['Março', 67],
    ['Abril', 16],
    ['Maio', 54],
    ['Junho', 57],
  ];

  constructor() { }

  /**
   * Criar um observer para obter os dados inicialmente,
   * e atualizá-los sempre que houver uma mudança.
   * 
   * @return Observable<any>
   */
  obterDados(): Observable<any> {
    return new Observable(observable => {
      observable.next(this.dados);
      observable.complete();
    });
  }
}
