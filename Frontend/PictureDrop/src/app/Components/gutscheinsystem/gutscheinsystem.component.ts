import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { callbackify } from 'node:util';

@Component({
  selector: 'app-gutschein',
  imports:[CommonModule],
  templateUrl: './gutscheinsystem.component.html',
  styleUrls: ['./gutscheinsystem.component.css']
})
export class GutscheinsystemComponent {
  selection = [
    {
      title: 'Lore',
      id:1,
      claimed: 14,
      unclaimed:18,
      ges:14+18
    },
    {
      title: 'Cosmetics',
      id:2,
      claimed: 16,
      unclaimed: 27,
      ges:16+27
    },
    {
      title: 'Food',
      id:3,
      claimed:8,
      unclaimed:2,
      ges:8+2
    }
  ];

  totals = {
    unclaimed: 114,
    claimed: 109,
    gutscheine: 223
  };
}