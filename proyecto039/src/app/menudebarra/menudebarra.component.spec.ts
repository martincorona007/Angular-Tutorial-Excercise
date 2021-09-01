import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenudebarraComponent } from './menudebarra.component';

describe('MenudebarraComponent', () => {
  let component: MenudebarraComponent;
  let fixture: ComponentFixture<MenudebarraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenudebarraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenudebarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
