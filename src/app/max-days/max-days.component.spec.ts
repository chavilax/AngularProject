import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxDaysComponent } from './max-days.component';

describe('MaxDaysComponent', () => {
  let component: MaxDaysComponent;
  let fixture: ComponentFixture<MaxDaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaxDaysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
