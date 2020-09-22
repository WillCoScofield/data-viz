import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartPageComponent } from './pages/chart-page/chart-page.component';
import { D3PageComponent } from './pages/d3-page/d3-page.component';
import { PlotlyPageComponent } from './pages/plotly-page/plotly-page.component';


const routes: Routes = [
  {
    path: 'plotly',
    component: PlotlyPageComponent
  },
  {
    path: 'chart',
    component: ChartPageComponent
  },
  {
    path: 'd3',
    component: D3PageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
