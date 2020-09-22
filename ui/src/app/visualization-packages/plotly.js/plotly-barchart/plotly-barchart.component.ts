import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plotly-barchart',
  templateUrl: './plotly-barchart.component.html',
  styleUrls: ['./plotly-barchart.component.scss']
})
export class PlotlyBarchartComponent implements OnInit {
  public graph = {
    data: [
      { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
    ],
    layout: { height: 375, title: 'Bar Chart' }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
