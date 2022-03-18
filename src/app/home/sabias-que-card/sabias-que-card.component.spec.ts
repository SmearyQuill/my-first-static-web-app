import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SabiasQueCardComponent } from './sabias-que-card.component';

describe('SabiasQueCardComponent', () => {
  let component: SabiasQueCardComponent;
  let fixture: ComponentFixture<SabiasQueCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SabiasQueCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SabiasQueCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
