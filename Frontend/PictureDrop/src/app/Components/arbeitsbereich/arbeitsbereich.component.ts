import { Component } from '@angular/core';

@Component({
  selector: 'app-arbeitsbereich',
  templateUrl: './arbeitsbereich.component.html',
  styleUrls: ['./arbeitsbereich.component.css']
})

export class ArbeitsbereicheComponent {
  arbeitsbereiche = [
    { name: 'Cosmetic', status: 'Active', uploads: 114 },
    { name: 'Toys', status: 'Inactive', uploads: 5 },
    { name: 'Food', status: 'Active', uploads: 269 },
  ];

  get activeCount() {
    return this.arbeitsbereiche.filter(b => b.status === 'Active').length;
  }

  get inactiveCount() {
    return this.arbeitsbereiche.filter(b => b.status === 'Inactive').length;
  }

  get totalUploads() {
    return this.arbeitsbereiche.reduce((sum, b) => sum + b.uploads, 0);
  }
}
