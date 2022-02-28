import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroVersionesComponent } from './hero-versiones.component';

describe('HeroVersionesComponent', () => {
  let component: HeroVersionesComponent;
  let fixture: ComponentFixture<HeroVersionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroVersionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroVersionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
