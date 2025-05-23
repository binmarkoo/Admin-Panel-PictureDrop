import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms';

type YearKey = '2024' | '2023' | '2022';

interface ChartYearData {
  labels: string[];
  values: number[];
  references: string[];
}

@Component({
  standalone: true,
  selector: 'app-zeitbewertung',
  imports: [NavbarComponent, FormsModule],
  templateUrl: './zeitbewertung.component.html',
  styleUrls: ['./zeitbewertung.component.css']
})
export class ZeitbewertungComponent implements OnInit {
  currentArbeitsbereich = 'Arbeitsbereich 1';
  yearChart!: Chart;
  selectedYear: YearKey = '2024';

  chartData: Record<YearKey, ChartYearData> = {
    "2024": {
      labels: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
      values: [2100, 1900, 1700, 1500, 1300, 1100, 900, 700, 500, 300, 100, 50],
      references: ["R12", "R16", "R17", "R18", "R19", "R20", "R21", "R22", "R23", "R24", "R25", "R26"]
    },
    "2023": {
      labels: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
      values: [1800, 1600, 1400, 1200, 1000, 800, 600, 400, 200, 100, 50, 25],
      references: ["R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R10", "R11", "R12"]
    },
    "2022": {
      labels: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
      values: [1500, 1300, 1100, 900, 700, 500, 300, 100, 50, 25, 10, 5],
      references: ["R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R10", "R11", "R12"]
    }
  };

  arbeitsbereiche = [
    "Arbeitsbereich 1",
    "Arbeitsbereich 2",
    "Arbeitsbereich 3"
  ];

  ngOnInit(): void {
    Chart.register(...registerables);
    this.initChart();
  }

  initChart(): void {
    const ctx = document.getElementById('yearChart') as HTMLCanvasElement;
    this.yearChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.chartData[this.selectedYear].labels,
        datasets: [{
          label: 'Wert pro Monat',
          data: this.chartData[this.selectedYear].values,
          backgroundColor: 'rgba(54, 162, 235, 0.7)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  changeYear(year: YearKey): void {
    this.selectedYear = year;
    this.yearChart.data.labels = this.chartData[year].labels;
    this.yearChart.data.datasets[0].data = this.chartData[year].values;
    this.yearChart.update();
  }

  selectArbeitsbereich(bereich: string): void {
    this.currentArbeitsbereich = bereich;
  }
}