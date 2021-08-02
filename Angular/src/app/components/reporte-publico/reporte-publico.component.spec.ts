import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportePublicoComponent } from './reporte-publico.component';

describe('ReportePublicoComponent', () => {
  let component: ReportePublicoComponent;
  let fixture: ComponentFixture<ReportePublicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportePublicoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportePublicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
