import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarConsultingComponent } from './radar-consulting.component';

describe('RadarConsultingComponent', () => {
  let component: RadarConsultingComponent;
  let fixture: ComponentFixture<RadarConsultingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadarConsultingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
