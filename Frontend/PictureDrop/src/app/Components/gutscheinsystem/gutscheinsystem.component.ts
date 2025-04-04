// arbeitsbereiche-overview.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gutschein',
  imports:[CommonModule],
  templateUrl: './gutscheinsystem.component.html',
  styleUrls: ['./gutscheinsystem.component.css']
})
export class GutscheinsystemComponent {
  sections = [
    {
      title: 'Arbeitsbereiche',
      items: [
        { name: 'Arbeitsbereich X', checked: false },
        { name: 'Claimed: X / Unclaimed: V/ces:Z', checked: false }
      ]
    },
    {
      title: 'Cosmetics',
      items: [
        { name: 'Claimed: I4 / Unclaimed: 45/ces: 59', checked: false }
      ]
    },
    {
      title: 'Food',
      items: [
        { name: 'Claimed: 95 / Unclaimed: 69/ces: 164', checked: false }
      ]
    }
  ];

  totals = {
    unclaimed: 114,
    claimed: 109,
    gutscheine: 223
  };
}