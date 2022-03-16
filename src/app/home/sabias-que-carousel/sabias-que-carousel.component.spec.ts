import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiasQueCarouselComponent } from './sabias-que-carousel.component';

describe('SabiasQueCarouselComponent', () => {
  let component: SabiasQueCarouselComponent;
  let fixture: ComponentFixture<SabiasQueCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabiasQueCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SabiasQueCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
