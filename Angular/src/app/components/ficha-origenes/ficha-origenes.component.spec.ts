import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaOrigenesComponent } from './ficha-origenes.component';

describe('FichaOrigenesComponent', () => {
  let component: FichaOrigenesComponent;
  let fixture: ComponentFixture<FichaOrigenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaOrigenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaOrigenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
