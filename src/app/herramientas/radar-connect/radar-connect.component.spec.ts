import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarConnectComponent } from './radar-connect.component';

describe('RadarConnectComponent', () => {
  let component: RadarConnectComponent;
  let fixture: ComponentFixture<RadarConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadarConnectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
