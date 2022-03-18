import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFuncionesComponent } from './app-funciones.component';

describe('AppFuncionesComponent', () => {
  let component: AppFuncionesComponent;
  let fixture: ComponentFixture<AppFuncionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppFuncionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFuncionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
