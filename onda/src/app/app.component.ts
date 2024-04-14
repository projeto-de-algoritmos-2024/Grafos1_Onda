import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NoComponent } from './no/no.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'onda';
  maximodenos: any;
  larguraTela: any;
  alturaTela: any;
  tamanhono = 20;
  nos: any;
  grafo: any = [];
  populagrafo() {
    const colunas = this.larguraTela / (this.tamanhono - 5);
    const linhas = this.alturaTela / (this.tamanhono - 5);
    let cont = 0;
    for (let i = 0; i < colunas; i++) {
      for (let j = 0; j < linhas; j++) {
        if (cont - colunas >= 0 && cont + colunas <= colunas - 1) {
          if (j == 0) {
            this.grafo[cont] = [
              cont + 1,
              cont + colunas,
              cont - colunas,
            ];
          } else if (j == linhas - 1) {
            this.grafo[cont] = [
              cont - 1,
              cont + colunas,
              cont - colunas,
            ];
          } else {
            this.grafo[cont] = [
              cont - 1,
              cont + 1,
              cont + colunas,
              cont - colunas,
            ];
          }
        }else if(cont - colunas < 0 ){
          if (j == 0) {
            this.grafo[cont] = [
              cont + 1,
              cont + colunas,
            ];
          } else if (j == linhas - 1) {
            this.grafo[cont] = [
              cont - 1,
              cont + colunas,
            ];
          } else {
            this.grafo[cont] = [
              cont - 1,
              cont + 1,
              cont + colunas,
            ];
          }
        }else{
          if (j == 0) {
            this.grafo[cont] = [
              cont + 1,
              cont - colunas,
            ];
          } else if (j == linhas - 1) {
            this.grafo[cont] = [
              cont - 1,
              cont - colunas,
            ];
          } else {
            this.grafo[cont] = [
              cont - 1,
              cont + 1,
              cont - colunas,
            ];
          }
        }
        cont++;
      }
    }
  }
  ngOnChanges() {
    this.larguraTela = window.innerWidth / 5;
    this.alturaTela = window.innerHeight / 5;
    this.maximodenos = Math.trunc(this.larguraTela) * Math.trunc(this.alturaTela);
    this.nos = (this.tamanhono - 5) / this.maximodenos;
  }
}
