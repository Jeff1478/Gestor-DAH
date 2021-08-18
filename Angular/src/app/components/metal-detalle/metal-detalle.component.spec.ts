import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetalDetalleComponent } from './metal-detalle.component';

describe('MetalDetalleComponent', () => {
  let component: MetalDetalleComponent;
  let fixture: ComponentFixture<MetalDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetalDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetalDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
