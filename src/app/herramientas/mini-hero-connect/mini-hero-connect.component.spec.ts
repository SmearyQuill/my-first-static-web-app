import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniHeroConnectComponent } from './mini-hero-connect.component';

describe('MiniHeroConnectComponent', () => {
  let component: MiniHeroConnectComponent;
  let fixture: ComponentFixture<MiniHeroConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniHeroConnectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniHeroConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
