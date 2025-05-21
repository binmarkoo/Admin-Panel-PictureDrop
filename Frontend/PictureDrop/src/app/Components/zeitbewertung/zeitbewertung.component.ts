import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zeitbewertung',
  imports:[CommonModule],
  templateUrl: './zeitbewertung.component.html',
  styleUrls: ['./zeitbewertung.component.css']
})
export class ZeitbewertungComponent {
  sections = [
    {
      type: 'header',
      title: 'Übersicht Arbeitsbereiche',
      subs: ['Gutscheinsystem', 'Zeitbewertung']
    },
    {
      type: 'section',
      title: 'Arbeitsbereich 1',
      items: ['Arbeitsbereich 2', 'Arbeitsbereich 3']
    },
    {
      type: 'mixed',
      title: 'Arbeitsbereich 1',
      items: [
        '2024 ©',
        ...['100%', '120%', '160%', '180%', '110%', '90%', '70%', '50%'],
        ...['January', 'February', 'March', 'May', 'June', 'July',
           'August', 'September', 'October', 'November', 'December']
      ]
    },
    {
      type: 'years',
      title: 'Zentrum',
      items: this.generateYearRange()
    }
  ];

  private generateYearRange(): string[] {
    const years = [];
    let year = 2024;
    const maxYear = 7000;
    
    while (year <= maxYear) {
      years.push(year.toString());
      // Add irregular increments
      year += this.getYearIncrement(year);
    }
    
    return this.addDuplicates(years);
  }

  private getYearIncrement(currentYear: number): number {
    if (currentYear > 5000) return Math.floor(Math.random() * 50) + 10;
    if (currentYear > 3000) return Math.floor(Math.random() * 20) + 5;
    return Math.floor(Math.random() * 10) + 1;
  }

  private addDuplicates(years: string[]): string[] {
    return years.map(year => {
      if (Math.random() < 0.05) return `${year}\n${year}`; // 5% chance of duplicate
      return year;
    });
  }
}
