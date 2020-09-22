import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plotly-map',
  templateUrl: './plotly-map.component.html',
  styleUrls: ['./plotly-map.component.scss']
})
export class PlotlyMapComponent implements OnInit {
  mapGeoData: any = {
    scope: 'usa',
    resolution: 50,
    projection: {
      type: 'albers usa',
    },
    showland: true,
    landcolor: 'rgb(83, 177, 163)',
    subunitwidth: 1,
    countrywidth: 1,
    subunitcolor: 'rgb(255,255,255)',
    countrycolor: 'rgb(255,255,255)',
  };

  mapDataObj = [
    {
      type: 'scattergeo',
      locationmode: 'USA-states',
      mode: 'markers',
      lat: [38.26, 41.27, 38.78, 36.15, 32.12, 47],
      lon: [-85.79, -72.96, -84.602, -86.78, -85, -120],
      marker: {
        size: 25,
        opacity: 0.9,
        autocolorscale: false,
        symbol: 'cross',
        color: 'rgb(40, 108, 226)',
        line: {
          width: 1,
          color: '#37475A',
        },
      },
    },
  ];

  graph = {
    data: this.mapDataObj,
    layout: {
      autosize: true,
      geo: this.mapGeoData,
      margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0,
        pad: 0,
      },
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
