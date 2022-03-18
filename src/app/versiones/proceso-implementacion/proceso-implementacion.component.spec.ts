import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesoImplementacionComponent } from './proceso-implementacion.component';

describe('ProcesoImplementacionComponent', () => {
  let component: ProcesoImplementacionComponent;
  let fixture: ComponentFixture<ProcesoImplementacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesoImplementacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesoImplementacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
