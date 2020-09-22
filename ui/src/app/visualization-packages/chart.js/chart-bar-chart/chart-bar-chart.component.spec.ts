import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBarChartComponent } from './chart-bar-chart.component';

describe('ChartBarChartComponent', () => {
  let component: ChartBarChartComponent;
  let fixture: ComponentFixture<ChartBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
