import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaDeTrabajoCarouselComponent } from './mesa-de-trabajo-carousel.component';

describe('MesaDeTrabajoCarouselComponent', () => {
  let component: MesaDeTrabajoCarouselComponent;
  let fixture: ComponentFixture<MesaDeTrabajoCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesaDeTrabajoCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaDeTrabajoCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
