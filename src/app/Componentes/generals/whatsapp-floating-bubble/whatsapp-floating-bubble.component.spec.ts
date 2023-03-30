import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappFloatingBubbleComponent } from './whatsapp-floating-bubble.component';

describe('WhatsappFloatingBubbleComponent', () => {
  let component: WhatsappFloatingBubbleComponent;
  let fixture: ComponentFixture<WhatsappFloatingBubbleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsappFloatingBubbleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatsappFloatingBubbleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
