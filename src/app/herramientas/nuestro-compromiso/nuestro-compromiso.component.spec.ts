import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestroCompromisoComponent } from './nuestro-compromiso.component';

describe('NuestroCompromisoComponent', () => {
  let component: NuestroCompromisoComponent;
  let fixture: ComponentFixture<NuestroCompromisoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuestroCompromisoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NuestroCompromisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
