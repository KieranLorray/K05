import { Component } from '@angular/core';
import { ChartComponent } from '../chart/chart.component';

@Component({
  selector: 'app-summary',
  standalone: true,
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css'],
  imports: [ChartComponent]
})
export class SummaryComponent {
}
