import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-chart-doughnut-chart',
  templateUrl: './chart-doughnut-chart.component.html',
  styleUrls: ['./chart-doughnut-chart.component.scss']
})
export class ChartDoughnutChartComponent implements OnInit {

  doughnutChartLabels = ['BMW', 'Ford', 'Tesla'];
  doughnutChartData = [
    [55, 25, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
