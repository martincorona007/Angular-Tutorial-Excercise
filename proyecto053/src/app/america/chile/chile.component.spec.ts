import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChileComponent } from './chile.component';

describe('ChileComponent', () => {
  let component: ChileComponent;
  let fixture: ComponentFixture<ChileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
