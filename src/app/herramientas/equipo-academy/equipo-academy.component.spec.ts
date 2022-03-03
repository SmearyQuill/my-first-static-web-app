import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipoAcademyComponent } from './equipo-academy.component';

describe('EquipoAcademyComponent', () => {
  let component: EquipoAcademyComponent;
  let fixture: ComponentFixture<EquipoAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipoAcademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipoAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
