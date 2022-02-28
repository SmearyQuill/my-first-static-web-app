import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarControlTotalComponent } from './radar-control-total.component';

describe('RadarControlTotalComponent', () => {
  let component: RadarControlTotalComponent;
  let fixture: ComponentFixture<RadarControlTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadarControlTotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarControlTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
