import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextoExcelComponent } from './contexto-excel.component';

describe('ContextoExcelComponent', () => {
  let component: ContextoExcelComponent;
  let fixture: ComponentFixture<ContextoExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContextoExcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextoExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
