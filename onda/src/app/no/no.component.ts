import { Component, Input } from '@angular/core';
import internal from 'stream';

@Component({
  selector: 'app-no',
  standalone: true,
  imports: [],
  templateUrl: './no.component.html',
  styleUrl: './no.component.scss'
})



export class NoComponent {
  @Input() numerodono:any;
  @Input() tempo:any;
  @Input() tamanho:any;
  texto: any;
  estilo:any;

  tamanhodono() {
    this.estilo = "width: "+this.tamanho+"px; height: "+this.tamanho+"px;";
  }
  nomeiaono(referencia: any) {
    this.texto = "Nó de numero "+referencia+".";
  }
  tempodeexecucao(valor: any) {
    this.tempo = valor;
  }
  ngOnChanges() {
    this.tamanhodono();
    this.nomeiaono(this.numerodono);
    this.tempodeexecucao(this.tempo);
  }

}

