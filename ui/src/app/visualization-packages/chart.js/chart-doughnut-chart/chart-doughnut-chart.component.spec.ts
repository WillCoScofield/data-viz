import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartDoughnutChartComponent } from './chart-doughnut-chart.component';

describe('ChartDoughnutChartComponent', () => {
  let component: ChartDoughnutChartComponent;
  let fixture: ComponentFixture<ChartDoughnutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartDoughnutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartDoughnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
