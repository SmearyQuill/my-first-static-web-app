import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarLiteComponent } from './radar-lite.component';

describe('RadarLiteComponent', () => {
  let component: RadarLiteComponent;
  let fixture: ComponentFixture<RadarLiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadarLiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarLiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
