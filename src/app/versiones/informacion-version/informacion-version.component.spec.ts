import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionVersionComponent } from './informacion-version.component';

describe('InformacionVersionComponent', () => {
  let component: InformacionVersionComponent;
  let fixture: ComponentFixture<InformacionVersionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionVersionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacionVersionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
