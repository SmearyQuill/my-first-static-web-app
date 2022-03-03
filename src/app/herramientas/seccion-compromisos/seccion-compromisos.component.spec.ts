import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionCompromisosComponent } from './seccion-compromisos.component';

describe('SeccionCompromisosComponent', () => {
  let component: SeccionCompromisosComponent;
  let fixture: ComponentFixture<SeccionCompromisosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionCompromisosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionCompromisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
