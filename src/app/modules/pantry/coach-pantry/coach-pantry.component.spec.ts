import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachPantryComponent } from './coach-pantry.component';

describe('CoachPantryComponent', () => {
  let component: CoachPantryComponent;
  let fixture: ComponentFixture<CoachPantryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachPantryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachPantryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
