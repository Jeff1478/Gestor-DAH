import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiticaDetalleComponent } from './litica-detalle.component';

describe('LiticaDetalleComponent', () => {
  let component: LiticaDetalleComponent;
  let fixture: ComponentFixture<LiticaDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiticaDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiticaDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
