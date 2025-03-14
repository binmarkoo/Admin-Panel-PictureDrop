import { Component } from '@angular/core';
import {HelperComponent} from '../helper/helper.component';

@Component({
  selector: 'app-view1',
  imports: [
    HelperComponent
  ],
  templateUrl: './view1.component.html',
  styleUrl: './view1.component.css'
})
export class View1Component {

  description = 'text from v1';

  handleHelper(value: string){
    console.log(value)
  }
}
