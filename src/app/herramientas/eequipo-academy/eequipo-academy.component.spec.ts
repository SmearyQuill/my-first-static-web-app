import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EequipoAcademyComponent } from './eequipo-academy.component';

describe('EequipoAcademyComponent', () => {
  let component: EequipoAcademyComponent;
  let fixture: ComponentFixture<EequipoAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EequipoAcademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EequipoAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
