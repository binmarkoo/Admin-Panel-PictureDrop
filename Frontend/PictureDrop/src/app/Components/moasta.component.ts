import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-moasta',
  imports: [LoginComponent, RouterOutlet],
  templateUrl: './moasta.component.html',
  styleUrl: './moasta.component.css'
})
export class MoastaComponent {
  titel="tescht"
}
