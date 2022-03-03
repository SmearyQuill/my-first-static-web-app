import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerResultadosComponent } from './banner-resultados.component';

describe('BannerResultadosComponent', () => {
  let component: BannerResultadosComponent;
  let fixture: ComponentFixture<BannerResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerResultadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
