import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspanaComponent } from './espana.component';

describe('EspanaComponent', () => {
  let component: EspanaComponent;
  let fixture: ComponentFixture<EspanaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspanaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
