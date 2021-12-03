import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroOrigenesComponent } from './registro-origenes.component';

describe('RegistroOrigenesComponent', () => {
  let component: RegistroOrigenesComponent;
  let fixture: ComponentFixture<RegistroOrigenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroOrigenesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroOrigenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
