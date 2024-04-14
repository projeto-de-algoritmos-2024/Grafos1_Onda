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
  numerodono:any;
  tempo:any;
  texto: any;
  estilo:any;

  tamanhodono(valor:any) {
    this.estilo = "width: "+valor+"px; height: "+valor+"px;";
  }
  nomeiaono(referencia: any) {
    this.numerodono = referencia;
    this.texto = "Nó de numero "+referencia+".";
  }
  tempodeexecução(valor: any) {
    this.tempo = valor;
  }

}

