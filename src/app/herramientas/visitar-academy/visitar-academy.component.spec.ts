import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitarAcademyComponent } from './visitar-academy.component';

describe('VisitarAcademyComponent', () => {
  let component: VisitarAcademyComponent;
  let fixture: ComponentFixture<VisitarAcademyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitarAcademyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitarAcademyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
