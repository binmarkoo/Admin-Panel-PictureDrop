import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-helper',
  imports: [],
  templateUrl: './helper.component.html',
  styleUrl: './helper.component.css'
})
export class HelperComponent {

  value = 20;
  description = 'default';
  @Input() text="Hello World"
  @Output() textChanged:EventEmitter<string> = new EventEmitter()

  handleClick(){
    this.textChanged.emit("Hello from helper")
  }

  constructor(private dataService: DataService){
  }

  get notes(){
    return this.dataService.notes
  }
}
