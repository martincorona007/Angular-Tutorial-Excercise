import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UruguayComponent } from './uruguay.component';

describe('UruguayComponent', () => {
  let component: UruguayComponent;
  let fixture: ComponentFixture<UruguayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UruguayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UruguayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
