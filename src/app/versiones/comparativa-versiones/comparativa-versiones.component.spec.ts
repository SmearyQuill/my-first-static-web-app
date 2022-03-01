import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparativaVersionesComponent } from './comparativa-versiones.component';

describe('ComparativaVersionesComponent', () => {
  let component: ComparativaVersionesComponent;
  let fixture: ComponentFixture<ComparativaVersionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparativaVersionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparativaVersionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
