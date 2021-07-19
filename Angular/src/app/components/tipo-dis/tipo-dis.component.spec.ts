import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoDisComponent } from './tipo-dis.component';

describe('TipoDisComponent', () => {
  let component: TipoDisComponent;
  let fixture: ComponentFixture<TipoDisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoDisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoDisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
