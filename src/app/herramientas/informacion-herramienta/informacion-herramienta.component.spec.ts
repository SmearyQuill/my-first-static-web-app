import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionHerramientaComponent } from './informacion-herramienta.component';

describe('InformacionHerramientaComponent', () => {
  let component: InformacionHerramientaComponent;
  let fixture: ComponentFixture<InformacionHerramientaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionHerramientaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionHerramientaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
