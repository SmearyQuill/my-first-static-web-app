import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionAndroidComponent } from './seccion-android.component';

describe('SeccionAndroidComponent', () => {
  let component: SeccionAndroidComponent;
  let fixture: ComponentFixture<SeccionAndroidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionAndroidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionAndroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
