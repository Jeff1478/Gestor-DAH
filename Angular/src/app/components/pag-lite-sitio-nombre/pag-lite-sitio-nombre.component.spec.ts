import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagLiteSitioNombreComponent } from './pag-lite-sitio-nombre.component';

describe('PagLiteSitioNombreComponent', () => {
  let component: PagLiteSitioNombreComponent;
  let fixture: ComponentFixture<PagLiteSitioNombreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagLiteSitioNombreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagLiteSitioNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
