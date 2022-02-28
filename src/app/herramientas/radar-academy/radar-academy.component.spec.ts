import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarAcademyComponent } from './radar-academy.component';

describe('RadarAcademyComponent', () => {
  let component: RadarAcademyComponent;
  let fixture: ComponentFixture<RadarAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadarAcademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
