import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlotlyViaCDNModule } from 'angular-plotly.js';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartPageComponent } from './pages/chart-page/chart-page.component';
import { D3PageComponent } from './pages/d3-page/d3-page.component';
import { PlotlyPageComponent } from './pages/plotly-page/plotly-page.component';
import { ChartBarChartComponent } from './visualization-packages/chart.js/chart-bar-chart/chart-bar-chart.component';
import { ChartBubbleChartComponent } from './visualization-packages/chart.js/chart-bubble-chart/chart-bubble-chart.component';
import { ChartDoughnutChartComponent } from './visualization-packages/chart.js/chart-doughnut-chart/chart-doughnut-chart.component';
import { ChartLineChartComponent } from './visualization-packages/chart.js/chart-line-chart/chart-line-chart.component';
import { ChartPieChartComponent } from './visualization-packages/chart.js/chart-pie-chart/chart-pie-chart.component';
import { ChartRadarChartComponent } from './visualization-packages/chart.js/chart-radar-chart/chart-radar-chart.component';
import { D3BarchartComponent } from './visualization-packages/d3.js/d3-barchart/d3-barchart.component';
import { D3CircleComponent } from './visualization-packages/d3.js/d3-circle/d3-circle.component';
import { PlotlyBarchartComponent } from './visualization-packages/plotly.js/plotly-barchart/plotly-barchart.component';
import { PlotlyBubblechartComponent } from './visualization-packages/plotly.js/plotly-bubblechart/plotly-bubblechart.component';
import { PlotlyMapComponent } from './visualization-packages/plotly.js/plotly-map/plotly-map.component';
import { PlotlyPiechartComponent } from './visualization-packages/plotly.js/plotly-piechart/plotly-piechart.component';
import { PlotlyScatterplotComponent } from './visualization-packages/plotly.js/plotly-scatterplot/plotly-scatterplot.component';
import { D3NetworkComponent } from './visualization-packages/d3.js/d3-network/d3-network.component';

// PlotlyModule.plotlyjs = PlotlyJS;
PlotlyViaCDNModule.plotlyVersion = '1.49.4';


@NgModule({
  declarations: [
    AppComponent,
    PlotlyBarchartComponent,
    ChartBarChartComponent,
    ChartBubbleChartComponent,
    ChartLineChartComponent,
    ChartPieChartComponent,
    ChartRadarChartComponent,
    ChartDoughnutChartComponent,
    PlotlyScatterplotComponent,
    PlotlyPageComponent,
    ChartPageComponent,
    PlotlyBubblechartComponent,
    PlotlyPiechartComponent,
    D3BarchartComponent,
    D3PageComponent,
    PlotlyMapComponent,
    D3CircleComponent,
    D3NetworkComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule,
    CommonModule,
    PlotlyViaCDNModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
