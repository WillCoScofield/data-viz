import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartRadarChartComponent } from './chart-radar-chart.component';

describe('ChartRadarChartComponent', () => {
  let component: ChartRadarChartComponent;
  let fixture: ComponentFixture<ChartRadarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartRadarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartRadarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
