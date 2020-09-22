import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotlyBubblechartComponent } from './plotly-bubblechart.component';

describe('PlotlyBubblechartComponent', () => {
  let component: PlotlyBubblechartComponent;
  let fixture: ComponentFixture<PlotlyBubblechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotlyBubblechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotlyBubblechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
