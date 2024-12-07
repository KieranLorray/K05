import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  private data = [
    { model_name: 'GPT-35', popularity_percentage: 79 },
    { model_name: 'ADA', popularity_percentage: 60 },
    { model_name: 'GPT-4o', popularity_percentage: 56 },
    { model_name: 'GPT-4', popularity_percentage: 55 },
    { model_name: 'DALL-E', popularity_percentage: 40 },
    { model_name: 'WHISPER', popularity_percentage: 14 },
    { model_name: 'CURIE', popularity_percentage: 6 },
    { model_name: 'LLAMA', popularity_percentage: 5 },
    { model_name: 'DAVINCI', popularity_percentage: 4 },
    { model_name: 'TEXT TO SPEECH', popularity_percentage: 2 }
  ];

  constructor() {}

  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    const svg = d3.select('svg');
    const margin = { top: 20, right: 30, bottom: 40, left: 100 };
    const width = +svg.attr('width') - margin.left - margin.right;
    const height = +svg.attr('height') - margin.top - margin.bottom;

    const chart = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // X-axis scale
    const x = d3
      .scaleLinear()
      .domain([0, d3.max(this.data, d => d.popularity_percentage)!])
      .range([0, width]);

    // Y-axis scale
    const y = d3
      .scaleBand()
      .domain(this.data.map(d => d.model_name))
      .range([0, height])
      .padding(0.1);

    // Add bars
    chart
      .append('g')
      .selectAll('rect')
      .data(this.data)
      .enter()
      .append('rect')
      .attr('x', 0)
      .attr('y', d => y(d.model_name)!)
      .attr('width', d => x(d.popularity_percentage)!)
      .attr('height', y.bandwidth())
      .attr('fill', '#3498db');

    // Add Y-axis labels
    chart
      .append('g')
      .call(d3.axisLeft(y));

    // Add X-axis labels
    chart
      .append('g')
      .attr('transform', `translate(0, ${height})`)
      .call(d3.axisBottom(x));
  }
}
