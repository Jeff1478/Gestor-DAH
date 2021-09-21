import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitioDetalleComponent } from './sitio-detalle.component';

describe('SitioDetalleComponent', () => {
  let component: SitioDetalleComponent;
  let fixture: ComponentFixture<SitioDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitioDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitioDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
