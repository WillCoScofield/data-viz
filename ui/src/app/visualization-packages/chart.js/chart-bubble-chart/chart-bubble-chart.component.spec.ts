import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartBubbleChartComponent } from './chart-bubble-chart.component';

describe('ChartBubbleChartComponent', () => {
  let component: ChartBubbleChartComponent;
  let fixture: ComponentFixture<ChartBubbleChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartBubbleChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartBubbleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
