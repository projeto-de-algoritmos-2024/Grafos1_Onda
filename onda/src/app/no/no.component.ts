import { Component } from '@angular/core';
import internal from 'stream';

@Component({
  selector: 'app-no',
  standalone: true,
  imports: [],
  templateUrl: './no.component.html',
  styleUrl: './no.component.scss'
})



export class NoComponent {
  tamanho = 20;
  numerodono:any;
  tempo:any;
  texto: any;

  tamanhodono(valor:any) {
    this.tamanho = valor;
  }
  nomeiaono(referencia: any) {
    this.numerodono = referencia;
    this.texto = "Nó de numero "+referencia+".";
  }
  tempodeexecução(valor: any) {
    this.tempo = valor;
  }

}

