import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pais1Component } from './pais1.component';

describe('Pais1Component', () => {
  let component: Pais1Component;
  let fixture: ComponentFixture<Pais1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pais1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Pais1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
