import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLineChartComponent } from './chart-line-chart.component';

describe('ChartLineChartComponent', () => {
  let component: ChartLineChartComponent;
  let fixture: ComponentFixture<ChartLineChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartLineChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
