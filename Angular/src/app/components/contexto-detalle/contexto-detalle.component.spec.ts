import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextoDetalleComponent } from './contexto-detalle.component';

describe('ContextoDetalleComponent', () => {
  let component: ContextoDetalleComponent;
  let fixture: ComponentFixture<ContextoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContextoDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
