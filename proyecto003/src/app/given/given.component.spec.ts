import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GivenComponent } from './given.component';

describe('GivenComponent', () => {
  let component: GivenComponent;
  let fixture: ComponentFixture<GivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GivenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
