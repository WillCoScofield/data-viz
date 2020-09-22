import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plotly-bubblechart',
  templateUrl: './plotly-bubblechart.component.html',
  styleUrls: ['./plotly-bubblechart.component.scss']
})
export class PlotlyBubblechartComponent implements OnInit {
  public trace1 = {
    x: [1, 2, 3, 4],
    y: [10, 11, 12, 13],
    mode: 'markers',
    marker: {
      size: [40, 60, 80, 100],
      color: 'pink',
      opacity: 1
    }
  };
  public graph = {
    data: [this.trace1],
    layout: {
      title: 'Bubble Chart',
      showlegend: false,
      height: 400
    },
  };

  constructor() { }

  ngOnInit(): void {
  }

}
