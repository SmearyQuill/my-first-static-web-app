import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapacitacionAcademyComponent } from './capacitacion-academy.component';

describe('CapacitacionAcademyComponent', () => {
  let component: CapacitacionAcademyComponent;
  let fixture: ComponentFixture<CapacitacionAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapacitacionAcademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapacitacionAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
