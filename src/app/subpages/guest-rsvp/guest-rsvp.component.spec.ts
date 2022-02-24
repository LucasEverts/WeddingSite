import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestRsvpComponent } from './guest-rsvp.component';

describe('GuestRsvpComponent', () => {
  let component: GuestRsvpComponent;
  let fixture: ComponentFixture<GuestRsvpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestRsvpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestRsvpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
