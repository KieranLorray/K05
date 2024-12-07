import { Component } from '@angular/core';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  imports: [ChartComponent]
})
export class ReportsComponent {
}
