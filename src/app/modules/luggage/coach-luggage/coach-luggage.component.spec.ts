import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachLuggageComponent } from './coach-luggage.component';

describe('CoachLuggageComponent', () => {
  let component: CoachLuggageComponent;
  let fixture: ComponentFixture<CoachLuggageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachLuggageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachLuggageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
