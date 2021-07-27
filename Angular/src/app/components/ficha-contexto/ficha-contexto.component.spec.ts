import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaContextoComponent } from './ficha-contexto.component';

describe('FichaContextoComponent', () => {
  let component: FichaContextoComponent;
  let fixture: ComponentFixture<FichaContextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FichaContextoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaContextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
