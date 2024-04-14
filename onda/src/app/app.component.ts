import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import {NoComponent} from './no/no.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'onda';
}
