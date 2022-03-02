import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificacionAcademyComponent } from './certificacion-academy.component';

describe('CertificacionAcademyComponent', () => {
  let component: CertificacionAcademyComponent;
  let fixture: ComponentFixture<CertificacionAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificacionAcademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificacionAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
