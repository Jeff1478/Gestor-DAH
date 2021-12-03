import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagDetalleLiteSitioComponent } from './pag-detalle-lite-sitio.component';

describe('PagDetalleLiteSitioComponent', () => {
  let component: PagDetalleLiteSitioComponent;
  let fixture: ComponentFixture<PagDetalleLiteSitioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagDetalleLiteSitioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagDetalleLiteSitioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
