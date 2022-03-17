import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimoniosCarouselComponent } from './testimonios-carousel.component';

describe('TestimoniosCarouselComponent', () => {
  let component: TestimoniosCarouselComponent;
  let fixture: ComponentFixture<TestimoniosCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestimoniosCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimoniosCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
