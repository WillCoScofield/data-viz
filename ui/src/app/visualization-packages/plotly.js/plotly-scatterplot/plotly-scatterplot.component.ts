import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plotly-scatterplot',
  templateUrl: './plotly-scatterplot.component.html',
  styleUrls: ['./plotly-scatterplot.component.scss']
})
export class PlotlyScatterplotComponent implements OnInit {
  public graph = {
    data: [
      {
        x: [1, 2, 3],
        y: [2, 6, 3],
        type: 'scatter',
        marker: { color: 'red' }
      },
      {
        x: [17, 2, 33],
        y: [2, 15, 3],
        type: 'scatter',
        marker: {
          size: 15,
          color: 'blue'
        }

      },
      {
        x: [13, 5, 8],
        y: [20, 31, 4],
        type: 'scatter',
        marker: {
          size: 30,
          color: 'green'
        }

      }
    ],
    layout: { height: 400, title: 'Scatter Plot / Line+Scatter Plot' }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
