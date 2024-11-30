import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupOrigenesComponent } from './popup-origenes.component';

describe('PopupOrigenesComponent', () => {
  let component: PopupOrigenesComponent;
  let fixture: ComponentFixture<PopupOrigenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupOrigenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupOrigenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
