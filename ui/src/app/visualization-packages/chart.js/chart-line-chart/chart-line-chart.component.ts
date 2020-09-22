import { ChartDataSets, ChartOptions } from 'chart.js';
import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-chart-line-chart',
  templateUrl: './chart-line-chart.component.html',
  styleUrls: ['./chart-line-chart.component.scss']
})
export class ChartLineChartComponent implements OnInit {

  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  ];

  lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June'];

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  ngOnInit(): void {

  }

}
