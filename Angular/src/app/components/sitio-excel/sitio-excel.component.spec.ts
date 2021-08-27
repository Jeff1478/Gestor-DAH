import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitioExcelComponent } from './sitio-excel.component';

describe('SitioExcelComponent', () => {
  let component: SitioExcelComponent;
  let fixture: ComponentFixture<SitioExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitioExcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SitioExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
