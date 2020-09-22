import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotlyPageComponent } from './plotly-page.component';

describe('PlotlyPageComponent', () => {
  let component: PlotlyPageComponent;
  let fixture: ComponentFixture<PlotlyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotlyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotlyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
