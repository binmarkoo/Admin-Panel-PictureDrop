import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {UpperCasePipe} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    UpperCasePipe,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  text:string = 'Hello World!';
  toggle = false;


  userInput = 'default';

  constructor(private dataServe:DataService){
    this.dataServe.getData()
  }

  handleClick(){
    this.toggle = !this.toggle;
  }

  function1(){
    console.log('container 1');
  }

  function2(){
      console.log('container 2');
    }

  get notes(){
    return this.dataServe.notes
  }
}
