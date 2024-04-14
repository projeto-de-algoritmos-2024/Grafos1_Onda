import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { NoComponent } from './no/no.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(
    @Inject(PLATFORM_ID) private platformId: any
  ) { }
  title = 'onda';
  maximodenos: any;
  larguraTela: any;
  alturaTela: any;
  tamanhono = 20;
  nos: any;
  grafo: any = [];
  populagrafo() {
    const colunas = Math.trunc(this.larguraTela / (this.tamanhono));
    const linhas = Math.trunc(this.alturaTela / (this.tamanhono));
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
        console.log(cont);
        cont++;
      }
    }
    console.log("acabou");
  }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.larguraTela = window.innerWidth ;
      this.alturaTela = window.innerHeight ;
      console.log(this.larguraTela);
      console.log(this.alturaTela);
    }

    this.maximodenos = Math.trunc(this.larguraTela) * Math.trunc(this.alturaTela);
    this.nos = (this.tamanhono - 5) / this.maximodenos;
    this.populagrafo();

  }
}
